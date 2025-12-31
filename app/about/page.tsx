import { Metadata } from 'next';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import {
  IndustryHero,
  TheResults,
  OurStory,
  OurTeam,
  OurValues,
  HowItWorks,
  IndustryCTA,
} from '@/components/aiviv3/shared';

export const metadata: Metadata = {
  title: 'About AIVI | AI Revenue Engine for Lead Generation',
  description: 'Founded by Amazon Connect and Five9 architects, AIVI solves the biggest problem in lead generation: 55% of expensive leads get wasted because follow-up takes too long.',
};

const resultsStats = [
  { value: '1.2M+', label: 'AI Conversations Processed Daily' },
  { value: '$18M+', label: 'Revenue Generated for Customers' },
  { value: '65%+', label: 'Contact Rate Achieved' },
];

const steps = [
  {
    title: 'Our Engineering',
    description: 'Built by former Amazon Connect and Five9 architects who have processed billions of customer interactions. AI-agnostic orchestration, learning engine that optimizes continuously, and financial services workflows including credit pull and compliance.',
  },
  {
    title: 'Customer Success',
    description: 'We don\'t just onboard you and disappear. We actively monitor your contact rates, transfer rates, and revenue lift, then optimize until you hit your targets. Typical results in 90 days: 45% to 65% contact rate, $1.2M+ monthly revenue recovery.',
  },
  {
    title: 'Our Commitment',
    description: 'We only win when you win. That\'s why we focus on one metric: revenue lift. Everything else is just noise. No inflated stats, no vague promises. Just measurable results.',
  },
  {
    title: 'Our Vision',
    description: 'Make lead waste obsolete. Every company spending $10K-$1M+/month on leads should achieve 65%+ contact rates, 3-second response times, and intelligent routing. When we\'re done, "wasting 55% of leads" will sound as outdated as calling customers from a rolodex.',
  },
];

export default function AboutPage() {
  return (
    <>
      <AIVINavigationV4 transparent={false} />
      <main className="min-h-screen bg-[#E8E5E0] font-manrope">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="Building the AI Revenue Engine for Lead Generation"
            subheadline="Founded by Amazon Connect and Five9 architects, AIVI solves the biggest problem in lead generation: 55% of expensive leads get wasted because follow-up takes too long. We built the AI Revenue Engine that contacts leads in 3 seconds, qualifies automatically, and routes to the best closer. Recovering millions in lost revenue."
            hideAudio={true}
            centerText={true}
            primaryCta="Book a Demo"
            secondaryCta="Calculate Your Impact"
            secondaryCtaLink="/#calculator"
          />
          <TheResults stats={resultsStats} />
          <OurStory />
          <OurTeam />
          <OurValues />
          <HowItWorks steps={steps} title="How We Work" />
          <IndustryCTA
            headline="Ready to Recover Your Lost Revenue?"
            subheadline="Stop wasting 55% of your leads. See how much revenue you're leaving on the table."
            secondaryButtonText="ROI Calculator"
            secondaryButtonLink="/#calculator"
          />
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
