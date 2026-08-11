import Link from "next/link";

const controls = [
  {
    title: "Role scope",
    description:
      "Global, entity, regional, location, deployment, policy, identity, integration, support, legal and privacy, auditor, viewer.",
  },
  {
    title: "Least privilege",
    description:
      "Temporary and emergency access carries purpose, scope, approver, expiry, review, revocation, and evidence.",
  },
  {
    title: "Separation of duties",
    description:
      "No single role defines scope, approves legal and data readiness, activates rollout, and closes evidence where separation is required.",
  },
  {
    title: "Access review",
    description:
      "Privileged, cross-entity, regional, support, export, and service-identity access is reviewed before and after rollout.",
  },
  {
    title: "Failure behavior",
    description:
      "Authentication or authorization failure does not broaden access or bypass approval. There is no privilege fallback.",
    accent: true,
  },
  {
    title: "Evidence",
    description:
      "Actor, role, scope, action, object, timestamp, result, reason category, and references — subject to data minimization.",
  },
];

export default function IdentityAccess() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[470px_1fr] lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
              Identity &amp; Access Across Boundaries
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Failure Never Broadens Access
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Every account and service identity resolves to an approved
              organization and lifecycle authority. Location is never used to
              guess who someone is or what they may do.
            </p>

            <Link
              href="/identity-access-management"
              className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold leading-6 text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400"
            >
              <span>Identity &amp; Access</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

          {/* Control Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {controls.map((control) => (
              <div
                key={control.title}
                className={`flex flex-col rounded-2xl border px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900 ${
                  control.accent
                    ? "border-emerald-100 bg-emerald-50/40"
                    : "border-stone-200 bg-white shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)]"
                }`}
              >

                <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  {control.title}
                </h3>

                <p className="mt-2 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  {control.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
