const lifecycle = [
  {
    icon: "📥",
    title: "Ingestion",
    description:
      "Data enters via secure, validated channels — TLS 1.3 enforced, input validation applied, source authentication required before any data is accepted into the processing environment.",
  },
  {
    icon: "⚙️",
    title: "Processing",
    description:
      "Validated and processed within controlled, isolated environments — access restricted to processing functions with least-privilege enforcement. No data commingles across tenant boundaries.",
  },
  {
    icon: "🗄️",
    title: "Storage",
    description:
      "AES-256 encrypted at rest with strict access controls. Data residency configurable per jurisdiction. SHA-256 integrity verification applied to all evidence records at storage and on retrieval.",
  },
  {
    icon: "🔐",
    title: "Access",
    description:
      "Restricted via RBAC and policy — every access event is logged immutably. Purpose limitation enforced at system level: data cannot be accessed beyond the stated governance function.",
  },
  {
    icon: "📅",
    title: "Retention",
    description:
      "Jurisdiction-aware retention policies applied automatically — data retained for exactly as long as required by law and no longer. Deletion certificates provided at end of lifecycle.",
  },
];

export default function DataProtection() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-teal-600">
            Data Protection
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Data Protection and Lifecycle
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 dark:text-slate-300 md:text-lg">
            Data is protected at every stage — from ingestion to retention.
            A five-stage lifecycle model with security controls enforced at
            each boundary.
          </p>
        </div>

        {/* Lifecycle Container */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_1px_4px_rgba(13,21,38,0.04),0px_4px_16px_rgba(13,21,38,0.08)] dark:border-slate-700 dark:bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
            {lifecycle.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex flex-col items-center px-6 py-10 text-center ${
                  index !== lifecycle.length - 1
                    ? "border-b border-slate-200 md:border-b-0 xl:border-r dark:border-slate-700"
                    : ""
                }`}
              >
                {/* Desktop Arrow */}
                {index !== lifecycle.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl font-bold text-teal-600 xl:flex dark:bg-slate-900">
                    ›
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 text-4xl">{item.icon}</div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 rounded-xl border border-teal-600/20 bg-emerald-50 px-6 py-5 dark:border-teal-500/20 dark:bg-teal-500/10">
          <p className="text-center text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            Data is protected at every stage — from ingestion to retention —
            with security controls enforced at each lifecycle boundary,
            not applied selectively.
          </p>
        </div>
      </div>
    </section>
  );
}