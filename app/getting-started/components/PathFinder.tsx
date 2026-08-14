"use client";

import { useState } from "react";
import Link from "next/link";

const roles = [
  "Owner / Admin",
  "HR & People Ops",
  "Manager",
  "Worker",
  "Payroll Reviewer",
  "IT & Security",
  "Privacy Team",
  "Partner",
];

const paths: Record<
  string,
  {
    label: string;
    title: string;
    description: string;
    steps: string[];
  }
> = {
  "Owner / Admin": {
    label: "Owners & Admins",
    title: "Admin Setup",
    description:
      "Stand up the organization, assign roles, and draft the first policy pack before anyone else touches the account.",
    steps: [
      "Confirm organization profile",
      "Assign owner & backup admin",
      "Draft first policy pack",
      "Invite HR & IT collaborators",
      "Enter the sandbox to test rules",
    ],
  },

  "HR & People Ops": {
    label: "HR & People Ops",
    title: "People Operations Setup",
    description:
      "Configure workforce policies, roles, approval workflows, and worker communication before rollout.",
    steps: [
      "Define workforce structure",
      "Configure HR policies",
      "Assign approval responsibilities",
      "Prepare worker communication",
      "Validate the rollout plan",
    ],
  },

  Manager: {
    label: "Managers",
    title: "Manager Readiness",
    description:
      "Learn how to review records, resolve exceptions, approve timesheets, and support your team.",
    steps: [
      "Review manager responsibilities",
      "Understand approval workflows",
      "Review worker corrections",
      "Resolve exceptions",
      "Approve workforce records",
    ],
  },

  Worker: {
    label: "Workers",
    title: "Worker Setup",
    description:
      "Understand how to record time, review your records, request corrections, and get help when something looks wrong.",
    steps: [
      "Complete your profile",
      "Learn time tracking",
      "Review your records",
      "Submit corrections when needed",
      "Understand privacy controls",
    ],
  },

  "Payroll Reviewer": {
    label: "Payroll Reviewers",
    title: "Payroll Readiness",
    description:
      "Prepare approved workforce records for payroll while identifying gaps, exceptions, and unresolved corrections.",
    steps: [
      "Review payroll cutoff",
      "Check record completeness",
      "Review outstanding exceptions",
      "Validate approvals",
      "Prepare payroll handoff",
    ],
  },

  "IT & Security": {
    label: "IT & Security",
    title: "Security Setup",
    description:
      "Configure access, integrations, security controls, and administrative permissions for your organization.",
    steps: [
      "Review security requirements",
      "Configure access controls",
      "Set administrative permissions",
      "Review integrations",
      "Validate security settings",
    ],
  },

  "Privacy Team": {
    label: "Privacy Team",
    title: "Privacy & Governance",
    description:
      "Review privacy controls, data processing, retention, access, and worker transparency requirements.",
    steps: [
      "Review data processing",
      "Configure privacy controls",
      "Review retention policies",
      "Validate worker transparency",
      "Complete privacy review",
    ],
  },

  Partner: {
    label: "Partners",
    title: "Partner Setup",
    description:
      "Understand the ZoikoTime platform, integration model, and partner workflows before supporting customers.",
    steps: [
      "Understand the platform",
      "Review partner requirements",
      "Explore integrations",
      "Test the partner workflow",
      "Prepare for customer rollout",
    ],
  },
};

export default function PathFinder() {
  const [selectedRole, setSelectedRole] = useState("Owner / Admin");

  const selectedPath = paths[selectedRole];

  return (
    <section
    id="path-finder"
     className="w-full bg-white px-4 py-14 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1232px]">

        {/* Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-bold uppercase tracking-[0.08em] text-emerald-600 dark:text-emerald-400">
              Path Finder
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-sky-950 dark:text-white sm:text-4xl">
            Tell us your role, we'll show the path.
          </h2>

          <p className="mt-5 max-w-[620px] text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            Every role reaches ZoikoTime through a different door. Pick yours
            to see the exact steps, in order, with nothing assumed.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-10 rounded-[20px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900 sm:mt-12 sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_533px] lg:gap-10">

            {/* LEFT - Roles */}
            <div className="flex flex-col">

              {/* Role Buttons */}
              <div className="flex flex-wrap gap-3">
                {roles.map((role) => {
                  const isActive = selectedRole === role;

                  return (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setSelectedRole(role)}
                      className={`
                        rounded-full
                        border
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        transition-all
                        duration-200
                        sm:px-5
                        ${
                          isActive
                            ? "border-sky-950 bg-sky-950 text-white shadow-sm dark:border-teal-500 dark:bg-teal-600"
                            : "border-slate-200 bg-white text-sky-950 hover:border-teal-400 hover:bg-teal-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-teal-500 dark:hover:bg-slate-700"
                        }
                      `}
                    >
                      {role}
                    </button>
                  );
                })}
              </div>

              {/* Helper Text */}
              <p className="mt-6 max-w-[530px] text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
                Select a role to update the recommended path on the right. You
                can start any track — nothing here locks you in.
              </p>
            </div>

            {/* RIGHT - Path Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,34,71,0.06)] dark:border-slate-700 dark:bg-slate-800 sm:p-6">

              {/* Label */}
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-emerald-600 dark:text-emerald-400">
                {selectedPath.label}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-xl font-bold text-sky-950 dark:text-white">
                {selectedPath.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {selectedPath.description}
              </p>

              {/* Steps */}
              <div className="mt-7 space-y-3.5">
                {selectedPath.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/zoikotime-path-steps"
                className="mt-8 inline-flex rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Start this path
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}