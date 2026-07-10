import React from "react";
import { ChevronDown } from "lucide-react";

const faqs: string[] = [
  "How fast does someone respond after I submit?",
  "Can I start a free trial instead of a demo?",
  "Can I get a sandbox before signing?",
  "Do you support distributed and international teams?",
  "Can I book a call immediately after submitting?",
  "What will the demo actually cover?",
  "What does your Data Processing Agreement cover?",
  "Which plan is right for our team?",
];

export default function FaqSection() {
  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-slate-950
        px-5
        sm:px-8
        lg:px-10
        py-14
      "
    >
      {/* Header */}
      <div className="text-center">

        <p
          className="
            text-teal-900
            dark:text-teal-400
            text-xs
            font-bold
            uppercase
            tracking-wider
          "
        >
          Frequently asked questions
        </p>


        <h2
          className="
            mt-4
            text-gray-900
            dark:text-white
            text-3xl
            sm:text-4xl
            font-semibold
          "
        >
          Common questions
        </h2>

      </div>


      {/* FAQ Grid */}
      <div
        className="
          max-w-[1180px]
          mx-auto
          mt-12
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-4
        "
      >

        {faqs.map((faq) => (
          <button
            key={faq}
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              flex
              items-center
              justify-between
              px-5
              bg-white
              dark:bg-slate-900
              text-left
              transition
              hover:bg-slate-50
              dark:hover:bg-slate-800
            "
          >

            <span
              className="
                text-gray-900
                dark:text-white
                text-sm
                font-semibold
              "
            >
              {faq}
            </span>


            <ChevronDown
              size={18}
              className="
                text-slate-500
                dark:text-slate-400
                shrink-0
              "
            />

          </button>
        ))}

      </div>

    </section>
  );
}