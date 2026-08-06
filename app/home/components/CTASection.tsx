import Image from "next/image";
import { Clock3, Eye, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: '/home/Icon (13).png', title: "Faster approvals", subtitle: "Keep work moving" },
  { icon: '/home/Icon (14).png', title: "Clearer visibility", subtitle: "Make smarter decisions" },
  { icon: '/home/Icon (15).png', title: "Less admin overhead", subtitle: "Save time every week" },
];

export default function CTASection() {
  return (
    <section className="bg-white px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 rounded-[40px] border border-emerald-300 bg-[#F7FFFB] p-6 dark:border-emerald-500/30 dark:bg-gray-800 sm:p-12 lg:grid-cols-2 lg:p-20">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-wide text-emerald-500 dark:text-emerald-400">
            See It In Action
          </span>
          <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">
            See How ZoikoTime Fits Your Team.
          </h2>
          <p className="text-lg leading-7 text-zinc-700 dark:text-gray-300">
            Explore the platform with your workflows, teams, and goals in
            mind, no pressure, just clarity.
          </p>

          <div className="flex flex-col gap-6 py-6">
            {features.map(({ icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-white dark:bg-gray-700">
                  <img className="size-4 " src={icon} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {title}
                  </p>
                  <p className="text-xs text-zinc-700 dark:text-gray-400">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
  <Link
    href="/request-enterprise-demo"
    className="rounded-lg bg-slate-950 px-8 py-4 text-center text-base font-bold text-white transition-opacity hover:opacity-90 dark:bg-emerald-500"
  >
    Request Enterprise Demo
  </Link>

  <Link
    href="/start-free"
    className="rounded-lg border border-zinc-500 bg-white px-8 py-4 text-center text-base font-bold text-slate-950 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
  >
    Start Free
  </Link>
</div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-800/10 blur-3xl" />
          <Image
            className="relative h-56 w-full rounded-3xl object-cover sm:h-72"
            width={515}
            height={281}
            src="/home/image-1.png"
            alt="Dashboard preview"
          />
        </div>
      </div>
    </section>
  );
}
