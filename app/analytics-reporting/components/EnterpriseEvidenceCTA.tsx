// app/components/EnterpriseEvidenceCTA.tsx

import Image from "next/image";
import Link from "next/link";

export default function EnterpriseEvidenceCTA() {
  return (
    <section className="w-full px-4 py-16 sm:px-8 lg:px-32">

      <div
        className="
        mx-auto
        flex
        w-full
        max-w-[1180px]
        flex-col
        gap-8
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0px_8px_24px_0px_rgba(11,18,32,0.06)]
        dark:border-slate-700
        dark:bg-slate-900
        sm:p-10
        lg:flex-row
        lg:p-12
        "
      >

        {/* Content */}

        <div className="flex flex-1 flex-col gap-5">


          <p
            className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-emerald-500
            "
          >
            Evaluate with evidence
          </p>



          <h2
            className="
            text-3xl
            font-bold
            leading-tight
            text-slate-900
            dark:text-white
            sm:text-4xl
            "
          >
            See the records, definitions,
            <br className="hidden sm:block" />
            and evidence behind every
            <br className="hidden sm:block" />
            enterprise view
          </h2>



          <p
            className="
            max-w-[650px]
            text-base
            leading-7
            text-slate-600
            dark:text-slate-300
            "
          >
            Evaluate how ZoikoTime can support governed metrics,
            privacy-respecting dashboards, controlled reports, quality
            review, and evidence-backed exports for your organization.
          </p>




          {/* Buttons */}

          <div className="flex flex-wrap gap-3.5 pt-2">

            <Link
              href="/request-enterprise-demo"
              className="
              rounded-lg
              bg-emerald-500
              px-6
              py-3
              text-base
              font-bold
              text-white
              transition
              hover:bg-emerald-600
              "
            >
              Request Enterprise Demo
            </Link>


            <Link
              href="/contact-sales"
              className="
              rounded-lg
              border
              border-slate-200
              bg-white
              px-6
              py-3
              text-base
              font-bold
              text-slate-900
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-white
              "
            >
              Contact Sales
            </Link>


          </div>




          <a
            href="/trust-center"
            className="
            text-sm
            font-bold
            text-emerald-500
            "
          >
            Visit the Trust Center or request controlled evidence →
          </a>





          {/* Highlights */}

          <div
            className="
            grid
            grid-cols-1
            gap-3
            pt-3
            text-xs
            font-bold
            text-emerald-600
            sm:grid-cols-2
            "
          >

            <span>
              Defined metrics.
            </span>


            <span>
              Visible provenance.
            </span>


            <span>
              Protected small groups.
            </span>


            <span>
              Human interpretation.
            </span>


          </div>




          {/* Existing customer */}

          <p
            className="
            text-xs
            leading-6
            text-slate-500
            dark:text-slate-400
            "
          >

            Existing customer?{" "}

            <a className="font-bold text-emerald-500">
              Open the Analytics Governance Center
            </a>

            , read the{" "}

            <a className="font-bold text-emerald-500">
              documentation
            </a>

            , or contact{" "}

            <a className="font-bold text-emerald-500">
              Enterprise Support
            </a>

            .

          </p>



        </div>





        {/* Image */}

        <div className="flex w-full items-center lg:w-[461px]">

          <Image
            src="/enterprise-evidence.png"
            alt="Enterprise evidence dashboard"
            width={461}
            height={337}
            className="
            w-full
            rounded-[20px]
            border
            border-slate-200
            object-cover
            shadow-[0px_18px_50px_0px_rgba(11,18,32,0.10)]
            dark:border-slate-700
            "
            priority
          />

        </div>



      </div>

    </section>
  );
}