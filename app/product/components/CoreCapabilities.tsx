import Image from "next/image";

const capabilities = [
  {
    title: "Time Intelligence",
    description:
      "Deterministic Time Classification turns approved inputs into accurate, reliable work records.",
    image: "/product/time.png",
  },
  {
    title: "Projects & Tasks",
    description:
      "Plan, track, and align work to projects with clarity and full transparency.",
    image: "/product/project.png",
  },
  {
    title: "Attendance",
    description:
      "Accurate attendance with policy-driven automation and location awareness.",
    image: "/product/attendance.png",
  },
  {
    title: "Reports & Analytics",
    description:
      "Real-time insights for productivity, utilization, and performance.",
    image: "/product/reports.png",
  },
  {
    title: "Payroll & Billing",
    description:
      "Accurate outputs for payroll, billing, and invoicing you can trust.",
    image: "/product/payroll.png",
  },
  {
    title: "Audit & Compliance",
    description:
      "Immutable evidence ledger for audit, compliance, and governance.",
    image: "/product/audit.png",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-6xl text-center">
  <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
    Core Capabilities
  </span>

  <h2 className="mt-4 whitespace-nowrap text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
    The infrastructure behind a trustworthy record
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-slate-600 dark:text-slate-300">
    Everything we build is designed to produce a record that is
    accurate, verifiable, and defensible.
  </p>
</div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                      {capabilities.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={420}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* CTA Button */}
<div className="mt-14 flex justify-center">
  <button
    type="button"
    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-900 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
  >
    Explore All Capabilities

    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 5l7 7-7 7"
      />
    </svg>
  </button>
</div>
      </div>
    </section>
  );
}