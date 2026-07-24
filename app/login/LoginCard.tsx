"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <div
      className="
        w-full
        max-w-[450px]
        rounded-[28px]
        bg-white
        px-10
        pt-8
        pb-8
        shadow-[0_20px_60px_rgba(17,54,48,0.10)]
        border
        border-[#EEF4F2]
      "
    >
      
      {/* Logo */}
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
  <h1 className="text-[32px] font-bold leading-[40px] text-[#17342E] whitespace-nowrap">
    Welcome back
  </h1>

  <p className="mt-2 text-[15px] leading-6 text-[#70827E]">
    Sign in to access your workspace securely.
  </p>
</div>

      {/* Tabs */}
      <div className="mt-8 border-b border-[#E5ECEA]">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="
              h-12
              px-8
              border-b-2
              border-[#233B38]
              text-[16px]
              font-semibold
              text-[#233B38]
            "
          >
            Login
          </button>

          <button
            type="button"
            className="
              h-12
              px-4
              text-[16px]
              font-medium
              text-[#A7B2AF]
            "
          >
            Register
          </button>

          <button
            type="button"
            className="
              h-12
              px-2
              text-[16px]
              font-medium
              text-[#A7B2AF]
            "
          >
            Reset Password
          </button>
        </div>
      </div>

            {/* Form */}
      <form className="mt-8">
        {/* Work Email */}
        <div>
          <label className="mb-3 block text-[17px] font-semibold text-[#18352F]">
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
              placeholder:text-[#8C9996]
              outline-none
              transition-all
              focus:border-[#0F9D8A]
              focus:ring-2
              focus:ring-[#0F9D8A]/10
            "
          />
        </div>

        {/* Password */}
        <div className="mt-6">
          <label className="mb-3 block text-[17px] font-semibold text-[#18352F]">
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
                placeholder:text-[#8C9996]
                outline-none
                transition-all
                focus:border-[#0F9D8A]
                focus:ring-2
                focus:ring-[#0F9D8A]/10
              "
            />

            <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="
    absolute
    right-5
    top-1/2
    -translate-y-1/2
    text-[#7D8A87]
    transition-colors
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
      </form>
              {/* Remember + Forgot */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setRemember(!remember)}
            className="flex items-center gap-3"
          >
            <span
              className={`flex h-[18px] w-[18px] items-center justify-center rounded-[4px] border transition-all ${
                remember
                  ? "border-[#0F5B53] bg-[#0F5B53]"
                  : "border-[#C9D5D2] bg-white"
              }`}
            >
              {remember && <Check size={12} className="text-white" />}
            </span>

            <span className="text-[15px] font-medium text-[#556562]">
              Remember this device
            </span>
          </button>

          <button
            type="button"
            className="text-[15px] font-semibold text-[#0F5B53] transition-colors hover:text-[#0A4741]"
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
            {/* Divider */}
      <div className="mt-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#E4ECE9]" />

        <span className="whitespace-nowrap text-[15px] font-medium text-[#94A3A0]">
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
          transition-all
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
    transition-all
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
            transition-colors
            hover:text-[#0B8A79]
          "
        >
          Contact your administrator.
        </button>
      </div>
    </div>
  );
}