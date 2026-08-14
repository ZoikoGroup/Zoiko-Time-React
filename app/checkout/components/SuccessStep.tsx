"use client";

import React from "react";

interface SuccessStepProps {
  fullName: string;
  email: string;
  orgName: string;
  seats: number;
  billingCycle: "monthly" | "annual";
  cardNumber: string;
  onReset: () => void;
}

export default function SuccessStep({
  fullName,
  email,
  orgName,
  seats,
  billingCycle,
  cardNumber,
  onReset,
}: SuccessStepProps) {
  const isMonthly = billingCycle === "monthly";
  const ratePerUser = isMonthly ? 17.0 : 13.6;
  const renewalTotal = seats * ratePerUser;
  
  const lastFour = cardNumber.replace(/\s/g, "").slice(-4) || "3245";
  const renewDate = isMonthly ? "September 13, 2026" : "August 14, 2027";

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] border border-slate-200 p-6 md:p-8 flex flex-col items-center">
      {/* Circle checkmark */}
      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Subscription Active Title */}
      <h2 className="text-slate-800 text-2xl font-bold   leading-10 text-center">
        Subscription active
      </h2>
      <p className="text-gray-500 text-sm font-normal   leading-6 text-center mt-2 max-w-sm">
        Thank you. Your <span className="font-bold">Governed</span> subscription is now active for{" "}
        <span className="font-bold text-slate-800">{orgName || "your workspace"}</span>.
      </p>

      {/* Invoice Banner */}
      <div className="mt-4 px-6 py-2.5 bg-emerald-50 rounded-[10px] border border-emerald-100 flex items-center justify-center">
        <span className="text-emerald-500 font-bold font-mono text-sm tracking-wide">
          INV-2026-EJ79DD
        </span>
      </div>

      {/* Receipt details */}
      <div className="w-full max-w-[460px] mt-6 bg-gray-50 rounded-xl border border-slate-200 p-5   text-xs space-y-3.5">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-normal">Plan</span>
          <span className="text-slate-800 font-semibold capitalize">Governed · {billingCycle}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-normal">Seats</span>
          <span className="text-slate-800 font-semibold">{seats}</span>
        </div>
        
        <div className="border-t border-slate-200/60 pt-3 flex justify-between items-center">
          <span className="text-gray-500 font-normal">Charged today</span>
          <span className="text-emerald-500 font-semibold">${renewalTotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-normal">Payment method</span>
          <span className="text-slate-800 font-semibold">Card ending {lastFour}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-normal">Billed to</span>
          <span className="text-slate-800 font-semibold">{fullName || orgName}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-normal">Renews</span>
          <span className="text-slate-800 font-semibold">
            {renewDate} · ${renewalTotal.toFixed(2)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-normal">Account</span>
          <span className="text-slate-800 font-semibold truncate max-w-[240px]" title={email}>
            {email}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-[460px] flex flex-col sm:flex-row gap-3 mt-8">
        <button
          onClick={onReset}
          className="flex-1 h-12 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-bold   rounded-[10px] transition-colors shadow-md hover:shadow-lg focus:outline-none cursor-pointer flex items-center justify-center"
        >
          Go to ZoikoTime
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 h-12 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold   rounded-[10px] border border-slate-300 transition-colors focus:outline-none cursor-pointer flex items-center justify-center"
        >
          View invoice / receipt
        </button>
      </div>

      {/* Demo Footer Note */}
      <p className="text-gray-500 text-[10px] md:text-xs font-normal   leading-5 text-center mt-6 max-w-sm">
        A receipt was sent to <span className="font-medium text-slate-700">{email}</span>. Demo checkout — no real charge was made.
      </p>
    </div>
  );
}
