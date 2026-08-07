import Image from "next/image";

const points = [
  "See today's shift, breaks, and current state at a glance",
  "Add context or request a correction directly from the record",
  "Follow review history — who decided, and why",
];

export default function WorkerExperience() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Worker Experience
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            My Shifts — clear, and yours to review
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Image
            src="/shift-integrity-controls/Worker-Experience.png"
            alt="A worker checking their shift record on a handheld device"
            width={441}
            height={331}
            className="h-auto w-full rounded-2xl object-cover shadow-[0px_20px_40px_-24px_rgba(10,22,40,0.35)]"
          />

          <div>
            <h3 className="text-xl font-bold leading-8 text-slate-800 dark:text-white">
              Every shift, explained in plain language
            </h3>

            <p className="mt-3 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
              Workers see their own shift record, its current state, and exactly
              what&rsquo;s needed to resolve it — without digging through a
              manager&rsquo;s tool.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <Image
                    src="/shift-integrity-controls/tick-mark.svg"
                    alt=""
                    aria-hidden="true"
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 shrink-0"
                  />
                  <span className="text-sm font-normal leading-6 text-slate-800 dark:text-slate-300">
                    {point}
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
