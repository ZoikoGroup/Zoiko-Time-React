import Link from "next/link";
export default function PrivacyControls() {
  const badges = [
    "Privacy-by-Design",
    "Data Minimisation",
    "User Rights Support",
    "Policy-Driven Controls",
    "Regulatory Alignment",
  ];

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-teal-50
        to-white
        dark:from-slate-950
        dark:to-slate-900
        transition-colors
      "
    >

      <div
        className="
          max-w-[1200px]
          mx-auto
          px-5
          py-14
          text-center
        "
      >

        {/* Label */}
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-teal-600
          "
        >
          Privacy Controls
        </p>


        {/* Heading */}
        <h1
          className="
            mt-10
            text-3xl
            md:text-5xl
            font-extrabold
            leading-tight
            text-slate-900
            dark:text-white
          "
        >
          Privacy Built Into{" "}
          <span className="text-teal-600">
            System Design
          </span>{" "}
          Governed,
          <br className="hidden md:block" />
          Controlled, and Transparent
        </h1>



        {/* Description */}
        <p
          className="
            mt-8
            text-base
            text-slate-500
            dark:text-slate-400
            leading-7
          "
        >
          ZoikoTime enables organisations to manage workforce data responsibly
          through policy-driven controls, transparent
          <br className="hidden md:block" />
          practices, and alignment with global privacy standards.
        </p>



        {/* Notice Box */}
        <div
          className="
            mt-10
            mx-auto
            max-w-[1028px]
            bg-emerald-50
            dark:bg-emerald-950/30
            rounded-xl
            border
            border-teal-600/20
            px-6
            py-5
          "
        >
          <p
            className="
              text-sm
              font-bold
              text-teal-700
              dark:text-teal-400
              leading-5
            "
          >
            ZoikoTime is not a surveillance system. It operates within
            employer-defined policies and is designed to support lawful,
            transparent, and accountable workforce management.
          </p>
        </div>



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
  href="/privacy-controls#privacy-framework"
  className="
    inline-flex
    items-center
    justify-center
    w-full
    sm:w-80
    h-12
    rounded-md
    bg-teal-600
    px-6
    text-base
    font-semibold
    text-white
    shadow-[0px_4px_14px_rgba(0,157,140,0.28)]
    transition
    hover:bg-teal-700
  "
>
  View Privacy Framework
</Link>


          <Link
  href="/privacy-controls#contact-privacy-team"
  className="
    inline-flex
    items-center
    justify-center
    w-full
    sm:w-80
    h-12
    rounded-md
    border
    border-slate-200
    bg-white
    px-6
    text-base
    font-medium
    text-slate-700
    transition
    hover:bg-slate-50
    dark:border-slate-700
    dark:bg-slate-900
    dark:text-slate-300
    dark:hover:bg-slate-800
  "
>
  Contact Privacy Team
</Link>
        </div>



        {/* Badges */}
        <div
          className="
            mt-16
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >

          {badges.map((badge, index) => (
            <div
              key={index}
              className="
                h-9
                px-5
                flex
                items-center
                gap-2
                bg-white
                dark:bg-slate-900
                rounded-full
                border
                border-slate-200
                dark:border-slate-700
                shadow-sm
              "
            >

              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-teal-600
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  text-slate-700
                  dark:text-slate-300
                "
              >
                {badge}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}