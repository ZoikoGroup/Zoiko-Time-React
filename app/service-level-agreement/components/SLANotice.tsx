import React from "react";

export default function SLANotice() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-[696px] rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 dark:border-teal-500 dark:bg-emerald-900/20">
        <div className="px-[21px] py-4">
          <p className="text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            This SLA applies to paid production subscriptions to the generally
            available ZoikoTime platform. It must be read together with the
            Terms of Service, Order Form, Data Processing Addendum, and
            Security Measures Schedule.
          </p>
        </div>
      </div>
    </section>
  );
}