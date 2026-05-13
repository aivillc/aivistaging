'use client';

interface Props {
  companyName: string;
  phone?: string;
  address?: string;
  socialLinks?: Record<string, string>;
}

export default function BrandedFooter({ companyName, phone, address, socialLinks }: Props) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">{companyName}</h3>
            {address && <p className="text-sm mb-2">{address}</p>}
            {phone && <p className="text-sm">{phone}</p>}
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#benefits" className="block hover:text-white transition-colors">How It Works</a>
              <a href="#features" className="block hover:text-white transition-colors">Features</a>
              <a href="#contact" className="block hover:text-white transition-colors">Get Started</a>
              <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          {socialLinks && Object.keys(socialLinks).length > 0 && (
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <div className="flex gap-4">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm capitalize hover:text-white transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <a
            href="https://aivi.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-white transition-colors flex items-center gap-1.5"
          >
            Powered by
            <span className="font-bold text-white">AIVI</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
