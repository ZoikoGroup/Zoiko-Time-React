import React from "react";

export default function EnterpriseControls() {
  const controls = [
    {
      title: "Role-based access",
      description:
        "Mobile visibility depends on role, permission, team scope, tenant scope, and policy configuration.",
    },
    {
      title: "Tenant isolation",
      description:
        "Mobile sessions enforce tenant isolation at API, data, dashboard, notification, report, and export layers.",
    },
    {
      title: "Region awareness",
      description:
        "Mobile data follows the tenant's configured data region and residency commitments.",
    },
    {
      title: "Secure authentication",
      description:
        "Secure login, session control, MFA for administrative roles, and SSO where available.",
    },
    {
      title: "Session governance",
      description:
        "Mobile sessions are identifiable, revocable, and audit-logged.",
    },
    {
      title: "Policy-controlled actions",
      description:
        "Clock-in, breaks, clock-out, Early Finish, and manager actions follow tenant policy.",
    },
    {
      title: "Audit trail",
      description:
        "Critical mobile actions create audit records available to authorized reviewers.",
    },
    {
      title: "No hidden monitoring",
      description:
        "The app never operates as a covert monitoring tool.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-slate-950 px-5 py-16 sm:px-8 lg:min-h-[689px] lg:px-10 lg:py-[74px]">
      <div className="mx-auto max-w-[1180px] text-center">
        {/* Label */}
        <p className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-400">
          Enterprise Controls
        </p>

        {/* Heading */}
        <h2 className="mt-2.5 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          Enterprise mobile controls
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm font-normal leading-7 text-slate-400 sm:text-base">
          Mobile extends governance — it never becomes covert monitoring.
        </p>

        {/* Controls */}
        <div className="mx-auto mt-12 max-w-[1120px] space-y-6 lg:mt-[66px] lg:space-y-0">
          {controls.map((control) => (
            <div key={control.title} className="text-center">
              <h3 className="text-sm font-bold leading-5 text-slate-200">
                {control.title}
              </h3>

              <p className="mx-auto mt-1 max-w-[850px] text-sm font-normal leading-6 text-slate-400 sm:text-base">
                {control.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}