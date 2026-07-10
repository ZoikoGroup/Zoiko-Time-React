 import React from "react";

export default function ContactHero() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-[#7CCBC4] via-[#38B7B1] to-[#10AAA7] dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-8 items-center min-h-[900px] py-14 lg:py-10">

          {/* ================= LEFT SIDE ================= */}

          <div className="flex flex-col justify-center">

            {/* Hero Image */}
            <img
              src="/ContactHero1/contact.png"
              alt="Contact Hero"
              className="
                w-full
                max-w-[650px]
                mx-auto
                lg:mx-0
                object-contain
                select-none
                pointer-events-none
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
                text-white
                font-bold
                leading-tight
                text-4xl
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
                text-white/80
                leading-9
                text-lg
              "
            >
              Speak with ZoikoTime about product fit,
              pricing, demos, implementation,
              security review, procurement,
              and enterprise readiness.
            </p>

            {/* Features */}

            <div className="mt-8 space-y-5 text-white/85">

              <div className="flex gap-4">
                <span className="text-xl">✓</span>

                <p className="leading-7">
                  Guidance for self-service, team,
                  professional services, and enterprise
                  deployments
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">✓</span>

                <p className="leading-7">
                  Support for HR, legal, operations,
                  finance, payroll, IT, and executive
                  stakeholders
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">✓</span>

                <p className="leading-7">
                  Assistance with implementation
                  planning, security review,
                  and procurement
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">✓</span>

                <p className="leading-7">
                  Typical response time:
                  1–2 business days
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

         {/* ================= RIGHT SIDE ================= */}

<div className="w-full flex justify-center lg:justify-end">

  <div className="w-full max-w-[480px] rounded-[22px] bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200 dark:border-slate-700 p-7 lg:p-8">

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
            First Name *
          </label>

          <input
            type="text"
            placeholder="First name"
            className="w-full h-[46px] rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 text-[15px] outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
          />
        </div>

        <div>
          <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
            Last Name *
          </label>

          <input
            type="text"
            placeholder="Last name"
            className="w-full h-[46px] rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 text-[15px] outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
          />
        </div>

      </div>

      {/* Work Email */}
      <div>

        <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
          Work Email *
        </label>

        <input
          type="email"
          placeholder="name@company.com"
          className="w-full h-[46px] rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 text-[15px] outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
        />

      </div>

      {/* Company */}
      <div>

        <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
          Company Name *
        </label>

        <input
          type="text"
          placeholder="Your organization"
          className="w-full h-[46px] rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 text-[15px] outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
        />

      </div>

            {/* Company Size & Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
            Company Size *
          </label>

          <select
            className="w-full h-[46px] rounded-lg border border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 px-4 text-[15px] text-slate-700 dark:text-white outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
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
          <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
            Country / Region *
          </label>

          <select
            className="w-full h-[46px] rounded-lg border border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 px-4 text-[15px] text-slate-700 dark:text-white outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
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

        <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
          What Best Describes Your Inquiry? *
        </label>

        <select
          className="w-full h-[46px] rounded-lg border border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 px-4 text-[15px] text-slate-700 dark:text-white outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
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

        <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
          Expected Number of Users *
        </label>

        <select
          className="w-full h-[46px] rounded-lg border border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 px-4 text-[15px] text-slate-700 dark:text-white outline-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
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

        <label className="block mb-2 text-xs font-semibold text-slate-900 dark:text-white">
          Current Workforce Challenge *
        </label>

        <textarea
          rows={5}
          placeholder="Tell us about your workforce model, use case, and goals. What problem are you looking to solve?"
          className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-[15px] leading-7 outline-none resize-none focus:border-[#12A9A5] focus:ring-2 focus:ring-[#12A9A5]/20"
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
          information according to the Privacy Notice.
        </p>

      </div>

            {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-[52px] rounded-xl bg-[#12A9A5] hover:bg-[#0f9793] text-white text-[16px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Submit Sales Inquiry
      </button>

      {/* Privacy Notice */}
      <p className="text-center text-[13px] leading-6 text-slate-500 dark:text-slate-400">
        Your information is handled according to our{" "}
        <span className="text-[#12A9A5] font-medium cursor-pointer hover:underline">
          Privacy Notice
        </span>
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

