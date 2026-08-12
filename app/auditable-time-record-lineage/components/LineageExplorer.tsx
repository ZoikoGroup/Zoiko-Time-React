import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

function TimelineNode({
  index,
  label,
  title,
  titleClass = "text-blue-700 dark:text-blue-300",
  body,
  warn = false,
  selected = false,
  last = false,
}: {
  index: number;
  label: string;
  title: string;
  titleClass?: string;
  body: ReactNode;
  warn?: boolean;
  selected?: boolean;
  last?: boolean;
}) {
  return (
    <div className="relative flex items-start gap-3">
      <div className="relative flex flex-col items-center">
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border-2 text-[10px] font-extrabold ${
            warn
              ? "border-amber-400 bg-white text-amber-700 dark:bg-gray-900 dark:text-amber-400"
              : selected
                ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                : "border-gray-200 bg-white text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400"
          }`}
        >
          {index}
        </div>
        {!last && <div className="mt-1 w-0.5 flex-1 bg-gray-200 dark:bg-gray-700" />}
      </div>
      <div
        className={`mb-3 flex-1 rounded-[10px] border px-3 py-3 ${
          warn
            ? "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-900/20"
            : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
        }`}
      >
        <div className="mb-1 text-[9px] font-extrabold uppercase tracking-wide text-gray-400 dark:text-gray-500">
          {label}
        </div>
        <div className={`mb-1 text-sm font-bold ${titleClass}`}>{title}</div>
        <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">{body}</p>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{label}</dt>
      <dd className="text-xs leading-5 text-gray-600 dark:text-gray-300">{value}</dd>
    </div>
  );
}

export default function LineageExplorer() {
  return (
    <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        <SectionHeading
          title="Lineage Explorer"
          description={
            <>
              A synthetic record with its first-degree relationships. Every
              relationship is labelled in text - the visual connector is decorative,
              and the chain below remains fully understandable as an ordered list
              without it.
            </>
          }
        />

        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Record TR-77841 - version 3
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Field Services North - period 28 Jul - 03 Aug 2026 - all values synthetic
              </div>
            </div>
            <span className="w-fit rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
              Lineage partially available
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 border-b border-gray-200 bg-gray-50/60 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-900/40">
            {[
              "All relationships",
              "Source",
              "Policy",
              "Correction",
              "Approval",
              "Export",
              "Downstream",
              "Depth 1",
              "Depth 2",
            ].map((label, i) => (
              <span
                key={label}
                className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${
                  i === 0
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                    : "border-gray-200 bg-white text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 bg-gray-50/40 px-4 py-6 dark:bg-gray-900/30">
            <TimelineNode
              index={1}
              label="Captured from"
              title="Source event - terminal check-in"
              body="Source reference SRC-4471 - captured 04 Aug 06:58 CEST - received 04 Aug 06:58 - source status: authoritative for this scope"
            />
            <TimelineNode
              index={2}
              label="Derived from"
              title="Derived record - classified duration"
              body="Rule version CLS-v12 - inputs: check-in, check-out, break record - produced 04 Aug 19:04 - deterministic, not AI"
            />
            <TimelineNode
              index={3}
              label="Evaluated against"
              title="Policy context - partially unavailable"
              titleClass="text-amber-700 dark:text-amber-400"
              warn
              body={
                <>
                  Policy FN-v3 applied at derivation. The v2 record that covered 28-31
                  Jul <span className="font-bold">was not retained</span>. Current
                  policy is not inferred backwards - this record remains review-limited
                  for that window.
                </>
              }
            />
            <TimelineNode
              index={4}
              label="Corrects - supersedes v2"
              title="Correction - project reference added"
              body="COR-0912 - changed field: project reference - reason: missing at capture - submitted by worker 06 Aug 08:14 - prior version preserved"
            />
            <TimelineNode
              index={5}
              label="Approved by - selected"
              title="Human approval - unit reviewer"
              selected
              body="DEC-2288 - role: unit reviewer - authority scope: Field Services North - outcome: approved with reason - separation of duties: satisfied - effective 07 Aug 09:30"
            />
            <TimelineNode
              index={6}
              label="Exported as - sent to"
              title="Export - payroll input package"
              body="EXP-5510 v1 - purpose: payroll input - manifest MF-5510 - generated and sent 08 Aug 02:10 - destination: configured payroll target"
            />
            <TimelineNode
              index={7}
              label="Acknowledged by"
              title="Target acknowledgment - accepted"
              body="ACK-5510-1 - returned status: accepted - returned version v1 - received 08 Aug 02:14 - acceptance is not proof of correct processing"
            />
            <TimelineNode
              index={8}
              label="Reconciled with"
              title="Reconciliation - mismatch open"
              titleClass="text-amber-700 dark:text-amber-400"
              warn
              last
              body="Expected v3, observed v1 at target. The export carried v1 before the correction landed. Owner: payroll operations - reconciliation open, not resolved."
            />
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-200 bg-gray-50 px-4 py-6 dark:border-gray-700 dark:bg-gray-900/60">
            <div className="text-[10px] font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
              Selected node - DEC-2288 human approval
            </div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              <DetailRow label="Decision" value="Approved with recorded reason" />
              <DetailRow
                label="Actor role"
                value="Unit reviewer - role shown, identity not exposed publicly"
              />
              <DetailRow
                label="Authority scope"
                value="Field Services North, period records only"
              />
              <DetailRow
                label="Separation of duties"
                value="Satisfied - approver was not the correction submitter"
              />
              <DetailRow label="Effective" value="07 Aug 2026 09:30 CEST" />
              <DetailRow
                label="Limitations"
                value="Approval does not guarantee payroll, billing, legal, or downstream completion. It records that an authorized person decided, within a stated scope, at a stated time."
              />
              <DetailRow
                label="Permitted actions"
                value="Open review history - compare versions - view policy context"
                className="sm:col-span-2"
              />
            </dl>
          </div>

          <div className="flex flex-col gap-1 border-b border-amber-200 bg-amber-50 px-4 py-3.5 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="text-[9px] font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">
              Limitations on this graph
            </div>
            <p className="text-xs leading-5 text-amber-800 dark:text-amber-300">
              Policy history for 28-31 Jul was not retained, so the chain is partially
              available rather than complete. A downstream reconciliation mismatch is
              open. This graph shows relationships that exist in the governed record
              chain - it does not assert that the underlying facts, interpretations,
              or target systems were correct.
            </p>
          </div>

          <div className="flex flex-col gap-1 bg-gray-50 px-4 py-2.5 text-xs text-gray-500 dark:bg-gray-900/40 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Accessible relationship list is the primary representation; the connector is decorative
            </span>
            <span>Synthetic record</span>
          </div>
        </div>
      </div>
    </section>
  );
}
