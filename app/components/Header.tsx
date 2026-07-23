'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Product', href: '/product' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Trust & Governance', href: '/trust-governance' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Pricings', href: 'pricing' },
    { label: 'Resources', href: 'resources' },
  ];

  return (
    <header className="w-full h-24 bg-white shadow-[0px_4px_8px_0px_rgba(196,196,196,0.08)] sticky top-0 z-50 transition-all">
      <div className="max-w-[1440px] h-full mx-auto px-8 flex items-center justify-between">
        
        {/* Left Section: Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/Frame 16.png"
              alt="ZoikoDigital"
              width={180}
              height={40}
            />
          </Link>
        </div>

        {/* Center Section: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-neutral-800 text-base font-medium leading-6 tracking-tight hover:text-sky-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="h-11 px-6 py-3 bg-neutral-50 rounded-full border border-neutral-200/50 shadow-[0px_0px_0px_0.5px_rgba(155,155,155,0.10)] flex justify-center items-center text-neutral-800 text-base font-semibold leading-6 [text-shadow:_0px_1px_2px_rgb(12_16_19_/_0.10)] hover:bg-neutral-100 transition-all"
          >
            Log In
          </Link>
          
          <Link
            href="/request-a-demo"
            className="h-11 px-6 py-3 bg-sky-900 rounded-full flex justify-center items-center text-white text-base font-semibold leading-6 [text-shadow:_1px_1px_1px_rgb(69_144_178_/_0.10)] hover:bg-sky-950 shadow-md transition-all"
          >
            Request a demo
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-neutral-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-8 py-6 flex flex-col gap-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-800 text-base font-medium leading-6 tracking-tight hover:text-sky-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-11 px-6 py-3 bg-neutral-50 rounded-full border border-neutral-200/50 shadow-[0px_0px_0px_0.5px_rgba(155,155,155,0.10)] flex justify-center items-center text-neutral-800 text-base font-semibold leading-6 hover:bg-neutral-100 transition-all w-full"
            >
              Log In
            </Link>
            <Link
              href="/request-a-demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-11 px-6 py-3 bg-sky-900 rounded-full flex justify-center items-center text-white text-base font-semibold leading-6 hover:bg-sky-950 shadow-md transition-all w-full"
            >
              Request a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}