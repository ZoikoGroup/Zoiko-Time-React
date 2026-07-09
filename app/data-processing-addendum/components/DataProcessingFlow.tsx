import Image from "next/image";
import React from "react";

export default function DataProcessingFlow() {
  const steps = [
    {
      badge: "Customer",
      badgeStyle: "bg-amber-100 text-amber-800 border border-amber-200",
      image: "/DataProcessing/policy.png",
      title: "Policy Definition",
      description: "You define processing scope, rules, and purposes",
    },
    {
      badge: "Customer",
      badgeStyle: "bg-amber-100 text-amber-800 border border-amber-200",
      image: "/DataProcessing/input.png",
      title: "Data Input",
      description: "Workforce data collected under your lawful basis",
    },
    {
      badge: "ZoikoTime",
      badgeStyle: "bg-emerald-50 text-teal-700 border border-teal-200",
      image: "/DataProcessing/processing.png",
      title: "Processing",
      description: "ZoikoTime executes your defined policies only",
    },
    {
      badge: "Shared",
      badgeStyle: "bg-indigo-50 text-indigo-600 border border-indigo-200",
      image: "/DataProcessing/security.png",
      title: "Controls & Logging",
      description: "System-enforced controls and immutable audit logs",
    },
    {
      badge: "Customer",
      badgeStyle: "bg-amber-100 text-amber-800 border border-amber-200",
      image: "/DataProcessing/output.png",
      title: "Output & Review",
      description: "Reports and evidence available to you as Controller",
    },
  ];

  return (
    <section className="bg-slate-100 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          How Data Processing Works in ZoikoTime
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-slate-500 dark:text-slate-300">
          All processing is governed by customer-defined policies and enforced
          through system-level controls—not discretionary decisions made by
          ZoikoTime.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
          <div className="grid md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center border-b border-r border-slate-200 p-6 text-center last:border-r-0 md:border-b-0 dark:border-slate-700"
              >
                <span
                  className={`rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-wide ${step.badgeStyle}`}
                >
                  {step.badge}
                </span>

                <div className="my-5">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="mx-auto"
                  />
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-teal-200 bg-emerald-50 px-6 py-4 dark:border-teal-700 dark:bg-slate-900">
            <p className="text-center text-sm font-semibold text-teal-700 dark:text-teal-400">
              ZoikoTime does not determine the purposes or means of processing —
              those are defined and controlled exclusively by the customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}