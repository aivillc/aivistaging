import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatBot from '@/components/ChatBot';

export const metadata = {
  title: 'Logistics AI Solutions | AIVI',
  description: 'Automate shipment tracking, delivery notifications, and customer communication with AI-powered logistics solutions.',
};

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-slower" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-5xl shadow-2xl shadow-orange-500/50">
                🚚
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
              Shipment Tracking That{' '}
              <span className="inline-block bg-gradient-to-r from-purple-500 via-orange-500 to-purple-500 text-transparent bg-clip-text animate-gradient-x">
                Scales
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl text-white/60">
                At Light Speed
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              AI-powered logistics automation that{' '}
              <span className="text-orange-500 font-bold">reduces support tickets by 73%</span>
              {' '}and improves delivery satisfaction
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/50 uppercase tracking-wider"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white/5 border-2 border-orange-600/50 hover:bg-white/10 text-white text-lg font-bold rounded-xl transition-all backdrop-blur-sm uppercase tracking-wider"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Features */}
      <section id="features" className="relative py-20 px-6 bg-gradient-to-b from-black to-orange-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Logistics-Specific{' '}
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Purpose-built AI automation for logistics companies, freight forwarders, and delivery services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Shipment Updates</h3>
              <p className="text-white/70">
                Real-time tracking notifications via SMS, email, and voice. Keep customers informed at every stage of delivery.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Delivery Time Windows</h3>
              <p className="text-white/70">
                AI-powered delivery time predictions. Notify customers 30 minutes before arrival and reduce failed deliveries.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Exception Management</h3>
              <p className="text-white/70">
                Proactive alerts for delays, route changes, or delivery issues. Automated resolution workflows reduce manual intervention.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proof of Delivery</h3>
              <p className="text-white/70">
                Automated POD collection via SMS. Customers receive signature requests and confirmation with photo evidence.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Two-Way Communication</h3>
              <p className="text-white/70">
                Customers can reschedule deliveries, provide special instructions, or ask questions via SMS with instant responses.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Route Optimization</h3>
              <p className="text-white/70">
                AI-driven route planning based on traffic, weather, and delivery windows. Reduce fuel costs and improve on-time delivery rates.
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
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">
                73%
              </div>
              <p className="text-xl text-white/80">Reduction in Support Tickets</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                94%
              </div>
              <p className="text-xl text-white/80">On-Time Delivery Rate</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">
                2.5x
              </div>
              <p className="text-xl text-white/80">Faster Customer Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-orange-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Streamline Your{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
              Logistics Operations?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Join leading logistics companies using AIVI to automate customer communication and improve delivery satisfaction.
          </p>
          <a
            href="/#contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/50 uppercase tracking-wider"
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
