'use client';

import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import PageConstellationCanvas from '@/components/aiviv4/PageConstellationCanvas';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';
import {
  FaPhone,
  FaCalendarAlt,
  FaRobot,
  FaComments,
  FaCreditCard,
  FaChartLine,
  FaEnvelope,
  FaBolt,
  FaExchangeAlt,
  FaBullhorn,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaUserCheck,
  FaHeadset
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: IconType;
  category: string;
}

const integrations: Integration[] = [
  // Mixed order for varied colors in the grid
  { id: 'ghl', name: 'Go High Level', description: 'All-in-one marketing automation and CRM platform for agencies. Sync leads, trigger campaigns, and automate follow-ups.', icon: FaBullhorn, category: 'CRM & Lead Management' },
  { id: 'twilio', name: 'Twilio', description: 'Cloud communications platform for voice, SMS, and WhatsApp. Power your outbound campaigns at scale.', icon: FaPhone, category: 'Telephony & Dialers' },
  { id: 'openai', name: 'OpenAI', description: 'GPT-4 powered conversations for intelligent lead qualification and natural customer interactions.', icon: FaRobot, category: 'AI & Voice' },
  { id: 'stripe', name: 'Stripe', description: 'Payment processing for in-call collections, recurring billing, and payment link generation.', icon: FaCreditCard, category: 'Payments & Collections' },
  { id: 'tcpa', name: 'TCPA Shield', description: 'Real-time TCPA compliance checking with consent management and DNC list verification.', icon: FaShieldAlt, category: 'Compliance & Verification' },
  { id: 'gcal', name: 'Google Calendar', description: 'Real-time calendar sync for appointment booking and availability management.', icon: FaCalendarAlt, category: 'Calendar & Scheduling' },
  { id: 'zapier', name: 'Zapier', description: 'Connect AIVI to 5000+ apps with no-code automation triggers and actions.', icon: FaExchangeAlt, category: 'Automation & Workflows' },
  { id: 'slack', name: 'Slack', description: 'Real-time notifications for hot leads, completed calls, and team alerts.', icon: FaComments, category: 'Communication' },
  { id: 'salesforce', name: 'Salesforce', description: 'Enterprise CRM integration for lead scoring, opportunity management, and sales automation workflows.', icon: FaChartLine, category: 'CRM & Lead Management' },
  { id: 'elevenlabs', name: 'ElevenLabs', description: 'Ultra-realistic AI voice synthesis for natural-sounding outbound calls and IVR systems.', icon: FaRobot, category: 'AI & Voice' },
  { id: 'telnyx', name: 'Telnyx', description: 'Global voice and messaging network with competitive rates and real-time communications APIs.', icon: FaPhone, category: 'Telephony & Dialers' },
  { id: 'truecaller', name: 'Truecaller', description: 'Caller ID verification and spam detection to improve answer rates and brand trust.', icon: FaUserCheck, category: 'Compliance & Verification' },
  { id: 'hubspot', name: 'HubSpot', description: 'Inbound marketing and CRM platform. Sync contacts, track deals, and automate nurturing sequences.', icon: FaChartLine, category: 'CRM & Lead Management' },
  { id: 'square', name: 'Square', description: 'Payment processing with invoicing and virtual terminal for phone-based payment collection.', icon: FaCreditCard, category: 'Payments & Collections' },
  { id: 'calendly', name: 'Calendly', description: 'Automated appointment scheduling with meeting links sent via SMS during calls.', icon: FaCalendarAlt, category: 'Calendar & Scheduling' },
  { id: 'n8n', name: 'n8n', description: 'Self-hosted workflow automation for connecting AIVI to 200+ apps with custom logic.', icon: FaBolt, category: 'Automation & Workflows' },
  { id: 'anthropic', name: 'Anthropic Claude', description: 'Advanced AI for complex reasoning, compliance checking, and nuanced conversation handling.', icon: FaRobot, category: 'AI & Voice' },
  { id: 'ringcentral', name: 'RingCentral', description: 'Business phone system with contact center solutions for enterprise-grade call handling.', icon: FaPhone, category: 'Telephony & Dialers' },
  { id: 'teams', name: 'Microsoft Teams', description: 'Team notifications and call summaries delivered to your channels.', icon: FaComments, category: 'Communication' },
  { id: 'zoho', name: 'Zoho CRM', description: 'Sales automation with AI-powered lead scoring and pipeline management for growing businesses.', icon: FaChartLine, category: 'CRM & Lead Management' },
  { id: 'paypal', name: 'PayPal', description: 'Send payment requests and collect payments via PayPal links during collection calls.', icon: FaCreditCard, category: 'Payments & Collections' },
  { id: 'stir-shaken', name: 'STIR/SHAKEN', description: 'Call authentication protocol integration for verified caller ID and reduced spam flags.', icon: FaShieldAlt, category: 'Compliance & Verification' },
  { id: 'retell', name: 'Retell AI', description: 'Voice AI platform for building conversational phone agents with human-like interactions.', icon: FaPhone, category: 'AI & Voice' },
  { id: 'cal', name: 'Cal.com', description: 'Open-source scheduling with custom booking flows and team availability management.', icon: FaCalendarAlt, category: 'Calendar & Scheduling' },
  { id: 'make', name: 'Make (Integromat)', description: 'Visual workflow builder for complex multi-step automations and data transformations.', icon: FaBolt, category: 'Automation & Workflows' },
  { id: 'pipedrive', name: 'Pipedrive', description: 'Sales-focused CRM designed to help teams track deals, prioritize leads, and close more sales.', icon: FaChartLine, category: 'CRM & Lead Management' },
  { id: 'vonage', name: 'Vonage', description: 'Unified communications platform for voice, video, and messaging APIs at global scale.', icon: FaPhone, category: 'Telephony & Dialers' },
  { id: 'deepgram', name: 'Deepgram', description: 'Real-time speech recognition and transcription for call analytics and compliance recording.', icon: FaRobot, category: 'AI & Voice' },
  { id: 'plaid', name: 'Plaid', description: 'Bank account verification and ACH payments for secure debt collection transactions.', icon: FaFileInvoiceDollar, category: 'Payments & Collections' },
  { id: 'lexisnexis', name: 'LexisNexis', description: 'Skip tracing and contact verification for debt collection with updated consumer data.', icon: FaUserCheck, category: 'Compliance & Verification' },
  { id: 'gmail', name: 'Gmail', description: 'Automated email follow-ups and lead notifications to your inbox.', icon: FaEnvelope, category: 'Communication' },
  { id: 'closecrm', name: 'Close CRM', description: 'Built for inside sales teams. Power dialer integration, SMS, and email all in one platform.', icon: FaHeadset, category: 'CRM & Lead Management' },
  { id: 'plivo', name: 'Plivo', description: 'Cloud communications platform for voice and SMS with global coverage and competitive pricing.', icon: FaPhone, category: 'Telephony & Dialers' },
  { id: 'assemblyai', name: 'AssemblyAI', description: 'Speech-to-text API with sentiment analysis and speaker diarization for call insights.', icon: FaRobot, category: 'AI & Voice' },
  { id: 'authorize', name: 'Authorize.net', description: 'Payment gateway for PCI-compliant credit card processing during collection calls.', icon: FaCreditCard, category: 'Payments & Collections' },
  { id: 'transunion', name: 'TransUnion TLO', description: 'Skip tracing and identity verification for locating consumers and validating contact info.', icon: FaUserCheck, category: 'Compliance & Verification' },
  { id: 'mscal', name: 'Microsoft Outlook', description: 'Enterprise calendar integration for scheduling and availability sync.', icon: FaCalendarAlt, category: 'Calendar & Scheduling' },
  { id: 'webhooks', name: 'Custom Webhooks', description: 'Real-time event notifications to your systems for lead updates and call outcomes.', icon: FaBolt, category: 'Automation & Workflows' },
  { id: 'five9', name: 'Five9', description: 'Cloud contact center software with predictive dialing and workforce management tools.', icon: FaHeadset, category: 'Telephony & Dialers' },
  { id: 'sendgrid', name: 'SendGrid', description: 'Transactional email delivery for payment confirmations and follow-up sequences.', icon: FaEnvelope, category: 'Communication' },
];

