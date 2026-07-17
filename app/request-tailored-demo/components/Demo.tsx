"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const interests = [
  "Remote workforce governance",
  "Payroll evidence",
  "Compliance visibility",
  "Audit-ready records",
  "Multi-country teams",
];

export default function Demo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-16 transition-colors dark:from-slate-950 dark:to-slate-900 sm:px-6 lg:px-10 lg:py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-96 w-[760px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1fr_470px] lg:gap-16">
        {/* Left Content */}
        <div className="pt-2 lg:pt-0">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Tailored Enterprise Demo
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-5xl sm:leading-[1.12]">
            See how ZoikoTime fits your
            <br className="hidden sm:block" /> workforce, policies, and{" "}
            <br className="hidden sm:block" />
            <span className="text-teal-600">growth model</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 dark:text-slate-400">
            Request a guided demo shaped around your use case, industry,
            operating countries, compliance priorities, and rollout goals — not
            a generic product walkthrough.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("demo-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-[10px] bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
            >
              Request Tailored Demo
            </button>

            <Link
              href="/calculate-your-roi/"
              className="rounded-[10px] border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Calculate Your ROI
            </Link>
          </div>

          {/* Interest Tags */}
          <div className="mt-8 flex max-w-2xl flex-wrap gap-3">
            {interests.map((interest) => (
              <div
                key={interest}
                className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <CheckCircle2 className="h-4 w-4 text-teal-600" />
                {interest}
              </div>
            ))}
          </div>

          {/* Response Text */}
          <p className="mt-8 text-sm leading-6 text-gray-500 dark:text-slate-400">
            <span className="font-semibold text-slate-800 dark:text-white">
              Typical response within one business day.
            </span>{" "}
            No generic walkthroughs — your session is tailored before it starts.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/20 sm:p-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Request your tailored demo
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
            Three quick steps so we can shape the session.
          </p>

          {/* Steps */}
          <div className="mt-8 flex items-center justify-between">
            <Step number="1" label="Contact" active />

            <div className="h-0.5 flex-1 bg-gray-300 dark:bg-slate-600" />

            <Step number="2" label="Organization" />

            <div className="h-0.5 flex-1 bg-gray-300 dark:bg-slate-600" />

            <Step number="3" label="Priorities" />
          </div>

          {/* Form */}
          <form id="demo-form" className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Work Email"
                required
                placeholder="you@company.com"
              />

              <Input
                label="Full Name"
                required
                placeholder="Jordan Avery"
              />

              <Input
                label="Job Title"
                required
                placeholder="VP of Operations"
              />

              <Input
                label="Phone Number"
                optional
                placeholder="+1 555 000 0000"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-[10px] bg-teal-600 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  label,
  active = false,
}: {
  number: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs font-semibold ${
          active
            ? "border-teal-600 bg-teal-600 text-white"
            : "border-gray-300 bg-white text-gray-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400"
        }`}
      >
        {number}
      </div>

      <span
        className={`hidden text-sm font-medium sm:block ${
          active
            ? "text-slate-800 dark:text-white"
            : "text-gray-500 dark:text-slate-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Input({
  label,
  placeholder,
  required,
  optional,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
        {label}{" "}
        {required && <span className="text-teal-600">*</span>}
        {optional && (
          <span className="ml-1 text-xs font-normal text-gray-500 dark:text-slate-400">
            (optional)
          </span>
        )}
      </span>

      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-[10px] border border-gray-300 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
      />
    </label>
  );
}