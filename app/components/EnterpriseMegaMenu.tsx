"use client";

import Image from "next/image";
import Link from "next/link";

type EnterpriseMegaMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

type MenuItemProps = {
  title: string;
  icon: string;
  href: string;
  onLinkClick: () => void;
};

function MenuItem({
  title,
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
          src={`/enterprise/${icon}`}
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
    </Link>
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

const enterprisePlatformItems = [
  {
    title: "Enterprise Overview",
    icon: "enterprise.png",
    href: "#",
  },
  {
    title: "Administration & Policy Controls",
    icon: "administration.png",
    href: "/adminstration-policy-controls",
  },
  {
    title: "Identity & Access Management",
    icon: "identity.png",
    href: "/identity-access-management",
  },
  {
    title: "Enterprise Integrations",
    icon: "enterprise-integrations.png",
    href: "/enterprise-integrations",
  },
  {
    title: "Analytics & Reporting",
    icon: "analytics.png",
    href: "/analytics-reporting",
  },
  {
    title: "Global Deployment",
    icon: "global.png",
    href: "/global-deployment",
  },
];

const adoptionSupportItems = [
  {
    title: "Implementation Services",
    icon: "implementation.png",
    href: "/implementation-services",
  },
  {
    title: "Data Migration",
    icon: "data.png",
    href: "/data-migration",
  },
  {
    title: "Customer Success",
    icon: "customer.png",
    href: "/customer-success",
  },
  {
    title: "Training & Adoption",
    icon: "training.png",
    href: "/training-adoption",
  },
  {
    title: "Enterprise Support",
    icon: "enterprise-support.png",
    href: "/#",
  },
  {
    title: "Procurement & Legal Resources",
    icon: "procurement.png",
    href: "/procurement-and-legal-resources",
  },
];

export default function EnterpriseMegaMenu({
  isOpen,
  onLinkClick,
}: EnterpriseMegaMenuProps) {
  return (
    <div
      className={`
        fixed
        left-1/2
        top-[95px]
        z-[100]
        w-[calc(100vw-64px)]
        max-w-[1000px]
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
            grid-cols-[1fr_1fr_280px]
          "
        >

                    {/* =====================================================
              ENTERPRISE PLATFORM
          ====================================================== */}

          <div className="px-5 pb-6 pt-7">
            <SectionTitle>
              Enterprise Platform
            </SectionTitle>

            <div className="space-y-2">
              {enterprisePlatformItems.map((item) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>
          </div>

          {/* =====================================================
              ADOPTION & SUPPORT
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
            <SectionTitle>
              Adoption &amp; Support
            </SectionTitle>

            <div className="space-y-2">
              {adoptionSupportItems.map((item) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  href={item.href}
                  onLinkClick={onLinkClick}
                />
              ))}
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
                src="/enterprise/deploy-zoiko-time.png"
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
              Deploy ZoikoTime across
              <br />
              your organization
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
              Work with the enterprise team on
              deployment, policy configuration,
              integrations, security review, and
              more.
            </p>

                        {/* Button */}
            <button
              type="button"
              onClick={onLinkClick}
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