import React from "react";

const faqItems = [
  "Can I see my own time records?",
  "What do I do if my timesheet is wrong?",
  "Who can see my work-session context?",
  "Are screenshots always on?",
  "Where do I get help?",
];

export default function WorkerFAQs() {
  return (
    <section
      className="
        w-full
        bg-gray-50
        dark:bg-slate-950
        py-16
        sm:py-20
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-5
          sm:px-8
        "
      >
        {/* Header */}
        <div className="text-center">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-teal-600
              dark:text-teal-400
            "
          >
            Questions
          </p>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              font-bold
              leading-tight
              text-slate-800
              dark:text-white
            "
          >
            Worker Guide FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <div
          className="
            mt-10
            space-y-4
            max-w-5xl
            mx-auto
          "
        >
          {faqItems.map((item) => (
            <div
              key={item}
              className="
                flex
                items-start
                gap-3
                text-gray-700
                dark:text-gray-300
              "
            >
              <span
                className="
                  mt-2
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-gray-700
                  dark:bg-gray-300
                  flex-shrink-0
                "
              />

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-6
                  font-normal
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}