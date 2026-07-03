export default function CtaSection() {
  return (
    <section className="bg-[#F1FAFA] px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-[34px] font-semibold text-slate-900 mb-3">
            Start the <span className="text-[#00C6A9]">Right Conversation,</span> Right Now.
          </h2>
          <p className="text-[#5A6E87] max-w-140 text-center">
            ZoikoTime routes every inquiry to the right team — so you speak to the right
            person from the first interaction.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center shrink-0 w-full">
          <button className="bg-[#009D8C] hover:bg-teal-700 shadow-[0_4px_12px_0_#009D8C59] text-[15px] text-white font-medium py-3 px-10 cursor-pointer rounded-[8px] transition-colors">
            Start AI Conversation
          </button>
          <button className="bg-white border border-[#009D8C] hover:bg-slate-100 cursor-pointer text-[#009D8C] font-medium px-15 py-3 rounded-md transition-colors">
            Submit Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
