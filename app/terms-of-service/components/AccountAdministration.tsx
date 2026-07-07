import React from "react";

export default function AccountAdministration() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 5 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          5. Account Administration and Authorized Users
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Customer controls its workspace, account configuration, Authorized
          Users, roles, permissions, worker groups, policies, integrations,
          retention settings, reporting access, and administrative actions
          except as limited by these Terms or applicable law.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Each Authorized User account must be assigned to a named individual.
          Shared accounts, generic logins, credential pooling, credential
          resale, and account masking are prohibited unless expressly enabled by
          Zoiko Tech Inc. in writing for a specified technical purpose.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Customer is responsible for provisioning and deprovisioning
          Authorized Users, maintaining accurate user records, applying
          least-privilege access, reviewing administrator access, and promptly
          disabling or revoking accounts for terminated users or users who no
          longer require access.
        </p>
      </section>
    </div>
  );
}