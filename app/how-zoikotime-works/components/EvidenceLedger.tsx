import React from "react";
import Link from "next/link";

export default function EvidenceLedger() {
  const events = [
    {
      id: "1",
      title: "Signal received",
      description: "Clock event · Web app",
      meta: "09:00 · WR-84213",
    },
    {
      id: "2",
      title: "Classification",
      description: "Regular · Meal/Rest v4 · deterministic",
      meta: "09:00 · rule EV-1180",
    },
    {
      id: "3",
      title: "Review opened",
      description: "Aug 4 missing exit · neutral state",
      meta: "10:12 · A. Okafor",
    },
    {
      id: "4",
      title: "Correction submitted",
      description: "Worker provided schedule context",
      meta: "10:20 · reason logged",
    },
    {
      id: "5",
      title: "Decision · approval",
      description: "Approve w/ modification · before→after",
      meta: "11:05 · J. Rivera",
    },
    {
      id: "6",
      title: "Version generated",
      description: "Package v3 · evidence manifest",
      meta: "11:06 · owner Finance",
    },
    {
      id: "7",
      title: "Delivered · acknowledged",
      description: "Payroll input · reconciled",
      meta: "18:30 · integration ack",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6">

        {/* Label */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Evidence Ledger
          </p>
        </div>


        {/* Heading */}
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            One traceable history across the lifecycle
          </h2>
        </div>


        {/* Description */}
        <div className="max-w-2xl text-center">
          <p className="text-base leading-7 text-gray-500 dark:text-slate-300">
            Every material transition becomes an event with actor, reason,
            time, object/version, and evidence context — chronology and
            version links are never silently overwritten.
          </p>
        </div>


        {/* Timeline */}
        <div className="mt-8 w-full max-w-3xl">

          {events.slice(0, 4).map((event, index) => (
            <div
              key={event.id}
              className="relative flex gap-4 pb-4"
            >

              {/* Connector */}
              {index !== 3 && (
                <div className="absolute left-[15px] top-9 h-20 w-0.5 bg-emerald-100 dark:bg-teal-900" />
              )}


              {/* Number */}
              <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl border-2 border-teal-600 bg-emerald-50 text-xs font-bold text-teal-700 shadow-[0px_6px_14px_rgba(16,162,141,0.24)] dark:bg-teal-900 dark:text-teal-300">
                {event.id}
              </div>


              {/* Card */}
              <div className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900">

                <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                  {event.title}
                </h3>

                <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                  {event.description}
                </p>

                <p className="pt-0.5 text-xs leading-4 text-gray-500 dark:text-slate-400">
                  {event.meta}
                </p>

              </div>

            </div>
          ))}

                    {/* Timeline items 5 - 7 */}
          {events.slice(4).map((event, index) => (
            <div
              key={event.id}
              className="relative flex gap-4 pb-4"
            >

              {/* Connector */}
              {index !== 2 && (
                <div className="absolute left-[15px] top-9 h-20 w-0.5 bg-emerald-100 dark:bg-teal-900" />
              )}

              {/* Number */}
              <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl border-2 border-teal-600 bg-emerald-50 text-xs font-bold text-teal-700 shadow-[0px_6px_14px_rgba(16,162,141,0.24)] dark:bg-teal-900 dark:text-teal-300">
                {event.id}
              </div>

              {/* Card */}
              <div className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900">

                <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                  {event.title}
                </h3>

                <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                  {event.description}
                </p>

                <p className="pt-0.5 text-xs leading-4 text-gray-500 dark:text-slate-400">
                  {event.meta}
                </p>

              </div>
            </div>
          ))}

        </div>


        {/* Bottom Note */}
        <div className="mt-2 w-full max-w-3xl rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-center dark:border-teal-900 dark:bg-teal-950/40">

          <p className="text-sm leading-5 text-slate-800 dark:text-slate-200">
            Evidence may support review, reconciliation, and audit. ZoikoTime
            does not claim universal legal admissibility or guarantee an
            external decision.{" "}

            <Link
              href="#"
              className="font-semibold text-teal-700 dark:text-teal-300"
            >
              Explore Evidence Ledger →
            </Link>
          </p>

        </div>

      </div>
    </section>
  );
}