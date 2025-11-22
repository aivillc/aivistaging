export default function AIVISocialProof() {
  const companies = [
    'AUTODESK',
    'Dolby',
    'SMARTLING',
    'Realis',
    'ANTHROPIC',
    'kandji',
    'DocuSign',
  ];

  const stats = [
    { label: '70% increase in sales leads', number: '70%', company: 'customer.io' },
    { label: '4X SDR efficiency', number: '4x', company: 'GTM Ops' },
    { label: '64% lower tech stack costs', number: '64%', company: 'Census' },
  ];

  return (
    <section className="w-full bg-[#E8E5E0] px-6 py-6">
      <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
        {/* Company Logos Bar - Full Width at Top */}
        <div className="text-left mb-16">
          <p className="text-[11px] font-medium tracking-[1px] text-[#666666] uppercase mb-8">
            JOIN OVER 500,000 COMPANIES USING AIVI
          </p>
          <div className="flex flex-wrap gap-12 items-center max-w-[1200px]">
            {companies.map((company, index) => (
              <div
                key={index}
                className="h-8 flex items-center justify-center text-[#666666] opacity-70 hover:opacity-100 transition-all filter grayscale hover:grayscale-0"
              >
                <span className={company === 'Realis' ? 'font-serif italic' : 'font-medium'}>{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid: Testimonial (Left) | Divider | Stats (Right) */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-start">
          {/* Left Column - Testimonial Quote */}
          <div className="text-left">
            <blockquote className="text-[42px] leading-[1.25] font-normal text-[#000000] mb-8">
              &quot;Every rep is more productive with AIVI. We booked 75% more meetings while cutting manual work
              in half.&quot;
            </blockquote>
            <div className="text-[13px] font-normal text-[#666666] tracking-[0.5px] uppercase leading-[1.5] mt-6">
              ANDREW FRONING
              <br />
              BDR LEADER
            </div>
            <div className="mt-3">
              <span className="text-[24px] font-bold text-[#000000]">CYERA</span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] h-full bg-[#E0E0E0] self-stretch min-h-[400px]"></div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-left shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all"
              >
                <p className="text-[13px] font-normal text-[#666666] mb-3 leading-[1.4]">{stat.label}</p>
                <div className="text-[56px] leading-[1] font-normal text-[#2D2D3D] mb-3 tracking-[-0.02em]">
                  {stat.number}
                </div>
                <div className="mt-4">
                  <span className="text-[14px] font-medium text-[#000000] opacity-80">{stat.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
