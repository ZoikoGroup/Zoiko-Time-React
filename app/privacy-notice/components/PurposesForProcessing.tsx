import React from "react";

export default function PurposesForProcessing() {
  const purposes = [
    "Providing, operating, maintaining, securing, and improving the ZoikoTime platform",
    "Creating and managing customer accounts, subscriptions, and billing",
    "Delivering customer support, professional services, and onboarding",
    "Detecting and preventing abuse, fraud, security incidents, and misuse",
    "Complying with legal, regulatory, accounting, tax, and contractual obligations",
    "Communicating with customers, administrators, and users about the Services",
    "Conducting analytics and product improvement using aggregated or de-identified data",
    "Marketing ZoikoTime products and services where permitted",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-6 bg-white dark:bg-slate-950">

      <div className="w-full max-w-[696px] mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            font-['Plus_Jakarta_Sans']
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          7. Purposes for Processing
        </h2>


        {/* Teal Line */}
        <div
          className="
            w-12
            h-[3px]
            bg-teal-600
            rounded-full
            mt-4
            mb-6
          "
        />


        {/* Description */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-5
          "
        >
          Zoiko Tech Inc. processes personal information for the following
          purposes, subject to applicable lawful basis:
        </p>


        {/* Bullet List */}
        <ul className="space-y-3">

          {purposes.map((purpose, index) => (
            <li
              key={index}
              className="
                flex
                items-start
                gap-3
                text-base
                font-normal
                font-['Plus_Jakarta_Sans']
                leading-7
                text-slate-700
                dark:text-slate-300
              "
            >

              <span
                className="
                  text-teal-600
                  font-bold
                  text-base
                  leading-7
                "
              >
                ›
              </span>

              <span>
                {purpose}
              </span>

            </li>
          ))}

        </ul>

      </div>

    </section>
  );
}