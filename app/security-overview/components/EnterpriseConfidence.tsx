export default function EnterpriseConfidence() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-emerald-50
        dark:bg-emerald-950/30
        transition-colors
      "
    >

      {/* Top Gradient Line */}
      <div
        className="
          h-[3px]
          w-full
          bg-gradient-to-r
          from-teal-600
          via-teal-500
          to-teal-600
        "
      />


      <div
        className="
          max-w-[900px]
          mx-auto
          text-center
          px-5
          py-24
        "
      >

        {/* Small Heading */}
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-teal-500
          "
        >
          Enterprise Confidence
        </p>


        {/* Main Heading */}
        <h2
          className="
            mt-8
            text-3xl
            md:text-4xl
            font-extrabold
            leading-tight
            text-slate-900
            dark:text-white
          "
        >
          Security Designed for{" "}
          <span className="text-teal-500">
            Enterprise
            <br className="hidden md:block" />
            Confidence
          </span>
        </h2>


        {/* Description */}
        <p
          className="
            mt-8
            text-base
            text-slate-900/60
            dark:text-slate-300
            leading-7
          "
        >
          ZoikoTime provides the continuously validated security architecture,
          controls
          <br className="hidden md:block" />
          documentation, and audit-ready evidence that enterprise security
          teams,
          <br className="hidden md:block" />
          procurement reviewers, and regulators require.
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

          {/* Primary Button */}
          <button
            className="
              h-12
              px-8
              rounded-lg
              bg-teal-600
              text-white
              text-base
              font-semibold
              shadow-[0px_4px_14px_rgba(0,157,140,0.40)]
              hover:bg-teal-700
              transition
            "
          >
            Contact Security Team
          </button>



          {/* Secondary Button */}
          <button
            className="
              h-12
              px-8
              rounded-lg
              border
              border-teal-600
              text-teal-600
              dark:text-teal-400
              text-base
              font-medium
              hover:bg-teal-50
              dark:hover:bg-teal-950
              transition
            "
          >
            ↓ Download Security Overview
          </button>

        </div>

      </div>

    </section>
  );
}