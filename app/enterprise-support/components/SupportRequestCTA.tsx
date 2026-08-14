"use client";

import Link from "next/link";

export default function SupportRequestCTA() {
  return (
    <section
      className="
        w-full
        border-b
        border-slate-200
        bg-gray-50
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1116px]
          px-4
          py-7
          sm:px-6
          lg:px-0
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-6
            dark:border-slate-700
            dark:bg-slate-950
            sm:px-7
            lg:min-h-[96px]
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-6
            lg:py-5
          "
        >
          {/* Content */}
          <div className="min-w-0">
            <h2
              className="
                text-sm
                font-semibold
                leading-6
                text-slate-800
                dark:text-slate-100
              "
            >
              Submit a support request
            </h2>

            <p
              className="
                mt-1
                max-w-[600px]
                text-xs
                font-normal
                leading-5
                text-gray-500
                dark:text-slate-400
              "
            >
              Product, access, configuration, data, billing, or service
              questions — routed to the right owner.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="#support"
            className="
              inline-flex
              h-12
              w-full
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-teal-600
              px-6
              text-sm
              font-semibold
              leading-6
              text-white
              transition-colors
              hover:bg-teal-700
              focus:outline-none
              focus:ring-2
              focus:ring-teal-500
              focus:ring-offset-2
              dark:focus:ring-offset-slate-950
              sm:w-auto
            "
          >
            Start a Request
          </Link>
        </div>
      </div>
    </section>
  );
}