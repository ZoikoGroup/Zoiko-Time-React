"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  ShieldCheck,
  Calculator,
  Globe,
} from "lucide-react";

export default function CustomQuote() {
  return (
    <section
    id="your-custom-quote"
     className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-8 xl:px-10">

        {/* ========================================================= */}
        {/* LEFT CONTENT */}
        {/* ========================================================= */}

        <div className="flex-1">

          {/* Label */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Custom Quote
          </p>

          {/* Heading */}
          <h2 className="max-w-2xl text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            See Your Custom{" "}
            <span className="text-teal-600">ZoikoTime</span> Quote
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Get a pricing recommendation built around your workforce size,
            countries, governance requirements, rollout path, and approval
            process—not a generic per-seat estimate.
          </p>

          {/* Information Card */}

          <div className="mt-8 rounded-xl border-l-4 border-emerald-300 bg-emerald-50 p-5 dark:border-emerald-600 dark:bg-slate-800">

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              No surveillance. No screenshots. No keystroke content.
              No URL history. ZoikoTime is designed for workforce
              assurance—not invasive monitoring.
            </p>

          </div>

          {/* Feature Pills */}

          <div className="mt-8 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Calculator
                size={16}
                className="text-teal-600"
              />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Pricing tailored
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <ShieldCheck
                size={16}
                className="text-teal-600"
              />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Governance-aware
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <CheckCircle
                size={16}
                className="text-teal-600"
              />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                No surveillance
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Globe
                size={16}
                className="text-teal-600"
              />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Sales-ready estimate
              </span>
            </div>

          </div>

          {/* ========================================================= */}
          {/* Calculator Snapshot */}
          {/* ========================================================= */}

          <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Your calculator snapshot
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Carried over from your pricing estimate
            </p>

            {/* Stats */}

            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <div className="rounded-xl bg-white p-6 text-center dark:bg-slate-800">
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                  500
                </h4>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Workers
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 text-center dark:bg-slate-800">
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                  $35/hr
                </h4>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Avg labor cost
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 text-center dark:bg-slate-800">
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                  ~3.0%
                </h4>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Est. leakage
                </p>
              </div>

            </div>

            {/* Note */}

            <div className="mt-8 rounded-xl bg-white p-5 dark:bg-slate-800">
              <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                Your calculator values are planning estimates based on your
                inputs. Final pricing and ROI assumptions are confirmed during
                discovery.
              </p>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* RIGHT FORM CARD (Part 2 starts here) */}
        {/* ========================================================= */}

                  

        <div className="w-full lg:max-w-[470px]">

                      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Request your custom quote
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Takes less than 3 minutes.
            </p>

            {/* Progress */}

            <div className="mt-8 flex items-center justify-center">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">
                  1
                </div>

                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Essentials
                </span>

              </div>

              <div className="mx-5 h-px w-12 bg-slate-300 dark:bg-slate-700" />

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 text-sm font-semibold text-slate-500 dark:border-slate-600 dark:text-slate-400">
                  2
                </div>

                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Accuracy
                </span>

              </div>

            </div>

            {/* Form */}

            <form className="mt-10 space-y-6">

              {/* Row */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Company Work Email
                    <span className="text-teal-600">*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Company Name
                    <span className="text-teal-600">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Acme Global"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                </div>

              </div>

              {/* Row */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Your Role
                    <span className="text-teal-600">*</span>
                  </label>

                  <select className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white">

                    <option>Select role</option>

                    <option>HR Leader</option>

                    <option>IT</option>

                    <option>Finance</option>

                    <option>Operations</option>

                  </select>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Number of Workers
                    <span className="text-teal-600">*</span>
                  </label>

                  <select className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white">

                    <option>Select range</option>

                    <option>1-100</option>

                    <option>101-500</option>

                    <option>501-1000</option>

                    <option>1000+</option>

                  </select>

                </div>

              </div>

              {/* Countries */}

              <div>

                <label className="mb-4 block text-sm font-semibold text-slate-900 dark:text-white">
                  Countries Where Workers Operate
                  <span className="text-teal-600">*</span>
                </label>

                <div className="flex flex-wrap gap-3">

                  {[
                    "United States",
                    "United Kingdom",
                    "European Union",
                    "Asia-Pacific",
                    "Middle East",
                    "Latin America",
                    "Africa",
                  ].map((country) => (
                    <label
                      key={country}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                    >
                      <input type="checkbox" />
                      <span className="text-slate-700 dark:text-slate-300">
                        {country}
                      </span>
                    </label>
                  ))}

                </div>

              </div>

              {/* Part 3 starts below */}
                            {/* Governance Requirements */}

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-900 dark:text-white">
                  Governance Requirements
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "SOC 2",
                    "ISO 27001",
                    "GDPR",
                    "HIPAA",
                    "DPA Required",
                    "Custom Security Review",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-800"
                    >
                      <input type="checkbox" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                  Additional Notes
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your workforce, rollout plans, security requirements, procurement process, or anything else..."
                  className="w-full rounded-lg border border-slate-300 bg-white p-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              {/* Buttons */}

              <div className="flex flex-col gap-4 sm:flex-row">

                <button
                  type="submit"
                  className="flex h-12 flex-1 items-center justify-center rounded-lg bg-teal-600 px-6 font-semibold text-white shadow-md transition hover:bg-teal-700"
                >
                  Request Custom Quote
                </button>

                <Link
                  href="/contact-sales"
                  className="flex h-12 flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Contact Sales
                </Link>

              </div>

              {/* Privacy Note */}

              <p className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
                By submitting this form, you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-teal-600 hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms-of-service"
                  className="font-medium text-teal-600 hover:underline"
                >
                  Terms of Service
                </Link>
                .
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}