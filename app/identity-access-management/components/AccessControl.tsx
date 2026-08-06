import Image from "next/image";

const capabilities = [
  {
    icon: "/identity-access-management/Single-sign-on.svg",
    title: "Single sign-on",
    description:
      "Sign in once with your identity provider. SSO enforcement and supported protocols vary by plan and environment.",
  },
  {
    icon: "/identity-access-management/Strong-step-up-auth.svg",
    title: "Strong & step-up auth",
    description:
      "Multi-factor authentication, with step-up required for sensitive administrative actions.",
  },
  {
    icon: "/identity-access-management/Lifecycle-provisioning.svg",
    title: "Lifecycle provisioning",
    description:
      "Automate joiner, mover, and leaver so access is granted and removed as roles change.",
  },
  {
    icon: "/identity-access-management/Role-based-access.svg",
    title: "Role-based access",
    description:
      "Least-privilege roles with segregation of duties, scoped by organization, team, and worker type.",
  },
  {
    icon: "/identity-access-management/Time-bound-access.svg",
    title: "Time-bound access",
    description:
      "Just-in-time elevation with approval, a required reason, and automatic expiry.",
  },
  {
    icon: "/identity-access-management/Access-reviews.svg",
    title: "Access reviews",
    description:
      "Recurring certification campaigns so entitlements stay current and defensible.",
  },
  {
    icon: "/identity-access-management/Sessions-devices.svg",
    title: "Sessions & devices",
    description:
      "Identifiable, revocable, audit-logged sessions with device records and recovery.",
  },
  {
    icon: "/identity-access-management/Audit-evidence.svg",
    title: "Audit & evidence",
    description:
      "Every access event recorded with actor, reason, and time — traceable and reviewable.",
  },
];

export default function AccessControl() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Access Control, End to End
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            Everything you need to govern identity and access
          </h2>

          <p className="max-w-[680px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Eight core capabilities that keep access least-privilege,
            time-appropriate, and accountable — without ever monitoring worker
            activity.
          </p>

        </div>

        {/* Capability Cards */}
        <div className="mx-auto mt-12 grid w-full max-w-[1064px] grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">

          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="flex flex-col rounded-2xl border border-[#E4E9EE] bg-white p-[25px] shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C9EAE2] bg-gradient-to-br from-[#EAF6F3] to-white shadow-[0px_5px_12px_0px_rgba(16,162,141,0.12)] dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
                <Image
                  src={capability.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </span>

              <h3 className="mt-4 text-base font-semibold leading-6 text-[#0E1F3D] dark:text-white">
                {capability.title}
              </h3>

              <p className="mt-2 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                {capability.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
