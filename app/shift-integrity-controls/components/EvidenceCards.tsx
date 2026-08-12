import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    image: "/shift-integrity-controls/Close-readiness-reporting.png",
    alt: "Payroll team reviewing close-readiness figures",
    title: "Close-readiness reporting",
    body: "See completeness and approval status by site and period before payroll cutoff.",
    linkLabel: "Improve Payroll Accuracy →",
    href: "/improve-payroll-accuracy",
  },
  {
    image: "/shift-integrity-controls/Policy-governance.png",
    alt: "Policy owners reviewing a change timeline",
    title: "Policy governance",
    body: "Version history and change timelines keep every policy update accountable and traceable.",
    linkLabel: "Visit Trust Center →",
    href: "/trust-center",
  },
  {
    image: "/shift-integrity-controls/Audit-ready-evidence.png",
    alt: "Auditor examining time records",
    title: "Audit-ready evidence",
    body: "Every decision, correction, and approval carries an actor, timestamp, and rationale.",
    linkLabel: "Create Auditable Time Records →",
    href: "/audit-grade-evidence",
  },
];

export default function EvidenceCards() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Reporting &amp; Enterprise Trust
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Evidence your team can stand behind
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
