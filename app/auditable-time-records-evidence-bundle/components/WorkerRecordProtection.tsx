import React from 'react';

interface Control {
  title: string;
  description: string;
  highlighted?: boolean;
}

const controls: Control[] = [
  {
    title: 'Purpose limitation',
    description:
      'A bundle is built for a stated purpose, and items not permitted for that purpose are excluded by rule rather than by discretion.',
  },
  {
    title: 'Role and field authorization',
    description:
      'Authorization is per role and per field, checked server-side. A generator cannot package what they could not view.',
  },
  {
    title: 'Redaction & protected audit',
    description:
      'Sensitive content is masked by category, and every generation, access, and download is itself auditable.',
  },
  {
    title: 'Anti-surveillance boundary',
    description:
      'Nothing that does not exist can be exported. There is no screen, keystroke, URL, application, or clipboard data in any package.',
    highlighted: true,
  },
];

export default function WorkerRecordProtection() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            How worker records are protected in a package
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Export is where a workforce product most easily becomes a dossier tool. Five controls
            exist to stop that.
          </p>
        </div>

        {/* Control Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {controls.map((item) => (
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

        {/* Prohibited Outputs Callout */}
        <div className="w-full max-w-[900px] p-4 sm:p-5 bg-rose-50 rounded-xl border border-rose-200 space-y-1.5">
          <span className="block text-xs font-bold uppercase tracking-wider text-rose-700">
            What a bundle is never
          </span>
          <p className="text-xs sm:text-sm leading-relaxed text-rose-600">
            An unrestricted log dump · a bulk employee dossier · a surveillance export · a
            productivity report · a worker ranking · a misconduct score · an inferred risk profile.
            None of these is a missing feature; each is a prohibited output.
          </p>
        </div>

        {/* Fifth Control — Tier-Independent Guarantee */}
        <p className="max-w-2xl text-center text-sm sm:text-base font-bold text-white leading-relaxed">
          No screenshots, keystroke content, URL history, application-name monitoring, or clipboard
          collection under any tier or configuration.
        </p>

      </div>
    </section>
  );
}
