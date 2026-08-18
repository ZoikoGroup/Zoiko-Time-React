"use client";

import Image from "next/image";

const assuranceItems = [
  {
    image: "/pricing/recorded.png",
    title: "Recorded",
    description: (
      <>
        Time captured
        <br />
        accurately.
      </>
    ),
  },
  {
    image: "/pricing/verified.png",
    title: "Verified",
    description: (
      <>
        Authenticity and
        <br />
        accuracy confirmed.
      </>
    ),
  },
  {
    image: "/pricing/governed.png",
    title: "Governed",
    description: (
      <>
        Policies, approvals and
        <br />
        accountability applied.
      </>
    ),
  },
  {
    image: "/pricing/trusted-record.png",
    title: "Trusted Record",
    description: (
      <>
        Reliable, audit-ready
        <br />
        records you can
        <br />
        depend on.
      </>
    ),
  },
];

export default function PricingHero() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        pt-10
        dark:bg-[#020817]
        lg:pt-12
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1132px]
          px-5
          sm:px-6
          lg:h-[518px]
          lg:px-0
        "
      >
        {/* =====================================================
            PLANS & PRICING
        ====================================================== */}

        <div
          className="
            flex
            items-center
            gap-3

            lg:absolute
            lg:left-0
            lg:top-[2px]
          "
        >
          <span
            className="
              h-3.5
              w-[3px]
              rounded-sm
              bg-teal-600
            "
          />

          <span
            className="
              text-xs
              font-extrabold
              uppercase
              leading-5
              tracking-wider
              text-teal-700
              dark:text-teal-400
            "
          >
            Plans &amp; Pricing
          </span>
        </div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <h1
          className="
            mt-5
            text-[42px]
            font-extrabold
            leading-[44px]
            tracking-[-1.8px]
            text-slate-800

            sm:text-[46px]
            sm:leading-[48px]

            lg:absolute
            lg:left-0
            lg:top-[28px]
            lg:mt-0
            lg:w-[510px]
            lg:text-[48px]
            lg:leading-[49.68px]
            lg:tracking-[-1.8px]

            dark:text-white
          "
        >
          <span className="block lg:whitespace-nowrap">
            Workforce assurance
          </span>

          <span className="block lg:whitespace-nowrap">
            that scales with how
          </span>

          <span
            className="
              block
              text-teal-700
              dark:text-teal-400
              lg:whitespace-nowrap
            "
          >
            you operate.
          </span>
        </h1>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <div
          className="
            mt-6
            w-full
            max-w-[500px]

            text-base
            font-normal
            leading-6
            text-gray-500

            lg:absolute
            lg:left-0
            lg:top-[205px]
            lg:mt-0
            lg:w-[490px]

            dark:text-gray-400
          "
        >
          <p>
            Choose the level of verification, governance and operational
            assurance your organization needs. Start free for{" "}
            <strong
              className="
                font-bold
                text-slate-800
                dark:text-white
              "
            >
              14 days
            </strong>{" "}
            on standard plans with transparent per-user pricing and{" "}
            <strong
              className="
                font-bold
                text-slate-800
                dark:text-white
              "
            >
              no credit card required.
            </strong>
          </p>
        </div>

        {/* =====================================================
            VERIFICATION WITHOUT SURVEILLANCE
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            items-start
            gap-4

            lg:absolute
            lg:left-0
            lg:top-[331px]
            lg:mt-0
          "
        >
          {/* Icon */}

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-3xl
              bg-emerald-50
              dark:bg-teal-950
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L19 6V11.5C19 16.2 16.1 19.5 12 21C7.9 19.5 5 16.2 5 11.5V6L12 3Z"
                stroke="currentColor"
                strokeWidth="2"
                className="text-teal-700 dark:text-teal-400"
              />

              <path
                d="M9 12L11 14L15 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-700 dark:text-teal-400"
              />
            </svg>
          </div>

          <div>
            <h2
              className="
                text-base
                font-bold
                leading-6
                text-slate-800
                dark:text-white
              "
            >
              Verification without surveillance.
            </h2>

            <p
              className="
                mt-1
                max-w-[400px]
                text-xs
                font-normal
                leading-5
                text-gray-500
                dark:text-gray-400
              "
            >
              Trusted workforce records without screenshots, keystroke
              logging or invasive activity monitoring.
            </p>
          </div>
        </div>

        {/* =====================================================
            DASHBOARD
        ====================================================== */}

        <div
          className="
            relative
            mt-10
            w-full

            lg:absolute
            lg:right-0
            lg:top-0
            lg:mt-0
            lg:h-[320px]
            lg:w-[564px]
          "
        >
          <div
            className="
              relative
              w-full

              overflow-hidden
              rounded-2xl

              border
              border-slate-200

              bg-white

              shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)]

              dark:border-slate-800
              dark:bg-[#111827]

              lg:h-[320px]
            "
          >
            {/* =================================================
                SIDEBAR
            ================================================== */}

            <div
              className="
                hidden

                lg:absolute
                lg:left-0
                lg:top-0
                lg:block
                lg:h-full
                lg:w-12

                lg:border-r
                lg:border-slate-200

                lg:bg-gray-50

                dark:lg:border-slate-800
                dark:lg:bg-[#0b1220]
              "
            >
              {/* Z */}

              <div
                className="
                  absolute
                  left-[11.5px]
                  top-[16px]
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-md
                  bg-teal-600
                "
              >
                <span
                  className="
                    text-base
                    font-extrabold
                    leading-6
                    text-white
                  "
                >
                  Z
                </span>
              </div>

              <div className="absolute left-[15.5px] top-[62px]">
                <SidebarIcon type="clock" />
              </div>

              <div className="absolute left-[15.5px] top-[100px]">
                <SidebarIcon type="document" />
              </div>

              <div className="absolute left-[15.5px] top-[138px]">
                <SidebarIcon type="user" />
              </div>

              <div className="absolute left-[15.5px] top-[176px]">
                <SidebarIcon type="chart" />
              </div>

              <div className="absolute left-[15.5px] top-[214px]">
                <SidebarIcon type="shield" />
              </div>
            </div>

            {/* =================================================
                MOBILE / TABLET DASHBOARD HEADER
            ================================================== */}

            <div
              className="
                px-4
                pb-2
                pt-5

                lg:absolute
                lg:left-[69px]
                lg:top-[18px]
                lg:p-0
              "
            >
              <div
                className="
                  text-sm
                  font-bold
                  leading-6
                  text-teal-700
                  dark:text-teal-400
                "
              >
                Workforce Assurance Overview
              </div>
            </div>

            {/* =================================================
                DASHBOARD GRID
            ================================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-3
                p-4
                pt-2

                sm:grid-cols-2

                lg:absolute
                lg:inset-0
                lg:block
                lg:p-0
              "
            >
              {/* =================================================
                  TRUSTED RECORDS
              ================================================== */}

              <div
                className="
                  relative
                  h-[128px]
                  w-full

                  rounded-xl
                  border
                  border-slate-200

                  dark:border-slate-800

                  lg:absolute
                  lg:left-[69px]
                  lg:top-[53px]
                  lg:w-[250px]
                "
              >
                <DashboardTitle
                  title="Trusted Records"
                  subtitle="All records verified"
                />

                <div
                  className="
                    absolute
                    bottom-[12px]
                    left-[14px]
                    h-[40px]
                    w-[calc(100%-28px)]
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[36px]
                      w-full
                      bg-teal-600/10
                    "
                  />

                  <svg
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                    "
                    viewBox="0 0 222 40"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="
                        M0 34
                        C15 33 23 27 38 28
                        C53 29 60 23 73 25
                        C87 27 94 18 108 21
                        C123 24 131 16 144 18
                        C158 21 166 14 181 15
                        C194 16 207 9 222 10
                      "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-teal-600"
                    />
                  </svg>
                </div>
              </div>

              {/* =================================================
                  VERIFICATION STATUS
              ================================================== */}

              <div
                className="
                  relative
                  h-[128px]
                  w-full

                  rounded-xl
                  border
                  border-slate-200

                  dark:border-slate-800

                  lg:absolute
                  lg:left-[313px]
                  lg:top-[53px]
                  lg:w-[250px]
                "
              >
                <DashboardTitle
                  title="Verification Status"
                  subtitle="Authenticity confirmed"
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-[69px]

                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    items-center
                    justify-center

                    rounded-full

                    border-[3px]
                    border-slate-200

                    dark:border-slate-700
                  "
                >
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                  >
                    <path
                      d="M2 9L8 15L20 3"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-600 dark:text-teal-400"
                    />
                  </svg>
                </div>
              </div>

              {/* =================================================
                  GOVERNANCE
              ================================================== */}

              <div
                className="
                  relative
                  h-[128px]
                  w-full

                  rounded-xl
                  border
                  border-slate-200

                  dark:border-slate-800

                  lg:absolute
                  lg:left-[69px]
                  lg:top-[194px]
                  lg:w-[250px]
                "
              >
                <DashboardTitle
                  title="Governance"
                  subtitle="Policies applied"
                />

                <GovernanceRow
                  top="56px"
                  text="Data Minimization"
                />

                <GovernanceRow
                  top="78px"
                  text="Access Controls"
                />

                <GovernanceRow
                  top="100px"
                  text="Retention Policy"
                />
              </div>

              {/* =================================================
                  AUDIT READINESS
              ================================================== */}

              <div
                className="
                  relative
                  h-[128px]
                  w-full

                  rounded-xl
                  border
                  border-slate-200

                  dark:border-slate-800

                  lg:absolute
                  lg:left-[313px]
                  lg:top-[194px]
                  lg:w-[250px]
                "
              >
                <DashboardTitle
                  title="Audit Readiness"
                  subtitle="Records ready"
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-[58px]
                    -translate-x-1/2
                  "
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M7 4H17L22 9V24H7V4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-teal-700 dark:text-teal-400"
                    />

                    <path
                      d="M17 4V9H22"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-teal-700 dark:text-teal-400"
                    />

                    <path
                      d="M11 16L13 18L18 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-700 dark:text-teal-400"
                    />
                  </svg>
                </div>

                <div
                  className="
                    absolute
                    bottom-[14px]
                    left-0
                    w-full

                    text-center
                    text-xs
                    font-bold
                    leading-4

                    text-teal-700
                    dark:text-teal-400
                  "
                >
                  Complete
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ASSURANCE FLOW LINE
        ====================================================== */}

        <div
          className="
            absolute
            left-[624px]
            top-[401px]

            hidden
            h-0.5
            w-96

            bg-emerald-100

            lg:block

            dark:bg-teal-950
          "
        />

        {/* =====================================================
            ASSURANCE ITEMS
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-x-4
            gap-y-10

            sm:grid-cols-4

            lg:absolute
            lg:left-0
            lg:top-[370px]
            lg:mt-0
            lg:h-[148px]
            lg:w-full
          "
        >
          {assuranceItems.map((item, index) => {
            const positions = [
              "lg:left-[572px]",
              "lg:left-[715px]",
              "lg:left-[858px]",
              "lg:left-[1002px]",
            ];

            return (
              <div
                key={item.title}
                className={`
                  relative
                  z-10

                  flex
                  flex-col
                  items-center
                  text-center

                  lg:absolute
                  lg:top-0
                  ${positions[index]}
                `}
              >
                {/* Circle */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0

                    items-center
                    justify-center

                    rounded-[31px]

                    border-2
                    border-emerald-100

                    bg-white

                    dark:border-teal-900
                    dark:bg-[#020817]
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                {/* Title */}

                <div
                  className="
                    mt-3

                    whitespace-nowrap

                    text-sm
                    font-bold
                    leading-6

                    text-slate-800

                    dark:text-white
                  "
                >
                  {item.title}
                </div>

                {/* Description */}

                <div
                  className="
                    mt-1

                    text-center

                    text-xs
                    font-normal
                    leading-4

                    text-gray-500

                    dark:text-gray-400
                  "
                >
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DASHBOARD TITLE
============================================================ */

function DashboardTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <div
        className="
          absolute
          left-[14px]
          top-[14px]

          text-xs
          font-bold
          leading-5

          text-slate-800

          dark:text-white
        "
      >
        {title}
      </div>

      <div
        className="
          absolute
          left-[14px]
          top-[33px]

          text-[9.5px]
          font-normal
          leading-4

          text-gray-500

          dark:text-gray-400
        "
      >
        {subtitle}
      </div>
    </>
  );
}

/* ============================================================
   GOVERNANCE ROW
============================================================ */

function GovernanceRow({
  text,
  top,
}: {
  text: string;
  top: string;
}) {
  return (
    <div
      className="
        absolute
        left-[14px]
        right-[14px]

        flex
        items-center
        justify-between
      "
      style={{ top }}
    >
      <span
        className="
          text-[10px]
          font-normal
          leading-4

          text-slate-800

          dark:text-gray-300
        "
      >
        {text}
      </span>

      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M2.5 6L5 8.5L9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-teal-700 dark:text-teal-400"
        />
      </svg>
    </div>
  );
}

/* ============================================================
   SIDEBAR ICON
============================================================ */

function SidebarIcon({
  type,
}: {
  type: "clock" | "document" | "user" | "chart" | "shield";
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-gray-400 dark:text-gray-600"
    >
      {type === "clock" && (
        <>
          <circle
            cx="8"
            cy="8"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.35"
          />

          <path
            d="M8 4.75V8L10 9.25"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </>
      )}

      {type === "document" && (
        <>
          <rect
            x="3.75"
            y="2.25"
            width="8.5"
            height="11.5"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.35"
          />

          <path
            d="M6.75 7.5H9.25"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </>
      )}

      {type === "user" && (
        <>
          <circle
            cx="8"
            cy="5.5"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.35"
          />

          <path
            d="M3.5 13C4.4 10.8 6 9.75 8 9.75C10 9.75 11.6 10.8 12.5 13"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </>
      )}

      {type === "chart" && (
        <path
          d="M2 11.5L5.5 8L8 10L13.5 4.5"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {type === "shield" && (
        <>
          <path
            d="M8 2.25L12 4V7.5C12 10.2 10.4 12.2 8 13.25C5.6 12.2 4 10.2 4 7.5V4L8 2.25Z"
            stroke="currentColor"
            strokeWidth="1.35"
          />

          <path
            d="M6 7.75L7.25 9L10 6"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}