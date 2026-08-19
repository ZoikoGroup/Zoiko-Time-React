"use client";

import React, { useState } from "react";
import {
  FiShield,
  FiClock,
  FiUploadCloud,
  FiCheck,
  FiCalendar,
} from "react-icons/fi";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;

  currentJobTitle: string;
  currentCompany: string;
  yearsOfExperience: string;
  coverLetter: string;
  resume: File | null;

  workAuthorization: string;
  noticePeriod: string;
  earliestStartDate: string;
  compensation: string;
  whyZoikoTime: string;
  howHeard: string;
  responsibleTechnology: boolean;

  recruitmentConsent: boolean;
  keepOnFile: boolean;
};

export default function ApplyToZoikoTime() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",

    currentJobTitle: "",
    currentCompany: "",
    yearsOfExperience: "",
    coverLetter: "",
    resume: null,

    workAuthorization: "",
    noticePeriod: "",
    earliestStartDate: "",
    compensation: "",
    whyZoikoTime: "",
    howHeard: "",
    responsibleTechnology: false,

    recruitmentConsent: false,
    keepOnFile: true,
  });

  const [resumeError, setResumeError] = useState("");

  const steps = [
    "Your details",
    "Experience",
    "Questions",
    "Review",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleResumeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setResumeError("File size must be 5 MB or less.");

      setFormData((prev) => ({
        ...prev,
        resume: null,
      }));

      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setResumeError("Please upload a PDF, DOC, or DOCX file.");

      setFormData((prev) => ({
        ...prev,
        resume: null,
      }));

      return;
    }

    setResumeError("");

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleStepOneSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStepTwoSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.resume) {
      setResumeError("Please upload your CV before continuing.");
      return;
    }

    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStepThreeSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.responsibleTechnology) {
      return;
    }

    setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.recruitmentConsent) {
      return;
    }

    console.log("Application submitted:", formData);

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToStep = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const inputClass = `
    h-11
    w-full
    rounded-[10px]
    border
    border-gray-300
    bg-white
    px-3.5
    text-sm
    text-slate-800
    outline-none
    placeholder:text-neutral-500
    focus:border-teal-600
    focus:ring-1
    focus:ring-teal-600
    dark:border-slate-600
    dark:bg-slate-800
    dark:text-white
    dark:placeholder:text-slate-400
  `;

  const textareaClass = `
    w-full
    resize-none
    rounded-[10px]
    border
    border-gray-300
    bg-white
    px-3.5
    py-3
    text-sm
    leading-5
    text-slate-800
    outline-none
    placeholder:text-neutral-500
    focus:border-teal-600
    focus:ring-1
    focus:ring-teal-600
    dark:border-slate-600
    dark:bg-slate-800
    dark:text-white
    dark:placeholder:text-slate-400
  `;

  const labelClass = `
    mb-2
    block
    text-xs
    font-semibold
    leading-5
    text-slate-800
    dark:text-slate-200
  `;

  const buttonPrimaryClass = `
    h-12
    rounded-[10px]
    bg-teal-600
    px-6
    text-sm
    font-bold
    text-white
    transition
    hover:bg-teal-700
    focus:outline-none
    focus:ring-2
    focus:ring-teal-600
    focus:ring-offset-2
    dark:focus:ring-offset-slate-900
  `;

  const buttonSecondaryClass = `
    h-12
    rounded-[10px]
    border
    border-slate-300
    bg-white
    px-6
    text-sm
    font-bold
    text-slate-800
    transition
    hover:bg-slate-50
    focus:outline-none
    focus:ring-2
    focus:ring-slate-400
    dark:border-slate-600
    dark:bg-slate-900
    dark:text-white
    dark:hover:bg-slate-800
  `;

  /*
   * ============================================================
   * SUBMITTED SCREEN
   * ============================================================
   */

  if (submitted) {
    return (
      <section className="w-full bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <div className="mx-auto w-full max-w-[1220px] px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-[640px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-10">
            
            {/* SUCCESS ICON */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/40">
              <FiCheck
                className="h-8 w-8 text-teal-700 dark:text-teal-400"
                strokeWidth={2.5}
              />
            </div>

            {/* TITLE */}
            <h1 className="mt-5 text-center text-2xl font-bold leading-10 text-slate-800 dark:text-white">
              Application submitted
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-2 max-w-[455px] text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
              Thanks, there. Your application for{" "}
              <span className="font-bold">this role</span> is in. We&apos;ve
              emailed a confirmation to your inbox.
            </p>

            {/* REFERENCE */}
            <div className="mx-auto mt-5 flex h-12 w-44 items-center justify-center rounded-[10px] border border-emerald-100 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40">
              <span className="text-sm font-bold leading-6 text-teal-700 dark:text-teal-400">
                APP-2026-AGNCSQ
              </span>
            </div>

            {/* APPLICATION SUMMARY */}
            <div className="mt-7 rounded-xl border border-slate-200 bg-gray-50 p-5 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Role
                </span>

                <span className="text-right text-xs font-semibold text-slate-800 dark:text-slate-200">
                  this role
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  CV
                </span>

                <span className="max-w-[220px] truncate text-right text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {formData.resume?.name || "—"}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Reference
                </span>

                <span className="text-right text-xs font-semibold text-slate-800 dark:text-slate-200">
                  APP-2026-AGNCSQ
                </span>
              </div>
            </div>

            {/* NEXT STEPS */}
            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/40">
                  <span className="text-xs font-extrabold text-teal-700 dark:text-teal-400">
                    1
                  </span>
                </div>

                <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Our team reviews your application (typically within 5–7
                  business days).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/40">
                  <span className="text-xs font-extrabold text-teal-700 dark:text-teal-400">
                    2
                  </span>
                </div>

                <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                  If there&apos;s a match, we&apos;ll invite you to an intro
                  conversation.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/40">
                  <span className="text-xs font-extrabold text-teal-700 dark:text-teal-400">
                    3
                  </span>
                </div>

                <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                  You&apos;ll hear from us either way — we reply to every
                  applicant.
                </p>
              </div>
            </div>

            {/* BACK BUTTON */}
            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className={buttonPrimaryClass}
              >
                Back to ZoikoTime
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /*
   * ============================================================
   * MAIN APPLICATION
   * ============================================================
   */

  return (
    <section className="w-full bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto w-full max-w-[1220px] px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">

        {/* PAGE TITLE */}
        <h1 className="mb-8 text-[26px] font-extrabold leading-[38px] text-slate-800 dark:text-white sm:text-[28px] lg:mb-10 lg:text-[30px] lg:leading-[48px]">
          Apply to ZoikoTime
        </h1>

        {/* =====================================================
            APPLICATION STEPS
        ====================================================== */}

        <div className="mb-8 w-full overflow-x-auto pb-2 lg:mb-10">
          <div className="flex min-w-max items-center">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = currentStep === stepNumber;
              const isCompleted = currentStep > stepNumber;

              return (
                <React.Fragment key={step}>
                  <button
                    type="button"
                    onClick={() => goToStep(stepNumber)}
                    disabled={!isCompleted && !isActive}
                    className="flex shrink-0 items-center"
                  >
                    <div
                      className={`
                        flex h-6 w-6 items-center justify-center rounded-full
                        text-xs font-extrabold transition
                        ${
                          isActive || isCompleted
                            ? "bg-teal-600 text-white"
                            : "bg-slate-200 text-white dark:bg-slate-700"
                        }
                      `}
                    >
                      {isCompleted ? (
                        <FiCheck className="h-3.5 w-3.5" strokeWidth={3} />
                      ) : (
                        stepNumber
                      )}
                    </div>

                    <span
                      className={`
                        ml-2 whitespace-nowrap text-xs font-semibold leading-5
                        ${
                          isActive || isCompleted
                            ? "text-slate-800 dark:text-slate-200"
                            : "text-gray-500 dark:text-gray-400"
                        }
                      `}
                    >
                      {step}
                    </span>
                  </button>

                  {index < steps.length - 1 && (
                    <div
                      className={`
                        mx-3 h-px w-12 shrink-0
                        ${
                          currentStep > stepNumber
                            ? "bg-teal-600"
                            : "bg-slate-200 dark:bg-slate-700"
                        }
                        sm:w-16 lg:w-24
                      `}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FORM + RIGHT CARD
        ====================================================== */}

        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,673px)_384px]">

          {/* ===================================================
              STEP 1 — YOUR DETAILS
          ==================================================== */}

          {currentStep === 1 && (
            <form
              onSubmit={handleStepOneSubmit}
              className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-7 lg:min-h-[538px]"
            >
              <div className="mb-7">
                <h2 className="text-lg font-bold leading-7 text-slate-800 dark:text-white">
                  Your details
                </h2>

                <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Tell us who you are and how to reach you.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">

                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First name <span className="text-red-700">*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Alex"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last name <span className="text-red-700">*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Kim"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-red-700">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone <span className="text-red-700">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 555 123 4567"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="location" className={labelClass}>
                    Location (city, country){" "}
                    <span className="text-red-700">*</span>
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Berlin, Germany"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className={labelClass}>
                    LinkedIn (optional)
                  </label>

                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className={labelClass}>
                    Portfolio / GitHub (optional)
                  </label>

                  <input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://..."
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-7 flex justify-end">
                <button type="submit" className={buttonPrimaryClass}>
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* ===================================================
              STEP 2 — EXPERIENCE & CV
          ==================================================== */}

          {currentStep === 2 && (
            <form
              onSubmit={handleStepTwoSubmit}
              className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-7"
            >
              <div className="mb-7">
                <h2 className="text-lg font-bold leading-7 text-slate-800 dark:text-white">
                  Experience & CV
                </h2>

                <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Share your background and attach your CV.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="currentJobTitle"
                    className={labelClass}
                  >
                    Current job title
                  </label>

                  <input
                    id="currentJobTitle"
                    name="currentJobTitle"
                    type="text"
                    value={formData.currentJobTitle}
                    onChange={handleChange}
                    placeholder="Senior Engineer"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentCompany"
                    className={labelClass}
                  >
                    Current company
                  </label>

                  <input
                    id="currentCompany"
                    name="currentCompany"
                    type="text"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="yearsOfExperience"
                    className={labelClass}
                  >
                    Years of experience{" "}
                    <span className="text-red-700">*</span>
                  </label>

                  <select
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select...</option>
                    <option value="0-1">0–1 years</option>
                    <option value="1-3">1–3 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5-8">5–8 years</option>
                    <option value="8-10">8–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    Resume / CV <span className="text-red-700">*</span>
                  </label>

                  <label
                    htmlFor="resume"
                    className="flex min-h-[128px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-5 py-6 text-center transition hover:border-teal-600 hover:bg-teal-50/40 dark:border-slate-600 dark:bg-slate-800/60 dark:hover:border-teal-500 dark:hover:bg-slate-800"
                  >
                    <FiUploadCloud
                      className="mb-3 h-6 w-6 text-teal-700 dark:text-teal-400"
                      strokeWidth={1.8}
                    />

                    {formData.resume ? (
                      <>
                        <span className="max-w-full truncate text-xs font-semibold text-slate-800 dark:text-white">
                          {formData.resume.name}
                        </span>

                        <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          Click to replace your CV
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Click to upload your CV
                        </span>

                        <span className="mt-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          PDF, DOC or DOCX · up to 5 MB
                        </span>
                      </>
                    )}

                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      className="hidden"
                    />
                  </label>

                  {resumeError && (
                    <p className="mt-2 text-xs font-medium text-red-600">
                      {resumeError}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="coverLetter"
                    className={labelClass}
                  >
                    Cover letter (optional)
                  </label>

                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="A short note on why you’re a great fit..."
                    rows={5}
                    className={textareaClass}
                  />
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className={buttonSecondaryClass}
                >
                  Back
                </button>

                <button
                  type="submit"
                  className={buttonPrimaryClass}
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* ===================================================
              STEP 3 — QUESTIONS
          ==================================================== */}

          {currentStep === 3 && (
            <form
              onSubmit={handleStepThreeSubmit}
              className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-7"
            >
              {/* HEADER */}
              <div className="mb-7">
                <h2 className="text-lg font-bold leading-8 text-slate-800 dark:text-white">
                  A few questions
                </h2>

                <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  This helps us assess fit and logistics.
                </p>
              </div>

              <div className="space-y-5">

                {/* WORK AUTHORIZATION */}
                <div>
                  <label
                    htmlFor="workAuthorization"
                    className={labelClass}
                  >
                    Work authorization{" "}
                    <span className="text-red-700">*</span>
                  </label>

                  <select
                    id="workAuthorization"
                    name="workAuthorization"
                    value={formData.workAuthorization}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select...</option>
                    <option value="citizen">
                      Citizen / permanent resident
                    </option>
                    <option value="authorized">
                      Authorized to work without sponsorship
                    </option>
                    <option value="sponsorship">
                      Require sponsorship
                    </option>
                  </select>
                </div>

                {/* NOTICE + START DATE */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="noticePeriod"
                      className={labelClass}
                    >
                      Notice period{" "}
                      <span className="text-red-700">*</span>
                    </label>

                    <select
                      id="noticePeriod"
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">Select...</option>
                      <option value="immediate">Immediate</option>
                      <option value="1-week">1 week</option>
                      <option value="2-weeks">2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-months">2 months</option>
                      <option value="3-months">3 months</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="earliestStartDate"
                      className={labelClass}
                    >
                      Earliest start date
                    </label>

                    <div className="relative">
                      <input
                        id="earliestStartDate"
                        name="earliestStartDate"
                        type="date"
                        value={formData.earliestStartDate}
                        onChange={handleChange}
                        className={`${inputClass} pr-10`}
                      />

                      <FiCalendar
                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-400"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>
                </div>

                {/* COMPENSATION */}
                <div>
                  <label
                    htmlFor="compensation"
                    className={labelClass}
                  >
                    Expected annual compensation{" "}
                    <span className="font-normal text-gray-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="compensation"
                    name="compensation"
                    type="text"
                    value={formData.compensation}
                    onChange={handleChange}
                    placeholder="e.g. €80,000"
                    className={inputClass}
                  />
                </div>

                {/* WHY ZOIKOTIME */}
                <div>
                  <label
                    htmlFor="whyZoikoTime"
                    className={labelClass}
                  >
                    Why do you want to work at ZoikoTime?{" "}
                    <span className="text-red-700">*</span>
                  </label>

                  <textarea
                    id="whyZoikoTime"
                    name="whyZoikoTime"
                    value={formData.whyZoikoTime}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What draws you to privacy-led workforce technology?"
                    className={textareaClass}
                  />
                </div>

                {/* HOW DID YOU HEAR */}
                <div>
                  <label
                    htmlFor="howHeard"
                    className={labelClass}
                  >
                    How did you hear about us?{" "}
                    <span className="text-red-700">*</span>
                  </label>

                  <select
                    id="howHeard"
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select...</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="company-website">
                      ZoikoTime website
                    </option>
                    <option value="job-board">Job board</option>
                    <option value="employee-referral">
                      Employee referral
                    </option>
                    <option value="social-media">
                      Social media
                    </option>
                    <option value="search-engine">
                      Search engine
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* RESPONSIBLE TECHNOLOGY */}
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="responsibleTechnology"
                    checked={formData.responsibleTechnology}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 h-3.5 w-3.5 shrink-0 cursor-pointer accent-teal-600"
                  />

                  <span className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                    I understand ZoikoTime builds privacy-led,
                    anti-surveillance workforce technology — verifying
                    work, not monitoring private lives — and I&apos;m
                    excited to build it responsibly.
                    <span className="ml-1 text-teal-600">*</span>
                  </span>
                </label>
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className={buttonSecondaryClass}
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="h-12 rounded-[10px] bg-teal-600 px-5 text-sm font-bold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900 sm:px-6"
                >
                  Review application
                </button>
              </div>
            </form>
          )}

          {/* ===================================================
              STEP 4 — REVIEW & SUBMIT
          ==================================================== */}

          {currentStep === 4 && (
            <form
              onSubmit={handleFinalSubmit}
              className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-7"
            >
              {/* HEADER */}
              <div className="mb-7">
                <h2 className="text-lg font-bold leading-8 text-slate-800 dark:text-white">
                  Review & submit
                </h2>

                <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Check your details, then submit your application.
                </p>
              </div>

              {/* CV + ROLE */}
              <div className="space-y-3 text-xs">

                <div className="grid grid-cols-[150px_1fr] gap-4">
                  <span className="font-semibold text-gray-500 dark:text-gray-400">
                    CV
                  </span>

                  <span
                    className={
                      formData.resume
                        ? "truncate font-semibold text-slate-800 dark:text-slate-200"
                        : "font-normal text-red-700"
                    }
                  >
                    {formData.resume?.name || "Not attached"}
                  </span>
                </div>

                <div className="grid grid-cols-[150px_1fr] gap-4">
                  <span className="font-semibold text-gray-500 dark:text-gray-400">
                    Role
                  </span>

                  <span className="font-normal text-slate-800 dark:text-slate-200">
                    this role
                  </span>
                </div>
              </div>

              {/* VOLUNTARY SELF IDENTIFICATION */}
              <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-gray-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Voluntary self-identification{" "}
                  <span className="font-normal text-gray-400">
                    (optional)
                  </span>
                </span>

                <span className="text-lg font-semibold text-teal-600">
                  +
                </span>
              </div>

              {/* CONSENT */}
              <div className="mt-5">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="recruitmentConsent"
                    checked={formData.recruitmentConsent}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 h-3.5 w-3.5 shrink-0 cursor-pointer accent-teal-600"
                  />

                  <span className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                    I consent to ZoikoTime processing my application data
                    for recruitment purposes in line with the Privacy
                    Notice.
                    <span className="ml-1 text-teal-600">*</span>
                  </span>
                </label>
              </div>

              {/* KEEP ON FILE */}
              <label className="mt-4 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="keepOnFile"
                  checked={formData.keepOnFile}
                  onChange={handleCheckboxChange}
                  className="mt-1 h-3.5 w-3.5 shrink-0 cursor-pointer accent-teal-600"
                />

                <span className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Keep my details on file for future roles that match my
                  profile.
                </span>
              </label>

              {/* BUTTONS */}
              <div className="mt-7 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className={buttonSecondaryClass}
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="h-12 rounded-[10px] bg-teal-600 px-5 text-sm font-bold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900 sm:px-6"
                >
                  Submit application
                </button>
              </div>
            </form>
          )}

          {/* ===================================================
              RIGHT SIDE CARD
          ==================================================== */}

          <aside className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none lg:w-[384px]">

            {/* CARD HEADER */}
            <div className="bg-slate-800 px-5 py-4">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-teal-300">
                Applying for
              </p>

              <p className="mt-1 text-base font-bold leading-6 text-white">
                this role
              </p>
            </div>

            {/* PROGRESS */}
            <div className="flex items-center justify-between px-5 py-5">
              <span className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                Progress
              </span>

              <span className="text-xs font-semibold leading-5 text-slate-800 dark:text-slate-200">
                Step {currentStep} of 4
              </span>
            </div>

            {/* CARD INFORMATION */}
            <div className="border-t border-slate-200 px-5 py-4 dark:border-slate-700">

              {/* SHIELD */}
              <div className="flex items-start gap-3">
                <FiShield
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                  strokeWidth={1.8}
                />

                <p className="text-xs leading-4 text-gray-500 dark:text-gray-400">
                  Your data is used only for recruitment, per our Privacy
                  Notice.
                </p>
              </div>

              {/* CLOCK */}
              <div className="mt-5 flex items-start gap-3">
                <FiClock
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                  strokeWidth={1.8}
                />

                <p className="text-xs leading-4 text-gray-500 dark:text-gray-400">
                  Your answers carry between steps — use Back to edit.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}