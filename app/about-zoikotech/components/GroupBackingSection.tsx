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
    <section className="bg-white px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[1.32px] text-[#009D8C] mb-3">
            ZOIKO GROUP BACKING
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-5">
            Long-Term Commitment Through Zoiko Group Inc.
          </h2>
          <p className="text-[#5A6E87]  mx-auto">
            Zoiko Tech Inc. operates as part of Zoiko Group Inc., a diversified organization developing businesses across technology,
            communications, healthcare, financial services, foods, media, travel, logistics, and real estate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="border border-[#E4EBF4] rounded-[16px] p-6"
            >
              <img src={src} alt="image" className=" mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-[#5A6E87] max-w-72">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="text-[#009D8C] font-medium hover:underline">
            Explore ZoikoTime Enterprise Readiness →
          </a>
        </div>
      </div>
    </section>
  );
}
