import React from "react";

export default function ResponsibleDisclosure() {
  return (
    <section
      className="
        w-full
        bg-gray-50
        dark:bg-slate-950
        px-5
        py-[74px]
      "
    >

      <div
        className="
          max-w-[760px]
          mx-auto
          bg-yellow-50
          dark:bg-yellow-950/30
          rounded-xl
          border
          border-orange-200
          dark:border-yellow-800
          px-5
          py-4
          flex
          gap-3
        "
      >

        {/* Warning Icon */}
        <div className="shrink-0 mt-1">

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="6"
              stroke="#854D0E"
              strokeWidth="1.47"
            />

            <path
              d="M8 5.34V8.5"
              stroke="#854D0E"
              strokeWidth="1.47"
              strokeLinecap="round"
            />

            <circle
              cx="8"
              cy="11"
              r="0.7"
              fill="#854D0E"
            />

          </svg>

        </div>



        {/* Content */}
        <p
          className="
            text-sm
            font-normal
            font-['Poppins']
            leading-5
            text-yellow-800
            dark:text-yellow-300
          "
        >

          <span
            className="
              font-bold
              text-yellow-900
              dark:text-yellow-200
            "
          >
            Responsible disclosure.
          </span>{" "}

          ZoikoTime avoids publishing sensitive technical details such as exact
          infrastructure topology, internal security tooling, vulnerability
          timelines, or detailed control mappings. Some materials are shared
          only under appropriate confidentiality or contractual review.

        </p>


      </div>

    </section>
  );
}