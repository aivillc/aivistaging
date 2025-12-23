'use client';

import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { faqs } from './faqData';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

const categoryIcons = {
  pricing: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  features: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  technical: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  support: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  ),
};

export default function AIVICarouselDeckFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { openDemoPopup } = useDemoPopup();

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold && activeIndex > 0) {
      // Swipe right - previous
      setDirection(-1);
      setActiveIndex(activeIndex - 1);
    } else if (info.offset.x < -threshold && activeIndex < faqs.length - 1) {
      // Swipe left - next
      setDirection(1);
      setActiveIndex(activeIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const nextSlide = () => {
    if (activeIndex < faqs.length - 1) {
      setDirection(1);
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] px-6 sm:px-12 md:px-16 lg:px-24 py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Radial Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#f84608] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8b00ff] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
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
            Swipe through our most common questions
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative" style={{ perspective: '1000px' }}>
          {/* Navigation Arrows - Desktop Only */}
          <button
            onClick={prevSlide}
            disabled={activeIndex === 0}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#737373] hover:text-[#0a0a0a] hover:border-[#0a0a0a] hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Previous question"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={activeIndex === faqs.length - 1}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#737373] hover:text-[#0a0a0a] hover:border-[#0a0a0a] hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Next question"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="relative h-[600px] sm:h-[550px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {faqs.map((faq, index) => {
                const isActive = index === activeIndex;
                const offset = index - activeIndex;
                const isVisible = Math.abs(offset) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, scale: 0.8, rotateY: direction > 0 ? 45 : -45 }}
                    animate={{
                      opacity: isActive ? 1 : 0.6,
                      scale: isActive ? 1 : 0.85,
                      rotateY: isActive ? 0 : offset * 8,
                      x: offset * 80,
                      zIndex: isActive ? 10 : 5,
                    }}
                    exit={{ opacity: 0, scale: 0.6, rotateY: direction > 0 ? -45 : 45 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    onClick={() => !isActive && goToSlide(index)}
                    className={`absolute w-full max-w-[600px] ${
                      isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div
                      className={`bg-white rounded-3xl p-8 sm:p-10 md:p-12 border transition-all duration-500 ${
                        isActive
                          ? 'border-[#e5e5e5] shadow-2xl'
                          : 'border-[#f0f0f0] shadow-lg'
                      }`}
                    >
                      {/* Badge Number */}
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[14px] font-semibold mb-6">
                        {index + 1}
                      </div>

                      {/* Category Icon */}
                      <div className="mb-6 text-[#8b00ff]">
                        {categoryIcons[faq.category as keyof typeof categoryIcons]}
                      </div>

                      {/* Question */}
                      <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-semibold text-[#0a0a0a] mb-6 leading-[1.2]">
                        {faq.question}
                      </h3>

                      {/* Answer */}
                      <p className="text-[16px] text-[#525252] leading-[1.8] mb-6">
                        {faq.answer}
                      </p>

                      {/* Category Tag */}
                      <div className="inline-block px-3 py-1 rounded-full bg-[#f5f5f5] text-[12px] text-[#737373] uppercase tracking-wider font-medium">
                        {faq.category}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {faqs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-14 h-3 bg-gradient-to-r from-[#f84608] to-[#321ca3]'
                    : 'w-3 h-3 bg-[#d1d5db] hover:bg-[#9ca3af]'
                }`}
                aria-label={`Go to question ${index + 1}`}
              />
            ))}
          </div>
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
