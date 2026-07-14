"use client"
import { useState } from 'react';
import React from 'react';
import PricingTiers from './pricingplans';
type FeatureRowProps = {
  label: string;
  sublabel?: string;
  essential: React.ReactNode;
  professional: React.ReactNode;
  enterprise: React.ReactNode;
  sovereign: React.ReactNode;
  isDarkBg?: boolean;
};

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
// Component for rendering rows cleanly with uniform structural grid widths
const FeatureRow = ({ label, sublabel, essential, professional, enterprise, sovereign, isDarkBg }: FeatureRowProps) => (
  <div className={`grid grid-cols-12 items-stretch border-b border-slate-200 dark:border-slate-800 ${isDarkBg ? 'bg-slate-50 dark:bg-slate-900/40' : 'bg-white dark:bg-slate-900'}`}>
    <div className="col-span-5 px-6 py-3.5 flex flex-col justify-center min-h-[48px]">
      <span className="text-slate-900 dark:text-white text-sm font-semibold ">{label}</span>
      {sublabel && <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold  mt-0.5">{sublabel}</span>}
    </div>
    <div className="col-span-2 px-4 flex items-center justify-center text-center text-sm font-semibold ">{essential}</div>
    <div className="col-span-2 px-4 flex items-center justify-center text-center text-sm font-semibold  bg-teal-600/[0.03] dark:bg-teal-500/[0.02] border-x border-slate-200/60 dark:border-slate-800/60">{professional}</div>
    <div className="col-span-1.5 col-start-10 px-4 flex items-center justify-center text-center text-sm font-semibold ">{enterprise}</div>
    <div className="col-span-1.5 col-start-11.5 px-4 flex items-center justify-center text-center text-sm font-semibold ">{sovereign}</div>
  </div>
);
interface UseCaseProfile {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  priceRange: string;
  recommendedPlan: string;
  roiTitle: string;
  metrics: {
    label: string;
    value: string;
  }[];
}
export default function Pricing() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'How does pricing scale with workforce size?',
      answer: 'ZoikoTime scales using built-in tiered volume efficiency. As your active workforce count passes predefined organizational thresholds, your per-user cost decreases automatically without requiring complex contract amendments.'
    },
    {
      id: 2,
      question: 'Can we customise features for our organisation?',
      answer: 'Yes. While standard functionality serves broad deployment requirements on Essential and Pro plans, Enterprise and Sovereign tiers offer fully tailored custom features, targeted workflow configurations, and modular API structures.'
    },
    {
      id: 3,
      question: 'What is included in Enterprise pricing?',
      answer: 'Enterprise pricing unlocks all advanced analytics tools, automated compliance auditing layers, platform integrations, standard onboarding, and dedicated account support teams with custom enterprise-grade SLAs.'
    },
    {
      id: 4,
      question: 'How fast is onboarding and initial deployment?',
      answer: 'Standard setups go live in days using our guided documentation. Enterprise configurations requiring deep third-party payroll tool or core system custom infrastructure mappings typically deploy within 2 to 4 weeks.'
    },
    {
      id: 5,
      question: 'Is there a minimum commitment period?',
      answer: 'Standard tiers offer flexible month-to-month arrangements or annual commits with deeper cost reductions. Enterprise and Sovereign commitments are customized to your organization’s multi-year procurement requirements.'
    },
    {
      id: 6,
      question: 'Why is Enterprise pricing custom rather than listed?',
      answer: 'Enterprise integrations feature varying architectures, unique compliance burdens, single-tenant hosting prerequisites, or personalized SLA commitments that must be modeled on an individual organizational basis.'
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };
    const useCases: UseCaseProfile[] = [
    {
      id: 'distributed',
      tabLabel: 'Distributed Teams',
      title: 'Distributed & Remote Teams',
      description: 'Verified session tracking, location validation, and centralised workforce command visibility — providing the assurance infrastructure that distributed operations lack without ZoikoTime.',
      priceRange: '$8–£18 / user / month',
      recommendedPlan: 'Recommended: Professional Plan',
      roiTitle: '💰 Typical ROI Profile — 500 Distributed Workers',
      metrics: [
        { label: 'Monthly leakage identified', value: '$56K' },
        { label: 'Annual recoverable value', value: '$672K' },
        { label: 'ZoikoTime annual cost (Pro)', value: '~$108K' },
        { label: 'First-year net return', value: '~$564K' },
        { label: 'Payback period', value: '< 8 weeks' }
      ]
    },
    {
      id: 'contractors',
      tabLabel: 'Contractors',
      title: 'Contractor Verification & Auditing',
      description: 'Ensure delivery proof, manage statement-of-work compliance, and safeguard against dual-employment leakage across specialized technical vendor cohorts.',
      priceRange: 'Custom / Tier-based',
      recommendedPlan: 'Recommended: Enterprise Plan',
      roiTitle: '💰 Typical ROI Profile — 150 Contractors',
      metrics: [
        { label: 'Monthly leakage identified', value: '$32K' },
        { label: 'Annual recoverable value', value: '$384K' },
        { label: 'ZoikoTime annual cost', value: 'Custom' },
        { label: 'First-year net return', value: '~$310K' },
        { label: 'Payback period', value: '< 6 weeks' }
      ]
    },
    {
      id: 'regulated',
      tabLabel: 'Regulated Industries',
      title: 'Strict Jurisdiction Compliance',
      description: 'Advanced data sovereignty matching local financial regulations, audit-ready data tracking layers, and tamper-resistant chain of custody systems.',
      priceRange: 'Custom Sovereign Rates',
      recommendedPlan: 'Recommended: Sovereign Plan',
      roiTitle: '💰 Typical ROI Profile — Regulated Enterprise',
      metrics: [
        { label: 'Compliance penalties avoided', value: '$1.2M' },
        { label: 'Annual recoverable value', value: '$890K' },
        { label: 'ZoikoTime annual cost', value: 'Custom' },
        { label: 'First-year net return', value: 'High Impact' },
        { label: 'Payback period', value: 'Immediate' }
      ]
    },
    {
      id: 'client-billing',
      tabLabel: 'Client Billing',
      title: 'Precision Agency Cost-Recovery',
      description: 'Export verifiable evidence metrics to validate billable resource hours directly to your end clients, strengthening retainers and trust parameters.',
      priceRange: '$8–$18 / user / month',
      recommendedPlan: 'Recommended: Professional Plan',
      roiTitle: '💰 Typical ROI Profile — Active Agencies',
      metrics: [
        { label: 'Leakage recovery margin', value: '+14%' },
        { label: 'Annual recoverable value', value: '$240K' },
        { label: 'ZoikoTime annual cost', value: '~$48K' },
        { label: 'First-year net return', value: '~$192K' },
        { label: 'Payback period', value: '< 4 weeks' }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>('distributed');
  const activeData = useCases.find((uc) => uc.id === activeTab) || useCases[0];
    const check = <span className="text-teal-600 dark:text-teal-400 font-bold text-base">✓</span>;
  const checkFull = <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">✓ Full</span>;
  const cross = <span className="text-slate-300 dark:text-slate-700 font-normal text-sm">✗</span>;
  const basic = <span className="text-amber-600 dark:text-amber-500 font-semibold text-sm">Basic</span>;
  const standard = <span className="text-amber-600 dark:text-amber-500 font-semibold text-sm">Standard</span>;

     const [employees, setEmployees] = useState<number>(500);
      const [hourlyCost, setHourlyCost] = useState<number>(20);
      const [leakageRate, setLeakageRate] = useState<number>(8);
    
      // Financial formulas tracking custom configurations
      const averageHoursPerMonth = 160; 
      const totalMonthlyPayroll = employees * hourlyCost * averageHoursPerMonth;
      const monthlyLeakage = Math.round(totalMonthlyPayroll * (leakageRate / 100));
      const annualRecoverable = Math.round(monthlyLeakage * 12);
      
      // Custom baseline parameters scaling alongside pricing units
      const estimatedAnnualCost = employees * 18 * 12; 
      const estimatedFirstYearRoi = estimatedAnnualCost > 0 
        ? Math.round((annualRecoverable / estimatedAnnualCost) * 100) 
        : 0;
      
      const estimatedPaybackWeeks = estimatedAnnualCost > 0 && monthlyLeakage > 0
        ? ((estimatedAnnualCost / monthlyLeakage) * 4.33).toFixed(1)
        : "0.0";
    
      // Formatter for values scaling efficiently up to millions
      const formatCurrency = (val: number) => {
        if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
        if (val >= 1000) return `$${Math.round(val / 1000)}K`;
        return `$${val}`;
      };
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans antialiased selection:bg-teal-500 selection:text-white transition-colors duration-300">
      
      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-gradient-to-br from-emerald-50/60 via-slate-50 via-40% to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 rounded-3xl my-6 border border-slate-200/50 dark:border-slate-800/50">
        <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            The Cost of Workforce Uncertainty Is{' '}
            <span className="text-teal-600 dark:text-teal-400 block sm:inline">
              Higher Than You Think
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            ZoikoTime pricing is designed to scale with your organisation — while delivering measurable financial, operational, and compliance impact from week one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-8 rounded-md shadow-[0px_4px_18px_0px_rgba(0,157,140,0.30)] transition-all text-base">
              Calculate Your ROI
            </button>
            <button className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-3.5 px-8 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm transition-all text-base">
              View Pricing Plans
            </button>
          </div>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
            Personalised Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            See Pricing Based on Your Organisation
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Select your team size, workforce type, and industry — the recommended plan and ROI estimate update instantly.
          </p>
        </div>

        {/* Interactive Profile Card */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-50 dark:bg-slate-950 p-6 border-b border-slate-200 dark:border-slate-800 text-center">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Organisation Profile
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Your selections dynamically update the recommended tier and estimated ROI below.
            </p>
          </div>

          {/* Matrix Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 p-6 gap-y-6 md:gap-y-0">
            
            {/* Column 1: Team Size */}
            <div className="space-y-4 md:pr-4">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400 block">
                Team Size
              </span>
              <div className="flex flex-wrap gap-2">
                {['1–50', '50–500', '500–5,000', '5,000+'].map((size) => {
                  const isActive = size === '50–500';
                  return (
                    <button
                      key={size}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                        isActive
                          ? 'bg-emerald-50 text-teal-700 border-teal-600 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-400'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-600'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Workforce Type */}
            <div className="space-y-4 md:px-6 pt-6 md:pt-0">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400 block">
                Workforce Type
              </span>
              <div className="flex flex-wrap gap-2">
                {['Employees', 'Contractors', 'Mixed'].map((type) => {
                  const isActive = type === 'Employees';
                  return (
                    <button
                      key={type}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                        isActive
                          ? 'bg-emerald-50 text-teal-700 border-teal-600 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-400'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-600'
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Industry */}
            <div className="space-y-4 md:pl-6 pt-6 md:pt-0">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400 block">
                Industry
              </span>
              <div className="flex flex-wrap gap-2">
                {['General', 'Regulated', 'Client-Billable'].map((industry) => {
                  const isActive = industry === 'General';
                  return (
                    <button
                      key={industry}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                        isActive
                          ? 'bg-emerald-50 text-teal-700 border-teal-600 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-400'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-600'
                      }`}
                    >
                      {industry}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Dynamic Logic Readout Footer */}
          <div className="border-t border-slate-200 dark:border-slate-800 p-8 bg-slate-50/50 dark:bg-slate-950/30 flex flex-col items-center text-center space-y-4">
            <p className="text-slate-900 dark:text-slate-200 text-sm sm:text-base font-semibold max-w-3xl leading-relaxed">
              You are likely to benefit most from the{' '}
              <span className="text-teal-600 dark:text-teal-400 font-bold underline decoration-2 decoration-teal-600/30">
                Professional Plan
              </span>{' '}
              — ideal for mid-size employee workforces needing performance intelligence and anomaly detection.
            </p>
            
            <div className="inline-block bg-emerald-50 dark:bg-teal-950/40 border border-teal-600/20 px-5 py-2 rounded-full shadow-sm">
              <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400 tracking-wide uppercase">
                Est. ROI: $42K/month at 500 workers
              </span>
            </div>
          </div>

        </div>
      </section>
<PricingTiers/>
   <section className="w-full bg-slate-100 dark:bg-slate-950 py-24 text-slate-900 dark:text-white  antialiased selection:bg-teal-500 selection:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-[100px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Descriptive Headers & Info Card */}
        <div className="lg:col-span-6 space-y-9 pt-2">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block ">
              Live ROI Engine
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-[44px] ">
              Turn Workforce Data Into<br />Financial Impact
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-[472px] ">
              Every organisation has a different payroll structure and leakage profile. Model your specific financial opportunity — and see exactly why ZoikoTime pays for itself within weeks, not months.
            </p>
          </div>
          
          <div className="w-full max-w-[492px] bg-emerald-50 dark:bg-teal-950/20 p-6 rounded-xl border border-teal-600/20">
            <p className="text-teal-700 dark:text-teal-400 text-sm font-semibold leading-6 ">
              ZoikoTime typically pays for itself within 4–8 weeks of full deployment. This calculator models your specific return — not an industry average.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Panel Matrix */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <div className="w-full max-w-[492px] bg-white dark:bg-slate-900 rounded-2xl shadow-[0px_4px_16px_0px_rgba(13,21,38,0.08)] border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
            
            {/* Embedded Panel Topbar */}
            <div className="bg-slate-100 dark:bg-slate-950 px-6 py-[18px] border-b border-slate-200 dark:border-slate-800 text-center">
              <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-6 ">
                ROI Calculator — Your Organisation
              </h3>
            </div>

            {/* Config Sliders Container */}
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              
              {/* Controls Rows: Workers */}
              <div className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-auto sm:h-12">
                <label className="text-slate-700 dark:text-slate-300 text-xs font-semibold  leading-5 shrink-0 w-36">
                  Number of employees
                </label>
                <div className="flex items-center gap-4 w-full">
                  <input 
                    type="range" 
                    min="10" 
                    max="5000" 
                    step="10"
                    value={employees} 
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full accent-teal-600 cursor-pointer bg-slate-200 dark:bg-slate-800 h-1 rounded-full"
                  />
                  <span className="text-teal-600 dark:text-teal-400 text-xs font-bold  leading-5 w-10 text-right">
                    {employees}
                  </span>
                </div>
              </div>

              {/* Controls Rows: Base Hourly Rate */}
              <div className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-auto sm:h-12">
                <label className="text-slate-700 dark:text-slate-300 text-xs font-semibold  leading-5 shrink-0 w-36">
                  Average hourly cost ($)
                </label>
                <div className="flex items-center gap-4 w-full">
                  <input 
                    type="range" 
                    min="10" 
                    max="150" 
                    step="1"
                    value={hourlyCost} 
                    onChange={(e) => setHourlyCost(Number(e.target.value))}
                    className="w-full accent-teal-600 cursor-pointer bg-slate-200 dark:bg-slate-800 h-1 rounded-full"
                  />
                  <span className="text-teal-600 dark:text-teal-400 text-xs font-bold  leading-5 w-10 text-right">
                    ${hourlyCost}
                  </span>
                </div>
              </div>

              {/* Controls Rows: Leakage Rate */}
              <div className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-auto sm:h-12">
                <label className="text-slate-700 dark:text-slate-300 text-xs font-semibold  leading-5 shrink-0 w-44">
                  Estimated leakage rate (%)
                </label>
                <div className="flex items-center gap-4 w-full">
                  <input 
                    type="range" 
                    min="1" 
                    max="25" 
                    step="0.5"
                    value={leakageRate} 
                    onChange={(e) => setLeakageRate(Number(e.target.value))}
                    className="w-full accent-teal-600 cursor-pointer bg-slate-200 dark:bg-slate-800 h-1 rounded-full"
                  />
                  <span className="text-teal-600 dark:text-teal-400 text-xs font-bold  leading-5 w-10 text-right">
                    {leakageRate}%
                  </span>
                </div>
              </div>

            </div>

            {/* Embedded Live Performance Metric Board */}
            <div className="bg-emerald-50 dark:bg-teal-950/10 p-6 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-b border-slate-200 dark:border-slate-800">
              
              {/* Blocks 1 */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-md border border-teal-600/10 text-center flex flex-col justify-center items-center h-20 shadow-sm">
                <span className="text-teal-600 dark:text-teal-400 text-xl font-extrabold  leading-9">
                  {formatCurrency(monthlyLeakage)}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold  mt-1 whitespace-nowrap">
                  Monthly leakage identified
                </span>
              </div>

              {/* Blocks 2 */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-md border border-teal-600/10 text-center flex flex-col justify-center items-center h-20 shadow-sm">
                <span className="text-teal-600 dark:text-teal-400 text-xl font-extrabold  leading-9">
                  {formatCurrency(annualRecoverable)}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold  mt-1 whitespace-nowrap">
                  Annual recoverable value
                </span>
              </div>

              {/* Blocks 3 */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-md border border-teal-600/10 text-center flex flex-col justify-center items-center h-20 shadow-sm">
                <span className="text-teal-600 dark:text-teal-400 text-xl font-extrabold  leading-9">
                  {estimatedFirstYearRoi}%
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold  mt-1 whitespace-nowrap">
                  Estimated first-year ROI
                </span>
              </div>

              {/* Blocks 4 */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-md border border-teal-600/10 text-center flex flex-col justify-center items-center h-20 shadow-sm">
                <span className="text-teal-600 dark:text-teal-400 text-xl font-extrabold  leading-9">
                  {estimatedPaybackWeeks}wk
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold  mt-1 whitespace-nowrap">
                  Estimated payback period
                </span>
              </div>

            </div>

            {/* Action Frame */}
            <div className="p-6 bg-white dark:bg-slate-900 flex justify-center">
              <button className="w-full max-w-[384px] bg-teal-600 hover:bg-teal-700 text-white font-bold text-base py-3 px-6 rounded-md shadow-[0px_4px_18px_0px_rgba(0,157,140,0.30)] transition-all text-center">
                Generate Full ROI Report →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-24 text-slate-900 dark:text-white font-sans antialiased selection:bg-teal-500 selection:text-white transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Headers */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block ">
            Compare Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-10 ">
            Compare Capabilities Across Plans
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-[568px] mx-auto ">
            Feature-by-feature comparison — with the business outcome each capability delivers, so you can evaluate by impact, not just functionality.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-[0px_4px_16px_0px_rgba(13,21,38,0.08)] border border-slate-200 dark:border-slate-800 overflow-hidden overflow-x-auto">
          <div className="min-w-[980px] flex flex-col">
            
            {/* Table Header Section */}
            <div className="grid grid-cols-12 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800  font-bold text-xs uppercase tracking-wide">
              <div className="col-span-5 px-6 py-4 text-slate-900 dark:text-white">Capability</div>
              <div className="col-span-2 px-4 py-4 text-center text-slate-400 dark:text-slate-500">Essential</div>
              <div className="col-span-2 px-4 py-4 text-center text-teal-600 dark:text-teal-400 bg-emerald-50 dark:bg-teal-950/20 border-x border-slate-200 dark:border-slate-800">Professional</div>
              <div className="col-span-1.5 col-start-10 px-4 py-4 text-center text-slate-400 dark:text-slate-500">Enterprise</div>
              <div className="col-span-1.5 col-start-11.5 px-4 py-4 text-center text-slate-400 dark:text-slate-500">Sovereign</div>
            </div>

            {/* Category Section: Core Verification */}
            <div className="bg-slate-900 text-white  text-xs font-semibold uppercase tracking-wide px-6 py-2.5 border-b border-slate-200 dark:border-slate-800">
              Core Verification
            </div>
            <FeatureRow 
              label="Session tracking & identity verification" 
              sublabel="Eliminates unverified payroll"
              essential={check} professional={check} enterprise={check} sovereign={check} isDarkBg
            />
            <FeatureRow 
              label="Confidence scoring per session" 
              sublabel="Decision-grade verification signal"
              essential={basic} professional={check} enterprise={check} sovereign={check}
            />
            <FeatureRow 
              label="Device & location validation" 
              essential={check} professional={check} enterprise={check} sovereign={check} isDarkBg
            />

            {/* Category Section: Intelligence */}
            <div className="bg-slate-900 text-white text-xs font-semibold uppercase tracking-wide px-6 py-2.5 border-b border-slate-200 dark:border-slate-800">
              Intelligence
            </div>
            <FeatureRow 
              label="Performance intelligence engine" 
              sublabel="Activity → outcome mapping"
              essential={cross} professional={check} enterprise={check} sovereign={check} isDarkBg
            />
            <FeatureRow 
              label="Anomaly detection & fraud risk scoring" 
              sublabel="Reduces fraud exposure"
              essential={cross} professional={check} enterprise={check} sovereign={check}
            />
            <FeatureRow 
              label="AI reasoning embedded in evidence records" 
              essential={cross} professional={check} enterprise={check} sovereign={check} isDarkBg
            />

            {/* Category Section: Governance & Compliance */}
            <div className="bg-slate-900 text-white  text-xs font-semibold uppercase tracking-wide px-6 py-2.5 border-b border-slate-200 dark:border-slate-800">
              Governance & Compliance
            </div>
            <FeatureRow 
              label="Policy engine & jurisdiction rules" 
              sublabel="Continuous assurance"
              essential={cross} professional={cross} enterprise={check} sovereign={check} isDarkBg
            />
            <FeatureRow 
              label="Multi-jurisdiction compliance (native)" 
              sublabel="40+ jurisdictions supported"
              essential={cross} professional={cross} enterprise={check} sovereign={check}
            />
            <FeatureRow 
              label="Evidence capture + chain of custody" 
              sublabel="Audit & legal defensibility"
              essential={basic} professional={standard} enterprise={checkFull} sovereign={checkFull} isDarkBg
            />
            <FeatureRow 
              label="Audit-ready export (regulator format)" 
              essential={cross} professional={cross} enterprise={check} sovereign={check}
            />

            {/* Category Section: Infrastructure */}
            <div className="bg-slate-900 text-white  text-xs font-semibold uppercase tracking-wide px-6 py-2.5 border-b border-slate-200 dark:border-slate-800">
              Infrastructure
            </div>
            <FeatureRow 
              label="Dedicated environment (single-tenant)" 
              essential={cross} professional={cross} enterprise={cross} sovereign={check}
            />
            <FeatureRow 
              label="Custom compliance configuration" 
              essential={cross} professional={cross} enterprise={standard} sovereign={checkFull} isDarkBg
            />

            {/* Custom Edge-Row handling mismatched parameters cleanly */}
            <div className="grid grid-cols-12 items-stretch bg-white dark:bg-slate-900">
              <div className="col-span-5 px-6 py-4 flex flex-col justify-center">
                <span className="text-slate-900 dark:text-white text-sm font-semibold ">SLA-backed uptime guarantee</span>
              </div>
              <div className="col-span-2 px-4 flex items-center justify-center text-slate-200 dark:text-slate-800 text-sm font-normal">{cross}</div>
              <div className="col-span-2 px-4 flex items-center justify-center text-amber-600 dark:text-amber-500 font-semibold text-sm bg-teal-600/[0.03] dark:bg-teal-500/[0.02] border-x border-slate-200/60 dark:border-slate-800/60">99.5%</div>
              <div className="col-span-1.5 col-start-10 px-4 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-sm">99.9%</div>
              <div className="col-span-1.5 col-start-11.5 px-4 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-sm">99.99%</div>
            </div>

          </div>
        </div>

      </div>
    </section>
<section className="py-14 max-w-[1440px] mx-auto px-6 lg:px-[200px]">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1.5px] bg-teal-600"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block ">
              By Use Case
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-[44px]">
            Pricing Tailored to How You Operate
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-7 max-w-[595px]">
            Each workforce context has a different value profile and ROI timeline — see what ZoikoTime delivers for your specific operational model.
          </p>
        </div>

        {/* Dynamic Nav Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm max-w-full overflow-x-auto">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold     whitespace-nowrap transition-all duration-200 ${
                  activeTab === uc.id
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {uc.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Content Splitting Grid Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-10    ">
              {activeData.title}
            </h3>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-6 max-w-[458px]    ">
              {activeData.description}
            </p>
            
            <div className="pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold     leading-5">
                  Typical pricing range:
                </span>
                <span className="text-teal-600 dark:text-teal-400 text-base font-bold     leading-7">
                  {activeData.priceRange}
                </span>
              </div>
              
              <div className="inline-block bg-emerald-50 dark:bg-teal-950/20 rounded-full border border-teal-600/20 px-4 py-1.5">
                <span className="text-teal-700 dark:text-teal-400 text-xs font-bold     leading-5">
                  {activeData.recommendedPlan}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Mini ROI Spec Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[492px] bg-white dark:bg-slate-900 rounded-2xl shadow-[0px_4px_16px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-slate-800 p-8 space-y-4">
              <h4 className="text-slate-900 dark:text-white text-sm font-bold leading-6     mb-6">
                {activeData.roiTitle}
              </h4>
              
              <div className="space-y-3">
                {activeData.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center bg-slate-50 dark:bg-slate-950 p-4 rounded-md border border-slate-100 dark:border-slate-900">
                    <span className="text-slate-700 dark:text-slate-400 text-xs font-normal     leading-5">
                      {metric.label}
                    </span>
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-bold     leading-6">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FULL TRANSPARENCY BLOCK */}
      <section className="py-24 max-w-[1200px] mx-auto px-4 md:px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block    ">
            Full Transparency
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-10    ">
            No Hidden Costs. Full Transparency.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-7 max-w-[508px] mx-auto    ">
            Every cost component clearly defined — so your finance and procurement teams can plan with precision, not estimates.
          </p>
        </div>

        {/* 4 Pillars Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[320px]">
            <span className="text-3xl mb-4 block" role="img" aria-label="Licensing">📋</span>
            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-7     mb-3">
              Licensing
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5    ">
              Per active workforce unit — you only pay for workers who are actively tracked. No charges for inactive accounts or periods of non-use. Transparent per-user billing with volume efficiency built in.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[320px]">
            <span className="text-3xl mb-4 block" role="img" aria-label="Implementation">🚀</span>
            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-7     mb-3">
              Implementation
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5    ">
              Standard deployment is included in Enterprise and Sovereign plans. Professional tier includes guided onboarding documentation. No hidden professional services fees for standard integrations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[320px]">
            <img className="text-3xl mb-4 block" role="img" aria-label="Support" src="/trust-goverance/icon.png"/>
            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-7     mb-3">
              Support
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5    ">
              Email support included in Essential. Priority support in Professional. Dedicated account team in Enterprise and Sovereign. No additional cost for standard support tiers within your plan.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[320px]">
            <span className="text-3xl mb-4 block" role="img" aria-label="Scaling">📈</span>
            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-7     mb-3">
              Scaling
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5    ">
              Automatic volume efficiency applies as your workforce grows — per-user costs reduce at defined scale thresholds. No manual renegotiation required. Scaling is transparent and predictable.
            </p>
          </div>

        </div>

        {/* Procurement Bottom Quote Statement */}
        <div className="max-w-[600px] mx-auto bg-emerald-50 dark:bg-teal-950/20 rounded-xl border border-teal-600/20 p-6 text-center">
          <p className="text-teal-700 dark:text-teal-400 text-base font-semibold leading-7     italic">
            "What you see is what you plan — no surprises. ZoikoTime pricing is designed for procurement clarity, not vendor lock-in."
          </p>
        </div>
      </section>
      <section className="py-12 max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1.5px] bg-teal-600"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block  ">
              Procurement Support
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-10  ">
            Everything You Need to Get Approval
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-7 max-w-[566px]  ">
            Enterprise procurement requires documentation. We have built it — structured for finance, legal, security, and technical review teams.
          </p>
        </div>

        {/* 4 Pillars Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[192px]">
            <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-6   mb-2">
              Pricing Justification
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5  ">
              ROI modelling, cost-benefit analysis, and payback period documentation — structured for CFO and finance review.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[192px]">
            <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-6   mb-2">
              ROI Model
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5  ">
              Pre-built financial model with your organisation's inputs — ready for board and executive committee review.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[192px]">
            <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-6   mb-2">
              Compliance Documentation
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5  ">
              GDPR, ISO 27001, SOC 2 compliance matrix and DPA — structured for legal and compliance review.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[192px]">
            <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-6   mb-2">
              Security Overview
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5  ">
              Architecture documentation, penetration test summary, and shared responsibility model for CISO review.
            </p>
          </div>
        </div>

        {/* Download Highlight Box */}
        <div className="relative w-full max-w-[1040px] mx-auto bg-teal-50 dark:bg-teal-950/20 rounded-2xl p-8 md:p-10 border border-teal-600/10 overflow-hidden text-center flex flex-col items-center">
          <div className="absolute w-[384px] h-[192px] left-1/2 -translate-x-1/2 -top-10 bg-radial from-teal-500/10 dark:from-teal-400/10 to-transparent pointer-events-none" />
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-7   mb-2 relative z-10">
            Download the Complete Pricing & ROI Pack
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-6 max-w-[680px] mb-6 relative z-10">
            All procurement documentation in one structured bundle — ready for distribution to your approval team.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold text-sm px-6 py-3 rounded-md shadow-[0px_4px_12px_0px_rgba(0,157,140,0.35)] transition-all duration-200 relative z-10">
            Download Pricing & ROI Pack
          </button>
        </div>
      </section>

      {/* SECTION 2: FAQ SECTION */}
      <section className="bg-slate-100 dark:bg-slate-950/40 py-12 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[200px]">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block  ">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-10  ">
              Common Pricing Questions
            </h2>
          </div>

          {/* Interactive Disclosure Blocks Matrix Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
            {faqItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openFaq === item.id}
                >
                  <span className="text-slate-900 dark:text-white text-base font-bold leading-6   pr-4">
                    {item.question}
                  </span>
                  <span className={`text-teal-600 dark:text-teal-400 text-xl font-bold transition-transform duration-200 transform ${openFaq === item.id ? 'rotate-45' : 'rotate-0'}`}>
                    ＋
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === item.id ? 'max-h-40 border-t border-slate-100 dark:border-slate-800/50' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-slate-500 dark:text-slate-400 text-sm leading-6  ">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: GET STARTED CTA BANNER */}
      <section className="relative bg-gradient-to-b from-teal-50 to-emerald-50 dark:from-slate-950 dark:to-slate-900 py-12 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        {/* Dynamic Multi-Color Linear Gradient Top Accent Stripe Rule */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

        <div className="max-w-[800px] mx-auto text-center px-4 md:px-6 flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block   mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-[48px] md:leading-[56px]   tracking-tight mb-6">
            Find the Right Pricing for Your Organisation and <span className="text-teal-600 dark:text-teal-400 block sm:inline">Unlock Immediate Value</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-7 max-w-[740px] mb-10  ">
            Start with the ROI calculator to model your specific financial opportunity, or speak to our team for a customised pricing and deployment plan tailored to your workforce structure and compliance requirements.
          </p>
          
          {/* Action Call Controls Group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold text-base px-8 py-3.5 rounded-md shadow-[0px_4px_18px_0px_rgba(0,157,140,0.30)] transition-all duration-200  ">
              Calculate ROI
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white font-bold text-base px-8 py-3.5 rounded-md shadow-[0px_4px_14px_0px_rgba(13,21,38,0.25)] transition-all duration-200  ">
              Request Custom Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}