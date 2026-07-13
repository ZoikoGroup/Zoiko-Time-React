export default function PrivacyPositioning() {
  return (
    <section
      className="
        w-full
        bg-slate-100
        dark:bg-slate-950
        transition-colors
      "
    >

      <div
        className="
          max-w-[1100px]
          mx-auto
          px-5
          py-20
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center
        "
      >

        {/* Left Content */}
        <div>

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
            Privacy Positioning
          </p>


          {/* Heading */}
          <h2
            className="
              mt-6
              text-3xl
              md:text-4xl
              font-bold
              leading-10
              text-slate-900
              dark:text-white
            "
          >
            Privacy as a System-Level
            <br className="hidden md:block" />
            Requirement
          </h2>


          {/* Paragraph 1 */}
          <p
            className="
              mt-8
              text-base
              text-slate-500
              dark:text-slate-400
              leading-7
            "
          >
            ZoikoTime embeds privacy into system design, ensuring that
            <br className="hidden md:block" />
            data collection, processing, and access are governed by
            <br className="hidden md:block" />
            policy, constrained by purpose, and supported by user rights
            <br className="hidden md:block" />
            — from the first line of code to the final evidence record.
          </p>


          {/* Paragraph 2 */}
          <p
            className="
              mt-8
              text-base
              text-slate-500
              dark:text-slate-400
              leading-7
            "
          >
            Privacy controls are not a feature set that can be toggled off.
            <br className="hidden md:block" />
            They are architectural requirements that cannot be bypassed
            <br className="hidden md:block" />
            by configuration, individual discretion, or operator policy.
          </p>

        </div>



        {/* Right Card */}
        <div
          className="
            bg-emerald-50
            dark:bg-emerald-950/30
            rounded-xl
            p-6
            border
            border-teal-600/10
          "
        >

          <h3
            className="
              text-base
              font-bold
              leading-6
              text-teal-500
            "
          >
            Privacy is enforced through system design, not
            <br className="hidden md:block" />
            dependent on individual discretion.
          </h3>


          <p
            className="
              mt-8
              text-sm
              text-slate-500
              dark:text-slate-400
              leading-6
            "
          >
            This means every privacy control has three properties: it is
            enforced at architecture level; it cannot be bypassed by user or
            admin action; and it is continuously validated to confirm it is
            functioning as designed. These are verifiable system properties —
            not policy statements.
          </p>


        </div>


      </div>

    </section>
  );
}