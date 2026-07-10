import React from "react";
import {
  ShieldCheck,
  FileCheck,
  Database,
  LockKeyhole,
  FileText,
} from "lucide-react";

const securityItems = [
  {
    icon: ShieldCheck,
    title: (
      <>
        SOC 2 Type II
        <br />
        In progress
      </>
    ),
    description: "Request documentation",
  },
  {
    icon: FileCheck,
    title: (
      <>
        GDPR & CCPA
        <br />
        Compliant
      </>
    ),
    description: "DPA available on request",
  },
  {
    icon: Database,
    title: (
      <>
        Data residency
        <br />
        Sovereign plan +
      </>
    ),
    description: "Sub-processor list available",
  },
  {
    icon: LockKeyhole,
    title: (
      <>
        End-to-end
        <br />
        Encryption
      </>
    ),
    description: "At rest & in transit",
  },
  {
    icon: FileText,
    title: (
      <>
        Security
        <br />
        Overview
      </>
    ),
    description: "Download for procurement",
  },
];

export default function SecurityCompliance() {
  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-slate-950
        px-5
        sm:px-8
        lg:px-10
        py-10
      "
    >

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">

        <div
          className="
            text-teal-900
            dark:text-teal-400
            text-xs
            font-bold
            uppercase
            tracking-wider
            mb-4
          "
        >
          Security & compliance
        </div>


        <h2
          className="
            text-gray-900
            dark:text-white
            text-3xl
            sm:text-4xl
            font-semibold
            leading-tight
          "
        >
          Built for IT, legal, and procurement review.
        </h2>


        <p
          className="
            mt-4
            text-slate-500
            dark:text-slate-400
            text-sm
            leading-6
          "
        >
          Accurate security posture below. Download detailed resources for
          your procurement process.
        </p>

      </div>


      {/* Cards */}
      <div
        className="
          max-w-[1120px]
          mx-auto
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-5
        "
      >

        {securityItems.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.description}
              className="
                h-28
                bg-teal-50
                dark:bg-slate-900
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >

              <Icon
                size={22}
                className="
                  text-teal-900
                  dark:text-teal-400
                  mb-2
                "
              />


              <div
                className="
                  text-gray-900
                  dark:text-white
                  text-xs
                  font-semibold
                  leading-5
                "
              >
                {item.title}
              </div>


              <div
                className="
                  mt-3
                  text-teal-600
                  dark:text-teal-400
                  text-[10px]
                "
              >
                {item.description}
              </div>

            </div>
          );

        })}

      </div>

    </section>
  );
}