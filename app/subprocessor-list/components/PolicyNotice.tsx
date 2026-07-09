import React from "react";

export default function PolicyNotice() {
  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0">
        <div className="min-h-[96px] rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 px-[21px] py-4 dark:border-teal-500 dark:bg-emerald-950/40">
          <p className="max-w-[654px] text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            ZoikoTime will not authorize a sub-processor to process Customer
            Data unless the sub-processor has passed vendor due diligence, is
            subject to a written agreement imposing appropriate data protection
            obligations, and meets ZoikoTime&apos;s security and compliance
            standards.
          </p>
        </div>
      </div>
    </section>
  );
}