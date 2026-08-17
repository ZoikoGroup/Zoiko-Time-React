"use client";

import Image from "next/image";
import Link from "next/link";

type ProductMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type MenuItemProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
  onLinkClick: () => void;
};

function MenuItem({
  title,
  description,
  icon,
  href,
  onLinkClick,
}: MenuItemProps) {
  return (
    <Link
      href={href}
      onClick={onLinkClick}
      className="
        group/item
        flex
        w-full
        items-start
        gap-4
        rounded-lg
        px-4
        py-3
        text-left
        transition-colors
        hover:bg-slate-100
        dark:hover:bg-slate-800/70
      "
    >
      {/* Icon */}

      <div
        className="
          mt-0.5
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
        "
      >
        <Image
          src={`/product-menu/${icon}`}
          alt=""
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      </div>

      {/* Text */}

      <div className="min-w-0 pt-0.5">
        <div
          className="
            text-sm
            font-bold
            leading-5
            text-slate-900
            dark:text-slate-100
          "
        >
          {title}
        </div>

        <div
          className="
            mt-0.5
            text-xs
            leading-4
            tracking-wide
            text-neutral-600
            dark:text-slate-400
          "
        >
          {description}
        </div>
      </div>
    </Link>
  );
}

function SectionTitle({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-2">
      <Image
        src={`/product-menu/${icon}`}
        alt=""
        width={16}
        height={16}
        className="h-4 w-4 object-contain"
      />

      <div
        className="
          text-xs
          font-bold
          uppercase
          leading-4
          tracking-wide
          text-emerald-700
          dark:text-emerald-400
        "
      >
        {children}
      </div>
    </div>
  );
}

