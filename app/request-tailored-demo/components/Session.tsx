import {
  Activity,
  Brain,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Users,
} from "lucide-react";

const topics = [
  {
    title: "Workforce activity & time evidence",
    description: "Governed records of what happened, when, and who approved it.",
    icon: Activity,
  },
  {
    title: "Compliance & audit readiness",
    description: "Audit-ready trails, retention, and evidence built for scrutiny.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-jurisdiction operations",
    description: "Cross-border policy, residency, and local rules from one platform.",
    icon: Globe2,
  },
  {
    title: "AI-assisted intelligence",
    description: "Human-in-command AI that explains decisions and flags exceptions.",
    icon: Brain,
  },
  {
    title: "Payroll & approval integrity",
    description: "Accurate inputs and disciplined approval flows that reduce disputes.",
    icon: CheckCircle2,
  },
  {
    title: "Implementation readiness",
    description: "A practical view of the path from evaluation to deployment.",
    icon: Users,
  },
];

export default function Session() {
  return (
    <section className="bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            In Your Session
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            What your tailored demo will cover
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 dark:text-slate-400">
            Every part of the session adapts to your workforce model and
            selected use case.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <div
                key={topic.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-teal-950/50">
                  <Icon className="h-5 w-5 text-teal-600" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}