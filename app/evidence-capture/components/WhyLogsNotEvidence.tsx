// File: components/WhyLogsNotEvidence.tsx

import React from "react";

const comparisonRows = [
  {
    title:
      "Evidence construction — structured objects with embedded context, not raw logs",
    legacy: false,
  },
  {
    title:
      "Chain of custody — complete lifecycle tracking from creation to deletion",
    legacy: false,
  },
  {
    title:
      "Legal admissibility — records structured to meet court and regulatory standards",
    legacy: false,
  },
  {
    title:
      "Integrity verification — cryptographic tamper-detection on every record",
    legacy: false,
  },
  {
    title:
      "Selective disclosure — role-based visibility and redaction without losing integrity",
    legacy: false,
  },
  {
    title:
      "GDPR-aligned lifecycle management — retention, archival, and deletion with certificates",
    legacy: false,
  },
];

export default function WhyLogsNotEvidence() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-teal-600" />

            <p className="text-xs font-bold tracking-wider uppercase text-teal-600">
              Why ZoikoTime
            </p>
          </div>


          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Why Logs Are Not Evidence
          </h2>


          <p className="mt-5 max-w-xl mx-auto text-base md:text-lg leading-7 text-slate-500 dark:text-slate-400">
            Legacy tools create logs. ZoikoTime creates evidence. The gap
            between the two determines whether your organisation can defend
            its decisions when it matters most.
          </p>

        </div>


        {/* Comparison Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">


          {/* Desktop Table */}
          <div className="hidden md:block">

            {/* Header */}
            <div className="grid grid-cols-[1fr_140px_260px]">

              <div className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-7 py-7">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Capability
                </p>
              </div>


              <div className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <p className="text-sm font-bold text-slate-500 text-center">
                  Legacy
                  <br />
                  Tools
                </p>
              </div>


              <div className="bg-emerald-50 dark:bg-emerald-950/40 border-b border-slate-200 dark:border-slate-700 flex items-center px-7 gap-4">

                <p className="text-sm font-bold text-teal-600">
                  ZoikoTime®
                </p>


                <span className="rounded-full border border-teal-600/25 bg-emerald-50 dark:bg-emerald-900/30 px-5 py-2 text-xs font-semibold text-teal-600 text-center">
                  Evidence
                  <br />
                  OS
                </span>

              </div>

            </div>


            {/* Rows */}
            {comparisonRows.map((item, index) => (

              <div
                key={index}
                className="grid grid-cols-[1fr_140px_260px]"
              >

                <div
                  className={`px-7 py-5 border-b border-slate-200 dark:border-slate-800 ${
                    index % 2 === 1
                      ? "bg-gray-50 dark:bg-slate-800/40"
                      : ""
                  }`}
                >
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
                    {item.title}
                  </p>
                </div>


                <div
                  className={`flex items-center justify-center border-b border-slate-200 dark:border-slate-800 ${
                    index % 2 === 1
                      ? "bg-gray-50 dark:bg-slate-800/40"
                      : ""
                  }`}
                >
                  <span className="text-slate-300 text-xl">
                    ✗
                  </span>
                </div>


                <div
                  className="
                  flex items-center justify-center
                  bg-teal-600/5
                  border-b border-slate-200
                  dark:border-slate-800
                  "
                >
                  <span className="text-teal-600 text-xl">
                    ✓
                  </span>
                </div>


              </div>

            ))}

          </div>



          {/* Mobile View */}
          <div className="md:hidden p-5 space-y-5">

            <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-5">

              <p className="font-bold text-slate-900 dark:text-white mb-4">
                Capability Comparison
              </p>


              <div className="flex justify-between text-sm font-bold">

                <span className="text-slate-500">
                  Legacy Tools
                </span>

                <span className="text-teal-600">
                  ZoikoTime
                </span>

              </div>

            </div>



            {comparisonRows.map((item,index)=>(

              <div
                key={index}
                className="
                rounded-xl
                border border-slate-200
                dark:border-slate-700
                p-4
                "
              >

                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  {item.title}
                </p>


                <div className="flex justify-between">

                  <span className="text-slate-300 text-xl">
                    ✗
                  </span>


                  <span className="text-teal-600 text-xl">
                    ✓
                  </span>

                </div>

              </div>

            ))}

          </div>


        </div>

      </div>
    </section>
  );
}