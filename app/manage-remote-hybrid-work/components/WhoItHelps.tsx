"use client";

import Image from "next/image";

const roles = [
  {
    image: "/manage-remote-hybrid-work/operations.png",
    title: "Operations",
    product: "ZoikoTime",
    description: "Coverage & gaps",
  },
  {
    image: "/manage-remote-hybrid-work/hr-people.png",
    title: "HR & People",
    product: "ZoikoTime",
    description: "Trust & fairness",
  },
  {
    image: "/manage-remote-hybrid-work/workforce-planning.png",
    title: "Workforce Planning",
    product: "ZoikoTime",
    description: "Patterns & zones",
  },
  {
    image: "/manage-remote-hybrid-work/employees.png",
    title: "Employees",
    product: "ZoikoTime",
    description: "See your own day",
  },
];

export default function WhoItHelps() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            Who It Helps
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            One workflow, wherever people work
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            From operations to employees, everyone gets the coordination
            they need — without surveillance.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div key={role.title} className="text-center">
              {/* Image */}
              <div className="overflow-hidden rounded-3xl shadow-[0_6px_18px_rgba(14,31,61,0.05)]">
                <Image
                  src={role.image}
                  alt={role.title}
                  width={267}
                  height={267}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                {role.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-teal-700 dark:text-teal-400">
                {role.product}
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}