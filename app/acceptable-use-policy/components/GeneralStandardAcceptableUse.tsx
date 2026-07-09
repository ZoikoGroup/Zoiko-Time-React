import React from "react";

export default function GeneralStandardAcceptableUse() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          5. General Standard of Acceptable Use
        </h2>

        {/* Divider */}
        <div className="mt-3 mb-8 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Content */}
        <div className="space-y-8">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Customers and Authorized Users may use the Service only for lawful,
            authorized, transparent, proportionate, security-conscious, and
            contractually permitted business purposes. Use of the Service must
            comply with all applicable laws, regulations, court orders,
            regulatory guidance, collective bargaining obligations, works
            council requirements, internal policies, and notices provided to
            affected individuals.
          </p>

          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            The Service must not be used in a manner that is deceptive,
            discriminatory, abusive, exploitative, harassing, unsafe, unlawful,
            invasive, or inconsistent with the legitimate business purpose for
            which ZoikoTime is provided.
          </p>
        </div>
      </div>
    </section>
  );
}