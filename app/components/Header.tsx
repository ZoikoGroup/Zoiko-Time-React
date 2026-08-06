"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import ProductMegaMenu from "./ProductMegaMenu";
import SolutionsMegaMenu from "./SolutionsMegaMenu";
import TrustGovernanceMegaMenu from "./TrustGovernanceMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";
import EnterpriseMegaMenu from "./EnterpriseMegaMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isTrustGovernanceMenuOpen, setIsTrustGovernanceMenuOpen] =
    useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const [isEnterpriseMenuOpen, setIsEnterpriseMenuOpen] = useState(false);

  const productMenuRef = useRef<HTMLDivElement>(null);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);
  const trustGovernanceMenuRef = useRef<HTMLDivElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);
  const enterpriseMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        productMenuRef.current &&
        !productMenuRef.current.contains(target)
      ) {
        setIsProductMenuOpen(false);
      }

      if (
        solutionsMenuRef.current &&
        !solutionsMenuRef.current.contains(target)
      ) {
        setIsSolutionsMenuOpen(false);
      }

      if (
        trustGovernanceMenuRef.current &&
        !trustGovernanceMenuRef.current.contains(target)
      ) {
        setIsTrustGovernanceMenuOpen(false);
      }

      if (
        resourcesMenuRef.current &&
        !resourcesMenuRef.current.contains(target)
      ) {
        setIsResourcesMenuOpen(false);
      }

      if (
        enterpriseMenuRef.current &&
        !enterpriseMenuRef.current.contains(target)
      ) {
        setIsEnterpriseMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeAllMegaMenus = () => {
    setIsProductMenuOpen(false);
    setIsSolutionsMenuOpen(false);
    setIsTrustGovernanceMenuOpen(false);
    setIsResourcesMenuOpen(false);
    setIsEnterpriseMenuOpen(false);
  };

  const openProductMenu = () => {
    setIsProductMenuOpen(true);
    setIsSolutionsMenuOpen(false);
    setIsTrustGovernanceMenuOpen(false);
    setIsResourcesMenuOpen(false);
    setIsEnterpriseMenuOpen(false);
  };

  const openSolutionsMenu = () => {
    setIsProductMenuOpen(false);
    setIsSolutionsMenuOpen(true);
    setIsTrustGovernanceMenuOpen(false);
    setIsResourcesMenuOpen(false);
    setIsEnterpriseMenuOpen(false);
  };

  const openTrustGovernanceMenu = () => {
    setIsProductMenuOpen(false);
    setIsSolutionsMenuOpen(false);
    setIsTrustGovernanceMenuOpen(true);
    setIsResourcesMenuOpen(false);
    setIsEnterpriseMenuOpen(false);
  };

  const openEnterpriseMenu = () => {
    setIsProductMenuOpen(false);
    setIsSolutionsMenuOpen(false);
    setIsTrustGovernanceMenuOpen(false);
    setIsResourcesMenuOpen(false);
    setIsEnterpriseMenuOpen(true);
  };

  const openResourcesMenu = () => {
    setIsProductMenuOpen(false);
    setIsSolutionsMenuOpen(false);
    setIsTrustGovernanceMenuOpen(false);
    setIsResourcesMenuOpen(true);
    setIsEnterpriseMenuOpen(false);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        h-24
        w-full
        bg-white
        shadow-[0px_4px_8px_0px_rgba(196,196,196,0.08)]
        transition-all
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-8
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={closeAllMegaMenus}
        >
          <Image
            src="/images/Frame 16.png"
            alt="ZoikoDigital"
            width={180}
            height={40}
            className="h-auto w-[180px]"
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="hidden items-center gap-8 md:flex">
          {/* PRODUCT */}

          <div
            ref={productMenuRef}
            className="relative flex h-full items-center"
            onMouseEnter={openProductMenu}
            onMouseLeave={() => setIsProductMenuOpen(false)}
          >
            <div className="relative flex items-center gap-1">
              <Link
                href="/product"
                className={`
                  relative
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  transition-colors
                  ${
                    isProductMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
              >
                Product

                <span
                  className={`
                    absolute
                    -bottom-[7px]
                    left-0
                    h-[2px]
                    rounded-full
                    bg-sky-900
                    transition-all
                    duration-200
                    dark:bg-sky-400
                    ${
                      isProductMenuOpen
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </Link>

              <button
                type="button"
                className={`
                  flex
                  items-center
                  justify-center
                  transition-colors
                  focus:outline-none
                  ${
                    isProductMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
                aria-label="Product menu"
                aria-expanded={isProductMenuOpen}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isProductMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Invisible hover bridge */}
            <div className="absolute left-0 right-0 top-full h-5" />

            <ProductMegaMenu isOpen={isProductMenuOpen} />
          </div>

          {/* SOLUTIONS */}

          <div
            ref={solutionsMenuRef}
            className="relative flex h-full items-center"
            onMouseEnter={openSolutionsMenu}
            onMouseLeave={() => setIsSolutionsMenuOpen(false)}
          >
            <div className="relative flex items-center gap-1">
              <Link
                href="/solutions"
                className={`
                  relative
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  transition-colors
                  ${
                    isSolutionsMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
              >
                Solutions

                <span
                  className={`
                    absolute
                    -bottom-[7px]
                    left-0
                    h-[2px]
                    rounded-full
                    bg-sky-900
                    transition-all
                    duration-200
                    dark:bg-sky-400
                    ${
                      isSolutionsMenuOpen
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </Link>

              <button
                type="button"
                className={`
                  flex
                  items-center
                  justify-center
                  transition-colors
                  focus:outline-none
                  ${
                    isSolutionsMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
                aria-label="Solutions menu"
                aria-expanded={isSolutionsMenuOpen}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isSolutionsMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Invisible hover bridge */}
            <div className="absolute left-0 right-0 top-full h-5" />

            <SolutionsMegaMenu isOpen={isSolutionsMenuOpen} />
          </div>

          {/* TRUST & GOVERNANCE */}

          <div
            ref={trustGovernanceMenuRef}
            className="relative flex h-full items-center"
            onMouseEnter={openTrustGovernanceMenu}
            onMouseLeave={() => setIsTrustGovernanceMenuOpen(false)}
          >
            <div className="relative flex items-center gap-1">
              <Link
                href="/trust-governance"
                className={`
                  relative
                  whitespace-nowrap
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  transition-colors
                  ${
                    isTrustGovernanceMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
              >
                Trust &amp; Governance

                <span
                  className={`
                    absolute
                    -bottom-[7px]
                    left-0
                    h-[2px]
                    rounded-full
                    bg-sky-900
                    transition-all
                    duration-200
                    dark:bg-sky-400
                    ${
                      isTrustGovernanceMenuOpen
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </Link>

              <button
                type="button"
                className={`
                  flex
                  items-center
                  justify-center
                  transition-colors
                  focus:outline-none
                  ${
                    isTrustGovernanceMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
                aria-label="Trust and Governance menu"
                aria-expanded={isTrustGovernanceMenuOpen}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isTrustGovernanceMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Invisible hover bridge */}
            <div className="absolute left-0 right-0 top-full h-5" />

            <TrustGovernanceMegaMenu
              isOpen={isTrustGovernanceMenuOpen}
            />
          </div>

          {/* ENTERPRISE */}

          <div
            ref={enterpriseMenuRef}
            className="relative flex h-full items-center"
            onMouseEnter={openEnterpriseMenu}
            onMouseLeave={() => setIsEnterpriseMenuOpen(false)}
          >
            <div className="relative flex items-center gap-1">
              <Link
                href="/enterprise"
                className={`
                  relative
                  whitespace-nowrap
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  transition-colors
                  ${
                    isEnterpriseMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
              >
                Enterprise

                <span
                  className={`
                    absolute
                    -bottom-[7px]
                    left-0
                    h-[2px]
                    rounded-full
                    bg-sky-900
                    transition-all
                    duration-200
                    dark:bg-sky-400
                    ${
                      isEnterpriseMenuOpen
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </Link>

              <button
                type="button"
                className={`
                  flex
                  items-center
                  justify-center
                  transition-colors
                  focus:outline-none
                  ${
                    isEnterpriseMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
                aria-label="Enterprise menu"
                aria-expanded={isEnterpriseMenuOpen}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isEnterpriseMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Invisible hover bridge */}
            <div className="absolute left-0 right-0 top-full h-5" />

            <EnterpriseMegaMenu isOpen={isEnterpriseMenuOpen} />
          </div>

          {/* PRICING */}

          {/* PRICING */}

<Link
  href="/pricing"
  className="
    relative
    whitespace-nowrap
    text-base
    font-medium
    leading-6
    tracking-tight
    text-neutral-800
    transition-colors
    hover:text-sky-900
    dark:text-slate-100
    dark:hover:text-sky-400
    group
  "
  onClick={closeAllMegaMenus}
>
  Pricing

  <span
    className="
      absolute
      -bottom-[7px]
      left-0
      h-[2px]
      w-0
      rounded-full
      bg-sky-900
      transition-all
      duration-200
      group-hover:w-full
      dark:bg-sky-400
    "
  />
</Link>

          {/* RESOURCES */}

          <div
            ref={resourcesMenuRef}
            className="relative flex h-full items-center"
            onMouseEnter={openResourcesMenu}
            onMouseLeave={() => setIsResourcesMenuOpen(false)}
          >
            <div className="relative flex items-center gap-1">
              <Link
                href="/resources"
                className={`
                  relative
                  whitespace-nowrap
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  transition-colors
                  ${
                    isResourcesMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
              >
                Resources

                <span
                  className={`
                    absolute
                    -bottom-[7px]
                    left-0
                    h-[2px]
                    rounded-full
                    bg-sky-900
                    transition-all
                    duration-200
                    dark:bg-sky-400
                    ${
                      isResourcesMenuOpen
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </Link>

              <button
                type="button"
                className={`
                  flex
                  items-center
                  justify-center
                  transition-colors
                  focus:outline-none
                  ${
                    isResourcesMenuOpen
                      ? "text-sky-900 dark:text-sky-400"
                      : "text-neutral-800 dark:text-slate-100"
                  }
                `}
                aria-label="Resources menu"
                aria-expanded={isResourcesMenuOpen}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isResourcesMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Invisible hover bridge */}
            <div className="absolute left-0 right-0 top-full h-5" />

            <ResourcesMegaMenu isOpen={isResourcesMenuOpen} />
          </div>
        </nav>

        {/* DESKTOP ACTION BUTTONS */}

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="
              flex
              h-11
              items-center
              justify-center
              rounded-full
              border
              border-neutral-200/50
              bg-neutral-50
              px-6
              py-3
              text-base
              font-semibold
              leading-6
              text-neutral-800
              shadow-[0px_0px_0px_0.5px_rgba(155,155,155,0.10)]
              transition-all
              hover:bg-neutral-100
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-100
              dark:hover:bg-slate-800
            "
            onClick={closeAllMegaMenus}
          >
            Log In
          </Link>

          <Link
            href="/request-a-demo"
            className="
              flex
              h-11
              items-center
              justify-center
              rounded-full
              bg-sky-900
              px-6
              py-3
              text-base
              font-semibold
              leading-6
              text-white
              shadow-md
              transition-all
              hover:bg-sky-950
            "
            onClick={closeAllMegaMenus}
          >
            Request a demo
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() =>
            setIsMobileMenuOpen((previous) => !previous)
          }
          className="
            p-2
            text-neutral-800
            focus:outline-none
            md:hidden
            dark:text-slate-100
          "
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}

      {isMobileMenuOpen && (
        <div
          className="
            border-b
            border-neutral-200
            bg-white
            px-8
            py-6
            shadow-lg
            md:hidden
            dark:border-slate-800
            dark:bg-slate-950
          "
        >
          <nav className="flex flex-col gap-4">
            <Link
              href="/product"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                text-base
                font-medium
                text-neutral-800
                hover:text-sky-900
                dark:text-slate-100
              "
            >
              Product
            </Link>

            <Link
              href="/solutions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                text-base
                font-medium
                text-neutral-800
                hover:text-sky-900
                dark:text-slate-100
              "
            >
              Solutions
            </Link>

            <Link
              href="/trust-governance"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                text-base
                font-medium
                text-neutral-800
                hover:text-sky-900
                dark:text-slate-100
              "
            >
              Trust &amp; Governance
            </Link>

            <Link
              href="/enterprise"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                text-base
                font-medium
                text-neutral-800
                hover:text-sky-900
                dark:text-slate-100
              "
            >
              Enterprise
            </Link>

            <Link
              href="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                text-base
                font-medium
                text-neutral-800
                hover:text-sky-900
                dark:text-slate-100
              "
            >
              Pricings
            </Link>

            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                text-base
                font-medium
                text-neutral-800
                hover:text-sky-900
                dark:text-slate-100
              "
            >
              Resources
            </Link>
          </nav>

          {/* MOBILE BUTTONS */}

          <div
            className="
              mt-6
              flex
              flex-col
              gap-3
              border-t
              border-neutral-100
              pt-5
              dark:border-slate-800
            "
          >
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                flex
                h-11
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-neutral-200
                bg-neutral-50
                px-6
                text-base
                font-semibold
                text-neutral-800
                transition-all
                hover:bg-neutral-100
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-100
              "
            >
              Log In
            </Link>

            <Link
              href="/request-a-demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                flex
                h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-sky-900
                px-6
                text-base
                font-semibold
                text-white
                shadow-md
                transition-all
                hover:bg-sky-950
              "
            >
              Request a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}