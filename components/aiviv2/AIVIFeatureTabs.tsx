'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: 'l2c',
    title: 'Accelerate Conversions',
    activeColor: 'bg-[#F5F5F5]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
    description: 'Orchestrate intelligent cross-channel engagement from first contact to closed deal.',
    mainTitle: 'From Contact to Conversion',
    features: [
      'Omnichannel lead nurturing with contextual engagement',
      'AI-optimized channel selection for maximum impact',
      'Intelligent 3-way conversational threading',
      'Automated callback scheduling and prioritization',
      'Native CRM and data source integrations',
      'Apple & Google call screening navigation',
      'Pre-engagement lead warming sequences',
      'Direct social media platform connectivity',
    ],
  },
  {
    id: 'ltv',
    title: 'Maximize LTV',
    activeColor: 'bg-[#D4E8F5]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    description: 'Reactivate dormant relationships and extract maximum value from your customer base.',
    mainTitle: 'Unlock Customer Lifetime Value',
    features: [
      'Intelligent relationship reactivation campaigns',
      'Purpose-built CRM with engagement intelligence',
      'Advanced orchestration and automation engine',
      'Rule-based campaign management system',
      'Unified command center for engagement history',
      'Time-triggered reengagement workflows',
    ],
  },
  {
    id: 'performance',
    title: 'Optimize Performance',
    activeColor: 'bg-[#E8E5F5]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
      </svg>
    ),
    description: 'Continuously monitor and enhance both human and AI agent performance.',
    mainTitle: 'Elevate Agent Excellence',
    features: [
      'Real-time engagement monitoring and scoring',
      'Predictive anomaly detection algorithms',
      'Live coaching powered by best practices',
      'AI agent performance analytics dashboard',
      'Supervisor listen-in and barge capabilities',
      'Comprehensive agent performance scorecards',
      'Autonomous prompt optimization engine',
      'Systematic A/B testing framework',
    ],
  },
  {
    id: 'intelligence',
    title: 'Data Intelligence',
    activeColor: 'bg-[#5DD5D5]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
      </svg>
    ),
    description: 'Transform raw data into actionable insights with enterprise-grade analytics.',
    mainTitle: 'Intelligence at Scale',
    features: [
      'Real-time analytics and reporting dashboard',
      'Predictive lead scoring with ML models',
      'Custom KPI tracking and benchmarking',
      'Cross-channel attribution modeling',
      'Automated insight generation',
      'Data enrichment and validation pipelines',
      'Enterprise security and compliance',
      'API-first architecture for extensibility',
    ],
  },
];

