'use client'
import React, { useState } from 'react';
import { Check, ShieldAlert } from 'lucide-react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Pricing multiplier for 20% savings on Annual billing
  const discount = 0.8;

  const plans = [
    {
      name: 'Verified',
      nameColor: 'text-blue-600',
      monthlyPrice: 8,
      priceDetail: 'per worker / month',
      badgeBg: 'bg-indigo-50',
      badgeText: 'text-blue-600',
      badgeContent: (
        <>
          Best for 1–25 workers or a<br />single site
        </>
      ),
      description: (
        <>
          Verified work records for entry-<br />level workforce assurance.
        </>
      ),
      features: [
        'Time tracking',
        'Timesheets & approvals',
        'Basic reports',
        'Mobile & desktop access',
      ],
      isPopular: false,
      ctaPrimary: 'Start 14-Day Free Trial',
      ctaPrimaryHref: 'https://getzoikotime.com',
      ctaSecondary: 'Subscribe now',
      ctaSecondaryHref: 'https://getzoikotime.com',
      isExternalPrimary: true,
      isExternalSecondary: true,
      showTrialNote: true,
      cardBg: 'bg-white',
      textColor: 'text-slate-800',
      subTextColor: 'text-gray-500',
      borderStyle: 'border-slate-200 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)]',
    },
    {
      name: 'Governed',
      nameColor: 'text-teal-600',
      monthlyPrice: 15,
      priceDetail: 'per worker / month',
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-teal-700',
      badgeContent: 'Best for 26–250 workers',
      description: (
        <>
          Policy-based workforce<br />assurance for teams accountable<br />to payroll, finance and legal.
        </>
      ),
      featuresHeader: 'Everything in Starter',
      features: [
        'Attendance & break controls',
        'Project time tracking',
        'Integrations',
      ],
      isPopular: false,
      ctaPrimary: 'Start 14-Day Free Trial',
      ctaPrimaryHref: 'https://getzoikotime.com',
      ctaSecondary: 'Subscribe now',
      ctaSecondaryHref: 'https://getzoikotime.com',
      isExternalPrimary: true,
      isExternalSecondary: true,
      showTrialNote: true,
      cardBg: 'bg-white',
      textColor: 'text-slate-800',
      subTextColor: 'text-gray-500',
      borderStyle: 'border-slate-200 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)]',
    },
    {
      name: 'Sovereign',
      nameColor: 'text-white',
      monthlyPrice: 25,
      priceDetail: 'per worker / month',
      badgeBg: 'bg-white/10',
      badgeText: 'text-white',
      badgeContent: (
        <>
          For regulated, unionised and<br />multi-country workforces
        </>
      ),
      description: (
        <>
          Jurisdiction-aware workforce<br />governance with advanced<br />controls and audit trails.
        </>
      ),
      featuresHeader: 'Everything in Growth',
      features: [
        'Policy controls',
        'Advanced reporting',
        'Priority support',
      ],
      isPopular: true,
      ctaPrimary: 'Start 14-Day Free Trial',
      ctaPrimaryHref: 'https://getzoikotime.com',
      ctaSecondary: 'Subscribe now',
      ctaSecondaryHref: 'https://getzoikotime.com',
      isExternalPrimary: true,
      isExternalSecondary: true,
      showTrialNote: true,
      cardBg: 'bg-emerald-800',
      textColor: 'text-white',
      priceColor: 'text-emerald-400',
      subTextColor: 'text-white/75',
      featureTextColor: 'text-white/90',
      borderStyle: 'border-emerald-800 shadow-[0px_22px_46px_0px_rgba(12,90,71,0.32)]',
    },
    {
      name: 'Enterprise',
      nameColor: 'text-slate-800',
      isCustomPrice: true,
      priceDetail: 'Contract pricing',
      badgeBg: 'bg-gray-50',
      badgeText: 'text-slate-800',
      badgeContent: (
        <>
          For complex and strategic<br />deployments
        </>
      ),
      description: (
        <>
          Private architecture, integrations<br />and configurable accountability<br />at scale across jurisdictions.
        </>
      ),
      features: [
        'Global deployment',
        'Compliance workflows',
        'SSO & provisioning',
        'Dedicated enterprise support',
      ],
      isPopular: false,
      ctaPrimary: 'Request Enterprise Demo',
      ctaPrimaryHref: '/request-enterprise-demo',
      isExternalPrimary: false,
      showTrialNote: false,
      cardBg: 'bg-white',
      textColor: 'text-slate-800',
      subTextColor: 'text-gray-500',
      borderStyle: 'border-slate-200 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)]',
    },
  ];

  return (
    <section className="w-full bg-slate-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-[951px] mx-auto">
          <span className="text-teal-700 text-base font-semibold uppercase tracking-[2.40px]">
            Flexible Pricing &amp; Packaging
          </span>
          <h2 className="text-3xl sm:text-3xl font-extrabold text-slate-800 leading-10">
            Clear Plans for Teams, Managers, and Enterprise
          </h2>
          <p className="text-base text-gray-500 max-w-[916px] mx-auto leading-6">
            ZoikoTime offers straightforward pricing for growing teams and customizable options for larger organizations.
          </p>
        </div>

        {/* Billing Switcher Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <div className="bg-white p-1 rounded-full shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] border border-gray-300 flex items-center h-14">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 h-11 ${
                billingCycle === 'monthly'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-gray-500 hover:text-slate-800'
              }`}
            >
              {billingCycle === 'monthly' && <Check className="w-4 h-4 text-white" />}
              <span>Monthly</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 h-11 ${
                billingCycle === 'annual'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-gray-500 hover:text-slate-800'
              }`}
            >
              {billingCycle === 'annual' && <Check className="w-4 h-4 text-white" />}
              <span>Annual</span>
              <span className={billingCycle === 'annual' ? 'text-teal-300 font-bold' : 'text-teal-700 font-bold'}>
                · Save 20%
              </span>
            </button>
          </div>
          <span className="text-xs text-gray-500">
            Showing {billingCycle} pricing. Billed {billingCycle}.
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {plans.map((plan, index) => {
            // Compute displayed price based on active billing cycle
            const displayPrice = plan.isCustomPrice
              ? 'Custom'
              : `$${billingCycle === 'annual' ? Math.round((plan.monthlyPrice || 0) * discount) : plan.monthlyPrice}`;

            return (
              <div
                key={index}
                className={`relative w-full min-h-[570px] ${plan.cardBg} rounded-2xl p-6 border ${plan.borderStyle} flex flex-col justify-between transition-all duration-200`}
              >
                {/* Most Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[9px] font-extrabold uppercase tracking-wide px-4 py-1.5 rounded-[20px]">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-6 pt-2">
                  {/* Header Info */}
                  <div className="space-y-2">
                    <h3 className={`text-sm font-extrabold uppercase tracking-wide ${plan.nameColor}`}>
                      {plan.name}
                    </h3>

                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-4xl font-extrabold ${plan.priceColor || plan.textColor}`}>
                        {displayPrice}
                      </span>
                      {plan.priceDetail && (
                        <span className={`text-[12px] ${plan.subTextColor}`}>
                          {plan.priceDetail}
                        </span>
                      )}
                    </div>

                    {!plan.isCustomPrice && (
                      <p className={`text-xs ${plan.subTextColor}`}>
                        {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                      </p>
                    )}
                  </div>

                  {/* Target Audience Badge */}
                  <div className={`rounded-[10px] p-3 text-center ${plan.badgeBg}`}>
                    <span className={`text-xs font-bold block leading-4 ${plan.badgeText}`}>
                      {plan.badgeContent}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-xs text-center leading-5 ${plan.subTextColor}`}>
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    {plan.featuresHeader && (
                      <p className={`text-xs font-bold ${plan.textColor}`}>
                        {plan.featuresHeader}
                      </p>
                    )}
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-3 text-xs">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className={plan.featureTextColor || 'text-gray-700'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions Section */}
                <div className="space-y-3 pt-6">
                  <a
                    href={plan.ctaPrimaryHref}
                    target={plan.isExternalPrimary ? "_blank" : "_self"}
                    rel={plan.isExternalPrimary ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center w-full h-11 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[10px] text-sm font-bold transition-colors"
                  >
                    {plan.ctaPrimary}
                  </a>

                  {plan.ctaSecondary && (
                    <a
                      href={plan.ctaSecondaryHref}
                      target={plan.isExternalSecondary ? "_blank" : "_self"}
                      rel={plan.isExternalSecondary ? "noopener noreferrer" : undefined}
                      className={`flex items-center justify-center w-full h-11 rounded-[10px] text-sm font-bold transition-colors ${
                        plan.isPopular
                          ? 'border border-white/40 text-white hover:bg-white/10'
                          : 'bg-white border border-emerald-100 text-teal-700 hover:bg-emerald-50'
                      }`}
                    >
                      {plan.ctaSecondary}
                    </a>
                  )}

                  {plan.showTrialNote && (
                    <div className={`flex items-center justify-center space-x-1.5 text-xs pt-1 ${plan.subTextColor}`}>
                      <ShieldAlert className="w-3.5 h-3.5 shrink-0 opacity-70" />
                      <span>No credit card required for the trial</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}