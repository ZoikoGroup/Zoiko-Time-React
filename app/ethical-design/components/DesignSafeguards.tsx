import Link from "next/link";
import Image from "next/image";

const safeguards = [
  {
    title: "Privacy by design · ED-03, ED-08",
    body: "Purpose limitation, minimization, deny-by-default access, retention controls, and preserved context.",
    link: { label: "Privacy", href: "/privacy" },
  },
  {
    title: "Security by design · ED-08",
    body: "Least privilege, safe logging, secure change, and prohibited categories excluded architecturally.",
    link: { label: "Security", href: "/security-overview" },
  },
  {
    title: "Safe failure · ED-09",
    body: "Unknown, partial, stale, and conflicting states stay visible. No optimistic fallback anywhere.",
    link: { label: "System Status", href: "/system-status" },
  },
];

const neverUsed = [
  "Hidden or preselected consent",
  "Fake urgency or countdown pressure",
  "Obstructive withdrawal or unsubscribe",
  "Confirmshaming language",
  "Coercive defaults",
  "Commercial prioritization over public evidence and rights",
];

const verifiable = [
  "No lead form gates public trust evidence",
  "Marketing consent is separate, optional, unchecked",
  "Unsubscribe is one action from every message",
  "No adverse option is preselected in any review interface",
];

const abuseControls = [
  "Abuse cases documented alongside use cases",
  "Permission constraints and scope limits applied",
  "Alerts and audit on sensitive repurposing",
  "Removal capability where risk cannot be contained",
];

export default function DesignSafeguards() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Safeguard Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

          {safeguards.map((safeguard) => (
            <article
              key={safeguard.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {safeguard.title}
              </h3>

              <p className="mt-2 flex-1 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {safeguard.body}
              </p>

              <Link
                href={safeguard.link.href}
                className="group mt-4 inline-flex items-center gap-1.5 self-start text-sm font-bold leading-6 text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
              >

                <span>{safeguard.link.label}</span>

                <span
                  className="transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>

              </Link>

            </article>
          ))}

        </div>

        {/* Dark Patterns & Misuse */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — dark patterns */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              ED-12 · No Dark Patterns
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Meaningful control, or none claimed
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Never used */}
              <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

                <div className="flex items-center gap-2.5">

                  <Image
                    src="/ethical-design/cross-mark.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="shrink-0"
                  />

                  <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    Never used
                  </h4>

                </div>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {neverUsed.map((item) => (
                    <li key={item} className="flex gap-2.5">

                      <span
                        className="mt-0.5 shrink-0 text-sm font-bold text-red-400"
                        aria-hidden="true"
                      >
                        ✕
                      </span>

                      <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                        {item}
                      </span>

                    </li>
                  ))}
                </ul>

              </div>

              {/* Verifiable */}
              <div className="flex flex-col rounded-2xl border border-emerald-100 bg-[#F5FEF7] p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

                <div className="flex items-center gap-2.5">

                  <Image
                    src="/ethical-design/tick-mark.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="shrink-0"
                  />

                  <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    Verifiable on this site
                  </h4>

                </div>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {verifiable.map((item) => (
                    <li key={item} className="flex gap-2.5">

                      <span
                        className="mt-0.5 shrink-0 text-sm font-bold text-emerald-500"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                        {item}
                      </span>

                    </li>
                  ))}
                </ul>

              </div>

            </div>

          </div>

          {/* Right — misuse */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Misuse &amp; Abuse Review
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Designed against repurposing
            </h3>

            <div className="mt-6 flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                The question asked at every gate
              </h4>

              <p className="mt-3 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                How could an administrator, a manager, an integration, or an
                attacker repurpose this design for something it was not intended
                to do?
              </p>

              <ul className="mt-4 flex flex-col gap-2.5">
                {abuseControls.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

            </div>

            <p className="mt-5 text-sm font-normal leading-6 text-zinc-500 dark:text-slate-400">
              A feature that is safe as designed but trivially repurposed as a
              monitoring tool does not pass this gate.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
