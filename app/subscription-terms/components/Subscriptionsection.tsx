import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Subscriptionsection() {
     const points = [
    "30-day free trial",
    "Monthly & annual billing",
    "User-based subscriptions",
    "Renewals & cancellations",
    "Plan changes",
    "Taxes & payment processing",
    "Enterprise order forms",
  ];
  return (
     <div className="relative min-h-[620px] overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-160px] h-96 w-[760px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl" />


      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">

        {/* Left Section */}
        <div>

          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Subscription Terms
          </p>


          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-800 dark:text-white sm:text-5xl">
            Clear subscription terms
            <br />
            for{" "}
            <span className="text-teal-600">
              ZoikoTime customers
            </span>
          </h1>


          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 dark:text-gray-300">
            Review how ZoikoTime handles free trials, billing, renewals,
            cancellations, plan changes, user counts, taxes, refunds, data
            access, and enterprise agreements.
          </p>


          {/* Info Box */}
          <div className="mt-8 max-w-xl rounded-r-lg border-l-[3px] border-emerald-100 bg-gray-50 p-5 dark:border-teal-700 dark:bg-gray-800">

            <p className="text-sm leading-6 text-gray-500 dark:text-gray-300">
              This page summarizes common ZoikoTime subscription rules in plain
              English. Specific terms may vary based on your plan, checkout
              flow, order form, customer agreement, country, payment method,
              and applicable law.
            </p>

          </div>


          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <Link
            href ="/pricing#plans"
             className="rounded-lg bg-teal-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/30 hover:bg-teal-700">
              View Plans
            </Link>


            <Link
            href="contact-sales"
             className="rounded-lg border border-gray-300 bg-white px-7 py-3 text-base font-semibold text-slate-800 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              Contact Sales
            </Link>

          </div>


          <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            ZoikoTime is a platform of Zoiko Tech Inc., a technology subsidiary
            of Zoiko Group Inc.
          </p>

        </div>



        {/* Right Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0px_10px_30px_rgba(14,31,61,0.1)] dark:border-gray-700 dark:bg-gray-800">

          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Subscription at a glance
          </h2>


          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            At a glance
          </p>


          <ul className="mt-8 space-y-5">

            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-4 text-sm font-medium text-slate-800 dark:text-gray-200"
              >

                <Image
  src="/subscriptionsection/check.png"
  alt="check"
  width={16}
  height={16}
/>

                {point}

              </li>
            ))}

          </ul>

        </div>


      </div>

    </div>
  );
}

