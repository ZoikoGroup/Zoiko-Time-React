"use client";
import Link from "next/link";

import React, { useState } from "react";

export default function Hero() {

      const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    role: "",
    industry: "",
    agree: false,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.name ||
      !formData.company ||
      !formData.role ||
      !formData.industry ||
      !formData.agree
    ) {
      setMessage("Please fill all required information");
      return;
    }


    setMessage("Your submission was successful");

    // Here later you can add PDF download logic



  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-[#0B1120] dark:to-[#111827] py-16 lg:py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-180px] h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:px-12 xl:px-20">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Trust &amp; Governance Asset
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Download the ZoikoTime
            <br />
            <span className="text-teal-600">
              Regulator Brief
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-300">
            Give your legal, compliance, procurement, IT, HR, and finance
            teams a clear view of how ZoikoTime supports workforce
            governance, audit-ready time evidence, policy consistency,
            and privacy-respecting accountability without invasive
            surveillance.
          </p>

          {/* Highlight Box */}
          <div className="mt-10 rounded-r-xl border-l-[3px] border-emerald-200 bg-gray-50 p-5 dark:border-teal-500 dark:bg-slate-800">

            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
              Built for regulated organizations, distributed teams,
              and client-billable workforces that need credible
              workforce records before a dispute, audit,
              procurement review, or board decision.
            </p>
          </div>

          
           {/* CTA Buttons */}
<div className="mt-10 flex flex-col gap-4 sm:flex-row">

  <button
  type="button"
  onClick={() => {
    document
      .getElementById("regulator-brief-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="rounded-xl bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-teal-700"
>
  Download Regulator Brief
</button>

  <Link
  href="/request-a-demo"
  className="rounded-xl border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-slate-800 transition hover:bg-gray-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
>
  Request Governance Demo
</Link>

</div>

          {/* Feature Chips */}
          <div className="mt-10 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <svg
                className="h-4 w-4 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-sm font-medium text-slate-800 dark:text-gray-200">
                No surveillance
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <svg
                className="h-4 w-4 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-sm font-medium text-slate-800 dark:text-gray-200">
                Audit-ready evidence
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <svg
                className="h-4 w-4 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-sm font-medium text-slate-800 dark:text-gray-200">
                Privacy-respecting
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT FORM CARD */}
        
<div
  id="regulator-brief-form"
  className="w-full lg:w-[470px]"
>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Get the Regulator Brief
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
              A due-diligence-ready overview of ZoikoTime's governance
              posture and privacy boundaries.
            </p>

            <form 
onSubmit={handleSubmit}
className="mt-8 space-y-6"
>

                              {/* Work Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-white">
                  Work Email <span className="text-teal-600">*</span>
                </label>

                <input
 name="email"
 value={formData.email}
 onChange={handleChange}
 type="email"
 placeholder="you@company.com"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-slate-800 placeholder:text-gray-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:focus:ring-teal-800"
                />
              </div>

              {/* Name & Company */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-white">
                    Full Name <span className="text-teal-600">*</span>
                  </label>

                  <input
name="name"
value={formData.name}
onChange={handleChange}
type="text"
placeholder="Jordan Avery"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-slate-800 placeholder:text-gray-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:focus:ring-teal-800"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-white">
                    Company Name <span className="text-teal-600">*</span>
                  </label>

                  <input
name="company"
value={formData.company}
onChange={handleChange}
type="text"
placeholder="Acme Global"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-slate-800 placeholder:text-gray-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:focus:ring-teal-800"
                  />
                </div>

              </div>

              {/* Role & Industry */}
<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-white">
      Your Role <span className="text-teal-600">*</span>
    </label>

    <select
name="role"
value={formData.role}
onChange={handleChange}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-teal-800"
    >
      <option value="" disabled>
        Select role
      </option>
      <option value="CFO / Finance">CFO / Finance</option>
      <option value="CISO / Security">CISO / Security</option>
      <option value="Legal">Legal</option>
      <option value="Procurement">Procurement</option>
      <option value="IT">IT</option>
      <option value="Executive Sponsor">Executive Sponsor</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-white">
      Industry <span className="text-teal-600">*</span>
    </label>

    <select
name="industry"
value={formData.industry}
onChange={handleChange}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-teal-800"
    >
      <option value="" disabled>
        Select industry
      </option>
      <option value="Financial Services">Financial Services</option>
      <option value="Healthcare">Healthcare</option>
      <option value="Government">Government</option>
      <option value="BPO">BPO</option>
      <option value="Professional Services">Professional Services</option>
      <option value="Technology">Technology</option>
      <option value="Other">Other</option>
    </select>
  </div>

</div>

              {/* Agreement */}
              <div className="flex items-start gap-3">

                <input
id="agree"
name="agree"
checked={formData.agree}
onChange={handleChange}
type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-400 text-teal-600 focus:ring-teal-600"
                />

                <label
                  htmlFor="agree"
                  className="text-sm leading-6 text-gray-700 dark:text-gray-300"
                >
                  I agree that ZoikoTime may contact me about
                  governance evaluation.
                  <span className="text-teal-600"> *</span>
                </label>

              </div>

                            {/* Privacy Notice */}
              <div className="rounded-xl bg-gray-50 p-4 dark:bg-slate-800">
                <p className="text-xs leading-6 text-gray-600 dark:text-gray-300">
                  Your information is used to respond to your request and
                  support your evaluation. By submitting, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-teal-600 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/terms-of-service"
                    className="font-medium text-teal-600 hover:underline"
                  >
                    Terms of Service
                  </a>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button
type="submit"
className="w-full rounded-xl bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-teal-700"
>
 Download Regulator Brief
</button>


{message && (
<p
className={`text-center text-sm font-semibold ${
message.includes("successful")
? "text-green-600"
: "text-red-600"
}`}
>
{message}
</p>
)}

                          </form>

          </div>
        </div>

      </div>
    </section>
  );
}