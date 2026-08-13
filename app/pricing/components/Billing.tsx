"use client";

const billingPoints = [
  {
    title: "Annual total shown up front",
    description: (
      <>
        The full annual amount due is displayed
        <br className="hidden sm:block" />
        before you enter any payment details —
        <br className="hidden sm:block" />
        never hidden in a tooltip.
      </>
    ),
  },
  {
    title: "Trial or buy — your choice",
    description: (
      <>
        Start a 14-day trial with no card, or subscribe
        <br className="hidden sm:block" />
        now and skip the trial. Your plan and billing
        <br className="hidden sm:block" />
        cadence carry through.
      </>
    ),
  },
  {
    title: "Seat caps are honest",
    description: (
      <>
        If your seat count exceeds a plan’s cap, we’ll
        <br className="hidden sm:block" />
        point you to the next eligible plan rather than
        <br className="hidden sm:block" />
        silently over-charging.
      </>
    ),
  },
];

export default function Billing() {
  return (
    <section className="w-full bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 sm:py-20 lg:py-[74px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-green-400">
            Billing, Clearly
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            No surprises at checkout
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">

          {billingPoints.map((item) => (
            <div
              key={item.title}
              className="min-h-[112px] rounded-xl border border-slate-200 bg-white px-[19px] py-4 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xs font-bold leading-5 text-slate-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs font-normal leading-5 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}