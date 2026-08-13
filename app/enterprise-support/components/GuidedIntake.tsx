"use client";

import { FormEvent, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const afterSubmitItems = [
  "Your request is qualified and routed to the right owner or queue",
  "You'll see the owner, lifecycle stage, and next action — never left unowned",
  "Security, privacy, and data concerns route through protected, purpose-specific handling",
  "Consequential decisions stay human-authorized — never AI-decided",
];

export default function GuidedIntake() {
  const [requestType, setRequestType] = useState("Product question");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!confirmed) {
      return;
    }

    console.log({
      requestType,
      name,
      email,
      organization,
      description,
    });
  };

  return (
    <section
    id="support"
     className="w-full bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="max-w-[650px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Guided Intake
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              text-3xl
              font-semibold
              leading-[1.15]
              tracking-tight
              text-slate-800
              dark:text-slate-100
              sm:text-4xl
              sm:leading-10
            "
          >
            Submit a support request.
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[600px]
              text-sm
              font-normal
              leading-6
              text-gray-500
              dark:text-slate-400
              sm:text-base
            "
          >
            We collect only the routing information needed. Never include
            passwords, credentials, or other sensitive data in this form.
          </p>
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">

          {/* =======================================================
              FORM CARD
          ======================================================= */}

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-[0_6px_18px_rgba(14,31,61,0.05)]
              dark:border-slate-700
              dark:bg-slate-900
              dark:shadow-[0_6px_18px_rgba(0,0,0,0.2)]
              sm:p-7
              lg:p-8
            "
          >
            <form onSubmit={handleSubmit}>

              {/* =====================================================
                  WARNING
              ===================================================== */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-[10px]
                  border
                  border-orange-200
                  bg-orange-100
                  px-4
                  py-3
                  dark:border-orange-900/60
                  dark:bg-orange-950/40
                "
              >
                {/* Warning Icon */}
                <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center text-yellow-700 dark:text-yellow-400">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 2.5L14 13H2L8 2.5Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8 6V9"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="8"
                      cy="11"
                      r="0.7"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <p className="text-xs font-normal leading-5 text-yellow-900 dark:text-yellow-200">
                  Never include passwords, credentials, exploit details, or
                  other sensitive data below.
                </p>
              </div>

              {/* =====================================================
                  REQUEST TYPE
              ===================================================== */}

              <div className="mt-6">
                <label
                  htmlFor="request-type"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    leading-5
                    text-slate-800
                    dark:text-slate-100
                  "
                >
                  Request type
                </label>

                <input
                  id="request-type"
                  type="text"
                  value={requestType}
                  onChange={(event) => setRequestType(event.target.value)}
                  className="
                    h-11
                    w-full
                    rounded-[10px]
                    border
                    border-slate-200
                    bg-gray-50
                    px-4
                    text-sm
                    font-normal
                    text-slate-800
                    outline-none
                    transition
                    placeholder:text-neutral-500
                    focus:border-teal-500
                    focus:ring-2
                    focus:ring-teal-500/20
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-slate-100
                    dark:placeholder:text-slate-500
                  "
                />
              </div>

              {/* =====================================================
                  NAME + EMAIL
              ===================================================== */}

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="support-name"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      leading-5
                      text-slate-800
                      dark:text-slate-100
                    "
                  >
                    Name
                  </label>

                  <input
                    id="support-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className="
                      h-11
                      w-full
                      rounded-[10px]
                      border
                      border-slate-200
                      bg-gray-50
                      px-4
                      text-sm
                      font-normal
                      text-slate-800
                      outline-none
                      placeholder:text-neutral-500
                      focus:border-teal-500
                      focus:ring-2
                      focus:ring-teal-500/20
                      dark:border-slate-700
                      dark:bg-slate-950
                      dark:text-slate-100
                      dark:placeholder:text-slate-500
                    "
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label
                    htmlFor="support-email"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      leading-5
                      text-slate-800
                      dark:text-slate-100
                    "
                  >
                    Work email
                  </label>

                  <input
                    id="support-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@company.com"
                    className="
                      h-11
                      w-full
                      rounded-[10px]
                      border
                      border-slate-200
                      bg-gray-50
                      px-4
                      text-sm
                      font-normal
                      text-slate-800
                      outline-none
                      placeholder:text-neutral-500
                      focus:border-teal-500
                      focus:ring-2
                      focus:ring-teal-500/20
                      dark:border-slate-700
                      dark:bg-slate-950
                      dark:text-slate-100
                      dark:placeholder:text-slate-500
                    "
                  />
                </div>
              </div>

              {/* =====================================================
                  ORGANIZATION
              ===================================================== */}

              <div className="mt-5">
                <label
                  htmlFor="support-organization"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    leading-5
                    text-slate-800
                    dark:text-slate-100
                  "
                >
                  Organization
                </label>

                <input
                  id="support-organization"
                  type="text"
                  value={organization}
                  onChange={(event) => setOrganization(event.target.value)}
                  placeholder="Company name"
                  className="
                    h-11
                    w-full
                    rounded-[10px]
                    border
                    border-slate-200
                    bg-gray-50
                    px-4
                    text-sm
                    font-normal
                    text-slate-800
                    outline-none
                    placeholder:text-neutral-500
                    focus:border-teal-500
                    focus:ring-2
                    focus:ring-teal-500/20
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-slate-100
                    dark:placeholder:text-slate-500
                  "
                />
              </div>

              {/* =====================================================
                  DESCRIPTION
              ===================================================== */}

              <div className="mt-5">
                <label
                  htmlFor="support-description"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    leading-5
                    text-slate-800
                    dark:text-slate-100
                  "
                >
                  What&apos;s happening?
                </label>

                <textarea
                  id="support-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Describe the issue — no passwords, credentials, or sensitive data."
                  rows={4}
                  className="
                    min-h-[96px]
                    w-full
                    resize-none
                    rounded-[10px]
                    border
                    border-slate-200
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    font-normal
                    leading-5
                    text-slate-800
                    outline-none
                    placeholder:text-neutral-500
                    focus:border-teal-500
                    focus:ring-2
                    focus:ring-teal-500/20
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-slate-100
                    dark:placeholder:text-slate-500
                  "
                />
              </div>

              {/* =====================================================
                  CONFIRMATION
              ===================================================== */}

              <label className="mt-5 flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(event) => setConfirmed(event.target.checked)}
                  className="
                    mt-1
                    h-3
                    w-3
                    shrink-0
                    cursor-pointer
                    rounded
                    border-neutral-400
                    text-teal-600
                    accent-teal-600
                  "
                />

                <span className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  I confirm this request does not include passwords,
                  credentials, or unnecessary sensitive data.
                </span>
              </label>

              {/* =====================================================
                  SUBMIT
              ===================================================== */}

              <button
                type="submit"
                disabled={!confirmed}
                className="
                  mt-7
                  h-11
                  w-full
                  rounded-full
                  bg-teal-600
                  px-6
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-teal-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-teal-500
                  focus:ring-offset-2
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  dark:focus:ring-offset-slate-900
                "
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* =======================================================
              WHAT HAPPENS AFTER SUBMIT
          ======================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-gray-50
              p-6
              dark:border-slate-700
              dark:bg-slate-900
              sm:p-7
            "
          >
            <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
              What happens after you submit
            </h3>

            <div className="mt-6 space-y-5">
              {afterSubmitItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-teal-600
                      dark:text-teal-400
                    "
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}