"use client";

import React from "react";

interface BillingStepProps {
  billingName: string;
  setBillingName: (val: string) => void;
  country: string;
  setCountry: (val: string) => void;
  address1: string;
  setAddress1: (val: string) => void;
  address2: string;
  setAddress2: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
  stateProv: string;
  setStateProv: (val: string) => void;
  postalCode: string;
  setPostalCode: (val: string) => void;
  taxId: string;
  setTaxId: (val: string) => void;
  billingEmail: string;
  setBillingEmail: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function BillingStep({
  billingName,
  setBillingName,
  country,
  setCountry,
  address1,
  setAddress1,
  address2,
  setAddress2,
  city,
  setCity,
  stateProv,
  setStateProv,
  postalCode,
  setPostalCode,
  taxId,
  setTaxId,
  billingEmail,
  setBillingEmail,
  onNext,
  onBack,
}: BillingStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] border border-slate-200 p-6 md:p-8">
      <h2 className="text-slate-800 text-xl font-bold   leading-8">Billing details</h2>
      <p className="text-gray-500 text-sm font-normal   leading-5 mt-1.5 mb-6">
        Used for your invoice and tax calculation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Company Legal Name */}
        <div>
          <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
            Company legal name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            required
            value={billingName}
            onChange={(e) => setBillingName(e.target.value)}
            placeholder="Acme Inc."
            className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
          />
        </div>

        {/* Country / Region */}
        <div>
          <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
            Country / region
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="India">India</option>
          </select>
        </div>

        {/* Address Line 1 */}
        <div>
          <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
            Address line 1 <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            required
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            placeholder="123 Market St"
            className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
          />
        </div>

        {/* Address Line 2 */}
        <div>
          <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
            Address line 2 (optional)
          </label>
          <input
            type="text"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            placeholder="Suite 400"
            className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
          />
        </div>

        {/* City, State, Postal Code (3 Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
              City <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="San Francisco"
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
          </div>
          <div>
            <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
              State / Province
            </label>
            <input
              type="text"
              value={stateProv}
              onChange={(e) => setStateProv(e.target.value)}
              placeholder="CA"
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
          </div>
          <div>
            <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
              Postal code <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="94103"
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
          </div>
        </div>

        {/* Tax ID & Billing Email (2 Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
              Tax ID / VAT / GSTIN (optional)
            </label>
            <input
              type="text"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
          </div>
          <div>
            <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
              Billing email (optional)
            </label>
            <input
              type="email"
              value={billingEmail}
              onChange={(e) => setBillingEmail(e.target.value)}
              placeholder="ap@company.com"
              className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
            />
          </div>
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
            Continue to payment
          </button>
        </div>
      </form>
    </div>
  );
}
