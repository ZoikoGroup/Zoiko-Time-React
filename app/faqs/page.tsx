import type { Metadata } from "next";
import React from 'react'
import FaqHero from './components/FaqHero'
import FaqTabs from './components/FaqTabs'
import GeneralFaq from './components/GeneralFaq'
import BillingFaq from './components/BillingFaq'
import TimeFaq from './components/TimeFaq'
import PrivacyFaq from './components/PrivacyFaq'
import SecurityFaq from './components/SecurityFaq'
import SupportFaq from './components/SupportFaq'
import FaqNotice from './components/FaqNotice'
import FaqCta from './components/FaqCta'
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Answers | ZoikoTime",
  description: "Find answers to ZoikoTime FAQs about workforce assurance, time tracking, platform features, security, privacy, billing, and common customer questions.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ZoikoTime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ZoikoTime is an enterprise workforce assurance and performance intelligence platform that creates deterministic, evidence-backed records of workforce time, attendance, and operational activity."
      }
    },
    {
      "@type": "Question",
      "name": "Is ZoikoTime time-tracking software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ZoikoTime provides comprehensive time and attendance tracking while extending beyond basic timekeeping by pairing verified records with deterministic classification and policy rules."
      }
    },
    {
      "@type": "Question",
      "name": "Does ZoikoTime use AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ZoikoTime incorporates governed artificial intelligence through its Kairos Assistant framework, keeping personnel decisions subject to authorized human oversight."
      }
    },
    {
      "@type": "Question",
      "name": "Can ZoikoTime support global workforces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ZoikoTime supports global workforce operations by providing configurable organizational structures, regional policy rules, multi-time-zone handling, and localized compliance controls."
      }
    }
  ]
};

export default function page() {
  return (
    <main>
      <JsonLd data={jsonLd} />
        <FaqHero />
        <FaqTabs />
        <GeneralFaq />
        <BillingFaq />
        <TimeFaq />
        <PrivacyFaq />
        <SecurityFaq />
        <SupportFaq />
        <FaqNotice />
        <FaqCta />
    </main>
  )
}

