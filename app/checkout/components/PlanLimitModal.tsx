"use client";

import React, { useState } from "react";

interface PlanLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  seats: number;
  onReduceSeats: () => void;
  onSwitchToSovereign: () => void;
  onRequestEnterprise: () => void;
}

export default function PlanLimitModal({
  isOpen,
  onClose,
  seats,
  onReduceSeats,
  onSwitchToSovereign,
  onRequestEnterprise,
}: PlanLimitModalProps) {
  const [enterpriseRequested, setEnterpriseRequested] = useState(false);

  if (!isOpen) return null;

  const handleEnterpriseClick = () => {
    setEnterpriseRequested(true);
    onRequestEnterprise();
    setTimeout(() => {
      setEnterpriseRequested(false);
    }, 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[640px] bg-white rounded-2xl p-6 md:p-7 shadow-[0px_40px_90px_0px_rgba(0,0,0,0.35)] border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Warning Header Tag */}
        <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wide">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>PLAN LIMIT REACHED</span>
        </div>

        {/* Modal Title */}
        <h2 className="text-slate-800 text-2xl font-semibold leading-tight mt-2">
          You’ve exceeded the Governed plan limit
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm font-normal leading-relaxed mt-2">
          Governed supports up to 250 seats. You entered <span className="font-semibold text-slate-800">{seats} seats</span>. To continue, choose a plan that fits your team size and requirements.
        </p>

        {/* Current Plan Badge Pill */}
        <div className="mt-4 bg-gray-50 border border-slate-200 rounded-[10px] px-3.5 py-2.5 flex items-center gap-2.5 w-fit">
          <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-800 text-xs font-semibold">
            Current plan: Governed · Limit: 250 seats
          </span>
        </div>

        {/* Option 1: SOVEREIGN */}
        <div className="mt-5 border border-slate-200 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white hover:border-slate-300 transition-all">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <span className="text-slate-800 text-xs font-extrabold tracking-wider uppercase block">
                SOVEREIGN
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-slate-800 text-xl font-extrabold">$25</span>
                <span className="text-gray-500 text-xs font-semibold">/ active worker / month</span>
              </div>
              <p className="text-blue-600 text-xs font-bold mt-1">
                For regulated and multi-country workforces
              </p>
              <p className="text-gray-500 text-xs font-normal mt-0.5 leading-tight max-w-sm">
                Advanced governance, evidence and multi-jurisdiction controls.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onSwitchToSovereign}
            className="w-full md:w-auto px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 text-center shadow-xs"
          >
            Switch to Sovereign
          </button>
        </div>

        {/* Option 2: ENTERPRISE */}
        <div className="mt-3.5 border border-slate-200 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white hover:border-slate-300 transition-all">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9"
                />
              </svg>
            </div>
            <div>
              <span className="text-slate-800 text-xs font-extrabold tracking-wider uppercase block">
                ENTERPRISE
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-slate-800 text-xl font-extrabold">Custom</span>
              </div>
              <p className="text-indigo-500 text-xs font-bold mt-1">
                For complex and strategic deployments
              </p>
              <p className="text-gray-500 text-xs font-normal mt-0.5 leading-tight max-w-sm">
                Private architecture, tailored integrations and enterprise terms.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleEnterpriseClick}
            className="w-full md:w-auto px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-lg border border-gray-300 transition-colors cursor-pointer shrink-0 text-center"
          >
            {enterpriseRequested ? "Demo Requested ✓" : "Request Enterprise Demo"}
          </button>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onReduceSeats}
            className="text-teal-700 hover:text-teal-800 text-xs font-semibold cursor-pointer transition-colors focus:outline-none"
          >
            Reduce seats to stay on Governed
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-800 hover:text-slate-900 text-xs font-semibold cursor-pointer transition-colors focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
