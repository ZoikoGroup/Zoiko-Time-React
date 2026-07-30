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

  const [
    isTrustGovernanceMenuOpen,
    setIsTrustGovernanceMenuOpen,
  ] = useState(false);

  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);

  const [isEnterpriseMenuOpen, setIsEnterpriseMenuOpen] = useState(false);

  const productMenuRef = useRef<HTMLDivElement>(null);

  const solutionsMenuRef = useRef<HTMLDivElement>(null);

  const trustGovernanceMenuRef = useRef<HTMLDivElement>(null);

  const resourcesMenuRef = useRef<HTMLDivElement>(null);

  const enterpriseMenuRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  ========================================================= */

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

  /* =========================================================
     CLOSE ALL MEGA MENUS
  ========================================================= */

  const closeAllMegaMenus = () => {
    setIsProductMenuOpen(false);
    setIsSolutionsMenuOpen(false);
    setIsTrustGovernanceMenuOpen(false);
    setIsResourcesMenuOpen(false);
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
        {/* =====================================================
            LOGO
        ====================================================== */}

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
            priority
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden items-center gap-8 md:flex">

          {/* ===================================================
              PRODUCT
          ==================================================== */}

          <div
            ref={productMenuRef}
            className="relative flex h-full items-center"
          >
            <div className="flex items-center gap-1">
              <Link
                href="/product"
                className="
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  text-neutral-800
                  transition-colors
                  hover:text-sky-900
                  dark:text-slate-100
                  dark:hover:text-sky-400
                "
              >
                Product
              </Link>

              <button
                type="button"
                onClick={() => {
                  setIsProductMenuOpen((previous) => !previous);

                  setIsSolutionsMenuOpen(false);
                  setIsTrustGovernanceMenuOpen(false);
                  setIsResourcesMenuOpen(false);
                  setIsEnterpriseMenuOpen(false);
                }}
                className="
                  flex
                  items-center
                  justify-center
                  text-neutral-800
                  transition-colors
                  hover:text-sky-900
                  focus:outline-none
                  dark:text-slate-100
                  dark:hover:text-sky-400
                "
                aria-label="Toggle Product menu"
                aria-expanded={isProductMenuOpen}
              >
                <ChevronDown
                  className={`
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    ${isProductMenuOpen ? "rotate-180" : ""}
                  `}
                />
              </button>
            </div>

            <ProductMegaMenu isOpen={isProductMenuOpen} />
          </div>

          {/* ===================================================
              SOLUTIONS
          ==================================================== */}

          <div
            ref={solutionsMenuRef}
            className="relative flex h-full items-center"
          >
            <div className="flex items-center gap-1">
              <Link
                href="/solutions"
                className="
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  text-neutral-800
                  transition-colors
                  hover:text-sky-900
                  dark:text-slate-100
                  dark:hover:text-sky-400
                "
              >
                Solutions
              </Link>

              <button
                type="button"
                onClick={() => {
                  setIsSolutionsMenuOpen((previous) => !previous);

                  setIsProductMenuOpen(false);
                  setIsTrustGovernanceMenuOpen(false);
                  setIsResourcesMenuOpen(false);
                  setIsEnterpriseMenuOpen(false);
                }}
                className="
                  flex
                  items-center
                  justify-center
                  text-neutral-800
                  transition-colors
                  hover:text-sky-900
                  focus:outline-none
                  dark:text-slate-100
                  dark:hover:text-sky-400
                "
                aria-label="Toggle Solutions menu"
                aria-expanded={isSolutionsMenuOpen}
              >
                <ChevronDown
                  className={`
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    ${isSolutionsMenuOpen ? "rotate-180" : ""}
                  `}
                />
              </button>
            </div>

            <SolutionsMegaMenu isOpen={isSolutionsMenuOpen} />
          </div>

          {/* ===================================================
              TRUST & GOVERNANCE
          ==================================================== */}

          <div
            ref={trustGovernanceMenuRef}
            className="relative flex h-full items-center"
          >
            <div className="flex items-center gap-1">
              <Link
                href="/trust-governance"
                className="
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
                "
              >
                Trust &amp; Governance
              </Link>

              <button
                type="button"
                onClick={() => {
                  setIsTrustGovernanceMenuOpen(
                    (previous) => !previous
                  );

                  setIsProductMenuOpen(false);
                  setIsSolutionsMenuOpen(false);
                  setIsResourcesMenuOpen(false);
                  setIsEnterpriseMenuOpen(false);
                }}
                className="
                  flex
                  items-center
                  justify-center
                  text-neutral-800
                  transition-colors
                  hover:text-sky-900
                  focus:outline-none
                  dark:text-slate-100
                  dark:hover:text-sky-400
                "
                aria-label="Toggle Trust and Governance menu"
                aria-expanded={isTrustGovernanceMenuOpen}
              >
                <ChevronDown
                  className={`
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    ${
                      isTrustGovernanceMenuOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>
            </div>

            <TrustGovernanceMegaMenu
              isOpen={isTrustGovernanceMenuOpen}
            />
          </div>

          {/* ===================================================
              ENTERPRISE
          ==================================================== */}

          <div
            ref={enterpriseMenuRef}
            className="relative flex h-full items-center"
          >
            <div className="flex items-center gap-1">
              <Link
                href="/enterprise"
                className="
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
                "
              >
                Enterprise
              </Link>

              <button
                type="button"
                onClick={() => {
                  setIsEnterpriseMenuOpen(
                    (previous) => !previous
                  );

                  setIsProductMenuOpen(false);
                  setIsSolutionsMenuOpen(false);
                  setIsTrustGovernanceMenuOpen(false);
                  setIsResourcesMenuOpen(false);
                }}
                className="
                  flex
                  items-center
                  justify-center
                  text-neutral-800
                  transition-colors
                  hover:text-sky-900
                  focus:outline-none
                  dark:text-slate-100
                  dark:hover:text-sky-400
                "
                aria-label="Toggle Enterprise menu"
                aria-expanded={isEnterpriseMenuOpen}
              >
                <ChevronDown
                  className={`
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    ${
                      isEnterpriseMenuOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>
            </div>

            <EnterpriseMegaMenu isOpen={isEnterpriseMenuOpen} />
          </div>

          {/* ===================================================
              PRICING
          ==================================================== */}

          <Link
            href="/pricing"
            className="
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
            "
            onClick={closeAllMegaMenus}
          >
            Pricings
          </Link>

          {/* ===================================================
              RESOURCES
          ==================================================== */}

          <div
            ref={resourcesMenuRef}
            className="relative flex h-full items-center"
          >
            <div className="flex items-center gap-1">
              <Link
                href="/resources"
                className="
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
                "
              >
                Resources
              </Link>

              <button
                type="button"
                onClick={() => {
                  setIsResourcesMenuOpen(
                    (previous) => !previous
                  );

                  setIsProductMenuOpen(false);
                  setIsSolutionsMenuOpen(false);
                  setIsTrustGovernanceMenuOpen(false);
                  setIsEnterpriseMenuOpen(false);
                }}
                className="
                  flex
                  items-center
                  justify-center
                  text-neutral-800
                  transition-colors
                  hover:text-sky-900
                  focus:outline-none
                  dark:text-slate-100
                  dark:hover:text-sky-400
                "
                aria-label="Toggle Resources menu"
                aria-expanded={isResourcesMenuOpen}
              >
                <ChevronDown
                  className={`
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    ${
                      isResourcesMenuOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>
            </div>

            <ResourcesMegaMenu isOpen={isResourcesMenuOpen} />
          </div>
        </nav>

        {/* =====================================================
            DESKTOP ACTION BUTTONS
        ====================================================== */}

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

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

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

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}

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

          {/* Mobile buttons */}

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