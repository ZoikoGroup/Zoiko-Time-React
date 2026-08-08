import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Human-in-Command", href: "/human-in-command" },
  { label: "Privacy", href: "/privacy" },
  { label: "Security", href: "/security-overview" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Trust Center", href: "/trust-center" },
];

export default function DesignHero() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            {/* Badge */}
            <div className="inline-flex self-start rounded-full bg-emerald-500/10 px-3.5 py-1.5">
              <span className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
                Ethical Design Principles
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-[600px] text-4xl font-extrabold leading-[1.1] text-sky-950 dark:text-white sm:text-5xl lg:text-6xl">
              Human dignity first. Evidence in{" "}
              <span className="text-emerald-500">every design decision</span>.
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-[590px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Twelve governed principles covering legitimate need, affected
              people, data, authority, safeguards, tests, limitations, owners,
              review dates, and correction history. Each carries an honest
              implementation state — because adopting a principle is not the
              same as having implemented it.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">

              <Link
                href="#principles"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
              >
                Explore the Principles
              </Link>

              <Link
                href="#evidence-directory"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Review Design Evidence
              </Link>

            </div>

            {/* Quick Links */}
            <p className="mt-5 flex flex-wrap items-center gap-x-2 text-sm font-bold leading-6 text-emerald-700 dark:text-emerald-400">
              {quickLinks.map((link, index) => (
                <span key={link.label} className="inline-flex items-center gap-2">

                  {index > 0 && (
                    <span
                      className="text-xs font-normal text-zinc-500 dark:text-slate-500"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}

                  <Link
                    href={link.href}
                    className="transition hover:text-emerald-800"
                  >
                    {link.label}
                  </Link>

                </span>
              ))}
            </p>

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-1">

            <Image
              src="/ethical-design/hero.png"
              alt="A design governance team reviewing the evidence, safeguards, and limitations behind a product decision"
              width={598}
              height={466}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Scope Callout */}
            <div className="rounded-xl border border-l-[3px] border-sky-800 bg-white px-5 pb-5 pt-4 dark:bg-slate-900">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-800 dark:text-sky-400">
                Scope invariant
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                This page governs design conduct and public evidence. It never
                converts a complex social, employment, or jurisdictional
                judgment into a generic ethical score or a product-owned legal
                conclusion.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
