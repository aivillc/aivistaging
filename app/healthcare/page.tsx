import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatBot from '@/components/ChatBot';
import Image from 'next/image';

export const metadata = {
  title: 'Healthcare AI Solutions | AIVI',
  description: 'Transform patient engagement with AI-powered appointment reminders, follow-ups, and automated healthcare communication.',
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl animate-pulse-slower" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-5xl shadow-2xl shadow-purple-500/50">
                🏥
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
              Patient Follow-Ups That{' '}
              <span className="inline-block bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
                Convert
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl text-white/60">
                In 13 Seconds
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              AI-powered appointment reminders and patient engagement that{' '}
              <span className="text-orange-500 font-bold">reduces no-shows by 67%</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/50 uppercase tracking-wider"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white/5 border-2 border-purple-600/50 hover:bg-white/10 text-white text-lg font-bold rounded-xl transition-all backdrop-blur-sm uppercase tracking-wider"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Features */}
      <section id="features" className="relative py-20 px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Healthcare-Specific{' '}
              <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Purpose-built AI automation for healthcare providers, clinics, and medical practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-white mb-4">Appointment Reminders</h3>
              <p className="text-white/70">
                Automated SMS, voice, and email reminders 48 hours, 24 hours, and 2 hours before appointments. Reduce no-shows dramatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Prescription Refill Automation</h3>
              <p className="text-white/70">
                Proactive outreach when prescriptions are due. Patients can request refills via SMS or voice with instant confirmation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-white mb-4">Pre-Visit Forms</h3>
              <p className="text-white/70">
                Send and collect intake forms, insurance information, and medical history before appointments. Save time at check-in.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-2xl font-bold text-white mb-4">Lab Results Notification</h3>
              <p className="text-white/70">
                Automated notifications when lab results are ready. HIPAA-compliant delivery via secure patient portals.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-2xl font-bold text-white mb-4">Post-Visit Follow-Up</h3>
              <p className="text-white/70">
                Check-in with patients after procedures or visits. Collect feedback, address concerns, and improve care quality.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">HIPAA Compliant</h3>
              <p className="text-white/70">
                Fully HIPAA-compliant infrastructure with encrypted communications, secure data storage, and audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                67%
              </div>
              <p className="text-xl text-white/80">Reduction in No-Shows</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">
                89%
              </div>
              <p className="text-xl text-white/80">Patient Satisfaction Rate</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                15hrs
              </div>
              <p className="text-xl text-white/80">Staff Time Saved Per Week</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
              Patient Experience?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Join hundreds of healthcare providers using AIVI to improve patient engagement and reduce administrative burden.
          </p>
          <a
            href="/#contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/50 uppercase tracking-wider"
          >
            Schedule a Demo
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <ChatBot />
    </main>
  );
}
