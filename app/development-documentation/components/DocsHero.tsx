"use client";

import { FiSearch, FiArrowRight } from "react-icons/fi";

const responseCode = [
  { text: "{", type: "plain" },
  { text: '  "id"', type: "key" },
  { text: ": ", type: "plain" },
  { text: '"rec_4821"', type: "string" },
  { text: ",", type: "plain" },
  { text: "\n  ", type: "plain" },
  { text: '"state"', type: "key" },
  { text: ": ", type: "plain" },
  { text: '"needs_review"', type: "string" },
  { text: ",", type: "plain" },
  { text: "\n  ", type: "plain" },
  { text: '"source"', type: "key" },
  { text: ": ", type: "plain" },
  { text: '"web_clock"', type: "string" },
  { text: ",", type: "plain" },
  { text: "\n  ", type: "plain" },
  { text: '"policy"', type: "key" },
  { text: ": { ", type: "plain" },
  { text: '"id"', type: "key" },
  { text: ": ", type: "plain" },
  { text: '"auto_clockout"', type: "string" },
  { text: ", ", type: "plain" },
  { text: '"version"', type: "key" },
  { text: ": ", type: "plain" },
  { text: "4", type: "number" },
  { text: " },", type: "plain" },
  { text: "\n  ", type: "plain" },
  { text: '"classification"', type: "key" },
  { text: ": ", type: "plain" },
  { text: '"deterministic"', type: "string" },
  { text: ",   ", type: "plain" },
  { text: "// never an opaque score", type: "comment" },
  { text: "\n  ", type: "plain" },
  { text: '"evidence"', type: "key" },
  { text: ": { ", type: "plain" },
  { text: '"provenance"', type: "key" },
  { text: ": ", type: "plain" },
  { text: "true", type: "boolean" },
  { text: ", ", type: "plain" },
  { text: '"preserved"', type: "key" },
  { text: ": ", type: "plain" },
  { text: "true", type: "boolean" },
  { text: " },", type: "plain" },
  { text: "\n  ", type: "plain" },
  { text: '"decision"', type: "key" },
  { text: ": ", type: "plain" },
  { text: "null", type: "boolean" },
  { text: "              ", type: "plain" },
  { text: "// a human decides", type: "comment" },
  { text: "\n}", type: "plain" },
];

function CodeToken({
  text,
  type,
}: {
  text: string;
  type: string;
}) {
  const styles: Record<string, string> = {
    plain: "text-slate-300",
    key: "text-blue-300",
    string: "text-amber-300",
    number: "text-orange-300",
    boolean: "text-teal-300",
    comment: "text-slate-500",
  };

  return (
    <span className={styles[type] || styles.plain}>
      {text}
    </span>
  );
}

export default function DocsHero() {
  return (
    <section className="w-full bg-white py-14 text-slate-800 dark:bg-slate-950 dark:text-white sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-14 lg:px-10 xl:px-14">

        {/* Left Content */}
        <div className="w-full lg:flex-1">
          <div className="flex max-w-2xl flex-col items-start">

            {/* Label */}
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400 sm:mb-4">
              Development Documentation
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-5xl lg:text-[52px] lg:leading-[1.05]">
              Build on{" "}
              <span className="text-teal-600 dark:text-teal-400">
                governed time
              </span>
              .
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
              Everything you need to integrate ZoikoTime — a REST API for
              records, policies, evidence, and events, with deterministic
              classification and human authority built in.
            </p>

            {/* Button */}
            <button
              type="button"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-teal-600 px-6 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              Get API keys
              <FiArrowRight className="h-4 w-4" />
            </button>

            {/* Search */}
            <div className="mt-7 flex h-14 w-full max-w-xl items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
              <FiSearch className="h-4 w-4 shrink-0 text-gray-500 dark:text-slate-400" />

              <span className="ml-4 flex-1 text-sm text-gray-500 dark:text-slate-400">
                Search the docs…
              </span>

              <kbd className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-200 bg-gray-50 text-xs font-normal text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                /
              </kbd>
            </div>
          </div>
        </div>

        {/* API Response */}
        <div className="w-full lg:flex-1">
          <div className="w-full overflow-hidden rounded-2xl border border-blue-950 bg-slate-900 shadow-[0_10px_30px_rgba(14,31,61,0.10)]">

            {/* Code Header */}
            <div className="flex h-10 items-center border-b border-blue-950 bg-slate-900 px-4">
              <div className="flex shrink-0 gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              <span className="ml-4 truncate font-mono text-[11px] leading-5 text-white/60 sm:text-xs">
                GET /v1/records/rec_4821
              </span>
            </div>

            {/* Code Content */}
            <div className="overflow-x-auto">
              <pre className="min-w-[500px] px-4 py-5 font-mono text-[10px] leading-5 sm:px-5 sm:text-xs">
                <code>
                  {responseCode.map((token, index) => (
                    <CodeToken
                      key={`${token.text}-${index}`}
                      text={token.text}
                      type={token.type}
                    />
                  ))}
                </code>
              </pre>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}