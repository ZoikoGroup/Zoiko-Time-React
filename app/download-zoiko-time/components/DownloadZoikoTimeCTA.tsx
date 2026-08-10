export default function DownloadZoikoTimeCTA() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1116px] flex-col items-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-blue-950 px-5 py-16 text-center sm:px-10 sm:py-20 lg:px-14 lg:py-24">

        {/* Label */}
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-emerald-300">
            Get Started
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 max-w-[900px] text-3xl font-semibold leading-tight text-white sm:text-4xl sm:leading-[1.3]">
          Download ZoikoTime for your platform.
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[560px] text-sm font-normal leading-6 text-slate-300 sm:text-base">
          Free to install, easy to deploy across your organization, and never
          surveillance software.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-3">

          <button
            type="button"
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold leading-6 text-white transition-colors hover:bg-teal-500"
          >
            Download for Zoiko Time
          </button>

          <button
            type="button"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold leading-6 text-white transition-colors hover:bg-white/10"
          >
            Start Free
          </button>

          <button
            type="button"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold leading-6 text-white transition-colors hover:bg-white/10"
          >
            Request Enterprise Demo
          </button>

        </div>

        {/* Disclaimer */}
        <p className="mt-3 text-xs font-normal leading-5 text-slate-400">
          Not surveillance, productivity monitoring, or GPS tracking software.
        </p>

      </div>
    </section>
  );
}