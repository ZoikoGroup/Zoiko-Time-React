import React from "react";
import { Info, HelpCircle } from "lucide-react";

export default function WhyThisPolicy() {
  const assignmentDetails = [
    "Assignment source and whether it is inherited or local",
    "Which specific fields were configured locally, and by whom",
    "Worker population and entity, team, or location scope",
    "Schedule or shift pattern and its version",
    "Any exception or override, with its own authority",
    "The evaluation timestamp and time zone",
  ]; 

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900 sm:px-12 lg:px-24    font-sans">
      <div className="mx-auto max-w-7.5xl">
        {/* Title Block */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Why this policy, for this record
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
            Applicability is evidence in its own right. &quot;The policy applied&quot; is not an
            answer — the answer is which assignment, which inheritance path, which population,
            and which schedule context put this record in scope.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Assignment Evidence Card */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-slate-850 dark:bg-slate-900 flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                Assignment evidence carries
              </h3>
              <ul className="space-y-4">
                {assignmentDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Inheritance Stack */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Inheritance is shown, not flattened
            </h3>
            
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-850 dark:bg-slate-900">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">
                Inherited policy
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-405 leading-relaxed">
                Source scope, source policy and version, the inherited fields, the target scope,
                and the effective period — so a reader can see what came from above.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-850 dark:bg-slate-900">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">
                Local configuration
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-405 leading-relaxed">
                Delegated fields only, with the local owner, the reason, the effective period,
                and the approval where one was required. A local change outside delegated fields
                is not possible, and the record shows the delegation boundary.
              </p>
            </div>

            {/* Read Only Alert */}
            <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/20 p-5 dark:border-emerald-950/40 dark:bg-emerald-950/10">
              <Info className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
              <p className="text-sm text-emerald-800 dark:text-emerald-400">
                Policy authoring, assignment, publication, and rollback happen in{" "}
                <span className="font-bold">Administration &amp; Policy Controls</span>. This
                viewer is read-only by design — inspecting evidence and changing configuration are
                different authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
