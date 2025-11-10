import TronHeader from '@/components/TronHeader';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | AIVI',
  description: 'AIVI Terms of Service - Legal terms and conditions for using our platform',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <TronHeader />
      <Navigation />
      
      <section className="relative py-32 px-6 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Terms of <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">Service</span>
            </h1>
            <p className="text-white/60 text-lg">Last Updated: November 10, 2025</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") and AIVI LLC ("AIVI," "we," "us," or "our"). By accessing or using AIVI's AI-powered communication automation platform and services (collectively, the "Services"), you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="text-white/80 mb-4">AIVI provides AI-powered communication automation services, including but not limited to:</p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li><strong>AI Voice Services:</strong> Automated voice calling, AI voice agents, call coaching, and sentiment analysis</li>
                <li><strong>SMS Automation:</strong> Automated text messaging, two-way SMS communication, and SMS campaigns</li>
                <li><strong>Email Automation:</strong> Automated email campaigns, lead nurturing, and email engagement tracking</li>
                <li><strong>Document Intelligence:</strong> OCR processing, document analysis, and automated data extraction using AI</li>
                <li><strong>CRM Integration:</strong> Integration with Salesforce, HubSpot, and other CRM platforms</li>
                <li><strong>Analytics & Reporting:</strong> Performance dashboards, conversion tracking, and ROI measurement</li>
                <li><strong>Workflow Automation:</strong> Custom automation workflows and integration orchestration</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration and Eligibility</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">3.1 Eligibility</h3>
              <p className="text-white/80">
                You must be at least 18 years old and have the legal capacity to enter into binding contracts to use the Services. By registering, you represent and warrant that you meet these eligibility requirements.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">3.2 Account Information</h3>
              <p className="text-white/80">
                You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">3.3 Account Security</h3>
              <p className="text-white/80">
                You must immediately notify AIVI of any unauthorized use of your account or any other breach of security. AIVI will not be liable for any loss or damage arising from your failure to comply with these security obligations.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use Policy</h2>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">4.1 Permitted Uses</h3>
              <p className="text-white/80 mb-4">You may use the Services only for lawful business purposes, including:</p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>Customer engagement and relationship management</li>
                <li>Lead generation and sales automation</li>
                <li>Appointment reminders and confirmations</li>
                <li>Customer support and service notifications</li>
                <li>Marketing communications (with proper consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">4.2 Prohibited Uses</h3>
              <p className="text-white/80 mb-4">You agree NOT to use the Services to:</p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>Send unsolicited communications (SPAM) or violate CAN-SPAM, TCPA, or similar laws</li>
                <li>Engage in fraudulent, deceptive, or misleading practices</li>
                <li>Transmit harmful, threatening, abusive, harassing, or defamatory content</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Interfere with or disrupt the Services or servers/networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Use the Services for high-risk activities (medical diagnosis, nuclear facilities, aircraft navigation, life support systems)</li>
                <li>Scrape, harvest, or collect user data without consent</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Compliance with Communications Laws</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">5.1 TCPA Compliance (Telephone Consumer Protection Act)</h3>
              <p className="text-white/80">
                You are solely responsible for obtaining proper consent before making calls or sending SMS messages. You must maintain records of consent (written or recorded) and honor opt-out requests immediately. Failure to comply with TCPA may result in significant fines and legal liability.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">5.2 CAN-SPAM Compliance</h3>
              <p className="text-white/80">
                All email communications must include accurate header information, clear subject lines, valid physical postal addresses, and functional unsubscribe mechanisms. You must honor opt-out requests within 10 business days.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">5.3 Do Not Call Registry</h3>
              <p className="text-white/80">
                You are responsible for scrubbing your contact lists against the National Do Not Call Registry and maintaining an internal do-not-call list.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">5.4 International Compliance</h3>
              <p className="text-white/80">
                If you send communications internationally, you must comply with applicable laws in each jurisdiction, including GDPR (Europe), CASL (Canada), PDPA (Singapore), and other privacy and marketing regulations.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Pricing and Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">6.1 Subscription Fees</h3>
              <p className="text-white/80">
                Services are provided on a subscription basis. Pricing is as displayed on our website or as agreed in a separate written agreement. All fees are in U.S. Dollars and exclude applicable taxes.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">6.2 Usage-Based Charges</h3>
              <p className="text-white/80 mb-4">Additional charges may apply for:</p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>Voice call minutes (powered by Twilio)</li>
                <li>SMS message volume</li>
                <li>Email send volume</li>
                <li>Document processing and OCR</li>
                <li>AI model usage and API calls</li>
                <li>Premium features and add-ons</li>
              </ul>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">6.3 Payment Terms</h3>
              <p className="text-white/80">
                Subscription fees are billed in advance on a monthly or annual basis. Usage-based charges are billed in arrears. Payment is due upon receipt of invoice. Unpaid invoices may result in service suspension or termination.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">6.4 Price Changes</h3>
              <p className="text-white/80">
                AIVI reserves the right to modify pricing with 30 days' written notice. Continued use of the Services after the price change constitutes acceptance of the new pricing.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">6.5 Refund Policy</h3>
              <p className="text-white/80">
                Subscription fees are non-refundable except as required by law or as otherwise stated in a separate written agreement. Usage-based charges are non-refundable once services have been delivered.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Services and Integrations</h2>
              <p className="text-white/80 mb-4">
                The Services utilize and integrate with third-party platforms and services, including:
              </p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li><strong>Twilio:</strong> Voice and SMS infrastructure services</li>
                <li><strong>Retell AI:</strong> AI voice agent and conversation intelligence</li>
                <li><strong>N8N:</strong> Workflow automation and integration orchestration</li>
                <li><strong>OpenAI and other AI providers:</strong> Natural language processing and AI capabilities</li>
                <li><strong>CRM Platforms:</strong> Salesforce, HubSpot, and other customer relationship management systems</li>
                <li><strong>Cloud Infrastructure Providers:</strong> AWS, Google Cloud, or other hosting services</li>
              </ul>
              <p className="text-white/80 mt-4">
                Your use of third-party services is subject to their respective terms of service and privacy policies. AIVI is not responsible for the availability, performance, or data practices of third-party services. Any issues with third-party services should be directed to the respective provider.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">8.1 AIVI's IP</h3>
              <p className="text-white/80">
                All rights, title, and interest in and to the Services, including all software, algorithms, AI models, documentation, trademarks, and other intellectual property, are and will remain the exclusive property of AIVI and its licensors. No rights are granted to you except as expressly set forth in these Terms.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">8.2 Customer Data</h3>
              <p className="text-white/80">
                You retain all ownership rights to your data, content, and materials submitted to the Services ("Customer Data"). You grant AIVI a limited, non-exclusive, royalty-free license to use Customer Data solely for the purpose of providing the Services and improving our AI models (in aggregated and anonymized form).
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">8.3 Feedback</h3>
              <p className="text-white/80">
                Any feedback, suggestions, or ideas you provide to AIVI regarding the Services may be used by AIVI without obligation or compensation to you.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Privacy and Security</h2>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">9.1 Privacy Policy</h3>
              <p className="text-white/80">
                Our collection, use, and protection of your data is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">9.2 Security Measures</h3>
              <p className="text-white/80">
                AIVI implements industry-standard security measures including encryption, access controls, and regular security audits. However, no system is completely secure, and AIVI cannot guarantee absolute security of your data.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">9.3 Data Processing Agreement</h3>
              <p className="text-white/80">
                For customers subject to GDPR or other data protection laws, AIVI will enter into a Data Processing Agreement (DPA) upon request. For HIPAA-covered entities, a Business Associate Agreement (BAA) is available.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">9.4 Data Breach Notification</h3>
              <p className="text-white/80">
                In the event of a data breach affecting your information, AIVI will notify you in accordance with applicable law and our incident response procedures.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Service Level Agreement (SLA)</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">10.1 Uptime Commitment</h3>
              <p className="text-white/80">
                AIVI targets 99.9% uptime for the Services, excluding scheduled maintenance and circumstances beyond our reasonable control.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">10.2 Scheduled Maintenance</h3>
              <p className="text-white/80">
                AIVI may perform scheduled maintenance with reasonable advance notice. We will use commercially reasonable efforts to schedule maintenance during off-peak hours.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">10.3 Support</h3>
              <p className="text-white/80">
                Customer support is available via email, chat, and phone during business hours (Monday-Friday, 9 AM - 6 PM EST). Enterprise customers may receive 24/7 support as specified in their agreements.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Warranties and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">11.1 Limited Warranty</h3>
              <p className="text-white/80">
                AIVI warrants that the Services will perform substantially in accordance with the documentation. This warranty does not apply to issues caused by misuse, unauthorized modifications, or third-party services.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">11.2 Disclaimer</h3>
              <p className="text-white/80 uppercase font-bold mb-4">
                EXCEPT AS EXPRESSLY PROVIDED, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-white/80">
                AIVI does not warrant that the Services will be uninterrupted, error-free, or completely secure. AIVI does not warrant the accuracy, reliability, or completeness of any AI-generated content or predictions.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">11.3 AI and Machine Learning Limitations</h3>
              <p className="text-white/80">
                AI-powered features, including voice agents, sentiment analysis, and document processing, are based on machine learning models that may produce inaccurate or unexpected results. You are responsible for reviewing and validating AI-generated outputs before relying on them for business decisions.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Limitation of Liability</h2>
              <p className="text-white/80 uppercase font-bold mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIVI'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO AIVI IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
              </p>
              <p className="text-white/80 uppercase font-bold mb-4">
                IN NO EVENT SHALL AIVI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, EVEN IF AIVI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-white/80">
                Some jurisdictions do not allow the exclusion or limitation of certain warranties or damages, so some of the above limitations may not apply to you.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Indemnification</h2>
              <p className="text-white/80">
                You agree to indemnify, defend, and hold harmless AIVI and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any applicable laws or regulations; (d) your Customer Data; or (e) your violation of any third-party rights.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">14. Term and Termination</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">14.1 Term</h3>
              <p className="text-white/80">
                These Terms commence when you first access the Services and continue until terminated in accordance with this section.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">14.2 Termination by Customer</h3>
              <p className="text-white/80">
                You may terminate your subscription at any time by providing written notice. Termination will be effective at the end of the current billing period. No refunds will be provided for partial periods.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">14.3 Termination by AIVI</h3>
              <p className="text-white/80">
                AIVI may suspend or terminate your access immediately if you violate these Terms, fail to pay fees, or engage in conduct that could harm AIVI or other users.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">14.4 Effect of Termination</h3>
              <p className="text-white/80">
                Upon termination, your right to access the Services will immediately cease. AIVI will retain your data for 30 days after termination to allow for data export, after which it will be deleted in accordance with our data retention policies.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">15. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">15.1 Informal Resolution</h3>
              <p className="text-white/80">
                Before filing a claim, you agree to contact AIVI to seek an informal resolution. We will attempt to resolve disputes in good faith.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">15.2 Arbitration</h3>
              <p className="text-white/80">
                Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. Arbitration will take place in [Your State/Location]. You waive any right to a jury trial or to participate in a class action lawsuit.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">15.3 Exceptions</h3>
              <p className="text-white/80">
                Either party may seek injunctive relief in court to protect intellectual property rights or confidential information.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">16. General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">16.1 Governing Law</h3>
              <p className="text-white/80">
                These Terms shall be governed by and construed in accordance with the laws of [Your State], United States, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">16.2 Entire Agreement</h3>
              <p className="text-white/80">
                These Terms, together with the Privacy Policy and any separate written agreements, constitute the entire agreement between you and AIVI regarding the Services.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">16.3 Modifications</h3>
              <p className="text-white/80">
                AIVI may modify these Terms at any time by posting the updated Terms on our website. Material changes will be communicated via email or in-app notification. Continued use after changes constitutes acceptance.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">16.4 Assignment</h3>
              <p className="text-white/80">
                You may not assign or transfer these Terms without AIVI's prior written consent. AIVI may assign these Terms in connection with a merger, acquisition, or sale of assets.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">16.5 Severability</h3>
              <p className="text-white/80">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">16.6 Waiver</h3>
              <p className="text-white/80">
                No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">16.7 Force Majeure</h3>
              <p className="text-white/80">
                AIVI shall not be liable for any failure or delay in performance due to causes beyond its reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or internet service provider failures.
              </p>
            </div>

            <div className="bg-white/5 border border-orange-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
              <p className="text-white/80 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="text-white/80 space-y-2">
                <p><strong className="text-purple-400">Email:</strong> <a href="mailto:legal@aivi.com" className="text-orange-400 hover:text-orange-300">legal@aivi.com</a></p>
                <p><strong className="text-purple-400">Support:</strong> <a href="mailto:support@aivi.com" className="text-orange-400 hover:text-orange-300">support@aivi.com</a></p>
                <p><strong className="text-purple-400">Mailing Address:</strong><br />
                AIVI LLC<br />
                [Your Company Address]<br />
                [City, State ZIP]<br />
                United States</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/30 rounded-2xl p-8">
              <p className="text-white/70 text-sm leading-relaxed">
                By clicking "I Agree," signing up for AIVI's Services, or using the Services in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, you must immediately discontinue use of the Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
