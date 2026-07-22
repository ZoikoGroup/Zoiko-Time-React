import React from "react";

export default function StatusSubscription() {
  return (
    <section 
    id ="subscribe-updates"
    className="bg-slate-50 px-6 py-16 dark:bg-slate-950 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.55fr_1fr]">
        {/* Subscribe Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0px_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Subscribe to Status Updates
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
            Receive updates about ZoikoTime service incidents, maintenance
            notices, and availability changes.
          </p>

          <form className="mt-8 space-y-6">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-white">
                Email Address
                <span className="ml-1 text-teal-600">*</span>
              </label>

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-400 text-teal-600 focus:ring-teal-600"
              />

              <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                I agree to receive ZoikoTime status notifications.
                <span className="ml-1 text-teal-600">*</span>
              </span>
            </label>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
            >
              Subscribe to Updates
            </button>
          </form>
        </div>

        {/* Contact Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-[0px_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Contact Support
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
            If you are experiencing an account-specific issue, contact
            ZoikoTime Support. For broad service incidents, subscribing to
            updates is the fastest way to receive status information.
          </p>

          <button className="mt-8 w-full rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800">
            Visit Help Center
          </button>

          <p className="mt-6 text-xs leading-6 text-slate-500 dark:text-slate-400">
            Please avoid opening duplicate tickets during a broad incident —
            subscribe above for the latest updates.
          </p>
        </div>
      </div>
    </section>
  );
}