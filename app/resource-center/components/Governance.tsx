"use client";

const governanceItems = [
  {
    title: "Status",
    description:
      'Current, changed, corrected, restricted summary, or superseded. Never a vague "latest" badge.',
  },
  {
    title: "Authority",
    description:
      "What this source governs — behaviour, troubleshooting, change, learning, evidence, or developer contract.",
  },
  {
    title: "Owner",
    description:
      "The accountable team or role. Personal names only where governance requires them.",
  },
  {
    title: "Reviewed",
    description:
      "The precise date dimension that matters — reviewed, verified, effective, or corrected.",
  },
  {
    title: "Applicability",
    description:
      "Version, plan, region, integration, or configuration — only where verified and relevant.",
  },
  {
    title: "Limitations",
    description:
      'The boundary of what the resource covers, or a "review applicability" signal.',
  },
];

export default function Governance() {
  return (
    <section className="w-full bg-gray-50 py-14 sm:py-16 lg:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-6 px-5 sm:px-7">
        
        {/* Heading */}
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-10 text-slate-900 sm:text-4xl dark:text-white">
            How these resources are governed
          </h2>

          <p className="w-full max-w-[643px] text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 dark:text-gray-300">
            Every record exposes enough metadata to judge whether it applies
            to you — before you act on it.
          </p>
        </div>

        {/* Governance metadata */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
            {governanceItems.map((item, index) => (
              <div
                key={item.title}
                className={`
                  p-4
                  ${
                    index < governanceItems.length - 1
                      ? "border-b border-gray-200 sm:border-r dark:border-white/10"
                      : ""
                  }
                  ${
                    index === 1 || index === 3
                      ? "lg:border-r"
                      : ""
                  }
                  lg:border-b-0
                `}
              >
                <h3 className="text-xs font-bold leading-5 text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs font-normal leading-5 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important note */}
        <div className="w-full max-w-[900px] rounded-[10px] border border-gray-300 bg-gray-100 px-3.5 py-2.5 dark:border-red-400/20 dark:bg-red-400/[0.06]">
          <h3 className="text-xs font-bold uppercase leading-5 tracking-wide text-red-500 dark:text-red-400">
            Date semantics are not interchangeable
          </h3>

          <p className="mt-1 text-xs font-normal leading-5 text-red-500 dark:text-red-300">
            Published, Effective, Updated, Reviewed, Verified, Corrected, and
            Superseded mean different things and are never collapsed into a
            single “Updated” stamp. A document reviewed last week and a
            document changed last week are different facts, and a reader
            deciding whether to trust guidance needs to know which one they
            are looking at.
          </p>
        </div>
      </div>
    </section>
  );
}