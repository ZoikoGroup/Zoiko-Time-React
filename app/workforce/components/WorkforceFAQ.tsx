import React from "react";

const faqs = [
  "Is workforce intelligence the same as employee monitoring?",
  "Can ZoikoTime help with payroll and timesheet accuracy?",
  "Does ZoikoTime use AI to make employment decisions?",
  "Is ZoikoTime suitable for professional services firms?",
  "Can ZoikoTime support audits or disputes?",
];

export default function WorkforceFAQ() {
  return (
    <section
      className="
        w-full
        py-20
        bg-white
        dark:bg-slate-950
        transition-colors
      "
    >
      <div
        className="
          max-w-[1180px]
          mx-auto
          px-5
          sm:px-8
          lg:px-0
        "
      >

        {/* Label */}
        <div
          className="
            text-center
            text-teal-600
            text-xs
            font-bold
            uppercase
            tracking-wider
          "
        >
          Common Questions
        </div>


        {/* Heading */}
        <h2
          className="
            mt-6
            text-center
            text-3xl
            sm:text-4xl
            font-semibold
            leading-10
            text-slate-900
            dark:text-white
          "
        >
          Workforce Intelligence FAQ
        </h2>


        {/* FAQ Box */}
        <div
          className="
            max-w-[760px]
            mx-auto
            mt-16
            sm:mt-20
            rounded-2xl
            border
            border-slate-200
            dark:border-slate-700
            overflow-hidden
            bg-white
            dark:bg-slate-900
          "
        >

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                min-h-[56px]
                flex
                items-center
                justify-between
                gap-4
                px-5
                py-4
                ${
                  index !== faqs.length - 1
                    ? "border-b border-slate-200 dark:border-slate-700"
                    : ""
                }
              `}
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                {faq}
              </p>


              <span
                className="
                  flex-shrink-0
                  text-teal-600
                  text-xl
                  font-normal
                "
              >
                +
              </span>

            </div>
          ))}

        </div>


        {/* View All */}
        <div
          className="
            mt-12
            text-center
            text-teal-600
            text-sm
            font-semibold
            cursor-pointer
            hover:text-teal-700
            transition
          "
        >
          View All FAQs
        </div>


      </div>
    </section>
  );
}