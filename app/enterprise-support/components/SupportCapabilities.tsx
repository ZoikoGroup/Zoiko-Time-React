"use client";

type CapabilityType =
  | "intake"
  | "ownership"
  | "investigation"
  | "escalation"
  | "updates"
  | "evidence";

type Capability = {
  title: string;
  description: React.ReactNode;
  type: CapabilityType;
  iconColor: string;
};

const capabilities: Capability[] = [
  {
    title: "Guided Intake",
    type: "intake",
    iconColor: "text-teal-600 dark:text-teal-400",
    description: (
      <>
        Collects only the routing information needed —
        <br className="hidden sm:block" />
        never secrets or unnecessary personal data.
      </>
    ),
  },
  {
    title: "Visible Ownership",
    type: "ownership",
    iconColor: "text-blue-600 dark:text-blue-400",
    description: (
      <>
        Every case shows an owner or queue and the next
        <br className="hidden sm:block" />
        action — never unowned.
      </>
    ),
  },
  {
    title: "Protected Investigation",
    type: "investigation",
    iconColor: "text-yellow-700 dark:text-yellow-400",
    description: (
      <>
        Facts, hypotheses, and conclusions stay
        <br className="hidden sm:block" />
        separated and attributable.
      </>
    ),
  },
  {
    title: "Human Escalation",
    type: "escalation",
    iconColor: "text-blue-950 dark:text-blue-300",
    description: (
      <>
        Consequential issues reach an authorized person
        <br className="hidden sm:block" />
        with attributable ownership.
      </>
    ),
  },
  {
    title: "Accountable Updates",
    type: "updates",
    iconColor: "text-teal-600 dark:text-teal-400",
    description: (
      <>
        Every communication shows audience, sender,
        <br className="hidden sm:block" />
        timestamp, and true delivery state.
      </>
    ),
  },
  {
    title: "Evidence & Learning",
    type: "evidence",
    iconColor: "text-blue-600 dark:text-blue-400",
    description: (
      <>
        Resolutions feed current, versioned knowledge —
        <br className="hidden sm:block" />
        stale guidance can't rank as current.
      </>
    ),
  },
];

/* ================================================================
   FIGMA ICONS
================================================================ */

function CapabilityIcon({ type }: { type: CapabilityType }) {
  /* Guided Intake + Accountable Updates */
  if (type === "intake" || type === "updates") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 4.5H13"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        <path
          d="M3 8H10.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        <path
          d="M3 11.5H8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* Visible Ownership */
  if (type === "ownership") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="3"
          width="8"
          height="10"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  }

  /* Protected Investigation */
  if (type === "investigation") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="8"
          cy="8"
          r="4.25"
          stroke="currentColor"
          strokeWidth="1.15"
        />

        <path
          d="M8 5.6V8L9.65 9.1"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* Human Escalation */
  if (type === "escalation") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 8H12"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        <path
          d="M9.5 5.5L12 8L9.5 10.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* Evidence & Learning */
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="4.25"
        stroke="currentColor"
        strokeWidth="1.15"
      />

      <path
        d="M6.1 8L7.35 9.25L10 6.6"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ================================================================
   CAPABILITY CARD
================================================================ */

function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <div
      className="
        min-h-[160px]
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-[23px]
        transition-colors
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-[10px]
          bg-gray-50
          dark:bg-slate-800
        "
      >
        <span className={capability.iconColor}>
          <CapabilityIcon type={capability.type} />
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          mt-5
          text-sm
          font-semibold
          leading-6
          text-slate-800
          dark:text-slate-100
        "
      >
        {capability.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-1.5
          text-xs
          font-normal
          leading-5
          text-gray-500
          dark:text-slate-400
        "
      >
        {capability.description}
      </p>
    </div>
  );
}

/* ================================================================
   MAIN COMPONENT
================================================================ */

export default function SupportCapabilities() {
  return (
    <section className="w-full bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-4
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
          lg:py-16
        "
      >
        {/* ========================================================
            WHAT IS ENTERPRISE SUPPORT
        ======================================================== */}

        <div
          className="
            w-full
            rounded-3xl
            border
            border-slate-200
            bg-gray-50
            px-6
            py-7
            dark:border-slate-800
            dark:bg-slate-900
            sm:px-8
            sm:py-8
            lg:px-[37px]
            lg:py-[30px]
          "
        >
          {/* Title */}
          <h2
            className="
              text-base
              font-semibold
              leading-7
              text-slate-800
              dark:text-slate-100
            "
          >
            What is Enterprise Support?
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[820px]
              text-sm
              font-normal
              leading-6
              text-gray-700
              dark:text-slate-300
            "
          >
            Enterprise Support routes product, access, configuration, data,
            and incident-related requests through visible ownership and human
            review. Every case shows who owns it, what's happening next, and
            what evidence is attached — investigation separates facts from
            hypotheses, and consequential decisions stay human-authorized.
            <br className="hidden sm:block" />
            It does not provide legal, tax, payroll, or employment advice, and
            current channel, coverage, and response information is shown only
            when verified.
          </p>
        </div>

        {/* ========================================================
            CAPABILITIES HEADING
        ======================================================== */}

        <div className="mt-10 sm:mt-12">
          {/* Label */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                leading-5
                tracking-wide
                text-teal-700
                dark:text-teal-400
              "
            >
              Capabilities
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              max-w-[590px]
              text-3xl
              font-semibold
              leading-[1.15]
              tracking-tight
              text-slate-800
              dark:text-slate-100
              sm:text-4xl
              sm:leading-10
            "
          >
            What governed support actually
            <br className="hidden sm:block" />
            does.
          </h2>
        </div>

        {/* ========================================================
            CARDS
        ======================================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
            />
          ))}
        </div>
      </div>
    </section>
  );
}