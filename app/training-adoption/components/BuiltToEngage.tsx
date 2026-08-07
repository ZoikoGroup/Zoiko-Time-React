import Image from "next/image";

const cards = [
  {
    image: "/training-adoption/role-based-program.png",
    alt: "Colleagues working through a role-based learning path together",
    title: "Role-based programs",
    body: "Curated learning paths for administrators, managers, payroll, and workers.",
  },
  {
    image: "/training-adoption/guided-practice.png",
    alt: "Team practising ZoikoTime workflows in a training session",
    title: "Guided practice",
    body: "Hands-on sandboxes with realistic, synthetic data and unlimited retries.",
  },
  {
    image: "/training-adoption/continuous-adoption.png",
    alt: "Adoption dashboard displayed on a screen",
    title: "Continuous adoption",
    body: "Nudges, refreshers, and analytics that keep usage healthy over time.",
  },
];

export default function BuiltToEngage() {
  return (
    <section className="w-full bg-gray-50 py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Built To Engage
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Programs, practice, and adoption — by design
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Premium learning experiences tailored to every ZoikoTime audience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ image, alt, title, body }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800"
            >
              <Image
                src={image}
                alt={alt}
                width={338}
                height={190}
                className="h-[190px] w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
