import React from 'react';

export default function GlobalAccessAndInclusionSection() {
  const cards = [
    {
      title: "Accessibility as a requirement",
      description: "WCAG 2.2 AA is release-blocking: keyboard, screen reader, voice control, high contrast, zoom, and reduced motion are all tested, not assumed."
    },
    {
      title: "Language & time zones",
      description: "Locale-aware dates, times, numbers, and language, with daylight-saving and effective record time shown clearly."
    },
    {
      title: "Connectivity",
      description: "Online, offline, pending, synchronized, and failed states are always visible — never a silent loss of your record."
    },
    {
      title: "Device support",
      description: "A maintained platform and version matrix — unsupported devices are stated plainly, never hidden."
    },
    {
      title: "Alternative routes",
      description: "Approved help or alternative capture routes when access fails — no worker is silently penalized for a system issue."
    },
    {
      title: "First use & updates",
      description: "Access and installation instructions come only from the governed registry — no invented store, badge, or requirement."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Category Badge */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Global Access &amp; Inclusion
        </span>

        {/* Header Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-12">
          A worker experience designed for real-world conditions
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-start"
            >
              {/* Dot & Title Header */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-sm bg-teal-600 dark:bg-teal-400 flex-shrink-0" />
                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  {card.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pl-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}