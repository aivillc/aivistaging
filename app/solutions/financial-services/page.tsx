'use client';

import { useRef } from 'react';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import { SolutionsSidebar } from '@/components/aiviv3/shared';
import PageConstellationCanvas from '@/components/aiviv4/PageConstellationCanvas';
import {
  RetailHeroPremium,
  RetailStatsPremium,
  RetailUseCasesPremium,
  RetailProcessPremium,
  RetailIntegrationsPremium,
  RetailFAQPremium,
  RetailCTAPremium,
} from '@/components/aiviv4/retail';

const useCases = [
  {
    title: 'Zero-Wait Customer Service',
    description: 'Account balances, transaction disputes, card activations, payment schedules—customers get instant answers without navigating phone trees or waiting on hold. AIVI resolves 85% of calls completely, routing only complex cases to advisors.',
    icon: 'calls' as const,
  },
  {
    title: 'Accelerate Loan Origination',
    description: 'Pre-qualify applicants in minutes, not days. AIVI collects required documentation, verifies eligibility, explains terms, and moves qualified borrowers straight to underwriting—dramatically shortening your time-to-fund.',
    icon: 'prequalify' as const,
  },
  {
    title: 'Streamline Collections with Empathy',
    description: 'Handle payment reminders and arrangements with consistent, compliant, and compassionate conversations. AIVI negotiates payment plans, documents agreements, and maintains relationships that traditional collections methods destroy.',
    icon: 'loan' as const,
  },
];

const steps = [
  {
    title: 'Secure Integration',
    description: 'Connect to your core banking system, CRM, and phone infrastructure with bank-grade encryption and compliance from day one.',
  },
  {
    title: 'Compliance Configuration',
    description: 'Build in required disclosures, fair lending language, and regulatory scripts. Every conversation follows your compliance requirements.',
  },
  {
    title: 'Controlled Rollout',
    description: 'Start with specific call types, measure performance, and expand gradually. Your compliance team reviews everything before full deployment.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Monitor call quality, compliance adherence, and customer satisfaction. AIVI improves with every interaction.',
  },
];

const stats = [
  { value: '85%', label: 'First-call resolution rate', badge: 'Resolution' },
  { value: '40%', label: 'Faster loan processing', badge: 'Speed' },
  { value: '$0.15', label: 'Average cost per call', badge: 'Savings' },
];

const faqs = [
  {
    question: 'How does AIVI handle regulatory compliance?',
    answer: 'AIVI is built for financial services compliance. Required disclosures are never skipped. Fair lending language is consistent. TCPA rules are followed. Every call is recorded, transcribed, and auditable. Your compliance team configures the rules; AIVI follows them perfectly, every time.',
  },
  {
    question: 'Can AIVI integrate with our core banking system?',
    answer: 'Yes. AIVI connects with FIS, Fiserv, Jack Henry, Temenos, and 30+ core banking platforms. Real-time account data enables personalized conversations—AIVI knows balances, recent transactions, and account status without customers repeating information.',
  },
  {
    question: 'How do you handle sensitive financial data?',
    answer: 'AIVI maintains SOC 2 Type II certification, uses end-to-end encryption, and follows PCI DSS guidelines. We never store full account numbers or SSNs in plain text. Detailed audit logs track every data access for your compliance records.',
  },
  {
    question: 'What about fraud detection and authentication?',
    answer: 'AIVI performs voice biometric authentication and knowledge-based verification. Suspicious patterns trigger immediate escalation. We integrate with your existing fraud prevention systems to add another layer of protection.',
  },
  {
    question: 'Can AIVI help with loan modifications and hardship programs?',
    answer: 'Absolutely. AIVI explains options, collects financial documentation, and guides borrowers through modification applications with patience and consistency. Loan officers receive complete packages ready for review, dramatically reducing processing time.',
  },
  {
    question: 'What ROI do financial institutions typically see?',
    answer: 'Banks report 85% reduction in cost per contact, 40% faster loan origination, and significant improvement in collections recovery rates. With call volumes in the thousands, AIVI typically delivers 10x ROI within 90 days.',
  },
];

export default function FinancialServicesSolutionPage() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <>
      <AIVINavigationV4 transparent={false} />
      <main ref={mainRef} className="min-h-screen bg-[#E8E5E0] bg-soft-gradient font-manrope relative">
        {/* Page-wide Constellation Canvas - excludes sidebar area */}
        <PageConstellationCanvas />

        {/* Floating Sidebar - Desktop Only */}
        <SolutionsSidebar mainRef={mainRef} />

        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Main Layout - with left margin for sidebar on desktop */}
          <div className="lg:ml-[320px]">
            <RetailHeroPremium
              headline="Compliant AI That Your Customers Will Love"
              subheadline="Financial services demands perfection—in compliance, security, and customer experience. AIVI delivers all three. Handle account inquiries, accelerate loan origination, and manage collections while maintaining regulatory compliance at every interaction."
              audioLabel="Hear AIVI process a loan pre-qualification"
              eyebrowLabel="Financial Services"
            />
            <RetailStatsPremium stats={stats} />
            <RetailUseCasesPremium useCases={useCases} sectionTitle="The Solution" />
            <RetailIntegrationsPremium />
            <RetailProcessPremium steps={steps} sectionTitle="How It Works" />
            <RetailFAQPremium faqs={faqs} />
            <RetailCTAPremium />
          </div>
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
