'use client';

import { LandingPageConfig } from '@/lib/supabase';
import BrandedNav from './BrandedNav';
import BrandedHero from './BrandedHero';
import BrandedBenefits from './BrandedBenefits';
import BrandedFeatureTabs from './BrandedFeatureTabs';
import BrandedCTA from './BrandedCTA';
import BrandedFAQ from './BrandedFAQ';
import BrandedFooter from './BrandedFooter';
import TCPAConsentForm from './TCPAConsentForm';
import LandingChatWidget from './LandingChatWidget';

interface Props {
  config: LandingPageConfig;
}

export default function LandingTemplate({ config }: Props) {
  const brandStyles = {
    '--brand-primary': config.primary_color,
    '--brand-secondary': config.secondary_color,
  } as React.CSSProperties;

  return (
    <div style={brandStyles} className="min-h-screen bg-white">
      <BrandedNav
        companyName={config.company_name}
        logoUrl={config.logo_url}
        primaryColor={config.primary_color}
      />

      <BrandedHero
        companyName={config.company_name}
        headline={config.ai_copy.hero.headline}
        subheadline={config.ai_copy.hero.subheadline}
        primaryColor={config.primary_color}
      />

      <BrandedBenefits
        benefits={config.ai_copy.benefits}
        primaryColor={config.primary_color}
      />

      <BrandedFeatureTabs
        tabs={config.ai_copy.feature_tabs}
        primaryColor={config.primary_color}
      />

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            See It In Action
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Fill out the form below and experience our AI-powered engagement firsthand.
            You&apos;ll hear from us within 60 seconds.
          </p>
          <TCPAConsentForm
            companyName={config.company_name}
            webhookUrl={config.webhook_url}
            webhookToken={config.webhook_token}
            primaryColor={config.primary_color}
          />
        </div>
      </section>

      <BrandedCTA
        headline={config.ai_copy.cta.headline}
        subheadline={config.ai_copy.cta.subheadline}
        buttonText={config.ai_copy.cta.button_text}
        primaryColor={config.primary_color}
      />

      <BrandedFAQ
        faqs={config.ai_copy.faq}
        companyName={config.company_name}
      />

      <BrandedFooter
        companyName={config.company_name}
        phone={config.scraped_data?.phone}
        address={config.scraped_data?.address}
        socialLinks={config.scraped_data?.social_links}
      />

      {config.chat_widget_embed_key && (
        <LandingChatWidget embedKey={config.chat_widget_embed_key} />
      )}
    </div>
  );
}
