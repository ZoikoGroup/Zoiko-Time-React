import type { ReactNode } from "react";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-gray-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:bg-gray-800 dark:text-emerald-400">
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-7 ${
            light ? "text-sky-100/80" : "text-gray-600 dark:text-gray-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
