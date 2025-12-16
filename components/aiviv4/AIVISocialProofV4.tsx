'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  density: number;
}

const companies = [
  { name: 'AUTODESK', style: 'font-semibold tracking-wide' },
  { name: 'Dolby', style: 'font-semibold' },
  { name: 'SMARTLING', style: 'font-semibold tracking-wide' },
  { name: 'Realis', style: 'font-serif italic font-medium' },
  { name: 'ANTHROPIC', style: 'font-semibold tracking-wider' },
  { name: 'kandji', style: 'font-semibold' },
  { name: 'DocuSign', style: 'font-semibold' },
];

const stats = [
  { label: '3-second response time on all lead inquiries', number: '3', unit: 'sec', metric: 'Response Time' },
  { label: 'Average contact rate achieved with AIVI orchestration', number: '65%', unit: '+', metric: 'Contact Rate' },
  { label: 'Full lead qualification completed in under 90 seconds', number: '90', unit: 'sec', metric: 'Full Qualification' },
];

export default function AIVISocialProofV4() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({ x: null, y: null, radius: 150 });
  const animationIdRef = useRef<number | undefined>(undefined);

  // Initialize particles
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const count = 120; // Slightly fewer particles than hero for performance
    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        density: Math.random() * 30 + 1,
      });
    }
    particlesRef.current = particles;
  }, []);

  // Neural canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const section = canvas.parentElement;
      if (section) {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
        initParticles(canvas);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      } else {
        mouseRef.current.x = null;
        mouseRef.current.y = null;
      }
    };

    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      // Draw mouse glow
      if (mouse.x !== null && mouse.y !== null) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        gradient.addColorStop(0, 'rgba(100, 200, 255, 0.15)');
        gradient.addColorStop(0.5, 'rgba(139, 0, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Update and draw particles
      particles.forEach((p) => {
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const forceX = dx / dist;
            const forceY = dy / dist;
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= forceX * force * p.density * 0.5;
            p.y -= forceY * force * p.density * 0.5;
          }
        }

        // Normal movement
        p.x += p.vx;
        p.y += p.vy;
        p.x += (p.baseX - p.x) * 0.01;
        p.y += (p.baseY - p.y) * 0.01;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
          p.baseX = p.x;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.baseY = p.y;
        }

        // Draw particle
        let brightness = 0.6;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            brightness = 1 - (dist / mouse.radius) * 0.4;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${0.4 * brightness})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            let opacity = 0.15 * (1 - dist / 140);

            if (mouse.x !== null && mouse.y !== null) {
              const midX = (particles[i].x + particles[j].x) / 2;
              const midY = (particles[i].y + particles[j].y) / 2;
              const mouseDist = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);
              if (mouseDist < mouse.radius) {
                opacity *= 1 + (1 - mouseDist / mouse.radius) * 2;
              }
            }

            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [initParticles]);

  return (
    <section
      className="social-proof-section-dark w-full relative overflow-hidden"
      aria-labelledby="social-proof-heading"
    >
      {/* Neural Canvas Background */}
      <canvas ref={canvasRef} className="social-proof-canvas" />

      {/* Main Content Area */}
      <div className="relative z-10 px-6 sm:px-12 md:px-16 lg:px-24 pt-16 pb-32 sm:pb-40 md:pb-48">
        {/* Top Row: Trust Badge left, Company logos right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16 sm:mb-20 md:mb-24">
          {/* Premium Trust Badge - Dark Theme */}
          <div className="social-proof-trust-row">
            <div className="trust-badge-dark">
              <div className="trust-icon-dark">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="trust-text-dark">Trusted by 500,000+ companies worldwide</span>
            </div>
          </div>

          {/* Premium Company Logos - Dark Theme */}
          <div
            className="company-logos-dark"
            role="list"
            aria-label="Featured companies"
          >
            {companies.map((company, index) => (
              <span
                key={index}
                role="listitem"
                className={`company-logo-dark ${company.style}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {company.name}
              </span>
            ))}
          </div>
        </div>

        {/* Premium Testimonial - Dark Theme */}
        <div className="testimonial-dark mb-20 sm:mb-28 md:mb-36">
          <div className="testimonial-quote-dark" aria-hidden="true">&ldquo;</div>
          <figure className="testimonial-content-dark">
            <blockquote
              id="social-proof-heading"
              className="testimonial-text-dark"
            >
              Every rep is more productive with AIVI.
              <br />We booked 75% more meetings
              <br />while cutting manual work in half.
            </blockquote>

            <figcaption className="testimonial-author-dark">
              <div className="author-details-dark">
                <div className="author-avatar-dark">
                  <span>AF</span>
                </div>
                <div className="author-info-dark">
                  <span className="author-name-dark">Andrew Froning</span>
                  <span className="author-role-dark">BDR Leader</span>
                </div>
              </div>
              <div className="author-company-dark">CYERA</div>
            </figcaption>
          </figure>
        </div>

        {/* Premium Stats Cards - Glass Effect for Dark Theme */}
        <div
          className="stats-grid-dark"
          role="list"
          aria-label="Performance statistics"
        >
          {stats.map((stat, index) => (
            <article
              key={index}
              role="listitem"
              className="stat-card-dark"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Decorative corner accent */}
              <div className="stat-card-accent-dark" aria-hidden="true"></div>

              {/* Top row: Label left, Metric right */}
              <div className="stat-card-header-dark">
                <p className="stat-card-label-dark">{stat.label}</p>
                <span className="stat-card-metric-dark">{stat.metric}</span>
              </div>

              {/* Bottom: Large number with gradient (PRESERVED) */}
              <div className="stat-card-value-dark">
                <span className="text-[72px] sm:text-[96px] lg:text-[112px] leading-[0.9] font-medium aivi-gradient-text tracking-[-0.04em] premium-number text-shadow-subtle">
                  {stat.number}
                </span>
                <span className="text-[28px] sm:text-[36px] lg:text-[42px] font-normal text-[#6b7280] tracking-[-0.02em] font-inter">
                  {stat.unit}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Slanted Divider to Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[100px] md:h-[120px] overflow-hidden pointer-events-none z-20"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 120L1440 120L1440 0L0 80L0 120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
