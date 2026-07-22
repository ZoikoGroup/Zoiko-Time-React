import React from "react";
import Link from "next/link";

export default function EnterpriseReviewCTA() {
  return (
    <section
      className="
        w-full
        bg-gradient-to-br
        from-slate-800
        to-blue-950
        px-5
        py-[79px]
      "
    >

      <div className="max-w-[1440px] mx-auto text-center">

        {/* Label */}
        <div
          className="
            text-teal-600
            text-base
            font-semibold
            uppercase
            leading-6
            tracking-[2.56px]
          "
        >
          Enterprise Review
        </div>


        {/* Heading */}
        <h2
          className="
            mt-8
            text-3xl
            md:text-4xl
            font-bold
            leading-[56px]
            text-white
          "
        >
          Need security information for enterprise
          <br className="hidden md:block" />
          review?
        </h2>


        {/* Description */}
        <p
          className="
            mt-5
            max-w-[590px]
            mx-auto
            text-base
            font-normal
            leading-6
            text-white/80
          "
        >
          ZoikoTime can support qualified security, procurement, legal, privacy,
          and implementation reviews through the enterprise sales process.
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
  <Link
    href="/contact-sales"
    className="
      flex
      items-center
      justify-center
      w-40
      h-11
      bg-teal-600
      rounded-[10px]
      shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)]
      text-white
      text-base
      font-semibold
      leading-4
    "
  >
    Contact Sales
  </Link>

  <Link
    href="/enterprise-readiness"
    className="
      flex
      items-center
      justify-center
      w-64
      h-11
      bg-white/10
      rounded-[10px]
      border
      border-white/30
      text-white
      text-base
      font-semibold
      leading-4
    "
  >
    View Enterprise Readiness
  </Link>
</div>

      </div>

    </section>
  );
}