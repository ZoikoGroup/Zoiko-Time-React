export default function PurposeNotice() {
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
          1. Purpose of this Notice
        </h2>


        {/* Teal Divider */}
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
          This Worker Transparency Notice explains, in clear and practical
          terms, how ZoikoTime may process workforce-related information when
          an organization uses ZoikoTime for workforce assurance, time
          verification, performance intelligence, and related purposes.
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
          It is intended to help workers understand what may be collected, why
          it may be collected, how insights may be generated, what choices and
          rights may apply, and how to raise questions or concerns. This notice
          is not a substitute for your employer&apos;s own policies or legal
          advice applicable to your specific situation.
        </p>

      </div>
    </section>
  );
}