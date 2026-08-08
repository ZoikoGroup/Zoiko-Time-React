import Image from "next/image";

const permitted = [
  "Request counts, error classes, response time",
  "Job outcome, queue age, event lag",
  "Data-integrity check results",
  "Component, environment, region, provider, release version",
  "Synthetic-probe results and safe correlation identifiers",
];

const neverCollected = [
  "Content capture or invasive device monitoring",
  "Worker productivity, diligence, or intent scoring",
  "Behavioral ranking or employment-risk inference",
  "Any claim of anonymity where re-identification remains possible in an authorized context",
];

export default function ReliabilityTelemetry() {
  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Privacy-preserving observability
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Reliability Telemetry Describes the Service, Not the Worker
          </h2>

          <p className="mt-6 max-w-[760px] text-base font-bold leading-7 text-white sm:text-lg">
            No screenshots, keystroke content, URL history, application-name
            monitoring, or clipboard collection under any tier or configuration.
          </p>

        </div>

        {/* Signal Panels */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Permitted */}
          <div className="flex flex-col rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">

            <div className="flex items-center gap-2.5">

              <Image
                src="/platform-reliability/tick-mark.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0"
              />

              <h3 className="text-base font-bold leading-6 text-white">
                Permitted reliability signals
              </h3>

            </div>

            <ul className="mt-5 flex flex-col gap-2.5">
              {permitted.map((item) => (
                <li key={item} className="flex gap-2.5">

                  <span className="mt-0.5 shrink-0 text-sm font-bold text-emerald-400" aria-hidden="true">
                    ✓
                  </span>

                  <span className="text-sm font-normal leading-6 text-slate-300">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

          </div>

          {/* Never collected */}
          <div className="flex flex-col rounded-2xl border border-white/[0.12] bg-white/[0.043] p-6">

            <div className="flex items-center gap-2.5">

              <Image
                src="/platform-reliability/cross-mark.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0"
              />

              <h3 className="text-base font-bold leading-6 text-white">
                Never collected or derived
              </h3>

            </div>

            <ul className="mt-5 flex flex-col gap-2.5">
              {neverCollected.map((item) => (
                <li key={item} className="flex gap-2.5">

                  <span className="mt-0.5 shrink-0 text-sm font-bold text-red-400" aria-hidden="true">
                    ✕
                  </span>

                  <span className="text-sm font-normal leading-6 text-slate-300">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

          </div>

        </div>

        <p className="mx-auto mt-8 max-w-[900px] text-center text-xs font-normal leading-5 text-slate-500">
          Worker identity is excluded or minimized unless necessary for a
          specific authorized support, security, or record-integrity
          investigation. Telemetry purpose, access, retention, aggregation,
          sampling, redaction, regional handling, sharing, incident use, and
          audit are all defined.
        </p>

      </div>
    </section>
  );
}
