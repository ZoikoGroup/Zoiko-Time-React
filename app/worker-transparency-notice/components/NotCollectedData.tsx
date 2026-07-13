const notCollectedItems = [
  "Private consumer browsing history unrelated to work",
  "Personal passwords or private communications (emails, personal messages, consumer apps)",
  "Biometric templates such as facial geometry, fingerprints, or voiceprints",
  "Audio or video recordings of workers in personal contexts",
  "Private files, personal photos, or off-device data",
  "Personal activity on personal devices outside working hours when not in ZoikoTime's approved work context",
];


export default function NotCollectedData() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div className="max-w-[696px] mx-auto pt-12">


        {/* Title */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          6. Information ZoikoTime Does Not Intend to Collect
        </h2>


        {/* Divider */}
        <div
          className="
            mt-3
            w-12
            h-[3px]
            rounded-full
            bg-teal-600
          "
        />


        {/* Description */}
        <p
          className="
            mt-6
            text-base
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          Unless separately enabled, integrated, or supplied by the customer,
          ZoikoTime is not designed to collect:
        </p>


        {/* Bullet List */}
        <div className="mt-8 space-y-4">

          {notCollectedItems.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-3
              "
            >

              <span
                className="
                  text-teal-600
                  text-base
                  font-bold
                  leading-7
                "
              >
                ›
              </span>


              <p
                className="
                  text-base
                  leading-7
                  font-normal
                  text-slate-700
                  dark:text-slate-300
                "
              >
                {item}
              </p>

            </div>
          ))}

        </div>


        {/* Closing Note */}
        <p
          className="
            mt-8
            text-base
            leading-7
            font-normal
            text-slate-700
            dark:text-slate-300
          "
        >
          Workers should follow customer instructions on separating work
          systems from personal systems and on approved use of work devices and
          software.
        </p>


      </div>
    </section>
  );
}