"use client";

import { useState } from "react";

export default function NotifySignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No signup endpoint exists yet — wire this to the mailing-list API when available.
    setSubmitted(true);
  };

  return (
    <div className="mt-24">
      <p className="bf-display text-base font-medium text-white sm:text-lg">
        Not ready yet? Get notified the moment this offer goes live.
      </p>

      {submitted ? (
        <p role="status" className="mt-5 text-sm font-medium text-emerald-400">
          Thanks — we&apos;ll email {email} when the offer goes live.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-5 flex max-w-[400px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-2"
        >
          <label htmlFor="bf-notify-email" className="sr-only">
            Work email
          </label>
          <input
            id="bf-notify-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="h-12 flex-1 rounded-full border border-white/15 bg-[#121826] px-5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
          <button
            type="submit"
            className="bf-display h-12 rounded-full bg-[#164a6e] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1c5a85]"
          >
            Notify me
          </button>
        </form>
      )}
    </div>
  );
}
