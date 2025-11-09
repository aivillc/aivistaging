import { NextRequest, NextResponse } from 'next/server';
import { getSessionData } from '@/lib/sessionData';
import { createOrUpdateHubSpotContact } from '@/lib/hubspotService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, includeConversation, conversationTranscript, sessionData: providedSessionData } = body;

    if (!sessionId) {
      return NextResponse.json(
        { error: 'sessionId is required' },
        { status: 400 }
      );
    }

    console.log('📊 [HubSpot Sync] Syncing session:', sessionId);

    // Use provided session data (from client) or try to get from server memory
    let sessionData = providedSessionData || getSessionData(sessionId);
    
    if (!sessionData) {
      console.log('⚠️ [HubSpot Sync] Session data not found, skipping sync');
      return NextResponse.json(
        { 
          success: false,
          skipped: true,
          message: 'Session data not found - this is normal if no data has been collected yet' 
        },
        { status: 200 } // Return 200 instead of 404 to avoid console errors
      );
    }

    if (!sessionData.email) {
      console.log('⚠️ [HubSpot Sync] No email in session data, skipping sync');
      return NextResponse.json(
        { 
          success: false,
          skipped: true,
          message: 'Email required to sync to HubSpot - will sync once email is captured' 
        },
        { status: 200 }
      );
    }

    // Create or update contact in HubSpot
    const result = await createOrUpdateHubSpotContact(
      sessionData,
      sessionId,
      includeConversation ? conversationTranscript : undefined
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    console.log('✅ [HubSpot Sync] Contact synced successfully');

    return NextResponse.json({
      success: true,
      contactId: result.contactId,
      isNewContact: result.isNewContact,
      message: result.isNewContact 
        ? 'New contact created in HubSpot' 
        : 'Existing contact updated in HubSpot',
    });
  } catch (error) {
    console.error('❌ [HubSpot Sync] Error:', error);
    return NextResponse.json(
      { error: 'Failed to sync to HubSpot' },
      { status: 500 }
    );
  }
}

// Test endpoint
export async function GET() {
  return NextResponse.json({
    status: 'HubSpot sync endpoint is active',
    apiKeyConfigured: !!process.env.HUBSPOT_API_KEY,
  });
}
