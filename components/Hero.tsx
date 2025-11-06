'use client';

import { useState, useEffect } from 'react';
import DemoForm from './DemoForm';
import Image from 'next/image';

interface UseCaseContent {
  headline: string;
  headlineHighlight: string;
  headlineEnd: string;
  subheadline: string | React.ReactNode;
  stats: Array<{ number: string; label: string; color: 'purple' | 'orange' }>;
}

const useCases: UseCaseContent[] = [
  {
    headline: 'Turn Cold Leads Into ',
    headlineHighlight: 'Revenue',
    headlineEnd: 'In 13 Seconds',
    subheadline: (
      <>
        AI-powered omnichannel automation that reactivates 50% of dead leads
        <br className="hidden md:block" />
        and increases conversions by{' '}
        <span className="text-orange-500 font-bold">391%</span>
      </>
    ),
    stats: [
      { number: '391%', label: 'Conversion Increase', color: 'purple' },
      { number: '50%', label: 'Dead Leads Revived', color: 'orange' },
      { number: '13s', label: 'Response Time', color: 'purple' },
    ],
  },
  {
    headline: 'Law Firms: ',
    headlineHighlight: '35% More',
    headlineEnd: 'Appointments Booked',
    subheadline: (
      <>
        24/7 Voice AI intake with instant conflict screening and automated follow-ups
        <br className="hidden md:block" />
        that standardizes quality at scale
      </>
    ),
    stats: [
      { number: '100%', label: 'After Hours Calls Caught', color: 'purple' },
      { number: '40%', label: 'Higher Conversion', color: 'orange' },
      { number: '95%', label: 'Lower Cost Per Inquiry', color: 'purple' },
    ],
  },
  {
    headline: 'Healthcare: ',
    headlineHighlight: '30% Higher',
    headlineEnd: 'Patient Satisfaction',
    subheadline: (
      <>
        24/7 AI access assistant with real-time eligibility checks and guided scheduling
        <br className="hidden md:block" />
        that reduces no-shows by{' '}
        <span className="text-orange-500 font-bold">35%</span>
      </>
    ),
    stats: [
      { number: '100%', label: 'Calls Answered', color: 'purple' },
      { number: '30%', label: 'Patient Satisfaction', color: 'orange' },
      { number: '35%', label: 'Reduction in No-Shows', color: 'purple' },
    ],
  },
  {
    headline: 'Real Estate: ',
    headlineHighlight: '55% More',
    headlineEnd: 'Site Visits Booked',
    subheadline: (
      <>
        Smart lead routing and 24/7 automated tour booking
        <br className="hidden md:block" />
        that captures{' '}
        <span className="text-orange-500 font-bold">100%</span> of after-hours leads
      </>
    ),
    stats: [
      { number: '50%', label: 'Sales Automated', color: 'purple' },
      { number: '55%', label: 'Increase in Site Visits', color: 'orange' },
      { number: '100%', label: 'After-hrs Leads Caught', color: 'purple' },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % useCases.length);
        setIsTransitioning(false);
      }, 500);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const currentContent = useCases[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 overflow-hidden bg-black">
      {/* Animated Background Gradients - TRON Style */}
      <div className="absolute inset-0 bg-black" />

      {/* Moving gradient orbs */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-orange-500/20 rounded-full blur-3xl animate-pulse-slower" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] md:w-[1000px] h-[500px] sm:h-[800px] md:h-[1000px] bg-gradient-to-r from-purple-600/10 via-transparent to-orange-500/10 rounded-full blur-3xl animate-spin-slow" />

      {/* Grid overlay - cyberpunk style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />

      {/* Diagonal moving gradient lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent top-1/4 animate-scan-horizontal" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent top-1/2 animate-scan-horizontal-reverse" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent top-3/4 animate-scan-horizontal-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16">
          {/* Logo */}
          <div className="mb-8 sm:mb-12 flex flex-col items-center">
            <Image
              src="/AIVI-LOGO-W.png"
              alt="AIVI"
              width={400}
              height={167}
              priority
              className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto mb-4 sm:mb-6 drop-shadow-2xl"
            />
            <div className="h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          {/* Carousel Content with smooth transitions */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}
          >
            {/* Main Headline - BADASS */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tight px-2">
              {currentContent.headline}
              <span className="inline-block bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
                {currentContent.headlineHighlight}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white/60">
                {currentContent.headlineEnd}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-4">
              {currentContent.subheadline}
            </p>

            {/* ROI Stats - Sleek cards */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-2">
              {currentContent.stats.map((stat, index) => (
                <StatCard key={index} number={stat.number} label={stat.label} color={stat.color} />
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mb-8 sm:mb-12">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsTransitioning(false);
                  }, 500);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-orange-500'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Key Features - NO EMOJIS, sleek icons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-4">
            <FeaturePill text="AI Voice" />
            <FeaturePill text="SMS Automation" />
            <FeaturePill text="Email Campaigns" />
            <FeaturePill text="Document AI" />
            <FeaturePill text="CRM Integration" />
            <FeaturePill text="Agent Coaching" />
            <FeaturePill text="Secure PII" />
          </div>
        </div>

        {/* Demo Form */}
        <DemoForm />

        {/* Trust Indicators - Sleek */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <p className="text-xs sm:text-sm text-white/40 mb-3 sm:mb-4 uppercase tracking-wider">Trusted Globally</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-white/60">
            <TrustBadge text="Trucking & Logistics" />
            <TrustBadge text="Financial Services" />
            <TrustBadge text="Insurance" />
            <TrustBadge text="Healthcare" />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for all browsers */
        section {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        section::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.15);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes scan-horizontal {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes scan-horizontal-reverse {
          0% {
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(-100vh);
          }
        }

        @keyframes scan-horizontal-slow {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-scan-horizontal {
          animation: scan-horizontal 8s linear infinite;
        }

        .animate-scan-horizontal-reverse {
          animation: scan-horizontal-reverse 10s linear infinite;
        }

        .animate-scan-horizontal-slow {
          animation: scan-horizontal-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  color: 'purple' | 'orange';
}

function StatCard({ number, label, color }: StatCardProps) {
  const gradient = color === 'purple'
    ? 'from-purple-600 to-purple-800'
    : 'from-orange-500 to-orange-700';

  return (
    <div className={`relative p-4 sm:p-5 md:p-6 bg-gradient-to-br ${gradient} rounded-xl border border-white/10 backdrop-blur-sm min-w-[120px] sm:min-w-[140px] group hover:scale-105 transition-transform`}>
      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1">{number}</div>
        <div className="text-xs text-white/80 uppercase tracking-wider break-words">{label}</div>
      </div>
    </div>
  );
}

function FeaturePill({ text }: { text: string }) {
  return (
    <span className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-default">
      {text}
    </span>
  );
}

function TrustBadge({ text }: { text: string }) {
  return (
    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-colors">
      {text}
    </span>
  );
}
