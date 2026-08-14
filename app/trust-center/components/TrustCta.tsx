import Link from "next/link";

const routes = [
  { label: "Security", href: "/security-overview" },
  { label: "Privacy", href: "/privacy-controls" },
  { label: "Human-in-Command", href: "/responsible-ai" },
  { label: "AI Governance", href: "/ai-and-automated-insights-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "System Status", href: "/status" },
];

const existingCustomerLinks = [
  { label: "Help Center", href: "/help-center" },
  { label: "Enterprise Support", href: "/contact" },
  { label: "System Status", href: "/status" },
];

const assurances = [
  "No lead form before evidence.",
  "No preselected consent.",
  "No fake urgency.",
];

export default function TrustCta() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="rounded-2xl bg-white p-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] sm:p-12 dark:bg-slate-900">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left Content */}
            <div className="flex flex-col">

              <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
                Route to the right evidence
              </p>

              <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
                Evidence first. A commercial conversation only if you need one.
              </h2>

              <p className="mt-4 max-w-[520px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                Security and procurement teams should use the controlled review
                pathway. Deployment evaluation and existing-customer assistance
                are separate routes — and none of them gates the public evidence
                above.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">

                <Link
                  href="/security"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
                >
                  Request Security Review
                </Link>

                <Link
                  href="/request-enterprise-demo"
                  className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
                >
                  Request Enterprise Demo
                </Link>

              </div>

              {/* Existing Customers */}
              <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6 text-zinc-700 dark:text-slate-300">

                <span>Existing customers:</span>

                {existingCustomerLinks.map((link, index) => (
                  <span
                    key={link.label}
                    className="inline-flex items-center gap-2"
                  >

                    {index > 0 && (
                      <span
                        className="text-zinc-400 dark:text-slate-600"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                    )}

                    <Link
                      href={link.href}
                      className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
                    >
                      {link.label}
                    </Link>

                  </span>
                ))}

              </p>

              {/* Assurances */}
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2">
                {assurances.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-bold leading-6 text-[#097F4B] dark:text-emerald-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            {/* Public Evidence Routes */}
            <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 lg:self-center dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Public evidence, no account required
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

              <p className="mt-6 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Evidence-gated destinations are listed in the{" "}
                <Link
                  href="#trust-model"
                  className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
                >
                  trust model
                </Link>{" "}
                above with their honest release state. A prepared page is not a
                current page.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
