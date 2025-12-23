'use client';

import Link from 'next/link';
import { useState } from 'react';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import PageConstellationCanvas from '@/components/aiviv4/PageConstellationCanvas';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

const features = [
  {
    id: 'lead-qualification',
    title: 'AI Lead Qualification',
    description: 'Automatically qualify leads in real-time during calls. Score prospects based on intent, budget, and timeline to prioritize high-value opportunities.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    category: 'Lead Generation',
  },
  {
    id: 'debt-collection',
    title: 'Smart Debt Recovery',
    description: 'AI-powered collections calls with compliant payment negotiation. Automated payment plans, promise-to-pay tracking, and skip tracing integration.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    category: 'Debt Collection',
  },
  {
    id: 'appointment-setting',
    title: 'Automated Appointment Setting',
    description: 'Book qualified appointments directly into your calendar. Real-time availability sync, confirmation calls, and no-show follow-ups.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    category: 'Lead Generation',
  },
  {
    id: 'compliance-engine',
    title: 'TCPA & FDCPA Compliance',
    description: 'Built-in regulatory compliance for debt collection and telemarketing. Automated consent tracking, call time restrictions, and audit trails.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    category: 'Compliance',
  },
  {
    id: 'payment-processing',
    title: 'In-Call Payment Processing',
    description: 'Secure PCI-compliant payment collection during calls. Process credit cards, set up autopay, and send payment links via SMS.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    category: 'Debt Collection',
  },
  {
    id: 'lead-nurturing',
    title: 'Multi-Touch Lead Nurturing',
    description: 'Automated follow-up sequences across calls, SMS, and email. Re-engage cold leads and move prospects through your funnel automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    category: 'Lead Generation',
  },
  {
    id: 'conversion-analytics',
    title: 'Conversion Analytics',
    description: 'Track lead-to-customer conversion rates, call outcomes, and campaign ROI. Identify top-performing scripts and optimize your funnel.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    category: 'Analytics',
  },
  {
    id: 'skip-tracing',
    title: 'Skip Tracing Integration',
    description: 'Connect with leading skip tracing providers to find updated contact information. Auto-dial new numbers and track contact attempts.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    category: 'Debt Collection',
  },
  {
    id: 'call-transcription',
    title: 'Call Recording & Transcription',
    description: 'Automatic call recording with AI-powered transcription and summaries. Full compliance archival for regulatory requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    category: 'Compliance',
  },
  {
    id: 'crm-integration',
    title: 'CRM & Dialer Integration',
    description: 'Native integrations with Salesforce, HubSpot, GoHighLevel, and leading dialers. Sync leads, update records, and trigger workflows automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    category: 'Infrastructure',
  },
  {
    id: 'predictive-dialing',
    title: 'Predictive Dialing',
    description: 'AI-optimized call timing and pacing. Maximize agent productivity with intelligent lead prioritization and optimal call windows.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    category: 'Lead Generation',
  },
  {
    id: 'sentiment-analysis',
    title: 'Real-Time Sentiment Analysis',
    description: 'Detect customer emotions during calls and adapt in real-time. Escalate frustrated contacts to live agents and identify upsell opportunities.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    category: 'Analytics',
  },
];

const filterCategories = [
  'All',
  'Lead Generation',
  'Debt Collection',
  'Compliance',
  'Analytics',
  'Infrastructure',
];

const categoryColors: Record<string, { bg: string; text: string; gradient: string }> = {
  'Lead Generation': { bg: 'bg-[#f84608]/10', text: 'text-[#f84608]', gradient: 'from-[#f84608] to-[#ff7b47]' },
  'Debt Collection': { bg: 'bg-[#321ca3]/10', text: 'text-[#321ca3]', gradient: 'from-[#321ca3] to-[#5b3fd9]' },
  'Compliance': { bg: 'bg-[#16a34a]/10', text: 'text-[#16a34a]', gradient: 'from-[#16a34a] to-[#22c55e]' },
  'Analytics': { bg: 'bg-[#a855f7]/10', text: 'text-[#a855f7]', gradient: 'from-[#a855f7] to-[#c084fc]' },
  'Infrastructure': { bg: 'bg-[#0ea5e9]/10', text: 'text-[#0ea5e9]', gradient: 'from-[#0ea5e9] to-[#38bdf8]' },
};

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const { openDemoPopup } = useDemoPopup();

  const filteredFeatures = features.filter((feature) => {
    const matchesSearch =
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || feature.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Constellation Background - renders on top of bg */}
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
                Platform Features
              </span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
            </div>

            {/* Headline */}
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium text-[#0a0a0a] tracking-[-0.02em] mb-6">
              Every Feature Your{' '}
              <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                AI Workflow
              </span>{' '}
              Needs
            </h1>

            {/* Subheadline */}
            <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#525252] max-w-[700px] mx-auto mb-10">
              AIVI unifies voice, data, and automation, so nothing breaks in between.
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
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-12">
          <div className="max-w-[1200px] mx-auto">
            {/* Glass card container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_4px_40px_rgba(0,0,0,0.04)] p-6 sm:p-8">
              {/* Search Input */}
              <div className="relative mb-6 max-w-[500px] mx-auto">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-[#a3a3a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#e5e5e5] bg-[#FAFAFA] text-[15px] text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:border-[#0a0a0a] focus:bg-white focus:shadow-[0_0_0_4px_rgba(10,10,10,0.04)] focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                {filterCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-5 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-[#0a0a0a] text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]'
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

        {/* Feature Cards Grid */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pb-20 sm:pb-24">
          <div className="max-w-[1200px] mx-auto">
            {filteredFeatures.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFeatures.map((feature) => {
                  const colors = categoryColors[feature.category] || categoryColors['Analytics'];
                  return (
                    <div
                      key={feature.id}
                      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/60 shadow-[0_4px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
                    >
                      {/* Top gradient accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${colors.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                      {/* Category badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${colors.bg} ${colors.text}`}>
                        {feature.category.split(' ')[0]}
                      </div>

                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${colors.bg} ${colors.text} group-hover:scale-110`}>
                        {feature.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0a0a0a] mb-3 pr-16 group-hover:text-[#f84608] transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#525252] mb-6">
                        {feature.description}
                      </p>

                      {/* Learn More Link */}
                      <button className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0a0a0a] group/link">
                        <span className="relative">
                          Learn More
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0a0a0a] group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <svg
                          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#a3a3a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <p className="text-[18px] text-[#525252]">No features found matching your search.</p>
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

        {/* CTA Section */}
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
                  Your AI Call Center,{' '}
                  <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                    Simplified
                  </span>
                </h2>

                <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[#525252] mb-10">
                  Start automating your lead engagement today. No credit card required.
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
