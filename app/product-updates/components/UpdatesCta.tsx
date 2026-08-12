import Link from "next/link";

const ctas = [
  { label: "Explore product updates", href: "#latest-updates", primary: true },
  { label: "Read Release Notes", href: "/release-notes" },
  { label: "Explore ZoikoTime", href: "https://getzoikotime.com/" },
];

export default function UpdatesCta() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">

        <div className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-8 py-14 text-center sm:px-12">

          <p className="flex items-center gap-2 text-xs font-semibold uppercase leading-5 tracking-wide text-teal-300">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-400"
              aria-hidden="true"
            />
            Stay Current
          </p>

          <h2 className="mt-5 max-w-[820px] text-3xl font-semibold leading-tight text-white sm:text-4xl">
            See what&apos;s new, and what it means for your work.
          </h2>

          <p className="mt-5 max-w-[560px] text-sm font-normal leading-6 text-slate-300">
            Browse verified updates by role and product area, or explore the
            rest of ZoikoTime.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

            {ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={
                  cta.primary
                    ? "inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-600"
                    : "inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/60"
                }
              >
                {cta.label}
              </Link>
            ))}

          </div>

          <p className="mt-6 text-xs font-normal leading-5 text-slate-400">
            No roadmap promises. No silent rollout assumptions. No unsupported
            benefit claims.
          </p>

        </div>

      </div>
    </section>
  );
}
