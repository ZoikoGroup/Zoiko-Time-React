const capabilities = [
  "Single sign-on",
  "Multi-factor & step-up",
  "Automated provisioning",
  "Role-based access",
  "Access reviews",
  "Full audit trail",
];

export default function StandardsStrip() {
  return (
    <section className="w-full overflow-hidden bg-[#Ffffff] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-14 sm:px-8 lg:px-12">

        {/* Capability Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#E4E9EE] bg-white px-4 py-2.5 shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#10A28D]"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold leading-5 text-[#0E1F3D] dark:text-white">
                {capability}
              </span>
            </span>
          ))}
        </div>

        {/* Standards Note */}
        <p className="mx-auto mt-5 max-w-[820px] text-center text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
          Standards-based by design. Specific protocols, provider integrations,
          and options vary by plan and environment — see the compatibility
          register.
        </p>

      </div>
    </section>
  );
}
