import React from "react";

export default function ContactSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Contact Section */}
      <div className="bg-gray-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Contact ZoikoTime
        </h3>

        <p className="text-sm sm:text-base text-slate-500 dark:text-gray-300 mb-5">
          For questions about this document or your legal rights:
        </p>

        <div className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-7 space-y-2">
          <p>
            <span className="font-medium text-slate-700 dark:text-gray-200">
              Email:
            </span>{" "}
            <span className="text-teal-600 dark:text-teal-400 font-semibold break-all">
              sales@zoikotime.com
            </span>
          </p>

          <p>
            <span className="font-medium text-slate-700 dark:text-gray-200">
              Tel:
            </span>{" "}
            1-631-833-9395
          </p>

          <p>
            <span className="font-medium text-slate-700 dark:text-gray-200">
              Toll-free:
            </span>{" "}
            1-800-484-5574
          </p>

          <p>
            1401 21st Street, Suite R,
            <br />
            Sacramento, CA 95811, USA
          </p>

          <p>
            <span className="font-medium text-slate-700 dark:text-gray-200">
              European HQ:
            </span>
            <br />
            67-69 Great Portland Street,
            <br />
            5th Floor, London W1W 5PF, UK
          </p>
        </div>
      </div>
    </div>
  );
}