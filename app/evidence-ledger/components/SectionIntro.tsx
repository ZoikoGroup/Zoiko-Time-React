import { poppins } from "../fonts";

export default function SectionIntro({
  eyebrow,
  title,
  description,
  titleClassName = "max-w-[680px]",
  descriptionClassName = "max-w-[670px]",
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3.5">
        <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

        <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
          {eyebrow}
        </span>
      </div>

      <h2
        className={`${poppins.className} mt-4 text-2xl font-bold leading-9 text-sky-950 dark:text-white sm:text-3xl ${titleClassName}`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 text-base leading-6 text-slate-600 dark:text-slate-400 ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}
