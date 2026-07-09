import React from "react";

export default function ChangesToPrivacyNotice() {
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
          24. Changes to this Privacy Notice
        </h2>

        {/* Underline */}
        <div className="w-12 h-[3px] bg-teal-600 rounded-full mt-3 mb-8" />

        {/* Paragraph */}
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
          ZoikoTime may update this Privacy Notice to reflect changes in the
          platform, law, security practices, or business operations. Material
          changes will be communicated through website notice, in-app
          notification, or email where required. Continued use after the
          effective date of an updated Notice constitutes acceptance.
        </p>

      </div>
    </section>
  );
}