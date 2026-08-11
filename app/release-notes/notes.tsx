import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`self-start px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight ${className}`}>
      {children}
    </span>
  );
}

type NoteItemProps = {
  badge: React.ReactNode;
  badgeClass: string;
  title: string;
  children: React.ReactNode;
};

function NoteItem({ badge, badgeClass, title, children }: NoteItemProps) {
  return (
    <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
      <Badge className={badgeClass}>{badge}</Badge>
      <div>
        <h4 className="text-sm font-semibold mb-0.5">{title}</h4>
        <p className="text-xs text-gray-500 dark:text-slate-400 flex flex-wrap items-center gap-1">{children}</p>
      </div>
    </div>
  );
}

type ReleaseEntryProps = {
  version: string;
  tag: string;
  tagClass: string;
  date: string;
  children: React.ReactNode;
};

function ReleaseEntry({ version, tag, tagClass, date, children }: ReleaseEntryProps) {
  return (
    <div className="relative">
      <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-teal-600 border-4 border-white dark:border-slate-900" />
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h3 className="text-lg font-extrabold tracking-tight">{version}</h3>
        <span className={`px-2.5 py-0.5 border rounded-full text-[10px] font-bold uppercase tracking-wider ${tagClass}`}>
          {tag}
        </span>
        <span className="text-xs text-gray-500 dark:text-slate-400">{date}</span>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm divide-y divide-slate-100 dark:divide-slate-700/60 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default function ReleaseNotesContent() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-white transition-colors duration-200">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">

        {/* Hero Header */}
        <section className="text-center relative py-6 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center">
            <div className="w-[500px] h-64 bg-teal-500/10 dark:from-teal-400/10 rounded-full blur-3xl" />
          </div>

          {/* Current Release Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400" />
            <span className="text-teal-700 dark:text-teal-300 text-xs font-semibold">Current release · v2026.6</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            What's new in <span className="text-teal-600 dark:text-teal-400">ZoikoTime</span>.
          </h1>

          {/* Subtitle Description */}
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            Product changes, improvements, and fixes — explainable by design, with human authority and preserved evidence intact.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold">
            <button className="px-4 py-1.5 bg-teal-600 text-white rounded-full shadow-sm hover:bg-teal-700 transition-colors">All</button>
            <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full transition-colors">New</button>
            <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full transition-colors">Improved</button>
            <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full transition-colors">Fixed</button>
            <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full transition-colors">Security</button>
            <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full transition-colors">API</button>
            <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full transition-colors">Docs</button>
          </div>
        </section>

        {/* Feature Highlight Banner */}
        <div className="relative w-full max-w-[1000px] h-28 rounded-2xl overflow-hidden shadow-xl my-8 flex items-center px-8">
  {/* Background Image */}
  <img 
    src="/release-notes/releasenotesbg.png" 
    alt="Release Notes Background" 
    className="absolute inset-0 w-full h-full object-cover z-0" 
  />

  {/* Dark Overlay (Ensures white text remains readable over bright background areas) */}
  <div className="absolute inset-0 bg-slate-900/90 z-10" />

  {/* Text Content Layer */}
  <div className="relative z-20 flex flex-col justify-center gap-1">
    <div className="text-white text-lg font-bold  leading-7">
      Every release, the same principles.
    </div>
    <div className="text-white/90 text-xs font-normal  leading-5">
      Deterministic, reviewable, and privacy-first — change after change.
    </div>
  </div>
</div>

        {/* Timeline Log */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-emerald-100 dark:border-emerald-900/40 space-y-10 my-10">

          {/* v2026.6 */}
          <ReleaseEntry
            version="v2026.6"
            tag="Latest"
            tagClass="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-gray-500 dark:text-slate-400"
            date="June 1, 2026"
          >
            <NoteItem badge="new" badgeClass="bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300" title="Record Comparison in the Review Center">
              See disputed vs. reviewed values side by side, with evidence behind every reviewed field.
            </NoteItem>
            <NoteItem badge="new" badgeClass="bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300" title="Policy version surfaced on records">
              Every record now shows the exact deterministic policy version that applied — in the app and the API.
            </NoteItem>
            <NoteItem badge="improved" badgeClass="bg-indigo-50 dark:bg-indigo-950/50 text-blue-700 dark:text-blue-300" title="Faster Evidence Ledger exports">
              Large, append-only evidence exports now stream, cutting wait time for audit pulls.
            </NoteItem>
            <NoteItem badge="security" badgeClass="bg-rose-50 dark:bg-rose-950/50 text-red-700 dark:text-red-300" title="SCIM deprovisioning hardening">
              Tightened validation on
              <span className="inline-block px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-teal-700 dark:text-teal-300 text-[11px] font-mono">SCIM 2.0</span>
              deprovisioning to prevent stale access.
            </NoteItem>
            <NoteItem badge="api" badgeClass="bg-violet-100 dark:bg-violet-950/50 text-indigo-700 dark:text-indigo-300" title="Dated API versioning">
              Requests now pin a dated
              <span className="inline-block px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-teal-700 dark:text-teal-300 text-[11px] font-mono">Zoiko-Version</span>
              header; changes are additive and announced here.
            </NoteItem>
          </ReleaseEntry>

          {/* v2026.5.1 */}
          <ReleaseEntry
            version="v2026.5.1"
            tag="Patch"
            tagClass="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-gray-500 dark:text-slate-400"
            date="May 15, 2026"
          >
            <NoteItem badge="fixed" badgeClass="bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300" title="Time-zone edge case in coverage">
              Resolved a DST boundary case that could misalign coverage windows across regions.
            </NoteItem>
            <NoteItem badge="improved" badgeClass="bg-indigo-50 dark:bg-indigo-950/50 text-blue-700 dark:text-blue-300" title="Review queue loading">
              Queues with many open cases now load noticeably faster.
            </NoteItem>
            <NoteItem badge="docs" badgeClass="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300" title="New Webhooks guide">
              Added a step-by-step guide for subscribing to events and verifying signed payloads.
            </NoteItem>
          </ReleaseEntry>

          {/* v2026.5 */}
          <ReleaseEntry
            version="v2026.5"
            tag="Feature"
            tagClass="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-gray-500 dark:text-slate-400"
            date="May 1, 2026"
          >
            <NoteItem badge="new" badgeClass="bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300" title="Distributed Work Control Center">
              Coordinate schedules, approved time, availability, and coverage across time zones — without surveillance.
            </NoteItem>
            <NoteItem badge="new" badgeClass="bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300" title="Work Pattern Planner">
              Plan on-site, remote, and hybrid patterns by person, team, and zone, with approved, versioned changes.
            </NoteItem>
            <NoteItem badge="improved" badgeClass="bg-indigo-50 dark:bg-indigo-950/50 text-blue-700 dark:text-blue-300" title="Privacy configuration transparency">
              Workers can now see exactly what is — and isn't — collected, in one place.
            </NoteItem>
          </ReleaseEntry>

          {/* v2026.4 */}
          <ReleaseEntry
            version="v2026.4"
            tag="Feature"
            tagClass="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-gray-500 dark:text-slate-400"
            date="April 10, 2026"
          >
            <NoteItem badge="new" badgeClass="bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300" title="Integration Directory">
              Browse connections by category and standard, each governed with mapping and reconciliation.
            </NoteItem>
            <NoteItem badge="improved" badgeClass="bg-indigo-50 dark:bg-indigo-950/50 text-blue-700 dark:text-blue-300" title="Reconciliation state clarity">
              Clearer downstream states: ready, sent, acknowledged, reconciled, and manual action.
            </NoteItem>
            <NoteItem badge="security" badgeClass="bg-rose-50 dark:bg-rose-950/50 text-red-700 dark:text-red-300" title="Signed webhook payloads">
              Deliveries now include a
              <span className="inline-block px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-teal-700 dark:text-teal-300 text-[11px] font-mono">Zoiko-Signature</span>
              header for verification.
            </NoteItem>
            <NoteItem badge="fixed" badgeClass="bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300" title="CSV export encoding">
              Fixed a character-encoding issue affecting some non-ASCII exports.
            </NoteItem>
          </ReleaseEntry>

          {/* v2026.3 */}
          <ReleaseEntry
            version="v2026.3"
            tag="Feature"
            tagClass="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-gray-500 dark:text-slate-400"
            date="March 6, 2026"
          >
            <NoteItem badge="new" badgeClass="bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300" title="Policy Explanation view">
              Every classification now shows a plain-language reason alongside the exact rule — no black box.
            </NoteItem>
            <NoteItem badge="improved" badgeClass="bg-indigo-50 dark:bg-indigo-950/50 text-blue-700 dark:text-blue-300" title="Role & separation-of-duties checks">
              Strengthened role-based access and separation-of-duties enforcement in review.
            </NoteItem>
            <NoteItem badge="docs" badgeClass="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300" title="Implementation guide refresh">
              Reworked the phased rollout guide with clearer readiness and pilot steps.
            </NoteItem>
          </ReleaseEntry>

        </div>

        {/* Bottom Note & Governance Notice */}
        <div className="space-y-6 mt-12">
          <p className="text-center text-xs text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Older releases are available in the developer console. Dates reflect general availability; specific features may vary by plan and account.
          </p>

          <div className="p-5 sm:p-6 bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/50 rounded-xl text-center sm:text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-teal-700 dark:text-teal-400 font-bold block sm:inline mr-1">Deterministic &amp; human-governed.</strong>
            ZoikoTime classification is deterministic and explainable, never an opaque AI score, and every consequential decision stays with an authorized human. No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.
          </div>
        </div>

      </main>
    </div>
  );
}