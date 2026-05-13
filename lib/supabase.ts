import { createClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client for querying the landing_pages table.
 * Uses service role key for unrestricted read access.
 * Only used in server components — never exposed to the browser.
 */
export function getSupabaseServer() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

/**
 * Landing page config type matching the Supabase landing_pages table.
 */
export interface LandingPageConfig {
  id: string;
  subdomain: string;
  company_name: string;
  logo_url: string | null;
  primary_color: string;
  secondary_color: string;
  scraped_data: {
    services?: string[];
    testimonials?: Array<{ name: string; text: string; role?: string }>;
    meta_description?: string;
    phone?: string;
    address?: string;
    social_links?: Record<string, string>;
  };
  ai_copy: {
    hero: { headline: string; subheadline: string };
    benefits: Array<{ title: string; description: string; icon?: string }>;
    feature_tabs: {
      speed_to_lead: { title: string; description: string; bullets: string[] };
      customer_care: { title: string; description: string; bullets: string[] };
      quality_surveys: { title: string; description: string; bullets: string[] };
    };
    social_proof: { stat1: string; stat2: string; stat3: string };
    faq: Array<{ question: string; answer: string }>;
    cta: { headline: string; subheadline: string; button_text: string };
    ai_persona: { name: string; greeting: string };
  };
  industry: string | null;
  org_id: string;
  webhook_url: string;
  webhook_token: string | null;
  chat_widget_embed_key: string | null;
  phone_number: string | null;
  trial_workflow_id: string | null;
  status: 'provisioning' | 'active' | 'paused' | 'expired';
  trial_expires_at: string | null;
}
