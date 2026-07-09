import React from "react";

export default function PolicyNotice() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        <div className="rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 px-5 py-4 dark:bg-emerald-950/40">
          <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            This Policy is incorporated into the ZoikoTime Terms of Service.
            Violation may result in suspension, termination, or legal action.
          </p>
        </div>
      </div>
    </section>
  );
}