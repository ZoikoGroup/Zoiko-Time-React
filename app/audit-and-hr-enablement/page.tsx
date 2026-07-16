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
