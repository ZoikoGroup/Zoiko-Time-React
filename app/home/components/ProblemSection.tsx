import Image from "next/image";
import { Info } from "lucide-react";

const risks = [
  {
    icon: '/home/I.png',
    title: "Unverified Work Sessions",
    description:
      "Leads to uncertainty in time data integrity and payroll accuracy.",
  },
  {
    icon: '/home/Icon-2-2.png',
    title: "Activity Inflation & Automation Noise",
    description:
      "Creates misleading records and weakens trust in reported work.",
  },
  {
    icon:'/home/I-1.png',
    title: "Outcomes Masked by Activity Noise",
    description:
      "Leaders lose visibility into what actually happened and what can be defended.",
  },
  {
    icon: '/home/Icon-2-4.png',
    title: "Conflict-of-Commitment Risk",
    description:
      "Undisclosed parallel work can create legal, policy, and operational exposure.",
  },
  {
    icon: '/home/Icon-2-5.png',
    title: "Wage-and-Hour Exposure",
    description:
      "Inconsistent time evidence increases compliance and dispute risk.",
  },
  {
    icon: '/home/Icon-2-6.png',
    title: "Security & Access Policy Drift",
    description:
      "Distributed work can weaken control over identity, access, and policy alignment.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wide text-emerald-500 dark:text-emerald-400">
              The New Reality of Work
            </span>
            <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">
              Distributed Work Increased Flexibility and Operational Risk
            </h2>
            <p className="max-w-xl text-lg leading-7 text-zinc-700 dark:text-gray-300">
              As teams became more distributed, many organizations lost
              consistent visibility into how time, access, and outcomes aligned
              with policy. The result is growing exposure across payroll,
              compliance, security, and audit.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm dark:border-gray-700">
            <Image
              className="h-64 w-full object-cover sm:h-96"
              width={612}
              height={408}
              src="/home/image 80.png"
              alt="Team reviewing dashboards"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {risks.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-[#F7FFFB] p-8 dark:border-gray-700 dark:bg-gray-800"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-slate-50 dark:bg-gray-700">
                <img className="size-5 " src={icon} />
              </span>
              <p className="text-base font-bold leading-6 text-slate-950 dark:text-white">
                {title}
              </p>
              <p className="text-sm leading-5 text-zinc-700 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-emerald-800/20 bg-slate-50 px-6 py-6 dark:border-emerald-500/20 dark:bg-gray-800 sm:items-center sm:px-8">
          <Info className="mt-0.5 size-5 shrink-0 text-emerald-500 dark:text-emerald-400 sm:mt-0" />
          <p className="text-base font-semibold leading-6 text-slate-950 dark:text-white">
            ZoikoTime addresses these risks without invasive monitoring, using
            deterministic classification, evidence-backed records, and human
            review.
          </p>
        </div>
      </div>
    </section>
  );
}
