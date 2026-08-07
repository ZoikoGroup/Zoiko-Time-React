const states = [
  { label: "Draft", tone: "bg-white text-slate-800 border-slate-200" },
  {
    label: "Authorization pending",
    tone: "bg-yellow-50 text-yellow-700 border-orange-200",
  },
  {
    label: "Mapping review",
    tone: "bg-yellow-50 text-yellow-700 border-orange-200",
  },
  { label: "Test only", tone: "bg-yellow-50 text-yellow-700 border-orange-200" },
  { label: "Approved", tone: "bg-[#EAF6F3] text-teal-700 border-emerald-100" },
  { label: "Scheduled", tone: "bg-[#EAF6F3] text-teal-700 border-emerald-100" },
  { label: "Active", tone: "bg-[#EAF6F3] text-teal-700 border-emerald-100" },
  { label: "Paused", tone: "bg-yellow-50 text-yellow-700 border-orange-200" },
  { label: "Degraded", tone: "bg-rose-50 text-red-700 border-red-200" },
  { label: "Revoked", tone: "bg-rose-50 text-red-700 border-red-200" },
  { label: "Retired", tone: "bg-white text-slate-800 border-slate-200" },
];

export default function ConnectionStates() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Connection States
          </p>
          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Every connection shows exactly where it stands
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            No ambiguous &lsquo;on/off.&rsquo; State is explicit at every step.
          </p>
        </div>

        <ul className="mx-auto mt-8 flex max-w-[820px] flex-wrap justify-center gap-2.5">
          {states.map(({ label, tone }) => (
            <li
              key={label}
              className={`rounded-[20px] border px-3 py-1.5 text-xs font-semibold leading-5 ${tone}`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
