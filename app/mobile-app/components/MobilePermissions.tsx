import React from "react";

export default function MobilePermissions() {
  const permissions = [
    {
      title: "Push notifications",
      description:
        "May be used for reminders, approvals, exception review, and important workforce status updates.",
    },
    {
      title: "Location context",
      description:
        "Only if the tenant enables location-context rules, the Worker has been notified, and device permissions are granted — never hidden tracking.",
    },
    {
      title: "Camera access",
      description:
        "Only requested if an approved workflow requires QR capture, document capture, or another verified use case.",
    },
    {
      title: "Biometric unlock",
      description:
        "May be used as device-level convenience where supported. Not workforce monitoring.",
    },
    {
      title: "Explicit non-access",
      description:
        "No contacts, SMS, call logs, personal emails or photos, private files, microphone, screen recording, clipboard, other-app activity, or browser history.",
    },
    {
      title: "Worker transparency",
      description:
        "Permission prompts explain why a permission is requested, what it's used for, and what it is not used for.",
    },
  ];

  return (
    <section
      className="
        w-full

        px-5
        py-16

        transition-colors
        duration-300

        bg-gray-50

        dark:bg-slate-950

        sm:px-8

        lg:px-10

        lg:py-0
      "
    >
      <div
        className="
          mx-auto

          max-w-[1180px]

          text-center

          lg:min-h-[500px]
        "
      >

        {/* Label */}
        <p
          className="
            text-xs

            font-semibold

            uppercase

            leading-5

            tracking-[0.2em]

            text-teal-600

            dark:text-teal-400
          "
        >
          Permissions
        </p>


        {/* Heading */}
        <h2
          className="
            mt-2.5

            text-3xl

            font-bold

            leading-tight

            text-slate-900

            dark:text-slate-100

            sm:text-4xl
          "
        >
          Mobile permissions and device boundaries
        </h2>


        {/* Description */}
        <p
          className="
            mx-auto

            mt-4

            max-w-[650px]

            text-sm

            font-normal

            leading-7

            text-slate-600

            dark:text-slate-400

            sm:text-base
          "
        >
          Every permission has a stated purpose — and an explicit list of what
          the app does not access.
        </p>


        {/* Permissions List */}
        <div
          className="
            mx-auto

            mt-12

            max-w-[1120px]

            space-y-6

            sm:mt-14

            lg:mt-[76px]

            lg:space-y-0
          "
        >

          {permissions.map((permission) => (

            <div
              key={permission.title}
              className="text-center"
            >

              <h3
                className="
                  text-sm

                  font-bold

                  leading-5

                  text-slate-700

                  dark:text-slate-200
                "
              >
                {permission.title}
              </h3>


              <p
                className="
                  mx-auto

                  mt-1

                  max-w-[1120px]

                  text-sm

                  font-normal

                  leading-6

                  text-slate-600

                  dark:text-slate-400

                  sm:text-base
                "
              >
                {permission.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}