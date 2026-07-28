import { CheckCircle2} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-50 px-4 py-16 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-emerald-300/30 bg-emerald-300/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-500 dark:text-emerald-400">
            Workforce Truth Infrastructure
          </span>

          <h1 className="text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Know what happened.{" "}
            <span className="text-emerald-500 dark:text-emerald-400">
              Pay, bill, and defend
            </span>{" "}
            it with confidence.
          </h1>

          <p className="max-w-xl text-lg leading-7 text-zinc-700 dark:text-gray-300">
            ZoikoTime creates deterministic, evidence-backed time records for
            payroll, billing, compliance, and audit, without screenshots,
            keystroke capture, or workforce surveillance.
          </p>

          <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
            <button className="rounded-lg bg-emerald-400 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-emerald-500">
              Request Enterprise Demo
            </button>
            <button className="rounded-lg border border-zinc-500 bg-white px-8 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
              Start Free
            </button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
            {["No screenshots", "No keystroke capture", "No URL monitoring"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-400" />

                  <span className="text-sm text-zinc-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="relative w-full">
          <Image
            className="h-auto w-full max-h-[600px] rounded-[40px] object-cover"
            width={596}
            height={600}
            src="/home/Container.png"
            alt="Team using ZoikoTime"
          />
          <Image
            className="absolute -bottom-8 -left-8 hidden w-64 rounded-2xl shadow-2xl sm:block lg:w-96"
            width={407}
            height={202}
            src="/home/CC 2.png"
            alt="Time tracking dashboard preview"
          />
        </div>
      </div>
    </section>
  );
}
