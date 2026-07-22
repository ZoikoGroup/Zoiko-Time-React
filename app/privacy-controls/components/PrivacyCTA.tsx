"use client";

import Link from "next/link";

export default function PrivacyCTA() {
  return (
    <section className="w-full overflow-hidden bg-teal-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Top Gradient Line */}
      <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 text-center">

        {/* Label */}
        <div className="
          text-teal-600 dark:text-teal-400
          text-xs font-semibold
          uppercase tracking-wider
          leading-5
          font-sans
        ">
          Privacy First
        </div>


        {/* Heading */}
        <h2 className="
          mt-6
          text-3xl sm:text-4xl lg:text-5xl
          font-semibold
          leading-tight
          text-slate-900 dark:text-white
          font-sans
        ">
          Privacy Designed for{" "}
          <span className="text-teal-600 dark:text-teal-400">
            Trust,
            <br className="hidden sm:block" />
            Control, and Compliance
          </span>
        </h2>


        {/* Description */}
        <p className="
          mt-8
          max-w-[620px]
          mx-auto
          text-sm sm:text-base
          leading-7
          font-normal
          text-slate-600 dark:text-slate-300
          font-sans
        ">
          ZoikoTime provides the privacy-by-design architecture, compliance
          documentation, and user rights infrastructure needed to manage
          workforce data responsibly — across every jurisdiction, every
          workforce type, and every governance requirement.
        </p>


        {/* Buttons */}
        <div className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-4
        ">

          {/* Primary Button */}
<Link
  href="/privacy-controls#contact-privacy-team"
  className="
    flex
    h-12
    w-full
    sm:w-[250px]
    items-center
    justify-center
    rounded-md
    bg-teal-600
    px-6
    text-center
    text-sm
    sm:text-base
    font-medium
    font-sans
    text-white
    whitespace-nowrap
    shadow-[0_4px_14px_rgba(0,157,140,0.40)]
    transition
    hover:bg-teal-700
  "
>
  Contact Privacy Team
</Link>


          <Link
  href="/privacy-controls#download-privacy-overview"
  className="
    flex
    h-12
    w-full
    sm:w-[260px]
    items-center
    justify-center
    rounded-md
    border
    border-teal-600
    px-6
    text-center
    text-sm
    sm:text-base
    font-medium
    font-sans
    text-teal-600
    transition
    hover:bg-teal-100
    dark:border-teal-400
    dark:text-teal-400
    dark:hover:bg-slate-900
  "
>
  Download Privacy Overview
</Link>

        </div>

      </div>
    </section>
  );
}