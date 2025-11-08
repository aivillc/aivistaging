import { NextRequest, NextResponse } from 'next/server';
import { getMessages } from '@/lib/messageStore';

/**
 * POST endpoint to disconnect agent and restore AI assistant
 * 
 * This endpoint is called when an agent types "assistant" in Slack
 * to hand the conversation back to the AI assistant.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, channelId } = body;

    console.log('🔌 [Disconnect Agent] Request received');
    console.log('   SessionId:', sessionId);
    console.log('   ChannelId:', channelId);

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
    }

    // Get all messages to find the last user message
    const messages = getMessages(sessionId);
    console.log('📜 [Disconnect Agent] Found', messages.length, 'messages in queue');
    
    // Find the last message from the user
    let lastUserMessage = null;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].sender === 'user') {
        lastUserMessage = messages[i];
        break;
      }
    }

    if (lastUserMessage) {
      console.log('💬 [Disconnect Agent] Last user message found:', lastUserMessage.text);
      
      // Trigger AI assistant by sending to prospects webhook
      try {
        const webhookPayload = {
          source: 'Website Chat',
          sessionId,
          message: lastUserMessage.text,
          sender: 'user',
          timestamp: lastUserMessage.timestamp,
          agentHandoff: true, // Flag to indicate this is a handoff from agent to AI
        };

        console.log('📤 [Disconnect Agent] Sending to prospects webhook to trigger AI response');

        const response = await fetch('https://stage.aivi.io/webhook/prospects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload),
        });

        if (response.ok) {
          console.log('✅ [Disconnect Agent] AI assistant triggered successfully');
        } else {
          console.error('❌ [Disconnect Agent] Failed to trigger AI:', await response.text());
        }
      } catch (error) {
        console.error('❌ [Disconnect Agent] Error triggering AI:', error);
      }
    } else {
      console.log('⚠️ [Disconnect Agent] No user message found to trigger AI');
    }
    
    console.log('✅ [Disconnect Agent] Session marked for AI assistant restoration');

    return NextResponse.json({ 
      success: true,
      sessionId,
      message: 'Agent disconnected, AI assistant will handle future messages',
      aiTriggered: !!lastUserMessage
    });
  } catch (error) {
    console.error('❌ [Disconnect Agent] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET endpoint for documentation
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/slack/disconnect-agent',
    method: 'POST',
    description: 'Disconnect live agent and restore AI assistant',
    requiredFields: {
      sessionId: 'string - The session ID',
      channelId: 'string - The Slack channel ID'
    },
    usage: 'Called automatically when agent types "assistant" in Slack'
  });
}
