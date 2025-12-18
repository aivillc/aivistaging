'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import PageConstellationCanvas from '@/components/aiviv4/PageConstellationCanvas';
import Script from 'next/script';
import { FaExclamationTriangle, FaChartLine, FaDollarSign, FaUsers, FaCog, FaCode, FaRocket, FaChartBar } from 'react-icons/fa';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

const caseStudiesData = {
  agency: {
    id: 'agency',
    title: 'Agency',
    heading: 'How a Marketing Agency Scaled AI Calling for Clients',
    description: 'A digital marketing agency transformed their lead generation services by implementing AIVI, enabling them to serve more clients while dramatically improving results.',
    metrics: [
      { value: '6x', label: 'Faster client closures' },
      { value: '45%', label: 'Higher profit margins' },
      { value: '90%', label: 'Client retention rate' },
    ],
    challenges: [
      {
        title: 'Manual Outreach Bottleneck',
        description: 'Sales team spent 70% of time on cold calls instead of closing deals, limiting growth potential.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'Inconsistent Lead Quality',
        description: 'No standardized qualification process meant reps wasted time on unqualified prospects.',
        icon: FaChartLine,
      },
      {
        title: 'Scaling Limitations',
        description: 'Adding new clients required proportional headcount increases, eroding margins.',
        icon: FaUsers,
      },
      {
        title: 'After-Hours Coverage Gap',
        description: 'Leads generated outside business hours went cold before follow-up.',
        icon: FaDollarSign,
      },
    ],
    solutions: [
      {
        title: 'AI-Powered Lead Qualification',
        description: 'Deployed AIVI to handle initial outreach and qualification, freeing sales team for high-value conversations.',
      },
      {
        title: 'Standardized Intake Process',
        description: 'Created consistent qualification scripts that ensure every lead is properly scored and routed.',
      },
      {
        title: 'Scalable Client Onboarding',
        description: 'New clients can be onboarded in days, not weeks, with customized AI agents for each campaign.',
      },
      {
        title: '24/7 Lead Engagement',
        description: 'AIVI engages leads instantly, regardless of time zone, ensuring no opportunity goes cold.',
      },
    ],
    results: [
      { metric: '6x', description: 'Faster time from lead to close' },
      { metric: '45%', description: 'Increase in profit margins' },
      { metric: '90%', description: 'Client retention rate' },
      { metric: '3x', description: 'More clients handled per rep' },
      { metric: '85%', description: 'Reduction in manual outreach time' },
      { metric: '24/7', description: 'Lead engagement coverage' },
    ],
  },
  retail: {
    id: 'retail',
    title: 'Retail',
    heading: 'How We Automated After-Hours Support for a 400+ Store Retailer',
    description: 'A national retail chain transformed their customer experience by implementing AIVI across all locations, ensuring every customer gets immediate assistance.',
    metrics: [
      { value: '67%', label: 'Retention increase' },
      { value: '38%', label: 'Call automation rate' },
      { value: '45%', label: 'Fewer abandoned carts' },
    ],
    challenges: [
      {
        title: 'After-Hours Support Gap',
        description: 'Customer calls outside business hours went to voicemail, resulting in lost sales and frustrated customers.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'Inconsistent Store Experience',
        description: 'Each store handled inquiries differently, leading to inconsistent brand experience.',
        icon: FaChartLine,
      },
      {
        title: 'High Cart Abandonment',
        description: 'Customers with questions during checkout had no immediate way to get answers, leading to abandoned carts.',
        icon: FaDollarSign,
      },
      {
        title: 'Overwhelmed Staff',
        description: 'Store associates spent excessive time on phone calls instead of helping in-store customers.',
        icon: FaUsers,
      },
    ],
    solutions: [
      {
        title: '24/7 Customer Support',
        description: 'AIVI handles customer inquiries around the clock, ensuring no call goes unanswered.',
      },
      {
        title: 'Standardized Responses',
        description: 'Consistent, on-brand responses across all 400+ locations for product info, store hours, and policies.',
      },
      {
        title: 'Real-Time Checkout Assistance',
        description: 'Customers can get instant answers to questions during the buying process, reducing abandonment.',
      },
      {
        title: 'Smart Call Routing',
        description: 'Complex inquiries are seamlessly transferred to available staff, with full context provided.',
      },
    ],
    results: [
      { metric: '67%', description: 'Increase in customer retention' },
      { metric: '38%', description: 'Of calls fully automated' },
      { metric: '45%', description: 'Reduction in cart abandonment' },
      { metric: '400+', description: 'Stores covered 24/7' },
      { metric: '92%', description: 'Customer satisfaction score' },
      { metric: '60%', description: 'Reduction in staff phone time' },
    ],
  },
  legal: {
    id: 'legal',
    title: 'Legal',
    heading: 'How We Booked 35% More Consultations for a Nationwide Law Firm',
    description: 'A multi-state law firm transformed their client intake process with AIVI, ensuring no potential client slips through the cracks while maintaining strict compliance standards.',
    metrics: [
      { value: '100%', label: 'After-hours answered' },
      { value: '35%', label: 'More appointments' },
      { value: '95%', label: 'Cost reduction' },
    ],
    challenges: [
      {
        title: 'Missed After-Hours Leads',
        description: 'Potential clients calling outside business hours went to voicemail, often never calling back.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'Inconsistent Intake Process',
        description: 'Different staff members collected different information, leading to incomplete case files.',
        icon: FaChartLine,
      },
      {
        title: 'High Cost Per Lead',
        description: 'Expensive answering services and dedicated intake staff drove up customer acquisition costs.',
        icon: FaDollarSign,
      },
      {
        title: 'Slow Response Times',
        description: 'Callbacks sometimes took hours, by which time potential clients had contacted competitors.',
        icon: FaUsers,
      },
    ],
    solutions: [
      {
        title: '24/7 Legal Intake',
        description: 'AIVI handles client intake around the clock, collecting case details and scheduling consultations immediately.',
      },
      {
        title: 'Standardized Qualification',
        description: 'Consistent intake scripts ensure all necessary information is captured for every potential client.',
      },
      {
        title: 'Instant Attorney Routing',
        description: 'Qualified leads are immediately routed to the appropriate attorney based on practice area and availability.',
      },
      {
        title: 'Compliance-Ready Process',
        description: 'Built-in disclosures and conflict check protocols ensure ethical compliance from first contact.',
      },
    ],
    results: [
      { metric: '100%', description: 'After-hours calls answered' },
      { metric: '35%', description: 'Increase in booked consultations' },
      { metric: '95%', description: 'Reduction in intake costs' },
      { metric: '<30s', description: 'Average response time' },
      { metric: '89%', description: 'Client satisfaction score' },
      { metric: '3x', description: 'More qualified leads per week' },
    ],
  },
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare',
    heading: 'How We Increased Patient Satisfaction by 30% for a Healthcare Network',
    description: 'A regional healthcare network transformed patient engagement with AIVI, delivering immediate support and dramatically reducing no-show rates.',
    metrics: [
      { value: '100%', label: 'Calls answered' },
      { value: '30%', label: 'CSAT increase' },
      { value: '35%', label: 'No-show reduction' },
    ],
    challenges: [
      {
        title: 'Overwhelmed Call Center',
        description: 'High call volumes led to long wait times and frustrated patients, impacting satisfaction scores.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'High No-Show Rates',
        description: 'Missed appointments cost millions annually and disrupted care schedules across the network.',
        icon: FaDollarSign,
      },
      {
        title: 'After-Hours Coverage Gap',
        description: 'Patients with urgent scheduling needs after hours had no immediate assistance available.',
        icon: FaChartLine,
      },
      {
        title: 'Multilingual Needs',
        description: 'Diverse patient population required support in multiple languages, straining staff resources.',
        icon: FaUsers,
      },
    ],
    solutions: [
      {
        title: '24/7 Patient Support',
        description: 'AIVI handles patient calls around the clock for scheduling, rescheduling, and general inquiries.',
      },
      {
        title: 'Automated Appointment Reminders',
        description: 'Proactive outreach confirms appointments and captures cancellations before they become no-shows.',
      },
      {
        title: 'Smart Scheduling',
        description: 'Patients can book, reschedule, or cancel appointments instantly without waiting on hold.',
      },
      {
        title: 'Multilingual Conversations',
        description: 'Natural conversations in over 100 languages ensure every patient receives care in their preferred language.',
      },
    ],
    results: [
      { metric: '100%', description: 'Patient calls answered' },
      { metric: '30%', description: 'Increase in patient satisfaction' },
      { metric: '35%', description: 'Reduction in no-show rates' },
      { metric: '100+', description: 'Languages supported' },
      { metric: '45%', description: 'Reduction in call wait times' },
      { metric: '24/7', description: 'Patient support coverage' },
    ],
  },
  'real-estate': {
    id: 'real-estate',
    title: 'Real Estate',
    heading: 'How We Automated 24/7 Lead Calls for a National Developer',
    description: 'A national real estate developer transformed their lead conversion process with AIVI, ensuring every inquiry becomes a qualified opportunity.',
    metrics: [
      { value: '50%', label: 'Sales automated' },
      { value: '55%', label: 'More site visits' },
      { value: '100%', label: 'After-hours captured' },
    ],
    challenges: [
      {
        title: 'Lost After-Hours Leads',
        description: 'Property inquiries outside business hours went unanswered, with leads often purchasing from competitors.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'Inconsistent Follow-Up',
        description: 'Sales agents had varying follow-up practices, leading to missed opportunities and inconsistent buyer experiences.',
        icon: FaChartLine,
      },
      {
        title: 'High Cost Per Lead',
        description: 'Marketing investments generated leads, but manual processes meant many never converted to site visits.',
        icon: FaDollarSign,
      },
      {
        title: 'Scaling Challenges',
        description: 'New developments required additional sales staff, limiting expansion speed and increasing costs.',
        icon: FaUsers,
      },
    ],
    solutions: [
      {
        title: '24/7 Lead Engagement',
        description: 'AIVI captures and qualifies leads instantly, regardless of when they inquire about properties.',
      },
      {
        title: 'Automated Tour Scheduling',
        description: 'Qualified prospects are immediately offered available tour times and booked into the sales calendar.',
      },
      {
        title: 'Consistent Qualification',
        description: 'Every lead receives the same professional qualification process, ensuring no opportunity is missed.',
      },
      {
        title: 'Scalable Outreach',
        description: 'Launch new developments with instant lead handling capacity, no additional hiring required.',
      },
    ],
    results: [
      { metric: '50%', description: 'Of sales calls fully automated' },
      { metric: '55%', description: 'Increase in site visits' },
      { metric: '100%', description: 'After-hours leads captured' },
      { metric: '3x', description: 'Faster lead response time' },
      { metric: '40%', description: 'Reduction in cost per lead' },
      { metric: '24/7', description: 'Lead engagement coverage' },
    ],
  },
};

