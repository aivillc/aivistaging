import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIHeroV4 from '@/components/aiviv4/AIVIHeroV4';
import AIVISocialProofV4 from '@/components/aiviv4/AIVISocialProofV4';
import AIVIFeatureTabsV4 from '@/components/aiviv4/AIVIFeatureTabsV4';
import AIVICalculatorV4 from '@/components/aiviv4/AIVICalculatorV4';
import AIVICTASectionV4 from '@/components/aiviv4/AIVICTASectionV4';
import AIVIFAQV4 from '@/components/aiviv4/AIVIFAQV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

export default function AIVIv4Page() {
  return (
    <div className="bg-[#000] min-h-screen antialiased font-manrope">
      <AIVINavigationV4 />
      <main id="main-content">
        <AIVIHeroV4 />
        {/* Consistent color flow: beige -> white -> light gray -> white -> light gray */}
        <AIVISocialProofV4 />
        <AIVIFeatureTabsV4 />
        <AIVICalculatorV4 />
        <AIVICTASectionV4 />
        <AIVIFAQV4 />
      </main>
      <AIVIFooter />
    </div>
  );
}
