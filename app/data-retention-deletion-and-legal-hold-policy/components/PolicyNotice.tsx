import React from "react";

export default function PolicyNotice() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">

        <div className="rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 p-5 dark:border-teal-500 dark:bg-teal-900/20">
          <p className="text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            This Policy forms part of the ZoikoTime legal and governance
            framework. Where a signed Order Form, enterprise agreement,
            regulatory requirement, court order, or legal hold requires a
            different retention period, that instrument controls to the extent
            permitted by applicable law.
          </p>
        </div>

      </div>
    </section>
  );
}