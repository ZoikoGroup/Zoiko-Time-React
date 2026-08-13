import React from 'react';

interface Boundary {
  title: string;
  description: React.ReactNode;
  highlighted?: boolean;
}

const boundaries: Boundary[] = [
  {
    title: 'Recorded',
    description:
      'Time events, work or project context you enter, breaks, your comments and correction requests, and disclosed authentication and audit events.',
  },
  {
    title: 'Never collected',
    description:
      'Screenshots, keystroke content, URL history, application names, clipboard data — and no individual productivity score, at any tier or configuration.',
  },
  {
    title: 'Who decides',
    description: (
      <>
        Deterministic rules organize configured context.{' '}
        <span className="font-bold text-white">
          Authorized people decide consequential outcomes.
        </span>{' '}
        There is no AI verdict and no system judgment.
      </>
    ),
  },
  {
    title: 'Getting help',
    description:
      'Help Center, Privacy, and Accessibility routes — plus an accessible alternative if the standard flow is a barrier. Never a sales route.',
    highlighted: true,
  },
];

export default function RecordedAndWhoDecides() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            What is recorded, and who decides
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            A worker-facing record is only trustworthy if the collection boundary and the decision
            boundary are both legible from inside it.
          </p>
        </div>

        {/* Boundary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {boundaries.map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl border shadow-sm flex flex-col gap-2 transition-colors ${
                item.highlighted
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
