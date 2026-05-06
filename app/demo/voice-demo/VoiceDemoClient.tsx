'use client';

import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  vehicleYear: string;
  state: string;
  vehicleMake: string;
  creditTier: string;
  addons: string[];
  policyExpires: string;
  notes: string;
  callbackPin: string;
};

const EMPTY_FORM: FormState = {
  fullName: '',
  email: '',
  phone: '',
  vehicleYear: '',
  state: '',
  vehicleMake: '',
  creditTier: '',
  addons: [],
  policyExpires: '',
  notes: '',
  callbackPin: '',
};

const STATE_OPTIONS = [
  { value: 'CA', label: 'California' },
  { value: 'TX', label: 'Texas' },
  { value: 'FL', label: 'Florida' },
  { value: 'NY', label: 'New York' },
  { value: 'IL', label: 'Illinois' },
];

const VEHICLE_MAKES = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Tesla', 'Other'];

const CREDIT_TIERS = ['Excellent', 'Good', 'Fair'];

const ADDONS = [
  { value: 'roadside', label: 'Roadside Assistance' },
  { value: 'rental', label: 'Rental Car Reimbursement' },
  { value: 'glass', label: 'Glass Coverage' },
];

const WIDGET_URL =
  process.env.NEXT_PUBLIC_AIVI_WIDGET_URL ??
  'https://pre-prod.aivi.io/widget/loader.js';
const WIDGET_KEY =
  process.env.NEXT_PUBLIC_AIVI_WIDGET_KEY ?? 'n3tetoirvlgr2zabqret75zs';

