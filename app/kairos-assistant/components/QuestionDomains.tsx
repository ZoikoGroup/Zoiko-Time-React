import React from 'react';

interface QuestionDomainCard {
  title: string;
  question: string;
  willNotText: React.ReactNode;
  linkText: string;
  linkHref: string;
}

const domainCards: QuestionDomainCard[] = [
  {
    title: 'Time, timesheet & approval',
    question: '“Which records in my queue are still awaiting a first review?”',
    willNotText: (
      <>
        approve, reject, or say whether a record <em className="not-italic underline underline-offset-2">should</em> be approved.
      </>
    ),
    linkText: 'Time Tracking',
    linkHref: '/time-and-activity-verification',
  },
  {
    title: 'Attendance, presence, break & rest',
    question: '“What configured rest policy applied to this record, and which version?”',
    willNotText: (
      <>
        declare a break violation, infer presence from behavior, or certify local compliance.
      </>
    ),
    linkText: 'Attendance & Presence',
    linkHref: '#',
  },
  {
    title: 'Evidence, reports & record health',
    question: '“Which records in this period have an unresolved exception, and who owns each one?”',
    willNotText: (
      <>
        generate a new report, alter a governed output, or rank teams by exception count.
      </>
    ),
    linkText: 'Evidence Ledger',
    linkHref: '#',
  },
];

export default function QuestionDomains() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10 lg:gap-12">
        
        {/* Header Section */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3 sm:gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Question Domains
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Three Areas People Actually Ask About
          </h2>
          <p className="max-w-[640px] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Each domain shows the kind of question Kairos supports, and the conclusion it will not reach.
          </p>
        </header>

        {/* Domains Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {domainCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6"
            >
              {/* Card Main Body */}
              <div className="flex flex-col gap-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {card.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                  {card.question}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="font-bold text-slate-900 dark:text-white">Will not: </strong>
                  {card.willNotText}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-2">
                <a
                  href={card.linkHref}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group transition-colors"
                >
                  <span>{card.linkText}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}