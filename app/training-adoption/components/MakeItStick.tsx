const reinforcements = [
  {
    title: "In-context help",
    body: "Just-in-time tips and answers inside the screens people already use.",
  },
  {
    title: "Refreshers & nudges",
    body: "Timely reminders for skills that fade between busy periods.",
  },
  {
    title: "New feature enablement",
    body: "Short updates whenever capabilities or policies change.",
  },
  {
    title: "Champions & office hours",
    body: "Internal champions and open sessions keep momentum after launch.",
  },
  {
    title: "Adoption analytics",
    body: "Completion and usage trends show where support is still needed.",
  },
  {
    title: "Feedback loops",
    body: "Learner feedback shapes the next iteration of every program.",
  },
];

export default function MakeItStick() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Reinforcement &amp; Support
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Make it stick after go-live
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Adoption is a habit, not an event. Keep momentum with reinforcement
            built into the flow of work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reinforcements.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
