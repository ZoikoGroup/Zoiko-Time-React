import Link from "next/link";

export default function DisclosureCTA() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1056px] px-5 sm:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-slate-800
            to-blue-950
            px-6
            py-14
            text-center
            sm:px-10
            sm:py-16
            lg:px-12
            lg:py-[60px]
          "
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-emerald-300">
              Report Responsibly
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-3 max-w-[800px] text-2xl font-semibold leading-tight text-white sm:text-3xl sm:leading-[1.6]">
            Found something? Review scope first, then report.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[688px] text-sm leading-6 text-slate-300">
            Authorization and scope come from current approved policy — not
            from this page alone.
          </p>

          {/* CTA */}
          <Link
            href="#report"
            className="
              mt-8
              inline-flex
              min-h-12
              w-full
              max-w-72
              items-center
              justify-center
              rounded-full
              bg-teal-600
              px-6
              text-center
              text-sm
              font-semibold
              leading-6
              text-white
              transition-colors
              hover:bg-teal-700
              focus:outline-none
              focus:ring-2
              focus:ring-teal-400
              focus:ring-offset-2
              focus:ring-offset-blue-950
            "
          >
            Report a Potential Vulnerability
          </Link>
        </div>
      </div>
    </section>
  );
}