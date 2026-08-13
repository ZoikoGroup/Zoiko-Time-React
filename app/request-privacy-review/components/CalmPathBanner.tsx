import React from 'react';

export default function CalmPathBanner() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <figure className="max-w-[1132px] mx-auto relative rounded-2xl shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] overflow-hidden">
        <img
          className="w-full h-72 sm:h-80 object-cover"
          src="/request-privacy-review/calm-path-banner.png"
          alt="A privacy and operations team available to review questions"
        />

        {/* Overlay Caption */}
        <figcaption className="absolute inset-0 px-6 sm:px-10 bg-linear-to-r from-slate-900/70 to-slate-900/10 flex flex-col justify-end pb-8 sm:pb-10">
          <span className="block max-w-[470px] text-white text-lg sm:text-xl font-bold leading-8">
            A calm path to a real answer.
          </span>
          <span className="block max-w-[470px] pt-1 text-white/90 text-xs leading-5">
            Public privacy truth first — a qualified human review when you need one.
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
