export default function CtaSection() {
  return (
    <section
      className="
      bg-[#F1FAFA]
      dark:bg-[#111827]
      px-6
      py-12
      md:px-12
      lg:px-54
      "
    >

      <div
        className="
        mx-auto
        max-w-6xl
        flex
        flex-col
        gap-8
        items-center
        "
      >


        {/* Content */}

        <div className="flex flex-col items-center text-center">


          <h2
            className="
            text-2xl
            md:text-[34px]
            font-semibold
            text-slate-900
            dark:text-white
            mb-3
            leading-tight
            "
          >

            Start the{" "}

            <span className="text-[#00C6A9]">
              Right Conversation,
            </span>{" "}

            Right Now.

          </h2>



          <p
            className="
            text-[#5A6E87]
            dark:text-gray-400
            max-w-xl
            text-center
            "
          >

            ZoikoTime routes every inquiry to the right team — so you speak to
            the right person from the first interaction.

          </p>


        </div>





        {/* Buttons */}

        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          sm:gap-8
          justify-center
          w-full
          "
        >


          <button
            className="
            bg-[#009D8C]
            hover:bg-teal-700
            shadow-[0_4px_12px_0_rgba(0,157,140,0.35)]
            text-[15px]
            text-white
            font-medium
            py-3
            px-10
            rounded-[8px]
            cursor-pointer
            transition-colors
            w-full
            sm:w-auto
            "
          >

            Start AI Conversation

          </button>





          <button
            className="
            bg-white
            dark:bg-transparent
            border
            border-[#009D8C]
            hover:bg-slate-100
            dark:hover:bg-gray-800
            text-[#009D8C]
            dark:text-[#00C6A9]
            font-medium
            py-3
            px-10
            rounded-md
            cursor-pointer
            transition-colors
            w-full
            sm:w-auto
            "
          >

            Submit Inquiry

          </button>


        </div>


      </div>


    </section>
  );
}