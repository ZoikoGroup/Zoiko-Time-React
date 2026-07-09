import React from "react";

export default function IdentityAccessControl() {
  const cards = [
    {
      title: "Role-based access control",
      desc: (
        <>
          Administrators, managers, workers, finance, HR, legal, and
          <br className="hidden md:block" />
          support users can be assigned appropriate permissions.
        </>
      ),
    },
    {
      title: "Administrative permissions",
      desc: (
        <>
          Customer administrators control user invitations, roles,
          <br className="hidden md:block" />
          departments, policies, report access, and configuration settings.
        </>
      ),
    },
    {
      title: "Worker-level visibility",
      desc: (
        <>
          Workers have appropriate visibility into their own records,
          <br className="hidden md:block" />
          transparency notices, and support routes.
        </>
      ),
    },
    {
      title: "Enterprise identity support",
      desc: (
        <>
          Enterprise plans may support SSO, SAML, SCIM, or related
          <br className="hidden md:block" />
          identity-management capabilities where available.
        </>
      ),
    },
    {
      title: "Session & account controls",
      desc: (
        <>
          Secure authentication flows, session controls, password
          <br className="hidden md:block" />
          policies, and administrative account management.
        </>
      ),
    },
    {
      title: "Least-privilege access",
      desc: (
        <>
          Access follows least-privilege principles so users and operators
          <br className="hidden md:block" />
          only receive access appropriate to their role and purpose.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-gray-50 dark:bg-[#0B1220] py-16 md:py-20 transition-colors">

      {/* Heading */}
      <div className="max-w-[700px] mx-auto text-center px-5">

        <div className="text-teal-600 text-xs font-semibold font-['Poppins'] uppercase leading-5 tracking-widest">
          Identity
        </div>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold font-['Poppins'] text-slate-800 dark:text-white leading-10">
          Access control and identity
        </h2>

        <p className="mt-5 text-gray-500 dark:text-gray-400 text-sm md:text-base font-normal font-['Poppins'] leading-7">
          ZoikoTime supports role-based access, administrative controls, and account
          <br className="hidden md:block" />
          safeguards to help customers manage who can view, configure, export, or act
          <br className="hidden md:block" />
          on sensitive workforce information.
        </p>

      </div>


      {/* Cards */}
      <div className="
        max-w-[980px]
        mx-auto
        mt-16
        px-5
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      ">

        {cards.map((card, index) => (
          <div
            key={index}
            className="
              h-auto
              min-h-[128px]
              md:h-[144px]
              bg-white
              dark:bg-[#111827]
              rounded-xl
              shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
              dark:shadow-none
              border
              border-slate-200
              dark:border-slate-700
              p-6
              transition-colors
            "
          >

            <div className="flex items-center gap-3">

              <div className="w-1.5 h-1.5 bg-teal-600 rounded-sm" />

              <h3 className="
                text-slate-800
                dark:text-white
                text-base
                font-semibold
                font-['Poppins']
                leading-6
              ">
                {card.title}
              </h3>

            </div>


            <p className="
              mt-4
              text-gray-500
              dark:text-gray-400
              text-sm
              font-normal
              font-['Poppins']
              leading-6
            ">
              {card.desc}
            </p>


          </div>
        ))}

      </div>

    </section>
  );
}