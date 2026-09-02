import type { Metadata } from "next";
import React from 'react'
import Hero from './components/Hero'
import PurposeLegalStatus from './components/PurposeLegalStatus'
import ControllerRoles from './components/ControllerRoles'
import SubProcessorRegister from './components/SubProcessorRegister'
import DueDiligence from './components/DueDiligence'
import Notification from './components/Notification'
import CustomerObjection from './components/CustomerObjection'
import PolicyNotice from './components/PolicyNotice'
import InternationalTransfers from './components/InternationalTransfers'
import ContactZoikoTime from './components/ContactZoikoTime'

export const metadata: Metadata = {
  title: "ZoikoTime Subprocessor List | Data Privacy Partners",
  description: "Explore the ZoikoTime subprocessor list to learn about third-party providers that support secure data processing, privacy, and reliable platform services.",
};

export default function page() {
  return (
    <main>
      <Hero />
      <PolicyNotice />
      <PurposeLegalStatus />
      <ControllerRoles />
      <SubProcessorRegister />
      <DueDiligence />
      <Notification />
      <CustomerObjection />
      <InternationalTransfers />
      <ContactZoikoTime />
    </main>
  )
}
