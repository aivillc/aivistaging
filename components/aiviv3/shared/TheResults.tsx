interface TheResultsProps {
  stats: { value: string; label: string }[];
}

export default function TheResults({ stats }: TheResultsProps) {
  return (
    <section className="w-full px-[5%] sm:px-[7%] lg:px-[10%] py-12 sm:py-16 font-manrope">
      <div className="max-w-[1400px] mx-auto">
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#F39C12] via-[#D85D74] via-[#9B59B6] to-[#6A3DE8] shadow-2xl">
          <div className="bg-gradient-to-br from-[#6A3DE8]/20 to-[#9B59B6]/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold text-white mb-8 sm:mb-12">
              The Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-[48px] sm:text-[56px] md:text-[64px] font-bold leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[12px] sm:text-[13px] uppercase tracking-wider mt-3 opacity-80 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
