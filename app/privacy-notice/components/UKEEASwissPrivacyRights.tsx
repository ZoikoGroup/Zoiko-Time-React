import React from "react";

export default function UKEEASwissPrivacyRights() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-10 bg-white dark:bg-slate-950">
      <div className="w-full max-w-[696px] mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            font-['Plus_Jakarta_Sans']
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          19. UK, EEA, and Swiss Privacy Rights
        </h2>

        {/* Underline */}
        <div className="w-12 h-[3px] bg-teal-600 rounded-full mt-3 mb-8" />

        {/* Paragraph 1 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-8
          "
        >
          For individuals in the United Kingdom, European Economic Area, or
          Switzerland, we rely on the following legal bases for processing:
          contractual necessity, legitimate interests, legal obligation, and,
          in some contexts, consent. You have rights under the UK GDPR, EU
          GDPR, and applicable local data protection law.
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
          "
        >
          Where Zoiko Tech Inc. acts as a processor for Customer Data, the
          applicable rights must be exercised primarily with the Customer
          organization. Where Zoiko Tech Inc. acts as an independent
          controller, requests may be submitted directly to ZoikoTime. We aim
          to respond to verifiable requests within the timeframes required by
          applicable law.
        </p>

      </div>
    </section>
  );
}