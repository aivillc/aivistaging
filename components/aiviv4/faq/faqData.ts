export interface FAQ {
  question: string;
  answer: string;
  category: 'pricing' | 'features' | 'technical' | 'support';
}

export const faqs: FAQ[] = [
  {
    question: 'How does AIVI charge?',
    answer:
      'We keep pricing simple with a per-lead basis for every lead AIVI processes. This transparent model means you only pay for actual results. Visit our pricing page for detailed information.',
    category: 'pricing',
  },
  {
    question: 'Is AIVI customizable?',
    answer:
      'Yes, every element of AIVI\'s outreach is fully customizable and personalized to your business. From voice tone to messaging cadence, you have complete control over how AIVI represents your brand.',
    category: 'features',
  },
  {
    question: 'What channels does AIVI support?',
    answer:
      'AIVI is omnichannel, delivering the best results through voice, SMS, and email. We continuously expand our channel support to ensure maximum reach and engagement.',
    category: 'technical',
  },
  {
    question: 'Do we need to provide sequences and content?',
    answer:
      'You can provide your own content, but our experienced team and AI-driven data can guide you to the best options. Our managed packages handle all content creation and optimization for you.',
    category: 'features',
  },
  {
    question: 'What results can we expect?',
    answer:
      'Results depend on your data quality. With strong data, you\'ll see higher contact rates and improved close rates compared to traditional methods. Our clients typically see 2-3x improvement in lead conversion.',
    category: 'support',
  },
  {
    question: 'Does AIVI offer a trial?',
    answer:
      'Yes! We offer a free trial for 100 leads, or a paid trial covering 500 leads with full feature access. This lets you evaluate AIVI\'s performance with your actual data.',
    category: 'pricing',
  },
  {
    question: 'What makes AIVI different from other AI voice solutions?',
    answer:
      'Our team brings 20+ years of experience building AI, telecom, contact center, and lead generation tools for Fortune 100 companies. This deep expertise ensures we solve real business problems effectively.',
    category: 'technical',
  },
  {
    question: 'Is there a minimum lead volume?',
    answer:
      'Our managed service has a minimum volume requirement. We\'re also developing a self-serve model with no limits for businesses of all sizes.',
    category: 'pricing',
  },
];
