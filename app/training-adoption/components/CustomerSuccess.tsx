import Image from "next/image";

const pillars = [
  {
    icon: "/training-adoption/Dedicated-guidance.svg",
    title: "Dedicated guidance",
    body: "An onboarding and success plan mapped to your goals and milestones.",
  },
  {
    icon: "/training-adoption/Success-reviews.svg",
    title: "Success reviews",
    body: "Regular check-ins on adoption, outcomes, and next opportunities.",
  },
  {
    icon: "/training-adoption/Playbooks-templates.svg",
    title: "Playbooks & templates",
    body: "Reusable rollout playbooks, comms templates, and enablement kits.",
  },
];

export default function CustomerSuccess() {
  return (
    <section className="w-full bg-gray-50 py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Customer Success
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            A team invested in your outcomes
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Training &amp; Adoption pairs with Customer Success so momentum
            continues long after launch.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-slate-700">
                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>

              <h3 className="mt-5 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {title}
              </h3>

              <p className="mt-1 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
