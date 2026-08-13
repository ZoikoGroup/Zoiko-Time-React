import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

const cards = [
  {
    title: 'Product Overview',
    body: 'Deterministic classification, human review, evidence history — the full picture in one place.',
    action: 'Explore Product Overview',
    href: '/product-overview',
  },
  {
    title: 'How ZoikoTime Works',
    body: 'The full record lifecycle, from capture through governed output.',
    action: 'See How It Works',
    href: '/how-zoikotime-works',
  },
  {
    title: 'Solutions by Use Case',
    body: 'HR, remote teams, auditable records, project-based businesses, and more.',
    action: 'Browse Solutions',
    href: '/solutions',
  },
];

export default function ProductMeaning() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-9">

        {/* Section heading */}
        <div className="flex max-w-[680px] flex-col items-center gap-3">

          <SectionEyebrow label="01 · Product Meaning" />

          <h2 className="text-center text-2xl font-bold leading-10 text-slate-900 sm:text-3xl">
            Start With What ZoikoTime Actually Does
          </h2>

          <p className="text-center text-sm font-semibold leading-7 text-gray-500 sm:text-base">
            Product capability, explained with current authority — before anything else.
          </p>

        </div>

        {/* Route cards */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2.5 rounded-2xl border border-slate-200 bg-white px-5 pt-8 pb-6"
            >

              <h3 className="text-sm font-bold leading-6 text-slate-900">{card.title}</h3>

              <p className="flex-1 pt-2 text-xs font-normal leading-5 text-gray-500">
                {card.body}
              </p>

              <Link
                href={card.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold leading-6 text-emerald-700 transition hover:text-emerald-800"
              >
                <span>{card.action}</span>
                <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </Link>

            </div>
          ))}
        </div>

        {/* Wide image with caption */}
        <div className="relative w-full overflow-hidden rounded-[20px] shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.16)]">

          <img
            className="h-56 w-full object-cover sm:h-72"
            src="/resource-center-start-evaluation/product-meaning.png"
            alt="A person reviewing workforce records and evaluation resources on a laptop"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-slate-900/0 px-5 pt-10 pb-5 sm:px-8">
            <p className="max-w-xl text-xs font-medium leading-6 text-white sm:text-sm">
              Every evaluation starts from the same place: understanding what the product
              actually does.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
