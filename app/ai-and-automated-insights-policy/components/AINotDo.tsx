export default function AINotDo() {
  const items = [
    "Facial recognition, biometric identification, biometric verification, or biometric categorization",
    "Emotion recognition, sentiment-based employee scoring, psychological profiling, or mental-health inference",
    "Keystroke dynamics used for biometric identification",
    "Hidden camera activation, audio recording, private-message interception, or password capture",
    "Solely automated hiring, firing, promotion, demotion, compensation, scheduling, disciplinary, or termination decisions",
    "Legal advice, HR advice, tax advice, or a substitute for professional judgment",
    "Automated determination that a Worker committed misconduct, fraud, or wage-hour violation without human review",
  ];

  return (
    <section
      className="
        w-full
        max-w-[696px]
        mx-auto
        mt-14
      "
    >

      {/* Heading */}
      <h2
        className="
          text-2xl
          leading-8
          font-extrabold
          text-slate-900
          dark:text-white
        "
      >
        5. What ZoikoTime AI Does Not Do
      </h2>


      {/* Divider */}
      <div
        className="
          w-12
          h-[3px]
          mt-3
          rounded-full
          bg-teal-600
          dark:bg-teal-400
        "
      />


      {/* Description */}
      <p
        className="
          mt-5
          text-base
          leading-7
          font-normal
          text-slate-700
          dark:text-slate-300
        "
      >
        Unless separately documented in writing, contracted for, and lawfully
        configured, ZoikoTime does not provide:
      </p>


      {/* List */}
      <div
        className="
          mt-4
          space-y-3
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-3
              text-base
              leading-7
            "
          >

            {/* Bullet */}
            <span
              className="
                mt-[2px]
                text-teal-600
                text-xl
                font-bold
                leading-7
                dark:text-teal-400
              "
            >
              ›
            </span>


            {/* Text */}
            <p
              className="
                flex-1
                text-slate-700
                dark:text-slate-300
              "
            >
              {item}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}