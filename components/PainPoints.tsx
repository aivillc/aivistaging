'use client';

import { useState } from 'react';

export default function PainPoints() {
  return (
    <section className="relative py-24 px-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Stop Losing Revenue to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              Slow Follow-Ups
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every minute you wait, your conversion rate drops 10%.
            <br />
            Your competitors respond in seconds. Can you?
          </p>
        </div>

        {/* Pain Points Grid - SLEEK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PainPointCard
            title="Leads Go Cold"
            stat="80% never contacted"
            solution="13-second response time"
            color="purple"
          />
          <PainPointCard
            title="Manual Follow-Ups"
            stat="20+ hours wasted weekly"
            solution="100% automated outreach"
            color="orange"
          />
          <PainPointCard
            title="Low Conversions"
            stat="$50K+ lost monthly"
            solution="391% conversion increase"
            color="purple"
          />
        </div>

        {/* Urgency CTA */}
        <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl shadow-2xl">
          <p className="text-white text-2xl font-bold mb-2">
            Limited: 10 Spots This Month
          </p>
          <p className="text-white/90 text-lg">
            Current availability: <span className="font-black text-3xl">6 spots</span>
          </p>
        </div>
      </div>
    </section>
  );
}

interface PainPointCardProps {
  title: string;
  stat: string;
  solution: string;
  color: 'purple' | 'orange';
}

function PainPointCard({ title, stat, solution, color }: PainPointCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} rounded-2xl blur-xl transition-all duration-500 ${
        isHovered ? 'opacity-30' : 'opacity-0'
      }`} />
      
      <div className="relative h-full p-8 bg-white border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
        {/* Animated top border */}
        <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${gradient} transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`} />
        
        {/* Animated side accent bar */}
        <div className={`absolute top-0 left-0 w-1 bg-gradient-to-b ${gradient} transition-all duration-500 ${
          isHovered ? 'h-full' : 'h-16'
        }`} />
        
        {/* Content */}
        <div className={`transition-all duration-300 ${isHovered ? '-translate-y-1' : 'translate-y-0'}`}>
          <h3 className={`text-2xl font-black mb-3 pl-4 transition-all duration-300 ${
            isHovered 
              ? 'text-transparent bg-gradient-to-r bg-clip-text ' + gradient 
              : 'text-black'
          }`}>
            {title}
          </h3>
          
          <div className={`mb-4 pl-4 transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
            <p className="text-red-600 font-bold text-lg">{stat}</p>
          </div>

          <div className={`h-px bg-gradient-to-r from-gray-300 to-transparent mb-4 transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-x-100' : 'opacity-50 scale-x-75'
          } origin-left`} />

          <div className="flex items-start gap-2 pl-4">
            <span className={`font-black text-xl transition-all duration-300 ${
              isHovered 
                ? `text-transparent bg-gradient-to-r bg-clip-text ${gradient} scale-125` 
                : 'text-green-600 scale-100'
            }`}>
              ✓
            </span>
            <p className={`font-medium transition-colors duration-300 ${
              isHovered ? 'text-gray-900' : 'text-gray-700'
            }`}>
              {solution}
            </p>
          </div>
        </div>
        
        {/* Background gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          color === 'purple' ? 'from-purple-50 to-transparent' : 'from-orange-50 to-transparent'
        } opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
      </div>
    </div>
  );
}
