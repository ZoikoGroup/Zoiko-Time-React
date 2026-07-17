"use client";

import { useState } from "react";
import Link from "next/link";
import DownloadPopup from "./DownloadPopup";

export default function Ready() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-blue-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-500 sm:text-base">
            Ready When You Are
          </p>

          {/* Heading */}
          <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[1.4]">
            Turn your estimate into a tailored plan
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[570px] text-base leading-6 text-white/80">
            Request a tailored demo and we&apos;ll shape the session
            around the value drivers, workforce model, and numbers
            from your ROI estimate.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-tailored-demo"
              className="flex h-11 w-full items-center justify-center rounded-[10px] bg-teal-600 px-6 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition duration-300 hover:bg-teal-700 sm:w-56"
            >
              Request Tailored Demo
            </Link>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="h-11 w-full rounded-[10px] border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition duration-300 hover:bg-white/20 sm:w-40"
            >
              Download Free
            </button>
          </div>
        </div>
      </section>

      <DownloadPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}