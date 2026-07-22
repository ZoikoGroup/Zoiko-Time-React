import Link from "next/link";

export default function SubscriptionHelp() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-slate-800
      to-blue-950
      px-6
      py-20
      md:py-24
      "
    >

      <div className="mx-auto max-w-3xl text-center">

        {/* Label */}
        <p
          className="
          text-base
          font-semibold
          uppercase
          tracking-[2.56px]
          text-teal-500
          font-['Poppins']
          "
        >
          Need Help?
        </p>


        {/* Heading */}
        <h2
          className="
          mt-8
          text-3xl
          md:text-4xl
          font-bold
          leading-tight
          md:leading-[56px]
          text-white
          font-['Poppins']
          "
        >
          Understand your subscription options
        </h2>


        {/* Description */}
        <p
          className="
          mx-auto
          mt-5
          max-w-2xl
          text-sm
          md:text-base
          leading-6
          text-white/80
          font-['Poppins']
          "
        >
          ZoikoTime can help prospective customers, billing contacts,
          procurement teams, and enterprise buyers understand plan options,
          subscription terms, and commercial next steps.
        </p>


        {/* Buttons */}
        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          "
        >

         <Link
    href="/contact-sales"
    className="
      flex h-11 items-center justify-center
      rounded-[10px]
      bg-teal-600
      px-8
      text-base
      font-semibold
      text-white
      font-['Poppins']
      shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)]
      transition
      hover:bg-teal-700
    "
  >
    Contact Sales
  </Link>

  <Link
    href="/help-center"
    className="
      flex h-11 items-center justify-center
      rounded-[10px]
      border
      border-white/30
      bg-white/10
      px-8
      text-base
      font-semibold
      text-white
      font-['Poppins']
      transition
      hover:bg-white/20
    "
  >
    Visit Help Center
  </Link>
        </div>

      </div>

    </section>
  );
}