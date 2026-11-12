import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SalesHero from "./components/SalesHero";
import WhatHappensNext from "./components/WhatHappensNext";
import EnterpriseAssurance from "./components/EnterpriseAssurance";
import TrustedBy from "./components/TrustedBy";
import SalesCTA from "./components/SalesCTA";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Contact Sales & Request a Demo | ZoikoTime",
  description: "Contact ZoikoTime sales for product demos, pricing details, implementation planning, security reviews, procurement support & enterprise workforce solutions.",
};

export default function Page() {
  return (
    <div className={`${inter.className} bg-white text-slate-900`}>
      <SalesHero />
      <WhatHappensNext />
      <EnterpriseAssurance />
      <TrustedBy />
      <SalesCTA />
    </div>
  );
}
