'use client';

import AIVINavigation from '@/components/aiviv2/AIVINavigation';
import AIVIHero from '@/components/aiviv2/AIVIHero';
import AIVISocialProof from '@/components/aiviv2/AIVISocialProof';
import AIVIFeatureTabs from '@/components/aiviv2/AIVIFeatureTabs';
import AIVIFAQ from '@/components/aiviv2/AIVIFAQ';
import AIVIFooter from '@/components/aiviv2/AIVIFooter';

export default function AIVIv2Page() {
  return (
    <div className="bg-[#E8E5E0] min-h-screen antialiased">
      <AIVINavigation />
      <div className="pt-[72px]">
        <AIVIHero />
        <AIVISocialProof />
        <AIVIFeatureTabs />
        <AIVIFAQ />
        <AIVIFooter />
      </div>
    </div>
  );
}
