"use client";
import Link from "next/link";

import React from "react";

export default function GovernanceCTA() {
  return (
    <section
      className="
      bg-gradient-to-br
      from-slate-800
      to-blue-950
      px-6
      py-20
      text-center
      "
    >

      {/* Label */}
      <p
        className="
        text-teal-600
        text-sm
        md:text-base
        font-semibold
        uppercase
        tracking-[0.16em]
        "
      >
        Due-Diligence Ready
      </p>


      {/* Heading */}
      <h2
        className="
        mt-12
        text-3xl
        md:text-4xl
        font-bold
        leading-[1.4]
        text-white
        "
      >
        Support accountable workforce
        <br className="hidden sm:block" />
        governance
      </h2>


      {/* Description */}
      <p
        className="
        mt-6
        max-w-xl
        mx-auto
        text-base
        leading-6
        text-white/80
        "
      >
        Download the regulator brief now, or request a governance demo to see
        the evidence model in action.
      </p>


      {/* Buttons */}
      <div
        className="
        mt-10
        flex
        flex-col
        sm:flex-row
        justify-center
        gap-4
        "
      >

        <button
  type="button"
  onClick={() => {
    document
      .getElementById("regulator-brief-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    w-full
    sm:w-64
    h-11
    flex
    items-center
    justify-center
    rounded-[10px]

    bg-teal-600
    hover:bg-teal-700

    text-white
    text-base
    font-semibold
    font-sans

    shadow-[0px_6px_16px_rgba(16,162,141,0.28)]

    transition
  "
>
  Download Regulator Brief
</button>

        <Link
  href="/request-a-demo"
  className="
    w-full
    sm:w-64
    h-11
    flex
    items-center
    justify-center
    rounded-[10px]

    bg-white/10
    border
    border-white/30

    text-white
    text-base
    font-semibold

    transition
    hover:bg-white/20

    dark:bg-white/10
    dark:border-white/30
    dark:text-white

    font-sans
  "
>
  Request Governance Demo
</Link>

      </div>

    </section>
  );
}