import TronHeader from '@/components/TronHeader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Integrations from '@/components/Integrations';
import Dashboard from '@/components/Dashboard';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatBot from '@/components/ChatBot';

export const metadata = {
  title: 'Healthcare AI Solutions | AIVI',
  description: 'Transform patient engagement with AI-powered appointment reminders, follow-ups, and automated healthcare communication.',
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-black">
      <TronHeader />
      <Navigation />
      <Hero />
      <Dashboard industry="Healthcare" />
      <Features industry="Healthcare" />
      <Solutions />
      <Integrations />
      <PainPoints industry="Healthcare" />
      <Testimonials industry="Healthcare" />
      <Footer />
      <ScrollToTop />
      <ChatBot />
    </main>
  );
}
