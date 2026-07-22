"use client";

import Link from "next/link";
import { Check, ShieldCheck, Scale, Calendar } from "lucide-react";

export default function ComplianceReview() {
  return (
    <section
    id="schedule-enterprise"
     className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-8">

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div className="flex-1">

          {/* Label */}

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Enterprise Deployment Review
          </p>

          {/* Heading */}

          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Schedule a{" "}
            <span className="text-teal-600">
              Compliance Architecture Review
            </span>{" "}
            for ZoikoTime Enterprise
          </h2>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Get a structured review of your workforce governance,
            evidence, security, data residency, and deployment
            requirements before you request final commercial terms.
          </p>

          {/* Highlight Box */}

          <div className="mt-8 rounded-r-xl border-l-4 border-emerald-200 bg-gray-50 p-5 dark:border-emerald-600 dark:bg-slate-800">
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              A consultative, evidence-led session — the front door
              to a serious procurement and compliance evaluation,
              not a marketing call.
            </p>
          </div>

          {/* Action Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/schedule-compliance-architecture#schedule-enterprise"
              className="flex h-12 items-center justify-center rounded-lg bg-teal-600 px-8 text-sm font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
            >
              Schedule Review
            </Link>

            <Link
              href="/enterprise-approval-pack"
              className="flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-8 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Send Me the Approval Pack First
            </Link>

          </div>

          {/* Feature Pills */}

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Check className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Evidence integrity
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <ShieldCheck className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Jurisdiction-aware
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Scale className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Procurement-ready
              </span>
            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* RIGHT FORM CARD (Part 2 starts here) */}
        {/* ================================================= */}

        <div className="w-full lg:max-w-[470px]">

                      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Request a Compliance Review
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Complete the details below and our enterprise team will contact you.
            </p>

            <form className="mt-8 space-y-6">

              {/* Row 1 */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Full Name
                    <span className="text-teal-600">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="John Smith"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Company Email
                    <span className="text-teal-600">*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

              </div>

              {/* Row 2 */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Company
                    <span className="text-teal-600">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Job Title
                  </label>

                  <input
                    type="text"
                    placeholder="Security Director"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

              </div>

              {/* Organization Size */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                  Organization Size
                </label>

                <select className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                  <option>Select organization size</option>
                  <option>1–100 Employees</option>
                  <option>101–500 Employees</option>
                  <option>501–1,000 Employees</option>
                  <option>1,000+ Employees</option>
                </select>
              </div>

              {/* Compliance Interests */}

              <div>

                <label className="mb-3 block text-sm font-semibold text-slate-900 dark:text-white">
                  Areas of Interest
                </label>

                <div className="grid gap-3 sm:grid-cols-2">

                  {[
                    "Audit Evidence",
                    "Security Review",
                    "Data Residency",
                    "Compliance",
                    "Enterprise Rollout",
                    "Procurement",
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

              {/* Part 3 starts below */}

                            {/* Preferred Review Date */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                  Preferred Review Date
                </label>

                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    type="date"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>

              {/* Additional Notes */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                  Additional Requirements
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your deployment, governance requirements, security expectations, procurement process, or any specific questions..."
                  className="w-full rounded-lg border border-slate-300 bg-white p-4 text-sm outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              {/* Action Buttons */}

              <div className="flex flex-col gap-4 sm:flex-row">

                <button
                  type="submit"
                  className="flex h-12 flex-1 items-center justify-center rounded-lg bg-teal-600 px-6 text-sm font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
                >
                  Schedule Compliance Review
                </button>

                <Link
                  href="/contact-sales"
                  className="flex h-12 flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Contact Sales
                </Link>

              </div>

              {/* Privacy Notice */}

              <p className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
                By submitting this request, you agree to our{" "}
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