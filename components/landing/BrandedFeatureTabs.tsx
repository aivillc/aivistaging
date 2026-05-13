'use client';

import { useState } from 'react';

interface TabContent {
  title: string;
  description: string;
  bullets: string[];
}

interface Props {
  tabs: {
    speed_to_lead: TabContent;
    customer_care: TabContent;
    quality_surveys: TabContent;
  };
  primaryColor: string;
}

const TAB_KEYS = ['speed_to_lead', 'customer_care', 'quality_surveys'] as const;

const TAB_ICONS = {
  speed_to_lead: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  customer_care: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  quality_surveys: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
};

export default function BrandedFeatureTabs({ tabs, primaryColor }: Props) {
  const [activeTab, setActiveTab] = useState<typeof TAB_KEYS[number]>('speed_to_lead');
  const activeContent = tabs[activeTab];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Three Ways AI Works For You
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From the first contact to long-term retention, AI handles every touchpoint.
        </p>

        {/* Tab buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:border sm:border-gray-200 sm:rounded-xl sm:p-1 sm:bg-white mb-10 max-w-2xl mx-auto">
          {TAB_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                activeTab === key
                  ? 'text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              style={activeTab === key ? { backgroundColor: primaryColor } : undefined}
            >
              {TAB_ICONS[key]}
              {tabs[key].title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeContent.title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">{activeContent.description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {activeContent.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <svg className="w-3.5 h-3.5" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
