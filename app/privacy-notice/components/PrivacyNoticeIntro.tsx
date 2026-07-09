import React from "react";

export default function PrivacyNoticeIntro() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-0 py-6">

      <div
        className="
          w-full
          max-w-[696px]
          min-h-[128px]
          flex
          items-start
          bg-emerald-50
          dark:bg-emerald-950/40
          rounded-tr-lg
          rounded-br-lg
          border-l-[3px]
          border-teal-600
          transition-colors
        "
      >

        <p
          className="
            p-4 sm:p-5
            text-teal-700
            dark:text-teal-400
            text-sm
            font-semibold
            font-['Plus_Jakarta_Sans']
            leading-6
          "
        >
          ZoikoTime is a workforce assurance and performance intelligence
          platform. Depending on deployment configuration, it may process
          information relating to employees, contractors, and other workers.
          This notice is intended for visitors, prospects, customers,
          administrators, authorized users, and workers.
        </p>

      </div>

    </section>
  );
}