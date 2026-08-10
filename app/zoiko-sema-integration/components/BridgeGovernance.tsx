import Link from "next/link";
import Image from "next/image";

const privacyModes = [
  {
    title: "Minimized",
    body: "Least context necessary for the stated purpose.",
  },
  {
    title: "Restricted",
    body: "Narrow role visibility with review required.",
  },
  {
    title: "Aggregated",
    body: "Unit-level context only, no individual attribution.",
  },
  {
    title: "Review-gated",
    body: "Nothing reaches a workflow before human approval.",
  },
  {
    title: "Excluded",
    body: "The workspace or category never connects.",
  },
];

const configured = [
  "Which workspaces map, and to which scopes",
  "Which context categories are permitted",
  "Privacy mode per mapping",
  "Policy version, jurisdiction treatment, retention",
  "Notices, review requirements, and audit settings",
];

const excluded = [
  "Confidential and legal spaces",
  "Executive and HR spaces",
  "Security and regulated spaces",
  "Externally attended spaces",
];

export default function BridgeGovernance() {
  return (
    <section
      id="bridge-governance"
      className="w-full scroll-mt-24 overflow-hidden bg-[#060B1F]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Governance, Privacy Modes &amp; Jurisdiction
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            The Bridge Cannot Widen Itself
          </h2>

          <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-white">
            Only authorized administrators select workspaces, mappings, context
            categories, roles, privacy modes, policy scope, jurisdiction treatment,
            and retention. No prompt, request, or integration behavior expands
            that.
          </p>

          <p className="mt-6 max-w-[820px] text-base font-bold leading-6 text-white">
            No screenshots, keystroke content, URL history, application-name
            monitoring, or clipboard collection under any tier or configuration.
          </p>

        </div>

        {/* Privacy Modes */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {privacyModes.map((mode) => (
            <article
              key={mode.title}
              className="flex flex-col rounded-2xl bg-white px-5 pb-6 pt-5"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950">
                {mode.title}
              </h3>

              <p className="mt-2 text-sm font-normal leading-6 text-zinc-500">
                {mode.body}
              </p>

            </article>
          ))}

        </div>

        {/* Configured vs Excluded */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="rounded-2xl border border-white/[0.12] bg-white/[0.043] p-6">

            <h3 className="flex items-center gap-2.5 text-base font-bold leading-6 text-white">

              <Image
                src="/zoiko-sema-integration/tick-mark.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />

              Administrator-configured

            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {configured.map((item) => (
                <li key={item} className="flex gap-2.5">

                  <Image
                    src="/zoiko-sema-integration/tick-mark.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="mt-1.5 shrink-0"
                  />

                  <span className="text-sm font-normal leading-6 text-white">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

          </div>

          <div className="rounded-2xl border border-white/[0.12] bg-white/[0.043] p-6">

            <h3 className="flex items-center gap-2.5 text-base font-bold leading-6 text-white">

              <Image
                src="/zoiko-sema-integration/cross-mark.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />

              Excluded by policy, typically

            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {excluded.map((item) => (
                <li key={item} className="flex gap-2.5">

                  <Image
                    src="/zoiko-sema-integration/cross-mark.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="mt-1.5 shrink-0"
                  />

                  <span className="text-sm font-normal leading-6 text-white">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

          </div>

        </div>

        <p className="mt-6 text-center text-xs font-normal leading-5 text-white">
          Jurisdiction and data-location treatment is qualified, never asserted. See{" "}
          <Link
            href="/data-location-residency"
            className="font-bold text-emerald-400 transition hover:text-emerald-300"
          >
            Data Location &amp; Residency
          </Link>
          .
        </p>

      </div>
    </section>
  );
}
