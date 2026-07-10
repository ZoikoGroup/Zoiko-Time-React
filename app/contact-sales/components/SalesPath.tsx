import Image from "next/image";

const salesPaths = [
  {
    icon: "/SalesPath/companies.png",
    label: "Teams & Growing Companies",
    title: "For Teams and Growing Companies",
    description:
      "Organizations needing structured time verification, workforce reporting, payroll integrity, and manager visibility without enterprise procurement complexity.",
  },
  {
    icon: "/SalesPath/firms.png",
    label: "Professional Services",
    title: "For Professional Services Firms",
    description:
      "Consulting firms, agencies, legal services, accounting firms, and billable organizations needing time, project, utilization, and revenue assurance controls.",
  },
  {
    icon: "/SalesPath/organizations.png",
    label: "Enterprise",
    title: "For Enterprise Organizations",
    description:
      "Larger or regulated organizations requiring governance, security review, SSO, role-based access control, implementation planning, legal review, and procurement support.",
  },
  {
    icon: "/SalesPath/advisors.png",
    label: "Partners",
    title: "For Partners and Advisors",
    description:
      "Consultants, resellers, systems integrators, referral partners, HR consultants, payroll advisors, and technology partners interested in the ZoikoTime ecosystem.",
  },
];

export default function SalesPath() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-20 px-5 transition-colors duration-300 font-sans">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Choose the Right Sales Path
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {salesPaths.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl 
                border border-slate-200 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain"
              />

              {/* Label */}
              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                {item.label}
              </p>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}