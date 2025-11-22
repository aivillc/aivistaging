'use client';

import { useState } from 'react';

export default function AIVINavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#E8E5E0] h-[72px]">
      <div className="w-full h-full px-12">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path
                    d="M12 2L15 9L22 9L16.5 13.5L19 21L12 16L5 21L7.5 13.5L2 9L9 9L12 2Z"
                    fill="url(#gradient)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E5FF00" />
                      <stop offset="100%" stopColor="#B8FF00" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-[20px] font-medium text-[#000000]">AIVI</span>
            </div>

            {/* Main Navigation - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-[15px] font-normal text-[#000000] hover:opacity-60 transition-opacity">
                Solutions
              </a>
              <a href="#" className="text-[15px] font-normal text-[#000000] hover:opacity-60 transition-opacity">
                Roles
              </a>
              <a href="#" className="text-[15px] font-normal text-[#000000] hover:opacity-60 transition-opacity">
                Resources
              </a>
              <a href="#" className="text-[15px] font-normal text-[#000000] hover:opacity-60 transition-opacity">
                Pricing
              </a>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden lg:block text-[15px] font-medium text-[#000000] px-5 py-2.5 rounded-md hover:bg-black/5 transition-colors"
            >
              Log in
            </a>
            <button className="hidden lg:block text-[15px] font-semibold text-[#000000] bg-white border border-[#000000] px-5 py-2.5 rounded-md hover:bg-[#F5F5F5] transition-all">
              Get a demo
            </button>
            <button className="text-[15px] font-semibold text-[#000000] bg-[#E5FF00] px-5 py-2.5 rounded-md hover:bg-[#D4EE00] hover:-translate-y-0.5 hover:shadow-md transition-all">
              Sign up for free
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden w-6 h-6 flex flex-col justify-center items-center gap-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="w-full h-0.5 bg-[#000000]"></span>
              <span className="w-full h-0.5 bg-[#000000]"></span>
              <span className="w-full h-0.5 bg-[#000000]"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#E8E5E0] border-t border-[#DDDDDD] shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#" className="text-[15px] font-normal text-[#000000] py-2">
              Solutions
            </a>
            <a href="#" className="text-[15px] font-normal text-[#000000] py-2">
              Roles
            </a>
            <a href="#" className="text-[15px] font-normal text-[#000000] py-2">
              Resources
            </a>
            <a href="#" className="text-[15px] font-normal text-[#000000] py-2">
              Pricing
            </a>
            <a href="#" className="text-[15px] font-medium text-[#000000] py-2">
              Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