export default function ProductMegaMenu({
  isOpen,
  onLinkClick,
}: ProductMegaMenuProps) {
  return (
    <div
      className={`
        fixed
        left-1/2
        top-[95px]
        z-[100]
        w-[calc(100vw-48px)]
        max-w-[1232px]
        -translate-x-1/2
        transition-all
        duration-200
        ease-out
        max-md:hidden

        ${
          isOpen
            ? "visible translate-y-0 opacity-100 pointer-events-auto"
            : "invisible translate-y-2 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Invisible bridge */}

      <div
        className="
          absolute
          -top-4
          left-0
          h-4
          w-full
        "
      />

      {/* =====================================================
          MAIN DROPDOWN
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-xl
          border
          border-stone-300
          bg-white
          shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10),0px_20px_25px_-5px_rgba(0,0,0,0.10)]
          dark:border-slate-700
          dark:bg-slate-950
          dark:shadow-2xl
        "
      >
        <div className="grid grid-cols-4">

                    {/* =================================================
              PLATFORM
          ================================================== */}

          <div
            className="
              min-h-[573px]
              border-r
              border-stone-300
              px-6
              pt-6
              pb-8
              dark:border-slate-700
            "
          >
            <SectionTitle icon="platform-icon.png">
              Platform
            </SectionTitle>

            <div className="space-y-3">
              <MenuItem
                icon="product-overview.png"
                title="Product Overview"
                description="Platform overview and principles."
                href="/product"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="zoikotimeworks.png"
                title="How ZoikoTime Works"
                description="Architecture & components."
                href="/how-zoikotime-works"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="desktop.png"
                title="Desktop & Mobile Apps"
                description="Work from anywhere."
                href="/desktop-and-mobile-apps"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="zoikosema.png"
                title="Zoiko Sema Integration"
                description="Communication layer."
                href="/zoiko-sema-integration"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="kairos.png"
                title="Kairos Assistant"
                description="Conversational AI assistant."
                href="/kairos-assistant"
                onLinkClick={onLinkClick}
              />
            </div>
          </div>

          {/* =================================================
              TIME & ATTENDANCE
          ================================================== */}

          <div
            className="
              min-h-[573px]
              border-r
              border-stone-300
              px-6
              pt-6
              pb-8
              dark:border-slate-700
            "
          >
            <SectionTitle icon="time-attendance.png">
              Time & Attendance
            </SectionTitle>

            <div className="space-y-3"> 
              <MenuItem
                icon="timetracking.png"
                title="Time and activity verification"
                description="Accurate time capture."
                href="/time-and-activity-verification"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="timesheets.png"
                title="Timesheets & Approvals"
                description="Submit, review, approve."
                href="/time-sheet-approvals"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="attendance.png"
                title="Attendance & Presence"
                description="Verify attendance in real time."
                href="#"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="break.png"
                title="Break & Rest Compliance"
                description="Meal & rest compliance."
                href="/break-rest-compliance"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="shift.png"
                title="Shift Integrity Controls"
                description="Ensure shift accuracy."
                href="/shift-integrity-controls"
                onLinkClick={onLinkClick}
              />
            </div>
          </div>
                    {/* =================================================
              TRUTH & EVIDENCE
          ================================================== */}

          <div
            className="
              min-h-[573px]
              border-r
              border-stone-300
              px-6
              pt-6
              pb-8
              dark:border-slate-700
            "
          >
            <SectionTitle icon="truth-evidence.png">
              Truth & Evidence
            </SectionTitle>

            <div className="space-y-3">
              <MenuItem
                icon="deterministic.png"
                title="Deterministic Time Classification"
                description="Policy-bound, deterministic."
                href="/deterministic-time-classification"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="evidence.png"
                title="Evidence Ledger"
                description="Immutable audit trail."
                href="/evidence-ledger"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="workforce.png"
                title="Workforce Record Insights"
                description="Organization-level insights."
                href="/workforce-record-insights"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="reports.png"
                title="Reports & Dashboards"
                description="Real-time reporting."
                href="/reports-dashboards"
                onLinkClick={onLinkClick}
              />

              <MenuItem
                icon="anomaly.png"
                title="Anomaly Flags & Alerts"
                description="Detect issues early."
                href="/anomaly-flags-alerts"
                onLinkClick={onLinkClick}
              />
            </div>
          </div>

          {/* =================================================
              FEATURED PANEL
          ================================================== */}

          <div
            className="
              flex
              min-h-[573px]
              flex-col
              justify-between
              bg-teal-50
              p-6
              dark:bg-slate-900
            "
          >
            <div>
              <h3
                className="
                  text-lg
                  font-bold
                  leading-6
                  text-emerald-700
                  dark:text-emerald-400
                "
              >
                Understand the Complete
                <br />
                Platform
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-neutral-700
                  dark:text-slate-300
                "
              >
                See how Workforce Truth Infrastructure
                produces deterministic, evidence-backed
                time records your payroll, billing, and
                audit systems can rely on—with no
                screenshots, no keystroke capture, and
                no surveillance of any kind.
              </p>
            </div>

            <div className="mt-8">
              {/* Product Image */}

              <div
                className="
                  relative
                  h-40
                  w-full
                  overflow-hidden
                  rounded-lg
                  border
                  border-stone-300
                  bg-blue-100
                  dark:border-slate-600
                  dark:bg-slate-800
                "
              >
                <Image
                  src="/product-menu/product-menu.png"
                  alt="ZoikoTime platform"
                  fill
                  sizes="300px"
                  className="object-cover"
                  priority
                />
              </div>
                            {/* Explore Button */}

             <Link
  href="/explore-zoikotime"
  onClick={onLinkClick}
  className="
    mt-6
    flex
    w-full
    items-center
    justify-center
    rounded-lg
    bg-emerald-500
    px-6
    py-4
    text-center
    text-base
    font-bold
    leading-6
    text-white
    transition-colors
    hover:bg-emerald-600
    dark:bg-emerald-500
    dark:hover:bg-emerald-400
  "
>
  Explore ZoikoTime
</Link>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STRIP
        ================================================== */}

        <div
          className="
            flex
            min-h-12
            items-center
            justify-center
            gap-8
            border-t
            border-stone-300
            bg-sky-50
            px-6
            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          {/* First */}

          <div className="flex items-center gap-2">
            <div
              className="
                h-3.5
                w-3.5
                shrink-0
                rounded-[1px]
                bg-emerald-600
                dark:bg-emerald-400
              "
            />

            <span
              className="
                text-xs
                font-semibold
                leading-4
                tracking-wide
                text-neutral-700
                dark:text-slate-300
              "
            >
              No screenshots. No keystroke capture. No surveillance.
            </span>
          </div>

          {/* Divider */}

          <div
            className="
              h-4
              w-px
              bg-stone-300
              dark:bg-slate-700
            "
          />

          {/* Second */}

          <div className="flex items-center gap-2">
            <div
              className="
                h-3.5
                w-3.5
                shrink-0
                rounded-[1px]
                bg-emerald-600
                dark:bg-emerald-400
              "
            />

            <span
              className="
                text-xs
                font-semibold
                leading-4
                tracking-wide
                text-neutral-700
                dark:text-slate-300
              "
            >
              GDPR & CCPA Compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}