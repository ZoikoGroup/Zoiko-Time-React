import React from "react";

export default function AuditSimulation() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5">
      <div
        className="
          max-w-[1040px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-start
        "
      >
        {/* Left Content */}
        <div>
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-5">
            <span className="w-6 h-[2px] bg-teal-600"></span>

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-teal-600
              "
            >
              Audit Simulation
            </span>
          </div>


          {/* Heading */}
          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              leading-tight
              text-slate-900
              dark:text-white
            "
          >
            What an Auditor Receives
          </h2>


          {/* Description */}
          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-500
              dark:text-slate-400
            "
          >
            When an audit request arrives, ZoikoTime provides a fully
            structured, integrity-verified evidence package — not raw data
            that must be manually assembled and interpreted.
          </p>



          {/* Audit Request Card */}
          <div
            className="
              mt-10
              bg-white
              dark:bg-slate-900
              rounded-xl
              border
              border-slate-200
              dark:border-slate-800
              p-6
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-slate-400
              "
            >
              Audit Request
            </p>


            <p
              className="
                mt-5
                text-base
                font-medium
                leading-6
                text-slate-700
                dark:text-slate-300
              "
            >
              Regulatory audit — attendance records and policy compliance for
              worker USR-00441 covering the period 01 Jan 2026 – 31 Mar 2026.
              Chain of custody required.
            </p>
          </div>



          {/* Feature Cards */}
          <div className="mt-8 space-y-5">


            {/* Instant Retrieval */}
            <div
              className="
                flex
                gap-4
                bg-emerald-50
                dark:bg-emerald-900/30
                rounded-lg
                border
                border-teal-600/20
                p-5
              "
            >
              <span className="text-xl">
                ⚡
              </span>


              <div>
                <h3
                  className="
                    text-sm
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Instant retrieval
                </h3>


                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Evidence package assembled in under 2 seconds — no manual
                  compilation.
                </p>
              </div>
            </div>



            {/* Structured Output */}
            <div
              className="
                flex
                gap-4
                bg-emerald-50
                dark:bg-emerald-900/30
                rounded-lg
                border
                border-teal-600/20
                p-5
              "
            >
              <span className="text-xl">
                📦
              </span>


              <div>
                <h3
                  className="
                    text-sm
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Structured output
                </h3>


                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Formatted to regulatory submission standards — no
                  interpretation required.
                </p>
              </div>
            </div>


          </div>
        </div>



        {/* Right Image */}
        <div
          className="
            w-full
            h-[620px]
            rounded-2xl
            overflow-hidden
            border
            border-slate-200
            dark:border-slate-800
            shadow-sm
            bg-neutral-400
          "
        >
          <img
            src="/AuditSimulation/image.png"
            alt="Audit simulation evidence package"
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>


      </div>
    </section>
  );
}