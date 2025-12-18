'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface RetailFAQPremiumProps {
  faqs: FAQItem[];
  sectionTitle?: string;
  eyebrowLabel?: string;
}

export default function RetailFAQPremium({
  faqs,
  sectionTitle = 'Frequently Asked Questions',
  eyebrowLabel = 'Got Questions?'
}: RetailFAQPremiumProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a]">
                {sectionTitle}
              </h2>
            </div>

            {/* Premium FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'border-[#f84608]/20 bg-white shadow-lg shadow-black/5'
                      : 'border-[#f0f0f0] bg-white/80 hover:border-[#f84608]/10 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors group"
                    aria-expanded={openIndex === index}
                  >
                    <span className={`text-[16px] sm:text-[17px] font-semibold pr-4 transition-colors duration-300 ${
                      openIndex === index ? 'text-[#0a0a0a]' : 'text-[#333333] group-hover:text-[#0a0a0a]'
                    }`}>
                      {faq.question}
                    </span>

                    {/* Premium Chevron Icon */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-[#f84608] to-[#321ca3] rotate-180'
                        : 'bg-[#f5f5f5] group-hover:bg-[#f84608]/10'
                    }`}>
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          openIndex === index ? 'text-white' : 'text-[#555555]'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Panel with smooth animation */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div className="h-[1px] bg-gradient-to-r from-[#f84608]/20 via-[#a855f7]/20 to-transparent mb-5" />
                      <p className="text-[14px] sm:text-[15px] text-[#555555] leading-[1.8]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
