export default function Footer() {
  const columns = [
    {
      title: "Platform",
      links: [
        "Workforce Intelligence",
        "Compliance Posture",
        "Evidence Capture",
        "Integrations",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Distributed Workforce",
        "Contractors",
        "Regulated Industries",
        "BPO & Delivery",
      ],
    },
    {
      title: "Trust & Governance",
      links: [
        "Governance Framework",
        "Regulator Brief",
        "Approval Pack",
        "Privacy",
      ],
    },
    {
      title: "Company",
      links: [
        "About ZoikoTime",
        "Resources",
        "Careers",
        "Contact Sales",
      ],
    },
  ];

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-5 py-14">

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-5 
          gap-10
          pb-12
          border-b border-white/10
        ">

          {/* Logo section */}
          <div>
            <div className="flex items-center gap-2">

              <div className="
                w-5 h-5 
                rounded-md
                bg-gradient-to-br 
                from-teal-600 
                to-slate-800
              "/>

              <div className="font-extrabold text-xl">
                <span className="text-white">
                  ZOIKO
                </span>
                <span className="text-teal-600">
                  TIME
                </span>
              </div>

            </div>


            <p className="
              mt-5
              text-sm
              leading-5
              text-white/70
            ">
              A system of record for workforce truth —
              real-time assurance, performance
              intelligence, and audit-ready evidence.
            </p>

          </div>


          {/* Footer links */}
          {columns.map((column)=>(
            <div key={column.title}>

              <h3 className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-white
              ">
                {column.title}
              </h3>


              <ul className="mt-5 space-y-3">

                {column.links.map((link)=>(
                  <li
                    key={link}
                    className="
                    text-sm
                    text-white/70
                    hover:text-white
                    cursor-pointer
                    transition
                    "
                  >
                    {link}
                  </li>
                ))}

              </ul>

            </div>
          ))}


        </div>


        {/* Bottom section */}

        <div className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          pt-6
          text-xs
          text-white/70
        ">

          <p>
            © 2026 Zoiko Group. All rights reserved.
          </p>


          <div className="
            flex
            flex-wrap
            gap-6
          ">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>

            <span className="cursor-pointer hover:text-white">
              Cookie Notice
            </span>
          </div>

        </div>


      </div>

    </footer>
  );
}