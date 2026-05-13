'use client';

import { ReactNode } from 'react';

interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

interface Props {
  benefits: Benefit[];
  primaryColor: string;
}

const ICONS: Record<string, ReactNode> = {
  speed: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  care: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  quality: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  default: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
};

export default function BrandedBenefits({ benefits, primaryColor }: Props) {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          How We Help Your Business
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          AI-powered tools that work around the clock to grow revenue and delight customers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const iconKey = benefit.icon || (['speed', 'care', 'quality'][i] ?? 'default');
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  {ICONS[iconKey] || ICONS.default}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
