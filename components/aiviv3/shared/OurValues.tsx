export default function OurValues() {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to deliver cutting-edge solutions that transform how businesses engage with customers.',
    },
    {
      icon: '👥',
      title: 'Customer Obsessed',
      description: 'Every decision we make is driven by our commitment to delivering exceptional value and results for our clients.',
    },
    {
      icon: '💡',
      title: 'Intelligent Automation',
      description: 'We believe AI should augment human capabilities, not replace them. Our solutions empower teams to focus on what matters most.',
    },
    {
      icon: '🤝',
      title: 'Trust & Transparency',
      description: 'We build lasting partnerships through honest communication, reliable technology, and proven results.',
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-white rounded-2xl sm:rounded-3xl font-manrope">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-[32px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal text-[#1A1A1A] mb-4">
          Our <span className="bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] bg-clip-text text-transparent">Values</span>
        </h2>
        <p className="text-center text-[16px] sm:text-[17px] text-[#666666] mb-12 max-w-[700px] mx-auto">
          The principles that guide everything we do
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-[#E8E5E0] rounded-2xl p-6 sm:p-8 hover:border-[#FF8C00]/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                {/* Icon badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FF8C00]/10 to-[#8A2BE2]/10 rounded-xl mb-4 flex items-center justify-center border border-[#FF8C00]/20">
                  <span className="text-3xl sm:text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1A1A1A] mb-3">
                  {value.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#666666] leading-[1.6]">
                  {value.description}
                </p>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/5 to-[#8A2BE2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
