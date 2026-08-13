import Link from "next/link";

import { poppins } from "../fonts";

export default function EvidenceCta() {
  return (
    <section className="bg-[#0A1420]">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-20 lg:px-9">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3.5">
          <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-500" />

          <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">
            Evidence, Connected
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`${poppins.className} mx-auto mt-5 max-w-[680px] text-center text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl`}
        >
          Traceable history. Accountable review. Worker rights, intact.
        </h2>

        <p className="mx-auto mt-6 max-w-[640px] text-center text-base leading-6 text-white/60">
          Start free and connect your first record, or bring your enterprise
          evaluation questions to a live demo.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/start-free"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-teal-500 px-8 text-sm font-bold text-white transition hover:bg-teal-400 sm:w-auto"
          >
            Start Free
          </Link>

          <Link
            href="/request-enterprise-demo"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/30 px-8 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Request Enterprise Demo
          </Link>
        </div>

      </div>
    </section>
  );
}
