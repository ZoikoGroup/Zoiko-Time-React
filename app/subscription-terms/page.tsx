import React from 'react'
import Subscriptionsection from './components/Subscriptionsection'
import SubscriptionSnapshot from './components/SubscriptionSnapshot'
import FreeTrialTerms from './components/FreeTrialTerms'
import BillingTerms from './components/BillingTerms'
import LifecycleTerms from './components/LifecycleTerms'
import PaymentTerms from './components/PaymentTerms'
import DataAccessCancellation from './components/DataAccessCancellation'
import EnterpriseTerms from './components/EnterpriseTerms'
import LegalNote from './components/LegalNote'
import SubscriptionFAQ from './components/SubscriptionFAQ'
import SubscriptionHelp from './components/SubscriptionHelp'


export default function page() {
  return (
    <main>
        <Subscriptionsection />
        <SubscriptionSnapshot />
        <FreeTrialTerms />
        <BillingTerms />
        <LifecycleTerms />
        <PaymentTerms />
        <DataAccessCancellation />
        <EnterpriseTerms />
        <LegalNote />
        <SubscriptionFAQ />
        <SubscriptionHelp />

    </main>
  )
}
