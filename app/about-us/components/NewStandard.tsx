import React from "react";

export default function NewStandard() {
  return (
    <section className="w-full px-5 py-10 sm:px-8 lg:px-12">
      <div className="relative mx-auto w-full max-w-[1040px] overflow-hidden rounded-2xl bg-slate-100 px-6 py-12 text-center transition-colors duration-300 dark:bg-slate-900 sm:px-12 lg:px-20">
        {/* Label */}
        <p className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-500 dark:text-teal-400">
          A New Standard
        </p>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-10">
          Defining a New Standard for{" "}
          <span className="text-teal-500 dark:text-teal-400">
            Workforce Governance
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-[626px] text-sm font-normal leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
          As work has become global, distributed, and increasingly complex,
          enterprises have gained flexibility — but lost consistency, control,
          and defensibility. Traditional time-tracking tools were not designed
          for this reality. ZoikoTime
        </p>

        {/* Highlighted Statement */}
        <p className="mx-auto mt-10 max-w-[640px] text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
          establishes a new category:{" "}
          <span className="font-bold text-teal-500 dark:text-teal-400">
            Workforce Assurance Infrastructure
          </span>{" "}
          — where every unit of work is measurable, explainable, and
          defensible.
        </p>
      </div>
    </section>
  );
}