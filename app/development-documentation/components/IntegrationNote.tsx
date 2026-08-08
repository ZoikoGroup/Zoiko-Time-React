"use client";

export default function IntegrationNote() {
  return (
    <section className="w-full px-5 py-6 sm:px-8 lg:px-10 xl:px-14">
      <div className="mx-auto flex min-h-36 w-full max-w-[1132px] items-center overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900/95 to-slate-800/90 px-6 py-8 shadow-[0_10px_30px_rgba(14,31,61,0.10)] sm:px-8 lg:px-10">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold leading-7 text-white sm:text-xl">
            Designed for clean, boring, reliable integration.
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-white/90">
            Idempotent writes, pinned versions, clear errors, and preserved
            evidence.
          </p>
        </div>
      </div>
    </section>
  );
}