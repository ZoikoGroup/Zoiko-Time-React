import Image from "next/image";

const articles = [
  {
    category: "Workforce Assurance",
    title:
      "Time Tracking vs. Workforce Assurance: What Enterprise Buyers Need to Know",
    description:
      "The difference between recording hours and building defensible workforce intelligence — and why it matters for payroll, billing, and compliance teams.",
    image: "/LatestArticles/workforce.png",
    read: "6 min read",
  },
  {
    category: "Professional Services",
    title:
      "How Professional Services Firms Can Improve Billable Time Confidence",
    description:
      "A practical guide to reducing write-offs, improving utilization visibility, and building stronger client billing evidence.",
    image: "/LatestArticles/services.png",
    read: "7 min read",
  },
  {
    category: "Responsible AI",
    title:
      "Responsible AI Principles for Workforce Intelligence Platforms",
    description:
      "How AI should support—not replace—accountable human decision-making in workforce oversight.",
    image: "/LatestArticles/ai.png",
    read: "5 min read",
  },
  {
    category: "HR Teams",
    title:
      "What HR Teams Should Know Before Deploying Workforce Analytics",
    description:
      "Key governance, transparency, and worker-rights considerations for HR leaders evaluating workforce intelligence tools.",
    image: "/LatestArticles/hr.png",
    read: "8 min read",
  },
  {
    category: "Worker Transparency",
    title:
      "A Practical Guide to Screenshots, Redaction, and Worker Transparency",
    description:
      "How to configure screenshot controls responsibly, communicate them clearly, and maintain worker trust.",
    image: "/LatestArticles/transparency.png",
    read: "6 min read",
  },
  {
    category: "Audit Evidence",
    title:
      "Why Audit-Ready Workforce Evidence Matters for Distributed Teams",
    description:
      "Building workforce records that support payroll review, billing disputes, HR investigations, and compliance needs.",
    image: "/LatestArticles/audit.png",
    read: "7 min read",
  },
];

export default function LatestArticles() {
  return (
    <section
    id ="explore-insights"
     className="bg-slate-100 py-24 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="flex flex-col items-center">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-5 bg-teal-600" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
              Latest Articles
            </span>
          </div>

          <h2 className="max-w-3xl text-center text-4xl font-semibold leading-tight text-slate-900 dark:text-white">
            Fresh Insights for Workforce Leaders
          </h2>

          <p className="mt-6 max-w-2xl text-center text-base leading-7 text-slate-500 dark:text-slate-400">
            Explore the latest thinking on workforce assurance, time integrity,
            governance, and responsible visibility.
          </p>
        </div>

        {/* Articles */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-500/40"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  {article.category}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                  <span>ZoikoTime Editorial</span>
                  <span>•</span>
                  <span>{article.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-lg border border-slate-300 bg-white px-8 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-400">
            Load More Articles
          </button>

        </div>
      </div>
    </section>
  );
}