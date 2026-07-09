import React from "react";

export default function Availability() {
  return (
    <section className="mx-auto mt-16 max-w-[696px] px-4 sm:px-6 lg:px-0">
      {/* Section Title */}
      <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
        4. Availability Commitments
      </h2>

      {/* Underline */}
      <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

      {/* Description */}
      <p className="mt-8 font-['Plus_Jakarta_Sans'] text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        ZoikoTime will use commercially reasonable efforts to meet or exceed
        the Monthly Uptime Percentage for each paid production subscription.
        Availability commitments vary by subscription plan:
      </p>

      {/* Plans */}
      <ul className="mt-8 space-y-5">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">
              Foundation / Verified plan:
            </span>{" "}
            Target 99.5% monthly uptime
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">
              Governed / Assurance plan:
            </span>{" "}
            Target 99.7% monthly uptime
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">Sovereign plan:</span> Target 99.9%
            monthly uptime
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">Enterprise plan:</span> Enhanced
            commitments as agreed in the applicable Order Form, with dedicated
            infrastructure options available.
          </p>
        </li>
      </ul>

      {/* Closing Paragraph */}
      <p className="mt-8 font-['Plus_Jakarta_Sans'] text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        Enterprise commitments may be enhanced by a signed Order Form where
        dedicated infrastructure, private cloud, single-tenant architecture,
        custom monitoring, or customer-specific operational controls are
        purchased.
      </p>
    </section>
  );
}