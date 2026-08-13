import React from 'react';

interface WorkerCard {
  title: string;
  description: React.ReactNode;
  highlighted?: boolean;
}

const cards: WorkerCard[] = [
  {
    title: 'Own changes',
    description:
      'Chronological own-record events, version summary, current state, and material changes — own records and permitted organizational context only.',
  },
  {
    title: 'Track a correction',
    description: (
      <>
        Submitted → assigned → information requested → under review → decision → resulting version →
        notice. <span className="font-bold text-white">No guilt labels at any stage.</span>
      </>
    ),
  },
  {
    title: 'See the decision',
    description:
      'Authorized role, decision, reason, conditions, effective version, and next action. Confidential reviewer notes stay protected.',
  },
  {
    title: 'Rights preserved',
    description:
      'Using the correction flow waives no privacy, grievance, appeal, legal, or contractual right. Help routes involve no lead capture or sales routing.',
    highlighted: true,
  },
];

export default function WorkerFacingHistory() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Worker-facing review history
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            The worker in the record sees their own chronology — with no guilt labels and no pressure
            to admit fault.
          </p>
        </div>

        {/* Worker Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`p-6 rounded-2xl border shadow-sm flex flex-col gap-2 transition-colors ${
                card.highlighted
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <h3 className="text-base font-bold text-white">{card.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
