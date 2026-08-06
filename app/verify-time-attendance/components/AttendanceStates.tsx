import Image from "next/image";

const tones = {
  neutral: "border border-[#D2DAE2] bg-[#F6F9F9] text-[#6B7785]",
  teal: "bg-[#E8F6F2] text-[#0B8675]",
  amber: "bg-[#FFF3D6] text-[#8A6500]",
  blue: "bg-[#E7F0FF] text-[#2E5BC0]",
  red: "bg-[#FCEEEC] text-[#B23A2B]",
} as const;

const states = [
  {
    state: "Captured",
    tone: "neutral" as const,
    meaning: "Time event exists; processing or context incomplete",
    owner: "System / admin",
    nextAction: "Normalize and classify",
  },
  {
    state: "Verified",
    tone: "teal" as const,
    meaning: "Required inputs and checks complete; approval may still be required",
    owner: "Reviewer / approver",
    nextAction: "Review and approve where required",
  },
  {
    state: "Needs Context",
    tone: "amber" as const,
    meaning: "Required field missing or conflicting",
    owner: "Worker / context owner",
    nextAction: "Provide context or request correction",
  },
  {
    state: "Pending Review",
    tone: "blue" as const,
    meaning: "Context exists; authorized reviewer must decide",
    owner: "Assigned reviewer",
    nextAction: "Accept, correct, request more, or escalate",
  },
  {
    state: "Corrected",
    tone: "blue" as const,
    meaning: "Authorized change recorded with history",
    owner: "Reviewer / approver",
    nextAction: "Complete approval",
  },
  {
    state: "Approved",
    tone: "teal" as const,
    meaning: "All required review/approval controls complete",
    owner: "Downstream owner",
    nextAction: "Release or retain as final record",
  },
  {
    state: "Export Pending / Failed",
    tone: "red" as const,
    meaning: "Approved record hasn't completed transfer",
    owner: "Integration / ops owner",
    nextAction: "Retry, correct mapping, or escalate",
  },
  {
    state: "Locked / Closed",
    tone: "neutral" as const,
    meaning: "Period closed under configured rules",
    owner: "Policy owner / admin",
    nextAction: "Use governed reopening process",
  },
];

const columns = "md:grid-cols-[17.7%_40%_16.7%_25.6%]";

export default function AttendanceStates() {
  return (
    <section id="attendance-states" className="w-full scroll-mt-24 overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[790px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Attendance States
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] dark:text-white sm:text-4xl">
            Every status has a neutral meaning, owner, and next action
          </h2>

        </div>

        {/* State Table */}
        <div className="mx-auto mt-9 w-full max-w-[1040px] overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950">

          {/* Column Headings */}
          <div className={`hidden bg-[#0E1F3D] md:grid ${columns}`}>
            {["State", "Meaning", "Owner", "Next action"].map((heading) => (
              <p
                key={heading}
                className="px-4 py-3.5 text-xs font-semibold leading-5 text-white"
              >
                {heading}
              </p>
            ))}
          </div>

          {/* Rows */}
          {states.map((row, index) => (
            <div
              key={row.state}
              className={`grid grid-cols-1 gap-2 border-t border-[#E4E9EE] px-4 py-4 md:items-start md:gap-0 md:px-0 md:py-0 ${columns} ${
                index % 2 === 1
                  ? "bg-[#F6F9F9] dark:bg-slate-900"
                  : "bg-white dark:bg-slate-950"
              } dark:border-slate-800`}
            >

              <div className="md:px-4 md:py-3.5">
                <span
                  className={`inline-flex rounded-[20px] px-3.5 py-1.5 text-xs font-bold leading-5 ${tones[row.tone]}`}
                >
                  {row.state}
                </span>
              </div>

              <p className="text-sm font-normal leading-5 text-[#3C4858] md:px-4 md:py-4 dark:text-slate-300">
                {row.meaning}
              </p>

              <p className="text-sm font-normal leading-5 text-[#3C4858] md:px-4 md:py-4 dark:text-slate-300">
                {row.owner}
              </p>

              <p className="text-sm font-normal leading-5 text-[#3C4858] md:px-4 md:py-4 dark:text-slate-300">
                {row.nextAction}
              </p>

            </div>
          ))}

        </div>

        {/* Neutral Language Note */}
        <div className="mx-auto mt-8 flex max-w-[860px] items-start justify-center gap-2.5">

          <Image
            src="/verify-time-attendance/info.svg"
            alt=""
            width={14}
            height={14}
            className="mt-1 h-3.5 w-3.5 shrink-0"
          />

          <p className="text-center text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
            Canonical neutral example: &quot;Unverified Exit — Pending
            Review.&quot; Prohibited: &quot;time theft,&quot;
            &quot;fraudulent,&quot; &quot;dishonest,&quot; &quot;idle,&quot; or
            any label that converts incomplete evidence into an accusation.
          </p>

        </div>

      </div>
    </section>
  );
}
