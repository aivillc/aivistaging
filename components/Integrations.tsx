export default function Integrations() {
  return (
    <section id="integrations" className="relative py-24 px-6 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Seamless{' '}
            <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
              Integrations
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Connect with your existing tools and workflows. No complex setup required.
          </p>
        </div>

        {/* CRM Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            CRM Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IntegrationCard name="HubSpot" category="CRM" />
            <IntegrationCard name="Salesforce" category="CRM" />
            <IntegrationCard name="Zoho CRM" category="CRM" />
            <IntegrationCard name="Pipedrive" category="CRM" />
            <IntegrationCard name="Monday.com" category="CRM" />
            <IntegrationCard name="Microsoft Dynamics" category="CRM" />
            <IntegrationCard name="Copper" category="CRM" />
            <IntegrationCard name="Custom CRM" category="API" />
          </div>
        </div>

        {/* Automation & Workflow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Automation & Workflows
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IntegrationCard name="n8n" category="Workflow" highlight />
            <IntegrationCard name="Zapier" category="Automation" />
            <IntegrationCard name="Make (Integromat)" category="Automation" />
            <IntegrationCard name="Webhooks" category="API" />
          </div>
        </div>

        {/* Communication Channels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Communication Channels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IntegrationCard name="Twilio" category="Voice & SMS" />
            <IntegrationCard name="SendGrid" category="Email" />
            <IntegrationCard name="AWS SES" category="Email" />
            <IntegrationCard name="Mailgun" category="Email" />
          </div>
        </div>

        {/* Financial & Data */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Financial & Data Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IntegrationCard name="Credit Bureaus" category="Credit Pulls" />
            <IntegrationCard name="Plaid" category="Banking" />
            <IntegrationCard name="Stripe" category="Payments" />
            <IntegrationCard name="DocuSign" category="Documents" />
          </div>
        </div>

        {/* Key Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="group relative text-center p-8 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-purple-500/50 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-700 rounded-l-2xl" />
            <h4 className="text-xl font-black text-white mb-3">Real-Time Sync</h4>
            <p className="text-white/60">
              Bi-directional data sync keeps your CRM and AIVI always in sync, triggering actions in real-time.
            </p>
          </div>

          <div className="group relative text-center p-8 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-orange-500/50 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-700 rounded-l-2xl" />
            <h4 className="text-xl font-black text-white mb-3">Secure PII Handling</h4>
            <p className="text-white/60">
              All personally identifiable information is encrypted in transit with zero storage, ensuring compliance.
            </p>
          </div>

          <div className="group relative text-center p-8 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-purple-500/50 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-700 rounded-l-2xl" />
            <h4 className="text-xl font-black text-white mb-3">Custom Field Mapping</h4>
            <p className="text-white/60">
              Map any custom fields from your CRM to AIVI workflows with our flexible field mapping system.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-12 bg-gradient-to-br from-white/5 to-white/10 border-2 border-purple-500/30 rounded-3xl hover:border-purple-500/50 transition-all">
          <h3 className="text-3xl font-black text-white mb-4">
            Don't See Your Integration?
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            We build custom integrations for our managed service clients. Our API-first architecture can connect to virtually any system.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-lg transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider">
            Request Custom Integration
          </button>
        </div>
      </div>
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
