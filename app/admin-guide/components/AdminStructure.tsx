import React from "react";

export default function AdminStructure() {

  const structure = [
    {
      area: "Company profile",
      label: "Workspace Profile",
      description:
        "Organization identity, settings, contacts, and workspace-level information.",
    },
    {
      area: "Department setup",
      label: "Departments",
      description:
        "Operational groups such as Engineering, Finance, Sales, HR, or Support.",
    },
    {
      area: "User setup",
      label: "Workers",
      description:
        "Employees, contractors, managers, field workers, and approved platform users.",
    },
    {
      area: "Access control",
      label: "Roles & Permissions",
      description:
        "Controls what each user can view, manage, approve, export, or configure.",
    },
    {
      area: "System configuration",
      label: "Platform Settings",
      description:
        "The administrative area for workspace-level setup and controls.",
    },
  ];


  const roles = [
    "Workspace Owner",
    "Administrator",
    "Manager",
    "HR Administrator",
    "Finance / Payroll User",
    "Legal / Compliance Reviewer",
    "Worker",
  ];


  const permissions = [
    "Use least-privilege access",
    "Avoid shared administrator accounts",
    "Review permissions regularly",
    "Restrict screenshot access",
    "Restrict evidence exports",
    "Separate manager, payroll, legal, and admin duties",
    "Log permission changes",
  ];


  const governance = [
    "Keep workers informed about visibility",
    "Use human review for sensitive decisions",
    "Control exports carefully",
    "Preserve auditability for corrections",
    "Align with internal policy",
    "Escalate legal and HR issues appropriately",
  ];


  return (

    <section
      className="
      bg-white
      dark:bg-black
      px-6
      py-24
      transition-colors
      font-sans
      "
    >

      <div className="max-w-6xl mx-auto">


        {/* Header */}

        <p
          className="
          text-center
          uppercase
          tracking-wider
          text-xs
          font-bold
          text-teal-600
          dark:text-teal-400
          "
        >
          Workspace, Departments, Workers, and Permissions
        </p>


        <h2
          className="
          mt-5
          text-center
          text-3xl
          sm:text-4xl
          font-semibold
          text-slate-900
          dark:text-white
          "
        >
          Understanding the Administrative Structure
        </h2>


        <p
          className="
          mt-6
          mx-auto
          max-w-4xl
          text-center
          text-base
          leading-7
          text-slate-500
          dark:text-white/60
          "
        >
          ZoikoTime separates workspace identity, operational structure,
          user records, and access permissions to help administrators
          manage the platform clearly.
        </p>



        {/* Structure Cards */}

        <div
          className="
          mt-14
          grid
          gap-5
          sm:grid-cols-2
          lg:grid-cols-5
          "
        >

          {
            structure.map((item,index)=>(

              <div
                key={index}
                className="
                rounded-xl
                border
                border-slate-200
                dark:border-white/10
                bg-slate-50
                dark:bg-white/5
                p-5
                "
              >

                <p
                  className="
                  text-xs
                  uppercase
                  font-bold
                  tracking-wide
                  text-slate-500
                  dark:text-white/80
                  "
                >
                  {item.area}
                </p>


                <h3
                  className="
                  mt-3
                  text-sm
                  font-semibold
                  text-teal-600
                  dark:text-teal-400
                  "
                >
                  {item.label}
                </h3>


                <p
                  className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-white/60
                  "
                >
                  {item.description}
                </p>


              </div>

            ))
          }

        </div>




        {/* Bottom Sections */}

        <div
          className="
          mt-16
          grid
          gap-6
          lg:grid-cols-3
          "
        >


          {/* Roles */}

          <div
            className="
            rounded-2xl
            border
            border-slate-200
            dark:border-white/10
            p-6
            "
          >

            <h3
              className="
              text-base
              font-semibold
              text-slate-900
              dark:text-white
              "
            >
              Recommended Roles
            </h3>


            <ul className="mt-5 space-y-3">

              {
                roles.map((role,index)=>(

                  <li
                    key={index}
                    className="
                    text-sm
                    text-slate-700
                    dark:text-white/70
                    "
                  >
                    {role}
                  </li>

                ))
              }

            </ul>

          </div>




          {/* Permission */}

          <div
            className="
            rounded-2xl
            border
            border-slate-200
            dark:border-white/10
            p-6
            "
          >

            <h3
              className="
              text-base
              font-semibold
              text-slate-900
              dark:text-white
              "
            >
              Permission Principles
            </h3>


            <ul className="mt-5 space-y-3">

              {
                permissions.map((item,index)=>(

                  <li
                    key={index}
                    className="
                    flex
                    gap-2
                    text-xs
                    text-slate-700
                    dark:text-white/70
                    "
                  >

                    <span className="text-teal-600">
                      ›
                    </span>

                    {item}

                  </li>

                ))
              }

            </ul>

          </div>




          {/* Governance */}

          <div
            className="
            rounded-2xl
            border
            border-slate-200
            dark:border-white/10
            p-6
            "
          >

            <h3
              className="
              text-base
              font-semibold
              text-slate-900
              dark:text-white
              "
            >
              Governance Best Practices
            </h3>


            <ul className="mt-5 space-y-3">

              {
                governance.map((item,index)=>(

                  <li
                    key={index}
                    className="
                    flex
                    gap-2
                    text-xs
                    text-slate-700
                    dark:text-white/70
                    "
                  >

                    <span className="text-teal-600">
                      ›
                    </span>

                    {item}

                  </li>

                ))
              }

            </ul>

          </div>


        </div>


      </div>

    </section>

  );
}