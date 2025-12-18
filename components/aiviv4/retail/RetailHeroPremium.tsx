'use client';

import AudioPlayer from '@/components/aiviv3/shared/AudioPlayer';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

interface RetailHeroPremiumProps {
  headline: string;
  subheadline: string;
  eyebrowLabel?: string;
  audioLabel?: string;
  audioSrc?: string;
  hideAudio?: boolean;
}

export default function RetailHeroPremium({
  headline,
  subheadline,
  eyebrowLabel = "Retail Solutions",
  audioLabel,
  audioSrc,
  hideAudio = false,
}: RetailHeroPremiumProps) {
  const { openDemoPopup } = useDemoPopup();

  return (
    <section className="w-full pt-[57px] relative overflow-hidden font-manrope">

      <div className="w-full py-20 sm:py-24 md:py-28 lg:py-32 relative z-10">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className={hideAudio ? 'flex flex-col items-center' : 'grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'}>
              {/* Text Content */}
              <div className={hideAudio ? 'text-center max-w-[900px]' : ''}>
                {/* Eyebrow Label with gradient lines */}
                <div className={`inline-flex items-center gap-4 mb-6 sm:mb-8 ${hideAudio ? 'justify-center' : ''}`}>
                  <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                  <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                    {eyebrowLabel}
                  </span>
                  <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
                </div>

                {/* Premium Headline - larger with tight letter-spacing */}
                <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium tracking-[-0.02em] text-[#0a0a0a] mb-5 sm:mb-6">
                  {headline}
                </h1>

                {/* Subheadline with refined typography */}
                <p className={`text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#555555] mb-8 sm:mb-10 ${hideAudio ? 'mx-auto max-w-[700px]' : 'max-w-[580px]'}`}>
                  {subheadline}
                </p>

                {/* Premium CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 ${hideAudio ? 'justify-center' : ''}`}>
                  {/* Primary Button - Gradient with shine effect */}
                  <button
                    onClick={openDemoPopup}
                    className="group relative inline-flex items-center justify-center h-14 px-10 text-white text-[16px] font-semibold rounded-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f84608]/20 transition-all duration-400 bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                  >
                    <span className="relative z-10">Book a Demo</span>
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>

                  {/* Secondary Button - Glass with border */}
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center h-14 px-10 bg-white/90 backdrop-blur-sm border-2 border-[#f84608]/30 text-[#f84608] text-[16px] font-semibold rounded-xl hover:bg-white hover:border-[#f84608]/50 hover:shadow-lg hover:shadow-[#f84608]/10 transition-all duration-400"
                  >
                    View Pricing
                  </a>
                </div>
              </div>

              {/* Right: Premium Audio Player Card */}
              {!hideAudio && audioLabel && (
                <div className="lg:pl-4">
                  <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 sm:p-8 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
                    <AudioPlayer label={audioLabel} audioSrc={audioSrc} darkMode={false} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    </section>
  );
}
