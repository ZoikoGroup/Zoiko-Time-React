import Link from "next/link";
import Image from "next/image";

const capabilities = [
  { lead: "Explicit", rest: "authorization" },
  { lead: "Versioned", rest: "mappings" },
  { lead: "Controlled", rest: "activation" },
  { lead: "Traceable", rest: "reconciliation" },
];

export default function IntegrationsHero() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-[#F6F9F9] to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 lg:px-6 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div>
            <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
              Enterprise Integrations
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-slate-800 dark:text-white sm:text-5xl">
              Connect workforce
              <br />
              records without losing
              <br />
              <span className="text-[#3FB97A]">authority or evidence</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
              Bring approved enterprise inputs into ZoikoTime and deliver
              governed record versions to authorized destinations — through
              explicit access, deterministic mapping, controlled testing, human
              approval, reconciliation, and traceable change.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/request-enterprise-demo"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#3FB97A] px-6 py-3.5 text-base font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition hover:brightness-95"
              >
                Request Enterprise Demo
              </Link>

              <Link
                href="/contact-sales"
                className="inline-flex items-center justify-center rounded-[10px] border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold leading-4 text-slate-800 transition hover:border-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Contact Sales
              </Link>
            </div>

            <ul className="mt-8 flex max-w-[520px] flex-wrap gap-2.5">
              {capabilities.map(({ lead, rest }) => (
                <li
                  key={lead}
                  className="rounded-[10px] border border-slate-200 bg-white px-3 py-2 text-xs leading-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="font-bold text-[#0B8675]">{lead}</span>{" "}
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <Image
            src="/enterprise-integrations/hero.png?v=3"
            alt="Engineers reviewing a governed integration on screen"
            width={564}
            height={462}
            priority
            className="h-auto w-full rounded-2xl object-cover shadow-[0px_28px_58px_0px_rgba(14,31,61,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}
