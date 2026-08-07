import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    image: "/deterministic-time-classification/Policy-owners.png",
    alt: "A policy owner reviewing rule logic",
    title: "Policy owners",
    body: "Read and approve the exact rule logic before it's ever published.",
    linkLabel: "Policy Governance →",
    href: "/adminstration-policy-controls",
  },
  {
    image: "/deterministic-time-classification/Auditors-compliance.png",
    alt: "Auditors tracing a classification result",
    title: "Auditors & compliance",
    body: "Trace any result back to its exact rule, version, and effective date.",
    linkLabel: "Explore Evidence Ledger →",
    href: "/audit-grade-evidence",
  },
  {
    image: "/deterministic-time-classification/HR-IT.png",
    alt: "HR and IT colleagues reviewing a governed rule set",
    title: "HR & IT",
    body: "One governed rule set, understandable by policy owners and engineers alike.",
    linkLabel: "Visit Trust Center →",
    href: "/trust-governance",
  },
];

export default function EnterpriseReadiness() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Enterprise Readiness
          </p>
          <h2 className="mx-auto mt-3 max-w-[710px] text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Built for the teams who have to defend the outcome
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map(({ image, alt, title, body, linkLabel, href }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800"
            >
              <Image
                src={image}
                alt={alt}
                width={361}
                height={150}
                className="h-[150px] w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {title}
                </h3>

                <p className="mt-3 flex-1 text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {body}
                </p>

                <Link
                  href={href}
                  className="mt-5 text-xs font-semibold leading-5 text-teal-700 underline-offset-2 hover:underline dark:text-teal-400"
                >
                  {linkLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
