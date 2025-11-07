import { NextRequest, NextResponse } from 'next/server';
import { getMessages, clearMessages, addMessage } from '@/lib/messageStore';
import { generateMessageId } from '@/lib/chatConfig';

if (process.env.NODE_ENV === 'development') {
  console.log('[Messages API] Route loaded');
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('sessionId');

  if (process.env.NODE_ENV === 'development') {
    console.log('[Messages API GET] Request received. SessionId:', sessionId);
  }

  if (!sessionId) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Messages API GET] No sessionId provided');
    }
    return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
  }

  // Get messages for this session from file storage
  const messages = getMessages(sessionId);
  
  if (process.env.NODE_ENV === 'development') {
    console.log('[Messages API GET] Found', messages.length, 'messages for session:', sessionId);
    console.log('[Messages API GET] Messages:', messages);
  }
  
  // Clear the messages after retrieval
  if (messages.length > 0) {
    clearMessages(sessionId);
    if (process.env.NODE_ENV === 'development') {
      console.log('[Messages API GET] Cleared messages for session:', sessionId);
    }
  }

  return NextResponse.json({ messages });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, message, sender } = body;

    if (process.env.NODE_ENV === 'development') {
      console.log('[Messages API POST] ====== NEW MESSAGE ======');
      console.log('[Messages API POST] SessionId:', sessionId);
      console.log('[Messages API POST] Message:', message);
      console.log('[Messages API POST] Sender:', sender);
    }

    if (!sessionId || !message) {
      if (process.env.NODE_ENV === 'development') {
        console.error('[Messages API POST] Missing required fields');
      }
      return NextResponse.json({ error: 'Session ID and message required' }, { status: 400 });
    }

    // Add message to storage
    const messageData = {
      id: generateMessageId(),
      text: message,
      sender: sender || 'bot',
      timestamp: new Date().toISOString(),
    };
    
    addMessage(sessionId, messageData);

    if (process.env.NODE_ENV === 'development') {
      console.log('[Messages API POST] ✅ Message saved!');
      console.log('[Messages API POST] Message data:', messageData);
    }

    return NextResponse.json({ 
      success: true,
      messageId: messageData.id
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Messages API POST] Error processing message:', error);
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
