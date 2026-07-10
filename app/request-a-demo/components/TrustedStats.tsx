import React from "react";

const industries = [
  { name: "FinTech Operations", color: "bg-sky-500" },
  { name: "Global Staffing Agency", color: "bg-green-500" },
  { name: "Professional Services Firm", color: "bg-orange-600" },
  { name: "Healthcare Network", color: "bg-fuchsia-700" },
  { name: "Legal Group", color: "bg-amber-500" },
];

const stats = [
  {
    value: "99.9%",
    label: "Platform uptime SLA",
  },
  {
    value: "< 5 min",
    label: "Qualified lead response time",
  },
  {
    value: "30-day",
    label: "Free trial, no credit card",
  },
  {
    value: "7+",
    label: "Jurisdictions supported",
  },
];

export default function TrustedStats() {
  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-slate-950
        border-b
        border-slate-200
        dark:border-slate-800
        px-4
        sm:px-6
        lg:px-10
        py-10
      "
    >

      {/* Heading */}
      <p
        className="
          text-center
          text-gray-400
          dark:text-slate-400
          text-xs
          font-bold
          uppercase
          tracking-wider
          mb-8
        "
      >
        Trusted by operations, finance, HR, and legal teams
      </p>


      {/* Industry Tags */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-4
          mb-10
        "
      >
        {industries.map((item) => (
          <div
            key={item.name}
            className="
              flex
              items-center
              gap-3
              bg-teal-50
              dark:bg-slate-900
              rounded-[10px]
              border
              border-slate-200
              dark:border-slate-700
              px-5
              py-2.5
            "
          >

            <span
              className={`
                w-2.5
                h-2.5
                rounded-full
                ${item.color}
              `}
            />

            <span
              className="
                text-gray-700
                dark:text-slate-200
                text-xs
                font-bold
                whitespace-nowrap
              "
            >
              {item.name}
            </span>

          </div>
        ))}
      </div>


      {/* Statistics */}
      <div
        className="
          max-w-[820px]
          mx-auto
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          overflow-hidden
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`
              bg-white
              dark:bg-slate-900
              h-20
              flex
              flex-col
              items-center
              justify-center
              px-4

              ${
                index !== stats.length - 1
                  ? "lg:border-r border-slate-200 dark:border-slate-700"
                  : ""
              }

              ${
                index < stats.length - 1
                  ? "sm:border-b lg:border-b-0 border-slate-200 dark:border-slate-700"
                  : ""
              }
            `}
          >

            <div
              className="
                text-teal-900
                dark:text-teal-400
                text-2xl
                font-black
                leading-6
              "
            >
              {item.value}
            </div>


            <div
              className="
                mt-2
                text-slate-500
                dark:text-slate-400
                text-xs
                text-center
                leading-5
              "
            >
              {item.label}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}