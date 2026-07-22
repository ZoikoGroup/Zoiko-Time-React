import React from "react";
import Link from "next/link";

export default function HelpCTA() {
  return (
    <section
      className="
        w-full
        bg-gradient-to-br
        from-slate-800
        to-blue-950
        dark:from-slate-950
        dark:to-slate-900
        py-16
        sm:py-20
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-5
          sm:px-8
          text-center
        "
      >
        {/* Heading */}
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.16em]
            text-teal-500
          "
        >
          We're Here to Help
        </p>

        <h2
          className="
            mt-5
            text-3xl
            sm:text-4xl
            font-bold
            leading-tight
            text-white
          "
        >
          Need help understanding ZoikoTime?
        </h2>

        <p
          className="
            mt-5
            max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            leading-7
            text-white/80
          "
        >
          Search the Help Center for step-by-step guidance, or review the
          product documentation for more detail.
        </p>

        {/* Buttons */}
<div
  className="
    mt-10
    flex
    flex-col
    sm:flex-row
    justify-center
    items-center
    gap-4
  "
>
  <Link
    href="/help-center"
    className="
      w-full
      sm:w-auto
      px-7
      py-3
      rounded-lg
      bg-teal-600
      hover:bg-teal-700
      text-white
      font-semibold
      transition-colors
      shadow-lg
      flex
      items-center
      justify-center
      text-center
    "
  >
    Visit Help Center
  </Link>

  <Link
    href="/product-documentation"
    className="
      w-full
      sm:w-auto
      px-7
      py-3
      rounded-lg
      border
      border-white/30
      bg-white/10
      hover:bg-white/20
      text-white
      font-semibold
      transition-colors
      flex
      items-center
      justify-center
      text-center
    "
  >
    View Product Documentation
  </Link>
</div>
      </div>
    </section>
  );
}