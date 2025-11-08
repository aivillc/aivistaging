import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { channelId, message, sessionId } = await request.json();

    if (!channelId || !message) {
      return NextResponse.json({ error: 'channelId and message are required' }, { status: 400 });
    }

    const slackBotToken = process.env.SLACK_BOT_TOKEN;
    if (!slackBotToken) {
      console.error('❌ SLACK_BOT_TOKEN not configured');
      return NextResponse.json({ error: 'Slack not configured' }, { status: 500 });
    }

    // Format message with user indicator
    const formattedMessage = `👤 *User:* ${message}`;

    // Post message to Slack channel
    const response = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${slackBotToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: channelId,
        text: formattedMessage,
        mrkdwn: true,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error('❌ Failed to post to Slack:', data.error);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('✅ Message posted to Slack channel:', channelId);
    }

    return NextResponse.json({
      success: true,
      messageTs: data.ts,
    });

  } catch (error) {
    console.error('❌ Error posting to Slack:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
