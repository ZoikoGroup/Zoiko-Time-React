import { Fragment } from "react";
import Image from "next/image";

const stages = [
  {
    icon: "/deterministic-time-classification/Source%20Facts.svg",
    title: "Source Facts",
    body: "Approved event data, exactly as captured",
  },
  {
    icon: "/deterministic-time-classification/Context.svg",
    title: "Context",
    body: "Schedule, policy scope, and jurisdiction",
  },
  {
    icon: "/deterministic-time-classification/Rules.svg",
    title: "Rules",
    body: "Named, versioned rule and precedence order",
  },
  {
    icon: "/deterministic-time-classification/Classification%20Result.svg",
    title: "Classification Result",
    body: "Plain-language outcome, always explainable",
  },
  {
    icon: "/deterministic-time-classification/Review%20State.svg",
    title: "Review State",
    body: "Flows to human review where policy requires it",
  },
];

const records = [
  {
    record: "#48213",
    rule: "Grace-Window-Tolerance",
    result: "Late Clock-In",
    review: "Pending Review",
    tone: "bg-orange-100 text-yellow-700",
  },
  {
    record: "#48214",
    rule: "Break-Completeness-Check",
    result: "Verified",
    review: "No review needed",
    tone: "bg-emerald-50 text-teal-700",
  },
  {
    record: "#48215",
    rule: "Duplicate-Event-Dedupe",
    result: "Duplicate Clock-Out",
    review: "Reviewed · Corrected",
    tone: "bg-indigo-50 text-blue-700",
  },
];

export default function RuleTrace() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Rule Trace
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Source Facts → Context → Rules → Result → Review
          </h2>
          <p className="mx-auto mt-4 max-w-[840px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            The same five-stage trace behind every classification — explorable
            in full for any record.
          </p>
        </div>

        {/* Stage cards */}
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-0">
          {stages.map(({ icon, title, body }, index) => (
            <Fragment key={title}>
              <li className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800 lg:flex-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-slate-700">
                  <Image
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    className="h-4 w-4"
                  />
                </span>

                <h3 className="mt-3 text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                  {title}
                </h3>

                <p className="mt-2 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  {body}
                </p>
              </li>

              {index < stages.length - 1 && (
                <li
                  className="hidden shrink-0 items-center px-2 text-lg font-normal leading-7 text-teal-600 lg:flex"
                  aria-hidden="true"
                >
                  →
                </li>
              )}
            </Fragment>
          ))}
        </ol>

        {/* Explorer */}
        <div className="mx-auto mt-12 max-w-[960px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center justify-between gap-3 bg-slate-800 px-5 py-3.5">
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 shrink-0 rounded-sm bg-green-500 shadow-[0px_0px_0px_3px_rgba(25,179,107,0.25)]"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold leading-5 text-white">
                Rule Trace Explorer · Recent records
              </p>
            </div>
            <p className="text-xs font-normal leading-5 text-white/60">
              Policy v4.2
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F6F9F9] dark:bg-slate-900/40">
                  {["Record", "Rule applied", "Result", "Review"].map((head) => (
                    <th
                      key={head}
                      className="border-b border-slate-200 px-5 py-3 text-[10px] font-semibold uppercase leading-4 tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {records.map(({ record, rule, result, review, tone }, index) => (
                  <tr
                    key={record}
                    className={`border-b border-slate-200 last:border-b-0 dark:border-slate-700 ${
                      index % 2 === 1 ? "bg-[#F6F9F9] dark:bg-slate-900/40" : ""
                    }`}
                  >
                    <td className="px-5 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                      {record}
                    </td>
                    <td className="px-5 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                      {rule}
                    </td>
                    <td className="px-5 py-4 text-xs font-normal leading-5 text-slate-800 dark:text-slate-200">
                      {result}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block rounded-[20px] px-3.5 py-1.5 text-xs font-bold leading-5 ${tone}`}
                      >
                        {review}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
