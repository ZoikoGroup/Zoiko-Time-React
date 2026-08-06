import Link from "next/link";
import Image from "next/image";

const systems = [
  {
    icon: "/hr-people-teams/hr-systems.png",
    title: "HR & People Systems",
    description:
      "Worker profile, organization, role, manager, and employment-status sync.",
  },
  {
    icon: "/hr-people-teams/payroll-finance.png",
    title: "Payroll & Finance",
    description:
      "Approved time export, payroll preparation, project costing, reconciliation.",
  },
  {
    icon: "/hr-people-teams/identity-access.png",
    title: "Identity & Access",
    description:
      "SSO, MFA, role-based access, and lifecycle provisioning where supported.",
  },
  {
    icon: "/hr-people-teams/calendars-comms.png",
    title: "Calendars & Communication",
    description:
      "Schedule context, approved communications, and Zoiko Sema integration where operational.",
  },
  {
    icon: "/hr-people-teams/api-data.png",
    title: "API & Data",
    description:
      "Documented APIs, webhooks, export formats, and governance controls where public and GA.",
  },
];

export default function SystemFit() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-10 pt-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              System Fit
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Fits the Systems You Already Run
          </h2>

        </div>

        {/* System Cards */}
        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {systems.map((system) => (
            <div
              key={system.title}
              className="flex flex-col gap-6 rounded-2xl border border-slate-200 px-4 py-5 dark:border-slate-800"
            >

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#E6F9F1] dark:bg-slate-800">
                <Image
                  src={system.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] object-contain"
                />
              </div>

              <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {system.title}
              </h3>

              <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {system.description}
              </p>

            </div>
          ))}

        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs font-normal leading-6 text-gray-500 dark:text-slate-400">
          Available integrations vary by plan and deployment. Enterprise buyers
          should confirm required systems during evaluation
          <br />
          <Link
            href="/request-enterprise-demo"
            className="font-semibold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
          >
            Request Enterprise Demo
          </Link>
          .
        </p>

      </div>
    </section>
  );
}
