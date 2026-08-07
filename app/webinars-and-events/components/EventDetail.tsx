"use client";

import Image from "next/image";
import {
  FiClock,
  FiMessageSquare,
  FiFileText,
} from "react-icons/fi";

const agenda = [
  {
    time: "0:00",
    title: 'Welcome & what "governed" means here',
  },
  {
    time: "0:08",
    title: "Live walkthrough of the evidence model",
  },
  {
    time: "0:30",
    title: "Reviewer & worker perspectives",
  },
  {
    time: "0:40",
    title: "Live Q&A",
  },
];

const speakers = [
  {
    image: "/webinars-events/speaker-3.png",
    name: "Speaker, Compliance Lead",
    role: "Verified · ZoikoTime",
  },
  {
    image: "/webinars-events/speaker-4.png",
    name: "Speaker, Product Lead",
    role: "Verified · ZoikoTime",
  },
];

export default function EventDetail() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Event Detail
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            What a session page looks like.
          </h2>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="grid lg:grid-cols-[1.6fr_1fr]">
            {/* Left */}
            <div className="p-8 lg:p-10">
              <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-teal-700 dark:bg-emerald-900/30 dark:text-teal-300">
                Live · Virtual
              </span>

              <h3 className="mt-6 text-2xl font-semibold leading-tight text-slate-900 dark:text-white">
                Governed Time, Explained: A Walkthrough of the Evidence Model
              </h3>

              {/* Agenda */}
              <div className="mt-10 divide-y divide-slate-200 dark:divide-slate-700">
                {agenda.map((item) => (
                  <div
                    key={item.time}
                    className="flex gap-8 py-5"
                  >
                    <span className="min-w-[42px] text-xs font-semibold text-teal-600 dark:text-teal-400">
                      {item.time}
                    </span>

                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <FiMessageSquare className="h-4 w-4" />
                  Live captions
                </div>

                <div className="flex items-center gap-2">
                  <FiClock className="h-4 w-4" />
                  ASL on request
                </div>

                <div className="flex items-center gap-2">
                  <FiFileText className="h-4 w-4" />
                  Transcript published after
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="border-t border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950 lg:border-l lg:border-t-0">
              {/* Time */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Shown in your local time
                </p>

                <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Wed, Aug 20 · 10:00 AM PDT
                </h4>
              </div>

              {/* Speakers */}
              <div className="mt-8 space-y-5">
                {speakers.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div>
                      <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {speaker.name}
                      </h5>

                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {speaker.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="mt-10 w-full rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700">
                Registrations Open Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}