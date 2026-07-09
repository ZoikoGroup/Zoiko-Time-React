import React from "react";

export default function PurposeAndLegalStatus() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          1. Purpose and Legal Status
        </h2>

        {/* Underline */}
        <div className="mt-[10px] h-[3px] w-12 rounded-full bg-teal-600" />

        {/* Paragraphs */}
        <div className="mt-8 space-y-6">
          <p className="text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
            This Service Level Agreement (&quot;SLA&quot;) forms part of the
            agreement between Zoiko Tech Inc. (&quot;ZoikoTime,&quot;
            &quot;Provider,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) and the customer identified in the applicable
            Order Form, online subscription, statement of work, or other
            ordering document (&quot;Customer&quot;).
          </p>

          <p className="text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
            This SLA applies to paid production subscriptions to the generally
            available ZoikoTime platform unless an Order Form expressly states
            otherwise. It defines the service availability commitments,
            support response targets, disaster recovery commitments, incident
            notification obligations, service-credit remedies,
            chronic-failure remedies, and operational boundaries applicable
            to the Core Platform.
          </p>

          <p className="text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
            This SLA is not a standalone agreement. It must be read together
            with the ZoikoTime Terms of Service, the applicable Order Form
            and Subscription Agreement, the Data Processing Addendum, the
            Security Measures Schedule, the Support Policy, the Retention,
            Deletion and Legal Hold Policy, the AI and Automated Insights
            Policy, and the Worker Transparency Notice.
          </p>
        </div>
      </div>
    </section>
  );
}