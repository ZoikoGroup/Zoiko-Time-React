'use client'
import React, { useState } from 'react';
import { 
  Check, 
  Shield, 
  Lock, 
  EyeOff, 
  Clock, 
  Users, 
  FileText, 
  Key, 
  Laptop, 
  Download, 
  HelpCircle, 
  Calendar, 
  ShieldCheck, 
  FileCheck 
} from 'lucide-react';

export default function BuiltSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50 dark:from-gray-900 dark:to-gray-950 text-slate-800 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest  ">
            Built Into ZoikoTime
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white  ">
            What every plan includes
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400   max-w-2xl mx-auto">
            Transparent pricing. Strong controls. Evidence you can trust.
          </p>
        </div>

        {/* Feature Cards Grid (1-6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-2 border-r-2 border-b-2 border-t-4 border-teal-600 dark:border-teal-500 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-50 dark:bg-teal-950/50 rounded-lg text-teal-600 dark:text-teal-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white  ">
                <span className="text-teal-600 dark:text-teal-400 font-extrabold mr-1">1.</span>
                Included in every plan
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-gray-700 dark:text-gray-300   flex-1">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>Append-only evidentiary records</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>Deterministic worker-state classification</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>Mask and set breaks held at legally defined statuses</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>Immutable audit trail — pending review: no worker is billed before it is legally reviewed</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>Worker Transparency Center</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>SSO and MFA</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>Desktop, web, mobile and kiosk capture</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>Payroll-ready exports</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-2 border-r-2 border-b-2 border-t-4 border-blue-600 dark:border-blue-500 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-blue-600 dark:text-blue-400">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white  ">
                <span className="text-blue-600 dark:text-blue-400 font-extrabold mr-1">2.</span>
                Privacy-conscious screenshot capture
              </h3>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed  ">
              Randomised screenshot capture at random intervals of approximately 15 minutes to support work-record verification and review.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-indigo-50 dark:bg-gray-700/50 rounded-xl text-center flex flex-col items-center justify-center space-y-2 border border-indigo-100 dark:border-gray-600">
                <img className="w-5 h-5" src="/pricing/image 91.png" />
                <span className="text-xs font-semibold text-slate-800 dark:text-gray-200 leading-tight">No keystroke content</span>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-gray-700/50 rounded-xl text-center flex flex-col items-center justify-center space-y-2 border border-indigo-100 dark:border-gray-600">
                <img className="w-5 h-5" src="/pricing/image 91 (1).png" />
                <span className="text-xs font-semibold text-slate-800 dark:text-gray-200 leading-tight">No URL history</span>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-gray-700/50 rounded-xl text-center flex flex-col items-center justify-center space-y-2 border border-indigo-100 dark:border-gray-600">
                <img className="w-5 h-5" src="/pricing/image 91 (2).png" />
                <span className="text-xs font-semibold text-slate-800 dark:text-gray-200 leading-tight">No application-name monitoring</span>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-gray-700/50 rounded-xl text-center flex flex-col items-center justify-center space-y-2 border border-indigo-100 dark:border-gray-600">
                <img className="w-5 h-5" src="/pricing/image 92.png" />
                <span className="text-xs font-semibold text-slate-800 dark:text-gray-200 leading-tight">No clipboard capture</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-2 border-r-2 border-b-2 border-t-4 border-indigo-500 dark:border-indigo-400 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-violet-100 dark:bg-violet-950/50 rounded-lg text-indigo-500 dark:text-indigo-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white  ">
                <span className="text-indigo-500 dark:text-indigo-400 font-extrabold mr-1">3.</span>
                Pay for workers whose work is recorded
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-gray-700 dark:text-gray-300   flex-1">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>ZoikoTime pricing is based on active workers, not empty licences.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>An active worker is a worker for whom at least one work-state event is recorded during the billing period.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>Provisioned workers with no work during the billing period are not billed as active workers.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>Non-tracking administrators, finance, approvers and read-only audiences do not consume Active Worker licences.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>Minimum commitments apply: 5 on Verified, 10 on Governed, 25 on Sovereign.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>250+ active workers? Ask about volume pricing.</span>
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-2 border-r-2 border-b-2 border-t-4 border-red-500 dark:border-red-400 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-rose-100 dark:bg-rose-950/50 rounded-lg text-red-500 dark:text-red-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white  ">
                <span className="text-red-500 dark:text-red-400 font-extrabold mr-1">4.</span>
                Built differently by design
              </h3>
            </div>
            <ul className="space-y-3 text-xs   flex-1">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-gray-200">Evidence, not surveillance</span>
                  <span className="text-gray-700 dark:text-gray-400"> — We capture only the evidence needed to establish work-state truth.</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-gray-200">Human review, not automated judgment</span>
                  <span className="text-gray-700 dark:text-gray-400"> — System signals support human review. They do not replace human judgment or decision-making.</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-gray-200">Policies that preserve history</span>
                  <span className="text-gray-700 dark:text-gray-400"> — Effective-date policy controls allow past-state changes without destroying historical signals.</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-gray-200">Security is not an upsell</span>
                  <span className="text-gray-700 dark:text-gray-400"> — SSO, MFA and core retention protections are included across ZoikoTime plans.</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-gray-200">What you pay is what you pay</span>
                  <span className="text-gray-700 dark:text-gray-400"> — Rates never change mid-term. No per-user add-ons. Renewal uplift capped at CPI + 3%, with a ceiling of 7%.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-2 border-r-2 border-b-2 border-t-4 border-yellow-600 dark:border-yellow-500 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 dark:bg-amber-950/50 rounded-lg text-yellow-600 dark:text-yellow-500">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white  ">
                <span className="text-yellow-600 dark:text-yellow-500 font-extrabold mr-1">5.</span>
                Your evidence is yours
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-gray-700 dark:text-gray-300   flex-1">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
                <span>Full delete option in a documented format with integrity manifest at any time.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
                <span>90 days of near-duty access after termination at no charge.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
                <span>Extended evidence custody available by agreement when statutory retention obligations outlast your subscription.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
                <span>We will never delete, degrade or withhold your evidence to create commercial pressure.</span>
              </li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-2 border-r-2 border-b-2 border-t-4 border-pink-500 dark:border-pink-400 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-pink-100 dark:bg-pink-950/50 rounded-lg text-pink-500 dark:text-pink-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white  ">
                <span className="text-pink-500 dark:text-pink-400 font-extrabold mr-1">6.</span>
                Need help choosing?
              </h3>
            </div>
            <div className="space-y-4 pt-2  ">
              <div className="flex items-start space-x-3">
                <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/70 text-blue-700 dark:text-blue-300 text-[10px] font-extrabold rounded-full shrink-0">
                  Verified
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Entry-level proof & standard assurance controls.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="px-2.5 py-1 bg-emerald-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 text-[10px] font-extrabold rounded-full shrink-0">
                  Governed
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Teams needing policies, approvals and audit-ready oversight.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="px-2.5 py-1 bg-violet-100 dark:bg-violet-950/70 text-indigo-700 dark:text-indigo-300 text-[10px] font-extrabold rounded-full shrink-0">
                  Sovereign
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Regulated, unionised or multi-country workforces.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700 text-slate-800 dark:text-gray-200 text-[10px] font-extrabold rounded-full border border-slate-200 dark:border-gray-600 shrink-0">
                  Enterprise
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Complex architectures, integrations and commercial terms.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Card 7: Annual Pricing & Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-md border-l-2 border-r-2 border-b-2 border-t-4 border-teal-600 dark:border-teal-500 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-base font-bold text-slate-800 dark:text-white  ">
              <span className="text-teal-700 dark:text-teal-400 font-extrabold mr-1">7.</span>
              Annual pricing — two months free
            </h3>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400  ">Annual view</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className={`w-10 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${isAnnual ? 'bg-teal-600' : 'bg-gray-300 dark:bg-gray-600'}`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isAnnual ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Pricing Table */}
            <div className="lg:col-span-2 overflow-x-auto">
              <table className="w-full text-left  ">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-gray-700 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    <th className="py-2 px-3">Plan</th>
                    <th className="py-2 px-3">Per worker / year</th>
                    <th className="py-2 px-3">Monthly equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700 text-xs">
                  <tr>
                    <td className="py-3 px-3 font-extrabold text-blue-600 dark:text-blue-400">Verified</td>
                    <td className="py-3 px-3 font-bold text-slate-800 dark:text-gray-200">$79</td>
                    <td className="py-3 px-3 text-slate-800 dark:text-gray-300">$6.58</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-extrabold text-teal-700 dark:text-teal-400">Governed</td>
                    <td className="py-3 px-3 font-bold text-slate-800 dark:text-gray-200">$149</td>
                    <td className="py-3 px-3 text-slate-800 dark:text-gray-300">$12.42</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-extrabold text-indigo-500 dark:text-indigo-400">Sovereign</td>
                    <td className="py-3 px-3 font-bold text-slate-800 dark:text-gray-200">$240</td>
                    <td className="py-3 px-3 text-slate-800 dark:text-gray-300">$20.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-extrabold text-slate-800 dark:text-gray-200">Enterprise</td>
                    <td className="py-3 px-3 font-bold text-slate-800 dark:text-gray-200">Custom</td>
                    <td className="py-3 px-3 text-slate-800 dark:text-gray-300">Contract pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Billing Note Callout */}
            <div className="bg-gradient-to-r from-indigo-50 to-violet-100 dark:from-gray-700 dark:to-gray-700/60 p-4 rounded-xl border border-violet-200 dark:border-gray-600 flex items-start space-x-3">
                <img className="w-5 h-5" src="/pricing/SVG (6).png" />
              <p className="text-xs text-slate-800 dark:text-gray-200 leading-relaxed  ">
                <span className="font-bold">Billed once per year.</span> Save up to 20% compared to monthly pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Footer & Compliance Badges */}
        <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6  ">
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-2xl text-center md:text-left leading-relaxed">
            All prices are per active worker / month in USD. Annual pricing is billed once per year at the annual amount shown. Terms and conditions apply. See the ZoikoTime Master Services Agreement for full details.
          </p>
          
          <div className="flex items-center justify-center space-x-8 shrink-0">
            <div className="flex items-center space-x-2">
              <img className="w-5 h-5" src="/pricing/SVG (7).png" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800 dark:text-gray-200 leading-none">SOC 2</div>
                <div className="text-[9.5px] font-semibold text-gray-500 dark:text-gray-400">Type II</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <img className="w-5 h-5" src="/pricing/SVG (8).png" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800 dark:text-gray-200 leading-none">ISO 27001</div>
                <div className="text-[9.5px] font-semibold text-gray-500 dark:text-gray-400">Certified</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <img className="w-5 h-5" src="/pricing/SVG (9).png" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800 dark:text-gray-200 leading-none">GDPR</div>
                <div className="text-[9.5px] font-semibold text-gray-500 dark:text-gray-400">Compliant</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}