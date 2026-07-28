
const benefits = [
  {
    icon: '/home/Icon.png',
    title: "Reduces payroll leakage",
    description: "Eliminate ghost time and unverified hours.",
  },
  {
    icon: '/home/Icon (1).png',
    title: "Creates audit-ready records",
    description: "Deterministic evidence for payroll and compliance.",
  },
  {
    icon: '/home/Icon (2).png',
    title: "Improves policy consistency",
    description: "Consistent time rules across teams and regions.",
  },
  {
    icon: '/home/Icon (3).png',
    title: "Privacy by design",
    description: "No screenshots. No keystrokes. No surveillance.",
  },
];

export default function BenefitsBar() {
  return (
    <section className="border-y border-gray-200/60 bg-white px-4 py-10 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon, title, description }) => (
          <div key={title} className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-300/20">
              <img className="w-5 h-5 " src={icon} />
            </span>
            <div>
              <p className="text-base font-bold leading-6 text-slate-950 dark:text-white">
                {title}
              </p>
              <p className="text-sm leading-5 text-zinc-700 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
