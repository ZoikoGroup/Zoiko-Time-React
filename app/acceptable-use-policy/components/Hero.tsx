import React from "react";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-[696px] px-5 py-16 sm:px-6 lg:py-20">
        {/* Title */}
        <h1 className="text-center font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-10 text-slate-900 dark:text-white">
          Acceptable Use Policy
        </h1>

        {/* Description */}
        <p className="mt-6 text-center font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-500 dark:text-slate-400">
          These rules govern access to and use of ZoikoTime. They exist to
          protect the security, reliability, lawful operation, and reputation
          of the platform — and to protect workers, Customers, and third
          parties.
        </p>

        {/* Badge */}
        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-teal-600/20 bg-emerald-50 px-5 py-2 dark:border-teal-500/30 dark:bg-emerald-950/30">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-teal-700 dark:text-teal-300">
              Effective May 1, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}