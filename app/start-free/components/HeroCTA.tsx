export default function HeroCTA() {
  return (
    <section className="w-full bg-[#0B5D56] dark:bg-slate-950 rounded-2xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-5 py-2">
          <span className="text-xs text-teal-400"></span>

          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-400 sm:text-xs">
            Start Free · 30 Days · No Credit Card
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
          Workforce assurance that starts in{" "}
          <span className="text-teal-400">minutes.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
          Create a ZoikoTime workspace for verified time records, team
          accountability, policy-based controls, reports, and audit-ready
          workforce evidence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          {/* Compare Plans */}
          <button
            className="
              h-12
              w-full
              rounded-lg
              bg-white
              px-8
              text-sm
              font-medium
              text-teal-900
              transition-all
              duration-300
              hover:bg-gray-100
              hover:shadow-lg
              dark:bg-white
              dark:text-teal-900
              sm:w-60
            "
          >
            Compare plans
          </button>

          {/* Get Demo */}
          <button
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-white
              bg-transparent
              px-8
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-teal-900
              hover:shadow-lg
              sm:w-60
            "
          >
            <span className="text-xs"></span>
            Get a demo instead
          </button>
        </div>
      </div>
    </section>
  );
}