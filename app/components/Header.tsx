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
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const toggleMobileAccordion = (section: string) => {
    setOpenMobileAccordion((prev) => (prev === section ? null : section));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileAccordion(null);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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

            <ProductMegaMenu
              isOpen={isProductMenuOpen}
              onLinkClick={closeAllMegaMenus}
            />
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

            <SolutionsMegaMenu
              isOpen={isSolutionsMenuOpen}
              onLinkClick={closeAllMegaMenus}
            />
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
              onLinkClick={closeAllMegaMenus}
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

            <EnterpriseMegaMenu
              isOpen={isEnterpriseMenuOpen}
              onLinkClick={closeAllMegaMenus}
            />
          </div>

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

            <ResourcesMegaMenu
              isOpen={isResourcesMenuOpen}
              onLinkClick={closeAllMegaMenus}
            />
          </div>
        </nav>

        {/* DESKTOP ACTION BUTTONS */}

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://getzoikotime.com/start"
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
          >
            Log In
          </a>

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
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
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
            fixed
            inset-x-0
            top-[96px]
            bottom-0
            z-50
            flex
            flex-col
            justify-between
            overflow-y-auto
            bg-white
            px-6
            py-6
            shadow-xl
            md:hidden
            dark:bg-slate-950
          "
        >
          <nav className="flex flex-col gap-2">
            {/* PRODUCTS */}
            <div className="border-b border-neutral-100 dark:border-slate-800/80 pb-3">
              <div className="flex items-center justify-between py-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("products")}
                  className="flex items-center gap-2.5 text-left text-base font-semibold text-neutral-800 hover:text-sky-900 dark:text-slate-100 dark:hover:text-sky-400"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-sky-400 shrink-0" />
                  <span>Products</span>
                </button>
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("products")}
                  className="p-1.5 text-neutral-500 hover:text-neutral-800 dark:text-slate-400 dark:hover:text-slate-200"
                  aria-label="Toggle Products menu"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openMobileAccordion === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {openMobileAccordion === "products" && (
                <div className="mt-2 ml-4 flex flex-col gap-4 border-l-2 border-sky-100 dark:border-slate-800 pl-4 py-2 text-sm">
                  {/* Platform */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                      Platform
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/product" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Product Overview
                      </Link>
                      <Link href="/how-zoikotime-works" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        How ZoikoTime Works
                      </Link>
                      <Link href="/operating-model" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Operating Model
                      </Link>
                      <Link href="/desktop-and-mobile-apps" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Desktop & Mobile Apps
                      </Link>
                      <Link href="/zoiko-sema-integration" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Zoiko Sema Integration
                      </Link>
                      <Link href="/kairos-assistant" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Kairos Assistant
                      </Link>
                    </div>
                  </div>

                  {/* Time & Attendance */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                      Time & Attendance
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/time-and-activity-verification" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Time and activity verification
                      </Link>
                      <Link href="/time-sheet-approvals" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Timesheets & Approvals
                      </Link>
                      <Link href="/verify-time-attendance" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Attendance & Presence
                      </Link>
                      <Link href="/break-rest-compliance" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Break & Rest Compliance
                      </Link>
                      <Link href="/shift-integrity-controls" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Shift Integrity Controls
                      </Link>
                    </div>
                  </div>

                  {/* Truth & Evidence */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                      Truth & Evidence
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/deterministic-time-classification" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Deterministic Time Classification
                      </Link>
                      <Link href="/evidence-ledger" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Evidence Ledger
                      </Link>
                      <Link href="/workforce-record-insights" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Workforce Record Insights
                      </Link>
                      <Link href="/reports-dashboards" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Reports & Dashboards
                      </Link>
                      <Link href="/anomaly-flags-alerts" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Anomaly Flags & Alerts
                      </Link>
                    </div>
                  </div>

                  {/* Featured Action */}
                  <div className="pt-1">
                    <Link href="/explore-zoikotime" onClick={closeMobileMenu} className="inline-block font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                      Explore ZoikoTime →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* SOLUTIONS */}
            <div className="border-b border-neutral-100 dark:border-slate-800/80 pb-3">
              <div className="flex items-center justify-between py-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("solutions")}
                  className="flex items-center gap-2.5 text-left text-base font-semibold text-neutral-800 hover:text-sky-900 dark:text-slate-100 dark:hover:text-sky-400"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-sky-400 shrink-0" />
                  <span>Solutions</span>
                </button>
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("solutions")}
                  className="p-1.5 text-neutral-500 hover:text-neutral-800 dark:text-slate-400 dark:hover:text-slate-200"
                  aria-label="Toggle Solutions menu"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openMobileAccordion === "solutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {openMobileAccordion === "solutions" && (
                <div className="mt-2 ml-4 flex flex-col gap-4 border-l-2 border-sky-100 dark:border-slate-800 pl-4 py-2 text-sm">
                  {/* By Role */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      By Role
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/hr-people-teams" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        HR & People Teams
                      </Link>
                      <Link href="/finance-and-payroll-teams" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Finance & Payroll Teams
                      </Link>
                      <Link href="/operational-leaders" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Operations Leaders
                      </Link>
                      <Link href="/team-lead-managers" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Team Lead & Managers
                      </Link>
                      <Link href="/solutions-workers" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Workers
                      </Link>
                    </div>
                  </div>

                  {/* By Business Need */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      By Business Need
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/verify-time-attendance" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Verify Time & Attendance
                      </Link>
                      <Link href="/improve-payroll-accuracy" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Improve Payroll Accuracy
                      </Link>
                      <Link href="/eliminate-time-disputes" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Eliminate Time Disputes
                      </Link>
                      <Link href="/auditable-time-records" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Create Auditable Time Records
                      </Link>
                      <Link href="/control-project-time-and-cost" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Control Project Time & Cost
                      </Link>
                      <Link href="/manage-remote-hybrid-work" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Manage Remote & Hybrid Work
                      </Link>
                    </div>
                  </div>

                  {/* By Environment */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      By Environment
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/remote-teams" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Remote Teams
                      </Link>
                      <Link href="/hybrid-workforces" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Hybrid Workforces
                      </Link>
                      <Link href="/contractor-heavy-workforces" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Contractor-Heavy Workforces
                      </Link>
                      <Link href="/project-based" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Project-Based Businesses
                      </Link>
                      <Link href="/global-workforces" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Global Workforces
                      </Link>
                    </div>
                  </div>

                  {/* Featured Action */}
                  <div className="pt-1">
                    <Link href="/download-zoiko-time" onClick={closeMobileMenu} className="inline-block font-semibold text-teal-600 dark:text-teal-400 hover:underline">
                      Download Zoiko Time →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* TRUST & GOVERNANCE */}
            <div className="border-b border-neutral-100 dark:border-slate-800/80 pb-3">
              <div className="flex items-center justify-between py-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("trustGovernance")}
                  className="flex items-center gap-2.5 text-left text-base font-semibold text-neutral-800 hover:text-sky-900 dark:text-slate-100 dark:hover:text-sky-400"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-sky-400 shrink-0" />
                  <span>Trust &amp; Governance</span>
                </button>
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("trustGovernance")}
                  className="p-1.5 text-neutral-500 hover:text-neutral-800 dark:text-slate-400 dark:hover:text-slate-200"
                  aria-label="Toggle Trust & Governance menu"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openMobileAccordion === "trustGovernance" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {openMobileAccordion === "trustGovernance" && (
                <div className="mt-2 ml-4 flex flex-col gap-4 border-l-2 border-sky-100 dark:border-slate-800 pl-4 py-2 text-sm">
                  {/* Trust */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      Trust
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/trust-center" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Trust Center
                      </Link>
                      <Link href="/security" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Security
                      </Link>
                      <Link href="/privacy" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Privacy
                      </Link>
                      <Link href="/platform-reliability" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Platform Reliability
                      </Link>
                      <Link href="/system-status" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        System Status
                      </Link>
                    </div>
                  </div>

                  {/* Governance */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      Governance
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/human-in-command" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Human-in-Command Controls
                      </Link>
                      <Link href="/ethical-design" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Ethical Design Principles
                      </Link>
                      <Link href="/ai-governance" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        AI Governance
                      </Link>
                      <Link href="/administrative-controls" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Administrative Controls
                      </Link>
                    </div>
                  </div>

                  {/* Assurance */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      Assurance
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/compliance-assurance" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Compliance & Assurance
                      </Link>
                      <Link href="/works-council-consultation" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Works-Council & Consultation Resources
                      </Link>
                      <Link href="/accessibility" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Accessibility
                      </Link>
                      <Link href="/responsible-disclosure" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Responsible Disclosure
                      </Link>
                      <Link href="/data-location-residency" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Data Location & Residency
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ENTERPRISE */}
            <div className="border-b border-neutral-100 dark:border-slate-800/80 pb-3">
              <div className="flex items-center justify-between py-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("enterprise")}
                  className="flex items-center gap-2.5 text-left text-base font-semibold text-neutral-800 hover:text-sky-900 dark:text-slate-100 dark:hover:text-sky-400"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-sky-400 shrink-0" />
                  <span>Enterprise</span>
                </button>
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("enterprise")}
                  className="p-1.5 text-neutral-500 hover:text-neutral-800 dark:text-slate-400 dark:hover:text-slate-200"
                  aria-label="Toggle Enterprise menu"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openMobileAccordion === "enterprise" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {openMobileAccordion === "enterprise" && (
                <div className="mt-2 ml-4 flex flex-col gap-4 border-l-2 border-sky-100 dark:border-slate-800 pl-4 py-2 text-sm">
                  {/* Platform */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      Enterprise Platform
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/enterprise" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Enterprise Overview
                      </Link>
                      <Link href="/adminstration-policy-controls" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Administration & Policy Controls
                      </Link>
                      <Link href="/identity-access-management" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Identity & Access Management
                      </Link>
                      <Link href="/enterprise-integrations" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Enterprise Integrations
                      </Link>
                      <Link href="/analytics-reporting" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Analytics & Reporting
                      </Link>
                      <Link href="/global-deployment" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Global Deployment
                      </Link>
                    </div>
                  </div>

                  {/* Adoption & Support */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      Adoption & Support
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/implementation-services" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Implementation Services
                      </Link>
                      <Link href="/data-migration" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Data Migration
                      </Link>
                      <Link href="/customer-success" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Customer Success
                      </Link>
                      <Link href="/training-adoption" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Training & Adoption
                      </Link>
                      <Link href="/enterprise-support" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Enterprise Support
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PRICING (Direct link) */}
            <div className="border-b border-neutral-100 dark:border-slate-800/80 pb-3">
              <div className="flex items-center justify-between py-2">
                <Link
                  href="/pricing"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2.5 text-base font-semibold text-neutral-800 hover:text-sky-900 dark:text-slate-100 dark:hover:text-sky-400"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-sky-400 shrink-0" />
                  <span>Pricing</span>
                </Link>
              </div>
            </div>

            {/* RESOURCES */}
            <div className="border-b border-neutral-100 dark:border-slate-800/80 pb-3">
              <div className="flex items-center justify-between py-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("resources")}
                  className="flex items-center gap-2.5 text-left text-base font-semibold text-neutral-800 hover:text-sky-900 dark:text-slate-100 dark:hover:text-sky-400"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-sky-400 shrink-0" />
                  <span>Resources</span>
                </button>
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion("resources")}
                  className="p-1.5 text-neutral-500 hover:text-neutral-800 dark:text-slate-400 dark:hover:text-slate-200"
                  aria-label="Toggle Resources menu"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openMobileAccordion === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {openMobileAccordion === "resources" && (
                <div className="mt-2 ml-4 flex flex-col gap-4 border-l-2 border-sky-100 dark:border-slate-800 pl-4 py-2 text-sm">
                  {/* Learn */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      Learn
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/resource-center" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Resource Center
                      </Link>
                      <Link href="/blog" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Blog & Insights
                      </Link>
                      <Link href="/guides" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Guides
                      </Link>
                      <Link href="/customer-stories" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Customer Stories
                      </Link>
                      <Link href="/webinars-and-events" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Webinars & Events
                      </Link>
                    </div>
                  </div>

                  {/* Use & Support */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                      Use & Support
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/getting-started" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Getting Started
                      </Link>
                      <Link href="/help-center" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Help Center
                      </Link>
                      <Link href="/product-documentation" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Product Documentation
                      </Link>
                      <Link href="/faqs" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Frequently Asked Questions
                      </Link>
                      <Link href="/video-tutorials" onClick={closeMobileMenu} className="text-neutral-700 hover:text-sky-900 dark:text-slate-300 dark:hover:text-sky-400">
                        Video Tutorials
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* MOBILE BUTTONS */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              border-t
              border-neutral-100
              pt-6
              dark:border-slate-800
            "
          >
            <a
              href="https://getzoikotime.com/start"
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
            </a>

            <Link
              href="/request-a-demo"
              onClick={closeMobileMenu}
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