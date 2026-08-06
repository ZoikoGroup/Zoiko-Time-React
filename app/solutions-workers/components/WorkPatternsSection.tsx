import React from 'react';
import Image from 'next/image';

export default function WorkPatternsSection() {
  const patterns = [
    {
      badge: "Remote",
      title: "Remote worker",
      description: "Consistent records across locations, devices, and time zones — without screen or app monitoring assumptions.",
      feature: "No screen or URL monitoring, ever",
      image: "/solution-workers/A remote worker taking.png"
    },
    {
      badge: "Hybrid",
      title: "Hybrid team member",
      description: "Simple project attribution across office and home days, with clear timezone and location-policy context.",
      feature: "Location context only if enabled and disclosed",
      image: "/solution-workers/A hybrid team.png"
    },
    {
      badge: "Field / mobile",
      title: "Field & mobile worker",
      description: "Reliable mobile capture, low-bandwidth behavior, and clear offline states — no unexplained blank screens.",
      feature: "Pending/synced/failed states, always visible",
      image: "/solution-workers/A field worker.png"
    },
    {
      badge: "Contractor",
      title: "Contractor & project worker",
      description: "Clear assignment and customer/project attribution, with disputes resolved through visible review history.",
      feature: "Assignment scope stays worker-visible",
      image: "/solution-workers/A contractor.png"
    },
    {
      badge: "Project-based",
      title: "Project-based worker",
      description: "Task and customer context stays attached to the record, so time is traceable back to the right work.",
      feature: "Version history preserved end to end",
      image: "/solution-workers/A project-based.png"
    },
    {
      badge: "Global",
      title: "Global / multi-timezone worker",
      description: "Local timezone and daylight-saving context are shown clearly, so effective record time is never ambiguous.",
      feature: "No universal jurisdiction claims implied",
      image: "/solution-workers/A global team.png"
    }
  ];

  return (
    <section className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Subtitle Tag */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Work Patterns
        </span>

        {/* Heading Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-4">
          Built for the ways people actually work
        </h2>

        {/* Subheading Description */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center max-w-2xl leading-relaxed mb-12">
          ZoikoTime records approved time and work context — it never infers work quality, personal commitment, or productivity from digital activity.
        </p>

        {/* Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {patterns.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge Container */}
                <div className="relative w-full h-44 bg-slate-100 dark:bg-slate-700">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Floating Pill Badge */}
                  <div className="absolute top-3 left-3 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold leading-none">
                    {item.badge}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 pb-3">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Feature Tag */}
              <div className="px-5 pb-5 pt-0 flex items-center gap-2 text-teal-700 dark:text-teal-400 text-xs font-semibold">
                <svg 
                  className="w-4 h-4 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{item.feature}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}