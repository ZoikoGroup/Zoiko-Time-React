export default function SecurityResources() {
  const resources = [
    {
      image: "/SecurityResources/overview.png",
      title: "Security Overview",
      description: (
        <>
          Complete security architecture
          <br />
          overview, controls
          <br />
          documentation, and assurance
          <br />
          statement — structured for
          <br />
          CISO and security review.
        </>
      ),
    },
    {
      image: "/SecurityResources/brief.png",
      title: "Architecture Brief",
      description: (
        <>
          Technical architecture
          <br />
          documentation, data flow
          <br />
          diagrams, and security
          <br />
          boundary definitions for CTO
          <br />
          and infrastructure review
          <br />
          teams.
        </>
      ),
    },
    {
      image: "/SecurityResources/compliance.png",
      title: "Compliance Summary",
      description: (
        <>
          SOC 2, ISO 27001, and GDPR
          <br />
          control alignment summary —
          <br />
          structured for procurement
          <br />
          and legal due diligence review
          <br />
          teams.
        </>
      ),
    },
    {
      image: "/SecurityResources/model.png",
      title: (
        <>
          Shared Responsibility
          <br />
          Model
        </>
      ),
      description: (
        <>
          Complete shared
          <br />
          responsibility definition —
          <br />
          ZoikoTime vs. customer
          <br />
          obligations for every security
          <br />
          domain, for procurement
          <br />
          clarity.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5 transition-colors">
      <div className="max-w-[1100px] mx-auto text-center">

        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Security Resources
        </p>

        {/* Heading */}
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Security Documentation & Downloads
        </h2>

        {/* Description */}
        <p className="mt-5 text-base md:text-lg text-slate-500 dark:text-slate-400 leading-7">
          Everything your security, legal, and procurement teams need —
          <br className="hidden md:block" />
          structured for due diligence, available immediately.
        </p>


        {/* Cards */}
        <div className="
          mt-14 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-8
        ">

          {resources.map((item, index) => (
            <div
              key={index}
              className="
                h-[385px]
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                shadow-sm
                flex
                flex-col
                items-center
                px-5
                pt-9
                transition-colors
              "
            >

              {/* Image */}
              <img
                src={item.image}
                alt=""
                className="w-11 h-11 object-contain mb-6"
              />


              {/* Title */}
              <h3
                className="
                  text-base
                  font-bold
                  text-slate-900
                  dark:text-white
                  leading-7
                  min-h-[28px]
                "
              >
                {item.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-4
                  text-xs
                  font-normal
                  text-slate-500
                  dark:text-slate-400
                  leading-5
                "
              >
                {item.description}
              </p>


              {/* Download */}
              <button
                className="
                  mt-auto
                  mb-10
                  text-xs
                  font-bold
                  text-teal-600
                  hover:text-teal-700
                  transition
                "
              >
                ↓ Download
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}