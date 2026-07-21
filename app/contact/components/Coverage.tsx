const cards = [
  {
    heading: "EMEA",
    title: "UK, Europe & Middle East",
    desc: "Primary regional team — GDPR jurisdiction expertise, regulated sector specialization, and UK/EU enterprise deployment experience.",
    points: [
      "Sales & commercial engagement",
      "Compliance and regulatory support",
      "Enterprise deployment leadership",
    ],
  },
  {
    heading: "NORTH AMERICA",
    title: "United States & Canada",
    desc: "US operations — CCPA/state privacy law expertise, North American enterprise and regulated sector coverage across financial services, healthcare, and professional services.",
    points: [
      "Sales & commercial engagement",
      "US-specific compliance guidance",
      "Enterprise technical implementation",
    ],
  },
  {
    heading: "APAC & GLOBAL",
    title: "Asia Pacific & Rest of World",
    desc: "APAC and global market coverage — distributed workforce expertise, multi-jurisdiction deployment experience, and regional compliance alignment.",
    points: [
      "Global enterprise coordination",
      "Multi-jurisdiction deployment",
      "Regional compliance adaptation",
    ],
  },
];

export default function Coverage() {
  return (
    <section className="bg-white px-6 py-12 md:px-10 lg:px-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="
          text-3xl font-semibold text-[#0D1526]
          md:text-[30px]
          dark:text-white
          ">
            Regional Teams & Routing
          </h2>
        </div>


        {/* Cards */}
        <div className="
        grid grid-cols-1 gap-6
        md:grid-cols-2
        lg:grid-cols-3
        ">

          {cards.map(({ heading, title, desc, points }) => (
            <div
              key={title}
              className="
              flex flex-col gap-3
              rounded-xl
              border border-[#E4EBF4]
              bg-white
              p-6
              shadow-[0_4px_12px_#0D15260F]
              transition-all
              hover:-translate-y-1
              hover:shadow-lg

              dark:border-slate-800
              dark:bg-slate-900
              "
            >

              <span className="
              text-xs font-bold uppercase
              tracking-[1px]
              text-[#009D8C]
              ">
                {heading}
              </span>


              <h3 className="
              text-lg font-semibold
              text-[#0D1526]
              dark:text-white
              ">
                {title}
              </h3>


              <p className="
              text-sm leading-6
              text-[#5A6E87]
              dark:text-slate-400
              ">
                {desc}
              </p>


              <ul className="mt-2 flex flex-col gap-3">

                {points.map((point, index) => (
                  <li
                    key={index}
                    className="
                    flex items-start gap-2
                    text-xs
                    text-[#5A6E87]
                    dark:text-slate-400
                    "
                  >
                    <span className="
                    text-base
                    text-[#009D8C]
                    leading-none
                    ">
                      ›
                    </span>

                    <span>
                      {point}
                    </span>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}