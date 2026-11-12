import Image from "next/image";

const LOGOS = [
  { file: "Zoiko Group Logo 1.png", alt: "Zoiko Group" },
  { file: "DriverXtra 1.png", alt: "DriverXtra" },
  { file: "logo (2) 1.png", alt: "ZoikoMeds" },
  { file: "Link → Zoiko Rides 1.png", alt: "Zoiko Rides" },
];

export default function TrustedBy() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:gap-0">
        <p className="text-base font-bold leading-snug text-slate-900 lg:w-[240px] lg:shrink-0 lg:border-r lg:border-slate-300 lg:pr-8">
          Trusted by organizations
          <br className="hidden lg:block" /> around the world
        </p>

        <ul className="grid flex-1 grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:pl-10">
          {LOGOS.map(({ file, alt }) => (
            <li key={file} className="flex items-center justify-center">
              <Image
                src={`/contact-sales/${encodeURIComponent(file)}`}
                alt={alt}
                width={200}
                height={60}
                className="h-auto max-h-8 w-auto max-w-full object-contain sm:max-h-9"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
