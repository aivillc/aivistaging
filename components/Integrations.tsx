'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface CRMCarouselCardProps {
  name: string;
  category: string;
}

function CRMCarouselCard({ name, category }: CRMCarouselCardProps) {
  return (
    <div className="flex-shrink-0 w-56 sm:w-64 mx-3 sm:mx-4 group">
      <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 h-full" style={{
        borderColor: undefined
      }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
        <div className="flex items-center justify-center h-16 mb-4">
          <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all" style={{
            backgroundImage: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)',
            borderColor: 'rgba(14, 165, 233, 0.3)'
          }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0ea5e9'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)'}>
            <div className="text-4xl font-black transition-colors" style={{ color: '#0ea5e9' }} onMouseEnter={(e) => e.currentTarget.style.color = '#14b8a6'} onMouseLeave={(e) => e.currentTarget.style.color = '#0ea5e9'}>
              {name.charAt(0)}
            </div>
          </div>
        </div>
        <h4 className="font-bold text-center mb-2 text-lg" style={{ color: '#e0f2fe' }}>{name}</h4>
        <p className="text-xs text-center uppercase tracking-wider" style={{ color: 'rgba(224, 251, 252, 0.5)' }}>
          {category}
        </p>
      </div>
    </div>
  );
}

export default function Integrations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    integrationName: '',
    currentSystem: '',
    useCase: '',
    timeline: '',
    additionalDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Custom Integration Request:', formData);
    alert('Thank you! We\'ll contact you shortly to discuss your custom integration needs.');

    // Reset form and close modal
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      integrationName: '',
      currentSystem: '',
      useCase: '',
      timeline: '',
      additionalDetails: ''
    });
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  return (
    <section id="integrations" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,128,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4" style={{ color: '#e0f2fe' }}>
            Seamless{' '}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%)'
            }}>
              Integrations
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'rgba(224, 251, 252, 0.6)' }}>
            Connect with your existing tools and workflows. No complex setup required.
          </p>
        </div>

        {/* CRM Platforms Carousel */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
            CRM Platforms
          </h3>
          <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
            Seamlessly integrate with your existing CRM or choose from our supported platforms
          </p>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            {/* Scrolling Track */}
            <div className="flex animate-scroll">
              <CRMCarouselCard name="Salesforce" category="Enterprise CRM" />
              <CRMCarouselCard name="HubSpot" category="Inbound CRM" />
              <CRMCarouselCard name="Microsoft Dynamics" category="Business CRM" />
              <CRMCarouselCard name="Zoho CRM" category="Cloud CRM" />
              <CRMCarouselCard name="Pipedrive" category="Sales CRM" />
              <CRMCarouselCard name="Monday.com" category="Work OS" />
              <CRMCarouselCard name="Freshsales" category="Sales CRM" />
              <CRMCarouselCard name="Copper" category="Google CRM" />
              <CRMCarouselCard name="ActiveCampaign" category="Marketing CRM" />
              <CRMCarouselCard name="SugarCRM" category="Customer CRM" />
              <CRMCarouselCard name="Insightly" category="Project CRM" />
              <CRMCarouselCard name="Nutshell" category="Growth CRM" />
              
              {/* Duplicate set for seamless loop */}
              <CRMCarouselCard name="Salesforce" category="Enterprise CRM" />
              <CRMCarouselCard name="HubSpot" category="Inbound CRM" />
              <CRMCarouselCard name="Microsoft Dynamics" category="Business CRM" />
              <CRMCarouselCard name="Zoho CRM" category="Cloud CRM" />
              <CRMCarouselCard name="Pipedrive" category="Sales CRM" />
              <CRMCarouselCard name="Monday.com" category="Work OS" />
              <CRMCarouselCard name="Freshsales" category="Sales CRM" />
              <CRMCarouselCard name="Copper" category="Google CRM" />
              <CRMCarouselCard name="ActiveCampaign" category="Marketing CRM" />
              <CRMCarouselCard name="SugarCRM" category="Customer CRM" />
              <CRMCarouselCard name="Insightly" category="Project CRM" />
              <CRMCarouselCard name="Nutshell" category="Growth CRM" />
            </div>
          </div>
        </div>

        {/* Communication Channels */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
            Communication Channels
          </h3>
          <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
            Connect through multiple channels for comprehensive customer engagement
          </p>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            {/* Scrolling Track - Left to Right (reverse) */}
            <div className="flex animate-scroll-reverse">
              <CRMCarouselCard name="Twilio" category="Voice & SMS" />
              <CRMCarouselCard name="SendGrid" category="Email" />
              <CRMCarouselCard name="AWS SES" category="Cloud Email" />
              <CRMCarouselCard name="Mailgun" category="Email API" />
              <CRMCarouselCard name="Vonage" category="Communications" />
              <CRMCarouselCard name="Postmark" category="Transactional Email" />
              <CRMCarouselCard name="MessageBird" category="Omnichannel" />
              <CRMCarouselCard name="RingCentral" category="Business Phone" />
              
              {/* Duplicate set for seamless loop */}
              <CRMCarouselCard name="Twilio" category="Voice & SMS" />
              <CRMCarouselCard name="SendGrid" category="Email" />
              <CRMCarouselCard name="AWS SES" category="Cloud Email" />
              <CRMCarouselCard name="Mailgun" category="Email API" />
              <CRMCarouselCard name="Vonage" category="Communications" />
              <CRMCarouselCard name="Postmark" category="Transactional Email" />
              <CRMCarouselCard name="MessageBird" category="Omnichannel" />
              <CRMCarouselCard name="RingCentral" category="Business Phone" />
            </div>
          </div>
        </div>

        {/* Financial & Data Services */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
            Financial & Data Services
          </h3>
          <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
            Secure integrations with financial and data verification services
          </p>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            {/* Scrolling Track - Right to Left */}
            <div className="flex animate-scroll">
              <CRMCarouselCard name="Plaid" category="Banking Data" />
              <CRMCarouselCard name="Stripe" category="Payments" />
              <CRMCarouselCard name="DocuSign" category="E-Signatures" />
              <CRMCarouselCard name="Equifax" category="Credit Bureau" />
              <CRMCarouselCard name="Experian" category="Credit Data" />
              <CRMCarouselCard name="TransUnion" category="Credit Reports" />
              <CRMCarouselCard name="HelloSign" category="Documents" />
              <CRMCarouselCard name="Yodlee" category="Financial Data" />
              
              {/* Duplicate set for seamless loop */}
              <CRMCarouselCard name="Plaid" category="Banking Data" />
              <CRMCarouselCard name="Stripe" category="Payments" />
              <CRMCarouselCard name="DocuSign" category="E-Signatures" />
              <CRMCarouselCard name="Equifax" category="Credit Bureau" />
              <CRMCarouselCard name="Experian" category="Credit Data" />
              <CRMCarouselCard name="TransUnion" category="Credit Reports" />
              <CRMCarouselCard name="HelloSign" category="Documents" />
              <CRMCarouselCard name="Yodlee" category="Financial Data" />
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="mt-12 sm:mt-14 md:mt-16 text-center p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-white/5 to-white/10 border-2 rounded-3xl transition-all" style={{
          borderColor: 'rgba(14, 165, 233, 0.3)'
        }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)'}>
          <h3 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#e0f2fe' }}>
            Don't See Your Integration?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(224, 251, 252, 0.7)' }}>
            We build custom integrations for our managed service clients. Our API-first architecture can connect to virtually any system.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 sm:px-8 py-3 sm:py-4 font-black rounded-lg transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider text-sm sm:text-base"
            style={{
              backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%)',
              color: '#e0f2fe'
            }}
          >
            Request Custom Integration
          </button>
        </div>
      </div>

      {/* Custom Integration Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black to-gray-900 border-2 border-[#0ea5e9]/30 rounded-3xl shadow-2xl animate-scaleIn">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 p-6 border-b border-[#0ea5e9]/30 bg-gradient-to-r from-[#0ea5e9]/10 to-[#14b8a6]/10 backdrop-blur-xl rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                    Request Custom Integration
                  </h3>
                  <p className="text-white/60 text-sm">
                    Tell us about your integration needs and we'll build it for you
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0ea5e9]/50 transition-all"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-white text-lg" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] flex items-center justify-center text-sm font-black">1</span>
                  Company Information
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Integration Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] flex items-center justify-center text-sm font-black">2</span>
                  Integration Details
                </h4>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    What system do you need to integrate? *
                  </label>
                  <input
                    type="text"
                    name="integrationName"
                    value={formData.integrationName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
                    placeholder="e.g., SAP, Oracle, Custom ERP"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Current System/Platform
                  </label>
                  <input
                    type="text"
                    name="currentSystem"
                    value={formData.currentSystem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
                    placeholder="e.g., Salesforce, HubSpot"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Use Case *
                  </label>
                  <textarea
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all resize-none"
                    placeholder="Describe how you want to use this integration..."
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
                  >
                    <option value="" className="bg-gray-900">Select timeline</option>
                    <option value="urgent" className="bg-gray-900">Urgent (1-2 weeks)</option>
                    <option value="soon" className="bg-gray-900">Soon (1 month)</option>
                    <option value="flexible" className="bg-gray-900">Flexible (2-3 months)</option>
                    <option value="planning" className="bg-gray-900">Planning phase</option>
                  </select>
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] flex items-center justify-center text-sm font-black">3</span>
                  Additional Details
                </h4>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Any additional requirements or technical details?
                  </label>
                  <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all resize-none"
                    placeholder="API requirements, data format preferences, security considerations..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] hover:shadow-[0_8px_30px_rgba(14,165,233,0.4)] disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-xl transition-all hover:scale-105 disabled:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

interface IntegrationCardProps {
  name: string;
  category: string;
  highlight?: boolean;
}

function IntegrationCard({ name, category, highlight = false }: IntegrationCardProps) {
  return (
    <div
      className={`group p-6 rounded-xl border-2 transition-all hover:scale-105 ${
        highlight
          ? 'bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/50 hover:border-orange-400'
          : 'bg-white/5 border-white/10 hover:border-purple-500/50'
      }`}
    >
      <div className="flex items-center justify-center h-12 mb-3">
        <div className={`text-3xl font-black ${highlight ? 'text-orange-500' : 'text-purple-500'}`}>
          {name.charAt(0)}
        </div>
      </div>
      <h4 className="text-white font-bold text-center mb-1">{name}</h4>
      <p className={`text-xs text-center ${highlight ? 'text-orange-400' : 'text-white/50'}`}>
        {category}
      </p>
    </div>
  );
}
