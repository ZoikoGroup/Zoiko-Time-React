import Link from "next/link";
import Image from "next/image";

const connections = [
  {
    icon: "/identity-access-management/Lifecycle-provisioning.svg",
    title: "Identity providers",
    description:
      "Sign-in and single sign-on through supported standards, where available and configured.",
  },
  {
    icon: "/identity-access-management/Role-based-access.svg",
    title: "Directory & HRIS",
    description:
      "Worker, role, and status context drives provisioning and deprovisioning.",
  },
  {
    icon: "/identity-access-management/Single-sign-on.svg",
    title: "Provisioning & SCIM",
    description:
      "Automated user lifecycle through supported provisioning standards where available.",
  },
];

export default function ConnectsWithStack() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Connects With Your Stack
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            Works with the identity systems you already run
          </h2>

          <p className="max-w-[680px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Category-level connections with clear direction and ownership.
            Provider logos appear only for production-ready, supported
            integrations.
          </p>

        </div>

        {/* Connection Cards */}
        <div className="mx-auto mt-11 grid w-full max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {connections.map((connection) => (
            <div
              key={connection.title}
              className="flex flex-col rounded-2xl border border-[#E4E9EE] bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F6F2] dark:bg-slate-900">
                <Image
                  src={connection.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
              </span>

              <h3 className="mt-5 text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                {connection.title}
              </h3>

              <p className="mt-1.5 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                {connection.description}
              </p>

            </div>
          ))}

        </div>

        {/* Content Gate Note */}
        <div className="mx-auto mt-9 w-full max-w-[920px]">

          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="#6B7785"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="6.4" />
            <path d="M8 7.4v3.4M8 5.4h.01" strokeLinecap="round" />
          </svg>

          <p className="mt-2 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
            <span className="font-bold text-[#0E1F3D] dark:text-white">
              Content gate.
            </span>{" "}
            No provider logo or specific protocol, certification, or residency
            claim appears until it is production-ready, documented, and
            verified. Until then, requirements route to{" "}
            <Link
              href="/request-enterprise-demo"
              className="font-semibold text-[#0B8675] transition hover:text-[#0E1F3D] dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              Request Enterprise Demo
            </Link>
            .
          </p>

        </div>

      </div>
    </section>
  );
}
