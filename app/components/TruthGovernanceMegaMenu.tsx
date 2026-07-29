"use client";

import Image from "next/image";

type TruthGovernanceMegaMenuProps = {
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
          src={`/trust-goverance/${icon}`}
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] object-contain"
        />
      </div>

      <span
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
      </span>
    </button>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        mb-4
        px-3
        text-xs
        font-bold
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

export default function TruthGovernanceMegaMenu({
  isOpen,
}: TruthGovernanceMegaMenuProps) {
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
      {/* Invisible hover bridge */}
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
        <div
          className="
            grid
            grid-cols-[245px_285px_290px_1fr]
          "
        >
          {/* =====================================================
              TRUST
          ====================================================== */}

          <div className="px-5 pb-6 pt-7">
            <SectionTitle>Trust</SectionTitle>

            <div className="space-y-2">
              <MenuItem
                icon="trust.png"
                title="Trust Center"
              />

              <MenuItem
                icon="security.png"
                title="Security"
              />

              <MenuItem
                icon="privacy.png"
                title="Privacy"
              />

              <MenuItem
                icon="platform.png"
                title="Platform Reliability"
              />

              <MenuItem
                icon="system.png"
                title="System Status"
              />
            </div>
          </div>

          {/* =====================================================
              GOVERNANCE
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
            <SectionTitle>Governance</SectionTitle>

            <div className="space-y-2">
              <MenuItem
                icon="human.png"
                title="Human-in-Command Controls"
              />

              <MenuItem
                icon="ethical.png"
                title="Ethical Design Principles"
              />

              <MenuItem
                icon="ai.png"
                title="AI Governance"
              />

              <MenuItem
                icon="administrative.png"
                title="Administrative Controls"
              />
            </div>
          </div>

          {/* =====================================================
              ASSURANCE
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
            <SectionTitle>Assurance</SectionTitle>

            <div className="space-y-2">
              <MenuItem
                icon="compliance.png"
                title="Compliance & Assurance"
              />

              <MenuItem
                icon="works.png"
                title="Works-Council & Consultation Resources"
              />

              <MenuItem
                icon="accessibility.png"
                title="Accessibility"
              />

              <MenuItem
                icon="responsible.png"
                title="Responsible Disclosure"
              />

              <MenuItem
                icon="data-location.png"
                title="Data Location & Residency"
              />
            </div>
          </div>

          {/* =====================================================
              FEATURED CARD
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
            {/* Icon */}
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
                src="/trust-goverance/truth.png"
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] object-contain"
              />
            </div>

            {/* Heading */}
            <h3
              className="
                mt-5
                text-lg
                font-bold
                leading-6
                text-teal-950
                dark:text-slate-100
              "
            >
              Truth you can inspect
            </h3>

            {/* Description */}
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
              Review how ZoikoTime protects
              classification data and preserves
              human authority over every
              consequential decision.
            </p>

            {/* Button */}
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
                font-bold
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
