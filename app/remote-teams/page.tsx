import type { Metadata } from "next";
import React from 'react'
import RemoteTeamsHero from './components/RemoteTeamsHero'
import FailurePattern from './components/FailurePattern'
import RemoteOperatingModel from './components/RemoteOperatingModel'
import RemoteTeamOperationsCenter from './components/RemoteTeamOperationsCenter'
import RemoteFeatures from './components/RemoteFeatures'
import Workday from './components/Workday'
import Boundaries from './components/Boundaries'
import TrustRights from './components/TrustRights'
import Rollout from './components/Rollout'
import Faq from './components/Faq'
import Cta from './components/Cta'

export const metadata: Metadata = {
  title: "Remote Team Management Without Surveillance |ZoikoTime",
  description: "ZoikoTime simplifies remote team management with schedules, time zones, availability, handoffs, and approved time—all without employee surveillance.",
};

export default function page() {
  return (
    <main>
        <RemoteTeamsHero />
        <RemoteFeatures />
        <FailurePattern />
        <RemoteOperatingModel />
        <RemoteTeamOperationsCenter />
        <Workday />
        <Boundaries />
        <TrustRights />
        <Rollout />
        <Faq />
        <Cta />
    </main>
  )
}
