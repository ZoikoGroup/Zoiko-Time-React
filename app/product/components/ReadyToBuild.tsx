import Image from "next/image";
import Link from "next/link";

export default function ReadyToBuild() {
  return (
    <section className="bg-white py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-emerald-400 bg-slate-50 p-10 dark:border-emerald-700 dark:bg-neutral-900 lg:flex-row lg:items-center">
          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
              <Image
                src="/product/SVG.png"
                alt="Ready to build"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-950 dark:text-white">
                Ready to build workforce truth?
              </h2>

              <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
                Start your 30-day free trial. No credit card required.
              </p>
            </div>
          </div>

          {/* Right */}
          <Link
  href="/start-free"
  className="rounded-lg bg-emerald-500 px-8 py-4 text-center shadow-lg transition-all duration-300 hover:bg-emerald-600 hover:shadow-xl"
>
  <span className="font-bold">Start Free</span>
  <span className="font-normal"> 30-day free trial</span>
</Link>
        </div>
      </div>
    </section>
  );
}