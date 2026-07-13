export default function TransparencyPrinciple() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div
        className="
          max-w-[696px]
          mx-auto
          pt-12
        "
      >

        {/* Section Title */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          4. Important Transparency Principle
        </h2>


        {/* Divider */}
        <div
          className="
            mt-3
            w-12
            h-[3px]
            rounded-full
            bg-teal-600
          "
        />


        {/* Highlight Box */}
        <div
          className="
            mt-6
            w-full
            bg-emerald-50
            dark:bg-emerald-900/20
            rounded-tr-lg
            rounded-br-lg
            border-l-[3px]
            border-teal-600
            px-5
            py-4
          "
        >
          <p
            className="
              text-sm
              font-semibold
              leading-6
              text-teal-700
              dark:text-teal-400
            "
          >
            ZoikoTime is designed to support accountable workforce operations,
            not covert surveillance. Customer organizations are responsible for
            informing workers before deployment, configuring ZoikoTime in a
            lawful, proportionate, and transparent manner, and ensuring workers
            can understand how their data is used.
          </p>
        </div>


        {/* Description */}
        <p
          className="
            mt-6
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          ZoikoTime is designed to provide configurable controls, worker
          transparency features, audit logs, role-based access restrictions,
          policy settings, and evidence records so that customer organizations
          can demonstrate accountability and workers can access relevant
          information about how their data is used.
        </p>

      </div>
    </section>
  );
}