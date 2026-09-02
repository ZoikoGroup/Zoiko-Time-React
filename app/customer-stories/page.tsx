import type { Metadata } from "next";
import React from 'react'
import CustomerStories from './components/CustomerStories'
import CustomerStoryTrust from './components/CustomerStoryTrust'
import FeaturedStory from './components/FeaturedStory'
import BrowseByOutcome from './components/BrowseByOutcome'
import BrowseByWorkModel from './components/BrowseByWorkModel'
import StoryLibrary from './components/StoryLibrary'
import StoryDetail from './components/StoryDetail'
import EvidenceMethodology from './components/EvidenceMethodology'
import RelatedContent from './components/RelatedContent'
import GetStarted from './components/GetStarted'

export const metadata: Metadata = {
  title: "ZoikoTime Customer Stories | Verified Outcomes & Results",
  description: "Discover ZoikoTime customer stories with verified outcomes & results, customer consent, source reviews, date-stamped evidence, and transparent reporting.",
};

export default function page() {
  return (
    <main>
        <CustomerStories />
        <CustomerStoryTrust />
        <FeaturedStory />
        <BrowseByOutcome />
        <BrowseByWorkModel />
        <StoryLibrary />
        <StoryDetail />
        <EvidenceMethodology />
        <RelatedContent />
        <GetStarted />
    </main>
  )
}
