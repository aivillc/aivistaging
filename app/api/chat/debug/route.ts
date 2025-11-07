import { NextRequest, NextResponse } from 'next/server';
import { getMessages } from '@/lib/messageStore';

/**
 * Debug endpoint to check message queue state
 * Note: Only shows messages for specific session, not all sessions (in-memory limitation)
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('sessionId');

  if (process.env.NODE_ENV === 'development') {
    console.log('[Debug API] Queue state requested for session:', sessionId);
  }

  if (sessionId) {
    const sessionMessages = getMessages(sessionId);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Debug API] Session ${sessionId}:`, sessionMessages);
    }
    
    return NextResponse.json({
      sessionId,
      messages: sessionMessages || [],
      messageCount: sessionMessages?.length || 0,
      note: 'Due to in-memory storage, only requested session visible'
    });
  }

  return NextResponse.json({ 
    error: 'Session ID required',
    usage: '/api/chat/debug?sessionId=YOUR_SESSION_ID'
  }, { status: 400 });
}
