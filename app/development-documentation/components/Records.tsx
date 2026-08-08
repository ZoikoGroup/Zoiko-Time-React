"use client";

const recordCode = [
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
    <span className={styles[type] ?? styles.plain}>
      {text}
    </span>
  );
}

export default function Records() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Section Header */}
        <div className="flex w-full flex-col items-center text-center">

          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Records
          </div>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            A record is explainable by design
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
            Every record carries its source, the versioned policy that
            applied, a deterministic classification, and a preserved
            evidence trail — and a decision field only a human fills.
          </p>
        </div>

        {/* API Response */}
        <div className="mt-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-blue-950 bg-slate-900 shadow-[0_10px_30px_rgba(14,31,61,0.10)]">

          {/* Terminal Header */}
          <div className="flex h-10 items-center border-b border-blue-950 bg-slate-900 px-4">
            <div className="flex shrink-0 gap-2">
              <span className="h-2.5 w-2.5 rounded-md bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-md bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-md bg-white/20" />
            </div>

            <span className="ml-4 truncate font-mono text-[11px] leading-5 text-white/60 sm:text-xs">
              GET /v1/records/rec_4821
            </span>
          </div>

          {/* JSON */}
          <div className="overflow-x-auto">
            <pre className="min-w-[650px] px-5 py-6 font-mono text-[10px] leading-5 sm:px-6 sm:text-xs">
              <code>
                {recordCode.map((token, index) => (
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

        {/* Explanation */}
        <p className="mt-6 max-w-2xl text-center text-xs leading-5 text-gray-500 dark:text-slate-400">
          Classification is{" "}
          <span className="font-bold text-slate-600 dark:text-slate-300">
            deterministic
          </span>
          , never an opaque AI score, and{" "}
          <code className="font-mono text-gray-500 dark:text-slate-400">
            decision
          </code>{" "}
          stays{" "}
          <code className="font-mono text-gray-500 dark:text-slate-400">
            null
          </code>{" "}
          until an authorized human acts.
        </p>
      </div>
    </section>
  );
}