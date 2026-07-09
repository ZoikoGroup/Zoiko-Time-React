import React from "react";

export default function ScopeApplicability() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          2. Scope and Applicability
        </h2>

        {/* Divider */}
        <div className="mt-3 mb-8 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Content */}
        <div className="space-y-8">
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            This Policy applies to each Customer and to every person or system
            that accesses or uses the Service through or on behalf of a
            Customer—including administrators, employees, workers,
            contractors, consultants, agency staff, invitees, trial users,
            API users, and integration users.
          </p>

          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Each Customer is responsible for ensuring that its Authorized
            Users and any person subject to ZoikoTime-enabled workforce
            processes comply with this Policy. A breach by an Authorized
            User, affiliate, contractor, or integration provider will
            generally be treated as a breach by the Customer.
          </p>
        </div>
      </div>
    </section>
  );
}