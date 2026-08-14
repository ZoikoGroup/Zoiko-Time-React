"use client";

interface InfoBarProps {
  info: {
    version: string;
    sources: string;
    timezone: string;
    owner: string;
    state: string;
    privacy: string;
  };
}

export default function StageInfoBar({ info }: InfoBarProps) {
  return (
    <section className="bg-slate-900 text-white py-8 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Version
          </span>
          <span className="text-sm font-bold block text-white">
            {info.version}
          </span>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Verified Sources
          </span>
          <span className="text-sm font-bold block text-white">
            {info.sources}
          </span>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Timezone Basis
          </span>
          <span className="text-sm font-bold block text-white">
            {info.timezone}
          </span>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Owner Sign-off
          </span>
          <span className="text-sm font-bold block text-white">
            {info.owner}
          </span>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Lifecycle State
          </span>
          <span className="text-sm font-bold block text-teal-400">
            {info.state}
          </span>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Privacy Bound
          </span>
          <span className="text-sm font-bold block text-white">
            {info.privacy}
          </span>
        </div>
      </div>
    </section>
  );
}
