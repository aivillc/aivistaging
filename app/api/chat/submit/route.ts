import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/chat/submit
 * Submit each chat message individually to prospects endpoint
 * 
 * Body:
 * {
 *   sessionId: string,
 *   messages: Array<{ text: string, sender: string, timestamp: string }>,
 *   userInfo?: { email?: string, name?: string, phone?: string }
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, messages, userInfo } = body;

    console.log('Submit API called with:', { sessionId, messageCount: messages?.length });

    if (!sessionId || !messages || !Array.isArray(messages)) {
      console.error('Invalid request:', { sessionId, messages });
      return NextResponse.json(
        { error: 'sessionId and messages array are required' },
        { status: 400 }
      );
    }

    console.log(`Sending ${messages.length} messages to prospects webhook...`);

    // Send each message individually to the prospects webhook
    const webhookPromises = messages.map(async (msg: any, index: number) => {
      const messageData = {
        source: 'Website Chat',
        sessionId,
        message: msg.text,
        sender: msg.sender,
        timestamp: msg.timestamp,
        ...userInfo, // Include any user info if provided
      };

      console.log(`Sending message ${index + 1}/${messages.length}:`, messageData);

      const response = await fetch('https://stage.aivi.io/webhook/prospects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      console.log(`Message ${index + 1} response status:`, response.status);
      return response;
    });

    // Wait for all webhook calls to complete
    const results = await Promise.allSettled(webhookPromises);

    // Check if any failed
    const failedCount = results.filter(r => r.status === 'rejected').length;
    if (failedCount > 0) {
      console.error(`${failedCount} messages failed to send to webhook`);
      return NextResponse.json(
        { 
          error: `${failedCount} messages failed to send`, 
          success: false,
          failedCount,
          totalCount: messages.length
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `${messages.length} messages submitted successfully`,
      messageCount: messages.length,
    });
  } catch (error) {
    console.error('Error submitting chat:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
