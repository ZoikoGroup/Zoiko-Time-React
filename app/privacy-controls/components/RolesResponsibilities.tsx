export default function RolesResponsibilities() {

  const roles = [
    {
      image: "/RolesResponsibilities/employer.png",
      title: "Employer",
      points: [
        "Defines the policies and governance model that ZoikoTime enforces",
        "Configures system behaviour, thresholds, and sensitivity levels",
        "Determines the applicable lawful basis for processing in their jurisdiction",
        "Responsible for notifying workers of ZoikoTime deployment and usage",
      ],
    },
    {
      image: "/RolesResponsibilities/platform.png",
      title: "ZoikoTime Platform",
      points: [
        "Enforces the policies defined by the employer — no independent determination of data use",
        "Applies privacy controls at system level — data minimisation, purpose limitation, access restrictions",
        "Maintains system integrity and generates audit-ready evidence records",
        "Provides the technical infrastructure for user rights exercise and transparency",
      ],
    },
    {
      image: "/RolesResponsibilities/user.png",
      title: "Employee / User",
      points: [
        "Interacts with ZoikoTime through session recording and the Transparency Center",
        "Retains all applicable privacy rights under their jurisdiction's law",
        "Can view what signals are collected and how their confidence score is calculated",
        "Can exercise data subject rights through defined channels at any time",
      ],
    },
  ];


  return (
    <section
      className="
        w-full
        bg-slate-100
        dark:bg-slate-950
        py-24
        px-5
        transition-colors
      "
    >

      <div
        className="
          max-w-[1040px]
          mx-auto
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
          Roles & Responsibilities
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
            leading-tight
          "
        >
          Roles and Responsibilities in Data Use
        </h2>


        {/* Description */}
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
          ZoikoTime operates under a three-party model — clearly defining the
          <br className="hidden md:block" />
          distinct responsibilities of the employer, the ZoikoTime platform,
          and
          <br className="hidden md:block" />
          the employee or user.
        </p>



        {/* Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            text-left
          "
        >

          {roles.map((role, index) => (

            <div
              key={index}
              className="
                relative
                min-h-[454px]
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                shadow-sm
                overflow-hidden
                p-8
                transition-colors
              "
            >

              {/* Top Gradient */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[3px]
                  bg-gradient-to-r
                  from-teal-600
                  to-teal-500
                "
              />


              {/* Image */}
              <img
                src={role.image}
                alt={role.title}
                className="
                  w-11
                  h-11
                  object-contain
                  mb-8
                "
              />


              {/* Title */}
              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                  dark:text-white
                  leading-8
                  mb-6
                "
              >
                {role.title}
              </h3>


              {/* Points */}
              <ul
                className="
                  space-y-5
                "
              >

                {role.points.map((point, i) => (

                  <li
                    key={i}
                    className="
                      flex
                      gap-3
                      text-sm
                      leading-5
                      text-slate-500
                      dark:text-slate-400
                    "
                  >

                    <span
                      className="
                        text-teal-600
                        font-bold
                        text-base
                      "
                    >
                      ›
                    </span>


                    <span>
                      {point}
                    </span>

                  </li>

                ))}

              </ul>


            </div>

          ))}

        </div>




        {/* Bottom Information Box */}
        <div
          className="
            mt-10
            bg-emerald-50
            dark:bg-emerald-950/30
            rounded-xl
            border
            border-teal-600/20
            px-6
            py-6
          "
        >

          <p
            className="
              text-sm
              md:text-base
              font-semibold
              leading-6
              text-teal-700
              dark:text-teal-400
            "
          >
            ZoikoTime does not independently determine how workforce data is
            used. It enforces policies defined by the organisation — within
            the bounds of applicable privacy law and ZoikoTime's own privacy
            architecture requirements.
          </p>

        </div>


      </div>

    </section>
  );
}