import { standards } from "./integrations";

export default function Standards() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">

          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Standards
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Built on open standards
          </h2>

          <p className="mt-5 max-w-[680px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            No lock-in tricks — ZoikoTime connects through the protocols your
            stack already speaks.
          </p>

        </div>

        {/* Standards */}
        <div className="mx-auto mt-10 grid max-w-[960px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {standards.map((standard) => (
            <article
              key={standard.name}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-800 dark:bg-slate-900"
            >

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-emerald-50 dark:bg-emerald-950/40">

                {/* Masked so the glyph takes its colour from the background
                    utility — lets white and teal source files render alike. */}
                <span
                  aria-hidden="true"
                  className="h-4 w-4 bg-teal-700 dark:bg-emerald-300"
                  style={{
                    maskImage: `url(/integration-directory/${standard.icon})`,
                    WebkitMaskImage: `url(/integration-directory/${standard.icon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />

              </span>

              <div className="flex min-w-0 flex-col">

                <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                  {standard.name}
                </h3>

                <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {standard.body}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
