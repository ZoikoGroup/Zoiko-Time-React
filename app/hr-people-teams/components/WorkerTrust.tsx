import Image from "next/image";

const records = [
  "Approved time events and attendance states",
  "Configured breaks and rest periods",
  "Project or task attribution and schedule context",
  "Policy classification, comments, and corrections",
  "Approvals and full audit history",
];

const neverCollects = [
  "Screenshots or keystroke content",
  "URL history or application names",
  "Clipboard data",
  "Webcam or microphone surveillance",
  "Hidden background behavior scoring",
];

export default function WorkerTrust() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex max-w-[680px] flex-col">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              Worker Trust &amp; Review Rights
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            What ZoikoTime Records — and What It Never Collects
          </h2>

        </div>

        {/* Comparison Cards */}
        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Records */}
          <div className="flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-7 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
              ZoikoTime records
            </h3>

            <ul className="flex flex-col gap-2.5">
              {records.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Image
                    src="/hr-people-teams/tick-mark.png"
                    alt=""
                    width={10}
                    height={10}
                    className="mt-[5px] h-2.5 w-2.5 shrink-0 object-contain"
                  />
                  <span className="text-sm font-normal leading-5 text-slate-900 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Never Collects */}
          <div className="flex flex-col gap-4 rounded-2xl border border-rose-200 bg-red-50 p-7 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
              ZoikoTime never collects
            </h3>

            <ul className="flex flex-col gap-2.5">
              {neverCollects.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Image
                    src="/hr-people-teams/cross-mark.png"
                    alt=""
                    width={10}
                    height={10}
                    className="mt-[5px] h-2.5 w-2.5 shrink-0 object-contain"
                  />
                  <span className="text-sm font-normal leading-5 text-slate-900 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Image + Restriction Note */}
        <div className="mt-9 grid grid-cols-1 items-center gap-9 lg:grid-cols-2">

          <Image
            src="/hr-people-teams/worker-trust.png"
            alt="Manager and employee reviewing a printed record together"
            width={571}
            height={320}
            className="h-auto w-full rounded-[20px] object-cover shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)]"
          />

          <div className="rounded-[10px] border-l-[3px] border-emerald-600 bg-[#F0FBF6] px-4 pb-5 pt-4 dark:bg-slate-900">
            <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
              The platform does not convert an anomaly flag into an accusation
              or consequential employment decision. Authorized people review the
              case — always. These restrictions apply under every tier and
              configuration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
