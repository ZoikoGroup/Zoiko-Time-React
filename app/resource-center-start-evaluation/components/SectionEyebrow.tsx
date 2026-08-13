import React from 'react';

/**
 * The numbered eyebrow that labels every section. Kept in one place so the
 * dot, tracking, and colour stay identical on light and dark sections.
 */
export default function SectionEyebrow({
  label,
  align = 'center',
  onDark = false,
}: {
  label: string;
  align?: 'center' | 'left';
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >

      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 shrink-0 rounded-sm ${
          onDark ? 'bg-emerald-300' : 'bg-emerald-600'
        }`}
      />

      <span
        className={`text-xs font-bold uppercase leading-5 tracking-widest ${
          onDark ? 'text-emerald-300' : 'text-emerald-700'
        }`}
      >
        {label}
      </span>

    </div>
  );
}
