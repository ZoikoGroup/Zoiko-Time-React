"use client";

import React, { useState } from "react";

export default function LoginCard() {

  const [showPassword, setShowPassword] = useState(false);


  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-50
        dark:bg-slate-950
        px-4
        py-10
      "
    >

      <div
        className="
          w-full
          max-w-[384px]
          min-h-[713px]
          bg-white
          dark:bg-slate-900
          rounded-3xl
          border
          border-slate-200
          dark:border-slate-700
          shadow-[0_12px_40px_rgba(10,79,74,0.10)]
          overflow-hidden
          px-9
          py-10
        "
      >


        {/* Logo */}

        <div
          className="
            h-24
            rounded-2xl
            flex
            items-center
            justify-center
            mb-8
          "
        >

          <div
            className="
              text-3xl
              font-bold
              tracking-tight
              text-sky-900
              dark:text-white
            "
          >
            <span className="text-teal-500">
              Zoiko
            </span>
            Time
          </div>

        </div>





        {/* Heading */}

        <div className="text-center mb-8">

          <h1
            className="
              text-2xl
              font-semibold
              text-emerald-950
              dark:text-white
            "
          >
            Welcome back
          </h1>


          <p
            className="
              mt-3
              text-xs
              leading-5
              text-gray-500
              dark:text-gray-400
            "
          >
            Sign in to access your workspace securely.
          </p>

        </div>






        {/* Email */}

        <div className="mb-5">

          <label
            className="
              block
              mb-2
              text-xs
              font-semibold
              text-emerald-950
              dark:text-gray-200
            "
          >
            Work email
          </label>


          <div
            className="
              h-10
              rounded-xl
              border
              border-slate-200
              dark:border-slate-700
              bg-gray-50
              dark:bg-slate-800
              flex
              items-center
              px-4
            "
          >

            <span className="mr-3 text-gray-400">
              ✉
            </span>


            <input
              type="email"
              placeholder="you@acmecorp.com"
              className="
                w-full
                bg-transparent
                outline-none
                text-xs
                text-slate-700
                dark:text-white
                placeholder:text-gray-400
              "
            />


          </div>

        </div>







        {/* Password */}

        <div className="mb-5">


          <label
            className="
              block
              mb-2
              text-xs
              font-semibold
              text-emerald-950
              dark:text-gray-200
            "
          >
            Password
          </label>



          <div
            className="
              h-10
              rounded-xl
              border
              border-slate-200
              dark:border-slate-700
              bg-gray-50
              dark:bg-slate-800
              flex
              items-center
              px-4
            "
          >

            <span className="mr-3 text-gray-400">
              🔒
            </span>


            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="
                flex-1
                bg-transparent
                outline-none
                text-xs
                text-slate-700
                dark:text-white
                placeholder:text-gray-400
              "
            />


            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="
                text-gray-400
                text-sm
              "
            >
              {showPassword ? "🙈" : "👁"}
            </button>


          </div>


        </div>







        {/* Remember + Forgot */}

        <div
          className="
            flex
            items-center
            justify-between
            mb-8
          "
        >

          <label
            className="
              flex
              items-center
              gap-2
              text-xs
              text-gray-700
              dark:text-gray-300
            "
          >

            <input
              type="checkbox"
              className="
                size-4
                accent-teal-700
              "
            />

            Remember this device

          </label>



          <button
            className="
              text-xs
              font-medium
              text-teal-900
              dark:text-teal-400
            "
          >
            Forgot password?
          </button>


        </div>







        {/* Sign In */}

        <button
          className="
            w-full
            h-11
            rounded-xl
            bg-teal-600
            hover:bg-teal-700
            text-white
            text-sm
            font-semibold
            shadow-[0_4px_14px_rgba(29,111,207,0.30)]
            transition
          "
        >
          Sign In
        </button>







        {/* Divider */}

        <div
          className="
            flex
            items-center
            gap-3
            my-7
          "
        >

          <div className="
            flex-1
            h-px
            bg-slate-200
            dark:bg-slate-700
          "/>


          <span className="
            text-xs
            text-gray-400
          ">
            or continue with
          </span>


          <div className="
            flex-1
            h-px
            bg-slate-200
            dark:bg-slate-700
          "/>


        </div>







        {/* Google */}

        <button
          className="
            w-full
            h-10
            rounded-xl
            border
            border-slate-200
            dark:border-slate-700
            flex
            items-center
            justify-center
            gap-3
            text-xs
            font-medium
            text-gray-700
            dark:text-gray-200
          "
        >

          <span>
            🌈
          </span>

          Continue with Google

        </button>







        {/* Microsoft */}

        <button
          className="
            mt-4
            w-full
            h-10
            rounded-xl
            border
            border-slate-200
            dark:border-slate-700
            flex
            items-center
            justify-center
            gap-3
            text-xs
            font-medium
            text-gray-700
            dark:text-gray-200
          "
        >

          <span>
            🟦
          </span>

          Continue with Microsoft

        </button>







        {/* Footer */}

        <div
          className="
            mt-12
            text-center
          "
        >

          <p
            className="
              text-xs
              text-gray-400
            "
          >
            Need access to your organization?
          </p>


          <button
            className="
              mt-2
              text-xs
              font-semibold
              text-teal-600
              underline
            "
          >
            Contact your administrator.
          </button>


        </div>



      </div>


    </div>
  );
}