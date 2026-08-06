import React from 'react';

export default function CaptureAcrossDevicesSection() {
  const cards = [
    {
      title: "Desktop app",
      description: "Full review and correction, project context, and history on your desktop or web experience.",
      linkText: "Check platform requirements →",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Mobile app",
      description: "Records, corrections, and notifications for shift, field, and mobile work — one-handed reach.",
      linkText: "Check platform requirements →",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Web experience",
      description: "Browser access where production-supported, with the same review and correction workflow.",
      linkText: "Check platform requirements →",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  const connectivityNotes = [
    {
      title: "Connectivity states you can see",
      description: "Online, offline pending, syncing, synced, and failed — never a false \"submitted\" state, and no silent data loss."
    },
    {
      title: "No exact offline promise",
      description: "Offline capability is confirmed per supported platform. Where it isn't approved, the app tells you a connection is required."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Category Tag */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Capture Across Devices
        </span>

        {/* Header Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-4">
          Start, pause, resume, and switch work with clear feedback
        </h2>

        {/* Header Subtitle */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center max-w-2xl leading-relaxed mb-12">
          Start; stop; pause; resume; break; switch project; add a note; review today; open support — on the supported surfaces your organization has enabled.
        </p>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Platform Icon */}
                <div className="w-11 h-11 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl flex items-center justify-center mb-5">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Requirement Link */}
              <a 
                href="#" 
                className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline inline-flex items-center"
              >
                {card.linkText}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Connectivity Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {connectivityNotes.map((note, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-teal-600 dark:bg-teal-400 flex-shrink-0" />
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                  {note.title}
                </h4>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pl-4">
                {note.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}