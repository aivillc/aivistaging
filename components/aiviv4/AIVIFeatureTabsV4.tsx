'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsLightning, BsPersonCheck, BsGraphUp } from 'react-icons/bs';
import { HiOutlineLink } from 'react-icons/hi2';
import { useNeuralCanvas } from './hooks/useNeuralCanvas';

// Checkmark icon component for reuse
const CheckIcon = () => (
  <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const features = [
  {
    id: 'universal-lead-capture',
    title: 'Universal Lead Capture',
    activeColor: 'bg-[#FFF5F2]',
    icon: <HiOutlineLink className="w-7 h-7" />,
    description: 'AIVI Connector: Integrate Any Source',
    mainTitle: 'Capture Leads from Anywhere',
    // Video for this section
    image: '/features/lead-capture.mp4',
    imagePlaceholder: 'Dashboard showing multiple lead sources flowing into AIVI',
    cta: 'See All Integrations →',
    content: (
      <div className="space-y-6 font-manrope">
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          Your leads come from everywhere: Facebook Ads, Google, your CRM, partner APIs, web forms. <strong className="font-semibold">AIVI Connector</strong> captures them all instantly.
        </p>

        <h4 className="text-[20px] font-semibold text-[#0a0a0a] mt-8">Direct Integrations:</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Facebook Lead Ads (no Zapier needed)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Salesforce, HubSpot, Zoho (bi-directional sync)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Google Ads, LinkedIn (coming soon)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Custom API (standard JSON webhook)</span>
          </li>
        </ul>

        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal mt-6">
          The moment a lead submits—anywhere—AIVI has it.<br />
          <strong className="font-semibold text-[#f84608]">Response time starts: now.</strong>
        </p>
      </div>
    ),
    stats: [
      { source: 'Facebook Ads', time: '<1 second', sync: 'Real-time' },
      { source: 'Salesforce', time: '<1 second', sync: 'Bi-directional' },
      { source: 'Custom API', time: '<1 second', sync: '100% fields' },
    ],
  },
  {
    id: 'ai-campaign-engine',
    title: 'AI Campaign Engine',
    activeColor: 'bg-[#F0F7FF]',
    icon: <BsLightning className="w-7 h-7" />,
    description: 'AIVI | Ignite: 3-Second Multi-Channel',
    mainTitle: 'AI Contact & Qualification in 3 Seconds',
    image: '/features/campaign-engine.mp4',
    imagePlaceholder: 'Split screen showing campaign setup + live conversation',
    cta: 'Try Campaign Wizard →',
    content: (
      <div className="space-y-6 font-manrope">
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          <strong className="font-semibold">AIVI | Ignite</strong> turns every lead into a personalized, multi-channel conversation—SMS, email, and voice—orchestrated automatically based on what converts best.
        </p>

        <h4 className="text-[20px] font-semibold text-[#0a0a0a] mt-8">Campaign Wizard (Setup in 5 Minutes):</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Choose your objective (qualify, book appointment, transfer)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">AI optimizes your messaging (or use your own)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Select voice personality (professional, friendly, urgent)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Set sequence rules (when to SMS, when to call, when to email)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">AIVI determines optimal channel per lead automatically</span>
          </li>
        </ul>

        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal mt-6">
          Your AI learns: Which channel works for which lead type, optimal timing, best messaging—<strong className="font-semibold">automatically</strong>.
        </p>
      </div>
    ),
    sequence: [
      { time: '00:03s', action: 'SMS: "Hi Sarah, got your $45K request..."' },
      { time: '00:45s', action: 'Lead responds via SMS' },
      { time: '01:30s', action: 'AI asks qualifying questions (debt, credit)' },
      { time: '02:15s', action: 'Voice call offered, lead accepts' },
      { time: '03:00s', action: 'Credit pulled (682, $38K debt)' },
      { time: '03:45s', action: 'Transferred to Michael (top closer for this profile)' },
    ],
  },
  {
    id: 'intelligent-routing',
    title: 'Intelligent Routing',
    activeColor: 'bg-[#F5F0FF]',
    icon: <BsPersonCheck className="w-7 h-7" />,
    description: 'Right Lead, Right Closer, Full Context',
    mainTitle: 'Route to Your Best Closer, Every Time',
    image: '/features/agent-desktop.mp4',
    imagePlaceholder: 'Agent desktop screenshot with live transfer incoming',
    cta: 'See Agent Desktop Demo →',
    content: (
      <div className="space-y-6 font-manrope">
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          Your leads aren&apos;t all the same. Why route them randomly?
        </p>
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          AIVI learns which agents close which lead types best—then routes automatically. Your closers get fully qualified leads with complete context before they answer.
        </p>

        <h4 className="text-[20px] font-semibold text-[#0a0a0a] mt-8">Intelligent Routing Engine:</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Analyzes agent performance by lead type</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Routes based on match probability (lead profile × agent strength)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Load balances across available agents</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Escalates high-value leads to top performers</span>
          </li>
        </ul>
      </div>
    ),
    agentDesktop: {
      leadName: 'Sarah Johnson',
      leadScore: '87/100 (HOT) 🔥',
      credit: '682',
      debt: '$38,000',
      preApproved: true,
      summary: 'Sarah is motivated to consolidate, mentioned she\'s stressed about multiple payments. Responded well to "one monthly payment" framing. No rate objections yet.',
      talkTrack: 'Lead with: "Hi Sarah, I can get you to one payment of $487/month—$200 less than you\'re paying now."',
      whyRouted: 'Michael closes 41% on 680-720 credit scores (23% above team average)',
    },
  },
  {
    id: 'learning-dashboard',
    title: 'Learning Dashboard',
    activeColor: 'bg-[#F0FFF4]',
    icon: <BsGraphUp className="w-7 h-7" />,
    description: 'Journey Mapping & Auto-Optimization',
    mainTitle: 'Your AI Gets Smarter Every Day',
    image: '/features/dashboard.mp4',
    imagePlaceholder: 'Dashboard with real-time stats + journey map visualization',
    cta: 'See Live Dashboard Demo →',
    content: (
      <div className="space-y-6 font-manrope">
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          AIVI doesn&apos;t just run campaigns—it learns from every interaction and optimizes automatically. No manual tweaking required.
        </p>

        <h4 className="text-[20px] font-semibold text-[#0a0a0a] mt-8">What AIVI Learns Automatically:</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Which channel works best (SMS vs voice vs email) per lead type</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Optimal contact timing (morning vs evening, weekday vs weekend)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Best messaging approach (urgent vs friendly, short vs detailed)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Agent performance patterns (who closes what, and how)</span>
          </li>
          <li className="flex gap-4 items-start">
            <CheckIcon />
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Lead quality signals (which sources convert, which don&apos;t)</span>
          </li>
        </ul>
      </div>
    ),
    dashboardStats: {
      contactRate: { value: '65%', change: '+12pts', from: '53%' },
      transferRate: { value: '58%', change: '+15pts', from: '43%' },
      closeRate: { value: '13%', change: '+5pts', from: '8%' },
      responseTime: { value: '3.2 seconds', change: 'down from 23min' },
      leadsContacted: { value: '14,950/23,000', change: '65% contact' },
      revenueLift: { value: '+$1.2M/mo', change: '78% growth' },
    },
    learnings: [
      { icon: '📊', title: 'Channel Performance', insight: 'Spanish-speaking leads convert 34% better via SMS first (vs. voice call). Auto-routing adjusted.' },
      { icon: '⏰', title: 'Timing Optimization', insight: 'Friday afternoon leads respond 2.3X better on Monday 9am (vs. Friday follow-up). Sequence updated.' },
      { icon: '🎯', title: 'Agent Routing', insight: 'Michael closes 41% on rate objections. Jessica closes 38% on 680-720 scores. Auto-routing now matches lead type to agent strength.' },
    ],
  },
];

export default function AIVIFeatureTabsV4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const accumulatedDelta = useRef(0);
  const isProcessing = useRef(false);
  const hasCompletedForward = useRef(false);
  const hasCompletedBackward = useRef(true);
  const exitCooldown = useRef(false);
  const initialLoadComplete = useRef(false);

  // Canvas ref for constellation animation
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeFeature = features[activeIndex];

  // Use the shared neural canvas hook
  useNeuralCanvas(canvasRef);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set initialLoadComplete after mount delay to prevent auto-lock on page refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      initialLoadComplete.current = true;
    }, 500);
    return () => clearTimeout(timer);
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

  // Observer for header leaving viewport (scrolling down) - engage lock at tab 0
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (exitCooldown.current) return;
        if (!initialLoadComplete.current) return;

        if (!entry.isIntersecting && !isLocked && hasCompletedBackward.current) {
          setIsLocked(true);
          setActiveIndex(0);
          hasCompletedBackward.current = false;
          accumulatedDelta.current = 0;
          isProcessing.current = false;
          centerSection();
        }
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [isMobile, isLocked, centerSection]);

  // Observer for container re-entry from bottom (scrolling up) - engage lock at tab 3
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (exitCooldown.current) return;

        if (!entry.isIntersecting) {
          exitCooldown.current = false;
          return;
        }

        const rect = entry.boundingClientRect;
        if (rect.top > 0 && !isLocked && hasCompletedForward.current) {
          setIsLocked(true);
          setActiveIndex(3);
          hasCompletedForward.current = false;
          accumulatedDelta.current = 0;
          isProcessing.current = false;
          centerSection();
        }
      },
      { threshold: 0.1 }
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

      accumulatedDelta.current += e.deltaY;

      const threshold = 80;

      if (Math.abs(accumulatedDelta.current) >= threshold) {
        isProcessing.current = true;
        const direction = accumulatedDelta.current > 0 ? 1 : -1;
        accumulatedDelta.current = 0;

        setActiveIndex(prev => {
          if (prev === 3 && direction > 0) {
            exitCooldown.current = true;
            hasCompletedForward.current = true;
            hasCompletedBackward.current = false;
            setTimeout(() => {
              setIsLocked(false);
              window.scrollBy({ top: 400, behavior: 'smooth' });
            }, 50);
            return 3;
          }

          if (prev === 0 && direction < 0) {
            exitCooldown.current = true;
            hasCompletedBackward.current = true;
            hasCompletedForward.current = false;
            setTimeout(() => {
              setIsLocked(false);
              window.scrollBy({ top: -400, behavior: 'smooth' });
            }, 50);
            return 0;
          }

          return prev + direction;
        });

        setTimeout(() => {
          isProcessing.current = false;
        }, 200);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [isLocked, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28 lg:py-32 font-manrope bg-[#f5f0e8]"
      aria-labelledby="features-heading"
    >
      {/* Neural Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Subtle gradient orbs for depth */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #f84608 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, #321ca3 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="w-full relative z-10">
        {/* Premium Section Header */}
        <div ref={headerRef} className="text-center mb-14 sm:mb-18">
          {/* Style 3: Dual Line Embrace Eyebrow */}
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
              How It Works
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
          </div>

          <h2
            id="features-heading"
            className="text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] font-medium text-[#0a0a0a] mb-6 max-w-[900px] mx-auto tracking-[-0.02em]"
          >
            The Complete Lead Monetization Platform
          </h2>
          <p className="text-[18px] sm:text-[20px] leading-[1.7] text-[#555555] max-w-[700px] mx-auto font-normal">
            Four integrated systems—from AIVI Connector to AIVI | Ignite<br className="hidden sm:block" />
            that turn every lead into revenue automatically.
          </p>
        </div>

        {/* Main Content Container */}
        <div ref={containerRef} className="space-y-10">
          {/* Premium Progress Indicator */}
          {!isMobile && (
            <div className="flex justify-center items-center gap-3 mb-10" role="group" aria-label="Feature progress">
              {features.map((feature, i) => (
                <motion.button
                  type="button"
                  key={i}
                  onClick={(e) => { e.preventDefault(); setActiveIndex(i); }}
                  className="relative h-3.5 rounded-full focus-brand-ring overflow-hidden"
                  animate={{ width: i === activeIndex ? 56 : 14 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  aria-label={`Go to ${feature.title}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                >
                  <div className="absolute inset-0 bg-[#e5e7eb] rounded-full" />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #f84608, #321ca3)' }}
                    animate={{ opacity: i <= activeIndex ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          )}

          {/* Premium Scroll Lock Indicator */}
          <AnimatePresence>
            {isLocked && !isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center mb-8"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-[#f84608]/20 shadow-lg shadow-[#f84608]/5">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                  <span className="text-[15px] font-semibold text-[#374151]">
                    Scroll to explore all steps
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Premium Tab Buttons */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
            role="tablist"
            aria-label="AIVI Orchestration Steps"
          >
            {features.map((feature, index) => (
              <button
                type="button"
                key={feature.id}
                id={feature.id}
                ref={(el) => { tabRefs.current[index] = el; }}
                onClick={(e) => { e.preventDefault(); setActiveIndex(index); }}
                onKeyDown={(e) => {
                  const key = e.key;
                  if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(key)) return;
                  e.preventDefault();
                  let next = index;
                  if (key === 'ArrowRight') next = (index + 1) % features.length;
                  if (key === 'ArrowLeft') next = (index - 1 + features.length) % features.length;
                  if (key === 'Home') next = 0;
                  if (key === 'End') next = features.length - 1;
                  setActiveIndex(next);
                  requestAnimationFrame(() => tabRefs.current[next]?.focus());
                }}
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="feature-panel"
                tabIndex={activeIndex === index ? 0 : -1}
                className={`relative flex flex-col items-start gap-3 sm:gap-4 p-5 sm:p-6 lg:p-7 rounded-2xl transition-all duration-400 ease-out focus:outline-none focus-brand-ring ${
                  activeIndex === index
                    ? 'bg-white shadow-xl shadow-black/5 border border-[#f84608]/20'
                    : 'bg-white/60 border border-[#e5e7eb] hover:bg-white hover:shadow-lg hover:shadow-black/5'
                }`}
              >
                {/* Step number badge */}
                <div className={`absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full text-[12px] font-bold flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white shadow-md shadow-[#f84608]/20'
                    : 'bg-[#f3f4f6] text-[#9ca3af]'
                }`}>
                  {index + 1}
                </div>

                {/* Icon with premium styling */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white shadow-lg shadow-[#f84608]/20'
                    : 'bg-[#f8f9fa] text-[#6b7280]'
                }`}>
                  {feature.icon}
                </div>

                {/* Text with description */}
                <div className="flex-1 text-left">
                  <span className="block text-[17px] font-semibold text-[#0a0a0a]">{feature.title}</span>
                  <span className="block text-[14px] text-[#6b7280] mt-1.5 font-medium">{feature.description}</span>
                </div>

                {/* Active indicator line */}
                <motion.div
                  className="absolute bottom-0 left-5 right-5 h-1 rounded-full bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                  initial={false}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scaleX: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          {/* Premium Content Panel */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start min-h-[400px] md:min-h-[480px] lg:min-h-[560px]"
            role="tabpanel"
            id="feature-panel"
            aria-labelledby={features[activeIndex].id}
          >
            {/* Left Column - Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-8"
              >
                <div>
                  {/* Premium step indicator */}
                  <div className="inline-flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[14px] font-bold flex items-center justify-center shadow-lg shadow-[#f84608]/20">
                      {activeIndex + 1}
                    </span>
                    <span className="text-[14px] font-semibold tracking-[2px] text-[#f84608] uppercase">of 4</span>
                  </div>

                  <h3 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.08] font-medium text-[#0a0a0a] tracking-[-0.02em]">
                    {activeFeature.mainTitle}
                  </h3>
                </div>

                {/* Dynamic Content */}
                {activeFeature.content}

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 pt-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="group relative w-full sm:w-auto px-10 py-5 overflow-hidden text-white text-[17px] font-semibold rounded-xl bg-gradient-to-r from-[#f84608] to-[#321ca3] hover:shadow-xl hover:shadow-[#f84608]/20 hover:-translate-y-0.5 transition-all duration-400"
                  >
                    <span className="relative z-10">See It In Action</span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="w-full sm:w-auto px-10 py-5 bg-white/90 backdrop-blur-sm border-2 border-[#f84608]/30 text-[#f84608] text-[17px] font-semibold rounded-xl hover:bg-white hover:border-[#f84608]/50 hover:shadow-lg hover:shadow-[#f84608]/10 transition-all duration-400"
                  >
                    Learn more
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Column - Image + Visual Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="relative mt-8 lg:mt-0 space-y-6"
              >
                {/* Outer glow effect */}
                <div
                  className="absolute -inset-4 rounded-[32px] opacity-40 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(248,70,8,0.15), transparent 70%)' }}
                  aria-hidden="true"
                />

                {/* Image Placeholder Area */}
                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${
                  activeIndex === 0 ? 'from-[#FFF7F5] to-[#FFF0EB]' :
                  activeIndex === 1 ? 'from-[#F5F8FF] to-[#EBF2FF]' :
                  activeIndex === 2 ? 'from-[#FAF5FF] to-[#F3EBFF]' :
                  'from-[#F5FFF7] to-[#EBFFEF]'
                } border border-white/60 shadow-xl shadow-black/5`}>
                  <div className="aspect-[16/9] flex items-center justify-center p-8">
                    {/* Check if file is video (.mp4) or image */}
                    {activeFeature.image.endsWith('.mp4') ? (
                      <video
                        className="w-full h-full rounded-xl object-cover"
                        src={activeFeature.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-white/80 backdrop-blur-sm border-2 border-dashed border-[#d1d5db] flex flex-col items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f84608]/20 to-[#321ca3]/20 flex items-center justify-center">
                          {activeFeature.icon}
                        </div>
                        <div className="text-center px-4">
                          <p className="text-[14px] font-semibold text-[#374151] mb-1">Add Image Here</p>
                          <p className="text-[12px] text-[#6b7280]">{activeFeature.imagePlaceholder}</p>
                          <p className="text-[11px] text-[#9ca3af] mt-2 font-mono">{activeFeature.image}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Feature-Specific Visual Card */}
                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${
                  activeIndex === 0 ? 'from-[#FFF7F5] to-[#FFF0EB]' :
                  activeIndex === 1 ? 'from-[#F5F8FF] to-[#EBF2FF]' :
                  activeIndex === 2 ? 'from-[#FAF5FF] to-[#F3EBFF]' :
                  'from-[#F5FFF7] to-[#EBFFEF]'
                } border border-white/60 shadow-xl shadow-black/5`}>
                  <div className="p-6 md:p-8">
                    <div className="w-full bg-white/90 backdrop-blur-md rounded-xl p-5 lg:p-6 shadow-lg border border-white/80">
                      {/* Visual representation based on section */}
                      {activeIndex === 0 ? (
                        /* Lead Sources Stats Table for Universal Lead Capture */
                        <div className="space-y-4">
                          <h4 className="text-[15px] font-semibold text-[#0a0a0a] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Live Integration Status
                          </h4>
                          <div className="overflow-hidden rounded-lg border border-[#e5e5e5]">
                            <table className="w-full text-[13px]">
                              <thead className="bg-[#f8f8f8]">
                                <tr>
                                  <th className="text-left py-2 px-3 font-semibold text-[#374151]">Lead Source</th>
                                  <th className="text-left py-2 px-3 font-semibold text-[#374151]">Capture Time</th>
                                  <th className="text-left py-2 px-3 font-semibold text-[#374151]">Data Sync</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#e5e5e5]">
                                <tr>
                                  <td className="py-2.5 px-3 text-[#0a0a0a] font-medium">Facebook Ads</td>
                                  <td className="py-2.5 px-3 text-[#f84608] font-semibold">&lt;1 second</td>
                                  <td className="py-2.5 px-3 text-[#10b981]">Real-time</td>
                                </tr>
                                <tr>
                                  <td className="py-2.5 px-3 text-[#0a0a0a] font-medium">Salesforce</td>
                                  <td className="py-2.5 px-3 text-[#f84608] font-semibold">&lt;1 second</td>
                                  <td className="py-2.5 px-3 text-[#10b981]">Bi-directional</td>
                                </tr>
                                <tr>
                                  <td className="py-2.5 px-3 text-[#0a0a0a] font-medium">Custom API</td>
                                  <td className="py-2.5 px-3 text-[#f84608] font-semibold">&lt;1 second</td>
                                  <td className="py-2.5 px-3 text-[#10b981]">100% fields</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ) : activeIndex === 1 ? (
                        /* Campaign Sequence Timeline for AI Campaign Engine */
                        <div className="space-y-4">
                          <h4 className="text-[15px] font-semibold text-[#0a0a0a]">Live Sequence Example:</h4>
                          <div className="bg-[#f8f8f8] rounded-lg p-4 border border-[#e5e5e5]">
                            <p className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider mb-3">Campaign: Debt Consolidation Leads</p>
                            <div className="space-y-2">
                              {[
                                { time: '00:03s', action: 'SMS: "Hi Sarah, got your $45K request..."', type: 'sms' },
                                { time: '00:45s', action: 'Lead responds via SMS', type: 'response' },
                                { time: '01:30s', action: 'AI asks qualifying questions', type: 'ai' },
                                { time: '02:15s', action: 'Voice call offered, lead accepts', type: 'voice' },
                                { time: '03:00s', action: 'Credit pulled (682, $38K debt)', type: 'data' },
                                { time: '03:45s', action: 'Transferred to Michael', type: 'transfer' },
                              ].map((step, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <span className="text-[11px] font-mono text-[#f84608] font-semibold w-14 flex-shrink-0">{step.time}</span>
                                  <span className="text-[12px] text-[#374151]">{step.action}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t border-[#e5e5e5]">
                              <p className="text-[12px] text-[#10b981] font-semibold">✓ Result: Qualified transfer in under 4 minutes</p>
                            </div>
                          </div>
                        </div>
                      ) : activeIndex === 2 ? (
                        /* Agent Desktop Preview for Intelligent Routing */
                        <div className="space-y-4">
                          <h4 className="text-[15px] font-semibold text-[#0a0a0a] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            INCOMING TRANSFER
                          </h4>
                          <div className="bg-[#f8f8f8] rounded-lg p-4 border border-[#e5e5e5] space-y-3">
                            <div className="flex justify-between items-center pb-2 border-b border-[#e5e5e5]">
                              <span className="text-[14px] font-semibold text-[#0a0a0a]">Sarah Johnson</span>
                              <span className="text-[13px] font-bold text-[#f84608]">87/100 🔥</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[12px]">
                              <div><span className="text-[#6b7280]">Credit:</span> <span className="font-semibold text-[#0a0a0a]">682</span></div>
                              <div><span className="text-[#6b7280]">Debt:</span> <span className="font-semibold text-[#0a0a0a]">$38,000</span></div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-[#e5e5e5]">
                              <p className="text-[11px] font-semibold text-[#6b7280] uppercase mb-1">AI Summary</p>
                              <p className="text-[12px] text-[#374151] leading-relaxed">Sarah is motivated to consolidate. Responded well to &quot;one monthly payment&quot; framing.</p>
                            </div>
                            <div className="bg-gradient-to-r from-[#f84608]/10 to-[#321ca3]/10 rounded-lg p-3">
                              <p className="text-[11px] font-semibold text-[#f84608] uppercase mb-1">Recommended Talk Track</p>
                              <p className="text-[12px] text-[#374151] italic">&quot;Hi Sarah, I can get you to one payment of $487/month—$200 less than you&apos;re paying now.&quot;</p>
                            </div>
                            <p className="text-[11px] text-[#6b7280]">
                              <strong className="text-[#0a0a0a]">Why Routed to You:</strong> Michael closes 41% on 680-720 credit scores (23% above team avg)
                            </p>
                          </div>
                        </div>
                      ) : (
                        /* Dashboard Stats + AI Learnings for Learning Dashboard */
                        <div className="space-y-4">
                          <h4 className="text-[15px] font-semibold text-[#0a0a0a]">Performance Dashboard (Last 30 Days)</h4>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-[#f8f8f8] rounded-lg p-3 text-center border border-[#e5e5e5]">
                              <p className="text-[20px] font-bold aivi-gradient-text">65%</p>
                              <p className="text-[10px] text-[#6b7280] font-medium">Contact Rate</p>
                              <p className="text-[9px] text-[#10b981]">+12pts</p>
                            </div>
                            <div className="bg-[#f8f8f8] rounded-lg p-3 text-center border border-[#e5e5e5]">
                              <p className="text-[20px] font-bold aivi-gradient-text">58%</p>
                              <p className="text-[10px] text-[#6b7280] font-medium">Transfer Rate</p>
                              <p className="text-[9px] text-[#10b981]">+15pts</p>
                            </div>
                            <div className="bg-[#f8f8f8] rounded-lg p-3 text-center border border-[#e5e5e5]">
                              <p className="text-[20px] font-bold aivi-gradient-text">13%</p>
                              <p className="text-[10px] text-[#6b7280] font-medium">Close Rate</p>
                              <p className="text-[9px] text-[#10b981]">+5pts</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-[11px] font-semibold text-[#6b7280] uppercase">What AIVI Learned This Month</p>
                            {[
                              { icon: '📊', insight: 'Spanish-speaking leads convert 34% better via SMS first' },
                              { icon: '⏰', insight: 'Friday leads respond 2.3X better on Monday 9am' },
                              { icon: '🎯', insight: 'Auto-routing now matches lead type to agent strength' },
                            ].map((item, i) => (
                              <div key={i} className="flex items-start gap-2 bg-[#f8f8f8] rounded-lg p-2.5 border border-[#e5e5e5]">
                                <span className="text-[14px]">{item.icon}</span>
                                <p className="text-[11px] text-[#374151]">{item.insight}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
