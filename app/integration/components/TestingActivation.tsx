import Image from "next/image";

const tests = [
  "Authorized mapping · unauthorized workspace",
  "Excluded or sensitive space · permitted category · prohibited category",
  "Missing permission · guest or external participant",
  "Policy mismatch · retention conflict · duplicate or overlap",
  "Unavailable destination · retry and reconciliation",
  "Pause and rollback · accessibility · notice visibility",
];

export default function TestingActivation() {
  return (
    <section className="bg-color-grey-98 py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:items-start lg:px-7">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-xs font-bold uppercase tracking-widest text-color-spring-green-44">
            Testing, Acceptance &amp; Safe Activation
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-color-azure-6 lg:text-5xl">
            Fifteen Test Families —
            <br />
            Including the Ones That
            <br />
            Should Fail
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-color-grey-35">
            A test suite that only proves the happy path proves nothing. Denial
            and exclusion cases are release-blocking.
          </p>

          <ul className="mt-8 space-y-4">
            {tests.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-[6px] w-[6px] flex-shrink-0 rounded-sm bg-green-400" />
                <span className="text-sm leading-6 text-color-grey-35">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[10px] border border-color-grey-90 bg-color-grey-96-4 px-4 py-5">
            <p className="text-xs font-bold uppercase tracking-wider text-color-red-39">
              Production Protection
            </p>

            <p className="mt-2 text-xs leading-5 text-color-red-39">
              Synthetic or approved test data only. No real worker
              communication content appears in public demonstrations or generic
              test environments.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <Image
            src="/integration/testing-activation.png"
            alt="Testing and safe activation"
            width={534}
            height={595}
            className="h-auto w-full max-w-[534px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}