const caseStudies = [
  { id: 'agency', title: 'Agency' },
  { id: 'retail', title: 'Retail' },
  { id: 'legal', title: 'Legal' },
  { id: 'healthcare', title: 'Healthcare' },
  { id: 'real-estate', title: 'Real Estate' },
];

const dashboardPanels = [
  {
    title: 'Lead Source Performance',
    description: 'Track conversion rates by channel, campaign attribution, and ROI per lead source.',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="10" y="90" width="30" height="20" fill="#FF8C00" opacity="0.7" />
        <rect x="50" y="60" width="30" height="50" fill="#8A2BE2" opacity="0.7" />
        <rect x="90" y="40" width="30" height="70" fill="#FF8C00" opacity="0.7" />
        <rect x="130" y="70" width="30" height="40" fill="#8A2BE2" opacity="0.7" />
        <rect x="170" y="50" width="30" height="60" fill="#FF8C00" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: 'AI-driven Sentiment Analysis',
    description: 'Real-time emotional intelligence tracking with tone adaptation and conversation quality scoring.',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <path d="M10,60 Q60,20 110,60 T210,60" fill="none" stroke="#8A2BE2" strokeWidth="3" />
        <path d="M10,70 Q60,100 110,70 T210,70" fill="none" stroke="#FF8C00" strokeWidth="3" />
        <circle cx="60" cy="40" r="4" fill="#8A2BE2" />
        <circle cx="110" cy="60" r="4" fill="#8A2BE2" />
        <circle cx="160" cy="40" r="4" fill="#8A2BE2" />
      </svg>
    ),
  },
  {
    title: 'Conversion Rate by Funnel Stage',
    description: 'Visualize drop-off points, optimize conversion paths, and identify revenue opportunities.',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <polygon points="100,10 160,40 140,70 60,70 40,40" fill="#FF8C00" opacity="0.3" stroke="#FF8C00" strokeWidth="2" />
        <polygon points="100,30 150,50 135,75 65,75 50,50" fill="#8A2BE2" opacity="0.3" stroke="#8A2BE2" strokeWidth="2" />
        <polygon points="100,50 130,65 120,85 80,85 70,65" fill="#FF8C00" opacity="0.5" stroke="#FF8C00" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Agent Efficiency & Response Times',
    description: 'Monitor average handle time, first-call resolution, and agent performance scorecards.',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <circle cx="100" cy="60" r="45" fill="none" stroke="#E0E0E0" strokeWidth="8" />
        <circle cx="100" cy="60" r="45" fill="none" stroke="#8A2BE2" strokeWidth="8" strokeDasharray="220" strokeDashoffset="80" transform="rotate(-90 100 60)" />
        <text x="100" y="70" textAnchor="middle" fontSize="24" fill="#FF8C00" fontWeight="bold">73%</text>
      </svg>
    ),
  },
];

