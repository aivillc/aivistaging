'use client';

import { useState } from 'react';

const features = [
  {
    id: 'outbound',
    title: 'Outbound',
    color: 'bg-[#F5F5F5]',
    activeColor: 'bg-[#F5F5F5]',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
    description: 'Book more meetings faster with better data, smarter AI, and easier automation.',
    mainTitle: 'Build your pipeline smarter',
    features: [
      'Access to 275M+ contacts and 73M+ companies',
      'Advanced filters to find your ideal customer profile',
      'AI-powered personalization at scale',
      'Multi-channel sequences (email, phone, LinkedIn)',
    ],
  },
  {
    id: 'inbound',
    title: 'Inbound',
    color: 'bg-[#D4E8F5]',
    activeColor: 'bg-[#D4E8F5]',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    description: 'Capture, qualify, and route every lead instantly so hot leads never go cold.',
    mainTitle: 'Never miss a hot lead',
    features: [
      'Instant lead capture from any source',
      'AI-powered lead scoring and qualification',
      'Smart routing to the right rep at the right time',
      'Real-time notifications for high-priority leads',
    ],
  },
  {
    id: 'enrichment',
    title: 'Data Enrichment',
    color: 'bg-[#E8E5F5]',
    activeColor: 'bg-[#E8E5F5]',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
      </svg>
    ),
    description: 'Cleanse and complete your records with always-fresh data that powers smarter targeting.',
    mainTitle: 'Keep your data clean and complete',
    features: [
      'Automatic contact and company data enrichment',
      'Real-time data validation and verification',
      'Fill gaps in your existing CRM records',
      'Stay up-to-date with job changes and company updates',
    ],
  },
  {
    id: 'execution',
    title: 'Deal Execution',
    color: 'bg-[#5DD5D5]',
    activeColor: 'bg-[#5DD5D5]',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    description: 'Keep deals moving with AI-powered prep, meeting insights, and follow-up.',
    mainTitle: 'Close deals faster',
    features: [
      'Pre-meeting insights to prep in seconds',
      'AI-powered call summaries and follow-ups',
      'Pipeline boards with real-time deal alerts',
      'Conversation intelligence and coaching insights',
    ],
  },
];

export default function AIVIFeatureTabs() {
  const [activeTab, setActiveTab] = useState('outbound');

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section className="w-full bg-[#E8E5E0] px-6 py-6">
      <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16 min-h-screen">
        {/* Section Header */}
        <div className="text-center mb-8 mt-12">
          <h2 className="text-[48px] leading-[1.2] font-normal text-[#000000] mb-4 max-w-[800px] mx-auto">
            Everything you need, from finding leads to winning deals
          </h2>
          <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto">
            Powered by AIVI Data — one of the largest, most accurate business data networks on the planet.
          </p>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`flex-1 px-4 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeTab === feature.id
                  ? `${feature.activeColor} text-[#000000] shadow-md`
                  : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E8E8E8]'
              }`}
            >
              <span className="text-[13px] font-semibold uppercase tracking-[0.5px]">
                {feature.title}
              </span>
            </button>
          ))}
        </div>

        {/* Main Content Grid - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div
            key={activeTab}
            className="space-y-8 animate-[fadeInUp_0.5s_ease-out]"
          >
            <h3 className="text-[42px] leading-[1.25] font-normal text-[#000000]">
              {activeFeature.mainTitle}
            </h3>

            {/* CTA Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button className="px-6 py-3 bg-[#000000] text-white text-[15px] font-semibold rounded-md hover:bg-[#222222] transition-colors">
                Get started for free
              </button>
              <button className="px-6 py-3 bg-white border border-[#000000] text-[#000000] text-[15px] font-semibold rounded-md hover:bg-[#F5F5F5] transition-colors">
                Learn more
              </button>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {activeFeature.features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start animate-[fadeInLeft_0.5s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <svg className="w-5 h-5 text-[#000000] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[15px] leading-[1.5] text-[#333333]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Demo */}
          <div
            key={`demo-${activeTab}`}
            className={`relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${activeFeature.activeColor} animate-[fadeInRight_0.5s_ease-out]`}
          >
            <div className="aspect-[16/9] p-8 flex items-center justify-center">
              <div className="w-full bg-white/20 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <div className="h-4 bg-white/30 rounded w-3/4"></div>
                <div className="h-4 bg-white/30 rounded w-full"></div>
                <div className="h-4 bg-white/30 rounded w-5/6"></div>
                <div className="mt-6 space-y-3">
                  <div className="h-12 bg-[#E5FF00] rounded-lg flex items-center justify-center">
                    <span className="text-[14px] font-semibold text-[#000000]">{activeFeature.title} Dashboard</span>
                  </div>
                  <div className="h-10 bg-white/30 rounded-lg"></div>
                  <div className="h-10 bg-white/30 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
