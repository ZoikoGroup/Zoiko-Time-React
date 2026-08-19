"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Check,
  X,
} from "lucide-react";

export default function CreateAccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  /* =========================================================
     EMAIL VALIDATION
  ========================================================= */

  const validEmail =
    email.length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* =========================================================
     PASSWORD VALIDATION
  ========================================================= */

  const passwordChecks = {
    length: password.length >= 12,

    upperLower:
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password),

    number: /\d/.test(password),

    symbol: /[^A-Za-z0-9]/.test(password),

    common:
      password.length > 0 &&
      ![
        "password",
        "password123",
        "123456789",
        "1234567890",
        "qwerty",
        "qwerty123",
      ].includes(password.toLowerCase()),

    unique: password.length > 0,
  };

  const strongPassword =
    Object.values(passwordChecks).every(Boolean);

  /* =========================================================
     CONFIRM PASSWORD
  ========================================================= */

  const passwordMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  /* =========================================================
     CREATE ACCOUNT VALIDATION
  ========================================================= */

  const canCreateAccount =
    validEmail &&
    strongPassword &&
    passwordMatch;

  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#020719]
        px-4
        py-8
      "
    >
      <div
        className="
          relative
          w-full
          max-w-[384px]
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-[0px_2px_8px_0px_rgba(10,79,74,0.06),0px_12px_40px_0px_rgba(10,79,74,0.10)]
        "
      >
        {/* =====================================================
            LOGO / ICON
        ===================================================== */}

        <div className="flex justify-center pt-[36.73px]">
          <Image
            src="/login/reset.png"
            alt="Create account"
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
            priority
          />
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mt-[23.99px] text-center">
          <h1
            className="
              text-2xl
              font-normal
              text-emerald-950
            "
          >
            Create your account
          </h1>

          <p
            className="
              mt-[6.99px]
              text-xs
              leading-5
              text-gray-500
            "
          >
            Secure access to your organization&apos;s time and
            <br />
            productivity platform.
          </p>
        </div>

        {/* =====================================================
            FORM CONTENT
        ===================================================== */}

        <div className="px-[36.73px]">

          {/* ===================================================
              WORK EMAIL
          =================================================== */}

          <div className="mt-[29.65px]">
            <label
              className="
                block
                text-xs
                font-semibold
                tracking-tight
                text-emerald-950
              "
            >
              Work email
            </label>

            <div
              className={`
                relative
                mt-[5.63px]
                h-10
                w-full
                overflow-hidden
                rounded-xl
                bg-gray-50
                outline
                outline-1
                outline-offset-[-1px]
                ${
                  email.length === 0
                    ? "outline-slate-200"
                    : validEmail
                      ? "outline-green-600"
                      : "outline-red-500"
                }
              `}
            >
              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="alex.johnson@acmecorp.com"
                className="
                  h-full
                  w-full
                  bg-transparent
                  px-[14.27px]
                  pr-10
                  text-xs
                  text-emerald-950
                  outline-none
                  placeholder:text-gray-400
                "
              />

              {/* Valid email check */}
              {validEmail && (
                <Check
                  size={14}
                  className="
                    absolute
                    right-[10px]
                    top-1/2
                    -translate-y-1/2
                    text-green-600
                  "
                />
              )}

              {/* Invalid email icon */}
              {email.length > 0 &&
                !validEmail && (
                  <X
                    size={14}
                    className="
                      absolute
                      right-[10px]
                      top-1/2
                      -translate-y-1/2
                      text-red-500
                    "
                  />
                )}
            </div>

            {email.length > 0 &&
              !validEmail && (
                <p className="mt-1 text-[11px] text-red-500">
                  Enter a valid work email address.
                </p>
              )}
          </div>

          {/* ===================================================
              PASSWORD
          =================================================== */}

          <div className="mt-[33.7px]">
            <label
              className="
                block
                text-xs
                font-semibold
                tracking-tight
                text-emerald-950
              "
            >
              Password
            </label>

            <div
              className={`
                relative
                mt-[5.63px]
                h-10
                w-full
                overflow-hidden
                rounded-xl
                bg-gray-50
                outline
                outline-1
                outline-offset-[-1px]
                ${
                  password.length === 0
                    ? "outline-slate-200"
                    : strongPassword
                      ? "outline-green-600"
                      : "outline-red-500"
                }
              `}
            >
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Create a password"
                className="
                  h-full
                  w-full
                  bg-transparent
                  px-[14.27px]
                  pr-10
                  text-xs
                  text-emerald-950
                  outline-none
                  placeholder:text-gray-400
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="
                  absolute
                  right-[10px]
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  transition
                  hover:text-emerald-950
                "
              >
                {showPassword ? (
                  <Eye size={15} />
                ) : (
                  <EyeOff size={15} />
                )}
              </button>
            </div>
          </div>

          {/* ===================================================
              PASSWORD STRENGTH BARS
          =================================================== */}

          <div
            className="
              mt-[9.01px]
              flex
              h-1
              w-full
              gap-[7.62px]
            "
          >
            {[0, 1, 2, 3].map((index) => {
              const filled =
                password.length >=
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
                        ? strongPassword
                          ? "bg-green-600"
                          : "bg-red-500"
                        : "bg-zinc-100"
                    }
                  `}
                />
              );
            })}
          </div>

          {/* ===================================================
              PASSWORD STRENGTH
          =================================================== */}

          <div
            className={`
              mt-3
              min-h-24
              w-full
              rounded-xl
              border
              px-[14.49px]
              py-[11px]
              ${
                strongPassword
                  ? "border-green-200 bg-emerald-50"
                  : "border-red-200 bg-rose-50"
              }
            `}
          >
            <div className="flex items-center gap-2">
              {strongPassword ? (
                <Check
                  size={13}
                  className="text-green-600"
                />
              ) : (
                <X
                  size={13}
                  className="text-red-500"
                />
              )}

              <span
                className={`
                  text-xs
                  font-semibold
                  ${
                    strongPassword
                      ? "text-green-600"
                      : "text-red-500"
                  }
                `}
              >
                Password strength:{" "}
                {strongPassword
                  ? "Strong"
                  : "Weak"}
              </span>
            </div>

            <p
              className={`
                mt-[4px]
                text-xs
                leading-4
                ${
                  strongPassword
                    ? "text-green-800"
                    : "text-red-900"
                }
              `}
            >
              {strongPassword
                ? "Great job! This password meets all security requirements."
                : "This password does not meet ZoikoTime's security standard. Please create a stronger password before continuing."}
            </p>
          </div>

          {/* ===================================================
              PASSWORD REQUIREMENTS
          =================================================== */}

          <div
            className="
              mt-[19.48px]
              space-y-[4.88px]
            "
          >
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

          {/* ===================================================
              CONFIRM PASSWORD
          =================================================== */}

          <div className="mt-[25.08px]">
            <label
              className="
                block
                text-xs
                font-semibold
                tracking-tight
                text-emerald-950
              "
            >
              Confirm password
            </label>

            <div
              className={`
                relative
                mt-[5.62px]
                h-10
                w-full
                overflow-hidden
                rounded-xl
                bg-gray-50
                outline
                outline-1
                outline-offset-[-1px]
                ${
                  confirmPassword.length === 0
                    ? "outline-slate-200"
                    : passwordMatch
                      ? "outline-green-600"
                      : "outline-red-500"
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
                  setConfirmPassword(
                    e.target.value
                  )
                }
                placeholder="Re-enter your password"
                className="
                  h-full
                  w-full
                  bg-transparent
                  px-[39.48px]
                  pr-10
                  text-xs
                  text-emerald-950
                  outline-none
                  placeholder:text-neutral-500
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                className="
                  absolute
                  right-[10px]
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  transition
                  hover:text-emerald-950
                "
              >
                {showConfirmPassword ? (
                  <Eye size={15} />
                ) : (
                  <EyeOff size={15} />
                )}
              </button>

              {/* Confirm password check */}
              {passwordMatch && (
                <Check
                  size={14}
                  className="
                    absolute
                    right-[34px]
                    top-1/2
                    -translate-y-1/2
                    text-green-600
                  "
                />
              )}
            </div>

            {confirmPassword.length > 0 &&
              !passwordMatch && (
                <p className="mt-1 text-[11px] text-red-500">
                  Passwords do not match.
                </p>
              )}
          </div>

          {/* ===================================================
              CREATE ACCOUNT
          =================================================== */}

          <button
            type="button"
            disabled={!canCreateAccount}
            className="
              mt-[17.34px]
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-slate-300
              text-sm
              font-semibold
              tracking-tight
              text-white
              transition-all
              disabled:cursor-not-allowed
              enabled:bg-teal-600
              enabled:shadow-[0_4px_14px_rgba(13,148,136,0.30)]
              enabled:hover:bg-teal-700
            "
          >
            <span className="text-base">
              +
            </span>

            Create Account
          </button>

          {/* ===================================================
              TERMS
          =================================================== */}

          <div
            className="
              mb-[24px]
              mt-[17.57px]
              text-center
              text-xs
              leading-4
            "
          >
            <p className="text-gray-400">
              By creating an account, you agree to
              ZoikoTime&apos;s{" "}
              <Link
                href="/terms-of-service"
                className="
                  font-medium
                  text-teal-900
                  hover:underline
                "
              >
                Terms of Service
              </Link>
            </p>

            <p className="mt-1 text-gray-400">
              and acknowledge the{" "}
              <Link
                href="/privacy-notice"
                className="
                  font-medium
                  text-teal-900
                  hover:underline
                "
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
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
    <div
      className="
        flex
        min-h-[13.99px]
        items-center
      "
    >
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
              : "text-red-500"
          }
        `}
      >
        {checked ? (
          <Check
            size={11}
            strokeWidth={2.2}
          />
        ) : (
          <X
            size={11}
            strokeWidth={2.2}
          />
        )}
      </span>

      <span
        className={`
          ml-[5.89px]
          text-xs
          ${
            checked
              ? "text-green-600"
              : "text-red-500"
          }
        `}
      >
        {text}
      </span>
    </div>
  );
}