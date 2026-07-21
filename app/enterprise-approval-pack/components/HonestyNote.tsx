export default function HonestyNote() {
  return (
    <section className="bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[760px]">
        <div className="flex items-start gap-3 rounded-xl border border-orange-200 bg-yellow-50 p-4 dark:border-yellow-900/70 dark:bg-yellow-950/30">
          {/* Info Icon */}
          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
            <svg
              className="h-4 w-4 text-yellow-800 dark:text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 10v6" />
              <path d="M12 7h.01" />
            </svg>
          </div>

          {/* Content */}
          <p className="text-sm leading-5 text-yellow-800 dark:text-yellow-200">
            <strong className="font-bold text-yellow-900 dark:text-yellow-100">
              Honesty in claims.
            </strong>{" "}
            ZoikoTime does not claim certifications, named customers, or
            compliance attestations that are not fully verified. The pack uses
            capability language and clearly states what is true and what
            remains subject to formal review. ZoikoTime does not capture
            keystroke content or browser URL history.
          </p>
        </div>
      </div>
    </section>
  );
}