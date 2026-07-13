export default function DataController() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div
        className="
          max-w-[696px]
          mx-auto
          pt-12
        "
      >

        {/* Section Title */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          2. Who Provides ZoikoTime and Who Controls the Data
        </h2>


        {/* Divider */}
        <div
          className="
            mt-3
            w-12
            h-[3px]
            rounded-full
            bg-teal-600
          "
        />


        {/* Paragraph 1 */}
        <p
          className="
            mt-6
            text-base
            leading-7
            font-normal
            text-slate-700
            dark:text-slate-300
          "
        >
          ZoikoTime is a platform of Zoiko Tech Inc. For most workforce data
          processed inside a customer workspace, the customer organization is
          the controller or business that decides the purposes and means of
          processing. Zoiko Tech Inc. generally processes that data as a
          processor or service provider, acting under the customer&apos;s
          instructions and the Data Processing Addendum.
        </p>


        {/* Paragraph 2 */}
        <p
          className="
            mt-6
            text-base
            leading-7
            font-normal
            text-slate-700
            dark:text-slate-300
          "
        >
          ZoikoTime may act as an independent controller for limited
          information relating to platform administration, security, billing,
          customer account management, product support, fraud prevention, and
          legal compliance.
        </p>

      </div>
    </section>
  );
}