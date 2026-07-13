export default function ContactZoikoTime() {
  return (
    <section
      className="
        w-full
        max-w-[696px]
        mx-auto
        mt-14
      "
    >
      <div
        className="
          w-full
          bg-gray-50
          dark:bg-slate-900
          rounded-xl
          border
          border-slate-200
          dark:border-slate-700
          px-6
          py-6
          text-center
        "
      >

        {/* Heading */}
        <h3
          className="
            text-lg
            leading-8
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Contact ZoikoTime
        </h3>


        {/* Description */}
        <p
          className="
            mt-3
            text-sm
            leading-6
            font-normal
            text-slate-500
            dark:text-slate-400
          "
        >
          For questions about this document or your legal rights:
        </p>


        {/* Contact Details */}
        <p
          className="
            mt-3
            text-sm
            leading-6
            font-normal
            text-slate-500
            dark:text-slate-400
          "
        >
          Email:{" "}
          <span
            className="
              font-semibold
              text-teal-600
              dark:text-teal-400
            "
          >
            sales@zoikotime.com
          </span>{" "}
          | Tel: 1-631-833-9395 | Toll-free: 1-800-484-5574
          <br />
          1401 21st Street, Suite R, Sacramento, CA 95811, USA
          <br />
          European HQ: 67-69 Great Portland Street, 5th Floor, London W1W 5PF,
          UK
        </p>

      </div>
    </section>
  );
}