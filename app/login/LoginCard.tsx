"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="
        w-full
        max-w-[384px]
        rounded-3xl
        bg-white
        px-6
        py-7
        shadow-[0px_2px_8px_rgba(10,79,74,0.06),0px_12px_40px_rgba(10,79,74,0.10)]
        outline
        outline-1
        outline-gray-100
        transition-colors

        sm:px-8
        sm:py-8

        dark:bg-slate-900
        dark:outline-slate-800
        dark:shadow-[0px_12px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* Logo */}
      <div className="mb-7 flex justify-center sm:mb-8">
        <Image
          src="/login/Group.png"
          alt="Zoiko Time"
          width={120}
          height={45}
          className="h-auto w-auto"
        />
      </div>

      {/* Heading */}
      <div className="mb-7">
        <h1 className="text-2xl font-semibold text-emerald-950 dark:text-white">
          Welcome back
        </h1>

        <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-slate-400">
          Sign in to access your workspace securely.
        </p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="mb-2 block text-xs font-semibold tracking-tight text-emerald-950 dark:text-slate-200">
          Work email
        </label>

        <input
          type="email"
          placeholder="you@acmecorp.com"
          className="
            h-11
            w-full
            rounded-lg
            border
            border-gray-200
            bg-white
            px-3
            text-xs
            text-gray-800
            outline-none
            placeholder:text-neutral-500
            focus:border-teal-500

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:placeholder:text-slate-500
          "
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="mb-2 block text-xs font-semibold tracking-tight text-emerald-950 dark:text-slate-200">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••"
            className="
              h-11
              w-full
              rounded-lg
              border
              border-gray-200
              bg-white
              px-3
              pr-10
              text-xs
              text-gray-800
              outline-none
              placeholder:text-gray-700
              focus:border-teal-500

              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              dark:placeholder:text-slate-400
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 dark:text-slate-400"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "◉" : "◌"}
          </button>
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-xs text-gray-700 dark:text-slate-300">
          <input
            type="checkbox"
            className="h-3.5 w-3.5 accent-teal-600"
          />

          <span className="whitespace-nowrap">
            Remember this device
          </span>
        </label>

        <button
          type="button"
          className="whitespace-nowrap text-xs font-medium text-teal-900 dark:text-teal-400"
        >
          Forgot password?
        </button>
      </div>

      {/* Sign In */}
      <button
        type="button"
        className="
          h-11
          w-full
          rounded-lg
          bg-teal-600
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-teal-700
          dark:bg-teal-600
          dark:hover:bg-teal-500
        "
      >
        Sign In
      </button>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200 dark:bg-slate-700" />

        <span className="whitespace-nowrap text-xs font-medium text-gray-400 dark:text-slate-500">
          or continue with
        </span>

        <div className="h-px flex-1 bg-gray-200 dark:bg-slate-700" />
      </div>

      {/* Google */}
      <button
        type="button"
        className="
          mb-3
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-3
          rounded-lg
          border
          border-gray-200
          bg-white
          text-xs
          font-medium
          text-gray-700
          transition
          hover:bg-gray-50

          dark:border-slate-700
          dark:bg-slate-800
          dark:text-slate-200
          dark:hover:bg-slate-700
        "
      >
        <Image
          src="/login/google.png"
          alt="Google"
          width={18}
          height={18}
        />

        Continue with Google
      </button>

      {/* Microsoft */}
      <button
        type="button"
        className="
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-3
          rounded-lg
          border
          border-gray-200
          bg-white
          text-xs
          font-medium
          text-gray-700
          transition
          hover:bg-gray-50

          dark:border-slate-700
          dark:bg-slate-800
          dark:text-slate-200
          dark:hover:bg-slate-700
        "
      >
        <span className="grid grid-cols-2 gap-[2px]">
          <span className="h-[7px] w-[7px] bg-red-500" />
          <span className="h-[7px] w-[7px] bg-green-500" />
          <span className="h-[7px] w-[7px] bg-blue-500" />
          <span className="h-[7px] w-[7px] bg-yellow-500" />
        </span>

        Continue with Microsoft
      </button>

      {/* Bottom Text */}
      <p className="mt-6 text-center text-xs leading-4 text-gray-400 dark:text-slate-500">
        Need access to your organization?{" "}
        <button
          type="button"
          className="font-semibold text-teal-600 underline dark:text-teal-400"
        >
          Contact your administrator.
        </button>
      </p>
    </div>
  );
}