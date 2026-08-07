import Link from "next/link";
import Image from "next/image";

const dimensions = [
  {
    title: "Organizational scope",
    description: "Entities, locations, workforce groups, owners, and timeline.",
    linkLabel: "Open scope model",
    href: "#scope-model",
    image: "/global-deployment/Organizational-scope.png",
  },
  {
    title: "Regional operability",
    description:
      "Technical, contractual, legal, documentation, monitoring, support, and commercial readiness.",
    linkLabel: "View verification method",
    href: "#verification-method",
    image: "/global-deployment/Regional-operability.png",
  },
  {
    title: "Local configuration",
    description:
      "Jurisdiction, time zone, DST, locale, policy, notice, consultation, retention.",
    linkLabel: "View configuration model",
    href: "#configuration-model",
    image: "/global-deployment/Local-configuration.png",
  },
  {
    title: "Identity and integrations",
    description:
      "Authorized access, mapping, validation, acknowledgement, reconciliation, corrections.",
    linkLabel: "Review connection readiness",
    href: "#connection-readiness",
    image: "/global-deployment/Identity-integrations.png",
  },
  {
    title: "Support and continuity",
    description:
      "Support profile, incident route, status, continuity, rollback, ownership.",
    linkLabel: "Review operating readiness",
    href: "#operating-readiness",
    image: "/global-deployment/Support-continuity.png",
  },
  {
    title: "Evidence and approval",
    description:
      "Tests, gaps, named review, decision, effective date, history.",
    linkLabel: "View evidence model",
    href: "#evidence-model",
    image: "/global-deployment/Evidence-approval.png",
  },
];

export default function SixDimensions() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Deployment Readiness
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Six Dimensions Verified Before Activation
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Each dimension carries its own status, owner, evidence, and review
            date. None of them is inferred from another, and there is no
            combined readiness percentage.
          </p>

        </div>

        {/* Dimension Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {dimensions.map((dimension) => (
            <div
              key={dimension.title}
              className="flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              {/* Card Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-emerald-100 bg-white dark:border-slate-700 dark:bg-slate-800">
                <Image
                  src={dimension.image}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </div>

              <h3 className="mt-4 text-base font-bold leading-6 text-sky-950 dark:text-white">
                {dimension.title}
              </h3>

              <p className="mt-1.5 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {dimension.description}
              </p>

              <Link
                href={dimension.href}
                className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold leading-6 text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400"
              >
                <span>{dimension.linkLabel}</span>
                <span aria-hidden="true">→</span>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
