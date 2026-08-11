export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

        <span className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-700 dark:text-teal-400">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-4 max-w-[520px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
