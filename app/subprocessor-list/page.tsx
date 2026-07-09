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