const workflowSteps = [
  {
    icon: FaCog,
    title: 'Configure & Integrate',
    description: 'Connect your CRM, telephony, and data sources in minutes. No code required.',
  },
  {
    icon: FaCode,
    title: 'Train & Customize',
    description: 'Fine-tune AI agents with your brand voice, workflows, and business rules.',
  },
  {
    icon: FaRocket,
    title: 'Deploy & Monitor',
    description: 'Launch AI agents across channels with real-time observability and control.',
  },
  {
    icon: FaChartBar,
    title: 'Analyze & Optimize',
    description: 'Leverage ML-powered insights to continuously improve performance and ROI.',
  },
];

const faqItems = [
  {
    question: 'What capabilities does the AI dashboard offer?',
    answer: 'The AI dashboard provides comprehensive analytics including real-time performance metrics, sentiment analysis, conversion tracking, lead scoring, agent efficiency reports, and custom KPI monitoring. All data is visualized through intuitive charts and exportable reports.',
  },
  {
    question: 'Can I integrate AIVI analytics with existing BI tools?',
    answer: 'Yes, AIVI offers full API access for seamless integration with tools like Tableau, Power BI, Looker, and Google Data Studio. Export data in CSV, JSON, or connect directly via our RESTful API with comprehensive documentation.',
  },
  {
    question: 'How secure is the data processed by AIVI agents?',
    answer: 'AIVI is built with enterprise-grade security: SOC 2 Type II certified, HIPAA compliant, end-to-end encryption, role-based access control, and regular security audits. All data is encrypted at rest and in transit with AES-256 and TLS 1.3.',
  },
];

