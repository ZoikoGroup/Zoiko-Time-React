import Image from "next/image";

const problems = [
  {
    icon: "/verify-time-attendance/Incomplete-time-events.svg",
    title: "Incomplete time events",
    description:
      "Start, stop, break, or synchronization gaps leave the record unresolved.",
  },
  {
    icon: "/verify-time-attendance/Schedule-time-conflict.svg",
    title: "Schedule & time conflict",
    description:
      "Captured events and expected schedules differ and need context.",
  },
  {
    icon: "/verify-time-attendance/Inconsistent-policy-application.svg",
    title: "Inconsistent policy application",
    description:
      "Different teams or reviewers interpret the same situation differently.",
  },
  {
    icon: "/verify-time-attendance/Late-unclear-approvals.svg",
    title: "Late or unclear approvals",
    description:
      "No one knows who owns the next action or whether a record is ready.",
  },
  {
    icon: "/verify-time-attendance/Disputed-changed-records.svg",
    title: "Disputed or changed records",
    description:
      "Corrections occur without accessible rationale or history.",
  },
  {
    icon: "/verify-time-attendance/Downstream-rework.svg",
    title: "Downstream rework",
    description:
      "Payroll, billing, or audit teams discover incomplete records too late.",
  },
];

export default function WhyVerificationFails() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3">
          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Why Verification Fails
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] dark:text-white sm:text-4xl">
            The problems that make time records indefensible
          </h2>

          <p className="text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Not surveillance failures — operational ones. Here&apos;s what
            breaks a record before it ever reaches payroll or audit.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-col rounded-2xl border border-[#E4E9EE] bg-white p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F6F2] dark:bg-slate-900">
                <Image
                  src={problem.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </span>

              <h3 className="mt-5 text-base font-semibold leading-7 text-[#0E1F3D] dark:text-white">
                {problem.title}
              </h3>

              <p className="mt-2 text-sm font-normal leading-6 text-[#6B7785] dark:text-slate-400">
                {problem.description}
              </p>

              {/* Resolution link removed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}