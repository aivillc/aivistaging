'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from './faqData';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

// Group FAQs by category
const categorizedFAQs = {
  pricing: faqs.filter((faq) => faq.category === 'pricing'),
  features: faqs.filter((faq) => faq.category === 'features'),
  technical: faqs.filter((faq) => faq.category === 'technical'),
  support: faqs.filter((faq) => faq.category === 'support'),
};

const categoryInfo = {
  pricing: { label: 'Pricing & Plans', color: 'from-[#f84608] to-[#fb923c]' },
  features: { label: 'Features & Customization', color: 'from-[#8b00ff] to-[#a855f7]' },
  technical: { label: 'Technical Details', color: 'from-[#f84608] to-[#321ca3]' },
  support: { label: 'Support & Results', color: 'from-[#321ca3] to-[#8b00ff]' },
};

export default function AIVILayeredAccordionFAQ() {
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [collapsedCategories, setCollapsedCategories] = useState<string[]>([]);
  const { openDemoPopup } = useDemoPopup();

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const toggleCategory = (category: string) => {
    setCollapsedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="w-full bg-[#FAFAFA] px-6 sm:px-12 md:px-16 lg:px-24 py-20 sm:py-28 md:py-32">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#f84608] to-[#321ca3]" />
            <span className="text-[13px] font-medium text-[#f84608] uppercase tracking-[0.2em]">
              FAQ
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#321ca3] to-[#f84608]" />
          </div>

          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-light text-[#0a0a0a] mb-6 leading-[1.08] tracking-[-0.03em]">
            Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto leading-[1.8]">
            Everything you need to know about AIVI and how it can transform your lead conversion
          </p>
        </motion.div>

        {/* Categorized Accordion */}
        <div className="space-y-12">
          {Object.entries(categorizedFAQs).map(([category, categoryFAQs], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between mb-4 group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-[2px] w-12 bg-gradient-to-r ${
                      categoryInfo[category as keyof typeof categoryInfo].color
                    }`}
                  />
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0a0a0a] group-hover:text-[#f84608] transition-colors">
                    {categoryInfo[category as keyof typeof categoryInfo].label}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 text-[#737373] transition-transform duration-300 ${
                    collapsedCategories.includes(category) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Questions within Category */}
              <AnimatePresence initial={false}>
                {!collapsedCategories.includes(category) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 overflow-hidden"
                  >
                    {categoryFAQs.map((faq, index) => {
                      const questionId = `${category}-${index}`;
                      const isOpen = openQuestions.includes(questionId);

                      return (
                        <div
                          key={questionId}
                          className={`bg-white rounded-2xl border transition-all duration-300 ${
                            isOpen
                              ? 'border-[#e5e5e5] shadow-xl shadow-black/5'
                              : 'border-[#f0f0f0] hover:border-[#e5e5e5] hover:shadow-lg hover:shadow-black/3'
                          }`}
                        >
                          <button
                            onClick={() => toggleQuestion(questionId)}
                            className="w-full flex justify-between items-center gap-6 text-left p-6 sm:p-7 group"
                            aria-expanded={isOpen}
                          >
                            <span
                              className={`text-[16px] sm:text-[17px] leading-[1.5] flex-1 transition-colors duration-200 ${
                                isOpen
                                  ? 'text-[#0a0a0a] font-medium'
                                  : 'text-[#374151] group-hover:text-[#0a0a0a]'
                              }`}
                            >
                              {faq.question}
                            </span>
                            <div
                              className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                                isOpen
                                  ? 'bg-[#0a0a0a] text-white'
                                  : 'bg-[#f5f5f5] text-[#737373] group-hover:bg-[#e5e5e5]'
                              }`}
                            >
                              <svg
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                                  <div className="h-[1px] bg-[#f0f0f0] mb-5" />
                                  <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className="text-[15px] sm:text-[16px] leading-[1.8] text-[#525252]"
                                  >
                                    {faq.answer}
                                  </motion.p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[15px] text-[#737373] mb-6">Still have questions?</p>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
