'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const solutionPages = [
  { id: 'retail', title: 'Retail & E-Commerce', href: '/solutions/retail' },
  { id: 'real-estate', title: 'Real Estate', href: '/solutions/real-estate' },
  { id: 'hospitality', title: 'Hospitality', href: '/solutions/hospitality' },
  { id: 'healthcare', title: 'Healthcare', href: '/solutions/healthcare' },
  { id: 'financial-services', title: 'Financial Services', href: '/solutions/financial-services' },
  { id: 'legal', title: 'Legal', href: '/solutions/legal' },
];

interface SolutionsSidebarProps {
  mainRef: React.RefObject<HTMLElement | null>;
}

export default function SolutionsSidebar({ mainRef }: SolutionsSidebarProps) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarStyle, setSidebarStyle] = useState<{ position: 'fixed' | 'absolute'; top: string }>({
    position: 'fixed',
    top: '140px'
  });

  // Consistent left position for sidebar (48px from edge = mx-12 equivalent)
  const sidebarLeftPosition = 48;

  // Handle sidebar scroll behavior - stop before footer
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
  }, [mainRef]);

  // Determine which solution is active based on pathname
  const activeSolution = solutionPages.find(page => pathname === page.href)?.id || '';

  return (
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
                Solutions
              </span>
            </div>
            <h3 className="text-[17px] font-semibold text-[#0a0a0a] tracking-[-0.01em] font-manrope">
              Industries
            </h3>
          </div>

          {/* Premium Navigation Links */}
          <nav className="space-y-1.5 mb-8">
            {solutionPages.map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className={`group relative block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-300 font-manrope overflow-hidden ${
                  activeSolution === solution.id
                    ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white shadow-lg shadow-[#f84608]/20'
                    : 'text-[#555555] hover:bg-[#f5f5f5] hover:text-[#0a0a0a]'
                }`}
              >
                {/* Shine effect on active item */}
                {activeSolution === solution.id && (
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}
                <span className="relative z-10">{solution.title}</span>
              </Link>
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
                href="/resources"
                className="group flex items-center gap-2 text-[14px] text-[#555555] hover:text-[#f84608] transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f84608] opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>View case studies</span>
              </Link>
              <Link
                href="/integrations"
                className="group flex items-center gap-2 text-[14px] text-[#555555] hover:text-[#321ca3] transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#321ca3] opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>See all integrations</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative corner gradient */}
        <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-gradient-to-tl from-[#f84608]/5 via-transparent to-transparent pointer-events-none rounded-br-2xl" />
      </div>
    </aside>
  );
}
