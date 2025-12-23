'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import PageConstellationCanvas from '@/components/aiviv4/PageConstellationCanvas';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$0.50',
    unit: 'per lead',
    description: 'Perfect for small teams getting started with AI voice automation.',
    features: [
      'Up to 500 leads/month',
      'Voice + SMS channels',
      'Basic CRM integration',
      'Email support',
      'Standard analytics',
      '5 concurrent calls',
      '14-day call recordings',
    ],
    cta: 'Try AIVI',
    popular: false,
    color: 'orange',
  },
  {
    name: 'Growth',
    price: '$0.35',
    unit: 'per lead',
    description: 'For growing teams that need advanced features and priority support.',
    features: [
      'Up to 5,000 leads/month',
      'Voice + SMS + Email channels',
      'Advanced integrations (n8n, GHL, Twilio)',
      'Priority support',
      'Advanced analytics + A/B testing',
      '25 concurrent calls',
      'Custom voice personality',
      '90-day call recordings',
    ],
    cta: 'Try AIVI',
    popular: true,
    color: 'gradient',
  },
  {
    name: 'Scale',
    price: '$0.25',
    unit: 'per lead',
    description: 'For high-volume operations that demand maximum performance.',
    features: [
      'Up to 25,000 leads/month',
      'All channels + social',
      'All integrations + custom webhooks',
      'Dedicated success manager',
      'Real-time analytics + ML insights',
      'Unlimited concurrent calls',
      'Multi-language support',
      'White-label option',
      '1-year call recordings',
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'purple',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'pricing',
    description: 'For organizations with custom requirements and compliance needs.',
    features: [
      'Unlimited leads',
      'Custom AI model training',
      'SSO + advanced security',
      'Dedicated infrastructure',
      'SLA guarantees',
      'Compliance packages (HIPAA, SOC 2, GDPR)',
      'API access + custom development',
      'Unlimited call recordings',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'black',
  },
];

const comparisonFeatures = [
  {
    category: 'Channels',
    features: [
      { name: 'AI Voice Calls', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'SMS Automation', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'Email Sequences', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'Social Channels', starter: false, growth: false, scale: true, enterprise: true },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { name: 'Basic CRM (HubSpot, Salesforce)', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'Advanced Integrations (n8n, GHL)', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'Custom Webhooks', starter: false, growth: false, scale: true, enterprise: true },
      { name: 'API Access', starter: false, growth: 'Limited', scale: true, enterprise: true },
    ],
  },
  {
    category: 'Analytics',
    features: [
      { name: 'Standard Dashboard', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'A/B Testing', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'ML-Powered Insights', starter: false, growth: false, scale: true, enterprise: true },
      { name: 'Custom Reports', starter: false, growth: false, scale: true, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email Support', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'Priority Support', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'Dedicated Success Manager', starter: false, growth: false, scale: true, enterprise: true },
      { name: 'Custom Training', starter: false, growth: false, scale: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: 'How does per-lead pricing work?',
    answer: 'You\'re charged for each lead that AIVI processes through any channel. A lead is counted once, regardless of how many touchpoints (calls, SMS, emails) occur during the engagement cycle.',
  },
  {
    question: 'What counts as a "processed lead"?',
    answer: 'A lead is processed when AIVI initiates contact through voice, SMS, or email. Leads that result in no engagement attempt (e.g., invalid numbers) are not charged.',
  },
  {
    question: 'Can I upgrade my plan mid-cycle?',
    answer: 'Yes, you can upgrade at any time. Your new pricing takes effect immediately, and we\'ll apply the new rate to remaining leads in your current billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Start with 100 free leads on any plan. No credit card required. This gives you enough volume to see real results before committing.',
  },
  {
    question: 'Do you offer volume discounts?',
    answer: 'Yes. Our Scale and Enterprise tiers include volume-based pricing. For very high volumes, contact our sales team for a custom quote.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH transfers, and wire transfers for Enterprise accounts. Monthly and annual billing options are available.',
  },
];

export default function PricingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { openDemoPopup } = useDemoPopup();

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
                Pricing
              </span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
            </div>

            {/* Headline */}
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium text-[#0a0a0a] tracking-[-0.02em] mb-6">
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#525252] max-w-[700px] mx-auto mb-10">
              Pay only for leads you engage. No hidden fees, no long-term contracts, no surprises.
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

        {/* Pricing Tiers */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-20 pt-[30px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/60 shadow-[0_4px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 ${
                    tier.popular ? 'lg:scale-105' : ''
                  }`}
                >
                  {/* Gradient accent on hover */}
                  <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${
                    tier.color === 'gradient'
                      ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3]'
                      : tier.color === 'orange'
                      ? 'bg-[#f84608]'
                      : tier.color === 'purple'
                      ? 'bg-[#321ca3]'
                      : 'bg-[#0a0a0a]'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white text-[11px] font-semibold tracking-wide uppercase rounded-full shadow-lg whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="relative z-10 overflow-hidden rounded-2xl">
                    <div className="mb-6">
                      <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-2 group-hover:text-[#f84608] transition-colors duration-300">
                        {tier.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-3">
                        <span
                          className={`text-[38px] sm:text-[42px] font-bold transition-all duration-300 ${
                            tier.color === 'gradient'
                              ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent'
                              : tier.color === 'orange'
                              ? 'text-[#f84608]'
                              : tier.color === 'purple'
                              ? 'text-[#321ca3]'
                              : 'text-[#0a0a0a]'
                          }`}
                        >
                          {tier.price}
                        </span>
                        <span className="text-[14px] text-[#737373] font-medium">{tier.unit}</span>
                      </div>
                      <p className="text-[14px] leading-[1.6] text-[#525252]">{tier.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              tier.color === 'gradient' || tier.color === 'orange'
                                ? 'bg-[#f84608]'
                                : tier.color === 'purple'
                                ? 'bg-[#321ca3]'
                                : 'bg-[#0a0a0a]'
                            }`}
                          >
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-[13px] sm:text-[14px] text-[#404040] leading-[1.5]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={tier.cta === 'Try AIVI' ? openDemoPopup : openDemoPopup}
                      className={`relative z-10 w-full py-3.5 text-[15px] font-medium rounded-xl transition-all duration-300 overflow-hidden ${
                        tier.popular
                          ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white hover:shadow-[0_8px_30px_rgba(248,70,8,0.25)]'
                          : 'bg-white border border-[#e5e5e5] text-[#0a0a0a] hover:border-[#0a0a0a] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {tier.cta}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      {tier.popular && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#321ca3] to-[#f84608] opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/60 shadow-[0_4px_40px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

              <div className="text-center mb-12 relative z-10">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                  <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                    Comparison
                  </span>
                  <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
                </div>

                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] font-medium text-[#0a0a0a] tracking-[-0.02em] mb-4">
                  Compare Plans
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#525252]">
                  See exactly what&apos;s included in each tier
                </p>
              </div>

              <div className="overflow-x-auto -mx-3 sm:mx-0 relative z-10">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b-2 border-[#f0f0f0]">
                      <th className="text-left py-4 px-4 text-[14px] font-semibold text-[#0a0a0a]">
                        Features
                      </th>
                      <th className="text-center py-4 px-4 text-[14px] font-semibold text-[#f84608]">
                        Starter
                      </th>
                      <th className="text-center py-4 px-4 text-[14px] font-semibold bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                        Growth
                      </th>
                      <th className="text-center py-4 px-4 text-[14px] font-semibold text-[#321ca3]">
                        Scale
                      </th>
                      <th className="text-center py-4 px-4 text-[14px] font-semibold text-[#0a0a0a]">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category) => (
                      <React.Fragment key={category.category}>
                        <tr className="bg-[#FAFAFA]">
                          <td
                            colSpan={5}
                            className="py-3 px-4 text-[12px] font-semibold text-[#737373] uppercase tracking-wider"
                          >
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature) => (
                          <tr key={feature.name} className="border-b border-[#f0f0f0] hover:bg-[#FAFAFA]/50 transition-colors duration-200">
                            <td className="py-4 px-4 text-[14px] text-[#404040]">{feature.name}</td>
                            <td className="text-center py-4 px-4">
                              {feature.starter === true ? (
                                <svg className="w-5 h-5 mx-auto text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : feature.starter === false ? (
                                <span className="text-[#d4d4d4]">-</span>
                              ) : (
                                <span className="text-[12px] text-[#737373]">{feature.starter}</span>
                              )}
                            </td>
                            <td className="text-center py-4 px-4">
                              {feature.growth === true ? (
                                <svg className="w-5 h-5 mx-auto text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : feature.growth === false ? (
                                <span className="text-[#d4d4d4]">-</span>
                              ) : (
                                <span className="text-[12px] text-[#737373]">{feature.growth}</span>
                              )}
                            </td>
                            <td className="text-center py-4 px-4">
                              {feature.scale === true ? (
                                <svg className="w-5 h-5 mx-auto text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : feature.scale === false ? (
                                <span className="text-[#d4d4d4]">-</span>
                              ) : (
                                <span className="text-[12px] text-[#737373]">{feature.scale}</span>
                              )}
                            </td>
                            <td className="text-center py-4 px-4">
                              {feature.enterprise === true ? (
                                <svg className="w-5 h-5 mx-auto text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : feature.enterprise === false ? (
                                <span className="text-[#d4d4d4]">-</span>
                              ) : (
                                <span className="text-[12px] text-[#737373]">{feature.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-20">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                  FAQ
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
              </div>

              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] font-medium text-[#0a0a0a] tracking-[-0.02em]">
                Pricing FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-[0_4px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#0a0a0a] pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-[#f84608] flex-shrink-0 transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {expandedFaq === index && (
                    <p className="text-[14px] leading-[1.6] text-[#525252] mt-3 animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-20 sm:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_4px_60px_rgba(0,0,0,0.06)] border border-[#f0f0f0]/50 overflow-hidden">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#f84608]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-[#321ca3]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-4 mb-6">
                    <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                    <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                      Enterprise
                    </span>
                    <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
                  </div>

                  <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.1] font-medium text-[#0a0a0a] tracking-[-0.02em] mb-4">
                    Need{' '}
                    <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                      Enterprise-Grade
                    </span>{' '}
                    Solutions?
                  </h2>
                  <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[#525252] mb-8">
                    Get custom pricing, dedicated infrastructure, and compliance features for large organizations.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Custom AI model training',
                      'SSO and advanced security',
                      'Dedicated infrastructure',
                      'HIPAA, SOC 2, GDPR compliance',
                      'Custom SLA agreements',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-[15px] text-[#404040]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openDemoPopup}
                    className="group relative inline-flex items-center justify-center h-[52px] px-8 text-white text-[15px] font-medium rounded-xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Contact Enterprise Sales
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-gradient-to-br from-[#f84608]/5 to-[#321ca3]/5 rounded-3xl p-8 backdrop-blur-sm border border-white/60">
                    <div className="text-center">
                      <div className="text-[56px] sm:text-[64px] font-bold bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent mb-2">
                        275M+
                      </div>
                      <div className="text-[16px] sm:text-[18px] text-[#525252] mb-8">
                        Active contacts in our database
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-white/80 rounded-2xl p-4">
                          <div className="text-[28px] sm:text-[32px] font-bold text-[#0a0a0a]">99.9%</div>
                          <div className="text-[13px] text-[#737373]">Uptime SLA</div>
                        </div>
                        <div className="bg-white/80 rounded-2xl p-4">
                          <div className="text-[28px] sm:text-[32px] font-bold text-[#0a0a0a]">SOC 2</div>
                          <div className="text-[13px] text-[#737373]">Certified</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
