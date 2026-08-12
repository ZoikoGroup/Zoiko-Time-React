"use client";

const projects = [
  {
    name: "Atlas Retrofit — Phase 2",
    owner: "R. Okafor",
    due: "Aug 12",
    status: "Approved",
    statusColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
  },
  {
    name: "Meridian Rollout — QA sprint",
    owner: "S. Patel",
    due: "Aug 13",
    status: "Pending Review",
    statusColor: "text-orange-400",
    dotColor: "bg-orange-400",
  },
  {
    name: "Harbor Migration — Discovery",
    owner: "L. Fenn",
    due: "Aug 14",
    status: "Context Requested",
    statusColor: "text-slate-400",
    dotColor: "bg-slate-400",
  },
  {
    name: "Vector Onboarding",
    owner: "J. Ibarra",
    due: "Aug 15",
    status: "Exported",
    statusColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
  },
];

const stats = [
  {
    value: "128",
    label: "Records this cycle",
  },
  {
    value: "9",
    label: "Pending review",
  },
  {
    value: "3",
    label: "Access expiring",
  },
];

export default function ProjectDeliveryWorkspace() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-6
          py-16
          sm:px-8
          lg:px-0
          lg:py-[81px]
        "
      >
        {/* =====================================================
            EYEBROW
        ===================================================== */}
        <div className="mb-3 flex items-center gap-2">
          <div className="h-0.5 w-4 bg-emerald-600" />

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
            Main Product Proof
          </span>
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}
        <h2
          className="
            max-w-[600px]
            text-3xl
            font-bold
            leading-tight
            text-slate-900
            sm:text-4xl
            sm:leading-10
            dark:text-white
          "
        >
          The Project Delivery Workspace.
        </h2>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}
        <p
          className="
            mt-5
            max-w-[635px]
            text-base
            font-normal
            leading-6
            text-slate-500
            dark:text-slate-400
          "
        >
          Roster, assignment context, record states and governance —
          aggregate counts first, rows second. Every item shows owner,
          cutoff, reason and next action.
        </p>

        {/* =====================================================
            DASHBOARD
        ===================================================== */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-[20px]
            bg-slate-900
            lg:mt-[60px]
          "
        >
          <div className="flex flex-col lg:flex-row">
            {/* =================================================
                SIDEBAR
            ================================================= */}
            <aside
              className="
                w-full
                shrink-0
                bg-sky-950
                p-5

                lg:w-[224px]
                lg:min-h-[384px]
                lg:p-[24px_18px]
              "
            >
              {/* Active item */}
              <div
                className="
                  flex
                  h-10
                  items-center
                  rounded-lg
                  bg-white/10
                  px-3
                "
              >
                <span
                  className="
                    text-xs
                    font-semibold
                    leading-5
                    text-white
                  "
                >
                  Delivery Queue
                </span>
              </div>

              {/* Navigation */}
              <nav
                className="
                  mt-5
                  flex
                  gap-5
                  overflow-x-auto
                  lg:mt-4
                  lg:block
                  lg:space-y-6
                "
              >
                <span
                  className="
                    block
                    shrink-0
                    text-xs
                    font-normal
                    leading-5
                    text-white/60
                  "
                >
                  Roster
                </span>

                <span
                  className="
                    block
                    shrink-0
                    text-xs
                    font-normal
                    leading-5
                    text-white/60
                  "
                >
                  Approvals
                </span>

                <span
                  className="
                    block
                    shrink-0
                    text-xs
                    font-normal
                    leading-5
                    text-white/60
                  "
                >
                  Exceptions
                </span>

                <span
                  className="
                    block
                    shrink-0
                    text-xs
                    font-normal
                    leading-5
                    text-white/60
                  "
                >
                  Access
                </span>
              </nav>
            </aside>

            {/* =================================================
                MAIN DASHBOARD
            ================================================= */}
            <div
              className="
                min-w-0
                flex-1
                px-5
                py-6
                sm:px-6
                lg:px-0
                lg:py-[26px]
              "
            >
              {/* =============================================
                  SUMMARY STATS
              ============================================= */}
              <div
                className="
                  grid
                  grid-cols-3
                  gap-4
                  border-b
                  border-white/10
                  pb-6
                  lg:mr-6
                "
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="
                        text-xl
                        font-bold
                        leading-9
                        text-white
                        sm:text-2xl
                      "
                    >
                      {stat.value}
                    </div>

                    <div
                      className="
                        mt-0.5
                        text-[11px]
                        font-normal
                        leading-4
                        text-white/50
                        sm:text-xs
                      "
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* =============================================
                  DESKTOP TABLE HEADER
              ============================================= */}
              <div
                className="
                  mt-7
                  hidden
                  grid-cols-[minmax(0,1fr)_100px_80px_160px]
                  items-center
                  gap-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white/40
                  lg:grid
                "
              >
                <span>Item</span>
                <span>Owner</span>
                <span>Due</span>
                <span>Status</span>
              </div>

              {/* =============================================
                  PROJECT ROWS
              ============================================= */}
              <div className="mt-2">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="
                      border-t
                      border-white/10
                      py-4

                      lg:grid
                      lg:grid-cols-[minmax(0,1fr)_100px_80px_160px]
                      lg:items-center
                      lg:gap-4
                      lg:py-3
                    "
                  >
                    {/* Item */}
                    <div
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-white/90
                      "
                    >
                      {project.name}
                    </div>

                    {/* Mobile metadata */}
                    <div
                      className="
                        mt-2
                        flex
                        flex-wrap
                        gap-x-5
                        gap-y-1
                        text-xs
                        text-white/60
                        lg:hidden
                      "
                    >
                      <span>{project.owner}</span>
                      <span>{project.due}</span>
                    </div>

                    {/* Desktop owner */}
                    <div
                      className="
                        hidden
                        text-xs
                        font-normal
                        leading-5
                        text-white/60
                        lg:block
                      "
                    >
                      {project.owner}
                    </div>

                    {/* Desktop due */}
                    <div
                      className="
                        hidden
                        text-xs
                        font-normal
                        leading-5
                        text-white/60
                        lg:block
                      "
                    >
                      {project.due}
                    </div>

                    {/* Status */}
                    <div className="mt-2 lg:mt-0">
                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-xs
                          font-semibold
                          leading-5
                        "
                      >
                        <span
                          className={`
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-[3px]
                            ${project.dotColor}
                          `}
                        />

                        <span className={project.statusColor}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}