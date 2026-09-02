import type { Metadata } from "next";
import React from 'react'
import DocsHero from './components/DocsHero'
import Quickstart from './components/Quickstart'
import ApiRef from './components/ApiRef'
import Records from './components/Records'
import Endpoints from './components/Endpoints'
import IntegrationNote from './components/IntegrationNote'
import CoreConcepts from './components/CoreConcepts'
import ApiConcepts from './components/ApiConcepts'
import SDKs from './components/SDKs'
import Guides from './components/Guides'
import ApiPrinciples from './components/ApiPrinciples'

export const metadata: Metadata = {
  title: "Development Documentation and API Guides | ZoikoTime",
  description: "Access ZoikoTime development documentation and API guides covering authentication, records, policies, evidence, events, webhooks, SDKs, and integrations.",
};

export default function page() {
  return (
    <main>
        <DocsHero />
        <Quickstart />
        <ApiRef />
        <Records />
        <Endpoints />
        <IntegrationNote />
        <CoreConcepts />
        <ApiConcepts />
        <SDKs />
        <Guides />
        <ApiPrinciples />
    </main>
  )
}
