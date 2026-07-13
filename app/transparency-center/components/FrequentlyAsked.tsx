"use client";

const questions = [
  "Does ZoikoTime monitor what I'm doing on screen?",
  "Can ZoikoTime fire me automatically?",
  "Can I see what ZoikoTime has collected about me?",
  "Why was my session flagged?",
];


export default function FrequentlyAsked() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-16">

      <div className="max-w-[1200px] mx-auto px-6">


        {/* Heading */}
        <div className="text-center">


          <div className="flex items-center justify-center gap-3">

            <span className="w-6 h-[2px] bg-teal-600"></span>

            <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Frequently Asked
            </p>

          </div>



          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Direct Answers to Direct Questions
          </h2>


        </div>



        {/* Questions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1040px] mx-auto">


          {questions.map((question) => (

            <div
              key={question}
              className="
              h-16
              bg-white dark:bg-slate-900
              rounded-xl
              border border-slate-200 dark:border-slate-800
              shadow-sm
              flex items-center justify-between
              px-6
              "
            >

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {question}
              </h3>


              <span className="text-teal-600 text-xl font-bold">
                +
              </span>


            </div>

          ))}


        </div>



      </div>


    </section>
  );
}