"use client";

const policyControls = [
  {
    title: "Access Lifecycle",
    description: (
      <>
        Invitation → scope → provisioning → assignment
        <br className="hidden sm:block" />
        dates → expiry → closure. Least-privilege
        <br className="hidden sm:block" />
        throughout.
      </>
    ),
  },
  {
    title: "Integrations",
    description: (
      <>
        Directional flow with roster, project, and finance
        <br className="hidden sm:block" />
        systems — approved outputs, reconciled returns.
      </>
    ),
  },
  {
    title: "Closure",
    description: (
      <>
        Removes access, revokes sessions, preserves
        <br className="hidden sm:block" />
        evidence per policy — never silently deletes.
      </>
    ),
  },
];

export default function GlobalProjectPolicyControls() {
  return (
    <section
      className="
        w-full
        bg-white
        py-20
        sm:py-24
        lg:py-[80px]
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-6
          sm:px-8
          lg:px-0
        "
      >
        {/* =====================================================
            EYEBROW
        ===================================================== */}
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-4 shrink-0 bg-emerald-600" />

          <span
            className="
              text-xs
              font-bold
              uppercase
              leading-5
              tracking-widest
              text-emerald-700
              dark:text-emerald-400
            "
          >
            Global Project Policy Controls
          </span>
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}
        <h2
          className="
            mt-3
            max-w-[816px]
            text-3xl
            font-bold
            leading-10
            text-slate-900
            sm:text-4xl
            dark:text-white
          "
        >
          One effective-dated policy matrix
        </h2>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}
        <p
          className="
            mt-5
            max-w-[640px]
            text-base
            font-normal
            leading-6
            text-slate-500
            dark:text-slate-400
          "
        >
          Legal entity, project contract, worker profile, calendar and
          retention — versioned, owned, and approved with full change history.
        </p>

        {/* =====================================================
            POLICY CARDS
        ===================================================== */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-3
            lg:gap-5
          "
        >
          {policyControls.map((item) => (
            <div
              key={item.title}
              className="
                min-h-[144px]
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-[25px]
                py-6

                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Card title */}
              <h3
                className="
                  text-base
                  font-bold
                  leading-6
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              {/* Card description */}
              <p
                className="
                  mt-2
                  text-xs
                  font-normal
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}