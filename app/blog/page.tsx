import type { Metadata } from "next";
import React from 'react'
import BlogHero from './components/BlogHero'
import FeaturedInsight from './components/FeaturedInsight'
import BlogTopics from './components/BlogTopics'
import ReaderPaths from './components/ReaderPaths'
import LatestArticles from './components/LatestArticles'
import FeaturedResources from './components/FeaturedResources'
import RelatedResources from './components/RelatedResources'
import BlogCTA from './components/BlogCTA'

export const metadata: Metadata = {
  title: "ZoikoTime Blog & Insights | Workforce Insights & Guidance",
  description: "Read ZoikoTime blog & insights for workforce guidance covering time integrity, timesheet accuracy, responsible AI, worker transparency, and governance.",
};

export default function page() {
  return (
    <main>
        <BlogHero />
        <FeaturedInsight />
        <BlogTopics />
        <ReaderPaths />
        <LatestArticles />
        <FeaturedResources />
        <RelatedResources />
        <BlogCTA />
    </main>
  )
}
