import Link from "next/link";
import Image from "next/image";

const policies = [
  "Jurisdiction and location policy profiles",
  "Role, employment type, and contractor policy differences",
  "Time zones, schedules, calendars, and configured working patterns",
  "Approval authority, review routing, and escalation",
  "Policy version history, effective dates, and controlled changes",
];

export default function GlobalPolicyControl() {
  return (
    <section className="w-full overflow-hidden bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-16 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-300"
                aria-hidden="true"
              />
              <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-300">
                Global Policy Control
              </p>
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-[1.4] text-white sm:text-4xl">
              One Workforce System. Policies That Reflect Where and How People
              Work.
            </h2>

            <p className="mt-6 text-base font-normal leading-6 text-white">
              Configure time, attendance, break, approval, and review rules by
              organization, location, role, schedule, and worker type — while
              maintaining one governed record model.
            </p>

            {/* Policy Rows */}
            <ol className="mt-7 flex flex-col gap-4">

              {policies.map((policy, index) => (
                <li
                  key={policy}
                  className="flex items-center gap-4 rounded-[10px] border border-white/10 bg-white/5 px-5 py-4"
                >

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-300/20 text-xs font-bold leading-5 text-emerald-300">
                    {index + 1}
                  </span>

                  <span className="text-sm font-normal leading-6 text-white/90">
                    {policy}
                  </span>

                </li>
              ))}

            </ol>

            <p className="mt-9 border-t border-white/10 pt-4 text-xs font-normal leading-5 text-white/60">
              Capabilities and service availability vary by jurisdiction, plan,
              and deployment. Confirm requirements with the ZoikoTime enterprise
              team.
            </p>

            <Link
              href="/global-deployment"
              className="mt-7 inline-flex items-center justify-center self-start rounded-full bg-emerald-600 px-6 py-3.5 text-base font-semibold leading-6 text-white transition hover:bg-emerald-700"
            >
              Discuss Global Deployment
            </Link>

          </div>

          {/* Right Image */}
          <div className="lg:pt-32">
            <Image
              src="/hr-people-teams/global-policy.png"
              alt="Team collaborating on workforce policy configuration"
              width={551}
              height={400}
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
