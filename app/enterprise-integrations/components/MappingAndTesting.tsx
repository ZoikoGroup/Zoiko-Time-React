import Image from "next/image";

const blocks = [
  {
    image: "/enterprise-integrations/Versioned.png?v=2",
    alt: "A versioned field mapping under review",
    title: "Versioned mapping",
    body: "Every source-field-to-target mapping is versioned and approved. Transformations, defaults, precedence, and the approving actor are recorded — no silent redefinition of what a value means.",
    points: [
      "Source, target, transformation, and default are explicit",
      "Conflict & precedence rules are applied deterministically",
      "Compatibility checks run before a version is published",
    ],
    reverse: false,
  },
  {
    image: "/enterprise-integrations/Controlled-test.png?v=2",
    alt: "A team reviewing a controlled test run before activation",
    title: "Controlled test runs & activation",
    body: "A mapping version proves itself against non-production targets before anything goes live. Activation is a deliberate, approved act — never a toggle someone flips by accident.",
    points: [
      "Test runs execute against non-production targets only",
      "Results are retained and reviewed against expected output",
      "An authorized approver activates — with the record kept",
    ],
    reverse: true,
  },
];

export default function MappingAndTesting() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            How Connections Work
          </p>
          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Deterministic mapping, tested before it ever goes live
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Mapping is explainable and versioned; activation is earned through
            passing tests and human approval.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-14">
          {blocks.map(({ image, alt, title, body, points, reverse }) => (
            <div
              key={title}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              <Image
                src={image}
                alt={alt}
                width={549}
                height={318}
                className={`h-auto w-full rounded-2xl object-cover shadow-[0px_20px_40px_-24px_rgba(10,22,40,0.35)] ${
                  reverse ? "lg:order-2" : ""
                }`}
              />

              <div className={reverse ? "lg:order-1" : ""}>
                <h3 className="text-xl font-bold leading-8 text-slate-800 dark:text-white sm:text-2xl">
                  {title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                  {body}
                </p>

                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Image
                        src="/enterprise-integrations/tick-mark.svg"
                        alt=""
                        aria-hidden="true"
                        width={14}
                        height={14}
                        className="mt-1 h-3.5 w-3.5 shrink-0"
                      />
                      <span className="text-sm font-normal leading-6 text-slate-800 dark:text-slate-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
