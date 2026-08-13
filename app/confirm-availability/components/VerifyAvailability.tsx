import Image from "next/image";

const verificationCards = [
  {
    title: "HOW IT'S VERIFIED",
    description:
      "Every result is checked against current, owned registries — not a static list or a guess based on where you're browsing from.",
  },
  {
    title: "WHAT IT COVERS",
    description:
      "Technical, contractual, legal/privacy, documentation, monitoring, support, commercial, and data-location readiness — evaluated separately.",
  },
  {
    title: "WHAT IT ISN'T",
    description:
      "Not a compliance certification, a contract, a price quote, or a launch date — see limitations on every result.",
  },
  {
    title: "WHAT WE COLLECT",
    description:
      "Only the scope needed to check availability — no worker data, credentials, or confidential contract details.",
  },
];

const verificationPoints = [
  "Every check runs against owned, current registries — never a static list or IP-based guess",
  'Eight dimensions are evaluated separately, so nothing gets averaged into a false "yes"',
  "An unverified scope stays unverified — it's never quietly relabeled as unavailable",
  "Every result carries a reviewed date, an owner, and explicit limitations",
];

export default function VerifyAvailability() {
  return (
    <section className="w-full bg-white px-5 py-14 transition-colors duration-300 dark:bg-[#0b1220] sm:px-7 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-8">

        {/* Hero */}
        <div className="w-full max-w-[700px]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600" />

            <span className="text-xs font-bold uppercase leading-5 tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
              Enterprise · Global Deployment
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-10 text-slate-900 dark:text-white sm:text-4xl">
            Deploy ZoikoTime with a clear,
            <br className="hidden sm:block" />
            verifiable view of current availability
          </h1>

          <p className="mt-4 max-w-[770px] text-base leading-7 text-gray-500 dark:text-gray-300">
            Availability is verified against current authority registries —
            technical readiness, contractual fit, legal and privacy review
            status, documentation, operations, support, and commercial terms
            — not inferred from your location or interest.
          </p>
        </div>

        {/* Verification cards */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {verificationCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[10px] border border-green-100 bg-green-50 p-4 transition-colors duration-300 dark:border-emerald-900/60 dark:bg-emerald-950/30"
            >
              <h2 className="text-xs font-bold leading-5 tracking-wide text-emerald-700 dark:text-emerald-400">
                {card.title}
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-slate-900 dark:text-gray-200">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why verify */}
        <div className="grid items-center gap-10 pt-6 lg:grid-cols-2 lg:gap-12">

          {/* Left content */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600" />

              <span className="text-xs font-bold uppercase leading-5 tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                Why verify, not assume
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-bold leading-10 text-slate-900 dark:text-white sm:text-3xl">
              A Result Tied to Current Authority,
              <br className="hidden sm:block" />
              Not Your Location
            </h2>

            <div className="mt-5 space-y-4">
              {verificationPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-emerald-700 dark:text-emerald-400">
                    ✓
                  </span>

                  <p className="text-sm leading-5 text-slate-900 dark:text-gray-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-[20px] shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.16)]">
            <Image
              src="/confirm-availability/image.png"
              alt="ZoikoTime availability verification"
              width={484}
              height={340}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}