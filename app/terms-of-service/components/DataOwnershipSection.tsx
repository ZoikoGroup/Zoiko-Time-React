import React from "react";

export default function DataOwnershipSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 11 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          11. Customer Data Ownership and Usage Rights
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Customer Data remains owned by the Customer. Zoiko Tech Inc. uses
          Customer Data only to provide, secure, maintain, support, and improve
          the Services as permitted by these Terms, the Order Form, and
          applicable law—and as described in the Data Processing Addendum.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Customer grants Zoiko Tech Inc. a limited, non-exclusive license to
          process Customer Data as necessary to provide the Services, maintain
          security, resolve support issues, comply with legal obligations, and
          as otherwise permitted by the Agreement. This license does not give
          Zoiko Tech Inc. ownership of Customer Data or the right to exploit it
          for unrelated commercial purposes.
        </p>
      </section>
    </div>
  );
}
