const steps = [
  {
    number: "1",
    title: "We Review Your Inquiry",
    description:
      "ZoikoTime reviews your organization size, use case, region, timeline, and areas of interest to understand your needs.",
  },
  {
    number: "2",
    title: "We Route You to the Right Team",
    description:
      "Your inquiry is routed to the appropriate sales, enterprise, implementation, security, partner, or support contact.",
  },
  {
    number: "3",
    title: "We Help You Decide",
    description:
      "The next step may include pricing guidance, a walkthrough, tailored demo, implementation discussion, or security review.",
  },
];

export default function AfterSubmit() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5 transition-colors duration-300 font-sans">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            What Happens After You Submit
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="
                h-[240px]
                bg-white dark:bg-slate-900
                rounded-2xl
                border border-slate-200 dark:border-slate-700
                p-6
                text-center
              "
            >

              {/* Number */}
              <div
                className="
                  mx-auto
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  bg-emerald-50 dark:bg-emerald-950
                  border-2 border-teal-600/20
                  text-teal-600
                  text-lg
                  font-bold
                  font-mono
                "
              >
                {step.number}
              </div>


              {/* Title */}
              <h3
                className="
                  mt-8
                  text-base
                  font-semibold
                  text-slate-900 dark:text-white
                "
              >
                {step.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-500 dark:text-slate-400
                "
              >
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}