"use client";

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
}: {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-left text-xs font-semibold text-slate-700 dark:text-slate-300">
      {label} {required && <span className="text-rose-500">*</span>}

      <input
        {...rest}
        className="
        mt-1.5 w-full rounded-lg border border-slate-200 
        bg-white px-3 py-2.5 text-sm text-slate-700 
        placeholder:text-slate-400 outline-none
        focus:border-[#009D8C] focus:ring-1 focus:ring-[#009D8C]
        dark:border-slate-700 dark:bg-slate-800
        dark:text-white dark:placeholder:text-slate-500
        "
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
    <label className="block text-left text-xs font-semibold text-slate-700 dark:text-slate-300">
      {label}

      <select
        className="
        mt-1.5 w-full rounded-lg border border-slate-200 
        bg-white px-3 py-2.5 text-sm text-slate-500
        outline-none focus:border-[#009D8C]
        dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300
        "
      >
        {children}
      </select>
    </label>
  );
}

export default function ContactSection() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("Sales");

  return (
    <section className="bg-white px-6 py-12 md:px-10 lg:px-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        <div className="
        grid grid-cols-1 gap-8
        lg:grid-cols-[1.3fr_1fr]
        ">

          {/* FORM */}
          <div className="
          overflow-hidden rounded-2xl 
          border border-slate-200 
          bg-white shadow-md
          dark:border-slate-800 dark:bg-slate-900
          ">

            <div className="bg-slate-50 px-6 py-5 text-center dark:bg-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Send Your Inquiry
              </h2>

              <p className="mt-2 text-xs text-[#5A6E87] dark:text-slate-400">
                Complete the form and your request will be routed to the right
                specialist within the appropriate SLA.
              </p>
            </div>


            <div className="
            flex overflow-x-auto border-b border-slate-200
            dark:border-slate-700
            ">
              {TABS.map((tab)=>(
                <button
                key={tab}
                onClick={()=>setActiveTab(tab)}
                className={`
                min-w-24 px-5 py-4 text-sm font-medium
                transition
                ${
                  activeTab===tab
                  ? "border-b-2 border-[#009D8C] text-[#009D8C]"
                  : "text-slate-400 hover:text-slate-700 dark:hover:text-white"
                }
                `}
                >
                  {tab}
                </button>
              ))}
            </div>


            <form className="space-y-6 px-6 py-6">

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field label="First Name" required placeholder="First name"/>
                <Field label="Last Name" required placeholder="Last name"/>
              </div>


              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field 
                label="Work Email"
                required
                type="email"
                placeholder="name@company.com"
                />

                <Field
                label="Company"
                required
                placeholder="Organisation Name"
                />
              </div>


              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Select label="Your Role">
                  <option>Select your role</option>
                  <option>Founder / Executive</option>
                  <option>Manager</option>
                </Select>


                <Select label="Company Size">
                  <option>Number of employees</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>200+</option>
                </Select>
              </div>


              <label className="
              block text-left text-xs font-semibold 
              text-slate-700 dark:text-slate-300
              ">
                What can we help you with?
                <span className="text-rose-500">*</span>

                <textarea
                rows={4}
                placeholder="Tell us what you need..."
                className="
                mt-2 w-full resize-none rounded-lg 
                border border-slate-200 px-3 py-3
                text-sm outline-none
                focus:border-[#009D8C]
                dark:border-slate-700 dark:bg-slate-800
                dark:text-white
                "
                />
              </label>


              <button
              className="
              w-full rounded-lg bg-[#009D8C]
              py-3 text-sm font-semibold
              text-white shadow-lg
              hover:bg-teal-700
              "
              >
                Send Inquiry — Routed Automatically →
              </button>


              <div className="flex gap-2 items-start">
                <img src="/contact/lock.png" className="h-3 w-3"/>
                <p className="text-xs text-slate-400">
                  Your data is handled under ZoikoTime's Privacy Policy.
                  Encrypted in transit.
                </p>
              </div>

            </form>
          </div>



          {/* RIGHT SIDE */}

          <div className="space-y-5">


            <div className="
            flex justify-center rounded-2xl 
            border border-slate-200 py-8
            dark:border-slate-800
            ">
              <img src="/logo.png" alt="logo"/>
            </div>



            <div className="
            overflow-hidden rounded-2xl 
            bg-slate-900 shadow-md
            ">

              <div className="flex justify-between px-5 py-4">
                <span className="text-sm font-semibold text-white">
                  Connect Instantly
                </span>

                <span className="text-xs text-emerald-400">
                  ● Available
                </span>
              </div>


              <ul className="bg-white dark:bg-slate-900">

              {CHANNELS.map((c)=>(
                <li
                key={c.title}
                className="
                flex justify-between gap-3
                border-t border-slate-200
                px-5 py-4
                hover:bg-slate-50
                dark:border-slate-700
                dark:hover:bg-slate-800
                "
                >

                  <div className="flex gap-3">
                    <img src={c.src}/>

                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {c.title}
                      </p>

                      {c.lines.map(line=>(
                        <p key={line} className="text-xs text-slate-500">
                          {line}
                        </p>
                      ))}

                    </div>
                  </div>

                  <span>›</span>

                </li>
              ))}

              </ul>

            </div>



            <div className="
            rounded-2xl border border-slate-200 
            p-5 dark:border-slate-800
            ">

              <h3 className="text-xs font-semibold uppercase text-slate-400">
                Enterprise Engagement Options
              </h3>


              <div className="mt-4 space-y-3">

              {ENGAGEMENT_OPTIONS.map(opt=>(
                <div
                key={opt.title}
                className="
                flex items-center gap-3
                rounded-lg border border-slate-200
                px-3 py-3 text-sm
                dark:border-slate-700
                "
                >
                  <img src={opt.src}/>
                  <span className="dark:text-white">
                    {opt.title}
                  </span>
                </div>
              ))}

              </div>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
}