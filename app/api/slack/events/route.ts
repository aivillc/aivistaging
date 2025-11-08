import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Verify Slack request signature for security
function verifySlackSignature(
  body: string,
  timestamp: string,
  signature: string,
  signingSecret: string
): boolean {
  const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 60 * 5;
  
  if (parseInt(timestamp) < fiveMinutesAgo) {
    console.log('⚠️ Slack request is too old');
    return false;
  }

  const sigBasestring = `v0:${timestamp}:${body}`;
  const mySignature = 'v0=' + crypto
    .createHmac('sha256', signingSecret)
    .update(sigBasestring)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(mySignature),
    Buffer.from(signature)
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const payload = JSON.parse(body);

    if (process.env.NODE_ENV === 'development') {
      console.log('📨 Slack event received:', payload.type);
    }

    // Handle Slack URL verification challenge
    if (payload.type === 'url_verification') {
      console.log('✅ Slack URL verification challenge received');
      return NextResponse.json({ challenge: payload.challenge });
    }

    // Verify request is from Slack (security check)
    const slackSignature = request.headers.get('x-slack-signature');
    const slackTimestamp = request.headers.get('x-slack-request-timestamp');
    const signingSecret = process.env.SLACK_SIGNING_SECRET;

    if (!signingSecret) {
      console.error('❌ SLACK_SIGNING_SECRET not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (slackSignature && slackTimestamp) {
      const isValid = verifySlackSignature(body, slackTimestamp, slackSignature, signingSecret);
      if (!isValid) {
        console.error('❌ Invalid Slack signature');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    }

    // Handle message events
    if (payload.type === 'event_callback' && payload.event) {
      const event = payload.event;

      // Ignore bot messages to prevent loops
      if (event.bot_id || event.subtype === 'bot_message') {
        return NextResponse.json({ ok: true });
      }

      // Ignore channel join/leave messages (subtype: channel_join, channel_leave)
      if (event.subtype === 'channel_join' || event.subtype === 'channel_leave') {
        console.log('🚫 Ignoring channel join/leave message');
        return NextResponse.json({ ok: true });
      }

      // Handle channel messages
      if (event.type === 'message' && event.channel && event.text) {
        console.log('💬 Message from Slack:', {
          channel: event.channel,
          user: event.user,
          text: event.text,
          subtype: event.subtype,
        });

        // Filter out Slack system messages like "<@U09Q7M0AETV> has joined the channel"
        if (event.text.includes('has joined the channel') || 
            event.text.includes('has left the channel') ||
            event.text.startsWith('<@') && event.text.includes('> has')) {
          console.log('🚫 Ignoring Slack system message');
          return NextResponse.json({ ok: true });
        }

        // Get channel info to extract the channel name
        const botToken = process.env.SLACK_BOT_TOKEN;
        
        if (!botToken) {
          console.error('❌ SLACK_BOT_TOKEN not configured');
          return NextResponse.json({ ok: true });
        }

        try {
          // Fetch channel info from Slack API
          const channelInfoResponse = await fetch(
            `https://slack.com/api/conversations.info?channel=${event.channel}`,
            {
              headers: {
                'Authorization': `Bearer ${botToken}`,
                'Content-Type': 'application/json',
              },
            }
          );

          const channelInfo = await channelInfoResponse.json();
          
          if (!channelInfo.ok) {
            console.error('❌ Failed to get channel info:', channelInfo.error);
            return NextResponse.json({ ok: true });
          }

          const channelName = channelInfo.channel.name;
          console.log('📝 Channel name:', channelName);

          // Extract sessionId from channel name (format: aivi-session-{sessionId})
          const sessionIdMatch = channelName.match(/aivi-session-(.+)/);
          
          if (sessionIdMatch) {
            const sessionId = sessionIdMatch[1];
            console.log('🔑 Extracted sessionId:', sessionId);
            
            // Check if agent is requesting to delete the channel
            const messageText = event.text.toLowerCase();
            if (messageText.includes('aivi delete this channel')) {
              console.log('🗑️ Agent requested channel deletion');
              
              const botToken = process.env.SLACK_BOT_TOKEN;
              
              // Delete the channel
              const deleteResponse = await fetch('https://slack.com/api/conversations.archive', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${botToken}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  channel: event.channel,
                }),
              });

              const deleteData = await deleteResponse.json();
              
              if (deleteData.ok) {
                console.log('✅ Channel archived successfully');
                
                // Send a final message to the user
                const baseUrl = process.env.VERCEL_URL 
                  ? `https://${process.env.VERCEL_URL}`
                  : 'http://localhost:3000';

                const closedMessagePayload = {
                  sessionId,
                  message: '👋 The live agent has closed this conversation. Thank you for chatting with us!',
                  sender: 'bot',
                  timestamp: Date.now(),
                };

                await fetch(`${baseUrl}/api/chat/messages`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(closedMessagePayload),
                });

                // Disconnect the agent
                const disconnectPayload = {
                  sessionId,
                  action: 'disconnect_agent',
                  channelId: event.channel,
                };

                await fetch(`${baseUrl}/api/slack/disconnect-agent`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(disconnectPayload),
                });

                console.log('✅ Channel deleted and agent disconnected');
              } else {
                console.error('❌ Failed to archive channel:', deleteData.error);
              }
              
              return NextResponse.json({ ok: true });
            }
            
            // Check if agent is requesting to restore AI assistant
            if (messageText.includes('assistant')) {
              console.log('🤖 Agent requested AI assistant restoration');
              
              // First, send the agent's message (with "assistant" keyword) to chatbot
              const agentMessagePayload = {
                sessionId,
                message: event.text,
                sender: 'agent',
                slackUserId: event.user,
                timestamp: Date.now(),
              };

              const baseUrl = process.env.VERCEL_URL 
                ? `https://${process.env.VERCEL_URL}`
                : 'http://localhost:3000';

              // Send the agent's message first
              await fetch(`${baseUrl}/api/chat/messages`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(agentMessagePayload),
              });
              
              // Send system message to chatbot
              const systemMessagePayload = {
                sessionId,
                message: '🤖 AI Assistant has been restored. The live agent has disconnected.',
                sender: 'bot',
                timestamp: Date.now(),
              };
              
              // Send system message
              await fetch(`${baseUrl}/api/chat/messages`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(systemMessagePayload),
              });

              // Send disconnect signal
              const disconnectPayload = {
                sessionId,
                action: 'disconnect_agent',
                channelId: event.channel,
              };

              await fetch(`${baseUrl}/api/slack/disconnect-agent`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(disconnectPayload),
              });

              console.log('✅ Agent disconnected, AI assistant restored');
              return NextResponse.json({ ok: true });
            }
            
            // Post message to chatbot via messages API
            const messagePayload = {
              sessionId,
              message: event.text,
              sender: 'agent',
              slackUserId: event.user,
              timestamp: Date.now(),
            };

            // Send to messages endpoint
            const baseUrl = process.env.VERCEL_URL 
              ? `https://${process.env.VERCEL_URL}`
              : 'http://localhost:3000';

            console.log('📤 Forwarding to messages API:', baseUrl);

            const response = await fetch(`${baseUrl}/api/chat/messages`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(messagePayload),
            });

            if (response.ok) {
              console.log('✅ Message forwarded to chatbot for session:', sessionId);
            } else {
              const errorText = await response.text();
              console.error('❌ Failed to forward message. Status:', response.status, 'Error:', errorText);
            }
          } else {
            console.log('⚠️ Channel name does not match expected pattern:', channelName);
          }
        } catch (error) {
          console.error('❌ Error processing Slack message:', error);
        }
      }
    }

    // Acknowledge receipt
    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error('❌ Slack events error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'Slack events endpoint active',
    timestamp: new Date().toISOString(),
  });
}
