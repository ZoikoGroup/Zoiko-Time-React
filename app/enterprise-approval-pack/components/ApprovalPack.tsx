"use client";

import Link from "next/link";
import { useState } from "react";

export default function ApprovalPack() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-12 transition-colors dark:from-slate-950 dark:to-slate-900 sm:px-6 lg:px-10 lg:py-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[760px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_470px] lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
              Enterprise Approval Resource
            </p>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-5xl lg:text-[48px] lg:leading-[1.1]">
              Give your buying committee the evidence to approve ZoikoTime{" "}
              <span className="text-teal-600">faster</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-500 dark:text-slate-400">
              Access a structured approval pack covering ROI, security posture,
              privacy safeguards, technical architecture, procurement questions,
              and legal review materials — built to support enterprise
              evaluation with clarity, discipline, and credibility.
            </p>

            <div className="mt-8 rounded-r-[10px] border-l-[3px] border-emerald-200 bg-gray-50 px-5 py-3 dark:border-emerald-700 dark:bg-slate-800/60">
              <p className="text-sm leading-6 text-gray-500 dark:text-slate-400">
                Enterprise teams do not need another brochure. They need proof
                they can circulate.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#approval-form"
                className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-teal-600 px-6 text-center text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
              >
                Get the Enterprise Approval Pack
              </a>

              <a
                href="#approval-form"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-[10px] border border-gray-300 bg-white px-6 text-center text-sm font-semibold text-slate-800 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 sm:w-72"
              >
                Book an Enterprise Approval call
              </a>
            </div>

            <div className="mt-7 inline-flex max-w-full items-center gap-3 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-sm dark:border-emerald-900/60 dark:bg-slate-800">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-teal-600">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              </span>

              <span className="text-xs font-medium text-slate-800 dark:text-slate-300">
                For CFO, CISO, Legal, Procurement, IT & Executive Sponsor review
              </span>
            </div>
          </div>

          {/* FORM */}
          <div
            id="approval-form"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-800 sm:p-8"
          >
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Get the Enterprise Approval Pack
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-slate-400">
              Tell us who is reviewing ZoikoTime so we can send the most
              relevant approval materials.
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <Field label="Work Email" required>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="input"
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Avery"
                    className="input"
                  />
                </Field>

                <Field label="Company Name" required>
                  <input
                    type="text"
                    required
                    placeholder="Acme Global"
                    className="input"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Role" required>
                  <select required className="input">
                    <option value="">Select role</option>
                    <option>CFO</option>
                    <option>CISO</option>
                    <option>Legal</option>
                    <option>Procurement</option>
                    <option>IT</option>
                    <option>Executive Sponsor</option>
                    <option>Other</option>
                  </select>
                </Field>

                <Field label="Organization Size" required>
                  <select required className="input">
                    <option value="">Select range</option>
                    <option>1–50</option>
                    <option>51–200</option>
                    <option>201–500</option>
                    <option>501–1,000</option>
                    <option>1,000+</option>
                  </select>
                </Field>
              </div>

              <Field label="Primary Review Area" required>
                <select required className="input">
                  <option value="">Select area</option>
                  <option>ROI & Business Case</option>
                  <option>Security</option>
                  <option>Privacy</option>
                  <option>Technical Architecture</option>
                  <option>Procurement</option>
                  <option>Legal</option>
                </select>
              </Field>

              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-teal-600"
                />

                <span className="text-sm leading-5 text-gray-700 dark:text-slate-300">
                  I agree that ZoikoTime may contact me about enterprise
                  evaluation.
                  <span className="text-teal-600"> *</span>
                </span>
              </label>

              <div className="rounded-[10px] bg-gray-50 p-3 dark:bg-slate-900/70">
                <p className="text-xs leading-4 text-gray-500 dark:text-slate-400">
                  Your information is used to respond to your request and
                  support your evaluation. By submitting, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-teal-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    className="font-medium text-teal-600 hover:underline"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>

              <button
                type="submit"
                className="min-h-11 w-full rounded-[10px] bg-teal-600 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
              >
                Get the Enterprise Approval Pack
              </button>

              {submitted && (
                <p className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Thank you! Your request has been submitted.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          min-height: 48px;
          border-radius: 10px;
          border: 1px solid rgb(209 213 219);
          background: white;
          padding: 0 15px;
          font-size: 16px;
          color: rgb(51 65 85);
          outline: none;
        }

        .input:focus {
          border-color: rgb(13 148 136);
          box-shadow: 0 0 0 2px rgb(13 148 136 / 0.15);
        }

        @media (prefers-color-scheme: dark) {
          .input {
            border-color: rgb(71 85 105);
            background: rgb(30 41 59);
            color: white;
          }

          .input::placeholder {
            color: rgb(148 163 184);
          }
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
        {label}
        {required && <span className="ml-1 text-teal-600">*</span>}
      </label>

      {children}
    </div>
  );
}