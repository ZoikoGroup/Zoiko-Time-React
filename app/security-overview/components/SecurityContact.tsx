export default function SecurityContact() {
  return (
    <section 
    id = "contact-security-team"
    className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5 transition-colors">
      <div className="max-w-[1200px] mx-auto text-center">

        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Security Contact
        </p>


        {/* Heading */}
        <h2
          className="
            mt-5
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Security Contact & Responsible Disclosure
        </h2>


        {/* Subtitle */}
        <p
          className="
            mt-5
            text-base
            md:text-lg
            text-slate-500
            dark:text-slate-400
            leading-7
          "
        >
          For security enquiries, enterprise security reviews, or responsible
          <br className="hidden md:block" />
          disclosure of vulnerabilities.
        </p>


        {/* Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            text-left
          "
        >

          {/* Enterprise Security */}
          <div
            className="
              h-auto
              min-h-[385px]
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              shadow-sm
              p-8
              transition-colors
            "
          >

            <div className="text-4xl mb-8">
              📧
            </div>


            <h3
              className="
                text-xl
                font-bold
                text-slate-900
                dark:text-white
                leading-8
              "
            >
              Enterprise Security Enquiries
            </h3>


            <p
              className="
                mt-4
                text-sm
                text-slate-500
                dark:text-slate-400
                leading-6
              "
            >
              For enterprise customers, security reviewers, and procurement
              <br className="hidden md:block" />
              teams requiring detailed security documentation, architecture
              <br className="hidden md:block" />
              walkthroughs, or customised security assessments.
            </p>


            <div
              className="
                mt-8
                inline-flex
                px-5
                py-3
                bg-emerald-50
                dark:bg-emerald-950/30
                rounded-lg
                border
                border-teal-600/20
              "
            >
              <span
                className="
                  text-sm
                  font-bold
                  text-teal-700
                  dark:text-teal-400
                "
              >
                security@zoikotime.com
              </span>
            </div>

          </div>



          {/* Responsible Disclosure */}
          <div
            className="
              h-auto
              min-h-[385px]
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              shadow-sm
              p-8
              transition-colors
            "
          >

            <div className="text-4xl mb-8">
              🔍
            </div>


            <h3
              className="
                text-xl
                font-bold
                text-slate-900
                dark:text-white
                leading-8
              "
            >
              Responsible Disclosure
            </h3>


            <p
              className="
                mt-4
                text-sm
                text-slate-500
                dark:text-slate-400
                leading-6
              "
            >
              ZoikoTime operates a responsible disclosure programme — if you
              <br className="hidden md:block" />
              have identified a potential security vulnerability, please report
              <br className="hidden md:block" />
              it through our secure disclosure channel. We commit to
              <br className="hidden md:block" />
              acknowledging all reports within 24 hours and providing regular
              <br className="hidden md:block" />
              updates throughout the investigation.
            </p>


            <div
              className="
                mt-8
                inline-flex
                px-5
                py-3
                bg-emerald-50
                dark:bg-emerald-950/30
                rounded-lg
                border
                border-teal-600/20
              "
            >
              <span
                className="
                  text-sm
                  font-bold
                  text-teal-700
                  dark:text-teal-400
                "
              >
                security-disclosure@zoikotime.com
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}