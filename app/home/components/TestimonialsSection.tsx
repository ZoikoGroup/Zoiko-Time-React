import Image from "next/image";
import { Building2, ShieldCheck, Star, Users } from "lucide-react";

const testimonials = [
  {
    quote:
      "Approvals are faster and our teams finally have the visibility they need. It's been a game-changer.",
    name: "Priya Nair",
    role: "VP of Operations, Astera Group",
    company: "ASTERA",
    icon:'/home/image 90.png',
  },
  {
    quote:
      "ZoikoTime cut our time tracking admin in half and made payroll preparation so much smoother.",
    name: "Daniel Moore",
    role: "Director of Finance, Northbridge Retail",
    company: "NORTHBRIDGE",
    icon:'/home/image91.png',
  },
  {
    quote:
      "Our frontline teams love how easy it is to log time, and managers love the clear, real-time insights.",
    name: "Melissa Tan",
    role: "HR Director, Meridian Health",
    company: "MERIDIAN+",
    icon:'/home/image 92.png',
  },
];

const stats = [
  { icon: Users, title: "Used by teams", subtitle: "across 50+ countries" },
  { icon: Star, title: "4.8/5 CSAT", subtitle: "from 1,000+ customers" },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    subtitle: "you can count on",
  },
  {
    icon: Building2,
    title: "Built for HR, Operations",
    subtitle: "and Finance teams",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-emerald-500 dark:text-emerald-400">
            Trusted by Teams Worldwide
          </span>
          <h2 className="max-w-3xl text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Trusted by Global Teams. Chosen by the People Who Run Them.
          </h2>
          <p className="max-w-2xl text-lg leading-7 text-zinc-700 dark:text-gray-300">
            HR, operations, and finance teams use ZoikoTime to simplify time
            tracking, approvals, and workforce coordination, so they can focus
            on what matters most.
          </p>
        </div>

        <Image
          className="h-52 w-full rounded-[40px] object-cover shadow-lg sm:h-72 lg:h-80"
          width={1216}
          height={320}
          src='/home/image 89.png'
          alt="Team collaborating in office"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <Image
                className="size-20 rounded-full border-2 border-emerald-800/20 object-cover"
                width={80}
                height={80}
                src={t.icon}
                alt={t.name}
              />
              <p className="text-sm text-zinc-700 dark:text-gray-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-base font-bold text-slate-950 dark:text-white">
                  {t.name}
                </p>
                <p className="pb-2 text-xs text-zinc-700 dark:text-gray-400">
                  {t.role}
                </p>
                <p className="text-lg font-bold tracking-widest text-slate-950 dark:text-white">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 rounded-[20px] border border-emerald-400/25 bg-[#F7FFFB] px-6 py-8 dark:border-emerald-500/20 dark:bg-gray-800 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="size-7 shrink-0 text-emerald-500 dark:text-emerald-400" />
              <div>
                <p className="text-base font-bold text-slate-950 dark:text-white">
                  {title}
                </p>
                <p className="text-xs text-zinc-700 dark:text-gray-400">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
