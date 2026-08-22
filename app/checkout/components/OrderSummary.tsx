"use client";

import React from "react";

interface OrderSummaryProps {
  seats: number;
  billingCycle: "monthly" | "annual";
  accountType: "new" | "existing";
  selectedPlan?: "Governed" | "Sovereign";
  onToggleBillingCycle: () => void;
}

export default function OrderSummary({
  seats,
  billingCycle,
  accountType,
  selectedPlan = "Governed",
  onToggleBillingCycle,
}: OrderSummaryProps) {
  const isMonthly = billingCycle === "monthly";
  const ratePerUser = selectedPlan === "Sovereign"
    ? (isMonthly ? 25.0 : 20.0)
    : (isMonthly ? 15.0 : 12.42);
  const monthlyTotal = seats * ratePerUser;
  
  const trialEndDate = "August 27, 2026";
  const firstRenewalDate = isMonthly ? "September 13, 2026" : "August 14, 2027";

  return (
    <div className="w-full lg:w-96 bg-white rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] border border-slate-200 overflow-hidden shrink-0 self-start">
      {/* Header banner */}
      <div className="bg-slate-800 p-5 text-white flex justify-between items-center">
        <div>
          <h3 className="text-base font-extrabold leading-6">{selectedPlan}</h3>
          <p className="text-white/80 text-xs font-normal leading-5 capitalize">
            {billingCycle} billing
          </p>
        </div>
        {selectedPlan === "Sovereign" && (
          <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            Upgraded
          </span>
        )}
      </div>

      {/* Pricing list */}
      <div className="p-5 space-y-3.5 border-b border-slate-100">
        <div className="flex justify-between items-center text-xs  ">
          <span className="text-gray-500 font-normal">Billing</span>
          <span className="text-slate-800 font-semibold capitalize">{billingCycle}</span>
        </div>
        <div className="flex justify-between items-center text-xs  ">
          <span className="text-gray-500 font-normal">Account</span>
          <span className="text-slate-800 font-semibold capitalize">
            {accountType === "new" ? "New" : "Existing"}
          </span>
        </div>
        <div className="flex justify-between items-center text-xs  ">
          <span className="text-gray-500 font-normal">Seats</span>
          <span className="text-slate-800 font-semibold">{seats}</span>
        </div>
        <div className="flex justify-between items-center text-xs  ">
          <span className="text-gray-500 font-normal">Per-user rate</span>
          <span className="text-slate-800 font-semibold">
            ${ratePerUser.toFixed(2)} /mo
          </span>
        </div>
        <div className="flex justify-between items-center text-xs  ">
          <span className="text-gray-500 font-normal">Subtotal</span>
          <span className="text-slate-800 font-semibold">$00.00</span>
        </div>
        <div className="flex justify-between items-center text-xs  ">
          <span className="text-gray-500 font-normal">Tax (estimated)</span>
          <span className="text-slate-800 font-semibold">$0.00</span>
        </div>
      </div>

      {/* Due Today */}
      <div className="px-5 py-4 flex justify-between items-center border-b border-slate-200">
        <span className="text-slate-800 text-sm font-bold  ">Amount due today</span>
        <span className="text-slate-800 text-xl font-extrabold  ">$00.00</span>
      </div>

      {/* Trial Description */}
      <div className="p-5 border-b border-slate-200">
        <p className="text-gray-500 text-xs font-normal   leading-relaxed">
          Free for 14 days. After the trial, billed {isMonthly ? "monthly" : "annually"} unless cancelled. Trial ends {trialEndDate}.
        </p>
      </div>

      {/* Future Billing Details */}
      <div className="p-5 bg-gray-50/50">
        <div className="bg-gray-50 border border-slate-200 rounded-[10px] p-4 text-xs   space-y-1">
          <span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Then</span>
          <h4 className="text-slate-800 text-base font-extrabold leading-6">
            ${monthlyTotal.toFixed(2)} / month
          </h4>
          <p className="text-gray-500 font-normal leading-relaxed">
            Renews automatically on <span className="font-bold">{firstRenewalDate}</span> for {seats} seats. Cancel anytime.
          </p>
        </div>

        {/* Billing cycle switch */}
        <div className="mt-4 flex items-center justify-between text-xs  ">
          <span className="text-gray-500">Billing: {isMonthly ? "Monthly" : "Annual"} — </span>
          <button
            onClick={onToggleBillingCycle}
            className="text-emerald-500 hover:text-emerald-600 font-semibold underline cursor-pointer focus:outline-none transition-colors"
          >
            switch to {isMonthly ? "annual" : "monthly"}
          </button>
        </div>
      </div>

      {/* Secure footer list */}
      <div className="p-5 border-t border-slate-200 bg-white space-y-3">
        <div className="flex items-start gap-2.5 text-xs text-gray-500  ">
          <svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="leading-tight">Encrypted, processor-hosted payment</span>
        </div>
        <div className="flex items-start gap-2.5 text-xs text-gray-500  ">
          <svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="leading-tight">Cancel anytime · no hidden fees</span>
        </div>
      </div>
    </div>
  );
}
