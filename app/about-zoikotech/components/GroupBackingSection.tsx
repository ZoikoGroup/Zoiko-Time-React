import Link from "next/link";

const cards = [
  {
    src: "/about-zoikotech/long.png",
    title: "Long-Term Product Strategy",
    desc: "ZoikoTime is part of a broader technology roadmap, not a short-term software experiment. Zoiko Tech invests in governed platforms designed for durable organizational use.",
  },
  {
    src: "/about-zoikotech/multi.png",
    title: "Multi-Sector Operating Insight",
    desc: "Zoiko Tech builds software with awareness of how different industries manage risk, operations, compliance, people, hire, and performance — giving ZoikoTime broader practical relevance.",
  },
  {
    src: "/about-zoikotech/build.png",
    title: "Enterprise Readiness Mindset",
    desc: "Zoiko Tech designs products for organizations that need security, governance, implementation support, documentation, and reliable platform evolution over time.",
  },
];

export default function GroupBackingSection() {
  return (
    <section className="bg-white px-6 py-12 transition-colors duration-300 dark:bg-gray-900 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[1.32px] text-[#009D8C] dark:text-teal-400">
            ZOIKO GROUP BACKING
          </span>

          <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white md:text-[36px]">
            Long-Term Commitment Through Zoiko Group Inc.
          </h2>

          <p className="mx-auto max-w-4xl leading-7 text-[#5A6E87] dark:text-gray-300">
            Zoiko Tech Inc. operates as part of Zoiko Group Inc., a diversified
            organization developing businesses across technology,
            communications, healthcare, financial services, foods, media,
            travel, logistics, and real estate.
          </p>
        </div>

        {/* Cards */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E4EBF4] bg-white p-6 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800"
            >
              <img
                src={src}
                alt={title}
                className="mb-5 h-14 w-14 object-contain"
              />

              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-6 text-[#5A6E87] dark:text-gray-300">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <Link
            href="/enterprise-readiness"
            className="font-medium text-[#009D8C] transition hover:underline dark:text-teal-400"
          >
            Explore ZoikoTime Enterprise Readiness →
          </Link>
        </div>

      </div>
    </section>
  );
}