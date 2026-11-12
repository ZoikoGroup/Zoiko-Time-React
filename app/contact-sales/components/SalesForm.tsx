"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, CircleCheck, Loader2, Lock } from "lucide-react";

const TOPICS = [
  "Pricing & plans",
  "Product demo",
  "Implementation & rollout",
  "Security & compliance review",
  "Procurement & legal",
  "Enterprise deployment",
  "Something else",
];

const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,001–5,000", "5,000+"];

const COUNTRIES = [
  "Australia", "Austria", "Belgium", "Brazil", "Canada", "China", "Denmark", "Finland",
  "France", "Germany", "Hong Kong", "India", "Indonesia", "Ireland", "Israel", "Italy",
  "Japan", "Malaysia", "Mexico", "Netherlands", "New Zealand", "Nigeria", "Norway",
  "Philippines", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Singapore",
  "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "United Arab Emirates",
  "United Kingdom", "United States", "Other",
];

const MESSAGE_MAX = 1000;

type Fields = {
  topic: string;
  teamSize: string;
  fullName: string;
  email: string;
  company: string;
  country: string;
  message: string;
};
type FieldName = keyof Fields;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Fields = {
  topic: "",
  teamSize: "",
  fullName: "",
  email: "",
  company: "",
  country: "",
  message: "",
};

/** Order used to focus the first invalid field. */
const FIELD_ORDER: FieldName[] = ["topic", "teamSize", "fullName", "email", "company", "country", "message"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateField(name: FieldName, raw: string): string | undefined {
  const value = raw.trim();
  switch (name) {
    case "topic":
      return value ? undefined : "Please choose a topic.";
    case "teamSize":
      return value ? undefined : "Please select your team size.";
    case "fullName":
      if (!value) return "Please enter your full name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      if (value.length > 100) return "Name must be 100 characters or fewer.";
      return /^[\p{L}\p{M}' .-]+$/u.test(value) ? undefined : "Name can only contain letters, spaces, hyphens and apostrophes.";
    case "email":
      if (!value) return "Please enter your work email.";
      return EMAIL_RE.test(value) ? undefined : "Please enter a valid email address.";
    case "company":
      if (!value) return "Please enter your company name.";
      if (value.length < 2) return "Company name must be at least 2 characters.";
      return value.length > 120 ? "Company name must be 120 characters or fewer." : undefined;
    case "country":
      return value ? undefined : "Please select your country or region.";
    case "message":
      return value.length > MESSAGE_MAX ? `Message must be ${MESSAGE_MAX} characters or fewer.` : undefined;
  }
}

function validateAll(fields: Fields): Errors {
  const errors: Errors = {};
  for (const name of FIELD_ORDER) {
    const error = validateField(name, fields[name]);
    if (error) errors[name] = error;
  }
  return errors;
}

/**
 * Sends the inquiry. The site is a static export, so there is no built-in API route.
 * Set NEXT_PUBLIC_SALES_FORM_ENDPOINT (e.g. a CRM / form-service URL that accepts JSON)
 * to deliver submissions; without it the form validates and shows the success state only.
 */
async function submitSalesInquiry(payload: Fields) {
  const endpoint = process.env.NEXT_PUBLIC_SALES_FORM_ENDPOINT;
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 700));
    return;
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...payload, source: "contact-sales", submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
}

const baseControl =
  "h-10 w-full rounded-md border bg-white px-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:ring-2";
const okControl = "border-slate-300 focus:border-[#16803c] focus:ring-[#16803c]/20";
const errControl = "border-red-500 focus:border-red-500 focus:ring-red-500/20";

