import React from 'react';

interface QuickLink {
  label: string;
  href: string;
}

const taskRoutes: QuickLink[] = [
 // { label: 'Open Kairos', href: '#' },
  { label: 'Documentation', href: '/product-documentation' },
  { label: 'Service Status', href: '/system-status' },
  { label: 'Product Updates', href: '/product-updates' },
  { label: 'Help Center', href: '/help-center' },
  { label: 'Contact Support', href: '/contact' },
];

export default function TaskFirstRoutes() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1124px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        
        {/* Left Column: Heading & Description */}
        <div className="flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Already using ZoikoTime?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Task-first routes, no marketing form
          </h2>
          <p className="max-w-[640px] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Documentation, status, and support stay separate from sales. None of them requires a demo submission or marketing consent.
          </p>
        </div>

        {/* Right Column: Quick Navigation Links Card */}
        <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
            {taskRoutes.map((route, idx) => (
              <li key={idx}>
                <a
                  href={route.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group transition-colors"
                >
                  <span>{route.label}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}