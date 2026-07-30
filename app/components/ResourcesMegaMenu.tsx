"use client";

import Image from "next/image";

type ResourcesMegaMenuProps = {
  isOpen: boolean;
};

type MenuItemProps = {
  title: string;
  icon: string;
};

function MenuItem({
  title,
  icon,
}: MenuItemProps) {
  return (
    <div
      className="
        group
        flex
        cursor-default
        items-center
        gap-4
        rounded-lg
        px-4
        py-3
        transition-colors
        hover:bg-slate-100
        dark:hover:bg-slate-800/70
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-emerald-100
          dark:bg-emerald-900/30
        "
      >
        <Image
          src={`/resources/${icon}`}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 object-contain"
        />
      </div>

      <span
        className="
          text-sm
          font-bold
          leading-5
          text-slate-900
          dark:text-slate-100
        "
      >
        {title}
      </span>
    </div>
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
        mb-5
        text-xs
        font-black
        uppercase
        tracking-[0.12em]
        text-teal-700
        dark:text-emerald-400
      "
    >
      {children}
    </div>
  );
}

const learnItems = [
  { title: "Resource Center", icon: "resource.png" },
  { title: "Blog & Insights", icon: "blog.png" },
  { title: "Guides", icon: "guides.png" },
  { title: "Customer Stories", icon: "customer.png" },
  { title: "Webinars & Events", icon: "webinars.png" },
];

const useItems = [
  { title: "Getting Started", icon: "getting.png" },
  { title: "Help Center", icon: "help.png" },
  { title: "Product Documentation", icon: "product.png" },
  { title: "Frequently Asked Questions", icon: "frequently.png" },
  { title: "Video Tutorials", icon: "video.png" },
];

const buildItems = [
  { title: "Developer Documentation", icon: "developer.png" },
  { title: "API Reference", icon: "api.png" },
  { title: "Integrations Directory", icon: "integrations.png" },
  { title: "Release Notes", icon: "release.png" },
  { title: "Product Updates", icon: "product2.png" },
];

export default function ResourcesMegaMenu({
  isOpen,
}: ResourcesMegaMenuProps) {
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
      <div
        className="
          absolute
          -top-4
          left-0
          h-4
          w-full
        "
      />

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-stone-300
          bg-white
          shadow-[0px_4px_14px_-6px_rgba(11,36,54,0.10),0px_24px_48px_-20px_rgba(11,36,54,0.22)]
          dark:border-slate-700
          dark:bg-slate-950
        "
      >
        <div className="grid grid-cols-[1fr_1fr_1fr_280px]">
          {/* Learn */}
          <div className="px-6 py-6">
            <SectionTitle>Learn</SectionTitle>

            <div className="space-y-1">
              {learnItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                />
              ))}
            </div>
          </div>

          {/* Use ZoikoTime */}
          <div
            className="
              border-l
              border-stone-300
              px-6
              py-6
              dark:border-slate-700
            "
          >
            <SectionTitle>Use ZoikoTime</SectionTitle>

            <div className="space-y-1">
              {useItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                />
              ))}
            </div>
          </div>

          {/* Build */}
          <div
            className="
              border-l
              border-stone-300
              px-6
              py-6
              dark:border-slate-700
            "
          >
            <SectionTitle>
              Build &amp; Stay Updated
            </SectionTitle>

            <div className="space-y-1">
              {buildItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                />
              ))}
            </div>
          </div>

          {/* Feature Panel */}
          <div
            className="
              border-l
              border-stone-300
              bg-slate-50
              p-6
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-emerald-100
                dark:bg-emerald-900/30
              "
            >
              <Image
                src="/resources/resource.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>

            <h3
              className="
                mt-6
                text-xl
                font-bold
                leading-7
                text-slate-900
                dark:text-slate-100
              "
            >
              Get more value
              <br />
              from your
              <br />
              workforce record
            </h3>

            <p
              className="
                mt-5
                text-sm
                leading-6
                text-neutral-600
                dark:text-slate-400
              "
            >
              Practical guidance,
              implementation resources,
              and documentation for
              administrators,
              developers, workers,
              and evaluators.
            </p>

            <button
              type="button"
              className="
                mt-6
                flex
                h-11
                w-full
                items-center
                justify-center
                rounded-lg
                bg-teal-600
                text-sm
                font-bold
                text-white
                transition-colors
                hover:bg-teal-700
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