"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function WorkControl() {
  const features = [
    "Coverage & gaps across time zones",
    "Schedules, availability & approved time — separated",
    "Exceptions routed to an owner with a reason",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            One Governed View
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            The Distributed Work Control Center
          </h2>
        </div>

        {/* Main Card */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(14,31,61,0.12)] dark:border-slate-800 dark:bg-slate-900">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                Coordination, not monitoring
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white">
                See coverage, schedules, and approved time — in one place.
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
                Team coverage, schedules, declared availability,
                exceptions, and privacy mode come together in a single
                governed view. Presence and approved time stay separate,
                and every consequential decision stays with a human.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                      <FiCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/request-a-demo"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-600"
                >
                  Get a demo
                  <FiArrowRight className="ml-2" />
                </Link>

                <Link
                  href="/how-zoikotime-works"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
                >
                  See the operating model
                </Link>
              </div>
            </div>

            {/* Right Image - Screenshot Only */}
            <div className="flex items-center justify-center bg-white dark:bg-slate-900">
              <Image
                src="/manage-remote-hybrid-work/image.png"
                alt="Distributed Work Control Center"
                width={654}
                height={502}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
