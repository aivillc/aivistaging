'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHospital, faTruck, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-purple-600/20 shadow-2xl'
          : 'bg-black/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/AIVI-LOGO-W.png"
              alt="AIVI"
              width={182}
              height={78}
              priority
              className="h-12 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Use Cases Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setUseCasesOpen(true)}
              onMouseLeave={() => setUseCasesOpen(false)}
            >
              <button className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm font-medium tracking-wide relative flex items-center gap-1">
                Use Cases
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${useCasesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-orange-500 group-hover:w-full transition-all duration-300" />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-purple-600/20 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${useCasesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link
                  href="/"
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-purple-600/10 transition-all duration-200 text-sm border-b border-purple-600/10"
                >
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChartLine} className="text-orange-500 w-4 h-4" />
                    Financial
                  </span>
                </Link>
                <Link
                  href="/healthcare"
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-purple-600/10 transition-all duration-200 text-sm border-b border-purple-600/10"
                >
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faHospital} className="text-purple-400 w-4 h-4" />
                    Healthcare
                  </span>
                </Link>
                <Link
                  href="/logistics"
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-purple-600/10 transition-all duration-200 text-sm border-b border-purple-600/10"
                >
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faTruck} className="text-orange-400 w-4 h-4" />
                    Logistics
                  </span>
                </Link>
                <Link
                  href="/real-estate"
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-purple-600/10 transition-all duration-200 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faHouse} className="text-purple-500 w-4 h-4" />
                    Real Estate
                  </span>
                </Link>
              </div>
            </div>

            <a
              href="#features"
              className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm font-medium tracking-wide relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#solutions"
              className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm font-medium tracking-wide relative group"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#integrations"
              className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm font-medium tracking-wide relative group"
            >
              Integrations
            </a>
            
            <button
              onClick={() => window.location.href = '#contact'}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white text-sm font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 uppercase tracking-wider"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-purple-400 transition-colors">
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
