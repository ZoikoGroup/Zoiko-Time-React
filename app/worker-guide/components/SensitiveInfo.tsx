import React from "react";

export default function SensitiveInfo() {
  return (
    <section
      className="
        w-full
        bg-gray-50
        dark:bg-slate-950
        py-16
        sm:py-20
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-5
          sm:px-8
        "
      >
        {/* Header */}
        <div className="text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-teal-600
              dark:text-teal-400
            "
          >
            Sensitive Information
          </p>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              font-bold
              leading-tight
              text-slate-800
              dark:text-white
            "
          >
            Screenshots, redaction, and sensitive
            <br className="hidden sm:block" />
            information
          </h2>

          <p
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-sm
              sm:text-base
              leading-7
              text-gray-500
              dark:text-gray-400
            "
          >
            Some organizations may enable screenshot features for specific
            teams, roles, projects, or work models. If screenshots are enabled,
            they should be configured transparently, governed by policy, and
            limited to authorized review.
          </p>

        </div>


        {/* Content */}
        <div
          className="
            mt-12
            max-w-3xl
            mx-auto
          "
        >

          <h3
            className="
              text-sm
              font-bold
              leading-5
              text-gray-700
              dark:text-gray-200
            "
          >
            If screenshots are enabled, you should be able to understand:
          </h3>

          <p
            className="
              mt-2
              text-sm
              sm:text-base
              leading-6
              text-gray-700
              dark:text-gray-400
            "
          >
            whether screenshots are active; when screenshots may be captured;
            whether notices are shown; whether screenshots are connected to
            work sessions; who may review screenshots; whether redaction is
            available; how long screenshots may be retained; and where to ask
            questions.
          </p>

        </div>


        {/* Related Resource */}
        <div
          className="
            mt-10
            text-center
            text-sm
            sm:text-base
            leading-7
          "
        >
          <span
            className="
              text-gray-500
              dark:text-gray-400
            "
          >
            Related resource:{" "}
          </span>

          <span
            className="
              text-teal-700
              font-semibold
              dark:text-teal-400
            "
          >
            Screenshots &amp; Redaction Controls
          </span>
        </div>

      </div>
    </section>
  );
}