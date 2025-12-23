'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from './faqData';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

export default function AIVISplitTimelineFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const canvasRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { openDemoPopup } = useDemoPopup();

  // Intersection Observer for scroll sync
  useEffect(() => {
    const observers = canvasRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveIndex(index);
            }
          });
        },
        { threshold: [0.5], rootMargin: '-20% 0px -20% 0px' }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Calculate timeline scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const progress = Math.min(Math.max(visibleHeight / elementHeight, 0), 1);
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuestion = (index: number) => {
    canvasRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAFAFA] to-[#f5f0e8] px-6 sm:px-12 md:px-16 lg:px-24 py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
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
            Explore our comprehensive knowledge base
          </p>
        </motion.div>

        {/* Desktop: Split Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-12" ref={timelineRef}>
          {/* Left: Timeline (40%) */}
          <div className="lg:col-span-2 relative">
            {/* Sticky Container */}
            <div className="sticky top-32 space-y-6">
              {/* Progress Line */}
              <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-[#e5e5e5]">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#f84608] to-[#321ca3]"
                  style={{ height: `${scrollProgress * 100}%` }}
                  initial={{ height: '0%' }}
                  animate={{ height: `${scrollProgress * 100}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Timeline Items */}
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={index}
                    onClick={() => scrollToQuestion(index)}
                    className="relative w-full text-left group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number Badge */}
                      <div
                        className={`relative z-10 flex-shrink-0 w-[52px] h-[52px] rounded-full flex items-center justify-center premium-number text-[18px] transition-all duration-[400ms] ease-out ${
                          isActive
                            ? 'bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white scale-110 shadow-premium-lg aivi-glow-gradient ring-2 ring-white ring-offset-2'
                            : 'text-[#737373] shadow-premium group-hover:scale-105 group-hover:shadow-premium-lg group-hover:text-[#f84608]'
                        }`}
                        style={!isActive ? {
                          background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(248, 70, 8, 0.15), rgba(50, 28, 163, 0.15)) border-box',
                          border: '2px solid transparent'
                        } : undefined}
                      >
                        {index + 1}
                        {/* Glow backdrop for active state */}
                        {isActive && (
                          <div className="absolute inset-[-6px] rounded-full bg-gradient-to-br from-[#f84608]/30 to-[#321ca3]/30 blur-lg -z-10 animate-badge-glow" />
                        )}
                      </div>

                      {/* Question */}
                      <div className="flex-1 pt-2">
                        <p
                          className={`text-[15px] leading-[1.4] transition-all duration-300 ${
                            isActive
                              ? 'text-[#0a0a0a] font-semibold'
                              : 'text-[#737373] group-hover:text-[#0a0a0a]'
                          }`}
                        >
                          {faq.question}
                        </p>

                        {/* Active Underline */}
                        <motion.div
                          className="h-[2px] bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-full mt-2"
                          initial={{ width: 0 }}
                          animate={{ width: isActive ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right: Answer Canvas (60%) */}
          <div className="lg:col-span-3 space-y-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => {
                  canvasRefs.current[index] = el;
                }}
                className="min-h-[600px] flex items-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`canvas-${index}-${activeIndex === index ? 'active' : 'inactive'}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                  >
                    <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-2xl border border-[#e5e5e5]">
                      {/* Badge */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[16px] font-bold mb-6">
                        {index + 1}
                      </div>

                      {/* Question */}
                      <h3 className="text-[32px] lg:text-[40px] font-light text-[#0a0a0a] mb-6 leading-[1.1] tracking-[-0.02em]">
                        {faq.question}
                      </h3>

                      {/* Gradient Divider */}
                      <div className="h-[3px] w-24 bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-full mb-8" />

                      {/* Answer */}
                      <p className="text-[18px] text-[#525252] leading-[1.8] mb-8">
                        {faq.answer}
                      </p>

                      {/* Category Tag */}
                      <div className="inline-block px-4 py-2 rounded-full bg-[#f5f5f5] text-[13px] text-[#737373] uppercase tracking-wider font-semibold">
                        {faq.category}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal Tabs + Stacked Content */}
        <div className="block lg:hidden">
          {/* Horizontal Tab Scroller */}
          <div className="mb-8 -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2.5 pb-4">
              {faqs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex-shrink-0 w-11 h-11 rounded-full premium-number text-[15px] font-bold transition-all duration-[400ms] ease-out flex items-center justify-center ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white shadow-premium-lg aivi-glow-gradient scale-110 ring-2 ring-white ring-offset-1'
                      : 'text-[#737373] shadow-premium'
                  }`}
                  style={activeIndex !== index ? {
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(248, 70, 8, 0.15), rgba(50, 28, 163, 0.15)) border-box',
                    border: '2px solid transparent'
                  } : undefined}
                >
                  {index + 1}
                  {/* Glow backdrop for active state */}
                  {activeIndex === index && (
                    <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#f84608]/30 to-[#321ca3]/30 blur-md -z-10 animate-badge-glow" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Answer Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-[#e5e5e5]"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[14px] font-bold mb-4">
                {activeIndex + 1}
              </div>

              <h3 className="text-[24px] font-semibold text-[#0a0a0a] mb-4 leading-[1.2]">
                {faqs[activeIndex].question}
              </h3>

              <div className="h-[2px] w-16 bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-full mb-6" />

              <p className="text-[16px] text-[#525252] leading-[1.8] mb-6">
                {faqs[activeIndex].answer}
              </p>

              <div className="inline-block px-3 py-1 rounded-full bg-[#f5f5f5] text-[12px] text-[#737373] uppercase tracking-wider font-medium">
                {faqs[activeIndex].category}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mt-8 pt-8 border-t border-[#e5e5e5]">
                <button
                  onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="flex items-center gap-2 text-[14px] text-[#737373] hover:text-[#0a0a0a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <span className="text-[13px] text-[#9ca3af]">
                  {activeIndex + 1} / {faqs.length}
                </span>

                <button
                  onClick={() => setActiveIndex(Math.min(faqs.length - 1, activeIndex + 1))}
                  disabled={activeIndex === faqs.length - 1}
                  className="flex items-center gap-2 text-[14px] text-[#737373] hover:text-[#0a0a0a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
