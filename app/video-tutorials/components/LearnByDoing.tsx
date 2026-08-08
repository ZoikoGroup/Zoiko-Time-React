"use client";

export default function LearnByDoing() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-800 to-blue-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center sm:px-8">

        {/* Label */}
        <div className="text-sm font-semibold uppercase leading-6 tracking-[0.16em] text-teal-600 sm:text-base">
          Learn by Doing
        </div>

        {/* Heading */}
        <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-3xl">
          Find the tutorial for the task in front of you
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
          Search by keyword, browse by role, or talk to a specialist directly.
        </p>

        {/* Actions */}
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">

          <button
            type="button"
            className="w-full rounded-[10px] bg-teal-600 px-7 py-3 text-sm font-semibold leading-4 text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700 sm:w-auto sm:min-w-[216px]"
          >
            Contact Support team
          </button>

          <button
            type="button"
            className="w-full rounded-[10px] border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold leading-4 text-white transition hover:bg-white/15 sm:w-auto sm:min-w-[144px]"
          >
            Get a Demo
          </button>

        </div>
      </div>
    </section>
  );
}