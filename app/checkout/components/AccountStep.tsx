"use client";

import React from "react";

interface AccountStepProps {
  accountType: "new" | "existing";
  setAccountType: (type: "new" | "existing") => void;
  fullName: string;
  setFullName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  confirmPassword: string;
  setConfirmPassword: (val: string) => void;
  orgName: string;
  setOrgName: (val: string) => void;
  teamSize: string;
  setTeamSize: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
  onNext: () => void;
}

export default function AccountStep({
  accountType,
  setAccountType,
  fullName,
  setFullName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  orgName,
  setOrgName,
  teamSize,
  setTeamSize,
  phone,
  setPhone,
  onNext,
}: AccountStepProps) {
  const isNew = accountType === "new";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] border border-slate-200 p-6 md:p-8">
      <h2 className="text-slate-800 text-xl font-bold   leading-8">Your account</h2>
      <p className="text-gray-500 text-sm font-normal   leading-5 mt-1.5 mb-6">
        Sign in or create an account to continue to payment.
      </p>

      {/* Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Tab: New to ZoikoTime */}
        <button
          type="button"
          onClick={() => setAccountType("new")}
          className={`flex items-start p-4 rounded-xl border text-left transition-all ${
            isNew
              ? "bg-emerald-50/50 border-emerald-400 ring-1 ring-emerald-400"
              : "bg-white border-slate-200 hover:border-slate-300"
          }`}
        >
          {/* Radio indicator */}
          <div className="mt-1 mr-3 shrink-0">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                isNew ? "border-emerald-400" : "border-slate-300"
              }`}
            >
              {isNew && <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />}
            </div>
          </div>
          <div>
            <h4 className="text-slate-800 text-sm font-bold  ">New to ZoikoTime</h4>
            <p className="text-gray-500 text-xs font-normal   mt-0.5">
              Create an account &amp; workspace
            </p>
          </div>
        </button>

        {/* Tab: I already have an account */}
        <button
          type="button"
          onClick={() => setAccountType("existing")}
          className={`flex items-start p-4 rounded-xl border text-left transition-all ${
            !isNew
              ? "bg-emerald-50/50 border-emerald-400 ring-1 ring-emerald-400"
              : "bg-white border-slate-200 hover:border-slate-300"
          }`}
        >
          {/* Radio indicator */}
          <div className="mt-1 mr-3 shrink-0">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                !isNew ? "border-emerald-400" : "border-slate-300"
              }`}
            >
              {!isNew && <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />}
            </div>
          </div>
          <div>
            <h4 className="text-slate-800 text-sm font-bold  ">I already have an account</h4>
            <p className="text-gray-500 text-xs font-normal   mt-0.5">
              Log in &amp; add this to your organization
            </p>
          </div>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {isNew ? (
          /* NEW ACCOUNT FORM FIELDS */
          <>
            {/* Full Name */}
            <div>
              <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                Full name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Alex Kim"
                className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
              />
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                Work email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
              />
            </div>

            {/* Passwords (Side by side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                  Create password <span className="text-red-700">*</span>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
                />
              </div>
              <div>
                <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                  Confirm password <span className="text-red-700">*</span>
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
                />
              </div>
            </div>

            {/* Organization Name */}
            <div>
              <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                Organization name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                required
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Acme Inc."
                className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
              />
            </div>

            {/* Team size & Phone (Side by side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                  Team size
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
                >
                  <option value="1–10">1–10</option>
                  <option value="11–50">11–50</option>
                  <option value="51–250">51–250</option>
                  <option value="250+">250+</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder=""
                  className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
                />
              </div>
            </div>
          </>
        ) : (
          /* EXISTING ACCOUNT LOG IN FIELDS */
          <>
            {/* Emerald Alert Box */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-[10px] p-4 text-xs   leading-5">
              <span className="text-emerald-500 font-bold">Adding to your existing organization.</span>{" "}
              <span className="text-slate-800 font-normal">
                We’ll attach this to your current workspace — your data, users, and settings are preserved. No duplicate tenant is created.
              </span>
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                Work email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                Password <span className="text-red-700">*</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
              />
            </div>

            {/* Organization (optional) */}
            <div>
              <label className="block text-slate-800 text-xs font-semibold   mb-1.5">
                Organization (optional)
              </label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Leave blank to use your default"
                className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-[10px] text-sm text-slate-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors  "
              />
            </div>
          </>
        )}

        {/* Form Action */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="w-full md:w-auto min-w-[176px] h-12 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-bold   rounded-[10px] transition-colors shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
          >
            Continue to seats
          </button>
        </div>
      </form>
    </div>
  );
}
