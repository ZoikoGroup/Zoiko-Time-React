import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const prohibitedItems = [
  "No load, stress, or denial-of-service testing",
  "No destructive actions against production data",
  "Stop immediately if customer or worker data is exposed",
  "Social engineering and physical testing are not authorized without explicit approval",
];

const engagementRules = [
  "Use minimum necessary, least-invasive testing",
  "Preserve reproducible evidence, not exhaustive capture",
  "Report through the protected route below — keep evidence out of public view",
  "Timelines are shown as milestones, never guaranteed countdowns",
];

function BulletItem({
  children,
  tone = "red",
}: {
  children: React.ReactNode;
  tone?: "red" | "teal";
}) {
  return (
    <li className="flex items-start gap-3">
      {tone === "red" ? (
        <FiXCircle
          className="
            mt-0.5
            h-3.5
            w-3.5
            shrink-0
            text-red-700
            dark:text-red-400
          "
          strokeWidth={1.8}
          aria-hidden="true"
        />
      ) : (
        <FiCheckCircle
          className="
            mt-0.5
            h-3.5
            w-3.5
            shrink-0
            text-teal-600
            dark:text-teal-400
          "
          strokeWidth={1.8}
          aria-hidden="true"
        />
      )}

      <span
        className={
          tone === "red"
            ? "text-sm leading-5 text-orange-900 dark:text-orange-200"
            : "text-sm leading-5 text-gray-700 dark:text-slate-300"
        }
      >
        {children}
      </span>
    </li>
  );
}

export default function TestRules() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1056px] px-5 sm:px-8">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Out-of-Scope, Prohibited Testing &amp; Rules of Engagement
            </span>
          </div>

          <h2 className="mt-3 max-w-[650px] text-2xl font-semibold leading-10 text-slate-800 sm:text-3xl dark:text-white">
            What to avoid, and how to test in good faith.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Prohibited Testing */}
          <div
            className="
              rounded-2xl
              border
              border-red-200
              bg-rose-100
              p-6
              sm:p-7
              dark:border-red-900/60
              dark:bg-red-950/30
            "
          >
            {/* Badge */}
            <span
              className="
                inline-flex
                rounded-full
                bg-gray-100
                px-3
                py-1
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-wide
                text-gray-500
                dark:bg-slate-800
                dark:text-slate-400
              "
            >
              Illustrative — not exhaustive
            </span>

            {/* Heading */}
            <div className="mt-5 flex items-center gap-3">
              <FiXCircle
                className="
                  h-4
                  w-4
                  shrink-0
                  text-red-700
                  dark:text-red-400
                "
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <h3 className="text-base font-semibold leading-6 text-red-900 dark:text-red-300">
                Prohibited &amp; stop conditions
              </h3>
            </div>

            {/* Prohibited Items */}
            <ul className="mt-5 space-y-4">
              {prohibitedItems.map((item) => (
                <BulletItem key={item} tone="red">
                  {item}
                </BulletItem>
              ))}
            </ul>
          </div>

          {/* Rules of Engagement */}
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              sm:p-7
              dark:border-slate-800
              dark:bg-slate-950
            "
          >
            {/* Heading */}
            <div className="flex items-center gap-3">
              <FiCheckCircle
                className="
                  h-4
                  w-4
                  shrink-0
                  text-teal-600
                  dark:text-teal-400
                "
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-slate-100">
                Rules of engagement
              </h3>
            </div>

            {/* Engagement Rules */}
            <ul className="mt-5 space-y-4">
              {engagementRules.map((item) => (
                <BulletItem key={item} tone="teal">
                  {item}
                </BulletItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}