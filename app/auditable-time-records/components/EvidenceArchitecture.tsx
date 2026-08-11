"use client";

import Link from "next/link";
import {
  FiFileText,
  FiEdit3,
  FiClipboard,
  FiClock,
  FiDownload,
  FiUser,
} from "react-icons/fi";

const evidenceItems = [
  {
    number: "01",
    title: "Time Record Ledger",
    description:
      "Search, filter, and open records by source, version, policy, approval, export, and downstream state.",
    link: "Explore the Ledger →",
    href: "/evidence-ledger",
    icon: "ledger",
  },
  {
    number: "02",
    title: "Record Detail & Lineage",
    description:
      "See how one record's current value links to original source, derivation, changes, and use.",
    link: "Inspect Lineage →",
    href: "#",
    icon: "lineage",
  },
  {
    number: "03",
    title: "Policy Snapshot",
    description:
      "Preserve the exact rule and context applicable at the record date — no silent reclassification.",
    link: "See Policy Evidence →",
    href: "/deterministic-time-classification",
    icon: "policy",
  },
  {
    number: "04",
    title: "Correction & Approval History",
    description:
      "Append-only changes, rationale, notices, and authority — auditable without becoming punitive.",
    link: "Review History →",
    href: "/time-sheet-approvals",
    icon: "history",
  },
  {
    number: "05",
    title: "Evidence Bundle & Export",
    description:
      "Purpose-based, manifest-backed evidence packaging — never just a downloaded spreadsheet.",
    link: "View Bundle →",
    href: "#",
    icon: "bundle",
  },
  {
    number: "06",
    title: "Worker Record View",
    description:
      "Role-appropriate transparency and correction rights for the record subject.",
    link: "View Worker Experience →",
    href: "/human-in-command",
    icon: "worker",
  },
];

function EvidenceIcon({ type }: { type: string }) {
  const iconClass = "h-[21px] w-[21px] text-sky-900 dark:text-sky-300";

  return (
    <div
      className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-emerald-50
        dark:bg-emerald-950/40
      "
    >
      {/* ================= TIME RECORD LEDGER ================= */}
      {type === "ledger" && (
        <div className="relative">
          <FiFileText className={iconClass} />

          <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#3FB97A]">
            <FiClock className="h-2 w-2 text-white" />
          </div>
        </div>
      )}

      {/* ================= RECORD DETAIL & LINEAGE ================= */}
      {type === "lineage" && (
        <FiEdit3 className={iconClass} />
      )}

      {/* ================= POLICY SNAPSHOT ================= */}
      {type === "policy" && (
        <FiClipboard className={iconClass} />
      )}

      {/* ================= CORRECTION & APPROVAL HISTORY ================= */}
      {type === "history" && (
        <FiClock className={iconClass} />
      )}

      {/* ================= EVIDENCE BUNDLE & EXPORT ================= */}
      {type === "bundle" && (
        <div className="relative">
          <FiFileText className={iconClass} />

          <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-[#3FB97A]">
            <FiDownload className="h-2 w-2 text-white" />
          </div>
        </div>
      )}

      {/* ================= WORKER RECORD VIEW ================= */}
      {type === "worker" && (
        <div className="relative">
          <FiFileText className={iconClass} />

          <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#3FB97A]">
            <FiUser className="h-2 w-2 text-white" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function EvidenceArchitecture() {
  return (
    <section className="w-full bg-white py-12 transition-colors sm:py-14 lg:py-16 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-9 px-5 sm:gap-10 sm:px-6 lg:gap-11 lg:px-8">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="flex w-full max-w-[680px] flex-col items-start gap-4 pt-1">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#3FB97A]" />

            <span className="text-xs font-bold uppercase leading-5 tracking-widest text-[#3FB97A]">
              Evidence Architecture
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10 dark:text-white">
            Every Record, Fully Explained
          </h2>
        </div>

        {/* =========================================================
            EVIDENCE CARDS
        ========================================================= */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {evidenceItems.map((item) => (
            <div
              key={item.number}
              className="
                flex
                min-h-[245px]
                flex-col
                items-start
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6
                py-6
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[#3FB97A]/40
                hover:shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.25)]
                dark:border-slate-700
                dark:bg-slate-900
                dark:hover:border-[#3FB97A]/40
                dark:hover:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.5)]
              "
            >
              {/* ================= ICON ================= */}
              <EvidenceIcon type={item.icon} />

              {/* ================= TITLE ================= */}
              <div className="w-full pt-4">
                <h3 className="text-base font-bold leading-5 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {/* ================= DESCRIPTION ================= */}
              <p className="mt-2 w-full text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>

              {/* ================= LINK ================= */}
              <Link
                href={item.href}
                className="
                  mt-auto
                  inline-flex
                  items-center
                  pt-5
                  text-sm
                  font-semibold
                  leading-5
                  text-[#3FB97A]
                  transition-colors
                  hover:text-[#35A86E]
                  dark:text-[#3FB97A]
                  dark:hover:text-[#65D69A]
                "
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}