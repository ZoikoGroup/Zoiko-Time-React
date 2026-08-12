import Link from "next/link";

export default function ChooseYourPath() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-6
        py-20
      "
    >
      {/* Background gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white/5
          to-white/0
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1180px]
          flex-col
          items-center
          gap-4
          text-center
        "
      >

        {/* Label */}
        <p
          className="
            text-base
            font-semibold
            uppercase
            tracking-[2.56px]
            text-teal-600
          "
        >
          Choose Your Path
        </p>


        {/* Heading */}
        <h2
          className="
            max-w-[760px]
            pt-3.5
            text-3xl
            font-bold
            leading-tight
            text-white
            lg:text-4xl
            lg:leading-[56px]
          "
        >
          See the full workforce record lifecycle in
          <br className="hidden lg:block" />
          your own context
        </h2>


        {/* Description */}
        <p
          className="
            max-w-[600px]
            text-base
            leading-6
            text-white/80
          "
        >
          Start a self-serve evaluation, review integration and governance
          needs with the enterprise team, or head to the Product Overview.
        </p>


        {/* Buttons */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-3.5
            pt-3.5
          "
        >
          <Link
            href="/start-free"
            className="
              rounded-[10px]
              bg-teal-600
              px-6
              py-3.5
              text-base
              font-semibold
              text-white
              shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)]
              transition
              hover:bg-teal-500
            "
          >
            Start Free
          </Link>


          <Link
            href="/request-enterprise-demo"
            className="
              rounded-[10px]
              border
              border-white/30
              bg-white/10
              px-6
              py-3.5
              text-base
              font-semibold
              text-white
              transition
              hover:bg-white/20
            "
          >
            Request Enterprise Demo
          </Link>


          <Link
            href="https://getzoikotime.com/"
            className="
              rounded-[10px]
              border
              border-white/30
              bg-white/10
              px-6
              py-3.5
              text-base
              font-semibold
              text-white
              transition
              hover:bg-white/20
            "
          >
            Explore ZoikoTime
          </Link>
        </div>


        {/* Trial note */}
        <p
          className="
            max-w-[600px]
            pt-1.5
            text-xs
            leading-5
            text-white/70
          "
        >
          30-day trial for eligible plans · Existing customers can reach apps,
          approvals, reporting, help, and status without starting a lead form.
        </p>


        {/* Privacy note */}
        <p
          className="
            max-w-[600px]
            pt-3.5
            text-xs
            leading-5
            text-white/60
          "
        >
          No screenshots, keystroke content, URL history, application-name
          monitoring, or clipboard collection under any tier or configuration.
        </p>

      </div>
    </section>
  );
}
