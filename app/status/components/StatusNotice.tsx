import React from "react";
import { AlertTriangle } from "lucide-react";

export default function StatusNotice() {
  return (
    <section className="px-6 py-10 dark:bg-slate-950 lg:px-8">
      <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-xl border border-orange-200 bg-yellow-50 p-5 dark:border-yellow-800/40 dark:bg-yellow-950/30">
        
        {/* Icon */}
        <AlertTriangle
          className="mt-0.5 h-4 w-4 shrink-0 text-yellow-800 dark:text-yellow-400"
          strokeWidth={2}
        />

        {/* Text */}
        <p className="text-sm leading-5 text-yellow-800 dark:text-yellow-300">
          This status page reflects monitored ZoikoTime platform services. Some
          account-specific issues may not appear here. During incidents, posted
          updates take priority over design and are published as information
          becomes available.
        </p>
      </div>
    </section>
  );
}