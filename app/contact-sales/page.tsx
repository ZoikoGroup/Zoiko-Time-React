import React from 'react'
import ContactHero from './components/ContactHero'
import WhatWeCanHelpWith from './components/WhatWeCanHelpWith'
import SalesPath from './components/SalesPath'
import AfterSubmit from './components/AfterSubmit'
import SeriousWorkforce from './components/SeriousWorkforce'
import NotLookingForSales from './components/NotLookingForSales'
import SalesCTA from './components/SalesCTA'

export default function page() {
  return (
    <main>
        <ContactHero />
        <WhatWeCanHelpWith />
        <SalesPath />
        <AfterSubmit />
        <SeriousWorkforce />
        <NotLookingForSales />
        <SalesCTA />
    </main>
  )
}
