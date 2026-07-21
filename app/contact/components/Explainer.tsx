const cards = [
  {
    no: 1,
    src: "/contact/brain.png",
    title: "Intent Detection",
    desc: "Your inquiry is parsed for intent — sales, support, technical, or compliance — and routed to the appropriate team queue.",
  },
  {
    no: 2,
    src: "/contact/light.png",
    title: "Priority Assignment",
    desc: "Company size, urgency, and inquiry type determine priority level — ensuring high-value and time-sensitive requests are handled first.",
  },
  {
    no: 3,
    src: "/contact/guy.png",
    title: "Specialist Assignment",
    desc: "A named specialist is assigned based on your sector, use case, and regional context — not a generic support pool.",
  },
  {
    no: 4,
    src: "/contact/chart.png",
    title: "SLA Tracking",
    desc: "Every inquiry is tracked against the applicable response SLA — with automatic escalation if the deadline is at risk.",
  },
];

export default function Explainer() {
  return (
    <section
      className="
      bg-[#F4F7FA]
      dark:bg-[#0B1220]
      px-6
      py-12
      md:px-12
      lg:px-54
      "
    >

      <div className="mx-auto max-w-6xl">


        {/* Heading */}

        <div className="text-center mb-12">

          <h2
            className="
            text-3xl
            md:text-[30px]
            font-semibold
            text-[#0D1526]
            dark:text-white
            mb-4
            "
          >
            How Every Request Is Handled
          </h2>

        </div>





        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >

          {cards.map(({ no, src, title, desc }) => (

            <div
              key={title}
              className="
              bg-white
              dark:bg-[#111827]
              rounded-lg
              border-t-4
              border-teal-500
              shadow-sm
              dark:shadow-none
              p-6
              flex
              flex-col
              items-center
              text-center
              transition
              hover:-translate-y-1
              "
            >


              <p
                className="
                text-[#009D8C]
                font-bold
                text-lg
                "
              >
                0{no}
              </p>



              <img
                src={src}
                alt={title}
                className="
                my-4
                h-12
                w-12
                object-contain
                "
              />



              <h3
                className="
                font-semibold
                text-[#0D1526]
                dark:text-white
                text-[15px]
                mb-2
                "
              >
                {title}
              </h3>




              <p
                className="
                text-sm
                text-[#5A6E87]
                dark:text-gray-400
                "
              >
                {desc}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}