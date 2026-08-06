'use client';

import React from 'react';
import {
  FileText,
  Users,
  Globe,
  History,
  GitPullRequest,
  ShieldCheck,
  Archive,
  Eye,
  AlignLeft,
  Lock,
  CircleAlertIcon,
  CircleCheck,
  SquareCheck,
  User,
  Shield,
} from 'lucide-react';

export default function ControlDomainsSection() {
  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Control Domains
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-4xl dark:text-white">
            Everything an administrator governs — in one place
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">
            Set the rules and boundaries; ZoikoTime applies them deterministically and keeps every action accountable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1: Deterministic policy configuration (Large Feature Card - Spans 2 cols & 2 rows on Desktop) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 md:col-span-2 lg:row-span-2 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
            <div>
              {/* Icon */}
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-[0px_4px_10px_0px_rgba(16,162,141,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:from-gray-800 dark:to-gray-900 dark:outline-teal-900/50">
                <AlignLeft className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-slate-800 dark:text-white">
                Deterministic policy configuration
              </h3>

              {/* Description */}
              <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">
                Configure time, attendance, break & rest, overtime, and approval rules bound to an effective policy version and jurisdiction context. Rules are policy-bound and reviewable —{' '}
                <strong className="font-bold text-gray-700 dark:text-gray-200">never AI scoring</strong>
                {' '}— so administrators can inspect exactly what will apply and why.
              </p>
            </div>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-2.5 z-10">
              {[
                'Policy version',
                'Effective period',
                'Precedence',
                'Approved exceptions',
                'Jurisdiction scope',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-slate-800 shadow-sm outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:bg-gray-800 dark:text-gray-200 dark:outline-teal-900/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Radial Glow Overlay */}
            <div
              className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.15)_0%,transparent_70%)]"
              aria-hidden="true"
            />
          </div>

          {/* Card 2: Roles, access & segregation of duties */}
          <div className="flex flex-col rounded-2xl bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-[0px_4px_10px_0px_rgba(16,162,141,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:from-gray-800 dark:to-gray-900 dark:outline-teal-900/50">
              <Lock className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="mb-2 text-base font-semibold leading-snug text-slate-800 dark:text-white">
              Roles, access &amp;<br className="hidden sm:inline" /> segregation of duties
            </h3>
            <p className="text-sm font-normal leading-relaxed text-gray-500 dark:text-gray-400">
              Role-based access with least privilege. Request, review, approval, configuration, export, and execution may require different roles.
            </p>
          </div>

          {/* Card 3: Jurisdiction-aware policy */}
          <div className="flex flex-col rounded-2xl bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-[0px_4px_10px_0px_rgba(16,162,141,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:from-gray-800 dark:to-gray-900 dark:outline-teal-900/50">
              <Globe className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="mb-2 text-base font-semibold leading-snug text-slate-800 dark:text-white">
              Jurisdiction-aware<br className="hidden sm:inline" /> policy
            </h3>
            <p className="text-sm font-normal leading-relaxed text-gray-500 dark:text-gray-400">
              Scope policy by organization, location, and worker population. Region-specific behavior is subject to the published availability register.
            </p>
          </div>

          {/* Card 4: Policy versioning */}
          <div className="flex flex-col rounded-2xl bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-[0px_4px_10px_0px_rgba(16,162,141,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:from-gray-800 dark:to-gray-900 dark:outline-teal-900/50">
              <AlignLeft className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="mb-2 text-base font-semibold leading-snug text-slate-800 dark:text-white">
              Policy versioning
            </h3>
            <p className="text-sm font-normal leading-relaxed text-gray-500 dark:text-gray-400">
              Effective periods, precedence, and superseded history — nothing is silently overwritten.
            </p>
          </div>

          {/* Card 5: Change control & approvals */}
          <div className="flex flex-col rounded-2xl bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-[0px_4px_10px_0px_rgba(16,162,141,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:from-gray-800 dark:to-gray-900 dark:outline-teal-900/50">
              <CircleCheck className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="mb-2 text-base font-semibold leading-snug text-slate-800 dark:text-white">
              Change control &amp;<br className="hidden sm:inline" /> approvals
            </h3>
            <p className="text-sm font-normal leading-relaxed text-gray-500 dark:text-gray-400">
              Draft, review, approve, and publish with a required reason and an audit event on every change.
            </p>
          </div>

          {/* Card 6: Audit of every administrative action (Wide Card - Spans 2 cols on Desktop) */}
          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 md:col-span-2 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
            <div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-[0px_4px_10px_0px_rgba(16,162,141,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:from-gray-800 dark:to-gray-900 dark:outline-teal-900/50">
                <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold leading-snug text-slate-800 dark:text-white">
                Audit of every administrative action
              </h3>
              <p className="text-sm font-normal leading-relaxed text-gray-500 dark:text-gray-400">
                Actor, role, before/after, reason, timestamp, and audit reference are recorded — configuration and policy history stay traceable and reviewable.
              </p>
            </div>
          </div>

          {/* Card 7: Retention & legal hold */}
          <div className="flex flex-col rounded-2xl bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-[0px_4px_10px_0px_rgba(16,162,141,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:from-gray-800 dark:to-gray-900 dark:outline-teal-900/50">
              <SquareCheck className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="mb-2 text-base font-semibold leading-snug text-slate-800 dark:text-white">
              Retention &amp; legal hold
            </h3>
            <p className="text-sm font-normal leading-relaxed text-gray-500 dark:text-gray-400">
              Configure retention and preserve relevant records under legal hold, according to policy and agreement.
            </p>
          </div>

          {/* Card 8: Worker transparency notices */}
          <div className="flex flex-col rounded-2xl bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-[0px_4px_10px_0px_rgba(16,162,141,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:from-gray-800 dark:to-gray-900 dark:outline-teal-900/50">
              <User className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="mb-2 text-base font-semibold leading-snug text-slate-800 dark:text-white">
              Worker transparency<br className="hidden sm:inline" /> notices
            </h3>
            <p className="text-sm font-normal leading-relaxed text-gray-500 dark:text-gray-400">
              Configure notices and acknowledgments so workers understand the policy that applies to them.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}