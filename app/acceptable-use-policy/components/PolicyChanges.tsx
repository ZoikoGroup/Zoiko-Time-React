import React from "react";

export default function PolicyChanges() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          20. Changes to this Policy
        </h2>

        {/* Divider */}
        <div className="mt-3 mb-8 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Content */}
        <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          Zoiko Tech Inc. may update this Policy from time to time. Material
          changes will be communicated in accordance with the ZoikoTime Terms
          of Service. Continued use after an updated Policy becomes effective
          constitutes acceptance.
        </p>
      </div>
    </section>
  );
}