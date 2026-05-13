'use client';

interface Props {
  companyName: string;
  headline: string;
  subheadline: string;
  primaryColor: string;
}

export default function BrandedHero({ companyName, headline, subheadline, primaryColor }: Props) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${primaryColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
        >
          Powered by AIVI
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {headline}
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-white font-semibold text-lg transition-all hover:opacity-90 hover:scale-105 shadow-lg"
            style={{ backgroundColor: primaryColor }}
          >
            Get Started Free
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full font-semibold text-lg border-2 transition-all hover:bg-gray-50"
            style={{ borderColor: primaryColor, color: primaryColor }}
          >
            See How It Works
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            60-second response time
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            TCPA compliant
          </div>
        </div>
      </div>
    </section>
  );
}
