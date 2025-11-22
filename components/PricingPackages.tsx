'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Feature {
  id: string;
  name: string;
  freeTrial: boolean;
  paidTrial: boolean;
  basic: boolean;
  premium: boolean;
  price?: number;
}

const features: Feature[] = [
  { id: 'call-sms-3', name: '3-day call/sms sequence', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 50 },
  { id: 'call-sms-12', name: '12-day call/sms sequence', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 100 },
  { id: 'inbound-outbound', name: 'Inbound and Outbound call agent', freeTrial: true, paidTrial: true, basic: true, premium: true },
  { id: 'single-language', name: 'Single Language Agent', freeTrial: true, paidTrial: true, basic: true, premium: true },
  { id: 'multi-language', name: 'Multi-Language Agent', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 150 },
  { id: 'booking-appointment', name: 'Booking Appointment Feature (Human)', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 75 },
  { id: 'callback-request', name: 'Callback Request (AI)', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 60 },
  { id: 'crm-integration', name: 'CRM Integration', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 100 },
  { id: 'daily-report-basic', name: 'Daily Report Basic', freeTrial: false, paidTrial: true, basic: true, premium: true },
  { id: 'daily-report-advanced', name: 'Daily Report Advanced', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 40 },
  { id: 'single-prompt', name: 'Single Prompt', freeTrial: true, paidTrial: true, basic: true, premium: true },
  { id: 'complex-prompt', name: 'Complex Prompt', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 80 },
  { id: 'multi-agent-transfer', name: 'Multi Agent Transfer', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 90 },
  { id: 'single-agent-transfer', name: 'Single Agent Transfer', freeTrial: true, paidTrial: true, basic: true, premium: true },
  { id: 'multi-phone', name: 'Multi-Phone number', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 50 },
  { id: 'single-phone', name: 'Single Phone number', freeTrial: true, paidTrial: true, basic: true, premium: true },
  { id: 'ab-prompt-testing', name: 'A/B Prompt Testing', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 70 },
  { id: 'call-transcript', name: 'Call Transcript/Summary', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 30 },
  { id: 'call-recordings', name: 'Call Recordings', freeTrial: false, paidTrial: false, basic: false, premium: true, price: 40 },
  { id: 'leads-csv', name: 'Leads Generation via CSV', freeTrial: true, paidTrial: true, basic: true, premium: true },
  { id: 'leads-webhook', name: 'Leads Generation via Webhook', freeTrial: false, paidTrial: true, basic: true, premium: true },
  { id: 'website-integration', name: 'Website Integration', freeTrial: false, paidTrial: true, basic: true, premium: true },
];

const basePrices = {
  freeTrial: 0,
  paidTrial: 299,
  basic: 599,
  premium: 999,
};

type PackageType = 'freeTrial' | 'paidTrial' | 'basic' | 'premium';

