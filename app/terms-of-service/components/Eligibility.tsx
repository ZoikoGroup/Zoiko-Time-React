import React from "react";

export default function Eligibility() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 4 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          4. Eligibility, Authority, and Account Registration
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          The Services are intended for business and professional use. Users
          must be at least 18 years old and legally able to enter into binding
          obligations in their jurisdiction.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Customer must provide accurate registration, billing, administrator,
          and account information and keep that information current. Customer is
          responsible for all activity under its account, including activity by
          Authorized Users, integration services, API keys, and automated
          scripts.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Zoiko Tech Inc. may require verification of Customer identity,
          administrator authority, payment information, domain ownership,
          workspace legitimacy, or other account details before activating or
          continuing the Services.
        </p>
      </section>
    </div>
  );
}