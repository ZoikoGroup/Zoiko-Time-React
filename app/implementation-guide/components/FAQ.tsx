export default function FAQ() {
  const questions = [
    "Do we have to roll out ZoikoTime to the whole organization at once?",
    "How long does implementation take?",
    "Who needs to be involved?",
    "Can ZoikoTime integrate with our existing systems?",
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4">

        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Questions
        </p>

        <h2 className="mt-4 text-center text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Implementation FAQs
        </h2>


        <div className="mt-8 space-y-4">

          {questions.map((question) => (
            <div
              key={question}
              className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-teal-600 shrink-0" />

              <p>
                {question}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}