import type { Metadata } from "next";
import React from 'react'
import RemoteHybridHero from './components/RemoteHybridHero'
import WorkControl from './components/WorkControl'
import CoordinateEssentials from './components/CoordinateEssentials'
import DistributedTeamRoles from './components/DistributedTeamRoles'
import WhoItHelps from './components/WhoItHelps'
import ExploreModules from './components/ExploreModules'
import OperatingModel from './components/OperatingModel'

export const metadata: Metadata = {
  title: "Remote & Hybrid Work Management for Teams | ZoikoTime",
  description: "ZoikoTime helps manage remote and hybrid work with schedules, availability, approved time, coverage, and exceptions—without employee surveillance.",
};

export default function page() {
  return (
    <main>
        <RemoteHybridHero />
        <WorkControl />
        <CoordinateEssentials />
        <DistributedTeamRoles />
        <WhoItHelps />
        <ExploreModules />
        <OperatingModel />
    </main>
  )
}
