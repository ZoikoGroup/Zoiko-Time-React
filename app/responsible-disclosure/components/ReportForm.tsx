"use client";

import { FormEvent, useState } from "react";

const receiptNotes = [
  {
    label: "Received",
    description: "does not mean validated",
  },
  {
    label: "",
    description: "Your impact assessment does not mean confirmed severity",
  },
  {
    label: "",
    description: "Remediation does not mean verified resolution",
  },
  {
    label: "",
    description: "No response time, reward, or CVE outcome is promised",
  },
];

export default function ReportForm() {
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your protected reporting API here.
  };

  return (
    <section
      id="report"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Protected Reporting
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold leading-10 text-slate-800 sm:text-3xl dark:text-white">
            Submit a potential vulnerability report.
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-[532px_1fr] lg:gap-10">
          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="
              w-full
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]
              sm:p-7
              lg:p-8
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            {/* Security Warning */}
            <div
              className="
                flex
                items-start
                gap-3
                rounded-[10px]
                border
                border-red-200
                bg-rose-100
                p-3.5
                dark:border-red-900/60
                dark:bg-red-950/30
              "
            >
              <span
                className="
                  mt-0.5
                  flex
                  h-4
                  w-4
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-red-700
                  text-[10px]
                  font-bold
                  text-red-700
                  dark:border-red-400
                  dark:text-red-400
                "
                aria-hidden="true"
              >
                !
              </span>

              <p className="text-xs leading-5 text-orange-900 dark:text-orange-200">
                Never include passwords, private keys, tokens, or credential
                dumps in this form.
              </p>
            </div>

            {/* Affected Asset */}
            <div className="mt-7">
              <label
                htmlFor="affected-asset"
                className="block text-xs font-semibold leading-5 text-slate-800 dark:text-slate-100"
              >
                Affected asset
              </label>

              <input
                id="affected-asset"
                name="affectedAsset"
                type="text"
                placeholder="e.g. Public web application"
                className="
                  mt-2
                  h-11
                  w-full
                  rounded-[10px]
                  border
                  border-slate-200
                  bg-gray-50
                  px-4
                  text-sm
                  text-slate-800
                  outline-none
                  transition
                  placeholder:text-neutral-500
                  focus:border-teal-500
                  focus:ring-2
                  focus:ring-teal-500/20
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-100
                  dark:placeholder:text-slate-500
                "
              />
            </div>

            {/* Environment + Email */}
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="environment"
                  className="block text-xs font-semibold leading-5 text-slate-800 dark:text-slate-100"
                >
                  Environment
                </label>

                <select
                  id="environment"
                  name="environment"
                  defaultValue="Production"
                  className="
                    mt-2
                    h-11
                    w-full
                    rounded-[10px]
                    border
                    border-slate-200
                    bg-gray-50
                    px-4
                    text-sm
                    text-gray-700
                    outline-none
                    focus:border-teal-500
                    focus:ring-2
                    focus:ring-teal-500/20
                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-slate-200
                  "
                >
                  <option>Production</option>
                  <option>Staging</option>
                  <option>Sandbox</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold leading-5 text-slate-800 dark:text-slate-100"
                >
                  Contact email
                </label>

                <input
                  id="contact-email"
                  name="contactEmail"
                  type="email"
                  placeholder="you@example.com"
                  className="
                    mt-2
                    h-11
                    w-full
                    rounded-[10px]
                    border
                    border-slate-200
                    bg-gray-50
                    px-4
                    text-sm
                    text-slate-800
                    outline-none
                    placeholder:text-neutral-500
                    focus:border-teal-500
                    focus:ring-2
                    focus:ring-teal-500/20
                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-slate-100
                    dark:placeholder:text-slate-500
                  "
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-5">
              <label
                htmlFor="description"
                className="block text-xs font-semibold leading-5 text-slate-800 dark:text-slate-100"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="What did you observe? Plain language is fine."
                className="
                  mt-2
                  min-h-24
                  w-full
                  resize-y
                  rounded-[10px]
                  border
                  border-slate-200
                  bg-gray-50
                  px-4
                  py-3
                  text-sm
                  leading-5
                  text-slate-800
                  outline-none
                  placeholder:text-neutral-500
                  focus:border-teal-500
                  focus:ring-2
                  focus:ring-teal-500/20
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-100
                  dark:placeholder:text-slate-500
                "
              />
            </div>

            {/* Impact Assessment */}
            <div className="mt-5">
              <label
                htmlFor="impact"
                className="block text-xs font-semibold leading-5 text-slate-800 dark:text-slate-100"
              >
                Impact assessment
              </label>

              <textarea
                id="impact"
                name="impact"
                rows={4}
                placeholder="What do you think this could allow? This is evidence, not a final severity rating."
                className="
                  mt-2
                  min-h-24
                  w-full
                  resize-y
                  rounded-[10px]
                  border
                  border-slate-200
                  bg-gray-50
                  px-4
                  py-3
                  text-sm
                  leading-5
                  text-slate-800
                  outline-none
                  placeholder:text-neutral-500
                  focus:border-teal-500
                  focus:ring-2
                  focus:ring-teal-500/20
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-100
                  dark:placeholder:text-slate-500
                "
              />
            </div>

            {/* Confirmation */}
            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(event) => setConfirmed(event.target.checked)}
                className="
                  mt-1
                  h-3.5
                  w-3.5
                  shrink-0
                  cursor-pointer
                  rounded
                  border-neutral-400
                  accent-teal-600
                "
              />

              <span className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                I confirm this report does not include passwords, credentials,
                or unnecessary customer/worker data, and that my testing
                followed the Rules of Engagement above.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={!confirmed}
              className="
                mt-6
                flex
                h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-teal-600
                px-6
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-teal-700
                focus:outline-none
                focus:ring-2
                focus:ring-teal-500
                focus:ring-offset-2
                disabled:cursor-not-allowed
                disabled:opacity-50
                dark:focus:ring-offset-slate-900
              "
            >
              Submit Report
            </button>
          </form>

          {/* Receipt Explanation */}
          <aside
            className="
              rounded-2xl
              border
              border-slate-200
              bg-gray-50
              p-6
              sm:p-7
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
              What this receipt does not mean
            </h3>

            <ul className="mt-5 space-y-3">
              {receiptNotes.map((note, index) => (
                <li
                  key={note.description}
                  className="flex items-start gap-3"
                >
                  <span
                    className="
                      mt-1.5
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      border
                      border-amber-700
                      dark:border-amber-400
                    "
                    aria-hidden="true"
                  />

                  <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                    {note.label && (
                      <strong className="font-bold text-gray-500 dark:text-slate-300">
                        {note.label}{" "}
                      </strong>
                    )}
                    {note.description}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}