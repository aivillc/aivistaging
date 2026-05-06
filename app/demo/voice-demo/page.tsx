import type { Metadata } from 'next';
import VoiceDemoClient from './VoiceDemoClient';

export const metadata: Metadata = {
  title: 'Get an Auto Quote in 30 Seconds — AIVI',
  description: 'Voice-driven auto insurance quote demo, powered by AIVI cobrowse.',
  robots: { index: true, follow: false },
};

export default function VoiceDemoPage() {
  return <VoiceDemoClient />;
}
