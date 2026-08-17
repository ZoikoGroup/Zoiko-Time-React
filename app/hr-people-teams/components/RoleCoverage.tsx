import Link from "next/link";
import Image from "next/image";

const workflows = [
  {
    icon: "/hr-people-teams/time-attendance.png",
    title: "Time and Attendance Operations",
    description:
      "Review attendance status, late or missing records, schedule context, and approvals from one operational view.",
    linkLabel: "Time Tracking & Attendance",
    href: "/time-and-activity-verification",
  },
  {
    icon: "/hr-people-teams/break-rest.png",
    title: "Break and Rest Compliance",
    description:
      "Apply configured meal and rest policies, surface exceptions neutrally, and preserve review history.",
    linkLabel: "Break & Rest Compliance",
    href: "/break-rest-compliance",
  },
  {
    icon: "/hr-people-teams/review-corrections.png",
    title: "Review, Corrections & Employee Questions",
    description:
      "Let authorized workers and managers add context, request correction, and resolve discrepancies before downstream use.",
    linkLabel: "Human-in-Command Controls",
    href: "/human-in-command",
  },
  {
    icon: "/hr-people-teams/payroll-handoff.png",
    title: "Payroll-Ready Handoff",
    description:
      "Send approved, traceable records into payroll preparation and retain the source, changes, and approver history.",
    linkLabel: "Improve Payroll Accuracy",
    href: "/payroll-and-timesheet-integrity",
  },
  {
    icon: "/hr-people-teams/remote-hybrid.png",
    title: "Remote and Hybrid Policy Management",
    description:
      "Apply role, location, schedule, and worker-type policy without monitoring screens, URLs, or application names.",
    linkLabel: "Manage Remote & Hybrid Work",
    href: "/manage-remote-hybrid-work",
  },
  // {
  //   icon: "/hr-people-teams/worker-transparency.png",
  //   title: "Worker Transparency & Communication",
  //   description:
  //     "Make the record, status, reason, and review path understandable to the worker; support communications and consultation.",
  //   linkLabel: "Anti-Surveillance Principles",
  //   href: "/anti-surveillance-principles",
  // },
];

export default function RoleCoverage() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex max-w-[680px] flex-col">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              Role Coverage
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Core Workflows for HR and People Teams
          </h2>

        </div>

        {/* Workflow Cards */}
        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {workflows.map((workflow) => (
            <div
              key={workflow.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white px-6 pb-7 pt-6 dark:border-slate-800 dark:bg-slate-900"
            >

              {/* Icon Tile */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6F9F1] dark:bg-slate-800">
                <Image
                  src={workflow.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </div>

              <h3 className="mt-4 text-base font-bold leading-5 text-slate-900 dark:text-white">
                {workflow.title}
              </h3>

              <p className="mt-2.5 flex-1 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                {workflow.description}
              </p>

              <Link
                href={workflow.href}
                className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold leading-5 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
              >
                <span>{workflow.linkLabel}</span>
                <span aria-hidden="true">→</span>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
