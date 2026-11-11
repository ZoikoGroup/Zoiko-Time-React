import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import PromoBar from "./components/PromoBar";
import BlackFridayHero from "./components/BlackFridayHero";
import PlatformFeatures from "./components/PlatformFeatures";
import BlackFridayPricing from "./components/BlackFridayPricing";
import AssuranceLifecycle from "./components/AssuranceLifecycle";
import TrackTimeSection from "./components/TrackTimeSection";
import Testimonials from "./components/Testimonials";
import BlackFridayFaq from "./components/BlackFridayFaq";
import FeaturedQuote from "./components/FeaturedQuote";
import OfferCountdown from "./components/OfferCountdown";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Friday Sale — 30% Off Annual Plans | ZoikoTime",
  description:
    "Save 30% on the first year of any eligible ZoikoTime annual plan. Verified time tracking, timesheets, approvals and reporting. Offer ends Cyber Monday, 30 November.",
};

export default function Page() {
  return (
    <div className={`${manrope.variable} ${inter.variable} bf-type bg-[#070f1d] text-white`}>
      <PromoBar />
      <BlackFridayHero />
      <PlatformFeatures />
      <BlackFridayPricing />
      <AssuranceLifecycle />
      <TrackTimeSection />
      <Testimonials />
      <BlackFridayFaq />
      <FeaturedQuote />
      <OfferCountdown />
    </div>
  );
}
