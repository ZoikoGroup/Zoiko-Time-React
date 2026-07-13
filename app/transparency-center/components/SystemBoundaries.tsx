"use client";

const doesList = [
  "Verifies session identity, device, and location using defined signals — with full documentation",
  "Assigns a confidence score to every session — with AI reasoning attached",
  "Detects anomalous patterns and surfaces them for human review",
  "Generates tamper-evident evidence records for every session automatically",
  "Enforces employer-configured policies consistently across all workers",
  "Provides workers with full visibility into their own session data and confidence scores",
];

const doesNotList = [
  "Make autonomous disciplinary or employment decisions — humans retain full decision authority",
  "Record screenshots, keystrokes, screen content, or personal communications",
  "Collect data beyond what is required for the stated governance purpose",
  "Produce outcomes without explanation — every signal and decision includes reasoning",
  "Process data for purposes not instructed by the Controller organisation",
  "Operate with logic that cannot be inspected, explained, and audited at any time",
];

function BoundaryCard({
  title,
  items,
  type,
}: {
  title: string;
  items: string[];
  type: "yes" | "no";
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg p-8">

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
        {type === "yes" ? "✓" : "✗"} {title}
      </h3>


      <div className="space-y-6">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-start"
          >

            <span
              className={`text-sm font-extrabold ${
                type === "yes"
                  ? "text-teal-600"
                  : "text-red-500"
              }`}
            >
              {type === "yes" ? "✓" : "✗"}
            </span>


            <p className="text-sm leading-5 text-slate-700 dark:text-slate-300">
              {item}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}


export default function SystemBoundaries() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20">


      <div className="max-w-[1200px] mx-auto px-6">


        {/* Heading */}
        <div className="text-center">


          <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
            System Boundaries
          </p>


          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            System Boundaries Clearly Stated
          </h2>


          <p className="mt-5 max-w-xl mx-auto text-lg leading-7 text-slate-500 dark:text-slate-400">
            Transparency requires honesty about what a system does and what it
            does not. These are ZoikoTime&apos;s definitive system boundaries.
          </p>


        </div>



        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">


          <BoundaryCard
            title="What ZoikoTime Does"
            items={doesList}
            type="yes"
          />


          <BoundaryCard
            title="What ZoikoTime Does Not Do"
            items={doesNotList}
            type="no"
          />


        </div>



        {/* Bottom Note */}
        <div className="mt-12 bg-emerald-50 dark:bg-emerald-950 rounded-xl px-6 py-5 text-center">

          <p className="text-sm font-bold text-teal-600 dark:text-teal-400">
            Nothing happens in ZoikoTime that cannot be explained. If it cannot
            be traced and documented, it does not happen.
          </p>

        </div>


      </div>


    </section>
  );
}