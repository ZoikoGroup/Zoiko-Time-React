export default function DataSubjectRights() {
  const rights = [
    {
      image: "/DataSubjectRights/access.png",
      title: "Right of Access",
      desc: (
        <>
          Individuals can request a copy of all
          <br />
          personal data processed about them —
          <br />
          structured in a human-readable format
          <br />
          with full context about how each data
          <br />
          point was used.
        </>
      ),
      footer: (
        <>
          Submitted via privacy portal or email
          <br />
          request — processed within 30 days
        </>
      ),
    },
    {
      image: "/DataSubjectRights/correction.png",
      title: "Right to Correction",
      desc: (
        <>
          Inaccurate personal data can be
          <br />
          corrected through a documented
          <br />
          request process — with correction
          <br />
          evidence maintained as part of the
          <br />
          compliance record.
        </>
      ),
      footer: (
        <>
          Requests assessed against policy and
          <br />
          processed within 30 days
        </>
      ),
    },
    {
      image: "/DataSubjectRights/deletion.png",
      title: "Right to Deletion",
      desc: (
        <>
          Data deletion can be requested where
          <br />
          legally applicable — subject to retention
          <br />
          obligations for compliance and legal
          <br />
          proceedings. Deletion certificates
          <br />
          issued on completion.
        </>
      ),
      footer: (
        <>
          Assessed against retention obligations —
          <br />
          processed within 30 days
        </>
      ),
    },
    {
      image: "/DataSubjectRights/restriction.png",
      title: "Right to Restriction",
      desc: (
        <>
          Processing can be restricted in defined
          <br />
          circumstances — such as during a
          <br />
          dispute about accuracy or pending an
          <br />
          objection. Restriction status maintained
          <br />
          in the compliance record.
        </>
      ),
      footer: (
        <>
          Assessed on a case-by-case basis —
          <br />
          processing paused pending resolution
        </>
      ),
    },
    {
      image: "/DataSubjectRights/object.png",
      title: "Right to Object",
      desc: (
        <>
          Individuals can object to processing
          <br />
          based on legitimate interest in defined
          <br />
          circumstances — objections assessed
          <br />
          against the balancing test and employer
          <br />
          policy with documented outcomes.
        </>
      ),
      footer: (
        <>
          Objections assessed within 30 days with
          <br />
          documented outcome
        </>
      ),
    },
    {
      image: "/DataSubjectRights/portability.png",
      title: "Right to Portability",
      desc: (
        <>
          Where applicable, personal data can be
          <br />
          provided in a machine-readable format
          <br />
          — enabling transfer to another
          <br />
          controller in relevant circumstances
          <br />
          under GDPR Article 20.
        </>
      ),
      footer: (
        <>
          Provided in JSON format — assessed for
          <br />
          applicability per request
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-20">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Data Subject Rights
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Exercising Privacy Rights
          </h2>

          <p className="
            mt-5
            mx-auto
            max-w-[590px]
            text-lg
            leading-7
            text-slate-500
            dark:text-slate-400
          ">
            ZoikoTime supports all applicable data subject rights under GDPR and
            equivalent frameworks — through structured, documented, and
            traceable processes.
          </p>

        </div>


        {/* Rights Cards */}
        <div
          className="
          mt-14
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {rights.map((item, index) => (
            <div
              key={index}
              className="
              h-[320px]
              bg-white
              dark:bg-slate-900
              rounded-xl
              border
              border-slate-200
              dark:border-slate-800
              shadow-sm
              p-8
              "
            >

              {/* Icon */}
              <div
                className="
                w-11
                h-11
                rounded-xl
                bg-emerald-50
                dark:bg-emerald-900/30
                border
                border-teal-600/20
                flex
                items-center
                justify-center
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-6 h-6 object-contain"
                />

              </div>


              {/* Title */}
              <h3
                className="
                mt-6
                text-base
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                {item.title}
              </h3>


              {/* Description */}
              <p
                className="
                mt-4
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
                "
              >
                {item.desc}
              </p>


              {/* Footer */}
              <div
                className="
                mt-4
                flex
                gap-2
                text-xs
                font-semibold
                leading-5
                text-teal-600
                "
              >

                <span>→</span>

                <span>
                  {item.footer}
                </span>

              </div>


            </div>
          ))}

        </div>


        {/* Bottom Information Box */}
        <div
          className="
          mt-10
          bg-slate-100
          dark:bg-slate-900
          rounded-xl
          border
          border-slate-200
          dark:border-slate-800
          px-8
          py-6
          text-center
          "
        >

          <p
            className="
            text-sm
            leading-6
            text-slate-500
            dark:text-slate-400
            "
          >
            All data subject rights requests are initiated through defined
            channels, processed in accordance with policy, logged and tracked
            for audit purposes, and resolved within regulatory timelines.
            ZoikoTime provides the infrastructure — the deploying organisation
            is responsible for managing the rights request process for their
            workforce.
          </p>

        </div>


      </div>
    </section>
  );
}