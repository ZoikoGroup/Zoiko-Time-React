import React from "react";

export default function USStatePrivacyNotice() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-10 bg-white dark:bg-slate-950">
      <div className="w-full max-w-[696px] mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          17. U.S. State Privacy Notice
        </h2>

        {/* Underline */}
        <div className="w-12 h-[3px] bg-teal-600 rounded-full mt-3 mb-8" />

        {/* Paragraph 1 */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-8
          "
        >
          This section applies to residents of California, Colorado,
          Connecticut, Virginia, Utah, and other states with applicable
          privacy laws, to the extent Zoiko Tech Inc. acts as a business or
          controller with respect to your personal information.
        </p>

        {/* Paragraph 2 */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          We do not sell personal information as that term is commonly
          understood. We do not use or disclose sensitive personal information
          for purposes beyond those necessary to provide the Services or as
          permitted by applicable law. You may have rights to know, delete,
          correct, opt out of certain disclosures, and in some states, appeal
          our decisions. We will not discriminate against you for exercising
          your privacy rights.
        </p>

      </div>
    </section>
  );
}