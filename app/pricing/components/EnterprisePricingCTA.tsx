import Link from "next/link";

export default function EnterprisePricingCTA() {
  return (
    <section className="w-full bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 sm:py-20 lg:py-[74px]">
      <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-0">
        <div className="rounded-[20px] bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-10 text-center sm:px-10 lg:h-56 lg:px-12 lg:py-0">
          
          {/* Heading */}
          <h2 className="mx-auto max-w-[536px] pt-0 text-xl font-bold leading-8 text-white sm:text-2xl sm:leading-10 lg:pt-[38px]">
            Need private architecture or a contract?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[560px] text-sm font-normal leading-6 text-white/80">
            Enterprise includes dedicated tenancy, custom data residency,
            white-glove implementation, and SLA guarantees — scoped and priced
            to your organization.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-enterprise-demo"
              className="flex h-11 w-full max-w-[240px] items-center justify-center rounded-[10px] bg-[#3FB97A] px-5 text-sm font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(63,185,122,0.28)] transition-all duration-200 hover:bg-[#3FB97A] focus:outline-none focus:ring-2 focus:ring-[#3FB97A]/50 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-[240px] sm:text-base"
            >
              Request Enterprise Quote
            </Link>

            <Link
              href="/contact-sales"
              className="flex h-11 w-full max-w-[160px] items-center justify-center rounded-[10px] border border-white/30 bg-white/10 px-5 text-sm font-semibold leading-4 text-white transition-all duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-[160px] sm:text-base"
            >
              Talk to Sales →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}