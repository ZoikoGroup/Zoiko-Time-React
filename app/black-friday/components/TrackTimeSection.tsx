import Image from "next/image";
import SaleBadge from "./SaleBadge";

const entries = [
  { task: "Competitor Analysis", status: "Paid", duration: "00:15:00" },
  { task: "Moodboarding", status: "Paid", duration: "00:20:00" },
];

export default function TrackTimeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070f1d] px-4 pb-28 pt-12 sm:px-6 sm:pt-16 lg:px-20">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-12">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-[32px] sm:leading-[1.3]">
            Your entire work day, in one place.
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-400">
            A defensible record of working time — without turning the workplace
            into something to watch.
          </p>
          <Image
            src="/black-friday/timesheet-team-laptop.webp"
            alt="Team member logging time on a laptop while colleagues work nearby"
            width={420}
            height={271}
            className="mt-6 h-auto w-full max-w-[420px] rounded-2xl object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between border-b border-slate-100 bg-gray-50 px-5 py-4 text-sm sm:text-base">
            <span className="text-slate-600">Today</span>
            <span className="text-slate-500">
              Total: <strong className="font-bold text-slate-900">35:00</strong>
            </span>
          </div>
          <ul className="px-5 pb-4 pt-2">
            {entries.map((entry) => (
              <li
                key={entry.task}
                className="flex items-center justify-between gap-3 border-b border-slate-100 py-3 text-sm"
              >
                <span className="text-slate-600">{entry.task}</span>
                <span className="flex items-center gap-3">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-800">
                    {entry.status}
                  </span>
                  <span className="font-medium tabular-nums text-slate-900">
                    {entry.duration}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SaleBadge
        rotate={-15}
        className="absolute bottom-10 right-4 hidden sm:right-28 md:block"
      />
    </section>
  );
}
