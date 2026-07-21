import { Info } from "lucide-react";

const CONTROLS = [
  {
    title: "Submit a partnership inquiry",
    body: "Share your organization profile, target market, partnership interest, customer base, relevant capabilities, and proposed value.",
  },
  {
    title: "Initial fit review",
    body: "ZoikoTime reviews for strategic alignment, market relevance, credibility, customer value, and appropriate partnership pathway.",
  },
  {
    title: "Discovery discussion",
    body: "Qualified organizations may be invited to discuss goals, customer needs, commercial model, and operational expectations.",
  },
  {
    title: "Partnership pathway assessment",
    body: "ZoikoTime determines whether the opportunity suits referral, channel, implementation, technology, strategic alliance, or no immediate partnership.",
  },
  {
    title: "Commercial & governance review",
    body: "Where appropriate, ZoikoTime may review commercial terms, confidentiality, security expectations, customer handling, and enablement needs.",
  },
  {
    title: "Partner activation",
    body: "Approved partners receive onboarding materials, contact routes, enablement resources, and operating expectations by partnership type.",
  },
];

export default function Review() {
  return (
    <>
      {/* Review Process */}
      <section className="bg-white px-6 py-16 transition-colors duration-300 dark:bg-slate-950 sm:py-20 md:px-12 lg:px-20 xl:px-32 2xl:px-54">
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C]">
            Review Process
          </span>

          <h2 className="mb-4 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
            How partnership review works
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-7 text-[#5A6E87] dark:text-slate-400 md:text-base">
            ZoikoTime reviews inquiries carefully to ensure alignment with
            customer needs, platform standards, governance expectations, and
            commercial priorities.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {CONTROLS.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-slate-100 p-6 last:border-b-0 dark:border-slate-800"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0E1F3D] text-sm font-bold text-white dark:bg-[#009D8C]">
                {i + 1}
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#5A6E87] dark:text-slate-400">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Information Box */}
      <section className="bg-white px-6 pb-16 transition-colors duration-300 dark:bg-slate-950 md:px-12 lg:px-20 xl:px-32 2xl:px-54">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-4 rounded-2xl border border-[#F2DFA8] bg-[#FFF8E8] p-5 dark:border-yellow-900 dark:bg-yellow-900/20">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-800/30">
              <Info className="h-5 w-5 text-[#7A5A00] dark:text-yellow-300" />
            </div>

            <p className="text-sm leading-7 text-[#7A5A00] dark:text-yellow-200">
              Submitting an inquiry does not guarantee acceptance into a
              ZoikoTime partner program. Partnership opportunities are reviewed
              based on strategic fit, customer value, governance alignment, and
              operational readiness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}