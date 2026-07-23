"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface DownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const downloads = [
  {
    name: "Windows",
    icon: "/download-popup/windows.png",
    url: "https://storage.googleapis.com/zoikotime-releases/windows%20build/ZoikoTime-Setup.exe",
  },
  {
    name: "Mac",
    icon: "/download-popup/mac.png",
    url: "https://storage.googleapis.com/zoikotime-releases/Mac%20Build/ZoikoTime.dmg",
  },
  {
    name: "Linux",
    icon: "/download-popup/Linux.png",
    url: null,
  },
];

export default function DownloadPopup({
  isOpen,
  onClose,
}: DownloadPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      {/* Popup */}
      <div className="relative w-full max-w-4xl rounded-[32px] bg-white px-6 py-8 shadow-2xl transition-colors dark:bg-slate-900 sm:px-10 sm:py-10 lg:px-14 lg:py-12">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
        </button>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
          Download the desktop app
        </h2>

        {/* Platforms */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {downloads.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                if (item.url) {
                  window.location.href = item.url;
                } else {
                  alert(item.name + " build is coming soon.");
                }
              }}
              className="group flex flex-col items-center rounded-2xl p-5 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {/* Same Size Icon Container */}
              <div className="flex h-32 w-32 items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="max-h-[80px] max-w-[80px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Platform Name */}
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {item.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}