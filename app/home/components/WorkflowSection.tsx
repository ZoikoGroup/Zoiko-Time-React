import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  { icon: '/home/Icon (9).png', text: "One-click start, pause, and resume" },
  { icon: '/home/Icon (10).png', text: "Clear project and task attribution" },
  { icon: '/home/Icon (11).png', text: "Mobile and desktop continuity" },
  { icon: '/home/Icon (12).png', text: "Manager visibility without invasive monitoring" },
];

export default function WorkflowSection() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-3xl shadow-2xl lg:order-1">
          <Image
            className="h-72 w-full object-cover sm:h-[450px] lg:h-[649px]"
            width={569}
            height={852}
            src="/home/image 78.png"
            alt="Team collaborating"
          />
        </div>

        <div className="order-1 flex flex-col gap-4 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-wide text-emerald-500 dark:text-emerald-400">
            Simple Daily Workflows
          </span>
          <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">
            Pause, Resume, and Switch Work in Seconds
          </h2>
          <p className="text-lg leading-7 text-zinc-700 dark:text-gray-300">
            Workers and managers can track time clearly across tasks, breaks,
            and projects with minimal friction and clear records.
          </p>

          <div className="flex flex-col gap-8 py-6">
            {features.map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-gray-800">
                  <img className="size-5" src={icon} />
                </span>
                <span className="text-base font-bold text-slate-950 dark:text-white">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <button className="flex w-fit items-center gap-2 rounded-lg bg-emerald-400 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-emerald-500">
            Explore Core Workflows
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
