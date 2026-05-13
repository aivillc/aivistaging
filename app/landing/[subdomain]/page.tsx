import { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import LandingTemplate from '@/components/landing/LandingTemplate';

interface Props {
  params: Promise<{ subdomain: string }>;
}

// Inline everything — no external imports that could fail silently
async function getLandingConfig(subdomain: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  console.log(`[LANDING DEBUG] subdomain=${subdomain}`);
  console.log(`[LANDING DEBUG] SUPABASE_URL=${url ? url.substring(0, 30) + '...' : 'MISSING'}`);
  console.log(`[LANDING DEBUG] SERVICE_KEY=${key ? key.substring(0, 20) + '...' : 'MISSING'}`);

  if (!url || !key) {
    console.error(`[LANDING DEBUG] FATAL: Missing env vars. url=${!!url} key=${!!key}`);
    return { error: `Missing env vars: url=${!!url} key=${!!key}`, data: null };
  }

  try {
    const supabase = createClient(url, key, { auth: { persistSession: false } });

    console.log(`[LANDING DEBUG] Querying landing_pages where subdomain=${subdomain} and status=active`);

    const { data, error } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('subdomain', subdomain)
      .eq('status', 'active')
      .single();

    if (error) {
      console.error(`[LANDING DEBUG] Supabase error: code=${error.code} message=${error.message} details=${error.details}`);
      return { error: error.message, data: null };
    }

    if (!data) {
      console.log(`[LANDING DEBUG] No rows returned for subdomain=${subdomain}`);
      return { error: 'no rows', data: null };
    }

    console.log(`[LANDING DEBUG] SUCCESS: Found ${data.company_name} (id=${data.id})`);
    return { error: null, data };
  } catch (err: any) {
    console.error(`[LANDING DEBUG] Exception: ${err.message}`);
    return { error: err.message, data: null };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subdomain } = await params;
  const result = await getLandingConfig(subdomain);

  if (!result.data) {
    return { title: `Debug: ${result.error}` };
  }

  return {
    title: `${result.data.company_name} — Powered by AIVI`,
    description: result.data.ai_copy?.hero?.subheadline || `AI-powered customer engagement for ${result.data.company_name}`,
  };
}

export default async function LandingPage({ params }: Props) {
  const { subdomain } = await params;
  const result = await getLandingConfig(subdomain);

  // Instead of notFound(), render the error so we can SEE it
  if (!result.data) {
    return (
      <div style={{ padding: '40px', fontFamily: 'monospace', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: 'red' }}>Landing Page Debug</h1>
        <p><strong>Subdomain:</strong> {subdomain}</p>
        <p><strong>Error:</strong> {result.error}</p>
        <p><strong>SUPABASE_URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'MISSING'}</p>
        <p><strong>SERVICE_KEY:</strong> {process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET (length=' + process.env.SUPABASE_SERVICE_ROLE_KEY.length + ')' : 'MISSING'}</p>
        <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
        <hr />
        <p>If both env vars show SET and the error is a Supabase error, the table query is failing.</p>
        <p>If either shows MISSING, the Vercel env vars are not configured for this deployment.</p>
      </div>
    );
  }

  return <LandingTemplate config={result.data} />;
}
