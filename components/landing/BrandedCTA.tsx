'use client';

interface Props {
  headline: string;
  subheadline: string;
  buttonText: string;
  primaryColor: string;
}

export default function BrandedCTA({ headline, subheadline, buttonText, primaryColor }: Props) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">{subheadline}</p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 rounded-full font-semibold text-lg bg-white transition-all hover:scale-105 hover:shadow-xl"
          style={{ color: primaryColor }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
