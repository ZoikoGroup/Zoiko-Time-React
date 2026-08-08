"use client";

import Image from "next/image";
import Link from "next/link";

type ResourcesMegaMenuProps = {
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
          src={`/resources/${icon}`}
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

const learnItems = [
  {
    title: "Resource Center",
    icon: "resource.png",
    href: "#"
  },
  {
  title: "Blog & Insights",
  icon: "blog.png",
  href: "/blog",
},
  {
    title: "Guides",
    icon: "guides.png",
    href: "/guides"
  },
  {
    title: "Customer Stories",
    icon: "customer.png",
    href: "/customer-stories"
  },
  {
    title: "Webinars & Events",
    icon: "webinars.png",
    href: "/webinars-and-events"
  },
];

const useItems = [
  {
    title: "Getting Started",
    icon: "getting.png",
    href: "#"
  },
  {
    title: "Help Center",
    icon: "help.png",
    href: "/help-center"
  },
  {
    title: "Product Documentation",
    icon: "product.png",
    href: "/product-documentation"
  },
  {
    title: "Frequently Asked Questions",
    icon: "frequently.png",
    href: "/faqs"
  },
  {
    title: "Video Tutorials",
    icon: "video.png",
    href: "/video-tutorials"
  },
];

const buildItems = [
  {
    title: "Developer Documentation",
    icon: "developer.png",
    href: "/development-documentation"
  },
  {
    title: "API Reference",
    icon: "api.png",
    href: "/api-reference"
  },
  {
    title: "Integrations Directory",
    icon: "integrations.png",
    href: "/integration-directory"
  },
  {
    title: "Release Notes",
    icon: "release.png",
    href: "#"
  },
  {
    title: "Product Updates",
    icon: "product2.png",
    href: "/product-updates"
  },
];

export default function ResourcesMegaMenu({
  isOpen,
  onLinkClick,
}: ResourcesMegaMenuProps) {
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
            grid-cols-[1fr_1fr_1fr_280px]
          "
        >
          {/* =====================================================
              LEARN
          ====================================================== */}

          <div className="px-5 pb-6 pt-7">
            <SectionTitle>
              Learn
            </SectionTitle>

            <div className="space-y-2">
              {learnItems.map((item) => (
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
              USE ZOIKOTIME
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
              Use ZoikoTime
            </SectionTitle>

            <div className="space-y-2">
              {useItems.map((item) => (
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
              BUILD & STAY UPDATED
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
              Build &amp; Stay Updated
            </SectionTitle>

            <div className="space-y-2">
              {buildItems.map((item) => (
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
                src="/resources/resource.png"
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
              Get more value
              <br />
              from your
              <br />
              workforce record
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
              Practical guidance,
              implementation resources,
              and documentation for
              administrators, developers,
              workers, and evaluators.
            </p>

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