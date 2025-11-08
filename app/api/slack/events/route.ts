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

      // Handle channel messages
      if (event.type === 'message' && event.channel && event.text) {
        if (process.env.NODE_ENV === 'development') {
          console.log('💬 Message from Slack:', {
            channel: event.channel,
            user: event.user,
            text: event.text,
          });
        }

        // Extract sessionId from channel name (format: aivi-session-{sessionId})
        const channelName = event.channel_name || '';
        const sessionIdMatch = channelName.match(/aivi-session-(.+)/);
        
        if (sessionIdMatch) {
          const sessionId = sessionIdMatch[1];
          
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

          try {
            const response = await fetch(`${baseUrl}/api/chat/messages`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(messagePayload),
            });

            if (response.ok) {
              console.log('✅ Message forwarded to chatbot:', sessionId);
            } else {
              console.error('❌ Failed to forward message:', await response.text());
            }
          } catch (error) {
            console.error('❌ Error forwarding message to chatbot:', error);
          }
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
