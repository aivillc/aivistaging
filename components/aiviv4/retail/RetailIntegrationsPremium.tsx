'use client';

import Link from 'next/link';

const integrations = [
  { name: 'n8n', category: 'Automation' },
  { name: 'Twilio', category: 'Telephony' },
  { name: 'Go High Level', category: 'CRM' },
  { name: 'ElevenLabs', category: 'AI' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Retell', category: 'AI' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Calendly', category: 'Calendar' },
  { name: 'Stripe', category: 'Payments' },
];

interface RetailIntegrationsPremiumProps {
  sectionTitle?: string;
  sectionDescription?: string;
  eyebrowLabel?: string;
}

export default function RetailIntegrationsPremium({
  sectionTitle = 'Seamless Integrations',
  sectionDescription = 'Connect with your existing tools and workflows',
  eyebrowLabel = 'Works With Your Stack'
}: RetailIntegrationsPremiumProps) {
  return (
    <section className="w-full font-manrope">
      <div className="w-full py-16 sm:py-20 md:py-24">
        <div className="w-full">
          {/* Premium Glass Card Container */}
          <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_4px_40px_rgba(0,0,0,0.04)]">
            {/* Section Header with Eyebrow */}
            <div className="mb-10 sm:mb-12">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                  {eyebrowLabel}
                </span>
              </div>
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a] mb-3">
                {sectionTitle}
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#555555] max-w-[500px]">
                {sectionDescription}
              </p>
            </div>

            {/* Premium Integration Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 mb-10">
              {integrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className="group bg-white rounded-xl p-4 sm:p-5 border border-[#f0f0f0] text-center hover:border-[#f84608]/40 hover:shadow-lg hover:shadow-[#f84608]/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Premium Logo Placeholder */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 mx-auto rounded-xl flex items-center justify-center text-white font-bold text-[15px] transition-all duration-300 group-hover:scale-110 ${
                      index % 2 === 0
                        ? 'bg-gradient-to-br from-[#f84608] to-[#ff6b35]'
                        : 'bg-gradient-to-br from-[#321ca3] to-[#5b3fd4]'
                    }`}
                  >
                    {integration.name.charAt(0)}
                  </div>
                  <p className="text-[12px] sm:text-[13px] text-[#555555] mt-3 font-medium truncate">
                    {integration.name}
                  </p>
                  <p className="text-[10px] text-[#999999] mt-0.5 uppercase tracking-wider">
                    {integration.category}
                  </p>
                </div>
              ))}
            </div>

            {/* Premium CTA Button */}
            <div className="text-center">
              <Link
                href="/integrations"
                className="group relative inline-flex items-center justify-center h-14 px-10 overflow-hidden text-white text-[16px] font-semibold rounded-xl bg-gradient-to-r from-[#f84608] to-[#321ca3] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f84608]/20 transition-all duration-400"
              >
                <span className="relative z-10">View All Integrations</span>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
