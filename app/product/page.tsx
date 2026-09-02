import type { Metadata } from "next";
import React from 'react'
import Hero from './components/Hero'
import PrivacyBanner from './components/PrivacyBanner'
import CoreCapabilities from './components/CoreCapabilities'
import ZoikoEcosystem from './components/ZoikoEcosystem'
import WhoWeServe from './components/WhoWeServe'
import ReadyToBuild from './components/ReadyToBuild'

export const metadata: Metadata = {
  title: "ZoikoTime Product | AI Time Tracking Platform",
  description: "ZoikoTime is an AI-powered platform for time tracking, workforce monitoring, and productivity insights to help teams work smarter and faster.",
};

export default function page() {
  return (
   <main>
    <Hero />
    <PrivacyBanner />
    <CoreCapabilities />
    <ZoikoEcosystem />
    <WhoWeServe />
    <ReadyToBuild />
   </main>
  )
}
