import React from "react";

export default function AccessPathways() {
  const pathways = [
    {
      label: "Worker",
      title: "Invited by employer",
      description:
        "The Worker receives access from the organization, signs in, and uses the app based on tenant policy and role permissions.",
      badge: "Log In",
    },
    {
      label: "Manager / Admin",
      title: "Existing workspace",
      description:
        "Managers and Admins sign in with approved workspace credentials and see only permitted teams, records, and settings.",
      badge: "Log In",
    },
    {
      label: "Enterprise",
      title: "Pilot access",
      description:
        "Organizations evaluating mobile can request controlled pilot access before wider rollout.",
      badge: "By approval",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-slate-950 px-5 py-16 sm:px-8 lg:min-h-[545px] lg:px-10 lg:py-[74px]">
      {/* Header */}
      <div className="mx-auto max-w-[700px] text-center">
        <p className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-400">
          Access
        </p>

        <h2 className="mt-2.5 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          Access pathways
        </h2>

        <p className="mt-4 text-sm font-normal leading-7 text-slate-400 sm:text-base">
          Downloading the app alone does not create access — access requires an
          <br className="hidden sm:block" />
          authorized workspace, invitation, or approved login.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-[1132px] gap-5 sm:grid-cols-2 lg:mt-[76px] lg:grid-cols-3 lg:gap-5">
        {pathways.map((pathway) => (
          <div
            key={pathway.label}
            className="relative min-h-[208px] rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-[0px_6px_18px_rgba(0,0,0,0.25)]"
          >
            {/* Label */}
            <p className="text-xs font-semibold uppercase leading-4 tracking-[0.08em] text-teal-400">
              {pathway.label}
            </p>

            {/* Badge */}
            <span className="absolute right-6 top-5 rounded-full bg-teal-950 px-3 py-1 text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-teal-400">
              {pathway.badge}
            </span>

            {/* Title */}
            <h3 className="mt-2.5 text-base font-semibold leading-7 text-slate-100">
              {pathway.title}
            </h3>

            {/* Description */}
            <p className="mt-3 max-w-[310px] text-sm font-normal leading-6 text-slate-400">
              {pathway.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}