import Image from "next/image";

const standards = [
  {
    title: "Current",
    description: (
      <>
        Up-to-date and
        <br />
        accurate content
      </>
    ),
    icon: "/resources/current.png",
  },
  {
    title: "Owned",
    description: (
      <>
        Accountable owner
        <br />
        and review cadence
      </>
    ),
    icon: "/resources/owned.png",
  },
  {
    title: "Reviewed",
    description: (
      <>
        Regularly reviewed
        <br />
        and quality checked
      </>
    ),
    icon: "/resources/reviewed.png",
  },
  {
    title: "Discoverable",
    description: (
      <>
        Easy to find and
        <br />
        transparent status
      </>
    ),
    icon: "/resources/discoverable.png",
  },
];

export default function ContentIntegrity() {
  return (
    <section className="w-full bg-white py-10 dark:bg-slate-950 sm:py-12">
      <div className="mx-auto flex w-full max-w-[1232px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-0">

        {/* Content Integrity */}
        <div className="flex w-full shrink-0 items-start gap-4 lg:w-[390px]">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 dark:bg-emerald-950">
            <Image
              src="/resources/content.png"
              alt="Content Integrity"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-[3px]">
            <h3 className="text-sm font-bold uppercase leading-5 tracking-tight text-sky-950 dark:text-white">
              Content Integrity
            </h3>

            <p className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400">
              Every published resource identifies content type, audience,
              product scope, owner, status, last reviewed date, and
              replacement or correction path.
            </p>
          </div>
        </div>

        {/* Standards */}
        <div className="flex flex-1 flex-wrap items-center justify-between gap-x-6 gap-y-6 lg:flex-nowrap">
          {standards.map((item) => (
            <div
              key={item.title}
              className="flex shrink-0 items-center gap-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 dark:bg-emerald-950">
                <Image
                  src={item.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h4 className="text-sm font-bold leading-5 text-gray-800 dark:text-gray-100">
                  {item.title}
                </h4>

                <p className="text-xs font-normal leading-4 text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}