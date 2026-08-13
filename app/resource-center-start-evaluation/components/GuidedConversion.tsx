import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

export default function GuidedConversion() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-5">

        <SectionEyebrow label="06 · Guided Conversion" />

        <p className="max-w-[480px] text-center text-sm font-normal leading-6 text-gray-500">
          Prefer a guided evaluation with a real person, once you&apos;ve chosen that path
          yourself?
        </p>

        <Link
          href="/request-enterprise-demo"
          className="inline-flex items-center justify-center rounded-full bg-green-400 px-6 py-3 text-sm font-semibold leading-6 text-white transition hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          Request Enterprise Demo
        </Link>

      </div>
    </section>
  );
}
