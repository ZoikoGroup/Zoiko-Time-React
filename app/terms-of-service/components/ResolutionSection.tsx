import React from "react";

export default function ResolutionSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 35 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          35. Governing Law, Venue, and Dispute Resolution
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          These Terms are governed by the laws of the State of California, USA,
          without regard to conflict-of-law principles. For Customers domiciled
          in the United Kingdom or European Economic Area, the laws of England
          and Wales apply to the extent required by applicable mandatory law.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          The parties agree to attempt to resolve any dispute by good-faith
          negotiation before commencing formal proceedings. If negotiation
          fails, disputes shall be resolved by binding arbitration in
          accordance with the rules of the American Arbitration Association,
          except that either party may seek injunctive or other equitable
          relief from a court of competent jurisdiction.
        </p>
      </section>
    </div>
  );
}
