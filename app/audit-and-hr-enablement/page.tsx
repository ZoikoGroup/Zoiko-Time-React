import type { Metadata } from "next";
import React from 'react'
import GovernanceHero from './components/GovernanceHero'
import WorkforceDecisionProblem from './components/WorkforceDecisionProblem'
import Solution from './components/Solution'
import CaseFlow from './components/CaseFlow'
import HREnable from './components/HREnable'
import AuditFlow from './components/AuditFlow'
import WorkflowGov from './components/WorkflowGov'
import Trace from './components/Trace'
import Outcome from './components/Outcome'
import CrossFunc from './components/CrossFunc'
import Impact from './components/Impact'
import WhyZ from './components/WhyZ'
import GetStarted from './components/GetStarted'


export const metadata: Metadata = {
  title: "Audit & HR Compliance Services | ZoikoTime",
  description: "Strengthen your business with Zoiko Time audit & HR compliance services designed for better HR control, compliance, and operational efficiency.",
};

export default function page() {
  return (
    <main>
       <GovernanceHero />
       <WorkforceDecisionProblem />
       <Solution />
       <CaseFlow />
       <HREnable />
       <AuditFlow />
       <WorkflowGov />
       <Trace />
       <Outcome />
       <CrossFunc />
       <Impact />
       <WhyZ />
       <GetStarted />
    </main>
  )
}
