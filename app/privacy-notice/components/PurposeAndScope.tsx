import React from "react";

export default function PurposeAndScope() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-8">
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
          1. Purpose and Scope
        </h2>

        {/* Green line */}
        <div className="w-12 h-[3px] bg-teal-600 rounded-full mb-6"></div>


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
          This Privacy Notice describes how Zoiko Tech Inc. collects, uses,
          discloses, retains, protects, and otherwise processes personal
          information in connection with ZoikoTime, including the ZoikoTime
          websites, applications, platform, APIs, support channels, marketing
          activities, and related services.
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
          ZoikoTime is a workforce assurance and performance intelligence
          platform. Depending on how a customer configures and deploys the
          platform, ZoikoTime may process information relating to employees,
          contractors, and other workers. This Privacy Notice is intended to
          explain ZoikoTime privacy practices at a platform and website level.
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
          Where Zoiko Tech Inc. processes personal information on behalf of a
          customer organization, the customer is generally the controller or
          business responsible for that processing. The Data Processing
          Addendum governs that relationship. This Notice covers Zoiko Tech
          Inc.&apos;s independent controller activities.
        </p>

      </div>
    </section>
  );
}