"use client";

import Image from "next/image";

type SolutionsMegaMenuProps = {
  isOpen: boolean;
};

type MenuItemProps = {
  title: string;
  icon: string;
};

function MenuItem({ title, icon }: MenuItemProps) {
  return (
    <button
      type="button"
      className="
        group/item
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        text-left
        transition-colors
        hover:bg-slate-100
        dark:hover:bg-slate-800/70
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-green-100
          dark:bg-emerald-950/50
        "
      >
        <Image
          src={`/solutions/${icon}`}
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] object-contain"
        />
      </div>

      <div
        className="
          min-w-0
          text-sm
          font-semibold
          leading-5
          text-teal-950
          dark:text-slate-100
        "
      >
        {title}
      </div>
    </button>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        mb-4
        px-3
        text-xs
        font-semibold
        uppercase
        leading-4
        tracking-wide
        text-teal-700
        dark:text-teal-400
      "
    >
      {children}
    </div>
  );
}

export default function SolutionsMegaMenu({
  isOpen,
}: SolutionsMegaMenuProps) {
  return (
    <div
      className={`
        fixed
        left-1/2
        top-[95px]
        z-[100]
        w-[calc(100vw-64px)]
        max-w-[1150px]
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

      {/* Main dropdown */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10),0px_20px_25px_-5px_rgba(0,0,0,0.10)]
          dark:border-slate-700
          dark:bg-slate-950
          dark:shadow-2xl
        "
      >
        <div className="grid grid-cols-[245px_315px_290px_1fr]">

          {/* =====================================================
              BY ROLE
          ====================================================== */}

          <div className="px-5 pb-6 pt-7">
            <SectionTitle>By Role</SectionTitle>

            <div className="space-y-2">
              <MenuItem
                icon="hr.png"
                title="HR & People Teams"
              />

              <MenuItem
                icon="finance.png"
                title="Finance & Payroll Teams"
              />

              <MenuItem
                icon="operations.png"
                title="Operations Leaders"
              />

              <MenuItem
                icon="teamlead.png"
                title="Team Lead & Managers"
              />

              <MenuItem
                icon="workers.png"
                title="Workers"
              />
            </div>
          </div>

          {/* =====================================================
              BY BUSINESS NEED
          ====================================================== */}

          <div
            className="
              border-l
              border-gray-200
              px-5
              pb-6
              pt-7
              dark:border-slate-700
            "
          >
            <SectionTitle>By Business Need</SectionTitle>

            <div className="space-y-2">
              <MenuItem
                icon="time.png"
                title="Verify Time & Attendance"
              />

              <MenuItem
                icon="improve.png"
                title="Improve Payroll Accuracy"
              />

              <MenuItem
                icon="eliminate.png"
                title="Eliminate Time Disputes"
              />

              <MenuItem
                icon="create.png"
                title="Create Auditable Time Records"
              />

              <MenuItem
                icon="control.png"
                title="Control Project Time & Cost"
              />

              <MenuItem
                icon="manage.png"
                title="Manage Remote & Hybrid Work"
              />
            </div>
          </div>

          {/* =====================================================
              BY ENVIRONMENT
          ====================================================== */}

          <div
            className="
              border-l
              border-gray-200
              px-5
              pb-6
              pt-7
              dark:border-slate-700
            "
          >
            <SectionTitle>By Environment</SectionTitle>

            <div className="space-y-2">
              <MenuItem
                icon="remote.png"
                title="Remote Teams"
              />

              <MenuItem
                icon="hybrid.png"
                title="Hybrid Workforces"
              />

              <MenuItem
                icon="contractor.png"
                title="Contractor-Heavy Workforces"
              />

              <MenuItem
                icon="project.png"
                title="Project-Based Businesses"
              />

              <MenuItem
                icon="global.png"
                title="Global Workforces"
              />
            </div>
          </div>

          {/* =====================================================
              FEATURED PANEL
          ====================================================== */}

          <div
            className="
              m-4
              flex
              min-h-[320px]
              flex-col
              rounded-2xl
              bg-slate-50
              p-5
              dark:bg-slate-900
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-green-100
                dark:bg-emerald-950/50
              "
            >
              <Image
                src="/solutions/solution.png"
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] object-contain"
              />
            </div>

            <h3
              className="
                mt-5
                text-lg
                font-semibold
                leading-6
                text-teal-950
                dark:text-slate-100
              "
            >
              Find the right solution
            </h3>

            <p
              className="
                mt-3
                text-sm
                font-medium
                leading-5
                text-gray-500
                dark:text-slate-400
              "
            >
              Explore how organizations use Workforce Truth
              Infrastructure to close the gap between what
              happened and what gets paid.
            </p>

            <button
              type="button"
              className="
                mt-auto
                flex
                h-10
                w-full
                items-center
                justify-center
                rounded-lg
                bg-teal-600
                px-4
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-teal-700
                dark:bg-teal-500
                dark:hover:bg-teal-400
              "
            >
              Download Zoiko Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}