export default function VoiceDemoClient() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [makeOpen, setMakeOpen] = useState(false);
  const comboboxRef = useRef<HTMLDivElement>(null);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleAddon(value: string) {
    setForm((prev) => ({
      ...prev,
      addons: prev.addons.includes(value)
        ? prev.addons.filter((v) => v !== value)
        : [...prev.addons, value],
    }));
  }

  useEffect(() => {
    if (!makeOpen) return;
    function onDocClick(e: MouseEvent) {
      if (
        comboboxRef.current &&
        !comboboxRef.current.contains(e.target as Node)
      ) {
        setMakeOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMakeOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [makeOpen]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.vehicleMake) return;
    setSubmitted(true);
  }

  const inputBase =
    'w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#0ea5e9] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 transition-colors';
  const labelBase = 'block text-sm font-medium text-neutral-800 mb-1.5';

  return (
    <>
      <Script
        src={WIDGET_URL}
        data-widget-key={WIDGET_KEY}
        data-cobrowse="true"
        strategy="afterInteractive"
        async
      />

      <main className="min-h-screen bg-[#E8E5E0] text-neutral-900">
        <header className="border-b border-neutral-200/80 bg-white/60 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <Image
                src="/AIVI.svg"
                alt="AIVI"
                width={88}
                height={28}
                priority
              />
              <span className="hidden text-sm font-medium text-neutral-500 sm:inline">
                Auto Insurance
              </span>
            </div>
            <div className="text-xs text-neutral-500">
              Secured · 30-second quote
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
          {!submitted ? (
            <>
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  Get an Auto Insurance Quote in 30 Seconds
                </h1>
                <p className="mt-3 text-[15px] text-neutral-600 sm:text-base">
                  Drivers are saving an average of $612/year. Tell us a bit
                  about you and we&apos;ll call back within 5 minutes.
                </p>
              </div>

              <form
                onSubmit={onSubmit}
                noValidate={false}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelBase}>
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.fullName}
                      onChange={(e) => setField('fullName', e.target.value)}
                      className={inputBase}
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelBase}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) => setField('email', e.target.value)}
                      className={inputBase}
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelBase}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                      className={inputBase}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicleYear" className={labelBase}>
                      Vehicle Year
                    </label>
                    <input
                      id="vehicleYear"
                      name="vehicleYear"
                      type="number"
                      min={1990}
                      max={2026}
                      required
                      value={form.vehicleYear}
                      onChange={(e) => setField('vehicleYear', e.target.value)}
                      className={inputBase}
                      placeholder="2021"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className={labelBase}>
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      value={form.state}
                      onChange={(e) => setField('state', e.target.value)}
                      className={inputBase}
                    >
                      <option value="">Select a state</option>
                      {STATE_OPTIONS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div ref={comboboxRef} className="relative">
                    <span
                      id="vehicle-make-label"
                      className={labelBase}
                    >
                      Vehicle Make
                    </span>
                    <div
                      role="combobox"
                      tabIndex={0}
                      aria-expanded={makeOpen}
                      aria-controls="vehicle-make-listbox"
                      aria-haspopup="listbox"
                      aria-labelledby="vehicle-make-label"
                      onClick={() => setMakeOpen((o) => !o)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setMakeOpen((o) => !o);
                        }
                      }}
                      className={`${inputBase} flex cursor-pointer items-center justify-between`}
                    >
                      <span
                        className={
                          form.vehicleMake ? 'text-neutral-900' : 'text-neutral-400'
                        }
                      >
                        {form.vehicleMake || 'Select a make'}
                      </span>
                      <svg
                        className={`h-4 w-4 text-neutral-500 transition-transform ${makeOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {makeOpen && (
                      <ul
                        id="vehicle-make-listbox"
                        role="listbox"
                        aria-labelledby="vehicle-make-label"
                        className="absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-auto rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
                      >
                        {VEHICLE_MAKES.map((make) => {
                          const selected = form.vehicleMake === make;
                          return (
                            <li
                              key={make}
                              role="option"
                              aria-selected={selected}
                              onClick={() => {
                                setField('vehicleMake', make);
                                setMakeOpen(false);
                              }}
                              className={`cursor-pointer px-4 py-2 text-[15px] hover:bg-neutral-100 ${
                                selected
                                  ? 'bg-[#0ea5e9]/10 font-medium text-[#0ea5e9]'
                                  : 'text-neutral-800'
                              }`}
                            >
                              {make}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  <fieldset className="md:col-span-2">
                    <legend className={labelBase}>Credit Tier</legend>
                    <div className="grid grid-cols-3 gap-3">
                      {CREDIT_TIERS.map((tier) => {
                        const id = `creditTier-${tier.toLowerCase()}`;
                        const checked = form.creditTier === tier;
                        return (
                          <div key={tier}>
                            <input
                              id={id}
                              name="creditTier"
                              type="radio"
                              required
                              value={tier}
                              checked={checked}
                              onChange={(e) =>
                                setField('creditTier', e.target.value)
                              }
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={id}
                              className={`flex cursor-pointer items-center justify-center rounded-lg border px-4 py-3 text-[15px] font-medium transition-colors ${
                                checked
                                  ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 text-[#0ea5e9]'
                                  : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400'
                              }`}
                            >
                              {tier}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </fieldset>

                  <fieldset className="md:col-span-2">
                    <legend className={labelBase}>Coverage Add-ons</legend>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {ADDONS.map((a) => {
                        const id = `addon-${a.value}`;
                        const checked = form.addons.includes(a.value);
                        return (
                          <div key={a.value} className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2.5">
                            <input
                              id={id}
                              type="checkbox"
                              name="addons"
                              value={a.value}
                              checked={checked}
                              onChange={() => toggleAddon(a.value)}
                              className="h-4 w-4 rounded border-neutral-300 text-[#0ea5e9] focus:ring-[#0ea5e9]"
                            />
                            <label
                              htmlFor={id}
                              className="cursor-pointer text-[14px] text-neutral-800"
                            >
                              {a.label}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="policyExpires" className={labelBase}>
                      Current Policy Expires
                    </label>
                    <input
                      id="policyExpires"
                      name="policyExpires"
                      type="date"
                      required
                      value={form.policyExpires}
                      onChange={(e) =>
                        setField('policyExpires', e.target.value)
                      }
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label htmlFor="callbackPin" className={labelBase}>
                      Secret PIN for Callback
                    </label>
                    <input
                      id="callbackPin"
                      name="callbackPin"
                      type="password"
                      autoComplete="new-password"
                      value={form.callbackPin}
                      onChange={(e) => setField('callbackPin', e.target.value)}
                      className={inputBase}
                      placeholder="••••"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="notes" className={labelBase}>
                      Additional Notes <span className="font-normal text-neutral-400">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setField('notes', e.target.value)}
                      className={inputBase}
                      placeholder="Anything else we should know about your vehicle or driving history?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 w-full rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] px-6 py-4 text-[16px] font-semibold text-white shadow-md transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/40"
                >
                  Get My Quote
                </button>
                <p className="mt-3 text-center text-xs text-neutral-500">
                  By submitting, you agree to be contacted by AIVI Auto. No spam, ever.
                </p>
              </form>
            </>
          ) : (
            <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6]">
                <svg
                  className="h-7 w-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Thanks &mdash; we&apos;ll call you within 5 minutes.
              </h2>
              <p className="mt-2 text-[15px] text-neutral-600">
                A licensed AIVI Auto agent is reviewing your details and will
                reach out shortly at the number you provided.
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
