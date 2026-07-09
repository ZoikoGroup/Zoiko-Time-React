import React from "react";

export default function YourPrivacyRights() {
  const rights = [
    "Right of access: to obtain a copy of your personal information we hold",
    "Right to rectification: to correct inaccurate or incomplete personal information",
    "Right to erasure: to request deletion where no longer lawfully required",
    "Right to restriction: to limit processing in certain circumstances",
    "Right to portability: to receive your personal information in a structured, machine-readable format",
    "Right to object: to processing based on legitimate interests or for direct marketing",
    "Rights related to automated decision-making: to not be subject to solely automated decisions with legal effects",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-10 bg-white dark:bg-slate-950">
      <div className="w-full max-w-[696px] mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          16. Your Privacy Rights
        </h2>

        {/* Underline */}
        <div className="w-12 h-[3px] bg-teal-600 rounded-full mt-3 mb-8" />

        {/* Introduction */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-6
          "
        >
          Depending on your location and applicable law, you may have rights
          regarding your personal information. These may include:
        </p>

        {/* Rights List */}
        <ul className="space-y-4 mb-8">
          {rights.map((right) => (
            <li
              key={right}
              className="flex items-start gap-3"
            >
              <span
                className="
                  mt-2
                  text-teal-600
                  dark:text-teal-400
                  font-bold
                  text-lg
                  leading-none
                  shrink-0
                "
              >
                ›
              </span>

              <span
                className="
                  text-base
                  font-normal
                  leading-7
                  text-slate-700
                  dark:text-slate-300
                "
              >
                {right}
              </span>
            </li>
          ))}
        </ul>

        {/* Closing Paragraph */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          To exercise your rights, please contact ZoikoTime using the details
          in Section 25. For workforce data controlled by a Customer
          organization, please contact that organization directly.
        </p>

      </div>
    </section>
  );
}