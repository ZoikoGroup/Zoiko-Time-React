import React from "react";

export default function LiabilitySection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 27 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          27. Limitation of Liability
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <div className="bg-gray-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 mb-4">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-300 leading-6">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY
            WILL BE LIABLE TO THE OTHER FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF
            PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, EVEN IF
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. EACH PARTY&apos;S TOTAL
            AGGREGATE LIABILITY WILL NOT EXCEED THE FEES PAID OR PAYABLE BY
            CUSTOMER IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Nothing in these Terms limits liability for death or personal injury
          caused by negligence, fraud, fraudulent misrepresentation, or any
          other liability that cannot be excluded by law.
        </p>
      </section>
    </div>
  );
}
