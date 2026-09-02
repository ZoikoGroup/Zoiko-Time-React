import type { Metadata } from "next";
import React from 'react'
import ApprovalPack from './components/ApprovalPack'
import WhatItDoes from './components/WhatItDoes'
import PackContents from './components/PackContents'
import StakeholderPack from './components/StakeholderPack'
import HonestyNote from './components/HonestyNote'
import ApprovalCTA from './components/ApprovalCTA'

export const metadata: Metadata = {
  title: "Enterprise Buying Approval Resource | ZoikoTime",
  description: "Access an enterprise buying approval resource for ZoikoTime covering ROI, security, privacy, technical architecture, procurement, and legal review materials.",
};

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
