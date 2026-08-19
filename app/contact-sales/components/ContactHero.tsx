import React from "react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section
      id="sales-query-and-help"
      className="w-full overflow-hidden bg-gradient-to-br from-[#7CCBC4] via-[#38B7B1] to-[#10AAA7] dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[900px] items-center gap-14 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-10">

          {/* ================= LEFT SIDE ================= */}

          <div className="flex flex-col justify-center">

            {/* Hero Image */}
            <img
              src="/ContactHero1/contact.png"
              alt="Contact Hero"
              className="
                mx-auto
                w-full
                max-w-[650px]
                select-none
                object-contain
                pointer-events-none
                lg:mx-0
              "
            />

            {/* Badge */}
            <div className="mt-8">
              <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[12px] font-semibold uppercase tracking-[2px] text-[#12A9A5] shadow">
                Sales &amp; Enterprise Inquiry
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-8
                max-w-[560px]
                text-4xl
                font-bold
                leading-tight
                text-white
                md:text-5xl
                lg:text-[60px]
              "
            >
              Talk to ZoikoTime Sales
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[560px]
                text-lg
                leading-9
                text-white/80
              "
            >
              Speak with ZoikoTime about product fit, pricing, demos,
              implementation, security review, procurement, and enterprise
              readiness.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5 text-white/85">

              <div className="flex gap-4">
                <span className="text-xl">✓</span>

                <p className="leading-7">
                  Guidance for self-service, team, professional services, and
                  enterprise deployments
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">✓</span>

                <p className="leading-7">
                  Support for HR, legal, operations, finance, payroll, IT, and
                  executive stakeholders
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">✓</span>

                <p className="leading-7">
                  Assistance with implementation planning, security review, and
                  procurement
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">✓</span>

                <p className="leading-7">
                  Typical response time: 1–2 business days
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex w-full justify-center lg:justify-end">
            <div className="w-full max-w-[480px] rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:border-slate-700 dark:bg-slate-900 lg:p-8">

              {/* Heading */}
              <h2 className="text-[22px] font-bold text-slate-900 dark:text-white">
                Tell us how we can help
              </h2>

              {/* Description */}
              <p className="mt-3 text-[15px] leading-8 text-slate-500 dark:text-slate-300">
                Complete the form and the ZoikoTime team will route your
                inquiry to the right sales, implementation, or enterprise
                contact.
              </p>

              <form className="mt-8 space-y-6">

                {/* First & Last Name */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                      First Name *
                    </label>

                    <input
                      type="text"
                      placeholder="First name"
                      className="h-[46px] w-full rounded-lg border border-slate-300 bg-white px-4 text-[15px] outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                      Last Name *
                    </label>

                    <input
                      type="text"
                      placeholder="Last name"
                      className="h-[46px] w-full rounded-lg border border-slate-300 bg-white px-4 text-[15px] outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800"
                    />
                  </div>

                </div>

                {/* Work Email */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                    Work Email *
                  </label>

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="h-[46px] w-full rounded-lg border border-slate-300 bg-white px-4 text-[15px] outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                    Company Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Your organization"
                    className="h-[46px] w-full rounded-lg border border-slate-300 bg-white px-4 text-[15px] outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800"
                  />
                </div>

                {/* Company Size & Country */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                      Company Size *
                    </label>

                    <select
                      className="h-[46px] w-full rounded-lg border border-slate-200 bg-slate-100 px-4 text-[15px] text-slate-700 outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    >
                      <option>Select...</option>
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>201–1000</option>
                      <option>1000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                      Country / Region *
                    </label>

                    <select
                      className="h-[46px] w-full rounded-lg border border-slate-200 bg-slate-100 px-4 text-[15px] text-slate-700 outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    >
                      <option>Select...</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>

                </div>

                {/* Inquiry */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                    What Best Describes Your Inquiry? *
                  </label>

                  <select
                    className="h-[46px] w-full rounded-lg border border-slate-200 bg-slate-100 px-4 text-[15px] text-slate-700 outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  >
                    <option>Select...</option>
                    <option>Sales</option>
                    <option>Demo</option>
                    <option>Pricing</option>
                    <option>Enterprise</option>
                    <option>Implementation</option>
                  </select>
                </div>

                {/* Expected Users */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                    Expected Number of Users *
                  </label>

                  <select
                    className="h-[46px] w-full rounded-lg border border-slate-200 bg-slate-100 px-4 text-[15px] text-slate-700 outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  >
                    <option>Select...</option>
                    <option>1–50</option>
                    <option>51–200</option>
                    <option>201–500</option>
                    <option>500+</option>
                  </select>
                </div>

                {/* Current Workforce Challenge */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-900 dark:text-white">
                    Current Workforce Challenge *
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your workforce model, use case, and goals. What problem are you looking to solve?"
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] leading-7 outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20 dark:border-slate-600 dark:bg-slate-800"
                  />
                </div>

                {/* Agreement */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded accent-[#12A9A5]"
                  />

                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-300">
                    I agree that ZoikoTime may contact me and process my
                    information according to the{" "}
                    <Link
                      href="/privacy-notice"
                      className="font-medium text-[#12A9A5] hover:underline"
                    >
                      Privacy Notice
                    </Link>
                    .
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="h-[52px] w-full rounded-xl bg-[#12A9A5] text-[16px] font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#0f9793] hover:shadow-lg"
                >
                  Submit Sales Inquiry
                </button>

                {/* Privacy Notice */}
                <p className="text-center text-[13px] leading-6 text-slate-500 dark:text-slate-400">
                  Your information is handled according to our{" "}
                  <Link
                    href="/privacy-notice"
                    className="font-medium text-[#12A9A5] hover:underline"
                  >
                    Privacy Notice
                  </Link>
                  . No spam, ever.
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

