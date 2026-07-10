import React from "react";

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
        <div className="flex flex-col gap-3 w-full sm:w-72">

          <button
            className="
              h-12
              w-full
              bg-teal-600
              hover:bg-teal-700
              text-white
              rounded-lg
              shadow-[0px_4px_16px_0px_rgba(0,157,140,0.30)]
              text-base
              font-semibold
            "
          >
            Submit Sales Inquiry
          </button>


          <button
            className="
              h-12
              w-full
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              rounded-lg
              text-slate-700
              dark:text-slate-300
              text-sm
              font-medium
            "
          >
            Visit Help Center
          </button>

        </div>

      </div>
    </section>
  );
};

export default SalesCTA;