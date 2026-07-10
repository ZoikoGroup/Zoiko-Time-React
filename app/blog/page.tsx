import React from 'react'
import BlogHero from './components/BlogHero'
import FeaturedInsight from './components/FeaturedInsight'
import BlogTopics from './components/BlogTopics'
import ReaderPaths from './components/ReaderPaths'
import LatestArticles from './components/LatestArticles'
import FeaturedResources from './components/FeaturedResources'
import RelatedResources from './components/RelatedResources'
import BlogCTA from './components/BlogCTA'

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
