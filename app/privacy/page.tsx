import TronHeader from '@/components/TronHeader';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | AIVI',
  description: 'AIVI Privacy Policy - How we collect, use, and protect your data',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <TronHeader />
      <Navigation />
      
      <section className="relative py-32 px-6 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Privacy <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">Policy</span>
            </h1>
            <p className="text-white/60 text-lg">Last Updated: November 10, 2025</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-white/80 leading-relaxed">
                AIVI LLC ("AIVI," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered communication automation services, including our voice, SMS, email, and document processing platforms.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">1.1 Information You Provide</h3>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Account credentials and authentication information</li>
                <li>Business information and company details</li>
                <li>Payment and billing information</li>
                <li>Communications and correspondence with us</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">1.2 Information Collected Through Our Services</h3>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>Call recordings and transcripts (with appropriate consent)</li>
                <li>SMS and email message content and metadata</li>
                <li>Document uploads and processed data (OCR/AI extracted information)</li>
                <li>Customer interaction data and conversation analytics</li>
                <li>Lead data, campaign performance metrics, and conversion statistics</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">1.3 Automatically Collected Information</h3>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>IP addresses and device identifiers</li>
                <li>Browser type, operating system, and device information</li>
                <li>Usage data, including pages visited and features used</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Performance and error logs</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-white/80 mb-4">We use the collected information for the following purposes:</p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>Providing, maintaining, and improving our AI communication services</li>
                <li>Processing and delivering voice calls, SMS messages, and email campaigns</li>
                <li>Analyzing documents using OCR and AI language models</li>
                <li>Training and improving our AI models and algorithms</li>
                <li>Generating analytics, insights, and performance reports</li>
                <li>Processing payments and managing subscriptions</li>
                <li>Providing customer support and technical assistance</li>
                <li>Sending service updates, security alerts, and administrative messages</li>
                <li>Detecting, preventing, and addressing fraud, security issues, and technical problems</li>
                <li>Complying with legal obligations and regulatory requirements</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services and Integrations</h2>
              <p className="text-white/80 mb-4">AIVI integrates with and uses the following third-party services to deliver our platform:</p>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">3.1 Twilio (Voice & SMS)</h3>
              <p className="text-white/80">
                We use Twilio for voice calling and SMS messaging services. Data processed through Twilio is subject to Twilio's Privacy Policy and security standards. Twilio is SOC 2 Type II certified and GDPR compliant.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">3.2 Retell AI (Voice AI)</h3>
              <p className="text-white/80">
                Our AI voice agent capabilities are powered by Retell AI. Voice conversations may be processed through Retell's infrastructure for real-time AI responses and transcription services.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">3.3 N8N (Workflow Automation)</h3>
              <p className="text-white/80">
                We utilize N8N for workflow automation and integration orchestration. Data flows between integrated systems are processed through our N8N infrastructure with encryption in transit.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">3.4 OpenAI & Other AI Providers</h3>
              <p className="text-white/80">
                We may use OpenAI and other AI service providers for natural language processing, document analysis, and conversation intelligence. Data sent to these services is processed according to their respective privacy policies and data processing agreements.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">3.5 CRM and Marketing Integrations</h3>
              <p className="text-white/80">
                AIVI integrates with various CRM systems (Salesforce, HubSpot, etc.) and marketing platforms. Data synchronization with these systems is governed by your agreements with those providers.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security and Protection</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">4.1 Security Measures</h3>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>End-to-end encryption for data in transit using TLS 1.3</li>
                <li>Encryption at rest for stored data</li>
                <li>SOC 2 Type II certified infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication (MFA) for account access</li>
                <li>Role-based access control (RBAC) and principle of least privilege</li>
                <li>Automated threat detection and incident response procedures</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">4.2 PII Handling</h3>
              <p className="text-white/80">
                Personally Identifiable Information (PII) is handled with extreme care. By default, PII is only stored in transit and is not retained in our systems longer than necessary for processing. Sensitive data such as Social Security Numbers, financial account numbers, and health information are processed with additional security controls.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">4.3 HIPAA Compliance</h3>
              <p className="text-white/80">
                For healthcare clients, AIVI offers HIPAA-compliant services with appropriate Business Associate Agreements (BAA). Protected Health Information (PHI) is handled in accordance with HIPAA regulations and stored in segregated, secure environments.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention and Deletion</h2>
              <ul className="text-white/80 space-y-3 list-disc pl-6">
                <li><strong>Call Recordings:</strong> Retained for 90 days unless otherwise specified or required by law</li>
                <li><strong>Message Content:</strong> SMS and email content retained for 180 days for analytics and compliance purposes</li>
                <li><strong>Documents:</strong> Uploaded documents processed and deleted after extraction unless storage is explicitly requested</li>
                <li><strong>Analytics Data:</strong> Aggregated and anonymized analytics retained indefinitely for service improvement</li>
                <li><strong>Account Data:</strong> Retained for the duration of the business relationship plus applicable retention periods for legal and tax purposes</li>
                <li><strong>Deletion Requests:</strong> Users may request deletion of their data by contacting privacy@aivi.com</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-white/80 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (Twilio, Retell, N8N, cloud hosting providers)</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, property, or that of our users</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize data sharing</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
              <p className="text-white/80 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications and certain data processing activities</li>
                <li><strong>Restrict Processing:</strong> Request restriction of processing under certain circumstances</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              </ul>
              <p className="text-white/80 mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@aivi.com" className="text-purple-400 hover:text-purple-300">privacy@aivi.com</a>.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-white/80">
                AIVI operates globally and may transfer data to countries outside your jurisdiction. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) for transfers outside the EEA, and compliance with applicable data protection laws.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-white/80 mb-4">We use cookies and similar technologies to:</p>
              <ul className="text-white/80 space-y-2 list-disc pl-6">
                <li>Maintain user sessions and authentication</li>
                <li>Remember user preferences and settings</li>
                <li>Analyze usage patterns and service performance</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p className="text-white/80 mt-4">
                You can control cookies through your browser settings, but disabling cookies may limit functionality.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p className="text-white/80">
                AIVI's services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected information from a child without parental consent, we will delete that information promptly.
              </p>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-white/80">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the revised policy.
              </p>
            </div>

            <div className="bg-white/5 border border-orange-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-white/80 space-y-2">
                <p><strong className="text-purple-400">Email:</strong> <a href="mailto:privacy@aivi.com" className="text-orange-400 hover:text-orange-300">privacy@aivi.com</a></p>
                <p><strong className="text-purple-400">Data Protection Officer:</strong> <a href="mailto:dpo@aivi.com" className="text-orange-400 hover:text-orange-300">dpo@aivi.com</a></p>
                <p><strong className="text-purple-400">Mailing Address:</strong><br />
                AIVI LLC<br />
                [Your Company Address]<br />
                [City, State ZIP]<br />
                United States</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Compliance Certifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>GDPR Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>CCPA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>PCI DSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
