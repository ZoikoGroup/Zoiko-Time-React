import React from "react";

export default function ContactZoikoTime() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-gray-50 p-8 text-center dark:border-slate-700 dark:bg-slate-900">
          {/* Title */}
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Contact ZoikoTime
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
            For questions about this document or your legal rights:
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            <p>
              Email:{" "}
              <a
                href="mailto:sales@zoikotime.com"
                className="font-semibold text-teal-600 hover:underline dark:text-teal-400"
              >
                sales@zoikotime.com
              </a>{" "}
              <span className="hidden sm:inline">
                | Tel: 1-631-833-9395 | Toll-free: 1-800-484-5574
              </span>
            </p>

            {/* Mobile Phone Numbers */}
            <div className="space-y-1 sm:hidden">
              <p>Tel: 1-631-833-9395</p>
              <p>Toll-free: 1-800-484-5574</p>
            </div>

            <p>1401 21st Street, Suite R, Sacramento, CA 95811, USA</p>

            <p>
              European HQ: 67-69 Great Portland Street, 5th Floor, London W1W
              5PF, UK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}