import Link from "next/link";

const footerLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Workers", href: "/solutions-workers" },
  { label: "Anti-Surveillance Principles", href: "/anti-surveillance-principles" },
  { label: "Security", href: "/security" },
  { label: "Help Center", href: "/help-center" },
];

export default function HrCta() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-20 sm:px-8 lg:px-12">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-sky-950 px-6 py-16 sm:px-16">

          {/* Corner Glow */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(5,150,105,0.25),transparent_60%)]"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-3.5">

            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
                aria-hidden="true"
              />
              <p className="text-center text-xs font-bold uppercase leading-5 tracking-widest text-emerald-300">
                Build a Workforce Record HR Can Trust
              </p>
            </div>

            <h2 className="max-w-[640px] text-center text-3xl font-bold leading-[1.4] text-white sm:text-4xl">
              Make Time, Attendance, and Review Clearer for Everyone Involved.
            </h2>

            <p className="max-w-[520px] text-center text-base font-normal leading-6 text-white/70">
              See how ZoikoTime can fit your workforce policies, review routes,
              payroll process, and employee-communication requirements.
            </p>

            {/* Buttons */}
            <div className="mt-3.5 flex flex-col gap-3.5 sm:flex-row">

              <Link
                href="/request-enterprise-demo"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3.5 text-base font-semibold leading-6 text-white transition hover:bg-emerald-600"
              >
                Request Enterprise Demo
              </Link>

              <Link
                href="/start-free"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-base font-semibold leading-6 text-white transition hover:border-white/60"
              >
                Start Free
              </Link>

            </div>

            <p className="mt-1 max-w-[520px] text-center text-xs font-normal leading-5 text-white/60">
              No screenshots. No keystroke capture. Human review remains in
              control.
            </p>

            {/* Footer Links */}
            <div className="mt-3 flex flex-wrap justify-center gap-5">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-center text-xs font-normal leading-5 text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
