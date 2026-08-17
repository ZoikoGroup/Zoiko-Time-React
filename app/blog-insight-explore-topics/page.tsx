"use client";

import React, { useState, useRef } from "react";
import BlogHero from "./components/BlogHero";
import FeaturedPosts from "./components/FeaturedPosts";
import ExploreTopicsBanner from "./components/ExploreTopicsBanner";
import TopicExplorer from "./components/TopicExplorer";
import ArticlesGrid from "./components/ArticlesGrid";
import AuthorityLookupTable from "./components/AuthorityLookupTable";

interface Article {
  title: string;
  category: string;
  excerpt: string;
  publishDate: string;
  reviewDate: string;
  author: string;
  linkText: string;
  image?: string;
  typeBadge?: "Example" | "Opinion";
}

const articlesData: Article[] = [
  {
    title: "Why time disputes happen — and how clear records prevent them",
    category: "Time & Attendance",
    excerpt: "A plain look at the common causes of avoidable time disputes, and what a reviewable record actually contains.",
    publishDate: "2026-07-18",
    reviewDate: "Reviewed Jul 2026",
    author: "Editorial Desk",
    linkText: "Product Documentation →",
    image: "/blog-insights-topic/Img.png"
  },
  {
    title: "Deterministic vs. AI classification: what the difference means",
    category: "Human-in-Command & AI",
    excerpt: "Why ZoikoTime classifies time deterministically, and where automation is deliberately kept out of decisions.",
    publishDate: "2026-07-10",
    reviewDate: "Reviewed Jul 2026",
    author: "Product Editorial",
    linkText: "Responsible AI →",
    image: "/blog-insights-topic/Img (1).png"
  },
  {
    title: "Anti-surveillance by design: the signals we never collect",
    category: "Privacy & Anti-Surveillance",
    excerpt: "The monitoring signals ZoikoTime doesn’t collect — and why that’s a product boundary, not a setting.",
    publishDate: "2026-06-28",
    reviewDate: "Reviewed Jun 2026",
    author: "Trust Editorial",
    linkText: "Trust Center →",
    image: "/blog-insights-topic/Img (2).png"
  },
  {
    title: "Coordinating hybrid work without a live worker map",
    category: "Distributed & Hybrid Work",
    excerpt: "How to run office, remote, and field work from declared context instead of location tracking.",
    publishDate: "2026-06-20",
    reviewDate: "Reviewed Jun 2026",
    author: "Editorial Desk",
    linkText: "Product Documentation →",
    image: "/blog-insights-topic/Img (3).png"
  },
  {
    title: "Evidence you can defend: what belongs in a time record",
    category: "Workforce Governance",
    excerpt: "Source, policy, participation, decision, and history — the parts of a record that make it reviewable.",
    publishDate: "2026-06-12",
    reviewDate: "Reviewed Jul 2026",
    author: "Governance Editorial",
    linkText: "Trust Center →",
    image: "/blog-insights-topic/Img (4).png"
  },
  {
    title: "A practical rollout: from pilot to first cycle",
    category: "Implementation & Adoption",
    excerpt: "A calm, phased approach to introducing governed time without disrupting how teams already work.",
    publishDate: "2026-06-05",
    reviewDate: "Reviewed Jun 2026",
    author: "Editorial Desk",
    linkText: "Implementation Guide →",
    image: "/blog-insights-topic/Img (5).png",
    typeBadge: "Example"
  },
  {
    title: "Global time, local context: handling time zones honestly",
    category: "Distributed & Hybrid Work",
    excerpt: "Preserving the local timestamp and deriving a clearly-labeled reporting time — without guessing.",
    publishDate: "2026-05-28",
    reviewDate: "Reviewed Jun 2026",
    author: "Product Editorial",
    linkText: "Product Documentation →",
    image: "/blog-insights-topic/Img (1).png"
  },
  {
    title: "Human authority in review: who decides, and why",
    category: "Workforce Governance",
    excerpt: "The case for keeping consequential decisions with people, and how systems can support rather than replace them.",
    publishDate: "2026-05-20",
    reviewDate: "Reviewed Jun 2026",
    author: "Governance Editorial",
    linkText: "Responsible AI →",
    image: "/blog-insights-topic/Img (4).png",
    typeBadge: "Opinion"
  },
  {
    title: "Reading your own records: worker transparency in practice",
    category: "Privacy & Anti-Surveillance",
    excerpt: "What worker-visible records look like, and how a correction request actually works.",
    publishDate: "2026-05-12",
    reviewDate: "Reviewed May 2026",
    author: "Trust Editorial",
    linkText: "Help Center →",
    image: "/blog-insights-topic/Img (3).png"
  },
  {
    title: "Attendance readiness before the cutoff",
    category: "Time & Attendance",
    excerpt: "Spotting missing or inconsistent records early, so nothing surprises payroll at the deadline.",
    publishDate: "2026-05-04",
    reviewDate: "Reviewed May 2026",
    author: "Editorial Desk",
    linkText: "Release Notes →",
    image: "/blog-insights-topic/Img.png"
  }
];

const topics = [
  "All",
  "Time & Attendance",
  "Workforce Governance",
  "Privacy & Anti-Surveillance",
  "Human-in-Command & AI",
  "Distributed & Hybrid Work",
  "Implementation & Adoption"
];

const authorityData = [
  { question: "What does ZoikoTime currently do?", page: "Product Documentation →" },
  { question: "How do I complete a task?", page: "Help Center →" },
  { question: "What changed?", page: "Release Notes →" },
  { question: "Is it secure, private, accessible, governed?", page: "Trust Center →" },
  { question: "What does it cost?", page: "See Your Custom Quote →" },
  { question: "Deployment, procurement or support", page: "Enterprise pages →" },
  { question: "A qualified enterprise conversation", page: "Request Enterprise Demo →" }
];

export default function BlogInsightExploreTopicsPage() {
  const [activeTopic, setActiveTopic] = useState("All");
  const explorerSectionRef = useRef<HTMLDivElement>(null);

  const scrollToExplorer = () => {
    explorerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Filtered Articles
  const filteredArticles = articlesData.filter((article) => {
    return activeTopic === "All" || article.category === activeTopic;
  });

  return (
    <div className="bg-white min-h-screen text-slate-800 dark:bg-gray-900 dark:text-white font-sans transition-colors duration-150">
      {/* 1. Blog Hero Header */}
      <BlogHero />

      {/* 2. Featured Posts */}
      <FeaturedPosts />

      {/* 3. Explore Topics Banner */}
      <ExploreTopicsBanner onExploreClick={scrollToExplorer} />

      {/* 4. Topic Explorer Section wrapper */}
      <div ref={explorerSectionRef}>
        <TopicExplorer
          activeTopic={activeTopic}
          setActiveTopic={setActiveTopic}
          filteredCount={filteredArticles.length}
          totalCount={articlesData.length}
          topics={topics}
        />
      </div>

      {/* 5. Filtered Insights Articles Grid */}
      <ArticlesGrid articles={filteredArticles} />

      {/* 6. Authority Reference Lookups */}
      <AuthorityLookupTable authorityData={authorityData} />
    </div>
  );
}
