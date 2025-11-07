import { NextRequest, NextResponse } from 'next/server';

// In-memory message queue (in production, use Redis or a database)
// This is shared across the application via module singleton
const messageQueues: Map<string, Array<{ id: number; text: string; sender: string; timestamp: string }>> = new Map();

// Export the queue so it can be imported by other routes
export { messageQueues };

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('sessionId');

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
  }

  // Get messages for this session
  const messages = messageQueues.get(sessionId) || [];
  
  // Clear the queue after retrieval
  messageQueues.delete(sessionId);

  return NextResponse.json({ messages });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, message, sender } = body;

    if (!sessionId || !message) {
      return NextResponse.json({ error: 'Session ID and message required' }, { status: 400 });
    }

    // Add message to queue
    if (!messageQueues.has(sessionId)) {
      messageQueues.set(sessionId, []);
    }

    const queue = messageQueues.get(sessionId)!;
    queue.push({
      id: Date.now(),
      text: message,
      sender: sender || 'bot',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
