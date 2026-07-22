"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    orgName: "",
    orgType: "",
    partnershipInterest: "",
    targetMarket: "",
    capabilities: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  const inputClasses =
    "w-full rounded-lg border border-[#DCE2E8] dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-[#0D1526] dark:text-white placeholder:text-[#9AA6B2] dark:placeholder:text-slate-400 outline-none transition-all focus:border-[#009D8C] focus:ring-2 focus:ring-[#009D8C]/20";

  const labelClasses =
    "block text-sm font-semibold text-[#0D1526] dark:text-white mb-2";

  return (
    <section
    id ="contact-partnerships"
     className="bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-10 xl:px-20 py-14 md:py-20 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-xs uppercase font-bold tracking-[1.4px] text-[#009D8C] mb-3">
            Contact Partnerships
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D1526] dark:text-white mb-5">
            Tell us about your organization
          </h2>

          <p className="max-w-2xl mx-auto text-[#5A6E87] dark:text-slate-400 text-base leading-relaxed">
            Share your organization type, target market, customer base,
            partnership interest, and relevant capabilities.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#E4E9EE] dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl px-5 sm:px-8 md:px-10 py-6 md:py-8 transition-colors">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Work Email */}
            <div>
              <label htmlFor="email" className={labelClasses}>
                Work Email <span className="text-[#009D8C]">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@organization.com"
                className={inputClasses}
              />
            </div>

            {/* Name + Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  Full Name <span className="text-[#009D8C]">*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Jordan Avery"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="orgName" className={labelClasses}>
                  Organization Name <span className="text-[#009D8C]">*</span>
                </label>

                <input
                  id="orgName"
                  name="orgName"
                  type="text"
                  required
                  value={form.orgName}
                  onChange={handleChange}
                  placeholder="Your organization"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Organization Type + Partnership */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="orgType" className={labelClasses}>
                  Organization Type <span className="text-[#009D8C]">*</span>
                </label>

                <select
                  id="orgType"
                  name="orgType"
                  required
                  value={form.orgType}
                  onChange={handleChange}
                  className={`${inputClasses} ${
                    form.orgType === ""
                      ? "text-[#9AA6B2] dark:text-slate-400"
                      : ""
                  }`}
                >
                  <option value="" disabled>
                    Select type
                  </option>

                  <option value="agency">Agency</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="startup">Startup</option>
                  <option value="reseller">Reseller</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="partnershipInterest" className={labelClasses}>
                  Partnership Interest{" "}
                  <span className="text-[#009D8C]">*</span>
                </label>

                <select
                  id="partnershipInterest"
                  name="partnershipInterest"
                  required
                  value={form.partnershipInterest}
                  onChange={handleChange}
                  className={`${inputClasses} ${
                    form.partnershipInterest === ""
                      ? "text-[#9AA6B2] dark:text-slate-400"
                      : ""
                  }`}
                >
                  <option value="" disabled>
                    Select interest
                  </option>

                  <option value="reseller">Reseller</option>
                  <option value="integration">Integration Partner</option>
                  <option value="referral">Referral Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Target Market */}
            <div>
              <label htmlFor="targetMarket" className={labelClasses}>
                Target Market or Region{" "}
                <span className="font-normal text-[#9AA6B2]">(optional)</span>
              </label>

              <input
                id="targetMarket"
                name="targetMarket"
                type="text"
                value={form.targetMarket}
                onChange={handleChange}
                placeholder="e.g. UK professional services, APAC enterprise"
                className={inputClasses}
              />
            </div>

            {/* Capabilities */}
            <div>
              <label htmlFor="capabilities" className={labelClasses}>
                Customer Base & Relevant Capabilities{" "}
                <span className="font-normal text-[#9AA6B2]">(optional)</span>
              </label>

              <textarea
                id="capabilities"
                name="capabilities"
                rows={5}
                value={form.capabilities}
                onChange={handleChange}
                placeholder="Tell us about your customers and what you can bring to a partnership."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="agreed"
                name="agreed"
                type="checkbox"
                required
                checked={form.agreed}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#009D8C] focus:ring-[#009D8C]"
              />

              <label
                htmlFor="agreed"
                className="text-sm leading-relaxed text-[#0D1526] dark:text-slate-300"
              >
                I agree that ZoikoTime may contact me about this partnership
                inquiry.
                <span className="text-[#009D8C]">*</span>
              </label>
            </div>

            {/* Disclaimer */}
            <div className="rounded-lg bg-[#F5F7F9] dark:bg-slate-800 px-4 py-4 text-xs leading-6 text-[#5A6E87] dark:text-slate-400">
              By submitting, you agree to our{" "}
              <a
                href="#"
                className="font-medium text-[#009D8C] hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-medium text-[#009D8C] hover:underline"
              >
                Terms of Service
              </a>
              . Submitting an inquiry does not guarantee acceptance into a
              partner program.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#009D8C] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#00897A] focus:outline-none focus:ring-2 focus:ring-[#009D8C] focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Contact Partnerships
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}