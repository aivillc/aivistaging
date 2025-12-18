'use client';

import { useState } from 'react';
import { useDemoPopup } from '../aiviv3/DemoPopupContext';

const faqs = [
  {
    question: 'How does AIVI charge?',
    answer:
      'We keep pricing simple with a per-lead basis for every lead AIVI processes. This transparent model means you only pay for actual results. Visit our pricing page for detailed information.',
  },
  {
    question: 'Is AIVI customizable?',
    answer:
      'Yes, every element of AIVI\'s outreach is fully customizable and personalized to your business. From voice tone to messaging cadence, you have complete control over how AIVI represents your brand.',
  },
  {
    question: 'What channels does AIVI support?',
    answer:
      'AIVI is omnichannel, delivering the best results through voice, SMS, and email. We continuously expand our channel support to ensure maximum reach and engagement.',
  },
  {
    question: 'Do we need to provide sequences and content?',
    answer:
      'You can provide your own content, but our experienced team and AI-driven data can guide you to the best options. Our managed packages handle all content creation and optimization for you.',
  },
  {
    question: 'What results can we expect?',
    answer:
      'Results depend on your data quality. With strong data, you\'ll see higher contact rates and improved close rates compared to traditional methods. Our clients typically see 2-3x improvement in lead conversion.',
  },
  {
    question: 'Does AIVI offer a trial?',
    answer:
      'Yes! We offer a free trial for 100 leads, or a paid trial covering 500 leads with full feature access. This lets you evaluate AIVI\'s performance with your actual data.',
  },
  {
    question: 'What makes AIVI different from other AI voice solutions?',
    answer:
      'Our team brings 20+ years of experience building AI, telecom, contact center, and lead generation tools for Fortune 100 companies. This deep expertise ensures we solve real business problems effectively.',
  },
  {
    question: 'Is there a minimum lead volume?',
    answer:
      'Our managed service has a minimum volume requirement. We\'re also developing a self-serve model with no limits for businesses of all sizes.',
  },
];

export default function AIVIFAQV4() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openDemoPopup } = useDemoPopup();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-[#FAFAFA] px-6 sm:px-12 md:px-16 lg:px-24 py-20 sm:py-28 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#f84608] to-[#321ca3]" />
            <span className="text-[13px] font-medium text-[#f84608] uppercase tracking-[0.2em]">
              FAQ
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#321ca3] to-[#f84608]" />
          </div>

          <h2
            id="faq-heading"
            className="text-[36px] sm:text-[44px] md:text-[52px] font-light text-[#0a0a0a] mb-6 leading-[1.08] tracking-[-0.03em]"
          >
            Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto leading-[1.8]">
            Everything you need to know about AIVI and how it can transform your lead conversion
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'border-[#e5e5e5] shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
                  : 'border-[#f0f0f0] hover:border-[#e5e5e5] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center gap-6 text-left p-6 sm:p-7 group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className={`text-[16px] sm:text-[17px] leading-[1.5] flex-1 transition-colors duration-200 ${
                  openIndex === index ? 'text-[#0a0a0a] font-medium' : 'text-[#374151] group-hover:text-[#0a0a0a]'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-[#0a0a0a] text-white'
                    : 'bg-[#f5f5f5] text-[#737373] group-hover:bg-[#e5e5e5]'
                }`} aria-hidden="true">
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                hidden={openIndex !== index}
              >
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                  <div className="h-[1px] bg-[#f0f0f0] mb-5" />
                  <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#525252]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[15px] text-[#737373] mb-6">
            Still have questions?
          </p>
          <button
            onClick={openDemoPopup}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[16px] font-medium text-white bg-[#0a0a0a] hover:bg-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
          >
            <span>Talk to Our Team</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
