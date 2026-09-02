import type { Metadata } from "next";
import React from 'react'
import CaseStudyHero from './components/CaseStudyHero'
import CaseStudyCards from './components/CaseStudyCards'
import CustomerVoice from './components/CustomerVoice'
import TimeToValue from './components/TimeToValue'
import BenchmarkIntelligence from './components/BenchmarkIntelligence'
import EvaluationPack from './components/EvaluationPack'
import GetStartedSection from './components/GetStartedSection'

export const metadata: Metadata = {
  title: "Case Studies & Enterprise ROI Results | ZoikoTime",
  description: "Case Studies & Enterprise ROI Results show how ZoikoTime delivers measurable payroll savings, compliance gains, and workforce efficiency at scale.",
};

export default function page() {
  return (
    <main>
        <CaseStudyHero />
        <CaseStudyCards />
        <CustomerVoice />
        <TimeToValue />
        <BenchmarkIntelligence />
        <EvaluationPack />
        <GetStartedSection />
    </main> 
  )
}
