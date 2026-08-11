import Link from "next/link";

const relatedContent = [
  {
    category: "Product",
    title: "Product Overview",
    description: "The full ZoikoTime system and category definition.",
    href: "/product",
  },
  {
    category: "Product",
    title: "How ZoikoTime Works",
    description: "The end-to-end governed record lifecycle.",
    href: "/how-zoikotime-works",
  },
  {
    category: "Trust & Governance",
    title: "Trust Center",
    description: "Security, privacy, and evidence in full detail.",
    href: "/trust-center",
  },
];

export default function RelatedContent() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-20">

        {/* Heading */}
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

          <span className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-700 dark:text-teal-400">
            Related Content
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-800 dark:text-white md:text-4xl">
          Where to go next.
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {relatedContent.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase leading-4 tracking-[0.18em] text-teal-700 dark:text-teal-400">
                {item.category}
              </p>

              <h3 className="mt-4 text-base font-semibold leading-6 text-slate-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {item.description}
              </p>

              <span className="mt-8 inline-flex text-sm font-semibold leading-5 text-slate-800 transition group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                Visit page →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
