import Link from "next/link";

export default function IntegrationsCta() {
  return (
    <section className="w-full bg-[radial-gradient(120%_110%_at_18%_0%,#0F4A63_0%,#123A5E_42%,#15274C_100%)] py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 text-center sm:px-8 lg:px-6">
        <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-[#3FB97A]">
          Evaluate a Governed Connection
        </p>

        <h2 className="mx-auto mt-6 max-w-[860px] text-3xl font-bold leading-[1.3] text-white sm:text-4xl">
          Exchange approved records — without giving up authority
        </h2>

        <p className="mx-auto mt-6 max-w-[620px] text-base font-normal leading-7 text-white/75">
          Walk through the Integration Governance Center with your systems,
          directions, objects, and approval workflow. Bring your integration
          requirements; we&rsquo;ll confirm availability together.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href="/request-enterprise-demo"
            className="inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-[#3FB97A] px-6 py-3.5 text-base font-semibold leading-5 text-white transition hover:brightness-95 sm:w-auto"
          >
            Request Enterprise Demo
          </Link>

          <Link
            href="/contact-sales"
            className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold leading-5 text-white transition hover:bg-white/10 sm:w-auto"
          >
            Contact Sales
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-[620px] text-xs font-normal leading-5 text-white/70">
          Existing customers: open the Integration Center, Product
          Documentation, or Enterprise Support per entitlement.
        </p>

        <p className="mx-auto mt-6 max-w-[620px] text-xs font-normal leading-5 text-white/45">
          No screenshots, keystroke content, URL history, application-name
          monitoring, or clipboard collection under any tier or configuration.
        </p>
      </div>
    </section>
  );
}
