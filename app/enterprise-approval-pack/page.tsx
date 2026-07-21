import React from 'react'
import ApprovalPack from './components/ApprovalPack'
import WhatItDoes from './components/WhatItDoes'
import PackContents from './components/PackContents'
import StakeholderPack from './components/StakeholderPack'
import HonestyNote from './components/HonestyNote'
import ApprovalCTA from './components/ApprovalCTA'

export default function page() {
  return (
    <main>
        <ApprovalPack />
        <WhatItDoes />
        <PackContents />
        <StakeholderPack />
        <HonestyNote />
        <ApprovalCTA />
    </main>
  )
}
