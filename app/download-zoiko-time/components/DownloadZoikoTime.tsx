import Image from "next/image";

export default function DownloadZoikoTime() {
  return (
    <section
    id="download-zoiko-time"
     className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-8 lg:flex-row lg:gap-10 lg:px-10">
        
        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col items-start lg:w-[48%]">

          {/* Label */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Download ZoikoTime
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 max-w-[600px] text-3xl font-semibold leading-[1.15] tracking-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Get ZoikoTime on
            <br className="hidden sm:block" />
            every device your
            <br className="hidden sm:block" />
            team uses.
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[480px] text-sm font-normal leading-6 text-gray-500 dark:text-slate-400 sm:text-base sm:leading-7">
            Secure, official downloads for desktop, mobile, and web — with
            the right version recommended automatically for your device.
          </p>

{/* DOWNLOAD BUTTONS */}
<div className="mt-8 flex w-full max-w-[500px] flex-wrap items-center gap-3">

  {/* Windows */}
  <a
    href="https://storage.googleapis.com/zoikotime-releases/windows%20build/ZoikoTime-Setup.exe"
    download
    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
  >
    <span>Download for Windows</span>

    <Image
      src="/download-zoiko-time/windows.png"
      alt="Windows"
      width={18}
      height={18}
      className="h-[18px] w-[18px] object-contain"
    />
  </a>

  {/* macOS */}
  <a
    href="https://storage.googleapis.com/zoikotime-releases/Mac%20Build/ZoikoTime.dmg"
    download
    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
  >
    <span>Download for macOS</span>

    <Image
      src="/download-zoiko-time/macos.png"
      alt="macOS"
      width={18}
      height={18}
      className="h-[18px] w-[18px] object-contain"
    />
  </a>

  {/* Linux */}
  <a
    href="https://storage.googleapis.com/zoikotime-releases/Linux%20Build/ZoikoTime-linux.deb"
    download
    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
  >
    <span>Download for Linux</span>

    <Image
      src="/download-zoiko-time/linux.png"
      alt="Linux"
      width={18}
      height={18}
      className="h-[18px] w-[18px] object-contain"
    />
  </a>

</div>
</div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[52%]">
          <div className="relative aspect-[657/469] w-full overflow-hidden rounded-2xl shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.35)] sm:rounded-3xl">
            <Image
              src="/download-zoiko-time/download.png"
              alt="ZoikoTime"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}