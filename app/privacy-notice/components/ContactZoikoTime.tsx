import React from "react";

export default function ContactZoikoTime() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-10 bg-white dark:bg-slate-950">
      <div
        className="
          w-full
          max-w-[696px]
          mx-auto
          rounded-xl
          border
          border-slate-200
          bg-gray-50
          dark:bg-slate-900
          dark:border-slate-700
          p-6
          sm:p-8
        "
      >
        {/* Heading */}
        <h2
          className="
            text-center
            text-lg
            font-bold
            font-['Plus_Jakarta_Sans']
            leading-8
            text-slate-900
            dark:text-white
            mb-3
          "
        >
          Contact ZoikoTime
        </h2>

        {/* Subtitle */}
        <p
          className="
            text-center
            text-sm
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-6
            text-slate-500
            dark:text-slate-400
            mb-4
          "
        >
          For questions about this document or your legal rights:
        </p>

        {/* Contact Information */}
        <div
          className="
            text-center
            text-sm
            leading-6
            font-['Plus_Jakarta_Sans']
            text-slate-500
            dark:text-slate-400
            break-words
          "
        >
          <span>Email: </span>

          <a
            href="mailto:sales@zoikotime.com"
            className="
              font-semibold
              text-teal-600
              dark:text-teal-400
              hover:underline
            "
          >
            sales@zoikotime.com
          </a>

          <span> | Tel: 1-631-833-9395 | Toll-free: 1-800-484-5574</span>

          <br />

          <span>
            1401 21st Street, Suite R,
            <br className="sm:hidden" /> Sacramento, CA 95811, USA
          </span>

          <br />

          <span>
            European HQ: 67-69 Great Portland Street,
            <br className="sm:hidden" /> 5th Floor, London W1W 5PF, UK
          </span>
        </div>
      </div>
    </section>
  );
}