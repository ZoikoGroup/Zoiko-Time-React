import React from "react";
import Link from "next/link";

export default function Enterprise() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 font-['Plus_Jakarta_Sans',_sans-serif] antialiased text-slate-900 dark:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="
        relative 
        w-full 
        bg-teal-600 
        dark:bg-teal-700 
        text-white 
        overflow-hidden 
        pt-20 
        md:pt-28 
        pb-24 
        md:pb-40
      ">

        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600" />

        {/* Background Glow */}
        <div className="
          absolute 
          right-[-80px] 
          top-[-80px] 
          size-[480px] 
          bg-radial 
          from-teal-400/20 
          to-transparent 
          opacity-60 
          pointer-events-none
        " />


        <div className="
          max-w-[1100px] 
          mx-auto 
          px-4 
          md:px-6 
          grid 
          grid-cols-1 
          lg:grid-cols-12 
          gap-10 
          md:gap-12 
          items-center
        ">


          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">

            <div className="
              inline-flex
              px-4 
              py-1 
              bg-teal-500/10 
              rounded-full 
              border 
              border-teal-400/20
            ">
              <span className="
                text-teal-200 
                text-xs 
                font-bold 
                tracking-wider 
                uppercase
              ">
                Enterprise Workforce Governance
              </span>
            </div>


            <h1 className="
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              font-semibold 
              tracking-tight 
              leading-tight
            ">
              Govern Workforce <br className="hidden md:block" />
              Records With Enterprise-
              <br className="hidden md:block" />
              Grade Control
            </h1>


            <p className="
              text-white/75 
              text-sm 
              md:text-lg 
              leading-relaxed 
              max-w-[520px]
            ">
              ZoikoTime helps organizations capture, review, approve, retain,
              and govern workforce records across teams, departments,
              contractors, and jurisdictions with role-based permissions,
              audit trails, policy controls, and human oversight.
            </p>


            <p className="
              text-white/50 
              text-sm 
              md:text-base 
              leading-relaxed 
              max-w-[480px]
            ">
              Enterprise workforce data affects payroll, billing, compliance,
              operations, finance, legal exposure, and management decisions.
              ZoikoTime gives leaders a structured way to govern the records
              behind those decisions.
            </p>


            {/* Buttons */}
            <div className="
              flex 
              flex-col 
              sm:flex-row 
              gap-4 
              pt-4
            ">

              <Link
              href ="contact-sales"
               className="
                px-8 
                py-3.5 
                bg-white 
                text-teal-600 
                font-semibold 
                rounded-lg 
                shadow-[0px_4px_20px_0px_rgba(0,157,140,0.40)]
                hover:bg-teal-50
                transition
              ">
                Contact Sales
              </Link>


              <Link
              href = "request-a-demo"
               className="
                px-8 
                py-3.5 
                border 
                border-white/70 
                text-white 
                font-medium 
                rounded-lg 
                hover:bg-white/10
                transition
              ">
                Get a Demo
              </Link>

            </div>

          </div>



          {/* RIGHT STAT CARD */}
          <div className="
            lg:col-span-5 
            bg-white/5 
            dark:bg-black/20
            border 
            border-white/10 
            rounded-2xl 
            p-4 
            md:p-6 
            backdrop-blur-sm 
            shadow-xl 
            space-y-6
          ">


            <div className="
              grid 
              grid-cols-2 
              gap-4
            ">


              {[
                {
                  title: "PAYROLL READY",
                  value: "94%",
                  color: "text-teal-300",
                },
                {
                  title: "EXCEPTIONS",
                  value: "23",
                  color: "text-amber-400",
                },
                {
                  title: "APPROVALS",
                  value: "1,847",
                  color: "text-white",
                },
                {
                  title: "LEGAL HOLDS",
                  value: "2",
                  color: "text-violet-300",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white/5 
                    border 
                    border-white/10 
                    rounded-lg 
                    p-4
                  "
                >

                  <span className="
                    block 
                    text-white/40 
                    text-[9px] 
                    font-bold 
                    tracking-wide 
                    uppercase 
                    mb-1
                  ">
                    {item.title}
                  </span>


                  <span className={`
                    text-xl 
                    font-bold
                    ${item.color}
                  `}>
                    {item.value}
                  </span>

                </div>

              ))}

            </div>



            {/* Compliance Bar */}
            <div className="
              bg-teal-500/10 
              border 
              border-teal-400/20 
              rounded-lg 
              p-4 
              space-y-2
            ">

              <span className="
                block 
                text-teal-200 
                text-xs 
                font-bold
              ">
                Policy Compliance
              </span>


              <div className="
                w-full 
                h-1.5 
                bg-white/10 
                rounded-full 
                overflow-hidden
              ">
                <div className="
                  w-[87%] 
                  h-full 
                  bg-teal-300 
                  rounded-full
                " />
              </div>


              <span className="
                block 
                text-white/50 
                text-[10px]
              ">
                87% records policy-compliant
              </span>

            </div>


            <p className="
              text-center 
              text-white/40 
              text-xs
            ">
              Built for governed workforce records, not invasive monitoring.
            </p>


          </div>

        </div>



        {/* Feature Pills */}
        <div className="
          max-w-[1052px]
          mx-auto
          mt-16
          md:mt-20
          px-4
        ">

          <div className="
            bg-white/5 
            border 
            border-white/20 
            rounded-xl 
            p-4 
            flex 
            flex-wrap 
            justify-center 
            gap-4 
            md:justify-around
          ">

            {[
              "Governed records",
              "Role-based permissions",
              "Policy controls",
              "Audit trails",
              "Legal hold support",
            ].map((text, index) => (

              <div
                key={index}
                className="
                  flex 
                  items-center 
                  gap-2
                "
              >

                <span className="
                  size-1.5 
                  bg-teal-300 
                  rounded-full
                " />

                <span className="
                  text-white/70 
                  text-xs 
                  font-semibold
                ">
                  {text}
                </span>

              </div>

            ))}

          </div>

        </div>


      </section>

            {/* ================= INFRASTRUCTURE RISK SECTION ================= */}

      <section className="
        bg-slate-100
        dark:bg-slate-900
        py-16
        md:py-24
        px-4
        md:px-6
      ">

        <div className="
          max-w-[1100px]
          mx-auto
          space-y-16
        ">


          <div className="
            text-center
            max-w-[900px]
            mx-auto
            space-y-4
          ">

            <h2 className="
              text-2xl
              md:text-4xl
              font-semibold
              tracking-tight
              text-slate-900
              dark:text-white
            ">
              Workforce Records Have Become Enterprise Risk Infrastructure
            </h2>


            <p className="
              text-slate-500
              dark:text-slate-300
              text-sm
              md:text-base
              leading-relaxed
            ">
              Modern organizations rely on workforce records for payroll,
              billing, compliance, dispute resolution, and executive reporting.
              Fragmented or ungoverned records create exposure across every
              function.
            </p>

          </div>



          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          ">


            {[
              {
                icon:"🗂",
                title:"Fragmented Records",
                text:"Time, attendance, activity, approvals, and exceptions may live in different systems, creating inconsistency, gaps, and governance risk."
              },
              {
                icon:"📉",
                title:"Weak Evidence Quality",
                text:"Records without timestamps, policy context, correction history, or approval trails are difficult to defend in payroll, billing, or legal review."
              },
              {
                icon:"📋",
                title:"Manual Governance Burden",
                text:"Spreadsheets, email approvals, and manual exception handling create inconsistency, delays, and audit gaps."
              },
              {
                icon:"💸",
                title:"Payroll and Billing Exposure",
                text:"Unsupported time records affect payroll accuracy, client invoice defensibility, project margins, and financial reporting."
              },
              {
                icon:"⚠",
                title:"Policy Drift",
                text:"Without structured policy enforcement, workforce oversight becomes inconsistent across teams and locations."
              },
              {
                icon:"⚖",
                title:"Legal and Audit Pressure",
                text:"Organizations without structured records face evidence and defensibility gaps during audits or disputes."
              }
            ].map((card,index)=>(

              <div
                key={index}
                className="
                  relative
                  bg-white
                  dark:bg-slate-800
                  border
                  border-slate-200
                  dark:border-slate-700
                  rounded-2xl
                  p-5
                  md:p-6
                  shadow-sm
                  overflow-hidden
                "
              >

                <div className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[3px]
                  bg-gradient-to-r
                  from-teal-600
                  to-teal-400
                "/>


                <span className="
                  text-2xl
                  block
                  mb-3
                ">
                  {card.icon}
                </span>


                <h3 className="
                  text-slate-900
                  dark:text-white
                  text-base
                  font-semibold
                  mb-2
                ">
                  {card.title}
                </h3>


                <p className="
                  text-slate-500
                  dark:text-slate-300
                  text-xs
                  leading-relaxed
                ">
                  {card.text}
                </p>

              </div>

            ))}


          </div>


          <p className="
            text-center
            text-slate-700
            dark:text-slate-200
            text-sm
            font-semibold
          ">
            Enterprise governance begins with workforce records that can be trusted,
            explained, reviewed, and retained.
          </p>


        </div>

      </section>





      {/* ================= GOVERNANCE ARCHITECTURE SECTION ================= */}

      <section className="
        bg-teal-600
        dark:bg-teal-700
        text-white
        py-16
        md:py-24
        px-4
        md:px-6
      ">


        <div className="
          max-w-[1052px]
          mx-auto
          space-y-12
        ">


          <div className="
            text-center
            space-y-4
          ">

            <h2 className="
              text-2xl
              md:text-4xl
              font-semibold
            ">
              A Governance Layer for Workforce Operations
            </h2>


            <p className="
              text-white/70
              text-sm
              md:text-base
              max-w-[850px]
              mx-auto
              leading-relaxed
            ">
              ZoikoTime provides a workforce governance architecture that connects
              time capture, activity verification, attendance, approvals,
              exceptions, reporting, retention, and evidence into one governed
              platform.
            </p>

          </div>




          <div className="space-y-4">


            {[
              {
                num:"1",
                color:"bg-indigo-500",
                title:"Workforce Events",
                desc:"Clock-ins, clock-outs, breaks, activity, project context, screenshots where enabled, corrections, approvals, and exceptions."
              },
              {
                num:"2",
                color:"bg-teal-800",
                title:"Policy and Permission Layer",
                desc:"Roles, access rights, approval rules, screenshot controls, retention settings, escalation paths, and jurisdiction-aware configuration."
              },
              {
                num:"3",
                color:"bg-teal-400",
                title:"Review and Decision Layer",
                desc:"Manager approvals, HR review, finance validation, legal escalation, administrator oversight, and exception resolution."
              },
              {
                num:"4",
                color:"bg-amber-500",
                title:"Evidence and Audit Layer",
                desc:"Immutable logs, record history, evidence packages, exports, legal hold, and audit trails."
              },
              {
                num:"5",
                color:"bg-emerald-400",
                title:"Executive Intelligence Layer",
                desc:"Dashboards, workforce analytics, payroll readiness, billing support, risk indicators, and governance reporting."
              }
            ].map((layer)=>(


              <div
                key={layer.num}
                className="
                  bg-white/10
                  border
                  border-white/20
                  rounded-xl
                  p-4
                  md:p-5
                  flex
                  gap-4
                  items-start
                  md:items-center
                "
              >


                <div className={`
                  size-8
                  flex
                  items-center
                  justify-center
                  rounded-full
                  text-white
                  font-bold
                  text-xs
                  shrink-0
                  ${layer.color}
                `}>
                  {layer.num}
                </div>


                <div>

                  <h4 className="
                    font-semibold
                    text-sm
                  ">
                    {layer.title}
                  </h4>


                  <p className="
                    text-white/70
                    text-xs
                    leading-relaxed
                  ">
                    {layer.desc}
                  </p>


                </div>


              </div>


            ))}


          </div>


        </div>

      </section>





      {/* ================= HIGH STAKES OPERATIONS ================= */}

      <section className="
        bg-slate-100
        dark:bg-slate-900
        py-16
        md:py-24
        px-4
        md:px-6
      ">


        <div className="
          max-w-[1100px]
          mx-auto
          space-y-14
        ">


          <div className="
            text-center
            space-y-3
          ">

            <h2 className="
              text-2xl
              md:text-4xl
              font-semibold
              text-slate-900
              dark:text-white
            ">
              Governance for High-Stakes Workforce Operations
            </h2>


            <p className="
              text-slate-500
              dark:text-slate-300
              text-sm
              md:text-base
            ">
              ZoikoTime supports organizations where workforce records influence
              money, risk, performance, client trust, and compliance workflows.
            </p>

          </div>

                    <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

            {[
              {
                icon:"💰",
                title:"Payroll Cutoff Readiness",
                desc:"Ensure time records, approvals, and exceptions are reviewed before payroll processing deadlines."
              },
              {
                icon:"🧾",
                title:"Client Billing Support",
                desc:"Support billing workflows with approved time, project allocation, and evidence packages."
              },
              {
                icon:"🤝",
                title:"Contractor Oversight",
                desc:"Govern contractor records, approvals, and project allocation with enterprise controls."
              },
              {
                icon:"🌐",
                title:"Distributed Workforce Control",
                desc:"Maintain consistent governance across remote, hybrid, field, and multi-location teams."
              },
              {
                icon:"📅",
                title:"Attendance Exception Review",
                desc:"Identify and resolve attendance gaps, missed entries, and unusual patterns."
              },
              {
                icon:"📋",
                title:"Audit Preparation",
                desc:"Maintain structured records, approval history, policy context, and exportable evidence."
              },
              {
                icon:"⚖",
                title:"Legal Hold Support",
                desc:"Preserve relevant workforce records during investigations, audits, or disputes."
              },
              {
                icon:"📊",
                title:"Policy Exception Governance",
                desc:"Document policy exceptions, override decisions, escalation history, and resolutions."
              }
            ].map((item,index)=>(

              <div
                key={index}
                className="
                  relative
                  bg-white
                  dark:bg-slate-800
                  border
                  border-slate-200
                  dark:border-slate-700
                  rounded-2xl
                  p-6
                  shadow-sm
                  overflow-hidden
                "
              >

                <div className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[3px]
                  bg-gradient-to-r
                  from-teal-600
                  to-teal-400
                "/>


                <span className="text-2xl block mb-3">
                  {item.icon}
                </span>


                <h3 className="
                  text-slate-900
                  dark:text-white
                  text-base
                  font-semibold
                  mb-2
                ">
                  {item.title}
                </h3>


                <p className="
                  text-slate-500
                  dark:text-slate-300
                  text-xs
                  leading-relaxed
                ">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>





      {/* ================= SECURITY SECTION ================= */}

      <section className="
        bg-teal-500
        dark:bg-teal-700
        text-white
        py-16
        md:py-24
        px-4
        md:px-6
      ">

        <div className="
          max-w-[1100px]
          mx-auto
          space-y-14
        ">


          <h2 className="
            text-2xl
            md:text-4xl
            text-center
            font-semibold
          ">
            Designed for Security, Retention, and Defensible Records
          </h2>



          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

            {[
              {
                icon:"👤",
                title:"Role-Based Access Control",
                desc:"Define access by role, responsibility, team, department, and administrative authority."
              },
              {
                icon:"📁",
                title:"Data Retention Controls",
                desc:"Support configurable retention settings and deletion safeguards."
              },
              {
                icon:"⚖",
                title:"Legal Hold Workflows",
                desc:"Preserve records when legal, audit, or investigation obligations require retention."
              },
              {
                icon:"🔗",
                title:"Chain-of-Custody Support",
                desc:"Maintain traceable records for events, corrections, approvals, and exports."
              },
              {
                icon:"📸",
                title:"Screenshot and Redaction",
                desc:"Govern screenshot access, permissions, and redaction controls."
              },
              {
                icon:"📋",
                title:"Audit-Grade Evidence",
                desc:"Create evidence packages with timestamps, policy context, and review history."
              },
              {
                icon:"🔒",
                title:"Secure Administration",
                desc:"Permission-separated admin access with security review support."
              },
              {
                icon:"🤖",
                title:"Responsible AI Controls",
                desc:"AI insights supporting human review without automatic workforce decisions."
              }
            ].map((item,index)=>(

              <div
                key={index}
                className="
                  bg-white/10
                  border
                  border-white/20
                  rounded-2xl
                  p-6
                  space-y-3
                "
              >

                <span className="text-2xl block">
                  {item.icon}
                </span>

                <h3 className="
                  text-white
                  text-base
                  font-semibold
                ">
                  {item.title}
                </h3>

                <p className="
                  text-white/70
                  text-xs
                  leading-relaxed
                ">
                  {item.desc}
                </p>

              </div>

            ))}


          </div>


        </div>

      </section>





      {/* ================= IMPLEMENTATION ================= */}

      <section className="
        bg-white
        dark:bg-slate-950
        py-16
        md:py-24
        px-4
        md:px-6
      ">


        <div className="
          max-w-[1052px]
          mx-auto
          space-y-12
        ">


          <div className="text-center space-y-3">

            <h2 className="
              text-2xl
              md:text-4xl
              font-semibold
              text-slate-900
              dark:text-white
            ">
              Built for Governed Enterprise Rollout
            </h2>


            <p className="
              text-slate-500
              dark:text-slate-300
              text-sm
              md:text-base
            ">
              ZoikoTime supports phased deployment aligned to structure,
              policy, roles, communication, and adoption.
            </p>

          </div>



          <div className="
            border
            border-slate-200
            dark:border-slate-700
            rounded-2xl
            overflow-hidden
            divide-y
            divide-slate-200
            dark:divide-slate-700
          ">


            {[
              ["Phase 1","Discovery and Governance Design"],
              ["Phase 2","Configuration and Access Control"],
              ["Phase 3","Pilot and Validation"],
              ["Phase 4","Integrations and Reporting"],
              ["Phase 5","Enterprise Rollout"],
              ["Phase 6","Continuous Governance"]
            ].map((phase,index)=>(

              <div
                key={index}
                className="
                  p-5
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  bg-white
                  dark:bg-slate-900
                "
              >

                <span className="
                  text-teal-600
                  text-xs
                  font-bold
                ">
                  {phase[0]}
                </span>


                <h4 className="
                  text-sm
                  font-semibold
                  text-slate-900
                  dark:text-white
                ">
                  {phase[1]}
                </h4>


              </div>

            ))}

          </div>


        </div>

      </section>





      {/* ================= FAQ ================= */}

      <section className="
        bg-slate-100
        dark:bg-slate-900
        py-16
        md:py-24
        px-4
        md:px-6
      ">


        <div className="
          max-w-[760px]
          mx-auto
        ">


          <h2 className="
            text-2xl
            md:text-4xl
            text-center
            font-semibold
            text-slate-900
            dark:text-white
            mb-10
          ">
            Enterprise Governance FAQs
          </h2>



          <div className="
            bg-white
            dark:bg-slate-800
            rounded-2xl
            overflow-hidden
            divide-y
            divide-slate-200
            dark:divide-slate-700
          ">

            {[
              "What is enterprise workforce governance in ZoikoTime?",
              "Is ZoikoTime just an employee monitoring tool?",
              "Does ZoikoTime automatically discipline workers?",
              "Can ZoikoTime support legal hold?",
              "Does ZoikoTime guarantee compliance?",
              "Is enterprise deployment self-service?"
            ].map((faq,index)=>(

              <div
                key={index}
                className="
                  p-5
                  flex
                  justify-between
                  items-center
                  text-slate-900
                  dark:text-white
                "
              >

                <span className="text-sm md:text-base font-semibold">
                  {faq}
                </span>

                <span className="text-teal-500 text-xl">
                  +
                </span>

              </div>

            ))}

          </div>


        </div>

      </section>





      {/* ================= CTA FOOTER ================= */}

      <section className="
        relative
        bg-gradient-to-r
        from-teal-50
        to-emerald-50
        dark:from-slate-900
        dark:to-slate-800
        py-16
        md:py-20
        px-4
        md:px-6
      ">


        <div className="
          max-w-[1100px]
          mx-auto
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-8
        ">


          <div className="space-y-4">

            <h2 className="
              text-2xl
              md:text-4xl
              font-semibold
              text-slate-900
              dark:text-white
            ">
              Bring Governance to the Workforce Records Your Enterprise Relies On
            </h2>


            <p className="
              text-slate-500
              dark:text-slate-300
            ">
              See how ZoikoTime helps organizations govern workforce records,
              approvals, exceptions, payroll readiness, and audit evidence.
            </p>

          </div>



          <div className="
            flex
            flex-col
            gap-4
          ">

            <Link
            href ="contact-sales"
             className="
              px-8
              py-3.5
              bg-teal-600
              text-white
              rounded-lg
            ">
              Contact Sales
            </Link>


            <Link
            href ="request-a-demo"
             className="
              px-8
              py-3.5
              bg-white
              dark:bg-slate-700
              border
              border-slate-200
              dark:border-slate-600
              rounded-lg
            ">
              Get a Demo
            </Link>


          </div>


        </div>


      </section>


    </div>
  );
}