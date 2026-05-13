import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSupabaseServer, LandingPageConfig } from '@/lib/supabase';
import LandingTemplate from '@/components/landing/LandingTemplate';

interface Props {
  params: Promise<{ subdomain: string }>;
}

async function getLandingConfig(subdomain: string): Promise<LandingPageConfig | null> {
  console.log(`[landing] Loading config for subdomain: ${subdomain}`);
  console.log(`[landing] SUPABASE_URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'MISSING'}`);
  console.log(`[landing] SERVICE_KEY: ${process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET' : 'MISSING'}`);

  try {
    const supabase = getSupabaseServer();

    const { data, error } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('subdomain', subdomain)
      .eq('status', 'active')
      .single();

    if (error) {
      console.error(`[landing] Supabase error for ${subdomain}:`, error.message, error.code);
      return null;
    }
    if (!data) {
      console.log(`[landing] No data found for subdomain: ${subdomain}`);
      return null;
    }

    console.log(`[landing] Found config for ${subdomain}: ${data.company_name}`);
    return data as LandingPageConfig;
  } catch (err) {
    console.error(`[landing] Exception loading config for ${subdomain}:`, err);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subdomain } = await params;
  const config = await getLandingConfig(subdomain);

  if (!config) {
    return { title: 'Not Found' };
  }

  return {
    title: `${config.company_name} — Powered by AIVI`,
    description: config.ai_copy?.hero?.subheadline || `AI-powered customer engagement for ${config.company_name}`,
    openGraph: {
      title: config.ai_copy?.hero?.headline || config.company_name,
      description: config.ai_copy?.hero?.subheadline,
      siteName: config.company_name,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { subdomain } = await params;
  const config = await getLandingConfig(subdomain);

  if (!config) {
    notFound();
  }

  return <LandingTemplate config={config} />;
}
