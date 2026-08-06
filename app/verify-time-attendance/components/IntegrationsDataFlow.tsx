const connectors = [
  {
    category: "Identity / SSO",
    title: "Identity & provisioning",
    description:
      "Inbound identity and role lifecycle; outbound audit events where supported.",
    tags: ["Inbound + outbound", "Role mapping"],
  },
  {
    category: "HRIS",
    title: "Worker master",
    description:
      "Inbound worker, employment, organization, and approved policy context.",
    tags: ["Inbound", "Field ownership"],
  },
  {
    category: "Scheduling",
    title: "Shift & schedule context",
    description:
      "Inbound approved schedule/shift context; optional outbound status.",
    tags: ["Inbound", "Sync status"],
  },
  {
    category: "Payroll",
    title: "Approved records export",
    description:
      "Outbound approved records and statuses; optional inbound acknowledgment.",
    tags: ["Outbound", "Idempotent retries"],
  },
  {
    category: "Project / ERP",
    title: "Cost & billing context",
    description:
      "Inbound project/cost dimensions; outbound approved allocations.",
    tags: ["Bidirectional", "Closed-project handling"],
  },
  {
    category: "BI / Audit",
    title: "Controlled data export",
    description:
      "Outbound approved aggregate or record data under controlled access.",
    tags: ["Outbound", "Audit logs"],
  },
];

export default function IntegrationsDataFlow() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Integrations &amp; Data Flow
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Direction and ownership, not a logo wall
          </h2>

          <p className="max-w-[720px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Every connector card states direction, supported objects, status,
            owner, and known limitations.
          </p>

        </div>

        {/* Connector Cards */}
        <div className="mx-auto mt-12 grid w-full max-w-[1180px] grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">

          {connectors.map((connector) => (
            <div
              key={connector.title}
              className="flex flex-col rounded-2xl border border-[#E4E9EE] bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >

              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-[#10A28D]">
                {connector.category}
              </p>

              <h3 className="mt-2 text-base font-semibold leading-6 text-[#0E1F3D] dark:text-white">
                {connector.title}
              </h3>

              <p className="mt-2 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                {connector.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2.5 pt-4">
                {connector.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[20px] border border-[#E4E9EE] bg-[#F6F9F9] px-[11px] py-[5px] text-xs font-normal leading-4 text-[#6B7785] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* Terminology Note */}
        <p className="mx-auto mt-9 max-w-[840px] text-center text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
          &quot;Connects with&quot; is used only for production-supported
          connectors; &quot;Export options&quot; covers documented generic
          file/API methods.
        </p>

      </div>
    </section>
  );
}
