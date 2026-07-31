import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function EvidenceRequest() {
  return (
    <section className="bg-white py-16 dark:bg-[#0B1120] md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-300/20 bg-slate-50 px-8 py-14 dark:border-slate-800 dark:bg-slate-900 md:px-12 lg:px-16">
          {/* Heading */}
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl lg:text-[60px] lg:leading-[1.05]">
              Need access to additional evidence?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-slate-300">
              Qualified organizations can request access to controlled
              evidence rooms, security reviews, and procurement documentation
              for deeper diligence.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
  type="button"
  className="inline-flex items-center justify-center rounded-lg bg-[#44B97A] px-8 py-4 text-base font-medium text-white transition hover:bg-[#3EAA70]"
>
  Request Security Review
</button>

            <Link
  href="/request-a-demo"
  className="inline-flex items-center justify-center rounded-lg border-2 border-[#44B97A] px-8 py-4 text-base font-medium text-[#44B97A] transition hover:bg-[#44B97A] hover:text-white"
>
  Request Enterprise Demo
</Link>
          </div>

          {/* Features */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-12">
            <div className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 text-[#44B97A]"
                strokeWidth={2.5}
              />
              <span className="text-sm text-zinc-700 dark:text-slate-300">
                For security &amp; compliance teams
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 text-[#44B97A]"
                strokeWidth={2.5}
              />
              <span className="text-sm text-zinc-700 dark:text-slate-300">
                Governed and auditable access
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 text-[#44B97A]"
                strokeWidth={2.5}
              />
              <span className="text-sm text-zinc-700 dark:text-slate-300">
                Enterprise &amp; procurement support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}