export default function AIVIFeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const accumulatedDelta = useRef(0);
  const isProcessing = useRef(false);
  const hasCompletedForward = useRef(false);
  const hasCompletedBackward = useRef(true); // Start true to allow initial lock
  const exitCooldown = useRef(false); // Prevent immediate re-lock after exit

  const activeFeature = features[activeIndex];

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Center section in viewport
  const centerSection = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;
    const scrollOffset = elementCenter - viewportCenter;

    window.scrollBy({
      top: scrollOffset,
      behavior: 'smooth'
    });
  }, []);

  // Intersection Observer - with cooldown to prevent snap-back
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Don't re-engage if in cooldown period
        if (exitCooldown.current) return;

        // Reset cooldown when section leaves viewport
        if (!entry.isIntersecting) {
          exitCooldown.current = false;
          return;
        }

        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          // Detect entry direction based on bounding rect
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          const elementCenterY = rect.top + rect.height / 2;
          const isEnteringFromBottom = elementCenterY > viewportHeight / 2;

          // Coming from top (scroll down) - start at first tab
          if (!isLocked && hasCompletedBackward.current) {
            setIsLocked(true);
            setActiveIndex(isEnteringFromBottom ? 3 : 0);
            if (isEnteringFromBottom) {
              hasCompletedForward.current = false;
            } else {
              hasCompletedBackward.current = false;
            }
            accumulatedDelta.current = 0;
            isProcessing.current = false;
            centerSection();
          }
          // Coming from bottom (scroll up) - start at last tab
          else if (!isLocked && hasCompletedForward.current) {
            setIsLocked(true);
            setActiveIndex(isEnteringFromBottom ? 3 : 0);
            if (isEnteringFromBottom) {
              hasCompletedForward.current = false;
            } else {
              hasCompletedBackward.current = false;
            }
            accumulatedDelta.current = 0;
            isProcessing.current = false;
            centerSection();
          }
        }
      },
      { threshold: [0.4, 0] }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMobile, isLocked, centerSection]);

  // Wheel handler - cleaner tab switching
  useEffect(() => {
    if (!isLocked || isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isProcessing.current) return;

      // Accumulate scroll delta
      accumulatedDelta.current += e.deltaY;

      // Threshold for tab switch (adjust for sensitivity)
      const threshold = 50;

      if (Math.abs(accumulatedDelta.current) >= threshold) {
        isProcessing.current = true;
        const direction = accumulatedDelta.current > 0 ? 1 : -1;
        accumulatedDelta.current = 0;

        setActiveIndex(prev => {
          // Immediate exit at boundaries - no extra scroll needed
          if (prev === 3 && direction > 0) {
            // Already at last tab, scrolling down - exit immediately
            exitCooldown.current = true;
            hasCompletedForward.current = true;
            hasCompletedBackward.current = false;
            setTimeout(() => {
              setIsLocked(false);
              window.scrollBy({ top: 300, behavior: 'smooth' });
            }, 50);
            return 3;
          }

          if (prev === 0 && direction < 0) {
            // Already at first tab, scrolling up - exit immediately
            exitCooldown.current = true;
            hasCompletedBackward.current = true;
            hasCompletedForward.current = false;
            setTimeout(() => {
              setIsLocked(false);
              window.scrollBy({ top: -300, behavior: 'smooth' });
            }, 50);
            return 0;
          }

          // Normal tab switching within bounds
          return prev + direction;
        });

        // Debounce
        setTimeout(() => {
          isProcessing.current = false;
        }, 150);
      }
    };

    // Add listener to document to ensure capture
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [isLocked, isMobile]);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] font-normal text-[#000000] mb-3 sm:mb-4 max-w-[800px] mx-auto px-2">
            AI-powered precision for smarter lead engagement and conversion
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto px-2">
            Powered by AIVI data so that every outreach is tested and proven before any of your campaigns launch to guarantee results.
          </p>
        </div>

        {/* Main Content Container */}
        <div ref={containerRef} className="space-y-8">
          {/* Progress Indicator */}
          {!isMobile && (
            <div className="flex justify-center gap-3 mb-6">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'bg-[#f84608] w-10'
                      : i < activeIndex
                      ? 'bg-[#f84608]/50 w-6'
                      : 'bg-gray-300 w-6'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Tab Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-[#000000]/30 bg-[#FAFAFA] shadow-md'
                    : 'border-[#E5E5E5] bg-white hover:border-[#CCCCCC] hover:bg-[#FAFAFA]'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  activeIndex === index ? 'bg-[#000000] text-white' : 'bg-[#F5F5F5] text-[#000000]'
                }`}>
                  {feature.icon}
                </div>
                <span className="font-semibold text-[14px] text-[#000000] text-left">
                  {feature.title}
                </span>
                <motion.div
                  className="absolute bottom-0 left-2 right-2 h-1 bg-[#f84608] rounded-full"
                  initial={false}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scaleX: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                />
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start min-h-[400px]">
            {/* Left Column - Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="space-y-6"
              >
                <h3 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.25] font-normal text-[#000000]">
                  {activeFeature.mainTitle}
                </h3>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="w-full sm:w-auto px-6 py-3 bg-[#000000] text-white text-[15px] font-semibold rounded-md hover:bg-[#222222] transition-colors">
                    Get started for free
                  </button>
                  <button className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-[#000000] text-[#000000] text-[15px] font-semibold rounded-md hover:bg-[#000000] hover:text-white transition-colors">
                    Learn more
                  </button>
                </div>

                {/* Feature List */}
                <div className="space-y-3">
                  {activeFeature.features.map((item, index) => (
                    <motion.div
                      key={`${activeIndex}-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[#f84608] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[15px] leading-[1.5] text-[#333333]">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Column - Demo Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`demo-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`rounded-2xl overflow-hidden shadow-lg ${activeFeature.activeColor} mt-6 lg:mt-0`}
              >
                <div className="aspect-[16/10] p-6 md:p-8 flex items-center justify-center">
                  <div className="w-full bg-white/25 backdrop-blur-sm rounded-xl p-6 space-y-4">
                    <div className="h-4 bg-white/40 rounded w-3/4"></div>
                    <div className="h-4 bg-white/40 rounded w-full"></div>
                    <div className="h-4 bg-white/40 rounded w-5/6"></div>
                    <div className="mt-6 space-y-3">
                      <div className="h-12 bg-[#f84608] rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-[14px] font-semibold text-white">{activeFeature.title} Dashboard</span>
                      </div>
                      <div className="h-10 bg-white/40 rounded-lg"></div>
                      <div className="h-10 bg-white/40 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
