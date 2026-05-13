'use client';

import { useState, FormEvent } from 'react';

interface Props {
  companyName: string;
  webhookUrl: string;
  webhookToken: string | null;
  primaryColor: string;
}

export default function TCPAConsentForm({ companyName, webhookUrl, webhookToken, primaryColor }: Props) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    company_name: '',
  });
  const [transactionalConsent, setTransactionalConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid =
    formData.first_name.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    transactionalConsent &&
    marketingConsent;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const url = webhookToken
        ? `${webhookUrl}?token=${webhookToken}`
        : webhookUrl;

      const payload = {
        ...formData,
        tcpa_transactional_consent: transactionalConsent,
        tcpa_marketing_consent: marketingConsent,
        tcpa_consent_timestamp: new Date().toISOString(),
        source: 'landing_page',
        tags: ['landing-page-lead'],
      };

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Submission failed: ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: `${primaryColor}15` }}
        >
          <svg className="w-8 h-8" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Thanks! We&apos;ll be in touch shortly.</h3>
        <p className="text-gray-600">Expect to hear from us within 60 seconds.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              required
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:border-transparent outline-none transition-all"
              style={{ '--tw-ring-color': primaryColor } as React.CSSProperties}
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:border-transparent outline-none transition-all"
              placeholder="Smith"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:border-transparent outline-none transition-all"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:border-transparent outline-none transition-all"
            placeholder="john@company.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            value={formData.company_name}
            onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:border-transparent outline-none transition-all"
            placeholder="Acme Inc."
          />
        </div>

        {/* TCPA Consent Checkboxes */}
        <div className="space-y-4 mb-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={transactionalConsent}
              onChange={(e) => setTransactionalConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 focus:ring-2"
              style={{ accentColor: primaryColor }}
            />
            <span className="text-xs text-gray-500 leading-relaxed">
              By checking this box, I consent to receive non-marketing text messages from{' '}
              <strong>{companyName}</strong> related to account notification, confirmation and reminders
              for consultation calls and updates. Message frequency varies, message &amp; data rates may
              apply. Text HELP for assistance, reply STOP to opt out.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 focus:ring-2"
              style={{ accentColor: primaryColor }}
            />
            <span className="text-xs text-gray-500 leading-relaxed">
              By checking this box, I consent to receive occasional marketing communications from{' '}
              <strong>{companyName}</strong>. Message frequency varies (2 times a month). Message &amp;
              data rates may apply. Text HELP for assistance. You can reply STOP to opt-out at any time.
            </span>
          </label>
        </div>

        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          disabled={!isValid || submitting}
          className="w-full py-3.5 rounded-xl text-white font-semibold text-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: primaryColor }}
        >
          {submitting ? 'Submitting...' : 'See It In Action'}
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          We respect your privacy. Your data is secured and never shared.
        </p>
      </div>
    </form>
  );
}
