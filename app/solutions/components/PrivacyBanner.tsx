import {
  ShieldCheck,
  LockKeyhole,
  UserCheck,
  FileCheck2,
} from "lucide-react";

export default function PrivacyBanner() {
  return (
    <section className="w-full bg-white px-5 py-8 dark:bg-slate-950 sm:px-8 lg:px-8">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1216px]
          flex-col
          rounded-2xl
          bg-[#44B97A]
          px-6
          py-8
          shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)]
          shadow-lg
          sm:px-8
          lg:h-[160px]
          lg:flex-row
          lg:items-center
          lg:px-9
          lg:py-0
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex
            flex-1
            items-center
            gap-5
            lg:min-w-0
          "
        >
          {/* SHIELD ICON */}
          <div
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-full
              border-2
              border-white/30
            "
          >
            <ShieldCheck
              className="h-7 w-7 text-white"
              strokeWidth={2}
            />
          </div>

          {/* STATEMENT */}
          <p
            className="
              max-w-[560px]
              text-lg
              font-semibold
              leading-7
              text-white
              sm:text-xl
              sm:leading-7
              lg:text-lg
              lg:leading-7
            "
          >
            No screenshots, keystroke content, URL history,
            application-name monitoring, or clipboard collection
            under any tier or configuration.
          </p>
        </div>

        {/* DIVIDER */}
        <div
          className="
            my-7
            h-px
            w-full
            bg-white/20
            lg:mx-8
            lg:my-0
            lg:h-16
            lg:w-px
            lg:shrink-0
          "
        />

        {/* FEATURES */}
        <div
          className="
            grid
            grid-cols-3
            gap-4
            lg:w-[280px]
            lg:shrink-0
            lg:gap-5
          "
        >
          {/* ANTI-SURVEILLANCE */}
          <div className="flex flex-col items-center text-center">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/40
              "
            >
              <LockKeyhole
                className="h-5 w-5 text-white"
                strokeWidth={1.8}
              />
            </div>

            <p
              className="
                mt-2
                text-xs
                font-medium
                leading-4
                text-white
              "
            >
              Anti-
              <br />
              surveillance
              <br />
              by design
            </p>
          </div>

          {/* HUMAN AUTHORITY */}
          <div className="flex flex-col items-center text-center">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/40
              "
            >
              <UserCheck
                className="h-5 w-5 text-white"
                strokeWidth={1.8}
              />
            </div>

            <p
              className="
                mt-2
                text-xs
                font-medium
                leading-4
                text-white
              "
            >
              Human
              <br />
              authority
              <br />
              always
            </p>
          </div>

          {/* EVIDENCE LED */}
          <div className="flex flex-col items-center text-center">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/40
              "
            >
              <FileCheck2
                className="h-5 w-5 text-white"
                strokeWidth={1.8}
              />
            </div>

            <p
              className="
                mt-2
                text-xs
                font-medium
                leading-4
                text-white
              "
            >
              Evidence-
              <br />
              led
              <br />
              outcomes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}