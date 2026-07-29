import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

export default function LearnSection() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1232px] px-5 sm:px-8 lg:px-0">
        <div className="flex min-h-[444px] flex-col overflow-hidden rounded-2xl bg-green-50 dark:bg-emerald-950/40 lg:flex-row">

          {/* Left Content */}
          <div className="flex w-full flex-col justify-center p-8 sm:p-10 lg:w-[50%] lg:px-12">

            <div className="flex flex-col items-center">

              {/* Icon + Text Side by Side */}
              <div className="flex items-center gap-4 text-left">

                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-emerald-700">
                  <BookOpen
                    className="h-8 w-8 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold leading-7 text-sky-950 dark:text-white">
                    Learn
                  </h2>

                  <p className="text-sm font-normal leading-5 text-gray-600 dark:text-gray-300">
                    Resource Center and, only after its
                    <br />
                    publishing gate, Blog &amp; Insights.
                  </p>
                </div>
              </div>

              {/* Browse Resource Center */}
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-1 text-sm font-semibold leading-5 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Browse Resource Center

                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[444px] lg:w-[54%]">
            <Image
              src="/resources/learn.png"
              alt="Learn resources"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 666px"
            />
          </div>

        </div>
      </div>
    </section>
  );
}