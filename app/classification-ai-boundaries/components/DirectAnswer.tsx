import React from "react";

export default function DirectAnswer() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 font-sans">
      <div className="text-center space-y-5">
        <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
          The direct answer
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          ZoikoTime keeps time classification deterministic and reviewable. Approved machine-learning functions, where currently authorized, may support anomaly or signal-quality review; they do not make payroll, discipline, misconduct, legal, or other consequential decisions. Kairos retrieves, summarizes, and explains governed data and decides nothing. When a record needs judgment, correction, approval, or escalation, an authorized human remains responsible and the decision history is preserved.
        </p>
      </div>
    </div>
  );
}
