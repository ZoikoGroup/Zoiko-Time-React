import Image from "next/image";
import Link from "next/link";

export default function ResourcesHero() {
  return (
    <section className="w-full bg-white py-10 dark:bg-slate-950 sm:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1232px] flex-col overflow-hidden lg:min-h-[455px] lg:flex-row lg:items-center lg:gap-12">

        {/* Content */}
        <div className="order-2 flex w-full flex-1 flex-col px-5 py-8 sm:px-8 lg:order-1 lg:px-0 lg:py-0">

          {/* Label */}
          <div className="mb-5 inline-flex w-fit items-center rounded-full bg-green-100 px-3 py-1 dark:bg-emerald-950">
            <span className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
              Resource Center
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[700px] text-4xl font-bold leading-[1.05] tracking-tight text-sky-950 sm:text-5xl dark:text-white">
            Find the{" "}
            <span className="text-emerald-700 dark:text-emerald-400">
              guidance,
              <br className="hidden sm:block" />
              documentation, support,
              <br className="hidden sm:block" />
              and release information
              <br className="hidden sm:block" />
            </span>{" "}
            you need.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[576px] text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-300">
            Explore current resources for evaluators, administrators, workers,
            and existing customers — organized by task, audience, product area,
            and content status.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">

            {/* Explore Resources */}
            <Link
              href="/resources#resources"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-6 py-3 text-base font-semibold leading-6 text-white transition hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              Explore Resources

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Getting Started */}
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-base font-semibold leading-6 text-gray-800 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 dark:hover:bg-slate-800"
            >
              Getting Started

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

          </div>
        </div>

        {/* Image */}
        <div className="order-1 relative h-[280px] w-full overflow-hidden sm:h-[360px] lg:order-2 lg:h-[455px] lg:w-[616px] lg:shrink-0 lg:rounded-tl-[100px] lg:rounded-bl-[100px]">
          <Image
            src="/resources/resources-hero.png"
            alt="Resources and documentation"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 616px"
          />
        </div>

      </div>
    </section>
  );
}