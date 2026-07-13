const lifecycleData = [
  {
    image: "/DataLifecycle/collection.png",
    title: "Collection",
    badge: "Minimisation enforced",
    description:
      "Only minimum required signals. No surplus data collection by design.",
  },
  {
    image: "/DataLifecycle/validation.png",
    title: "Validation",
    badge: "Input control",
    description:
      "Data validated for quality and lawfulness before processing begins.",
  },
  {
    image: "/DataLifecycle/processing.png",
    title: "Processing",
    badge: "Purpose limitation",
    description:
      "Processed only for stated purpose in isolated, controlled environments.",
  },
  {
    image: "/DataLifecycle/storage.png",
    title: "Storage",
    badge: "AES-256 + RBAC",
    description:
      "Encrypted at rest. Access restricted to governance function scope.",
  },
  {
    image: "/DataLifecycle/access.png",
    title: "Access",
    badge: "Role-based access",
    description:
      "Every access event logged. Cross-purpose access prevented systemically.",
  },
  {
    image: "/DataLifecycle/retention.png",
    title: "Retention",
    badge: "Jurisdiction schedules",
    description:
      "Automated retention per law. Deletion certificates provided at end of lifecycle.",
  },
  {
    image: "/DataLifecycle/deletion.png",
    title: "Deletion",
    badge: "Verified deletion",
    description:
      "Secure, verifiable deletion with documented evidence of completion.",
  },
];


export default function DataLifecycle() {
  return (
    <section className="
      w-full 
      bg-white 
      dark:bg-slate-950
      py-16
    ">

      <div className="
        max-w-5xl 
        mx-auto 
        text-center 
        px-5
      ">

        <p className="
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-teal-600
        ">
          Data Lifecycle
        </p>


        <h2 className="
          mt-5
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
          dark:text-white
        ">
          Data Lifecycle and Control Points
        </h2>


        <p className="
          mt-5
          text-base
          md:text-lg
          leading-7
          text-slate-500
          dark:text-slate-400
        ">
          Every stage of the data lifecycle has a defined control,
          governing policy, and risk mitigation — applied automatically,
          not selectively.
        </p>

      </div>



      <div className="
        max-w-[1040px]
        mx-auto
        mt-14
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-7
        rounded-2xl
        overflow-hidden
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-800
        shadow-sm
      ">


        {lifecycleData.map((item,index)=>(

          <div
          key={item.title}
          className={`
            relative
            min-h-[260px]
            p-6
            text-center

            ${
              index !== lifecycleData.length - 1
              ?
              "lg:border-r border-slate-200 dark:border-slate-800"
              :
              ""
            }
          `}
          >


            {/* Image */}

            <img
              src={item.image}
              alt={item.title}
              className="
                w-10
                h-10
                mx-auto
                object-contain
              "
            />



            {/* Title */}

            <h3 className="
              mt-7
              text-xs
              font-bold
              text-slate-900
              dark:text-white
            ">
              {item.title}
            </h3>



            {/* Badge */}

            <div className="
              mt-5
              inline-flex
              px-3
              py-2
              rounded-full
              bg-emerald-50
              dark:bg-emerald-950/40
              border
              border-teal-600/20
            ">

              <span className="
                text-xs
                font-bold
                text-teal-600
                dark:text-teal-400
              ">
                {item.badge}
              </span>

            </div>



            {/* Description */}

            <p className="
              mt-5
              text-xs
              leading-4
              text-slate-500
              dark:text-slate-400
            ">
              {item.description}
            </p>



            {/* Arrow */}

            {index !== lifecycleData.length-1 && (
              <span className="
                hidden
                lg:block
                absolute
                right-[-7px]
                top-28
                text-teal-600
                text-xl
                font-bold
              ">
                ›
              </span>
            )}


          </div>

        ))}


      </div>

    </section>
  );
}