import React from 'react';

export default function WorkerExperienceHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-3">

          {/* Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e1f6e6] dark:bg-emerald-950/50 text-[#2e8b57] dark:text-green-400 text-xs font-bold uppercase leading-5 tracking-wider">
            Worker Record View
          </div>

          {/* Heading */}
          <h1 className="pt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            The person in the record can see it — and{' '}
            <span className="text-green-400">question it</span>
          </h1>

          {/* Subtext */}
          <p className="pt-2 text-slate-600 dark:text-slate-400 text-base leading-7 max-w-xl">
            ZoikoTime can give workers a role-appropriate view of their own workforce record: the
            recorded time or attendance context, current state, source summary, applicable policy
            explanation, review status, correction history, and available next action.
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-base leading-7 max-w-xl">
            Workers can request correction or provide permitted context where configured, and{' '}
            <span className="font-bold text-slate-800 dark:text-slate-200">
              consequential decisions remain with authorized people
            </span>
            . ZoikoTime does not collect screenshots, keystroke content, URL history,
            application-name monitoring, or clipboard data, and it does not create an individual
            productivity score.
          </p>

        </div>

        {/* Right Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full max-w-lg lg:max-w-none h-auto rounded-2xl shadow-xl object-cover"
            src="/auditable-time-records-worker-experience/hero.png"
            alt="A worker reviewing their own record, with routes to ask a question, raise an issue, and follow the response"
          />
        </div>

      </div>
    </section>
  );
}
