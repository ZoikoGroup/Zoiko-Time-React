"use client";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: (
      <>
        Policy-first by
        <br />
        design
      </>
    ),
    image: "/enterprise/policy.png",
  },
  {
    title: (
      <>
        Human authority
        <br />
        always
      </>
    ),
    image: "/enterprise/human.png",
  },
  {
    title: (
      <>
        Evidence-led
        <br />
        procurement
      </>
    ),
    image: "/enterprise/evidence.png",
  },
  {
    title: (
      <>
        No invasive
        <br />
        monitoring
      </>
    ),
    image: "/enterprise/invasive.png",
  },
];

export default function EnterpriseHero() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 lg:px-12 lg:py-9">

        {/* Enterprise Badge */}
        <div className="mb-5 inline-flex rounded-sm bg-emerald-500/10 px-3 py-1">
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-500">
            Enterprise
          </span>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            <h1 className="max-w-[620px] text-3xl font-semibold leading-[1.3] text-sky-950 dark:text-white sm:text-4xl">
              Deploy workforce truth
              <br className="hidden sm:block" />
              with{" "}
              <span className="text-emerald-500">
                policy, identity,
                <br className="hidden sm:block" />
                evidence,
              </span>{" "}
              and human control.
            </h1>

            <p className="mt-7 max-w-[590px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300 sm:text-lg lg:text-xl lg:leading-8">
              Evaluate organization-wide administration, access, review,
              support, and procurement pathways without invasive monitoring or
              automated consequential decisions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
  href="/request-a-demo"
  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 text-base font-bold text-white transition hover:bg-emerald-600"
>
  <span>Request Enterprise Demo</span>

  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.33 8H12.67M8.67 4L12.67 8L8.67 12"
      stroke="currentColor"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>

              <Link
  href="/contact-sales"
  className="inline-flex min-h-14 items-center justify-center rounded-lg border-2 border-stone-300 px-8 py-4 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:text-white dark:hover:border-slate-500"
>
  Contact Sales
</Link>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/enterprise/corporate-leadership.png"
              alt="Corporate leader"
              width={552}
              height={302}
              priority
              className="h-auto w-full rounded-2xl object-cover sm:rounded-3xl"
            />
          </div>

        </div>

        {/* Features */}
        <div className="mt-10 border-t border-sky-950/10 pt-6 dark:border-white/10 lg:mt-12">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">

            {features.map((feature) => (
              <div
                key={feature.image}
                className="flex items-center gap-3"
              >

                {/* Feature Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                  <Image
                    src={feature.image}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                {/* Feature Text */}
                <div className="text-sm font-semibold leading-5 text-sky-950 dark:text-white">
                  {feature.title}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}