export default function PricingPackages() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('premium');
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(featureId)) {
        newSet.delete(featureId);
      } else {
        newSet.add(featureId);
      }
      return newSet;
    });
  };

  const calculateTotalPrice = () => {
    let total = basePrices[selectedPackage];
    selectedFeatures.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature?.price) {
        total += feature.price;
      }
    });
    return total;
  };

  const isFeatureAvailable = (feature: Feature): boolean => {
    return feature[selectedPackage];
  };

  const isFeatureIncluded = (feature: Feature): boolean => {
    return feature[selectedPackage] && !feature.price;
  };

  const handlePackageChange = (packageType: PackageType) => {
    setSelectedPackage(packageType);
    // Clear selected features when changing package
    setSelectedFeatures(new Set());
  };

  // Divide features into 3 columns
  const featuresPerColumn = Math.ceil(features.length / 3);
  const column1 = features.slice(0, featuresPerColumn);
  const column2 = features.slice(featuresPerColumn, featuresPerColumn * 2);
  const column3 = features.slice(featuresPerColumn * 2);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-6 py-3 bg-gradient-to-r from-[rgba(14,165,233,0.1)] to-[rgba(20,184,166,0.1)] border-2 border-[rgba(14,165,233,0.2)] rounded-full shadow-[0_4px_20px_rgba(139,92,246,0.1)]">
              <span className="text-sm font-bold bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text uppercase tracking-widest">
                Flexible Pricing
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
            Subscription{' '}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text">
              Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide font-light">
            Choose your base package and customize it with additional features to fit your needs
          </p>
        </div>

        {/* Package Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <PackageCard
            name="Free Trial"
            basePrice={basePrices.freeTrial}
            gradient="from-gray-400 to-gray-500"
            selected={selectedPackage === 'freeTrial'}
            onClick={() => handlePackageChange('freeTrial')}
          />
          <PackageCard
            name="Paid Trial"
            basePrice={basePrices.paidTrial}
            gradient="from-[#98c1d9] to-[#14b8a6]"
            selected={selectedPackage === 'paidTrial'}
            onClick={() => handlePackageChange('paidTrial')}
          />
          <PackageCard
            name="Basic Plan"
            basePrice={basePrices.basic}
            gradient="from-[#14b8a6] to-[#0d9488]"
            selected={selectedPackage === 'basic'}
            onClick={() => handlePackageChange('basic')}
          />
          <PackageCard
            name="Premium Plan"
            basePrice={basePrices.premium}
            gradient="from-[#0ea5e9] to-[#14b8a6]"
            selected={selectedPackage === 'premium'}
            onClick={() => handlePackageChange('premium')}
            popular
          />
        </div>

        {/* Total Price Display */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-white border-2 border-gray-300 rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              Total Monthly Price
            </div>
            <div className="text-5xl font-black bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text">
              ${calculateTotalPrice()}
              <span className="text-2xl text-gray-500">/mo</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Base: ${basePrices[selectedPackage]} + Add-ons: ${calculateTotalPrice() - basePrices[selectedPackage]}
            </div>
          </div>
        </div>

        {/* Features in 3 Columns */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl overflow-hidden mb-8 p-8">
          <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
            Customize Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              {column1.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  feature={feature}
                  isAvailable={isFeatureAvailable(feature)}
                  isIncluded={isFeatureIncluded(feature)}
                  isSelected={selectedFeatures.has(feature.id)}
                  onToggle={() => toggleFeature(feature.id)}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {column2.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  feature={feature}
                  isAvailable={isFeatureAvailable(feature)}
                  isIncluded={isFeatureIncluded(feature)}
                  isSelected={selectedFeatures.has(feature.id)}
                  onToggle={() => toggleFeature(feature.id)}
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              {column3.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  feature={feature}
                  isAvailable={isFeatureAvailable(feature)}
                  isIncluded={isFeatureIncluded(feature)}
                  isSelected={selectedFeatures.has(feature.id)}
                  onToggle={() => toggleFeature(feature.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Single CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block py-4 px-12 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-white font-black rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl uppercase tracking-wider text-lg"
          >
            Get Started with My Custom Plan
          </button>
        </div>
      </div>
    </section>
  );
}

interface PackageCardProps {
  name: string;
  basePrice: number;
  gradient: string;
  selected: boolean;
  onClick: () => void;
  popular?: boolean;
}

function PackageCard({ name, basePrice, gradient, selected, onClick, popular }: PackageCardProps) {
  // Determine ring color class based on gradient
  const getRingColorClass = () => {
    if (gradient.includes('gray')) return 'ring-gray-500';
    if (gradient.includes('98c1d9')) return 'ring-[#98c1d9]';
    if (gradient.includes('14b8a6') && gradient.includes('0d9488')) return 'ring-[#14b8a6]';
    return 'ring-[#0ea5e9]';
  };

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 mb-6 ${
        selected ? 'transform scale-105' : 'hover:scale-102'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div
            className="px-5 py-2 text-sm font-black rounded-full uppercase tracking-wider shadow-lg text-white whitespace-nowrap"
            style={{ backgroundImage: `linear-gradient(90deg, #0ea5e9, #14b8a6)` }}
          >
            Popular
          </div>
        </div>
      )}
      <div
        className={`bg-gradient-to-r ${gradient} p-8 rounded-2xl text-white text-center shadow-lg transition-all ${
          selected ? `ring-4 ${getRingColorClass()} ring-offset-2 shadow-2xl` : 'hover:shadow-xl'
        }`}
      >
        <h3 className="text-xl font-black mb-6 min-h-[3rem] flex items-center justify-center">{name}</h3>
        <div className="text-4xl font-black">
          ${basePrice}
          <span className="text-lg font-normal opacity-90">/mo</span>
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  feature: Feature;
  isAvailable: boolean;
  isIncluded: boolean;
  isSelected: boolean;
  onToggle: () => void;
}

function FeatureItem({ feature, isAvailable, isIncluded, isSelected, onToggle }: FeatureItemProps) {
  const canToggle = isAvailable && !isIncluded;

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
        isAvailable ? 'border-gray-200 hover:border-gray-300 bg-white' : 'border-gray-100 bg-gray-50'
      }`}
    >
      <div className="flex-1 mr-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-sm font-medium ${isAvailable ? 'text-gray-900' : 'text-gray-400'}`}>
            {feature.name}
          </span>
          {feature.price && isAvailable && (
            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              +${feature.price}/mo
            </span>
          )}
          {isIncluded && (
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
              Included
            </span>
          )}
          {!isAvailable && (
            <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
              N/A
            </span>
          )}
        </div>
      </div>
      <div className="flex-shrink-0">
        {!isAvailable ? (
          <div className="w-6 h-6 rounded border-2 border-gray-300 bg-gray-200"></div>
        ) : isIncluded ? (
          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
          </div>
        ) : (
          <label className="cursor-pointer flex items-center justify-center">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={onToggle}
              disabled={!canToggle}
              className="sr-only"
            />
            <div
              className={`w-6 h-6 rounded border-2 transition-all flex items-center justify-center ${
                isSelected
                  ? 'bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] border-[#0ea5e9] shadow-md'
                  : 'border-gray-300 hover:border-[#0ea5e9] bg-white'
              } ${!canToggle ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            >
              {isSelected && (
                <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
              )}
            </div>
          </label>
        )}
      </div>
    </div>
  );
}
