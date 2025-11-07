'use client';

import { useState } from 'react';

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<'saas' | 'managed' | null>(null);

  return (
    <section id="solutions" className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
              Implementation Path
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Whether you want full control or turnkey deployment, we've got you covered
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* SaaS Platform - Orange to Purple */}
          <div 
            className="relative group"
            onMouseEnter={() => setHoveredCard('saas')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br from-orange-500 to-purple-500 rounded-3xl blur-xl transition-all duration-500 ${
              hoveredCard === 'saas' ? 'opacity-75' : 'opacity-0'
            }`} />
            
            <div className="relative h-full p-8 bg-gradient-to-br from-black via-orange-950/20 to-purple-950/20 border-2 border-white/10 hover:border-orange-500/50 rounded-3xl transition-all duration-500 backdrop-blur-sm overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-500" />
              <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-500 to-purple-500 transition-all duration-500 ${
                hoveredCard === 'saas' ? 'h-full' : 'h-0'
              }`} />

              {/* Floating Icon */}
              <div className={`mb-6 transition-all duration-500 ${hoveredCard === 'saas' ? 'scale-110 rotate-3' : 'scale-100'}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-3">SaaS Platform</h3>
              <p className="text-white/60 mb-8 text-lg">
                Self-service platform for teams who want full control and flexibility
              </p>

              <div className="space-y-3 mb-8">
                <Feature text="Complete platform access" icon="🎯" />
                <Feature text="Drag-and-drop workflow builder" icon="🔧" />
                <Feature text="Pre-built templates & integrations" icon="⚡" />
                <Feature text="Real-time analytics dashboard" icon="📊" />
                <Feature text="API access for custom builds" icon="🔌" />
                <Feature text="Community support + documentation" icon="📚" />
              </div>

              <div className="mb-6">
                <div className="text-sm text-white/50 mb-3 font-bold uppercase tracking-wider">Best for:</div>
                <div className="flex flex-wrap gap-2">
                  <Tag text="Technical teams" gradient="from-orange-500 to-purple-500" />
                  <Tag text="Iterative testing" gradient="from-orange-500 to-purple-500" />
                  <Tag text="Custom workflows" gradient="from-orange-500 to-purple-500" />
                </div>
              </div>

              <button className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-lg uppercase tracking-wider">
                Explore Platform
              </button>
            </div>
          </div>

          {/* Managed Service - Purple to Orange */}
          <div 
            className="relative group"
            onMouseEnter={() => setHoveredCard('managed')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white text-xs font-black rounded-full uppercase tracking-wider shadow-xl animate-pulse">
                ⭐ Most Popular
              </div>
            </div>

            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br from-purple-500 to-orange-500 rounded-3xl blur-xl transition-all duration-500 ${
              hoveredCard === 'managed' ? 'opacity-75' : 'opacity-30'
            }`} />
            
            <div className="relative h-full p-8 bg-gradient-to-br from-black via-purple-950/20 to-orange-950/20 border-2 border-purple-500/50 hover:border-purple-500 rounded-3xl transition-all duration-500 backdrop-blur-sm overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500" />
              <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 to-orange-500 transition-all duration-500 ${
                hoveredCard === 'managed' ? 'h-full' : 'h-0'
              }`} />

              {/* Floating Icon */}
              <div className={`mb-6 transition-all duration-500 ${hoveredCard === 'managed' ? 'scale-110 -rotate-3' : 'scale-100'}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-3">Managed Service</h3>
              <p className="text-white/60 mb-8 text-lg">
                Turnkey solution with white-glove implementation and ongoing optimization
              </p>

              <div className="space-y-3 mb-8">
                <Feature text="Dedicated account manager" icon="👤" highlight />
                <Feature text="Custom workflow design & setup" icon="🎨" highlight />
                <Feature text="Complete integration handling" icon="🔗" highlight />
                <Feature text="Ongoing optimization & A/B testing" icon="📈" highlight />
                <Feature text="24/7 monitoring & support" icon="🛡️" highlight />
                <Feature text="Human call center coaching" icon="💬" highlight />
              </div>

              <div className="mb-6">
                <div className="text-sm text-white/50 mb-3 font-bold uppercase tracking-wider">Best for:</div>
                <div className="flex flex-wrap gap-2">
                  <Tag text="Enterprise teams" gradient="from-purple-500 to-orange-500" />
                  <Tag text="Fast deployment" gradient="from-purple-500 to-orange-500" />
                  <Tag text="Complex integrations" gradient="from-purple-500 to-orange-500" />
                </div>
              </div>

              <button className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-xl uppercase tracking-wider">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
            Industry Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UseCaseCard
              industry="Trucking & Logistics"
              useCases={[
                'Invoice factoring automation',
                'Insurance renewal reminders',
                'Broker-to-driver communication',
                'Load confirmation & updates',
              ]}
              gradient="from-purple-500 to-purple-700"
            />
            <UseCaseCard
              industry="Financial Services"
              useCases={[
                'Debt consolidation outreach',
                'Credit application processing',
                'Payment reminders',
                'Document verification',
              ]}
              gradient="from-orange-500 to-orange-700"
            />
            <UseCaseCard
              industry="Insurance"
              useCases={[
                'Policy renewal campaigns',
                'Claims processing automation',
                'Lead qualification',
                'Customer onboarding',
              ]}
              gradient="from-purple-500 to-purple-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text, highlight = false, icon }: { text: string; highlight?: boolean; icon?: string }) {
  return (
    <div className="flex items-center gap-3 group">
      {icon && <span className="text-xl transition-transform group-hover:scale-125">{icon}</span>}
      <div className="flex items-center gap-3 flex-1">
        <span className={`font-black text-lg transition-all ${
          highlight 
            ? 'text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text' 
            : 'text-transparent bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text'
        }`}>✓</span>
        <span className="text-white/80 font-medium group-hover:text-white transition-colors">{text}</span>
      </div>
    </div>
  );
}

function Tag({ text, gradient }: { text: string; gradient?: string }) {
  return (
    <span className={`px-4 py-2 text-xs font-bold rounded-full border-2 border-white/20 bg-gradient-to-r ${gradient || 'from-purple-500 to-orange-500'} text-white transition-all hover:scale-105 hover:border-white/40`}>
      {text}
    </span>
  );
}

interface UseCaseCardProps {
  industry: string;
  useCases: string[];
  gradient: string;
}

function UseCaseCard({ industry, useCases, gradient }: UseCaseCardProps) {
  return (
    <div className="group relative p-6 bg-white/5 border-2 border-white/10 hover:border-purple-500/50 rounded-2xl transition-all hover:shadow-2xl backdrop-blur-sm overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`} />
      <div className={`absolute top-0 left-0 h-0 w-1 bg-gradient-to-b ${gradient} group-hover:h-full transition-all duration-500`} />
      
      <h4 className="text-xl font-black text-white mb-4">{industry}</h4>
      <ul className="space-y-3">
        {useCases.map((useCase, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors">
            <span className={`bg-gradient-to-r ${gradient} text-transparent bg-clip-text font-black mt-0.5`}>•</span>
            {useCase}
          </li>
        ))}
      </ul>
    </div>
  );
}
