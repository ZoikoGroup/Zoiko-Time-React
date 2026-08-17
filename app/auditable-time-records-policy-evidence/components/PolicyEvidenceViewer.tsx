import React from "react";
import { CheckCircle2, AlertTriangle, XCircle, PlayCircle, HelpCircle, ShieldAlert, Award, FileSpreadsheet, Lock, Plus } from "lucide-react";

export default function PolicyEvidenceViewer() {
  const steps = [
    {
      num: 1,
      type: "Source fact",
      title: "Shift boundaries and break record",
      desc: "Check-in 06:58, check-out 14:12, break 45m · source: terminal SRC-4471 · received 04 Aug 06:58 and 14:12 · Europe/Berlin · quality: verified for this scope",
      statusText: "Available",
      statusType: "success",
      icon: CheckCircle2,
    },
    {
      num: 2,
      type: "Applicability fact",
      title: "Worker in scope of FN-WT v3",
      desc: "Field technician · North entity · Northgate · shift pattern RS-2 v5 active on the record date",
      statusText: "In scope",
      statusType: "success",
      icon: CheckCircle2,
    },
    {
      num: 3,
      type: "Condition",
      title: "Worked duration exceeds standard shift threshold",
      desc: "Operator: greater than · parameter: 7h 00m standard · evaluated value: 6h 29m net of break",
      statusText: "Did not match",
      statusType: "neutral",
      icon: XCircle,
    },
    {
      num: 3,
      type: "Condition",
      title: "Break duration meets minimum for shift length",
      desc: "Operator: at least · parameter: 30m for shifts over 6h · evaluated value: 45m",
      statusText: "Matched",
      statusType: "success",
      icon: CheckCircle2,
    },
    {
      num: 3,
      type: "Condition",
      title: "Required project reference present",
      desc: "Operator: present · parameter: required for site work · evaluated value: absent at time of evaluation",
      statusText: "Not evaluated",
      statusType: "warning",
      icon: HelpCircle,
    },
    {
      num: 4,
      type: "Matched rule",
      title: "Standard shift with compliant break — FN-WT v3, rule R-14",
      desc: "Purpose: classify a within-threshold field shift where break requirements are satisfied · precedence: standard, rank 3",
      statusText: "Applied",
      statusType: "success",
      icon: CheckCircle2,
    },
    {
      num: 5,
      type: "Approved exception · alters normal behaviour here",
      title: "Site travel allowance EXC-0231",
      desc: "Scope: Northgate site, Aug 2026 · reason category: temporary access restriction · authority: Field operations director · conditions: applies to first shift of day only · start 01 Aug · expiry 31 Aug · review 24 Aug · fallback: standard rule R-14",
      statusText: "Adds 20m",
      statusType: "highlight",
      icon: Plus,
    },
    {
      num: 6,
      type: "Calculation",
      title: "Net duration with rounding and time zone applied",
      desc: "Method CALC-v7 · rounding: nearest minute · time zone Europe/Berlin with DST resolved at capture · units: hours and minutes · 7h 14m gross, less 45m break, plus 20m allowance",
      statusText: "Complete",
      statusType: "success",
      icon: CheckCircle2,
    },
    {
      num: 7,
      type: "Deterministic output",
      title: "Standard field shift · 6h 49m classified",
      desc: "Classification version CLS-v12 · evaluated 04 Aug 19:04 CEST · result state: produced, pending review",
      statusText: "Produced",
      statusType: "success",
      icon: CheckCircle2,
    },
    {
      num: 8,
      type: "Review requirement",
      title: "Information required, then authorized human review",
      desc: "The project reference could not be evaluated, so the record needs context before review completes · owner: unit reviewer, Field Services North",
      statusText: "Required",
      statusType: "warning",
      icon: AlertTriangle,
    },
    {
      num: 9,
      type: "Downstream boundary",
      title: "Blocked for the configured next step",
      desc: "Not eligible for export until the information requirement clears and review completes. This states configured eligibility — it is not a payroll or disciplinary decision.",
      statusText: "Blocked",
      statusType: "blocked",
      icon: Lock,
    },
  ];

  return (
    <section className="bg-white px-6 py-16 dark:bg-gray-900 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7.5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl font-sans">
            Policy Evidence Viewer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300 font-sans">
            A synthetic record with its full deterministic trace. Every condition shows a text
            label and an icon — never colour alone — and the matched rule is named in plain
            language rather than left as an internal code.
          </p>
        </div>

        {/* Viewer Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 font-sans">
          {/* Viewer Header */}
          <div className="flex flex-col gap-4 border-b border-gray-200 bg-gray-50/70 p-6 dark:border-slate-800 dark:bg-slate-850 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Record TR-77841 · version 3 · 04 Aug 2026
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Field Services North · evaluated 04 Aug 19:04 CEST · all values synthetic
              </p>
            </div>
            <div className="self-start sm:self-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                <AlertTriangle className="h-3.5 w-3.5" />
                Human review required
              </span>
            </div>
          </div>

          {/* Snapshot Grid */}
          <div className="grid grid-cols-1 divide-y divide-gray-200 border-b border-gray-200 dark:divide-slate-800 dark:border-slate-800 lg:grid-cols-2 lg:divide-y-0 lg:divide-x">
            {/* Historical Snapshot Column */}
            <div className="p-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Historical policy snapshot
              </span>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs">
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Policy</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200 font-medium">
                    Field North Working Time · FN-WT
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Version</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">
                    v3 — <span className="font-bold text-emerald-600 dark:text-emerald-400">pinned to this record</span>
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Effective</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">01 Aug 2026 – 09 Aug 2026</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Status</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">Superseded by v4 on 10 Aug</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Owner</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200 font-medium">
                    Workforce policy, Field division
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Approved</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">Yes · 28 Jul 2026</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Scope</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">Field Services, North entity</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Jurisdiction context</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">DE — configuration context only</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Source authority</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">Authoritative for this scope</p>
                </div>
              </div>
            </div>

            {/* Applicability Snapshot Column */}
            <div className="p-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Applicability
              </span>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs">
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Assignment source</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200 font-medium">Entity-level assignment</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Inherited / local</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">
                    Inherited from Field division, two fields configured locally
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Worker population</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200 font-medium">Field technicians, North</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Team / location scope</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">Northgate site</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Schedule context</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">Rotating shift pattern RS-2, version 5</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Exception / override</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200">
                    One approved exception applied — see step 5
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">Evaluated at</span>
                  <p className="mt-0.5 text-slate-800 dark:text-slate-200 font-medium">04 Aug 2026 19:04 CEST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stepper Rule Trace steps */}
          <div className="divide-y divide-gray-100 dark:divide-slate-800/60">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isHighlight = step.statusType === "highlight";
              
              // Style templates based on type
              let bgStyle = "bg-white dark:bg-slate-900";
              let badgeStyle = "bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-gray-300 border-gray-200 dark:border-slate-700";
              let pillStyle = "bg-gray-50 text-gray-600 border-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:border-slate-700";
              
              if (step.statusType === "success") {
                pillStyle = "bg-emerald-50 text-emerald-700 border-emerald-250 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900";
              } else if (step.statusType === "warning") {
                pillStyle = "bg-amber-50 text-amber-700 border-amber-250 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900";
              } else if (step.statusType === "blocked") {
                pillStyle = "bg-rose-50 text-rose-700 border-rose-250 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900";
              } else if (isHighlight) {
                bgStyle = "bg-amber-50/50 dark:bg-amber-950/10 border-l-4 border-l-amber-500";
                badgeStyle = "bg-amber-500 text-white dark:bg-amber-600 border-amber-500";
                pillStyle = "bg-amber-500 text-white border-amber-500 dark:bg-amber-600 dark:text-white dark:border-amber-600";
              }

              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 ${bgStyle}`}
                >
                  {/* Numeric Indicator */}
                  <div className="flex sm:flex-col items-center justify-between sm:justify-start">
                    <div className={`h-7 w-7 rounded-md border flex items-center justify-center text-xs font-bold ${badgeStyle}`}>
                      {step.num}
                    </div>
                    {/* Visual Connector Line for desktop */}
                    <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-slate-800 mx-auto mt-2" />
                  </div>

                  {/* Step Description */}
                  <div className="flex-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                      {step.type}
                    </span>
                    <h4 className={`text-sm font-bold mt-1 ${isHighlight ? "text-amber-800 dark:text-amber-400" : "text-slate-900 dark:text-white"}`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Accessible Pill Badge */}
                  <div className="flex items-center self-start sm:self-center">
                    <span className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-bold shadow-sm ${pillStyle}`}>
                      <IconComp className="h-3.5 w-3.5 shrink-0" />
                      {step.statusText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Limitations alert banner */}
          <div className=" bg-amber-50/20 p-6  dark:bg-amber-950/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-450 block">
              Limitations on this evidence
            </span>
            <p className="mt-2 text-xs leading-relaxed text-amber-900 dark:text-amber-400">
              One condition could not be evaluated because a required fact was absent, so the trace
              is complete but the record is not. FN-WT v3 is pinned here and remains pinned even though
              v4 is now current. This trace shows which rules ran and what they produced — it does not
              establish that the policy was legally sufficient, that every source fact was correct, or
              that any subsequent human decision was justified.
            </p>
          </div>

          {/* Card Sub-footer */}
          <div className="flex flex-col gap-2 bg-gray-50/40 px-6 py-4 dark:bg-slate-900/60 sm:flex-row sm:items-center sm:justify-between text-[11px] text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-slate-800">
            <span>Ordered list is the primary representation; expandable detail has a complete text alternative</span>
            <span className="font-bold uppercase tracking-wider">Synthetic record</span>
          </div>
        </div>
      </div>
    </section>
  );
}
