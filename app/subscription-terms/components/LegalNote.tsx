export default function LegalNote() {
  return (
    <div
      className="
      rounded-xl
      border
      border-orange-200
      dark:border-yellow-700
      bg-yellow-50
      dark:bg-yellow-950/40
      p-5
      flex
      gap-4
      transition-colors
      "
    >

      {/* Icon */}
      <div className="flex-shrink-0">

        <div
          className="
          flex
          h-4
          w-4
          items-center
          justify-center
          rounded-full
          border
          border-yellow-800
          dark:border-yellow-400
          "
        >
          <span
            className="
            text-[10px]
            font-bold
            text-yellow-800
            dark:text-yellow-400
            "
          >
            !
          </span>
        </div>

      </div>


      {/* Text */}
      <p
        className="
        text-sm
        leading-5
        font-['Poppins']
        text-yellow-800
        dark:text-yellow-200
        "
      >
        <span className="font-bold text-yellow-900 dark:text-yellow-300">
          Important legal note.
        </span>{" "}
        This page is a general summary of common subscription terms for
        informational purposes. It is not a complete legal agreement and does
        not replace the applicable Terms of Service, Master Subscription
        Agreement, Order Form, Data Processing Addendum, invoice, checkout
        terms, or other written agreement. Where there is a conflict between
        this page and a signed or accepted legal agreement, the applicable
        legal agreement governs to the extent stated in that agreement.
      </p>

    </div>
  );
}