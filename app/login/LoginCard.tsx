"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Check,
  ChevronDown,
  ArrowLeft,
  Mail,
} from "lucide-react";

type Tab = "login" | "register" | "reset";

export default function LoginCard() {
  const [activeTab, setActiveTab] = useState<Tab>("login");

  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] =
    useState(false);
  const [showResetPassword, setShowResetPassword] =
    useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [remember, setRemember] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [country, setCountry] = useState("");
  const [registerPassword, setRegisterPassword] =
    useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const passwordChecks = {
    length: resetPassword.length >= 12,

    upperLower:
      /[a-z]/.test(resetPassword) &&
      /[A-Z]/.test(resetPassword),

    number: /\d/.test(resetPassword),

    symbol: /[^A-Za-z0-9]/.test(resetPassword),

    common:
      resetPassword.length > 0 &&
      ![
        "password",
        "password123",
        "123456789",
        "1234567890",
        "qwerty",
        "qwerty123",
      ].includes(resetPassword.toLowerCase()),

    unique: resetPassword.length > 0,
  };

  const strongPassword =
    Object.values(passwordChecks).every(Boolean);

  const changeTab = (tab: Tab) => {
    setActiveTab(tab);

    setShowPassword(false);
    setShowRegisterPassword(false);
    setShowResetPassword(false);
    setShowConfirmPassword(false);
  };

  /* =========================================================
     LOGIN
  ========================================================= */

  if (activeTab === "login") {
    return (
      <div
        className="
          w-full
          max-w-[450px]
          rounded-[28px]
          border
          border-[#EEF4F2]
          bg-white
          px-10
          pt-8
          pb-8
          shadow-[0_20px_60px_rgba(17,54,48,0.10)]
        "
      >
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/login/Group.png"
            alt="Zoiko Time"
            width={170}
            height={58}
            className="h-auto w-auto"
            priority
          />
        </div>

        {/* Heading */}
        <div className="mt-4 text-center">
          <h1
            className="
              whitespace-nowrap
              text-[32px]
              font-bold
              leading-[40px]
              text-[#17342E]
            "
          >
            Welcome back
          </h1>

          <p className="mt-2 text-[15px] leading-6 text-[#70827E]">
            Sign in to access your workspace securely.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-[#E5ECEA]">
          <div className="grid grid-cols-3">
            <button
              type="button"
              onClick={() => changeTab("login")}
              className="
                h-12
                whitespace-nowrap
                border-b-2
                border-[#233B38]
                px-0
                text-[16px]
                font-semibold
                text-[#233B38]
              "
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => changeTab("register")}
              className="
                h-12
                whitespace-nowrap
                border-b-2
                border-transparent
                px-0
                text-[16px]
                font-medium
                text-[#A7B2AF]
              "
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => changeTab("reset")}
              className="
                h-12
                whitespace-nowrap
                border-b-2
                border-transparent
                px-0
                text-[16px]
                font-medium
                text-[#A7B2AF]
              "
            >
              Reset Password
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form
          className="mt-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Work Email */}
          <div>
            <label
              className="
                mb-3
                block
                text-[17px]
                font-semibold
                text-[#18352F]
              "
            >
              Work email
            </label>

            <input
              type="email"
              placeholder="you@acmecorp.com"
              className="
                h-[56px]
                w-full
                rounded-[14px]
                border
                border-[#DCE7E4]
                bg-white
                px-5
                text-[17px]
                text-[#18352F]
                outline-none
                placeholder:text-[#8C9996]
                focus:border-[#0F9D8A]
                focus:ring-2
                focus:ring-[#0F9D8A]/10
              "
            />
          </div>

          {/* Password */}
          <div className="mt-6">
            <label
              className="
                mb-3
                block
                text-[17px]
                font-semibold
                text-[#18352F]
              "
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="
                  h-[56px]
                  w-full
                  rounded-[14px]
                  border
                  border-[#DCE7E4]
                  bg-white
                  px-5
                  pr-14
                  text-[17px]
                  text-[#18352F]
                  outline-none
                  placeholder:text-[#8C9996]
                  focus:border-[#0F9D8A]
                  focus:ring-2
                  focus:ring-[#0F9D8A]/10
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-[#7D8A87]
                  hover:text-[#18352F]
                "
              >
                {showPassword ? (
                  <Eye size={20} />
                ) : (
                  <EyeOff size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setRemember(!remember)}
              className="flex items-center gap-3"
            >
              <span
                className={`
                  flex
                  h-[18px]
                  w-[18px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border
                  ${
                    remember
                      ? "border-[#0F5B53] bg-[#0F5B53]"
                      : "border-[#C9D5D2] bg-white"
                  }
                `}
              >
                {remember && (
                  <Check
                    size={12}
                    className="text-white"
                  />
                )}
              </span>

              <span className="text-[15px] font-medium text-[#556562]">
                Remember this device
              </span>
            </button>

            <button
              type="button"
              onClick={() => changeTab("reset")}
              className="
                whitespace-nowrap
                text-[15px]
                font-semibold
                text-[#0F5B53]
                hover:text-[#0A4741]
              "
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="
              mt-8
              flex
              h-[60px]
              w-full
              items-center
              justify-center
              rounded-[16px]
              bg-[#0F9D8A]
              text-[20px]
              font-semibold
              text-white
              shadow-[0_12px_28px_rgba(15,157,138,0.28)]
              transition-all
              hover:bg-[#0B8A79]
              active:scale-[0.99]
            "
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#E4ECE9]" />

          <span
            className="
              whitespace-nowrap
              text-[15px]
              font-medium
              text-[#94A3A0]
            "
          >
            or continue with
          </span>

          <div className="h-px flex-1 bg-[#E4ECE9]" />
        </div>

        {/* Google */}
        <button
          type="button"
          className="
            mt-8
            flex
            h-[56px]
            w-full
            items-center
            justify-center
            gap-4
            rounded-[16px]
            border
            border-[#DCE7E4]
            bg-white
            text-[17px]
            font-medium
            text-[#304541]
            hover:border-[#C9D5D2]
            hover:bg-[#FAFCFB]
          "
        >
          <Image
            src="/login/google.png"
            alt="Google"
            width={22}
            height={22}
            className="h-[22px] w-[22px]"
          />

          Continue with Google
        </button>

        {/* Microsoft */}
        <button
          type="button"
          className="
            mt-4
            flex
            h-[56px]
            w-full
            items-center
            justify-center
            gap-4
            rounded-[16px]
            border
            border-[#DCE7E4]
            bg-white
            text-[17px]
            font-medium
            text-[#304541]
            hover:border-[#C9D5D2]
            hover:bg-[#FAFCFB]
          "
        >
          <span className="flex h-[22px] w-[22px] items-center justify-center">
            <span className="grid grid-cols-2 gap-[1px]">
              <span className="h-[8px] w-[8px] rounded-[1px] bg-[#F25022]" />
              <span className="h-[8px] w-[8px] rounded-[1px] bg-[#7FBA00]" />
              <span className="h-[8px] w-[8px] rounded-[1px] bg-[#00A4EF]" />
              <span className="h-[8px] w-[8px] rounded-[1px] bg-[#FFB900]" />
            </span>
          </span>

          Continue with Microsoft
        </button>

        {/* Bottom */}
        <div className="mt-10 text-center">
          <p className="text-[15px] leading-6 text-[#8B9996]">
            Need access to your organization?
          </p>

          <button
            type="button"
            className="
              mt-3
              text-[16px]
              font-semibold
              text-[#0F9D8A]
              hover:text-[#0B8A79]
            "
          >
            Contact your administrator.
          </button>
        </div>
      </div>
    );
  }

  /* =========================================================
     REGISTER
  ========================================================= */

  if (activeTab === "register") {
    return (
      <div
        className="
          w-full
          max-w-[622.83px]
          rounded-[28px]
          bg-white
          px-[64px]
          pb-8
          pt-[56px]
          shadow-[0_20px_60px_rgba(17,54,48,0.10)]
        "
      >
        {/* Figma top spacing */}
        <div className="h-14 w-full" />

        {/* Tabs */}
        <div className="h-12 w-full border-b-[0.6px] border-slate-200">
          <div className="grid h-12 grid-cols-3">
            <button
              type="button"
              onClick={() => changeTab("login")}
              className="
                h-12
                whitespace-nowrap
                border-b-2
                border-transparent
                text-center
                text-base
                font-semibold
                text-slate-500
              "
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => changeTab("register")}
              className="
                h-12
                whitespace-nowrap
                border-b-2
                border-teal-500
                text-center
                text-base
                font-semibold
                text-teal-600
              "
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => changeTab("reset")}
              className="
                h-12
                whitespace-nowrap
                border-b-2
                border-transparent
                text-center
                text-base
                font-semibold
                text-slate-500
              "
            >
              Reset Password
            </button>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-[29.42px]">
          <h1 className="text-3xl font-bold leading-10 text-slate-900">
            Create your workspace
          </h1>

          <p className="mt-[9.79px] text-sm font-normal leading-5 text-slate-500">
            Set up your administrator account and provision your
            organisation&apos;s
            <br />
            ZoikoTime workspace.
          </p>
        </div>

        <form
          className="mt-[43.2px]"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Administrator Identity */}
          <div className="flex h-4 items-center">
            <span
              className="
                whitespace-nowrap
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-teal-600
              "
            >
              Administrator Identity
            </span>

            <div className="ml-4 h-px flex-1 bg-slate-200" />
          </div>

          {/* First + Last Name */}
          <div className="mt-[20px] grid grid-cols-2 gap-[15.41px]">
            <div>
              <label className="block text-sm font-bold leading-5 text-slate-900">
                First name{" "}
                <span className="text-teal-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Jane"
                className="
                  mt-[8.99px]
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-[17.19px]
                  text-base
                  text-slate-900
                  outline-none
                  placeholder:text-slate-400
                  focus:border-teal-500
                "
              />
            </div>

            <div>
              <label className="block text-sm font-bold leading-5 text-slate-900">
                Last name{" "}
                <span className="text-teal-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Smith"
                className="
                  mt-[8.99px]
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-[17.19px]
                  text-base
                  text-slate-900
                  outline-none
                  placeholder:text-slate-400
                  focus:border-teal-500
                "
              />
            </div>
          </div>

          {/* Work Email */}
          <div className="mt-[32.43px]">
            <label className="block text-sm font-bold leading-5 text-slate-900">
              Work email{" "}
              <span className="text-teal-500">*</span>
            </label>

            <div className="relative mt-[8.99px]">
              <Mail
                size={16}
                className="
                  absolute
                  left-[14px]
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="email"
                placeholder="jane@company.com"
                className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  pl-[45.18px]
                  pr-4
                  text-base
                  text-slate-900
                  outline-none
                  placeholder:text-slate-400
                  focus:border-teal-500
                "
              />
            </div>

            <p className="mt-[8.81px] text-xs leading-5 text-slate-500">
              Use your organisation&apos;s email address. Disposable email
              domains are not
              <br />
              permitted.
            </p>
          </div>

          {/* Password */}
          <div className="mt-[34.13px]">
            <label className="block text-sm font-bold leading-5 text-slate-900">
              Password{" "}
              <span className="text-teal-500">*</span>
            </label>

            <div className="relative mt-[8.99px]">
              <input
                type={
                  showRegisterPassword
                    ? "text"
                    : "password"
                }
                value={registerPassword}
                onChange={(e) =>
                  setRegisterPassword(e.target.value)
                }
                placeholder="Create a strong password"
                className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-[17.19px]
                  pr-12
                  text-base
                  text-slate-900
                  outline-none
                  placeholder:text-slate-400
                  focus:border-teal-500
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowRegisterPassword(
                    !showRegisterPassword
                  )
                }
                className="
                  absolute
                  right-[14px]
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              >
                {showRegisterPassword ? (
                  <Eye size={19} />
                ) : (
                  <EyeOff size={19} />
                )}
              </button>
            </div>

            <p className="mt-[8.81px] text-xs leading-5 text-slate-500">
              Minimum 8 characters. We check against known compromised
              passwords.
            </p>
          </div>

          {/* Company Workspace */}
          <div className="mt-[39.89px] flex h-4 items-center">
            <span
              className="
                whitespace-nowrap
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-teal-600
              "
            >
              Company Workspace
            </span>

            <div className="ml-4 h-px flex-1 bg-slate-200" />
          </div>

          {/* Company Name */}
          <div className="mt-[20px]">
            <label className="block text-sm font-bold leading-5 text-slate-900">
              Company name{" "}
              <span className="text-teal-500">*</span>
            </label>

            <input
              type="text"
              placeholder="Acme Corp"
              className="
                mt-[8.99px]
                h-12
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-[17.19px]
                text-base
                text-slate-900
                outline-none
                placeholder:text-slate-400
                focus:border-teal-500
              "
            />

            <p className="mt-[8.81px] text-xs leading-5 text-slate-500">
              Your company&apos;s legal or trading name. Full legal name can
              be confirmed at billing.
            </p>
          </div>

          {/* Registered Country */}
          <div className="mt-[25.84px]">
            <label className="block text-sm font-bold leading-5 text-slate-900">
              Company registered country{" "}
              <span className="text-teal-500">*</span>
            </label>

            <div className="relative mt-[8.99px]">
              <select
                value={country}
                onChange={(e) =>
                  setCountry(e.target.value)
                }
                className="
                  h-12
                  w-full
                  appearance-none
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-[17.19px]
                  pr-12
                  text-base
                  text-slate-400
                  outline-none
                  focus:border-teal-500
                "
              >
                <option value="">
                  Select registered country…
                </option>

                <option value="india">India</option>

                <option value="usa">
                  United States
                </option>

                <option value="uk">
                  United Kingdom
                </option>

                <option value="germany">
                  Germany
                </option>

                <option value="france">
                  France
                </option>

                <option value="canada">
                  Canada
                </option>

                <option value="australia">
                  Australia
                </option>
              </select>

              <ChevronDown
                size={16}
                className="
                  pointer-events-none
                  absolute
                  right-[14px]
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />
            </div>

            <p className="mt-[8.81px] text-xs leading-5 text-slate-500">
              Determines public holidays, local law defaults, currency, and
              legal terms.
            </p>
          </div>

          {/* Workspace URL */}
          <div className="mt-[25.84px]">
            <label className="block text-sm font-bold leading-5 text-slate-900">
              Workspace URL{" "}
              <span className="text-teal-500">*</span>
            </label>

            <div className="mt-[8.99px] flex h-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div
                className="
                  flex
                  h-full
                  shrink-0
                  items-center
                  border-r-[0.6px]
                  border-slate-200
                  bg-slate-50
                  px-[14px]
                  font-mono
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                app.zoikotime.com/
              </div>

              <input
                type="text"
                placeholder="your-company"
                className="
                  min-w-0
                  flex-1
                  px-4
                  text-base
                  text-slate-900
                  outline-none
                  placeholder:text-slate-400
                "
              />
            </div>

            <p className="mt-[8.81px] text-xs leading-5 text-slate-500">
              Auto-generated from your company name. Edit to customise.
            </p>
          </div>

          {/* Legal & Authority */}
          <div className="mt-[40.85px] flex h-4 items-center">
            <span
              className="
                whitespace-nowrap
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-teal-600
              "
            >
              Legal &amp; Authority
            </span>

            <div className="ml-4 h-px flex-1 bg-slate-200" />
          </div>

          {/* Authorization */}
          <button
            type="button"
            onClick={() =>
              setAuthorized(!authorized)
            }
            className="
              mt-[20px]
              flex
              w-full
              items-start
              gap-[20.99px]
              text-left
            "
          >
            <span
              className={`
                mt-[2px]
                flex
                h-4
                w-4
                shrink-0
                items-center
                justify-center
                rounded-[5px]
                border
                ${
                  authorized
                    ? "border-teal-600 bg-teal-600"
                    : "border-slate-300 bg-white"
                }
              `}
            >
              {authorized && (
                <Check
                  size={11}
                  className="text-white"
                />
              )}
            </span>

            <span className="text-sm leading-5 text-slate-700">
              I confirm that I am authorised to create or evaluate a
              ZoikoTime
              <br />
              workspace for this organisation.
            </span>
          </button>

          {/* Terms */}
          <div className="mt-[13.37px] flex w-full items-start gap-[20.99px] text-left">
            {/* Checkbox */}
            <button
              type="button"
              onClick={() =>
                setAcceptedTerms(!acceptedTerms)
              }
              aria-label="Accept Terms and Privacy Notice"
              className={`
                mt-[2px]
                flex
                h-4
                w-4
                shrink-0
                items-center
                justify-center
                rounded-[5px]
                border
                ${
                  acceptedTerms
                    ? "border-teal-600 bg-teal-600"
                    : "border-slate-300 bg-white"
                }
              `}
            >
              {acceptedTerms && (
                <Check
                  size={11}
                  className="text-white"
                />
              )}
            </button>

            {/* Legal Text */}
            <span className="text-sm leading-5 text-slate-700">
              By creating a workspace, I agree to ZoikoTime&apos;s{" "}

              <Link
                href="/terms-of-service"
                className="
                  font-semibold
                  text-teal-600
                  hover:text-teal-700
                  hover:underline
                "
              >
                Terms of Service
              </Link>
              ,

              <br />

              <Link
                href="/privacy-notice"
                className="
                  font-semibold
                  text-teal-600
                  hover:text-teal-700
                  hover:underline
                "
              >
                Privacy Notice
              </Link>
              , and{" "}

              <Link
                href="/data-processing-addendum"
                className="
                  font-semibold
                  text-teal-600
                  hover:text-teal-700
                  hover:underline
                "
              >
                Data Processing terms
              </Link>{" "}

              where applicable.
            </span>
          </div>

          {/* Create Workspace */}
          <button
            type="submit"
            className="
              mt-[21.38px]
              flex
              h-14
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-b
              from-teal-500
              to-teal-600
              text-base
              font-bold
              text-white
              shadow-[0_8px_24px_rgba(13,148,136,0.28)]
              hover:from-teal-600
              hover:to-teal-700
            "
          >
            <span className="text-[22px] font-normal leading-none">
              +
            </span>

            Create workspace
          </button>

          {/* Footer */}
          <div className="mt-[18px] text-center">
            <p className="text-xs leading-5 text-slate-500">
              Global platform with US and European operations.
            </p>

            <p className="text-xs leading-5 text-slate-500">
              EU data residency available on eligible plans.

              <span className="mx-2 text-slate-300">
                ·
              </span>

              <span className="font-semibold text-teal-600">
                Data residency info
              </span>
            </p>
          </div>
        </form>
      </div>
    );
  }

  /* =========================================================
     RESET PASSWORD
  ========================================================= */

  return (
    <div
      className="
        w-full
        max-w-[384px]
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-[0_2px_8px_rgba(10,79,74,0.06),0_12px_40px_rgba(10,79,74,0.10)]
      "
    >
      {/* Reset Image */}
      <div className="flex justify-center pt-[36.73px]">
        <Image
          src="/login/reset.png"
          alt="Reset password"
          width={64}
          height={64}
          className="h-16 w-16 object-contain"
        />
      </div>

      {/* Heading */}
      <div className="mt-[23.99px] text-center">
        <h1 className="text-xl font-normal text-emerald-950">
          Reset your password
        </h1>

        <p className="mt-[6.99px] text-xs leading-5 text-gray-500">
          Create a new password for your ZoikoTime account.
        </p>
      </div>

      {/* New Password */}
      <div className="mt-[29.65px] px-[36.74px]">
        <label className="block text-xs font-semibold tracking-tight text-emerald-950">
          New password
        </label>

        <div className="relative mt-[5.63px] h-10 w-full overflow-hidden rounded-xl border border-green-600 bg-gray-50">
          <input
            type={
              showResetPassword
                ? "text"
                : "password"
            }
            value={resetPassword}
            onChange={(e) =>
              setResetPassword(e.target.value)
            }
            placeholder="••••••••••••••"
            className="
              h-full
              w-full
              bg-transparent
              px-[39.48px]
              pr-10
              text-xs
              text-emerald-950
              outline-none
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowResetPassword(
                !showResetPassword
              )
            }
            className="
              absolute
              right-[10px]
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          >
            {showResetPassword ? (
              <Eye size={15} />
            ) : (
              <EyeOff size={15} />
            )}
          </button>
        </div>

        {/* Strength Bars */}
        <div className="mt-[9.01px] flex h-1 w-full gap-[7.62px]">
          {[0, 1, 2, 3].map((index) => {
            const filled =
              strongPassword ||
              resetPassword.length >=
                (index + 1) * 3;

            return (
              <div
                key={index}
                className={`
                  h-1
                  flex-1
                  rounded-[2px]
                  ${
                    filled
                      ? "bg-green-600"
                      : "bg-slate-200"
                  }
                `}
              />
            );
          })}
        </div>

        {/* Password Strength */}
        <div
          className="
            mt-2
            h-16
            w-full
            rounded-xl
            border
            border-green-300
            bg-emerald-50
            px-[14.48px]
            py-[11px]
          "
        >
          <div className="flex items-center gap-2">
            <Check
              size={13}
              className="text-green-600"
            />

            <span className="text-xs font-semibold text-green-600">
              Password strength:{" "}
              {strongPassword
                ? "Strong"
                : "Needs improvement"}
            </span>
          </div>

          <p className="mt-[4px] text-xs leading-3 text-green-800">
            {strongPassword
              ? "Great job! This password meets all security requirements."
              : "Use the requirements below to create a stronger password."}
          </p>
        </div>

        {/* Password Requirements */}
        <div className="mt-[19.48px] space-y-[4.88px]">
          <PasswordRequirement
            checked={passwordChecks.length}
            text="At least 12 characters"
          />

          <PasswordRequirement
            checked={passwordChecks.upperLower}
            text="Uppercase and lowercase letters"
          />

          <PasswordRequirement
            checked={passwordChecks.number}
            text="Number"
          />

          <PasswordRequirement
            checked={passwordChecks.symbol}
            text="Symbol"
          />

          <PasswordRequirement
            checked={passwordChecks.common}
            text="Not commonly used"
          />

          <PasswordRequirement
            checked={passwordChecks.unique}
            text="Not previously used on this account"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-[25.08px]">
          <label className="block text-xs font-semibold tracking-tight text-emerald-950">
            Confirm new password
          </label>

          <div
            className={`
              relative
              mt-[5.62px]
              h-10
              w-full
              overflow-hidden
              rounded-xl
              border
              bg-gray-50
              ${
                confirmPassword &&
                confirmPassword === resetPassword
                  ? "border-green-600"
                  : "border-slate-200"
              }
            `}
          >
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="••••••••••••••"
              className="
                h-full
                w-full
                bg-transparent
                px-[39.48px]
                pr-10
                text-xs
                text-emerald-950
                outline-none
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="
                absolute
                right-[10px]
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            >
              {showConfirmPassword ? (
                <Eye size={15} />
              ) : (
                <EyeOff size={15} />
              )}
            </button>
          </div>
        </div>

        {/* Update Password */}
        <button
          type="button"
          disabled={
            !strongPassword ||
            !resetPassword ||
            resetPassword !== confirmPassword
          }
          className="
            mt-[17.34px]
            flex
            h-11
            w-full
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-blue-800
            text-sm
            font-semibold
            tracking-tight
            text-white
            shadow-[0_4px_14px_rgba(29,111,207,0.30)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Update Password
        </button>

        {/* Back to Sign In */}
        <button
          type="button"
          onClick={() => changeTab("login")}
          className="
            mx-auto
            mt-[17.57px]
            flex
            items-center
            justify-center
            gap-1
            text-xs
            font-medium
            text-teal-900
          "
        >
          <ArrowLeft size={12} />
          Back to Sign In
        </button>

        {/* Security Note */}
        <div className="mb-[34px] mt-[20.65px]">
          <p className="text-xs leading-4 text-gray-500">
            Use a unique password you do not use on other services.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PASSWORD REQUIREMENT
========================================================= */

function PasswordRequirement({
  checked,
  text,
}: {
  checked: boolean;
  text: string;
}) {
  return (
    <div className="flex h-[13.99px] items-center">
      <span
        className={`
          flex
          h-3
          w-3
          shrink-0
          items-center
          justify-center
          ${
            checked
              ? "text-green-600"
              : "text-slate-400"
          }
        `}
      >
        <Check
          size={11}
          strokeWidth={2.2}
        />
      </span>

      <span
        className={`
          ml-[5.89px]
          text-xs
          ${
            checked
              ? "text-green-600"
              : "text-slate-500"
          }
        `}
      >
        {text}
      </span>
    </div>
  );
}