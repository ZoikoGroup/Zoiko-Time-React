export default function SecurityPositioning() {
  return (
    <section className="bg-slate-100 py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:px-10 lg:flex-row lg:px-16">
        {/* Left Content */}
        <div className="w-full max-w-xl text-center lg:text-left">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Security Positioning
          </p>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Security as a Core System
            <br />
            Layer
          </h2>

          <p className="mt-8 text-base leading-7 text-slate-500 dark:text-slate-300">
            ZoikoTime embeds security across identity, data,
            infrastructure, and operations. Controls are enforced
            through policy, validated continuously, and supported by
            audit-ready evidence — not implemented as a feature set
            bolted onto a workforce product.
          </p>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-lg rounded-2xl border-2 border-teal-600/20 bg-white p-8 shadow-[0_4px_24px_rgba(0,157,140,0.10)] dark:border-teal-500/20 dark:bg-slate-800">
          <h3 className="text-xl font-extrabold leading-8 text-teal-600 dark:text-teal-400">
            Security controls are enforced,
            <br />
            validated, and monitored —
            <br />
            not assumed.
          </h3>

          <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-slate-300">
            This means every security control has three properties:
            it is actively enforced at the system level; it is
            continuously tested to confirm it is functioning as
            designed; and it is monitored in real time to detect any
            deviation from expected performance. These are verifiable
            claims — not policy commitments.
          </p>
        </div>
      </div>
    </section>
  );
}