import React from "react";

export default function Provider() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 3 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          3. Provider, Platform, and Entity Separation
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Zoiko Tech Inc. is the provider and contracting entity for ZoikoTime
          unless an Order Form states otherwise. ZoikoTime is the product and
          platform name, not a separate contracting entity.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Zoiko Group Inc. may be referenced as the parent or group company for
          brand, governance, administrative, or corporate-structure purposes.
          No Zoiko Group Inc. entity is liable under the Agreement unless it is
          the named contracting party in a signed Order Form.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Customer must not represent that it has any partnership, agency,
          employment, joint venture, reseller, or representative relationship
          with Zoiko Tech Inc., ZoikoTime, or Zoiko Group Inc. unless expressly
          agreed in a signed written agreement.
        </p>
      </section>
    </div>
  );
}