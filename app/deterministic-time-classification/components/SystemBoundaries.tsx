import Image from "next/image";

const boundaries = [
  "Not AI decision-making",
  "Not payroll approval",
  "Not a legal compliance guarantee",
  "Not worker surveillance",
  "Not productivity scoring",
  "Not misconduct detection",
];

export default function SystemBoundaries() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            System Boundaries
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            What Deterministic Time Classification is not
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-[920px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {boundaries.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
            >
              <Image
                src="/deterministic-time-classification/cross-mark.svg"
                alt=""
                aria-hidden="true"
                width={14}
                height={14}
                className="h-3.5 w-3.5 shrink-0"
              />
              <span className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex items-start justify-center gap-2 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
          <Image
            src="/deterministic-time-classification/Frame.svg"
            alt=""
            aria-hidden="true"
            width={14}
            height={14}
            className="mt-0.5 h-3.5 w-3.5 shrink-0"
          />
          <span>
            Classification results never trigger an autonomous decision — pay,
            discipline, or otherwise. A human always decides.
          </span>
        </p>
      </div>
    </section>
  );
}
