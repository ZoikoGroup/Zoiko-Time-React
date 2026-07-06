"use client"
import React, { useState } from "react";

const TABS = ["Sales", "Technical", "Support", "Legal"] as const;

const CHANNELS = [
  {
    src: "/contact/cal.png",
    title: "Book a Call",
    lines: ["Select a time in your calendar", "Instant scheduling, timezone-aware"],
  },
  {
    src: "/contact/sms.png",
    title: "Live Chat",
    lines: ["Real-time support", "available Mon–Fri 08:00–20:00 GMT"],
  },
  {
    src: "/contact/call.png",
    title: "Immediate Callback",
    lines: ["Leave your number", "we call you within 15 minutes (Enterprise clients)"],
  },
];

const ENGAGEMENT_OPTIONS = [
  { src: "/contact/read.png", title: "Request Executive Briefing" },
  { src: "/contact/discuss.png", title: "Procurement Discussion" },
  { src: "/contact/arc.png", title: "Architecture Review" },
  { src: "/contact/weigh.png", title: "Compliance Consultation" },
];

function Field({
  label,
  required,
  ...rest
}: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-left text-xs font-semibold text-slate-700">
      {label} {required && <span className="text-rose-500">*</span>}
      <input
        {...rest}
        className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-emerald-500"
      />
    </label>
  );
}

function Select({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-left text-xs font-semibold text-slate-700">
      {label}
      <select className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-500 outline-none focus:border-emerald-500">
        {children}
      </select>
    </label>
  );
}

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Sales");

  return (
    <section className="bg-white px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-6 bg-white px-4 py-10 md:grid-cols-[1.3fr_1fr] md:px-10">
          {/* Left: form card */}
          <div className="overflow-hidden rounded-2xl shadow-[0_4px_10px_#0D152614] border border-slate-200">
            <div className="bg-slate-50 px-6 py-5 text-center">
              <h2 className="text-lg font-bold text-slate-900">Send Your Inquiry</h2>
              <p className="mx-auto mt-1 max-w-90 text-xs text-[#5A6E87]">
                Complete the form and your request will be routed to the right
                specialist within the appropriate SLA.
              </p>
            </div>

            <div className="flex gap-6 border-b justify-between border-slate-200 text-sm font-medium text-slate-400">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 pt-4 md:min-w-30 ${activeTab === tab
                    ? "border-b-2 border-emerald-600 text-emerald-600"
                    : "hover:text-slate-600"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <form className="space-y-10 px-6 py-5">
              <div className="grid grid-cols-2 gap-4">
                <Field label="First Name" required placeholder="First name" />
                <Field label="Last Name" required placeholder="Last name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Work Email" required type="email" placeholder="name@company.com" />
                <Field label="Company" required placeholder="Organisation Name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select label="Your Role">
                  <option>Select your role</option>
                  <option>Founder / Executive</option>
                  <option>Manager</option>
                  <option>Individual Contributor</option>
                </Select>
                <Select label="Company Size">
                  <option>Number of employees</option>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>200+</option>
                </Select>
              </div>

              <label className="block text-left text-xs font-semibold text-slate-700">
                What can we help you with? <span className="text-rose-500">*</span>
                <textarea
                  rows={3}
                  placeholder="Tell us what you need — our routing system will ensure this reaches the right team…"
                  className="mt-1.5 w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-700"
                />
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-1 rounded-lg shadow-[0_4px_10px_#009D8C47] bg-[#009D8C] py-3 text-sm font-semibold text-white cursor-pointer transition-colors hover:bg-teal-700"
              >
                Send Inquiry — Routed Automatically <span aria-hidden>→</span>
              </button>

              <div className="flex gap-[2px] items-start">
                <img src="/contact/lock.png" alt="image" height={10} width={10} />
                <p className="text-center text-[11px] text-slate-400">
                  Your data is handled under ZoikoTime's Privacy Policy. Minimum
                  collection only. Encrypted in transit.
                </p>
              </div>
            </form>
          </div>

          {/* Right: brand + communication hub */}
          <div className="space-y-4">
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 py-6">
              <div className="text-center">
                <img src="logo.png" alt="image" />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-[0_4px_10px_#0D152614] bg-slate-900">
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-semibold text-white">
                  Connect Instantly
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>
              <ul className="bg-white">
                {CHANNELS.map((c) => (
                  <li
                    key={c.title}
                    className="flex cursor-pointer items-start justify-between gap-3 border-t border-white/10 px-5 py-4 hover:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <img src={c.src} alt="image" />
                      <div>
                        <p className="text-sm font-semibold text-[#0D1526]">{c.title}</p>
                        {c.lines.map((line) => (
                          <p key={line} className="text-xs text-[#5A6E87]">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                    <span className="mt-1 text-slate-500" aria-hidden>
                      ›
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Enterprise Engagement Options
              </h3>
              <ul className="mt-3 space-y-2">
                {ENGAGEMENT_OPTIONS.map((opt) => (
                  <li
                    key={opt.title}
                    className="flex items-center gap-3 rounded-lg rounded-[6px] border border-[#E4EBF4] px-3 py-2.5 text-sm text-slate-700"
                  >
                    <img src={opt.src} alt="Image" />
                    <span className="flex items-center justify-center rounded-md bg-white text-sm shadow-sm">
                      {opt.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
