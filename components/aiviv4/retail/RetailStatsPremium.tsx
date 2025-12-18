'use client';

interface Stat {
  value: string;
  label: string;
  badge?: string;
}

interface RetailStatsPremiumProps {
  stats: Stat[];
  title?: string;
}

export default function RetailStatsPremium({
  stats,
  title = "The Results Speak for Themselves"
}: RetailStatsPremiumProps) {
  // Default badges if not provided
  const defaultBadges = ['Increase', 'Average', 'Coverage'];

  return (
    <section className="w-full font-manrope">
      <div className="w-full py-16 sm:py-20 md:py-24">
        <div className="w-full">
          {/* Premium gradient card container */}
          <div className="bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-2xl" />

            {/* Section Title */}
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-normal text-white mb-8 sm:mb-10 text-center relative z-10">
              {title}
            </h2>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 relative z-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1"
                >
                  {/* Decorative corner accent - expands on hover */}
                  <div className="absolute top-0 right-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-gradient-to-bl from-[#f84608]/10 to-transparent rounded-br-2xl transition-all duration-400 group-hover:w-[120px] group-hover:h-[120px] sm:group-hover:w-[150px] sm:group-hover:h-[150px]" />

                  {/* Top row: Label and Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#6b7280] uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold ${
                      index % 2 === 0
                        ? 'bg-[#f84608]/10 text-[#f84608]'
                        : 'bg-[#321ca3]/10 text-[#321ca3]'
                    }`}>
                      {stat.badge || defaultBadges[index] || 'Result'}
                    </span>
                  </div>

                  {/* Large Gradient Number */}
                  <span className="block text-[56px] sm:text-[72px] md:text-[80px] lg:text-[96px] leading-[0.9] font-semibold bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent tracking-[-0.04em] transition-transform duration-300 group-hover:scale-105">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
