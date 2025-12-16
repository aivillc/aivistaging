'use client';

import Image from 'next/image';

export default function AIVIFooter() {
  const footerColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/aiviv3/features' },
        { label: 'Pricing', href: '/aiviv3/pricing' },
        { label: 'Integrations', href: '/aiviv3/integrations' },
        { label: 'Use Cases', href: '/aiviv3/use-cases' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Healthcare', href: '/aiviv3/solutions/healthcare' },
        { label: 'Legal', href: '/aiviv3/solutions/legal' },
        { label: 'Real Estate', href: '/aiviv3/solutions/real-estate' },
        { label: 'Retail', href: '/aiviv3/solutions/retail' },
        { label: 'Financial Services', href: '/aiviv3/solutions/financial-services' },
        { label: 'Hospitality', href: '/aiviv3/solutions/hospitality' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '/aiviv3/resources' },
        { label: 'Blog', href: '/aiviv3/blog' },
        { label: 'Documentation', href: '/aiviv3/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/aiviv3/about' },
        { label: 'Contact', href: '/aiviv3/contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', href: 'https://youtube.com' },
    { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', href: 'https://instagram.com' },
    { name: 'TikTok', path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z', href: 'https://tiktok.com' },
    { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', href: 'https://x.com' },
    { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: 'https://facebook.com' },
  ];

  return (
    <footer
      className="w-full bg-[#0A0A0A] text-white relative"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="pt-20 pb-16">
          {/* Logo */}
          <div className="mb-16 text-center">
            <a href="/" className="inline-block" aria-label="AIVI Home">
              <Image
                src="/aiviblack.png"
                alt="AIVI Logo"
                width={120}
                height={120}
                className="w-[120px] h-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>

          {/* Navigation Grid */}
          <nav className="mb-20" aria-label="Footer navigation">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 text-center">
              {footerColumns.map((column, index) => (
                <div key={index}>
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">
                    {column.title}
                  </h3>
                  <ul className="space-y-4">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-[18px] text-white/60 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Divider */}
          <div className="border-t border-white/10 mb-16" aria-hidden="true" />

          {/* Newsletter and Social Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Newsletter Signup */}
            <div>
              <h3 className="text-sm font-medium tracking-wide mb-3">Stay Updated</h3>
              <p className="text-[13px] text-white/50 leading-relaxed mb-6 max-w-sm">
                Be the first to know about new features and updates.
              </p>
              <form className="flex gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="md:text-right">
              <h4 className="text-sm font-medium tracking-wide mb-6">Connect</h4>
              <div className="flex items-center gap-5 md:justify-end">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Follow us on ${social.name}`}
                    className="text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8" aria-hidden="true" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
            <div className="flex items-center gap-6">
              <span>&copy; 2025 AIVI</span>
              <nav className="flex items-center gap-4" aria-label="Legal">
                <a href="/privacy" className="hover:text-white/60 transition-colors duration-200">Privacy</a>
                <span className="text-white/20">·</span>
                <a href="/terms" className="hover:text-white/60 transition-colors duration-200">Terms</a>
                <span className="text-white/20">·</span>
                <a href="/privacy#do-not-sell" className="hover:text-white/60 transition-colors duration-200">Do Not Sell</a>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
