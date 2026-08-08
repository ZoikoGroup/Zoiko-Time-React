import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Map",
    body: "Fields, scopes & systems of record",
  },
  {
    number: "2",
    title: "Test",
    body: "Validate in a safe sandbox",
  },
  {
    number: "3",
    title: "Activate",
    body: "Governed, with rollback",
  },
  {
    number: "4",
    title: "Reconcile",
    body: "Acknowledge & verify",
  },
];

export default function HowItConnects() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">

          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            How it connects
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Four governed steps for any connection
          </h2>

          <p className="mt-4 text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            The same lifecycle behind every integration in this directory.
          </p>

        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 grid max-w-[960px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <article
              key={step.number}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center dark:border-slate-800 dark:bg-slate-900"
            >

              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-600 text-xs font-semibold text-white">
                {step.number}
              </span>

              <h3 className="mt-4 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {step.body}
              </p>

            </article>
          ))}

        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/enterprise-integrations"
            className="text-xs font-semibold leading-5 text-teal-600 transition hover:text-teal-700 dark:text-teal-400"
          >
            See Enterprise Integrations →
          </Link>
        </div>

      </div>
    </section>
  );
}
