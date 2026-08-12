import React from 'react';

interface BoundaryItem {
  title: string;
  description: string;
  isPositive?: boolean;
}

const boundaryItems: BoundaryItem[] = [
  {
    title: "No worker leaderboard.",
    description: "People are never sorted best to worst, highest to lowest, or compliant to noncompliant.",
  },
  {
    title: "No productivity score.",
    description: "Time, communication, attendance, and source activity are never combined into a hidden or visible productivity score.",
  },
  {
    title: "No behavior inference.",
    description: "Motivation, engagement, intent, sentiment, loyalty, focus, honesty, and misconduct are never inferred.",
  },
  {
    title: "No prediction.",
    description: "Attrition, absence, performance, discipline, and legal exposure are not predicted from workforce records.",
  },
  {
    title: "No automatic adverse action.",
    description: "Insights cannot reduce pay, deny approval, issue discipline, terminate, or trigger legal conclusions automatically.",
  },
  {
    title: "No proxy surveillance.",
    description: "Communication presence, device status, application activity, and source availability are never treated as proof of work or behavior.",
  },
  {
    title: "No opaque risk badge.",
    description: "Any review cue links to a neutral data-quality, policy, workflow, or source condition — never to a judgment about a person.",
  },
  {
    title: "No compliance guarantee.",
    description: "No value proves legal, regulatory, contractual, payroll, or policy compliance.",
  },
  {
    title: "No AI authority.",
    description: "Kairos can retrieve and explain approved context. It cannot calculate an unapproved metric, classify, rank, approve, or decide.",
  },
  {
    title: "Human accountability.",
    description: "Every consequential next step identifies an authorized human role, a reason, and an audit trail.",
    isPositive: true,
  },
];

export default function InsightBoundariesSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 sm:gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
            Insight Boundaries
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 tracking-tight">
            Ten Things This Layer Must Never Do
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans max-w-xl">
            Stated plainly, because an insight product that leaves these ambiguous will drift into all of them.
          </p>
        </div>

        {/* Boundaries List */}
        <div className="w-full flex flex-col gap-3">
          {boundaryItems.map((item, index) => (
            <div
              key={index}
              className={`w-full p-4 sm:px-5 sm:py-3.5 rounded-xl border flex items-start gap-3.5 transition-colors ${
                item.isPositive
                  ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60 text-emerald-950 dark:text-emerald-200"
                  : "bg-rose-50/40 dark:bg-rose-950/10 border-rose-200/80 dark:border-rose-900/40 text-rose-950 dark:text-rose-200"
              }`}
            >
              {/* Status Icon */}
              <div className="shrink-0 mt-0.5">
                {item.isPositive ? (
                  <div className="p-1 rounded-md bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="p-1 rounded-md bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text Context */}
              <p className="text-xs sm:text-sm font-sans leading-relaxed">
                <strong className={`font-bold mr-1.5 ${item.isPositive ? "text-emerald-900 dark:text-emerald-300" : "text-rose-900 dark:text-rose-300"}`}>
                  {item.title}
                </strong>
                <span className={item.isPositive ? "text-emerald-800 dark:text-emerald-300/80" : "text-rose-800/90 dark:text-rose-300/80"}>
                  {item.description}
                </span>
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}