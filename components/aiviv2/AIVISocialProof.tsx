'use client';

const companies = [
  { name: 'AUTODESK', style: 'font-bold tracking-wide' },
  { name: 'Dolby', style: 'font-bold' },
  { name: 'SMARTLING', style: 'font-bold tracking-wide' },
  { name: 'Realis', style: 'font-serif italic' },
  { name: 'ANTHROPIC', style: 'font-bold tracking-wider' },
  { name: 'kandji', style: 'font-bold' },
  { name: 'DocuSign', style: 'font-bold' },
];

const stats = [
  { label: '73% of all successful transfers occur within 13 seconds of outreach', number: '73%', company: 'Meridian Financial' },
  { label: 'We helped close twice as many loans per month', number: '2X', company: 'LoanPro' },
  { label: 'We were 300% more productive than their contact center', number: '300%', company: 'TechVista' },
];

export default function AIVISocialProof() {
  return (
    <section className="w-full bg-[#E8E5E0] relative">
      {/* Main Content Area */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 pt-16 pb-32 sm:pb-40 md:pb-48">
        {/* Top Row: Label left, Company logos right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16 sm:mb-20 md:mb-24">
          <p className="text-[11px] sm:text-[12px] font-medium tracking-[2px] text-[#666666] uppercase">
            JOIN OVER 500,000 COMPANIES USING AIVI
          </p>

          {/* Company Logos */}
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10 flex-wrap">
            {companies.map((company, index) => (
              <span
                key={index}
                className={`text-[14px] sm:text-[16px] text-[#1a1a1a] ${company.style}`}
              >
                {company.name}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial with Author */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 mb-20 sm:mb-28 md:mb-36">
          {/* Quote */}
          <blockquote className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.15] font-normal text-[#000000] tracking-[-0.02em]">
            "Every rep is more productive with AIVI.<br />We booked 75% more meetings<br />while cutting manual work in half."
          </blockquote>

          {/* Author */}
          <div className="flex flex-col justify-end lg:text-right">
            <div className="text-[11px] sm:text-[12px] font-medium tracking-[1.5px] text-[#666666] uppercase mb-1">
              ANDREW FRONING
            </div>
            <div className="text-[11px] sm:text-[12px] font-medium tracking-[1.5px] text-[#321ca3] uppercase mb-4">
              BDR LEADER
            </div>
            <div className="text-[16px] sm:text-[18px] font-bold text-[#1a1a1a]">
              CYERA
            </div>
          </div>
        </div>

        {/* Stats Cards - 3 column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 min-h-[220px] sm:min-h-[260px] flex flex-col justify-between shadow-sm"
            >
              {/* Top row: Label left, Company right */}
              <div className="flex items-start justify-between gap-4">
                <p className="text-[13px] sm:text-[14px] font-normal text-[#9a8a7c] leading-[1.5] max-w-[180px]">
                  {stat.label}
                </p>
                <span className="text-[14px] sm:text-[15px] font-bold text-[#1a1a1a] whitespace-nowrap flex-shrink-0">
                  {stat.company}
                </span>
              </div>

              {/* Bottom: Large number */}
              <div className="text-[70px] sm:text-[90px] lg:text-[110px] leading-[1] font-light text-[#000000] tracking-[-0.03em] mt-[15px]">
                {stat.number}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Asymmetrical Diagonal Divider - Beige to White transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="w-full h-[120px] sm:h-[160px] md:h-[200px]"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White fill for the diagonal shape */}
          <path
            d="M0 200L1440 200L1440 60L0 200Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
