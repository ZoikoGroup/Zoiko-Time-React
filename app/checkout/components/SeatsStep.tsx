"use client";

import React from "react";

interface SeatsStepProps {
  seats: number;
  setSeats: (val: number) => void;
  onNext: () => void;
  onBack: () => void;
  selectedPlan?: "Governed" | "Sovereign";
  onOpenPlanLimitModal: () => void;
}

export default function SeatsStep({
  seats,
  setSeats,
  onNext,
  onBack,
  selectedPlan = "Governed",
  onOpenPlanLimitModal,
}: SeatsStepProps) {
  const isGovernedExceeded = selectedPlan === "Governed" && seats > 250;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isGovernedExceeded) {
      onOpenPlanLimitModal();
    } else if (seats >= 1) {
      onNext();
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] border border-slate-200 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-800 text-xl font-bold leading-8">How many seats?</h2>
        {selectedPlan === "Sovereign" && (
          <span className="bg-indigo-50 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full border border-indigo-100">
            Sovereign Plan (Unlimited Seats)
          </span>
        )}
      </div>
      <p className="text-gray-500 text-sm font-normal leading-5 mt-1.5 mb-6">
        {selectedPlan === "Governed"
          ? "The Governed plan supports up to 250 users. You can change this later in Billing."
          : "Sovereign supports unlimited users for regulated & multi-country workforces."}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-slate-800 text-xs font-semibold mb-1.5">
            Seat quantity <span className="text-red-700">*</span>
          </label>
          <input
            type="number"
            min={1}
            required
            value={seats}
            onChange={(e) => setSeats(Math.max(1, parseInt(e.target.value) || 1))}
            className={`w-full h-11 px-3.5 bg-white border ${
              isGovernedExceeded
                ? "border-amber-500 focus:border-amber-600 focus:ring-amber-500"
                : "border-slate-300 focus:border-emerald-400 focus:ring-emerald-400"
            } rounded-[10px] text-sm text-slate-800 focus:outline-none focus:ring-1 transition-colors`}
          />

          {isGovernedExceeded && (
            <div className="mt-3 p-3 bg-amber-50/80 border border-amber-200 rounded-[10px] flex items-center justify-between text-xs text-amber-800">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Seat count exceeds the 250 seat limit for Governed plan.</span>
              </div>
              <button
                type="button"
                onClick={onOpenPlanLimitModal}
                className="font-semibold text-amber-900 underline hover:text-amber-950 ml-2 shrink-0 cursor-pointer"
              >
                View plans
              </button>
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-4 gap-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 h-12 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold rounded-[10px] border border-slate-300 transition-colors cursor-pointer focus:outline-none"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 h-12 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-bold rounded-[10px] transition-colors shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
          >
            Continue to billing
          </button>
        </div>
      </form>
    </div>
  );
}
