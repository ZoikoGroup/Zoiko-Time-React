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
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
        // handle submission
    };

    const inputClasses =
        "w-full rounded-lg border border-[#DCE2E8] bg-white px-4 py-2.5 text-sm text-[#0D1526] placeholder:text-[#9AA6B2] outline-none transition-colors focus:border-[#009D8C] focus:ring-1 focus:ring-[#009D8C]";

    const labelClasses = "block text-sm font-semibold text-[#0D1526] mb-2";

    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Contact Partnerships
                    </span>
                    <h2 className="text-3xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        Tell us about your organization
                    </h2>
                    <p className="text-[#5A6E87] max-w-135 mx-auto">
                        Share your organization type, target market, customer base, partnership
                        interest, and relevant capabilities.
                    </p>
                </div>

                <div className="border border-[#E4E9EE] shadow-[0_4px_20px_0_rgba(14,31,61,0.10)] rounded-[20px] mx-auto max-w-3xl px-10 py-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Work Email */}
                        <div>
                            <label htmlFor="email" className={labelClasses}>
                                Work Email<span className="text-[#009D8C]">*</span>
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

                        {/* Full Name / Organization Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="fullName" className={labelClasses}>
                                    Full Name<span className="text-[#009D8C]">*</span>
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
                                    Organization Name<span className="text-[#009D8C]">*</span>
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

                        {/* Organization Type / Partnership Interest */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="orgType" className={labelClasses}>
                                    Organization Type<span className="text-[#009D8C]">*</span>
                                </label>
                                <select
                                    id="orgType"
                                    name="orgType"
                                    required
                                    value={form.orgType}
                                    onChange={handleChange}
                                    className={`${inputClasses} ${form.orgType === "" ? "text-[#9AA6B2]" : "text-[#0D1526]"
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
                                    Partnership Interest<span className="text-[#009D8C]">*</span>
                                </label>
                                <select
                                    id="partnershipInterest"
                                    name="partnershipInterest"
                                    required
                                    value={form.partnershipInterest}
                                    onChange={handleChange}
                                    className={`${inputClasses} ${form.partnershipInterest === ""
                                            ? "text-[#9AA6B2]"
                                            : "text-[#0D1526]"
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

                        {/* Target Market or Region */}
                        <div>
                            <label htmlFor="targetMarket" className={labelClasses}>
                                Target Market or Region{" "}
                                <span className="text-[#9AA6B2] font-normal">(optional)</span>
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

                        {/* Customer Base & Relevant Capabilities */}
                        <div>
                            <label htmlFor="capabilities" className={labelClasses}>
                                Customer Base & Relevant Capabilities{" "}
                                <span className="text-[#9AA6B2] font-normal">(optional)</span>
                            </label>
                            <textarea
                                id="capabilities"
                                name="capabilities"
                                rows={4}
                                value={form.capabilities}
                                onChange={handleChange}
                                placeholder="Tell us about your customers and what you can bring to a partnership."
                                className={`${inputClasses} resize-none`}
                            />
                        </div>

                        {/* Agreement checkbox */}
                        <div className="flex items-start gap-2 pt-1">
                            <input
                                id="agreed"
                                name="agreed"
                                type="checkbox"
                                required
                                checked={form.agreed}
                                onChange={handleChange}
                                className="mt-0.5 h-4 w-4 rounded border-[#DCE2E8] text-[#009D8C] focus:ring-[#009D8C]"
                            />
                            <label htmlFor="agreed" className="text-sm text-[#0D1526]">
                                I agree that ZoikoTime may contact me about this partnership
                                inquiry.<span className="text-[#009D8C]">*</span>
                            </label>
                        </div>

                        {/* Disclaimer */}
                        <div className="rounded-lg bg-[#F5F7F9] px-4 py-3 text-xs text-[#5A6E87] leading-relaxed">
                            By submitting, you agree to our{" "}
                            <a href="#" className="text-[#009D8C] hover:underline">
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-[#009D8C] hover:underline">
                                Terms of Service
                            </a>
                            . Submitting an inquiry does not guarantee acceptance into a partner
                            program.
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#009D8C] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#00897A]"
                        >
                            Contact Partnerships
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}