import React from "react";

export default function RolesControllerProcessor() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-6">

      <div className="w-full max-w-[696px] mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl
            sm:text-2xl
            font-extrabold
            font-['Plus_Jakarta_Sans']
            leading-8
            text-slate-900
            dark:text-white
            mb-4
          "
        >
          3. Roles: Controller, Processor, Business, Service Provider, and
          Third Party
        </h2>


        {/* Teal line */}
        <div className="w-12 h-[3px] bg-teal-600 rounded-full mb-6" />


        {/* Paragraph 1 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-6
          "
        >
          ZoikoTime may act in different legal roles depending on the context
          of processing. As an independent controller or business, Zoiko Tech
          Inc. determines the purposes and means of processing for its own
          website, marketing, account management, support, billing, security,
          and compliance activities.
        </p>


        {/* Paragraph 2 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-6
          "
        >
          As a processor, service provider, or data processor on behalf of
          customers, Zoiko Tech Inc. processes Customer Data only in accordance
          with customer instructions and the Data Processing Addendum. In this
          role, customer organizations are generally the controller or business,
          and workers must exercise their rights primarily with their employer
          or engaging organization.
        </p>


        {/* Paragraph 3 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          This role distinction matters because some privacy rights must be
          exercised directly with the customer that controls the data, while
          other requests may be handled directly by ZoikoTime.
        </p>

      </div>

    </section>
  );
}