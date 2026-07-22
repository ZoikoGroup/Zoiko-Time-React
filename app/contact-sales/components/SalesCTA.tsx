import React from "react";
import Link from "next/link";

const SalesCTA = () => {
  return (
    <section
      className="
        w-full
        bg-gradient-to-r
        from-teal-50
        to-emerald-50
        dark:from-slate-900
        dark:to-slate-800
        py-12
        px-5
      "
    >
      <div className="max-w-[1052px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* Content */}
        <div>
          <h2
            className="
              text-slate-900
              dark:text-white
              text-3xl
              lg:text-4xl
              font-semibold
              leading-10
            "
          >
            Ready to Speak With ZoikoTime Sales?
          </h2>

          <p
            className="
              mt-4
              text-slate-500
              dark:text-slate-400
              text-base
              font-normal
              leading-7
              max-w-[700px]
            "
          >
            Complete the form above or reach out through the right channel for
            your inquiry. Our team will route your request and follow up within
            1–2 business days.
          </p>
        </div>


        {/* Buttons */}
<div className="flex w-full flex-col items-center gap-3 sm:w-72 mx-auto">
  <Link
    href="/contact-sales#sales-query-and-help"
    className="
      inline-flex
      h-12
      w-full
      items-center
      justify-center
      rounded-lg
      bg-teal-600
      text-base
      font-semibold
      text-white
      shadow-[0px_4px_16px_0px_rgba(0,157,140,0.30)]
      transition
      hover:bg-teal-700
    "
  >
    Submit Sales Inquiry
  </Link>

  <Link
    href="/help-center"
    className="
      inline-flex
      h-12
      w-full
      items-center
      justify-center
      rounded-lg
      border
      border-slate-200
      bg-white
      text-sm
      font-medium
      text-slate-700
      transition
      hover:bg-slate-50
      dark:border-slate-700
      dark:bg-slate-900
      dark:text-slate-300
      dark:hover:bg-slate-800
    "
  >
    Visit Help Center
  </Link>
</div>

      </div>
    </section>
  );
};

export default SalesCTA;