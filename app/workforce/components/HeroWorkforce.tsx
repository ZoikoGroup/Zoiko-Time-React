  import Link from "next/link";
  import React from "react";const HeroWorkforce = () => {
  const features = [
    "Verified workforce records",
    "AI-assisted insights",
    "Human-governed decisions",
    "Audit-ready reporting",
    "Enterprise-ready controls",
  ];

  const bottomFeatures = [
    "Verified workforce records",
    "AI-assisted insights",
    "Human-governed decisions",
    "Audit-ready reporting",
  ];

  return (
    <section
      className="
      relative w-full min-h-[808px] 
      overflow-hidden
      bg-emerald-50
      dark:bg-slate-950
      "
    >

      {/* Background Glow */}
      <div
        className="
        absolute w-[480px] h-[480px]
        right-[-80px] top-[-80px]
        bg-radial from-teal-500/10 
        to-transparent
        "
      />

      <div
        className="
        absolute w-96 h-72
        left-[-60px] bottom-[160px]
        bg-radial from-indigo-500/10
        to-transparent
        "
      />


      {/* Main Wrapper */}
      <div
        className="
        max-w-[1052px]
        mx-auto
        relative
        pt-[112px]

        lg:h-[747px]

        px-6
        lg:px-0
        "
      >


        {/* Badge */}
        <div
          className="
          w-fit lg:w-72
          h-6
          px-4 lg:px-0
          rounded-full
          flex items-center justify-center
          bg-teal-500/10
          border border-teal-500/20
          "
        >
          <span
            className="
            text-teal-600
            dark:text-teal-400
            text-xs
            font-bold
            uppercase
            tracking-wider
            "
          >
            Workforce Intelligence Software
          </span>
        </div>



        {/* Heading */}
        <h1
          className="
          mt-4
          w-full
          lg:w-[485px]
          text-4xl
          lg:text-5xl
          font-semibold
          leading-tight
          lg:leading-[55px]
          text-stone-950
          dark:text-white
          "
        >
          Turn Workforce
          <br />
          Activity Into Trusted
          <br />
          Business Intelligence
        </h1>



        {/* Description */}
        <p
          className="
          mt-6
          w-full
          lg:w-[487px]
          text-base
          leading-7
          text-neutral-700
          dark:text-slate-300
          "
        >
          ZoikoTime helps organizations verify time, understand work
          patterns, identify exceptions, strengthen payroll confidence,
          and make workforce decisions with evidence-backed clarity.
        </p>




        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-5">
  {/* Request a Demo */}
  <Link
    href="/request-a-demo"
    className="
      flex
      h-12
      w-44
      items-center
      justify-center
      rounded-lg
      bg-teal-600
      font-semibold
      text-white
      shadow-[0px_4px_20px_0px_rgba(0,157,140,0.40)]
      transition
      hover:bg-teal-700
    "
  >
    Request a Demo
  </Link>

  {/* Start Free Trial */}
<Link
  href="/request-a-demo"
  className="
    flex
    h-12
    w-36
    items-center
    justify-center
    rounded-lg
    border
    border-slate-300
    font-medium
    text-slate-700
    transition
    hover:bg-slate-100
    dark:border-white/20
    dark:text-white/80
    dark:hover:bg-white/10
  "
>
  Start Free Trial
</Link>
</div>





        {/* Feature Pills */}
        <div
          className="
          mt-6
          flex
          flex-wrap
          gap-2
          max-w-[470px]
          "
        >

          {features.map((item)=>(
            <div
              key={item}
              className="
              h-6
              px-3
              flex
              items-center
              gap-2
              rounded-full
              bg-white/50
              dark:bg-white/5
              border
              border-teal-600
              "
            >

              <span className="text-teal-500 text-xs">
                ✓
              </span>

              <span
                className="
                text-xs
                font-semibold
                text-teal-600
                dark:text-teal-400
                "
              >
                {item}
              </span>

            </div>
          ))}

        </div>


      </div>





      {/* Hero Image */}

      <div
  className="
    hidden lg:block
    absolute
    left-[calc(50%+34px)]
    top-[165px]
    w-[540px]
    h-[425px]
    overflow-hidden
    rounded-[28px]
  "
>
  <img
    src="/hero-workforce/hero-workforce.png"
    alt="Workforce Intelligence"
    className="
      w-full
      h-full
      object-cover
    "
  />
</div>





      {/* Bottom Bar */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-16
        bg-teal-600
        hidden
        lg:flex
        items-center
        "
      >

        <div
          className="
          flex
          items-center
          gap-10
          ml-[194px]
          "
        >

        {bottomFeatures.map((item,index)=>(
          <React.Fragment key={item}>

            <div
              className="
              flex
              items-center
              gap-3
              "
            >

              <span
                className="
                w-1.5
                h-1.5
                rounded-full
                bg-teal-400
                "
              />

              <span
                className="
                text-white/60
                text-xs
                font-semibold
                "
              >
                {item}
              </span>

            </div>


            {index !== bottomFeatures.length-1 && (
              <span
                className="
                w-px
                h-5
                bg-white/10
                "
              />
            )}

          </React.Fragment>
        ))}


        </div>

      </div>


    </section>
  );
};


export default HeroWorkforce;                        