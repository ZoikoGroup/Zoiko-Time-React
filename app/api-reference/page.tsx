import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import ApiHeader from "./components/ApiHeader";
import ApiSidebar from "./components/ApiSidebar";
import GettingStarted from "./components/GettingStarted";
import RecordsSection from "./components/RecordsSection";
import PoliciesSection from "./components/PoliciesSection";
import WebhooksSection from "./components/WebhooksSection";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "API Reference | ZoikoTime",
  description:
    "The ZoikoTime REST API — predictable resource-oriented URLs, JSON responses, date-based versioning, deterministic classification, and consequential decisions that are always made by a human.",
};

export default function Page() {
  return (
    <div
      className={`${poppins.variable} ${inter.variable} api-type w-full bg-white dark:bg-slate-950`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <ApiHeader />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[208px_1fr] lg:gap-16">

          <ApiSidebar />

          <main className="flex min-w-0 flex-col">
            <GettingStarted />
            <RecordsSection />
            <PoliciesSection />
            <WebhooksSection />
          </main>

        </div>

      </div>
    </div>
  );
}
