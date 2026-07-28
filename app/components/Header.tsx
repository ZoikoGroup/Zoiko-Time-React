"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ProductMegaMenu from "./ProductMegaMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const productMenuRef = useRef<HTMLDivElement>(null);

  // Close Product dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productMenuRef.current &&
        !productMenuRef.current.contains(event.target as Node)
      ) {
        setIsProductMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { label: "Product", href: "/product" },
    { label: "Use Cases", href: "/use-cases" },
    {
      label: "Trust & Governance",
      href: "/trust-governance",
    },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Pricings", href: "/pricing" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <header className="w-full h-24 bg-white shadow-[0px_4px_8px_0px_rgba(196,196,196,0.08)] sticky top-0 z-50 transition-all">
      <div className="max-w-[1440px] h-full mx-auto px-8 flex items-center justify-between">

        {/* =====================================================
            LEFT - LOGO
        ====================================================== */}

        <div className="flex items-center gap-2 cursor-pointer">
          <Link
            href="/"
            className="flex items-center shrink-0"
          >
            <Image
              src="/images/Frame 16.png"
              alt="ZoikoDigital"
              width={180}
              height={40}
            />
          </Link>
        </div>

        {/* =====================================================
            CENTER - DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Product" ? (
              <div
                key={link.label}
                ref={productMenuRef}
                className="relative h-full flex items-center"
              >
                <div className="flex items-center gap-1">

                  {/* Product Text -> Product Page */}
                  <Link
                    href="/product"
                    className="
                      text-neutral-800
                      text-base
                      font-medium
                      leading-6
                      tracking-tight
                      hover:text-sky-900
                      transition-colors
                    "
                  >
                    Product
                  </Link>

                  {/* Chevron -> Dropdown Only */}
                  <button
                    type="button"
                    onClick={() =>
                      setIsProductMenuOpen((prev) => !prev)
                    }
                    className="
                      flex
                      items-center
                      justify-center
                      text-neutral-800
                      hover:text-sky-900
                      transition-colors
                      focus:outline-none
                    "
                    aria-label="Toggle Product dropdown"
                    aria-expanded={isProductMenuOpen}
                  >
                    <ChevronDown
                      className={`
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        ${
                          isProductMenuOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>
                </div>

                {/* Product Dropdown */}
                <ProductMegaMenu
                  isOpen={isProductMenuOpen}
                />
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="
                  text-neutral-800
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  hover:text-sky-900
                  transition-colors
                "
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* =====================================================
            RIGHT - DESKTOP BUTTONS
        ====================================================== */}

        <div className="hidden md:flex items-center gap-4">

          <Link
            href="/login"
            className="
              h-11
              px-6
              py-3
              bg-neutral-50
              rounded-full
              border
              border-neutral-200/50
              shadow-[0px_0px_0px_0.5px_rgba(155,155,155,0.10)]
              flex
              justify-center
              items-center
              text-neutral-800
              text-base
              font-semibold
              leading-6
              [text-shadow:_0px_1px_2px_rgb(12_16_19_/_0.10)]
              hover:bg-neutral-100
              transition-all
            "
          >
            Log In
          </Link>

          <Link
            href="/request-a-demo"
            className="
              h-11
              px-6
              py-3
              bg-sky-900
              rounded-full
              flex
              justify-center
              items-center
              text-white
              text-base
              font-semibold
              leading-6
              [text-shadow:_1px_1px_1px_rgb(69_144_178_/_0.10)]
              hover:bg-sky-950
              shadow-md
              transition-all
            "
          >
            Request a demo
          </Link>

        </div>

        {/* =====================================================
            MOBILE HAMBURGER
        ====================================================== */}

        <button
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
          className="
            md:hidden
            p-2
            text-neutral-800
            focus:outline-none
          "
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
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
              className="w-6 h-6"
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

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {isMobileMenuOpen && (
        <div
          className="
            md:hidden
            bg-white
            border-b
            border-neutral-200
            px-8
            py-6
            flex
            flex-col
            gap-4
            shadow-lg
          "
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="
                  text-neutral-800
                  text-base
                  font-medium
                  leading-6
                  tracking-tight
                  hover:text-sky-900
                  transition-colors
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className="
              flex
              flex-col
              gap-3
              pt-4
              border-t
              border-neutral-100
            "
          >
            <Link
              href="/login"
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              className="
                h-11
                px-6
                py-3
                bg-neutral-50
                rounded-full
                border
                border-neutral-200/50
                shadow-[0px_0px_0px_0.5px_rgba(155,155,155,0.10)]
                flex
                justify-center
                items-center
                text-neutral-800
                text-base
                font-semibold
                leading-6
                hover:bg-neutral-100
                transition-all
                w-full
              "
            >
              Log In
            </Link>

            <Link
              href="/request-a-demo"
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              className="
                h-11
                px-6
                py-3
                bg-sky-900
                rounded-full
                flex
                justify-center
                items-center
                text-white
                text-base
                font-semibold
                leading-6
                hover:bg-sky-950
                shadow-md
                transition-all
                w-full
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