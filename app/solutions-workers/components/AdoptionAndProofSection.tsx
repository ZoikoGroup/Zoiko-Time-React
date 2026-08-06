import React from 'react';

export default function AdoptionAndProofSection() {
  const metricsData = [
    {
      measure: "Task completion",
      definition: "Workers start, stop, add context, review, and seek help independently",
      evidence: "Observed testing with representative users",
    },
    {
      measure: "Correction turnaround",
      definition: "Time from submission to visible resolution",
      evidence: "Defined SLA and measured distribution",
    },
    {
      measure: "Privacy comprehension",
      definition: "Workers correctly identify collected vs. never-collected data",
      evidence: "Short knowledge check",
    },
    {
      measure: "Accessibility",
      definition: "Critical tasks pass assistive-technology testing",
      evidence: "Documented findings and remediation",
    },
    {
      measure: "Adoption",
      definition: "Active use across eligible workers, devices, and teams",
      evidence: "Organization-level trend, never a worker ranking",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Category Badge */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Adoption &amp; Proof
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-2xl leading-snug sm:leading-tight mb-4">
          Designed to be understood and used
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center max-w-2xl leading-relaxed mb-10">
          We validate adoption against real dimensions instead of vanity metrics — no invented testimonials, logos, or ratings.
        </p>

        {/* Responsive Table Card Container */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-slate-800 dark:bg-slate-950 text-white text-xs font-semibold uppercase tracking-wider">
                  <th scope="col" className="py-3.5 px-6 w-1/4">
                    Measure
                  </th>
                  <th scope="col" className="py-3.5 px-6 w-1/2">
                    Definition
                  </th>
                  <th scope="col" className="py-3.5 px-6 w-1/4">
                    Evidence
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700/60 text-sm">
                {metricsData.map((row, index) => (
                  <tr
                    key={index}
                    className={`transition-colors duration-150 hover:bg-teal-50/40 dark:hover:bg-slate-700/40 ${
                      index % 2 === 1
                        ? "bg-gray-50/80 dark:bg-slate-800/50"
                        : "bg-white dark:bg-slate-800"
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-slate-800 dark:text-slate-100 align-top">
                      {row.measure}
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300 align-top leading-relaxed">
                      {row.definition}
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300 align-top leading-relaxed">
                      {row.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}