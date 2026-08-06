import { AlarmClock, AlignLeft, ClipboardClockIcon, Clock, Clock1, Clock2, Clock7Icon, ClockIcon, ClockPlus, Folder, SquareX, TriangleAlert } from 'lucide-react';
import React from 'react';
import { PiClock } from 'react-icons/pi';

interface GapCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const gapCards: GapCard[] = [
  {
    title: 'Incomplete time and attendance',
    description: 'Missing records surface at cut-off, when there is no time left to ask.',
    icon: (
      <PiClock className='text-teal-600 w-4 h-4'/>
    ),
  },
  {
    title: 'Unclear exception ownership',
    description: 'Issues bounce between manager, operations, and payroll with no named owner.',
    icon: (
      <TriangleAlert className='text-teal-600 w-4 h-4'/>
    ),
  },
  {
    title: 'Project or cost-code gaps',
    description: 'Approved time reaches billing without the attribution the project needs.',
    icon: (
      <Folder className='text-teal-600 w-4 h-4'/>
    ),
  },
  {
    title: 'Late approvals',
    description: 'Review backlogs compress the window for payroll and delivery checks.',
    icon: (
      <Clock className='text-teal-600 w-4 h-4'/>
    ),
  },
  {
    title: 'Post-approval changes',
    description: 'Records change after sign-off with no visible reason or reapproval state.',
    icon: (
      <SquareX className='text-teal-600 w-4 h-4'/>
    ),
  },
  {
    title: 'Policy variation across teams',
    description: 'Two managers apply the same rule differently, so outcomes are hard to defend.',
    icon: (
      <AlignLeft className='text-teal-600 w-4 h-4'/>
    ),
  },
];

export default function ManagerCoordinationGap() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-8 lg:gap-12">
        
        {/* Top Split Section: Title/Text & Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side Header & Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              The Manager Coordination Gap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Distributed Work Creates Flexibility—and More Places for Records to Break
            </h2>
            <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed pt-1">
              Team leads and managers often have time, attendance, project, and approval information spread across disconnected systems and people. ZoikoTime creates a shared record and review workflow so incomplete or conflicting information is visible before it reaches payroll, billing, or a customer.
            </p>
            <div className="pt-2">
              <a
                href="#lifecycle"
                className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-sm font-bold hover:underline group"
              >
                <span>See the controlled record lifecycle</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Right Side Visual Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[598px] rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
              <img
                src="/team-lead-managers/div.photo (2).png"
                alt="Manager coordination workflow interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Middle Grid: The 6 Coordination Pain Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gapCards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-slate-100/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 flex flex-col gap-3 transition-shadow hover:shadow-sm"
            >
              <div className="w-9 h-9 shrink-0 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white pt-1">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Solution Summary Banner */}
        <div className="p-4 sm:p-5 bg-slate-100/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 flex items-start sm:items-center gap-3.5">
          <div className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5 sm:mt-0">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-slate-900 dark:text-white text-base font-semibold leading-relaxed">
            ZoikoTime makes these gaps visible using deterministic classification, neutral exception states, and assigned human review — not surveillance.
          </p>
        </div>

      </div>
    </section>
  );
}