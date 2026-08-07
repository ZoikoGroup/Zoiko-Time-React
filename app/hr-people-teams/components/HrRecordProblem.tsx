import Image from "next/image";

const problems = [
  {
    number: "01",
    title: "Payroll Inputs Arrive Late or Inconsistently",
    description:
      "HR and payroll teams spend time resolving missing, changed, or unapproved records.",
  },
  {
    number: "02",
    title: "Attendance Exceptions Become Employee Disputes",
    description:
      "When the record lacks context, managers and workers remember the same event differently.",
  },
  {
    number: "03",
    title: "Remote and Hybrid Policies Are Applied Unevenly",
    description:
      "Different managers, regions, schedules, and worker types can create avoidable policy drift.",
  },
  {
    number: "04",
    title: "Compliance Evidence Is Scattered",
    description:
      "Breaks, approvals, corrections, and decisions are difficult to reconstruct during review or audit.",
  },
];

export default function HrRecordProblem() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-14 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex max-w-[680px] flex-col">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              The HR Record Problem
            </p>
          </div>

          <h2 className="mt-3.5 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            HR Owns the Outcome. The Evidence Is Often Fragmented.
          </h2>

          <p className="mt-3.5 text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Schedules, time entries, break records, manager approvals, payroll
            changes, employee questions, and policy exceptions often live in
            different systems and messages. HR is left to reconcile the record
            after the fact.
          </p>

        </div>

        {/* Problem Cards */}
        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {problems.map((problem) => (
            <div
              key={problem.number}
              className="flex flex-col rounded-2xl border border-[#D9F1E6] bg-[#F0FBF6] px-5 py-7 dark:border-slate-800 dark:bg-slate-900"
            >

              <p className="text-xs font-bold leading-5 tracking-wide text-emerald-700 dark:text-emerald-400">
                {problem.number}
              </p>

              <h3 className="mt-3.5 text-base font-bold leading-6 text-slate-900 dark:text-white">
                {problem.title}
              </h3>

              <p className="mt-2.5 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                {problem.description}
              </p>

            </div>
          ))}

        </div>

        {/* Outcome Banner */}
        <div className="relative mt-11 overflow-hidden rounded-[20px] shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)]">

          <Image
            src="/hr-people-teams/hr-problem.png"
            alt="Colleagues discussing workforce records in an office"
            width={1216}
            height={340}
            className="h-[240px] w-full object-cover sm:h-[280px] lg:h-auto"
          />

          {/* Caption Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 via-slate-900/55 to-slate-900/0 px-5 pb-4 pt-10 sm:px-9 sm:pb-5 sm:pt-20">
            <p className="max-w-[640px] text-sm font-medium leading-6 text-white sm:text-base">
              ZoikoTime creates one reviewable record from the work event
              through approval and export—without collecting invasive
              behavioral data.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