export default function UseCasesPage() {
  const [activeCaseStudy, setActiveCaseStudy] = useState('agency');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState<{ position: 'fixed' | 'absolute'; top: string }>({ position: 'fixed', top: '140px' });
  
  const mainRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { openDemoPopup } = useDemoPopup();

  const currentCaseStudy = caseStudiesData[activeCaseStudy as keyof typeof caseStudiesData];

  // Consistent left position for sidebar (48px from edge = mx-12 equivalent)
  const sidebarLeftPosition = 48;

  // Handle sidebar scroll behavior - stop 50px before footer
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current || !sidebarRef.current) return;
      
      const mainBottom = mainRef.current.offsetTop + mainRef.current.offsetHeight;
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const sidebarFixedTop = 140; // Fixed top position
      const footerGap = 75; // Gap from footer
      
      // Calculate the stopping point (main content bottom - sidebar height - gap)
      const stopPoint = mainBottom - sidebarHeight - footerGap;
      
      // Current scroll position
      const scrollY = window.scrollY;
      
      // Calculate when sidebar bottom would go past the stopping point
      if (scrollY + sidebarFixedTop + sidebarHeight >= mainBottom - footerGap) {
        // Switch to absolute positioning
        setSidebarStyle({ position: 'absolute', top: `${stopPoint}px` });
      } else {
        // Keep fixed positioning
        setSidebarStyle({ position: 'fixed', top: '140px' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleCaseStudyChange = (id: string) => {
    if (id !== activeCaseStudy) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCaseStudy(id);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer />
      <AIVINavigationV4 transparent={false} />
      <main ref={mainRef} className="min-h-screen bg-[#E8E5E0] bg-soft-gradient relative font-manrope">
        {/* Page-wide Constellation Canvas - excludes sidebar area */}
        <PageConstellationCanvas />

        {/* Fixed Sidebar Navigation - Desktop Only */}
        <aside
          ref={sidebarRef}
          className="hidden lg:block w-[260px] z-40"
          style={{
            position: sidebarStyle.position,
            top: sidebarStyle.top,
            left: `${sidebarLeftPosition}px`
          }}
        >
          {/* Premium Glass Card Container */}
          <div
            className="relative bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            style={{ maxHeight: 'calc(100vh - 156px)' }}
          >
            {/* Subtle gradient top accent */}
            <div className="h-[2px] bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

            <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
              {/* Section Header with Eyebrow */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-4 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                    Resources
                  </span>
                </div>
                <h3 className="text-[17px] font-semibold text-[#0a0a0a] tracking-[-0.01em] font-manrope">
                  Case Studies
                </h3>
              </div>

              {/* Premium Navigation Links */}
              <nav className="space-y-1.5 mb-8">
                {caseStudies.map((caseStudy) => (
                  <button
                    key={caseStudy.id}
                    onClick={() => handleCaseStudyChange(caseStudy.id)}
                    className={`group relative block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-300 font-manrope overflow-hidden ${
                      activeCaseStudy === caseStudy.id
                        ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white shadow-lg shadow-[#f84608]/20'
                        : 'text-[#555555] hover:bg-[#f5f5f5] hover:text-[#0a0a0a]'
                    }`}
                  >
                    {/* Shine effect on active item */}
                    {activeCaseStudy === caseStudy.id && (
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    )}
                    <span className="relative z-10">{caseStudy.title}</span>
                  </button>
                ))}
              </nav>

              {/* Premium Divider */}
              <div className="h-[1px] bg-gradient-to-r from-[#f84608]/20 via-[#e0e0e0] to-transparent mb-6" />

              {/* Quick Links Section */}
              <div>
                <p className="text-[10px] font-semibold text-[#999999] uppercase tracking-[0.15em] mb-4">
                  Quick Links
                </p>
                <div className="space-y-2">
                  <Link
                    href="/integrations"
                    className="group flex items-center gap-2 text-[14px] text-[#555555] hover:text-[#f84608] transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f84608] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>View all integrations</span>
                  </Link>
                  <Link
                    href="/solutions/retail"
                    className="group flex items-center gap-2 text-[14px] text-[#555555] hover:text-[#321ca3] transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#321ca3] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>Explore solutions</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative corner gradient */}
            <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-gradient-to-tl from-[#f84608]/5 via-transparent to-transparent pointer-events-none rounded-br-2xl" />
          </div>
        </aside>

        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Main Layout - with left margin for sidebar on desktop */}
          <div className="pt-[72px] lg:ml-[320px]">
            {/* Main Content Area */}
            <div>
              {/* Hero Section - Premium Design */}
              <section className="w-full relative overflow-hidden mb-16 sm:mb-20">
                <div className="w-full py-20 sm:py-24 md:py-28 relative z-10">
                  {/* Content wrapper with animation */}
                  <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Hero Text */}
                    <div className="text-center lg:text-left mb-14">
                      {/* Eyebrow Label */}
                      <div className="inline-flex items-center gap-4 mb-6 sm:mb-8">
                        <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                        <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                          Case Study: {currentCaseStudy.title}
                        </span>
                        <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
                      </div>

                      <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] font-medium tracking-[-0.02em] text-[#0a0a0a] mb-5 sm:mb-6 font-manrope">
                        {currentCaseStudy.heading}
                      </h1>
                      <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#555555] max-w-[650px] mx-auto lg:mx-0 mb-10">
                        {currentCaseStudy.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        {/* Primary Button - Gradient with shine effect */}
                        <button
                          onClick={openDemoPopup}
                          className="group relative inline-flex items-center justify-center h-14 px-10 text-white text-[16px] font-semibold rounded-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f84608]/20 transition-all duration-400 bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                        >
                          <span className="relative z-10">Book a Demo</span>
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </button>

                        {/* Secondary Button - Glass with border */}
                        <Link
                          href="/pricing"
                          className="inline-flex items-center justify-center h-14 px-10 bg-white/90 backdrop-blur-sm border-2 border-[#f84608]/30 text-[#f84608] text-[16px] font-semibold rounded-xl hover:bg-white hover:border-[#f84608]/50 hover:shadow-lg hover:shadow-[#f84608]/10 transition-all duration-400"
                        >
                          View Pricing
                        </Link>
                      </div>
                    </div>

                    {/* Key Metrics - Premium Glass Cards */}
                    <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
                      {currentCaseStudy.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="group relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 sm:p-8 text-center shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_50px_rgba(0,0,0,0.1)] transition-all duration-400"
                        >
                          {/* Gradient accent on hover */}
                          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#f84608] to-[#321ca3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                          <div className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[0.9] font-medium mb-3 bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent tracking-[-0.04em] font-manrope">
                            {metric.value}
                          </div>
                          <p className="text-[14px] sm:text-[15px] text-[#555555] font-medium">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Challenges Section - Premium Glass Card */}
                    <div className="relative bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.06)] mb-16 sm:mb-20">
                      {/* Gradient top accent */}
                      <div className="h-[2px] bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

                      <div className="p-6 sm:p-8 md:p-12">
                        {/* Section Header with Eyebrow */}
                        <div className="mb-10">
                          <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                              The Problem
                            </span>
                          </div>
                          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a] font-manrope">
                            The Challenge
                          </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                          {currentCaseStudy.challenges.map((challenge, index) => (
                            <div
                              key={index}
                              className="group relative bg-[#f8f8f8]/80 backdrop-blur-sm border border-[#e8e5e0]/60 rounded-xl p-6 flex gap-5 hover:bg-white hover:shadow-lg hover:shadow-[#f84608]/5 hover:-translate-y-0.5 transition-all duration-400"
                            >
                              {/* Icon Badge */}
                              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1e293b] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f84608] group-hover:to-[#321ca3] transition-all duration-300">
                                <challenge.icon className="text-[24px]" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#0a0a0a] mb-2 font-manrope">
                                  {challenge.title}
                                </h3>
                                <p className="text-[14px] sm:text-[15px] text-[#555555] leading-[1.6]">
                                  {challenge.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Solutions Section - Premium Glass Card */}
                    <div className="relative bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.06)] mb-16 sm:mb-20">
                      {/* Gradient top accent */}
                      <div className="h-[2px] bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

                      <div className="p-6 sm:p-8 md:p-12">
                        {/* Section Header with Eyebrow */}
                        <div className="mb-10">
                          <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                              Our Approach
                            </span>
                          </div>
                          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a] font-manrope">
                            The Solution
                          </h2>
                        </div>

                        {/* Solution cards in 2-column grid */}
                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                          {currentCaseStudy.solutions.map((solution, index) => (
                            <div
                              key={index}
                              className="group relative bg-[#f8f8f8]/80 backdrop-blur-sm border border-[#e8e5e0]/60 rounded-xl p-6 pt-8 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-400"
                            >
                              {/* Gradient step badge */}
                              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[13px] font-bold flex items-center justify-center shadow-md">
                                {index + 1}
                              </div>
                              <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#0a0a0a] mb-2 font-manrope">
                                {solution.title}
                              </h3>
                              <p className="text-[14px] sm:text-[15px] text-[#555555] leading-[1.6]">
                                {solution.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results Section - Premium Gradient with Glass Cards */}
                    <div className="relative bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20 overflow-hidden">
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

                      <div className="relative z-10">
                        {/* Eyebrow + Title */}
                        <div className="text-center mb-10">
                          <div className="inline-flex items-center gap-4 mb-4">
                            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/60" />
                            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/80">
                              Proven Results
                            </span>
                            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/60" />
                          </div>
                          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-white font-manrope">
                            The Results
                          </h2>
                        </div>

                        {/* Result cards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                          {currentCaseStudy.results.map((result, index) => (
                            <div
                              key={index}
                              className="group bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                            >
                              <div className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.9] font-medium text-white mb-3 tracking-[-0.04em] font-manrope">
                                {result.metric}
                              </div>
                              <p className="text-[14px] text-white/90">
                                {result.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Section - Premium Glass Card */}
                    <div className="relative bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.06)] mb-16 sm:mb-20">
                      <div className="h-[2px] bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

                      <div className="p-6 sm:p-8 md:p-12">
                        {/* Header */}
                        <div className="mb-10">
                          <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                              Analytics
                            </span>
                          </div>
                          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a] mb-3 font-manrope">
                            Real-time Performance Dashboard
                          </h2>
                          <p className="text-[16px] sm:text-[17px] text-[#555555]">
                            Visualize, analyze, and act on insights across every touchpoint.
                          </p>
                        </div>

                        {/* Dashboard panels with premium styling */}
                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
                          {dashboardPanels.map((panel, index) => (
                            <div
                              key={index}
                              className="group bg-[#f8f8f8]/80 backdrop-blur-sm border border-[#e8e5e0]/60 rounded-xl p-6 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-400"
                            >
                              <div className="w-full h-32 mb-4 bg-white rounded-lg p-4 flex items-center justify-center border border-[#e8e5e0]/40">
                                {panel.svg}
                              </div>
                              <h3 className="text-[17px] font-semibold text-[#0a0a0a] mb-2 font-manrope">
                                {panel.title}
                              </h3>
                              <p className="text-[13px] text-[#555555]">{panel.description}</p>
                            </div>
                          ))}
                        </div>

                        {/* Premium CTA */}
                        <div className="text-center">
                          <button
                            onClick={openDemoPopup}
                            className="group relative inline-flex items-center justify-center h-14 px-10 text-white text-[16px] font-semibold rounded-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f84608]/20 transition-all duration-400 bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                          >
                            <span className="relative z-10">Explore Live Demo Dashboard</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* AI Workflow Process - Premium Design */}
                    <div className="relative bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.06)] mb-16 sm:mb-20">
                      <div className="h-[2px] bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

                      <div className="p-6 sm:p-8 md:p-12">
                        {/* Header */}
                        <div className="text-center mb-12">
                          <div className="inline-flex items-center gap-4 mb-4">
                            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                              How It Works
                            </span>
                            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
                          </div>
                          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a] font-manrope">
                            AI Workflow Process
                          </h2>
                        </div>

                        {/* Steps with gradient connecting line */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                          {/* Gradient connecting line - desktop only */}
                          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

                          {workflowSteps.map((step, index) => (
                            <div key={index} className="relative text-center">
                              {/* Icon with gradient hover */}
                              <div className="group w-24 h-24 mx-auto mb-5 rounded-2xl bg-[#f8f8f8] border border-[#e8e5e0]/60 flex items-center justify-center relative z-10 hover:bg-gradient-to-br hover:from-[#f84608] hover:to-[#321ca3] transition-all duration-300">
                                <step.icon className="text-[40px] text-[#0a0a0a] group-hover:text-white transition-colors duration-300" />
                                {/* Step badge */}
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[12px] font-bold flex items-center justify-center shadow-md">
                                  {index + 1}
                                </div>
                              </div>
                              <h3 className="text-[17px] font-semibold text-[#0a0a0a] mb-2 font-manrope">
                                {step.title}
                              </h3>
                              <p className="text-[13px] text-[#555555]">{step.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* FAQ Section - Premium Glass Card */}
                    <div className="relative bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.06)] mb-16 sm:mb-20">
                      <div className="h-[2px] bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

                      <div className="p-6 sm:p-8 md:p-12">
                        {/* Header */}
                        <div className="mb-10">
                          <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                              Common Questions
                            </span>
                          </div>
                          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a] font-manrope">
                            Frequently Asked Questions
                          </h2>
                        </div>

                        {/* Premium accordion */}
                        <div className="space-y-3">
                          {faqItems.map((item, index) => (
                            <div
                              key={index}
                              className="group bg-[#f8f8f8]/80 backdrop-blur-sm border border-[#e8e5e0]/60 rounded-xl overflow-hidden hover:border-[#f84608]/30 transition-all duration-300"
                            >
                              <button
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left"
                              >
                                <span className="text-[16px] font-semibold text-[#0a0a0a] group-hover:text-[#f84608] transition-colors duration-300 font-manrope">
                                  {item.question}
                                </span>
                                <div
                                  className={`w-8 h-8 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center flex-shrink-0 ml-4 transition-transform duration-300 ${
                                    openFaqIndex === index ? 'rotate-180' : ''
                                  }`}
                                >
                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </button>
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                              >
                                <div className="px-5 pb-5 text-[14px] text-[#555555] leading-[1.6]">
                                  {item.answer}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Final CTA - Premium White Card */}
                    <div className="relative bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.06)]">
                      {/* Gradient top accent */}
                      <div className="h-1 bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

                      <div className="p-8 sm:p-12 md:p-16 text-center">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-4 mb-6">
                          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                            Get Started
                          </span>
                          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
                        </div>

                        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a] mb-4 font-manrope">
                          Ready to Achieve Similar Results?
                        </h2>
                        <p className="text-[16px] sm:text-[17px] text-[#555555] mb-10 max-w-[550px] mx-auto">
                          Join hundreds of businesses transforming their operations with AIVI's AI-powered platform.
                        </p>

                        {/* Dark CTA with arrow */}
                        <button
                          onClick={openDemoPopup}
                          className="group inline-flex items-center justify-center gap-3 h-14 px-10 bg-[#0a0a0a] text-white text-[16px] font-semibold rounded-xl hover:-translate-y-0.5 hover:shadow-xl transition-all duration-400"
                        >
                          <span>Get Started Today</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>

                      {/* Decorative corner gradient */}
                      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-gradient-to-tl from-[#f84608]/5 via-transparent to-transparent pointer-events-none rounded-br-3xl" />
                    </div>
                    {/* End of animation wrapper */}
                  </div>
                </div>
              </section>
              {/* End of Hero Section */}
            </div>
            {/* End of Main Content Area */}
          </div>
          {/* End of Main Layout with Sidebar */}
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
