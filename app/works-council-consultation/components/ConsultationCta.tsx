import Link from "next/link";

const routes = [
  { label: "Privacy", href: "/privacy-controls" },
  { label: "Security", href: "/security-overview" },
  { label: "Human-in-Command", href: "/responsible-ai" },
  { label: "AI Governance", href: "/ai-and-automated-insights-policy" },
  { label: "Ethical Design", href: "/responsible-ai" },
  { label: "Administrative Controls", href: "/adminstration-policy-controls" },
  { label: "Compliance & Assurance", href: "/compliance" },
  { label: "Data Location & Residency", href: "/policy-and-location-context" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Service Status", href: "/status" },
];

const assurances = [
  "No lead form before resources.",
  "No preselected consent.",
  "No fake urgency.",
];

export default function ConsultationCta() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="rounded-2xl bg-white p-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] sm:p-12 dark:bg-slate-900">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left Content */}
            <div className="flex flex-col">

              <p className="text-xs font-bold uppercase leading-5 tracking-wider text-[#097F4B] dark:text-emerald-400">
                Route to what you actually need
              </p>

              <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
                Public resources first. Commercial conversation only if you want
                one.
              </h2>

              <p className="mt-4 max-w-[520px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                Review public consultation resources, prepare a scoped pack, or
                request controlled evidence through the approved review path.
                Deployment evaluation and customer support are separate routes —
                and none of them gates the materials above.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">

                <Link
                  href="#resource-directory"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
                >
                  Review public resources
                </Link>

                <Link
                  href="#prepare-consultation-pack"
                  className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
                >
                  Prepare a consultation pack
                </Link>

              </div>

              {/* Secondary Routes */}
              <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-bold leading-6 text-[#097F4B] dark:text-emerald-400">

                <Link
                  href="/contact-sales"
                  className="inline-flex items-center gap-1.5 transition hover:text-emerald-800"
                >
                  <span>Request controlled evidence</span>
                  <span aria-hidden="true">→</span>
                </Link>

                <span
                  className="text-zinc-400 dark:text-slate-600"
                  aria-hidden="true"
                >
                  ·
                </span>

                <Link
                  href="/request-enterprise-demo"
                  className="transition hover:text-emerald-800"
                >
                  Request Enterprise Demo
                </Link>

                <span
                  className="text-zinc-400 dark:text-slate-600"
                  aria-hidden="true"
                >
                  ·
                </span>

                <Link
                  href="/enterprise-support"
                  className="transition hover:text-emerald-800"
                >
                  Enterprise Support
                </Link>

              </p>

              {/* Assurances */}
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2">
                {assurances.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-bold leading-6 text-sky-950 dark:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            {/* Authoritative Routes */}
            <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 lg:self-center dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Authoritative routes
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">

                {routes.map((route) => (
                  <Link
                    key={route.label}
                    href={route.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-bold leading-6 text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
                  >

                    <span>{route.label}</span>

                    <span
                      className="transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      →
                    </span>

                  </Link>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
