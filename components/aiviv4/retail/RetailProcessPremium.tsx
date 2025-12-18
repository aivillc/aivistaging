'use client';

interface Step {
  title: string;
  description: string;
}

interface RetailProcessPremiumProps {
  steps: Step[];
  sectionTitle?: string;
  eyebrowLabel?: string;
}

const stepIcons = [
  // Step 1: Setup/Import
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>,
  // Step 2: Configure
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Step 3: Launch
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Step 4: Results
  <svg key="4" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
];

export default function RetailProcessPremium({
  steps,
  sectionTitle = 'How It Works',
  eyebrowLabel = 'Simple Setup'
}: RetailProcessPremiumProps) {
  return (
    <section className="w-full font-manrope">
      <div className="w-full py-16 sm:py-20 md:py-24">
        <div className="w-full">
          {/* Section Header - Centered */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
                {eyebrowLabel}
              </span>
              <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] text-[#0a0a0a]">
              {sectionTitle}
            </h2>
          </div>

          {/* Steps Grid with Connecting Line */}
          <div className="relative">
            {/* Gradient connecting line - Desktop only */}
            <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3] opacity-30" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Step Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 sm:p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                    {/* Floating Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[13px] font-bold flex items-center justify-center shadow-lg shadow-[#f84608]/20 z-10">
                      {index + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-xl bg-[#f5f5f5] flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-[#f84608]/10 group-hover:to-[#321ca3]/10 transition-all duration-300">
                      <div className="text-[#0a0a0a] group-hover:text-[#f84608] transition-colors duration-300">
                        {stepIcons[index] || stepIcons[0]}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#0a0a0a] mb-2 tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#555555]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
