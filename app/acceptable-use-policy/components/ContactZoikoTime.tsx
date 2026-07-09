import React from "react";

export default function ContactZoikoTime() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        <div className="rounded-xl border border-slate-200 bg-gray-50 px-6 py-8 dark:border-slate-700 dark:bg-slate-900">
          {/* Heading */}
          <h2 className="text-center text-lg font-bold leading-8 text-slate-900 dark:text-white">
            Contact ZoikoTime
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
            For questions about this document or your legal rights:
          </p>

          {/* Contact Details */}
          <div className="mt-5 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
            <span>Email: </span>
            <a
              href="mailto:sales@zoikotime.com"
              className="font-semibold text-teal-600 hover:underline"
            >
              sales@zoikotime.com
            </a>
            <span> | Tel: 1-631-833-9395 | Toll-free: 1-800-484-5574</span>

            <br />

            <span>
              1401 21st Street, Suite R, Sacramento, CA 95811, USA
            </span>

            <br />

            <span>
              European HQ: 67-69 Great Portland Street, 5th Floor, London W1W
              5PF, UK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}