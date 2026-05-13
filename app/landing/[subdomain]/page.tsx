import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSupabaseServer, LandingPageConfig } from '@/lib/supabase';
import LandingTemplate from '@/components/landing/LandingTemplate';

interface Props {
  params: Promise<{ subdomain: string }>;
}

async function getLandingConfig(subdomain: string): Promise<LandingPageConfig | null> {
  const supabase = getSupabaseServer();

  const { data, error } = await supabase
    .from('landing_pages')
    .select('*')
    .eq('subdomain', subdomain)
    .eq('status', 'active')
    .single();

  if (error || !data) return null;
  return data as LandingPageConfig;
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
