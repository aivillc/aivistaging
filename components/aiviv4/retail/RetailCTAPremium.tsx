'use client';

import Link from 'next/link';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

interface RetailCTAPremiumProps {
  headline?: string;
  subheadline?: string;
  eyebrowLabel?: string;
}

export default function RetailCTAPremium({
  headline = 'Ready to Transform Your Business?',
  subheadline = 'Join hundreds of businesses achieving exceptional results with AIVI.',
  eyebrowLabel = "Let's Talk"
}: RetailCTAPremiumProps) {
  const { openDemoPopup } = useDemoPopup();

  return (
    <section className="w-full font-manrope">
      <div className="w-full pt-16 sm:pt-20 md:pt-24">
        <div className="w-full">
          {/* Premium White Card with Gradient Top Accent */}
          <div className="relative bg-white rounded-t-2xl sm:rounded-t-3xl overflow-hidden shadow-[0_-4px_60px_rgba(0,0,0,0.06)]">
            {/* Gradient Top Accent Line */}
            <div className="h-1 sm:h-1.5 bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

            {/* Content */}
            <div className="p-8 sm:p-12 md:p-16 lg:p-20">
              <div className="max-w-[800px] mx-auto text-center">
                {/* Eyebrow Label */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                  <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                    {eyebrowLabel}
                  </span>
                  <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
                </div>

                {/* Headline with Gradient Accent */}
                <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-medium tracking-[-0.02em] text-[#0a0a0a] mb-5 leading-[1.1]">
                  {headline}
                </h2>

                {/* Subheadline */}
                <p className="text-[17px] sm:text-[19px] text-[#555555] mb-10 max-w-[550px] mx-auto leading-[1.6]">
                  {subheadline}
                </p>

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* Primary Button - Dark with arrow */}
                  <button
                    onClick={openDemoPopup}
                    className="group inline-flex items-center justify-center gap-3 h-14 px-10 bg-[#0a0a0a] text-white text-[16px] font-semibold rounded-xl hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 transition-all duration-400"
                  >
                    <span>Get Started Today</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  {/* Secondary Button - Outline */}
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center h-14 px-10 bg-transparent border-2 border-[#e0e0e0] text-[#333333] text-[16px] font-semibold rounded-xl hover:border-[#f84608]/40 hover:text-[#f84608] hover:bg-[#f84608]/5 transition-all duration-400"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#f84608]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-[#321ca3]/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
