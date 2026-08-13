import React from 'react';

/** Green square dot + uppercase emerald label used above every section heading. */
export default function SectionEyebrow({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-sm bg-emerald-600 shrink-0" />
      <span className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
        {children}
      </span>
    </div>
  );
}
