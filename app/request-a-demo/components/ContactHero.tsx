import {
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="
      relative 
      overflow-hidden 
      bg-[#0B5650]
      dark:bg-black
    ">

      {/* Top Gradient */}
      <div className="
        absolute 
        inset-x-0 
        top-0 
        h-1 
        bg-gradient-to-r 
        from-teal-500 
        via-emerald-400 
        to-teal-500
      " />


      <div className="
        mx-auto 
        flex 
        max-w-7xl 
        flex-col 
        gap-12 
        px-5 
        py-12
        sm:px-8
        lg:flex-row 
        lg:items-start 
        lg:px-8
        lg:py-16
      ">


        {/* LEFT SIDE */}
        <div className="
          flex-1 
          text-white
        ">


          {/* Illustration */}
          <div className="
            relative 
            mx-auto 
            h-[260px]
            w-full
            max-w-[560px]
            sm:h-[340px]
            lg:h-[360px]
          ">


            {/* Background */}
            <img
              src="/ContactHero/Vector.png"
              alt=""
              className="
                absolute 
                inset-0 
                h-full 
                w-full 
                object-contain
              "
            />



            {/* Device */}
            <img
              src="/ContactHero/Device.png"
              alt="Device"
              className="
                absolute 
                left-1/2 
                top-[54%] 
                z-20
                w-[190px]
                sm:w-[250px]
                lg:w-[300px]
                -translate-x-1/2 
                -translate-y-1/2
              "
            />



            {/* Characters */}
            <img
              src="/ContactHero/Characters.png"
              alt="Characters"
              className="
                absolute 
                left-1/2 
                top-[50%] 
                z-30
                w-[140px]
                sm:w-[190px]
                lg:w-[225px]
                -translate-x-1/2 
                -translate-y-1/2
              "
            />



            {/* Customer Loyalty */}
            <img
              src="/ContactHero/Customer-loyalty.png"
              alt=""
              className="
                absolute 
                left-1/2 
                top-0 
                z-40
                w-[75px]
                sm:w-[100px]
                lg:w-[110px]
                -translate-x-1/2
              "
            />



            {/* Support */}
            <img
              src="/ContactHero/Support.png"
              alt=""
              className="
                absolute 
                left-0
                top-[70px]
                z-40
                w-[55px]
                sm:left-2
                sm:w-[70px]
                lg:w-[75px]
              "
            />



            {/* Improvement */}
            <img
              src="/ContactHero/Improvement.png"
              alt=""
              className="
                absolute 
                left-[10px]
                bottom-[20px]
                z-40
                w-[70px]
                sm:left-[25px]
                sm:w-[90px]
                lg:left-[30px]
                lg:w-[95px]
              "
            />



            {/* Quality */}
            <img
              src="/ContactHero/Quality.png"
              alt=""
              className="
                absolute 
                right-[5px]
                top-[110px]
                z-40
                w-[60px]
                sm:right-[15px]
                sm:w-[75px]
                lg:right-[18px]
                lg:w-[82px]
              "
            />


          </div>





          {/* Phone */}
          <div className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          ">

            <Phone className="
              h-6
              w-6
              text-teal-300
              sm:h-7
              sm:w-7
            " />


            <h3 className="
              text-center
              text-2xl
              font-bold
              sm:text-3xl
              lg:text-4xl
            ">
              Call Us at +1-800-484-5574
            </h3>


          </div>



          <div className="
            mt-8
            h-px
            w-full
            bg-white/15
          " />
          {/* Badge */}
          <div className="
            mt-10
            inline-flex
            items-center
            gap-2
          ">
            <ArrowRight className="h-4 w-4 text-teal-400" />

            <span className="
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-teal-300
              sm:text-sm
            ">
              TALK TO SALES
            </span>
          </div>

          {/* Heading */}
          <h1 className="
            mt-8
            max-w-[640px]
            text-3xl
            font-semibold
            leading-tight
            sm:text-4xl
            lg:text-5xl
          ">
            See how ZoikoTime turns workforce activity into{" "}
            <span className="text-teal-400">
              verified, defensible
            </span>{" "}
            work records.
          </h1>

          {/* Description */}
          <p className="
            mt-8
            max-w-[620px]
            text-base
            leading-7
            text-white/70
            sm:text-lg
            sm:leading-8
          ">
            Book a focused demo tailored to your workforce model,
            compliance needs, integrations, and rollout timeline.
          </p>

          {/* Checklist */}
          <div className="mt-10 space-y-5">

            <div className="flex items-start gap-4">
              <div className="
                mt-1
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-teal-400
              ">
                <Check className="h-4 w-4 text-teal-300" />
              </div>

              <p className="text-white/90">
                Verified work records your payroll, billing,
                and legal teams can trust.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="
                mt-1
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-teal-400
              ">
                <Check className="h-4 w-4 text-teal-300" />
              </div>

              <p className="text-white/90">
                Policy-aware accountability across time
                zones and jurisdictions.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="
                mt-1
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-teal-400
              ">
                <Check className="h-4 w-4 text-teal-300" />
              </div>

              <p className="text-white/90">
                Privacy-first transparency workers
                understand and accept.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="
                mt-1
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-teal-400
              ">
                <Check className="h-4 w-4 text-teal-300" />
              </div>

              <p className="text-white/90">
                Enterprise-ready compliance, audit trails,
                and evidence controls.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:max-w-[520px]">

          <div className="
            overflow-hidden
            rounded-[24px]
            bg-white
            shadow-2xl
            dark:bg-zinc-900
          ">

            {/* Header */}
            <div className="
              relative
              bg-[#0FA59A]
              px-6
              py-6
              sm:px-8
            ">

              <div className="
                absolute
                right-0
                top-0
                h-24
                w-24
                translate-x-8
                -translate-y-8
                rounded-full
                bg-white/10
              " />

              <h2 className="
                text-center
                text-xl
                font-bold
                text-white
                sm:text-2xl
              ">
                Book your 30-minute demo
              </h2>

              <p className="mt-2 text-center text-sm text-white/80">
                Most qualified teams can book a call immediately after submitting.
              </p>

            </div>

            {/* Form */}
            <form className="space-y-5 p-6 sm:p-8">

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Full name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      text-slate-900
                      outline-none
                      focus:border-teal-500
                      dark:border-zinc-700
                      dark:bg-zinc-800
                      dark:text-white
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                    Work email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      text-slate-900
                      outline-none
                      focus:border-teal-500
                      dark:border-zinc-700
                      dark:bg-zinc-800
                      dark:text-white
                    "
                  />
                </div>

              </div>
                            <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="
                    mb-2 
                    block 
                    text-sm 
                    font-semibold 
                    text-slate-900
                    dark:text-white
                  ">
                    Company <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      text-slate-900
                      outline-none
                      focus:border-teal-500
                      dark:border-zinc-700
                      dark:bg-zinc-800
                      dark:text-white
                    "
                  />
                </div>


                <div>
                  <label className="
                    mb-2 
                    block 
                    text-sm 
                    font-semibold 
                    text-slate-900
                    dark:text-white
                  ">
                    Company size <span className="text-red-500">*</span>
                  </label>

                  <select
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      text-slate-900
                      outline-none
                      focus:border-teal-500
                      dark:border-zinc-700
                      dark:bg-zinc-800
                      dark:text-white
                    "
                  >
                    <option>Select team size</option>
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>201–1000</option>
                    <option>1000+</option>
                  </select>
                </div>

              </div>




              {/* Role */}

              <div>
                <label className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-900
                  dark:text-white
                ">
                  Your role <span className="text-red-500">*</span>
                </label>


                <select
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-slate-900
                    outline-none
                    focus:border-teal-500
                    dark:border-zinc-700
                    dark:bg-zinc-800
                    dark:text-white
                  "
                >

                  <option>Select your role</option>
                  <option>Executive</option>
                  <option>HR</option>
                  <option>Operations</option>
                  <option>IT</option>
                  <option>Procurement</option>
                  <option>Legal</option>
                  <option>Other</option>

                </select>

              </div>





              {/* Message */}

              <div>

                <label className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-900
                  dark:text-white
                ">

                  Anything else?

                  <span className="
                    ml-1
                    text-xs
                    font-normal
                    text-slate-400
                  ">
                    (optional)
                  </span>

                </label>



                <textarea
                  rows={5}
                  placeholder="What challenges are you looking to solve? Payroll disputes, compliance, distributed teams, billing evidence..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-slate-900
                    outline-none
                    focus:border-teal-500
                    dark:border-zinc-700
                    dark:bg-zinc-800
                    dark:text-white
                  "
                />

              </div>






              {/* Privacy */}

              <p className="
                text-xs
                leading-6
                text-slate-500
                dark:text-slate-400
              ">

                We value your privacy. By submitting, you consent to
                ZoikoTime processing your data to contact you about our
                products and services.


                <span className="
                  font-medium
                  text-teal-700
                  dark:text-teal-400
                ">
                  {" "}
                  Privacy Statement
                </span>


                {" · "}


                <span className="
                  font-medium
                  text-teal-700
                  dark:text-teal-400
                ">
                  Data Processing Resources
                </span>

              </p>




              {/* Required */}

              <p className="
                text-xs
                text-slate-400
              ">
                Fields marked with * are required.
              </p> 
                            {/* Submit */}

              <button
                type="submit"
                className="
                  w-full
                  rounded-2xl
                  bg-[#0FA59A]
                  py-4
                  text-base
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  transition
                  hover:bg-teal-700
                "
              >
                Submit
              </button>





              {/* Divider */}

              <div className="
                flex
                items-center
                gap-4
              ">

                <div className="
                  h-px
                  flex-1
                  bg-slate-200
                  dark:bg-zinc-700
                " />

                <span className="
                  text-xs
                  text-slate-400
                ">
                  or
                </span>


                <div className="
                  h-px
                  flex-1
                  bg-slate-200
                  dark:bg-zinc-700
                " />

              </div>






              {/* Free Trial */}

              <button
                type="button"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-emerald-200
                  bg-emerald-50
                  py-4
                  text-sm
                  font-bold
                  text-teal-900
                  transition
                  hover:bg-emerald-100
                  dark:border-emerald-800
                  dark:bg-emerald-950
                  dark:text-teal-300
                  dark:hover:bg-emerald-900
                "
              >
                Start your 30-day free trial instead
              </button>





              {/* Security Text */}

              <p className="
                text-center
                text-xs
                text-slate-400
              ">
                Your data is encrypted and never sold.
              </p>


            </form>

          </div>

        </div>

      </div>

    </section>
  );
}