import React from 'react';

export default function AfterApprovalSection() {
  const steps = [
    {
      title: "Worker record",
      subtitle: "Your time event, captured",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Review / approval",
      subtitle: "Configured, human-controlled",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Approved record",
      subtitle: "Ready for supported use",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Downstream destination",
      subtitle: "Payroll, billing, project, audit",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5s1.5 0 1.5 1.5-1.5 1.5-1.5 1.5H9m0-3v6m0 3h1.5s1.5 0 1.5 1.5-1.5 1.5-1.5 1.5H9m0-3v6" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Category Header */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          After Approval
        </span>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-8">
          Approved records can support the systems your organization uses
        </h2>

        {/* Callout Info Box */}
        <div className="w-full max-w-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-6 mb-12 text-center">
          <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-emerald-100 leading-relaxed">
            Approved means your record is ready for supported downstream use — not that payment has been issued. Payroll, billing, and employment decisions stay with your organization and its systems.
          </p>
        </div>

        {/* Workflow Steps Grid / Flex */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full max-w-6xl mb-8">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Step Card */}
              <div className="w-full max-w-[250px] h-32 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/60 p-4 shadow-sm flex flex-col items-center justify-center text-center">
                {/* Icon */}
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl flex items-center justify-center mb-2.5 flex-shrink-0">
                  {step.icon}
                </div>
                {/* Title */}
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white leading-tight">
                  {step.title}
                </h3>
                {/* Subtitle */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                  {step.subtitle}
                </p>
              </div>

              {/* Arrow Connector (Hidden after the last step) */}
              {idx < steps.length - 1 && (
                <div className="text-teal-600 dark:text-teal-400 text-xl font-normal my-1 lg:my-0 transform rotate-90 lg:rotate-0 flex-shrink-0">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-2xl leading-relaxed">
          Post-approval changes preserve history and may trigger a new downstream version or reconciliation — nothing is silently overwritten.
        </p>

      </div>
    </section>
  );
}