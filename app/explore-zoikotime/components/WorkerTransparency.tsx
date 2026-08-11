import Image from "next/image";

const commitments = [
  "Own-record visibility, in plain language",
  "Correction request with status tracking",
  "Support and escalation routes, always available",
];

export default function WorkerTransparency() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
            <Image
              src="/explore-zoikotime/worker-transparency.png"
              alt="A worker checking their own time record on a phone"
              width={530}
              height={424}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-700 dark:text-teal-400">
                Worker Transparency
              </span>
            </div>

            <h2 className="mt-4 max-w-[480px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white">
              Workers are never just subjects of administration.
            </h2>

            <p className="mt-6 max-w-[530px] text-base leading-6 text-gray-500 dark:text-slate-400">
              Every worker can see their own record, understand how it was
              classified, and request a correction — as a first-class path, not
              an afterthought.
            </p>

            <ul className="mt-8 space-y-2.5">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-3">
                  <Image
                    src="/explore-zoikotime/tick-mark.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="mt-1"
                  />

                  <span className="text-sm leading-6 text-gray-700 dark:text-slate-300">
                    {commitment}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
