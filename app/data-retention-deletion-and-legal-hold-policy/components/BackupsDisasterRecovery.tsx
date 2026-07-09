import React from "react";

export default function BackupsDisasterRecovery() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          15. Backups, Disaster Recovery and Residual Copies
        </h2>

        {/* Underline */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600 dark:bg-teal-500" />

        {/* Paragraph 1 */}
        <p className="mt-7 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          Data deleted from active production systems may remain temporarily in
          encrypted backups, disaster recovery systems, replicated storage,
          logs or immutable archives until those systems are overwritten,
          retired, expired or technically remediated. These residual copies are
          access-restricted and are not used for ordinary business purposes.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          If backup data must be restored, ZoikoTime will take commercially
          reasonable steps to ensure that data previously deleted from
          production systems is re-deleted or suppressed unless a legal hold,
          security incident, regulatory requirement or operational necessity
          requires continued retention.
        </p>
      </div>
    </section>
  );
}