import React from 'react'
import DisclosureHero from './components/DisclosureHero'
import RouteCheck from './components/RouteCheck'
import TestWarning from './components/TestWarning'
import ScopeTable from './components/ScopeTable'
import TestRules from './components/TestRules'
import SafeHarbor from './components/SafeHarbor'
import ReportPrep from './components/ReportPrep'
import ReportForm from './components/ReportForm'
import RelatedRoutes from './components/RelatedRoutes'
import DisclosureCTA from './components/DisclosureCTA'


export default function page() {
  return (
    <main>
        <DisclosureHero />
        <RouteCheck />
        <TestWarning />
        <ScopeTable />
        <TestRules />
        <SafeHarbor />
        <ReportPrep />
        <ReportForm />
        <RelatedRoutes />
        <DisclosureCTA />
    </main>
  )
}