const filterCategories = [
  'All',
  'CRM & Lead Management',
  'Telephony & Dialers',
  'AI & Voice',
  'Payments & Collections',
  'Compliance & Verification',
  'Calendar & Scheduling',
  'Automation & Workflows',
  'Communication',
];

const categoryColors: Record<string, { bg: string; text: string; gradient: string }> = {
  'CRM & Lead Management': { bg: 'bg-[#f84608]/10', text: 'text-[#f84608]', gradient: 'from-[#f84608] to-[#ff7b47]' },
  'Telephony & Dialers': { bg: 'bg-[#16a34a]/10', text: 'text-[#16a34a]', gradient: 'from-[#16a34a] to-[#22c55e]' },
  'AI & Voice': { bg: 'bg-[#a855f7]/10', text: 'text-[#a855f7]', gradient: 'from-[#a855f7] to-[#c084fc]' },
  'Payments & Collections': { bg: 'bg-[#321ca3]/10', text: 'text-[#321ca3]', gradient: 'from-[#321ca3] to-[#5b3fd9]' },
  'Compliance & Verification': { bg: 'bg-[#dc2626]/10', text: 'text-[#dc2626]', gradient: 'from-[#dc2626] to-[#ef4444]' },
  'Calendar & Scheduling': { bg: 'bg-[#0ea5e9]/10', text: 'text-[#0ea5e9]', gradient: 'from-[#0ea5e9] to-[#38bdf8]' },
  'Automation & Workflows': { bg: 'bg-[#f59e0b]/10', text: 'text-[#f59e0b]', gradient: 'from-[#f59e0b] to-[#fbbf24]' },
  'Communication': { bg: 'bg-[#6366f1]/10', text: 'text-[#6366f1]', gradient: 'from-[#6366f1] to-[#818cf8]' },
};

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [customCardPosition, setCustomCardPosition] = useState(0);
  const { openDemoPopup } = useDemoPopup();

  // Generate random position for custom card on mount
  useEffect(() => {
    setCustomCardPosition(Math.floor(Math.random() * 12));
  }, []);

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || integration.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Show only 11 initially (+ 1 custom card = 12 total), or all if filter/search is active or showAll is true
  const displayedIntegrations = (activeFilter !== 'All' || searchQuery || showAll)
    ? filteredIntegrations
    : filteredIntegrations.slice(0, 11);

  const hasMoreToShow = activeFilter === 'All' && !searchQuery && !showAll && filteredIntegrations.length > 11;

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Constellation Background */}
      <PageConstellationCanvas sidebarOffset={0} />

      <AIVINavigationV4 transparent={false} />

      <main className="min-h-screen font-manrope relative z-[2]">
        {/* Hero Section */}
        <section className="w-full pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                Integrations
              </span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
            </div>

            {/* Headline */}
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium text-[#0a0a0a] tracking-[-0.02em] mb-6">
              Connect AIVI to{' '}
              <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                Your Entire Stack
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#525252] max-w-[700px] mx-auto mb-10">
              {integrations.length}+ integrations to connect AIVI with your CRM, telephony, payments, and compliance tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openDemoPopup}
                className="group relative inline-flex items-center justify-center h-[52px] px-8 text-white text-[15px] font-medium rounded-xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Try AIVI
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
              <Link
                href="/use-cases"
                className="group inline-flex items-center justify-center h-[52px] px-8 bg-white/80 backdrop-blur-sm border border-[#e5e5e5] text-[#0a0a0a] text-[15px] font-medium rounded-xl hover:border-[#0a0a0a] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                Use Cases
              </Link>
            </div>
          </div>

          {/* Decorative gradient orbs */}
          <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-[#f84608]/5 to-[#321ca3]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] bg-gradient-to-br from-[#321ca3]/5 to-[#a855f7]/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Search & Filter Section */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-8">
          <div className="max-w-[1200px] mx-auto">
            {/* Glass morphism container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_4px_40px_rgba(0,0,0,0.04)] p-6 sm:p-8">
              {/* Search Input */}
              <div className="relative mb-6 max-w-[600px] mx-auto">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-[#a3a3a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#e5e5e5] bg-white text-[15px] text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:border-[#f84608] focus:ring-2 focus:ring-[#f84608]/10 focus:outline-none transition-all duration-200"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                {filterCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => { setActiveFilter(category); setShowAll(false); }}
                    className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-[#0a0a0a] text-white shadow-lg'
                        : 'bg-white text-[#525252] border border-[#e5e5e5] hover:border-[#0a0a0a] hover:text-[#0a0a0a]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration Cards Grid */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto">
            {displayedIntegrations.length > 0 ? (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedIntegrations.map((integration, index) => {
                    const colors = categoryColors[integration.category] || categoryColors['CRM & Lead Management'];

                    // Insert custom integration card at random position
                    const showCustomCard = index === customCardPosition && activeFilter === 'All' && !searchQuery;

                    return (
                      <Fragment key={integration.id}>
                        {showCustomCard && (
                          <button
                            key="custom-integration"
                            onClick={openDemoPopup}
                            className="group relative rounded-2xl p-6 border-2 border-dashed border-[#a855f7]/30 hover:border-[#a855f7] bg-gradient-to-br from-[#a855f7]/5 to-[#321ca3]/5 hover:from-[#a855f7]/10 hover:to-[#321ca3]/10 transition-all duration-500 overflow-hidden hover:-translate-y-1 text-left"
                          >
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-gradient-to-br from-[#a855f7]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                            <div className="relative z-10 h-full flex flex-col">
                              {/* Icon */}
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-[#a855f7] to-[#321ca3] text-white">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                              </div>

                              {/* Title */}
                              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#0a0a0a] mb-2">
                                Custom Integration
                              </h3>

                              {/* Description */}
                              <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#525252] mb-4 flex-grow">
                                Don&apos;t see what you need? We build custom integrations for enterprise customers.
                              </p>

                              {/* CTA */}
                              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#a855f7] group-hover:gap-2.5 transition-all duration-300">
                                Request Integration
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </span>
                            </div>
                          </button>
                        )}
                        <div
                          key={integration.id}
                          className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/60 hover:border-[#e5e5e5] shadow-[0_4px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden hover:-translate-y-1"
                        >
                          {/* Gradient accent on hover */}
                          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                          <div className="relative z-10">
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 ${colors.bg} ${colors.text}`}>
                              <integration.icon className="text-[24px]" />
                            </div>

                            {/* Title */}
                            <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#0a0a0a] mb-2 group-hover:text-[#f84608] transition-colors duration-300">
                              {integration.name}
                            </h3>

                            {/* Description */}
                            <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#525252] mb-4 line-clamp-3">
                              {integration.description}
                            </p>

                            {/* Category Badge */}
                            <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium ${colors.bg} ${colors.text}`}>
                              {integration.category}
                            </span>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>

                {/* View More Button */}
                {hasMoreToShow && (
                  <div className="flex justify-center mt-12">
                    <button
                      onClick={() => setShowAll(true)}
                      className="group inline-flex items-center justify-center gap-2 h-[52px] px-8 bg-white border border-[#e5e5e5] text-[#0a0a0a] text-[15px] font-medium rounded-xl hover:border-[#0a0a0a] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
                    >
                      View All {filteredIntegrations.length} Integrations
                      <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Show Less Button */}
                {showAll && activeFilter === 'All' && !searchQuery && filteredIntegrations.length > 11 && (
                  <div className="flex justify-center mt-12">
                    <button
                      onClick={() => setShowAll(false)}
                      className="group inline-flex items-center justify-center gap-2 h-[52px] px-8 bg-white border border-[#e5e5e5] text-[#0a0a0a] text-[15px] font-medium rounded-xl hover:border-[#0a0a0a] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
                    >
                      Show Less
                      <svg className="w-4 h-4 transform rotate-180 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-[18px] text-[#525252]">No integrations found matching your search.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                  className="mt-4 text-[14px] font-medium text-[#f84608] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-20 sm:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_4px_60px_rgba(0,0,0,0.06)] border border-[#f0f0f0]/50 overflow-hidden">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#f84608]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-[#321ca3]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 text-center max-w-[700px] mx-auto">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                  <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                    Get Started
                  </span>
                  <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
                </div>

                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.1] font-medium text-[#0a0a0a] tracking-[-0.02em] mb-4">
                  Ready to Connect{' '}
                  <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                    Your Stack?
                  </span>
                </h2>

                <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[#525252] mb-10">
                  Start your free trial and connect AIVI to your existing tools in minutes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openDemoPopup}
                    className="group relative inline-flex items-center justify-center h-[52px] px-8 text-white text-[15px] font-medium rounded-xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Try AIVI
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                  <Link
                    href="/use-cases"
                    className="group inline-flex items-center justify-center h-[52px] px-8 bg-white/80 backdrop-blur-sm border border-[#e5e5e5] text-[#0a0a0a] text-[15px] font-medium rounded-xl hover:border-[#0a0a0a] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    Use Cases
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AIVIFooter />
    </div>
  );
}
