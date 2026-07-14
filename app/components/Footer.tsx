import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  badgeColor?: 'blue' | 'teal';
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const complianceTags = [
    { label: 'SOC 2 Type II', href: '/soc-2-type-ii', active: true },
    { label: 'ISO 27001', href: '/iso-27001', active: false },
    { label: 'GDPR', href: '/gdpr', active: false },
    { label: 'CCPA/CPRA', href: '/ccpa-cpra', active: false },
    { label: 'Enterprise SLA', href: '/enterprise-sla', active: false },
  ];

  const footerSections: FooterSection[] = [
    {
      title: 'Platform',
      links: [
        { label: 'Workforce Intelligence', href: '/workforce' },
        { label: 'Time & Activity Verification', href: '/time-and-activity-verification' },
        { label: 'Session & Identity Assurance', href: '/session-and-identity-assurance' },
        { label: 'Evidence Capture', href: '/evidence-capture' },
        { label: 'Screenshots & Redaction Controls', href: '/screenshots-and-redaction-controls' },
        { label: 'Policy & Location Context', href: '/policy-and-location-context' },
        { label: 'Integrity & Anomaly Detection', href: '/integrity-and-anomaly-detection' },
        { label: 'Reporting & Workforce Analytics', href: '/reporting-and-workforce-analytics' },
        { label: 'Audit & HR Enablement', href: '/audit-and-hr-enablement' },
        { label: 'ZoikoTime Mobile App', href: '/mobile-app', badge: 'New' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Distributed Workforces', href: '/distributed-workforces' },
        { label: 'Client-Billable Teams', href: '/client-billable' },
        { label: 'Contractor & Gig Teams', href: '/contractor' },
        { label: 'Regulated Industries', href: '/regulated-industries' },
        { label: 'Professional Services Firms', href: '/professional-services-firms' },
        { label: 'Finance & Compliance Teams', href: '/compliance' },
        { label: 'HR, Legal & Operations Teams', href: '/hr-legal-operations' },
        { label: 'Payroll & Timesheet Integrity', href: '/payroll-and-timesheet-integrity' },
        { label: 'Enterprise Workforce Governance', href: '/enterprise-workforce-governance' },
        { label: 'Workforce Assurance Programs', href: '/workforce-assurance' },
      ],
    },
    {
      title: 'Trust & Governance',
      links: [
        { label: 'Security Overview', href: '/security-overview' },
        { label: 'Privacy Controls', href: '/privacy-controls' },
        { label: 'Transparency Center', href: '/transparency-center' },
        { label: 'Worker Transparency Notice', href: '/worker-transparency-notice' },
        { label: 'AI & Automated Insights Policy', href: '/ai-and-automated-insights-policy' },
        { label: 'Data Retention & Legal Hold', href: '/data-retention-and-legal-hold' },
        { label: 'Service Level Agreement', href: '/service-level-agreement' },
        { label: 'Audit-Grade Evidence', href: '/audit-grade-evidence' },
        { label: 'Incident & Availability Status', href: '/status', external: true },
        { label: 'Responsible AI', href: '/responsible-ai' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Implementation Guide', href: '/implementation-guide' },
        { label: 'Product Documentation', href: '/product-documentation' },
        { label: 'Admin Guide', href: '/admin-guide' },
        { label: 'Worker Guide', href: '/worker-guide' },
        { label: 'Help Center', href: '/help-center' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Blog & Insights', href: '/blog' },
        { label: 'Request a Demo', href: '/request-a-demo', badge: 'Demo', badgeColor: 'blue' },
        { label: 'Contact Sales', href: '/contact-sales' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About ZoikoTime', href: '/about-us' },
        { label: 'About Zoiko Tech Inc.', href: '/about-zoikotech' },
        { label: 'Leadership & Governance', href: '/leadership-governance' },
        { label: 'Enterprise Readiness', href: '/enterprise-readiness' },
        { label: 'Partners', href: '/partners' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press & Media', href: '/press-and-media' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms-of-service' },
        { label: 'Subscription Terms', href: '/subscription-terms' },
        { label: 'Data Processing Addendum', href: '/data-processing-addendum' },
        { label: 'Privacy Notice', href: '/privacy-notice' },
        { label: 'Cookie Notice', href: '/cookie-notice' },
        { label: 'Acceptable Use Policy', href: '/acceptable-use-policy' },
        { label: 'Subprocessor List', href: '/subprocessor-list' },
        { label: 'Security Addendum', href: '/security-addendum' },
        { label: 'Service Level Agreement', href: '/service-level-agreement' },
        { label: 'Data Retention, Deletion & Legal Hold Policy', href: '/data-retention-deletion-and-legal-hold-policy' },
      ],
    },
  ];

  const subLegalLinks = [
    { label: 'Privacy Notice', href: '/privacy-notice' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Data Processing Addendum', href: '/data-processing-addendum' },
    { label: 'Cookie Notice', href: '/cookie-notice' },
    { label: 'Service Level Agreement', href: '/service-level-agreement' },
    { label: 'Subprocessors', href: '/subprocessor-list' },
    { label: 'Accessibility', href: '/accessibility' },
  ];

  return (
    <footer className="relative w-full bg-slate-950 text-white overflow-hidden pt-16 pb-12">
        <Link href="/" className="flex items-center shrink-0 justify-center mb-5">
                  <Image
                    src="/images/Frame 16.png"
                    alt="ZoikoDigital"
                    width={180}
                    height={40}
                  />
                </Link>
      {/* 1440px Ambient Aesthetic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600 via-[15%] to-teal-600/0" />
      <div className="absolute left-[-100px] top-[672px] w-96 h-72 bg-[radial-gradient(circle,rgba(13,148,136,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute left-[1170px] top-[692px] w-80 h-72 bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-600/5 to-teal-600/0 pointer-events-none max-h-[2%]" />

      <div className="max-w-[1282px] mx-auto px-6 lg:px-8">
        
        {/* Compliance Certification Row */}
        <div className="w-full py-4 flex flex-wrap items-center justify-center gap-3 border-t border-b border-white/10 mb-16">
          {complianceTags.map((tag) => (
            <Link 
              key={tag.label} 
              href={tag.href}
              className={`px-3 py-1 rounded-[5px] text-[10px] font-bold uppercase tracking-wide border transition-all hover:bg-white/10 ${
                tag.active
                  ? 'bg-white/5 border-teal-500/20 text-teal-500'
                  : 'bg-white/5 border-white/10 text-white/60'
              }`}
            >
              {tag.label}
            </Link>
          ))}
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-white text-sm font-extrabold uppercase tracking-wider border-b border-white/5 pb-2">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label} className="inline-flex items-center gap-2 group">
                    <Link
                      href={link.href}
                      className="text-white/40 text-xs font-medium leading-5 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                    
                    {link.external && (
                      <span className="inline-flex items-center justify-center size-3.5 bg-white/10 rounded-[3px] text-[9px] font-bold text-white/30 group-hover:text-white transition-colors">
                        ↗
                      </span>
                    )}

                    {link.badge && (
                      <span
                        className={`px-1.5 py-0.5 rounded-[3px] text-[9px] font-extrabold uppercase tracking-wide ${
                          link.badgeColor === 'blue'
                            ? 'bg-blue-400/20 text-blue-400'
                            : 'bg-teal-500/20 text-teal-500'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Horizontal Mini Legal Row */}
        <div className="w-full border-b border-white/5 pb-5 mb-6">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-white/75 text-xs font-medium">
            {subLegalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <Link 
                  href={link.href} 
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
                {idx < subLegalLinks.length - 1 && (
                  <span className="size-[3px] bg-white/10 rounded-full" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Global Addresses & Legal Disclaimers */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[1160px] mx-auto">
          <p className="text-white/60 text-xs leading-5">
            <span className="font-bold text-white">United States </span>
            1401 21st Street, Suite R Sacramento, CA 95811, USA
            <span className="mx-3 text-white/20">|</span>
            <span className="font-bold text-white">Europe </span>
            67-69 Great Portland Street, 5th Floor London W1W 5PF, United Kingdom
          </p>

          <p className="text-white/40 text-xs font-normal leading-5">
            <span className="font-semibold text-white">ZoikoTime</span> — Workforce Assurance & Performance Intelligence. Operated by{' '}
            <span className="font-semibold text-white">Zoiko Tech Inc.</span>, a subsidiary of{' '}
            <span className="font-semibold text-white">Zoiko Group Inc.</span> © 2026 Zoiko Group Inc. All rights reserved. ZoikoTime provides workforce intelligence, verification, governance, reporting, and performance-insight tools. Customers are responsible for configuring and using ZoikoTime in accordance with applicable employment, privacy, workplace monitoring, data protection, consultation, and worker-notification laws. ZoikoTime is not a substitute for legal, HR, or compliance advice.
          </p>
        </div>

      </div>
    </footer>
  );
}