export default function ApprovalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-blue-950 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-500 sm:text-base">
          Move Approval Forward
        </p>

        {/* Heading */}
        <h2 className="mt-10 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[1.4]">
          Help your committee approve with
          <br className="hidden sm:block" />
          confidence
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
          Get the structured approval pack now, or talk it through with the
          enterprise team on an approval call.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#approval-form"
            className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-teal-600 px-6 text-center text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700 sm:min-w-72"
          >
            Get the Enterprise Approval Pack
          </a>

          <a
            href="#approval-form"
            className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-white/30 bg-white/10 px-6 text-center text-sm font-semibold text-white transition hover:bg-white/20 sm:min-w-72"
          >
            Book an Enterprise Approval Call
          </a>
        </div>
      </div>
    </section>
  );
}