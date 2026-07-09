import React from "react";
import Image from "next/image";

const safeguards = [
  {
    icon: "/CrossBorderDataTransfer/clause.png",
    title: "Standard Contractual Clauses",
    description: (
      <>
        EU Commission SCCs (2021 version) and UK
        <br />
        IDTA executed for all relevant third-country
        <br />
        transfers. Module 2 (Controller to Processor)
        <br />
        and Module 3 (Processor to Processor) both
        <br />
        available. Pre-signed and ready for counter-
        <br />
        signature.
      </>
    ),
    button: "↓ Download SCC Pack",
  },
  {
    icon: "/CrossBorderDataTransfer/decision.png",
    title: "Adequacy Decisions",
    description: (
      <>
        Where applicable, data transfers are
        <br />
        structured to rely on EU Commission or UK
        <br />
        adequacy decisions — providing the
        <br />
        simplest and most legally robust basis for
        <br />
        cross-border transfers for the relevant
        <br />
        destination countries.
      </>
    ),
    button: "↓ View Adequacy Map",
  },
  {
    icon: "/CrossBorderDataTransfer/measure.png",
    title: "Supplementary Measures",
    description: (
      <>
        For transfers to high-risk jurisdictions,
        <br />
        supplementary measures are implemented
        <br />
        in accordance with EDPB Recommendations
        <br />
        01/2020 — including technical measures
        <br />
        (encryption), contractual measures, and
        <br />
        organisational controls.
      </>
    ),
    button: "↓ Download Transfer Impact Assessment",
  },
];

export default function CrossBorderDataTransfer() {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Cross-Border Data Transfer Safeguards
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400 max-w-5xl mx-auto">
            Where data is transferred outside the EEA or UK, ZoikoTime applies
            appropriate safeguards — with pre-executed SCCs available for
            immediate counter-signature and jurisdiction-specific addenda
            included.
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {safeguards.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-7 text-center"
            >

              <Image
  src={item.icon}
  alt={item.title}
  width={48}
  height={48}
  className="mx-auto mb-6"
/>


              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                {item.title}
              </h3>


              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400 min-h-[140px]">
                {item.description}
              </p>


              <button
                className="mt-6 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-md px-5 py-3"
              >
                {item.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}