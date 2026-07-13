export default function ContactZoikoTime() {
  return (
    <section className="w-full flex justify-center mt-[59px]">
      <div className="w-[696px] h-48 bg-gray-50 rounded-xl border border-slate-200">

        <div className="text-center pt-[25px] text-slate-900 text-lg font-bold leading-8">
          Contact ZoikoTime
        </div>

        <div className="text-center mt-[8px] text-slate-500 text-sm font-normal leading-6">
          For questions about this document or your legal rights:
        </div>

        <div className="text-center mt-[15px] text-sm leading-6 px-8">
          <span className="text-slate-500 font-normal">
            Email:{" "}
          </span>

          <span className="text-teal-600 font-semibold">
            sales@zoikotime.com
          </span>

          <span className="text-slate-500 font-normal">
            {" "} | Tel: 1-631-833-9395 | Toll-free: 1-800-484-5574
            <br />
            1401 21st Street, Suite R, Sacramento, CA 95811, USA
            <br />
            European HQ: 67-69 Great Portland Street, 5th Floor, London W1W 5PF, UK
          </span>
        </div>

      </div>
    </section>
  );
}