function Label({ name, children, required = true }: { name: FieldName; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={`sales-${name}`} className="mb-1.5 block text-[13px] font-semibold text-slate-900">
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
}

function ErrorText({ name, error }: { name: FieldName; error?: string }) {
  if (!error) return null;
  return (
    <p id={`sales-${name}-error`} className="mt-1 text-xs text-red-600">
      {error}
    </p>
  );
}

export default function SalesForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const update = (name: FieldName, value: string) => {
    setFields((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const blur = (name: FieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, fields[name]) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validateAll(fields);
    setErrors(nextErrors);
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])));

    const firstInvalid = FIELD_ORDER.find((f) => nextErrors[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Bots fill hidden fields; silently pretend success.
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const trimmed = Object.fromEntries(
        Object.entries(fields).map(([k, v]) => [k, v.trim()]),
      ) as Fields;
      await submitSalesInquiry(trimmed);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setFields(EMPTY);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  const fieldProps = (name: FieldName) => ({
    id: `sales-${name}`,
    name,
    value: fields[name],
    onBlur: () => blur(name),
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `sales-${name}-error` : undefined,
    className: `${baseControl} ${errors[name] ? errControl : okControl}`,
  });

  const errorFor = (name: FieldName) => <ErrorText name={name} error={errors[name]} />;

  const renderSelect = ({ name, placeholder, options }: { name: FieldName; placeholder: string; options: string[] }) => (
    <div className="relative">
      <select
        {...fieldProps(name)}
        onChange={(e) => update(name, e.target.value)}
        className={`${fieldProps(name).className} appearance-none pr-9 ${fields[name] ? "" : "text-slate-500"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-slate-900">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
    </div>
  );

  return (
    <div
      id="sales-form"
      className="w-full scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] sm:p-8"
    >
      {status === "success" ? (
        <div className="flex flex-col items-center py-10 text-center" role="status">
          <span className="flex size-16 items-center justify-center rounded-full bg-[#e6f4ec] text-[#16803c]">
            <CircleCheck className="size-8" />
          </span>
          <h2 className="mt-5 text-2xl font-bold text-slate-900">Thanks — we&apos;ve got it.</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            A ZoikoTime specialist will reach out to <strong className="text-slate-900">{fields.email.trim()}</strong>,
            usually within 1 business day.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 text-sm font-semibold text-[#16803c] hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px]">
            Let&apos;s talk about your team
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Tell us a little about what you need, and we&apos;ll connect you with the right ZoikoTime team.
          </p>

          <form ref={formRef} noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label name="topic">What can we help with?</Label>
                {renderSelect({ name: "topic", placeholder: "Choose a topic", options: TOPICS })}
                {errorFor("topic")}
              </div>
              <div>
                <Label name="teamSize">Team size</Label>
                {renderSelect({ name: "teamSize", placeholder: "Select a range", options: TEAM_SIZES })}
                {errorFor("teamSize")}
              </div>
            </div>

            <div>
              <Label name="fullName">Full name</Label>
              <input
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                maxLength={100}
                {...fieldProps("fullName")}
                onChange={(e) => update("fullName", e.target.value)}
              />
              {errorFor("fullName")}
            </div>

            <div>
              <Label name="email">Work email</Label>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@company.com"
                maxLength={254}
                {...fieldProps("email")}
                onChange={(e) => update("email", e.target.value)}
              />
              {errorFor("email")}
            </div>

            <div>
              <Label name="company">Company</Label>
              <input
                type="text"
                autoComplete="organization"
                placeholder="Company name"
                maxLength={120}
                {...fieldProps("company")}
                onChange={(e) => update("company", e.target.value)}
              />
              {errorFor("company")}
            </div>

            <div>
              <Label name="country">Country / Region</Label>
              {renderSelect({ name: "country", placeholder: "Select a country or region", options: COUNTRIES })}
              {errorFor("country")}
            </div>

            <div>
              <Label name="message" required={false}>
                Message (optional)
              </Label>
              <textarea
                rows={2}
                placeholder="Tell us about your goals, timeline, or any specific requirements."
                maxLength={MESSAGE_MAX}
                {...fieldProps("message")}
                onChange={(e) => update("message", e.target.value)}
                className={`${fieldProps("message").className} h-auto resize-none py-2.5 leading-5`}
              />
              {errorFor("message")}
            </div>

            {/* Honeypot (hidden from people) */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="sales-website">Website</label>
              <input
                id="sales-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                Something went wrong sending your request. Please try again in a moment.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#16803c] text-sm font-semibold text-white transition-colors hover:bg-[#126b32] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Request a Sales Conversation <ArrowRight className="size-4" />
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
              <Lock className="size-3.5 shrink-0" />
              <span>
                We&apos;ll use these details to respond to your inquiry.{" "}
                <Link href="/privacy-notice" className="font-semibold text-[#16803c] underline underline-offset-2">
                  Privacy Notice
                </Link>
              </span>
            </p>
          </form>
        </>
      )}
    </div>
  );
}
