"use client";

import React from "react";

interface SeatsStepProps {
  seats: number;
  setSeats: (val: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function SeatsStep({
  seats,
  setSeats,
  onNext,
  onBack,
}: SeatsStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (seats >= 1) {
      onNext();
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] border border-slate-200 p-6 md:p-8">
      <h2 className="text-slate-800 text-xl font-bold   leading-8">How many seats?</h2>
      <p className="text-gray-500 text-sm font-normal   leading-5 mt-1.5 mb-6">
        The Governed plan supports up to 250 users. You can change this later in Billing.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
            Seat quantity <span className="text-red-700">*</span>
          </label>
          <input
            type="number"
            min={1}
            max={250}
            required
            value={seats}
            onChange={(e) => setSeats(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
          />
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-4 gap-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 h-12 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold   rounded-[10px] border border-slate-300 transition-colors cursor-pointer focus:outline-none"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 h-12 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-bold   rounded-[10px] transition-colors shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
          >
            Continue to billing
          </button>
        </div>
      </form>
    </div>
  );
}
