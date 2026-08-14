"use client";

import React from "react";

interface PaymentStepProps {
  cardName: string;
  setCardName: (val: string) => void;
  cardNumber: string;
  setCardNumber: (val: string) => void;
  expiry: string;
  setExpiry: (val: string) => void;
  cvc: string;
  setCvc: (val: string) => void;
  cardPostalCode: string;
  setCardPostalCode: (val: string) => void;
  saveCard: boolean;
  setSaveCard: (val: boolean) => void;
  agreeTerms: boolean;
  setAgreeTerms: (val: boolean) => void;
  seats: number;
  billingCycle: "monthly" | "annual";
  onNext: () => void;
  onBack: () => void;
}

export default function PaymentStep({
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  expiry,
  setExpiry,
  cvc,
  setCvc,
  cardPostalCode,
  setCardPostalCode,
  saveCard,
  setSaveCard,
  agreeTerms,
  setAgreeTerms,
  seats,
  billingCycle,
  onNext,
  onBack,
}: PaymentStepProps) {
  const isMonthly = billingCycle === "monthly";
  const ratePerUser = isMonthly ? 17.0 : 13.6;
  const renewalTotal = seats * ratePerUser;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreeTerms) {
      onNext();
    } else {
      alert("Please agree to the Subscription Agreement terms before subscribing.");
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] border border-slate-200 p-6 md:p-8">
      <h2 className="text-slate-800 text-xl font-bold   leading-8">Payment</h2>
      <p className="text-gray-500 text-sm font-normal   leading-5 mt-1.5 mb-6">
        Enter your card to complete the subscription. Review your order in the summary.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name on Card */}
        <div>
          <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
            Name on card <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            required
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Alex Kim"
            className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
          />
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
            Card number <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 1234 1234 1234"
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
            <div className="absolute right-3.5 top-3.5 w-4 h-2 bg-emerald-50 rounded-sm border border-emerald-100" />
          </div>
        </div>

        {/* Expiry, CVC, Postal Code (3 Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
              Expiry (MM/YY) <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              required
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
          </div>
          <div>
            <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
              CVC <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              required
              maxLength={4}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="123"
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
          </div>
          <div>
            <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
              Card postal code <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              required
              value={cardPostalCode}
              onChange={(e) => setCardPostalCode(e.target.value)}
              placeholder="94103"
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
          </div>
        </div>

        {/* Demo Warning Banner */}
        <div className="flex items-start gap-2.5 p-3.5 bg-gray-50 border border-slate-200 rounded-lg text-xs   text-gray-500 leading-4">
          <svg className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            Demo checkout — no real card is processed. In production these are secure, PCI-compliant processor-hosted fields.
          </span>
        </div>

        {/* Checkbox: Save card */}
        <div className="flex items-center gap-2">
          <input
            id="saveCard"
            type="checkbox"
            checked={saveCard}
            onChange={(e) => setSaveCard(e.target.checked)}
            className="w-4.5 h-4.5 text-emerald-400 border-slate-300 rounded focus:ring-emerald-400 cursor-pointer"
          />
          <label htmlFor="saveCard" className="text-gray-500 text-xs font-normal   cursor-pointer select-none">
            Save this card for future renewals
          </label>
        </div>

        {/* Checkbox: Agree Terms */}
        <div className="flex items-start gap-2">
          <input
            id="agreeTerms"
            type="checkbox"
            required
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="w-4.5 h-4.5 mt-0.5 text-emerald-400 border-slate-300 rounded focus:ring-emerald-400 cursor-pointer"
          />
          <label htmlFor="agreeTerms" className="text-gray-500 text-xs font-normal   leading-5 cursor-pointer select-none">
            I agree to the Subscription Agreement, Billing &amp; Refund Policy, and Privacy terms. I authorize ZoikoTime to charge{" "}
            <span className="font-bold text-slate-800">${renewalTotal.toFixed(2)}</span> today and {isMonthly ? "monthly" : "annually"} thereafter until cancelled.
          </label>
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
            className="px-6 h-12 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-bold   rounded-[10px] transition-colors shadow-md hover:shadow-lg focus:outline-none cursor-pointer whitespace-nowrap"
          >
            Pay ${renewalTotal.toFixed(2)} &amp; Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
