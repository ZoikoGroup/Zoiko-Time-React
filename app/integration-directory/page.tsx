import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import DirectoryHero from "./components/DirectoryHero";
import IntegrationGrid from "./components/IntegrationGrid";
import GovernedBanner from "./components/GovernedBanner";
import Standards from "./components/Standards";
import HowItConnects from "./components/HowItConnects";

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
  title: "Integration Directory | ZoikoTime",
  description:
    "Connect ZoikoTime to payroll, HR, identity, finance, scheduling, and analytics systems through open standards — SAML, OIDC, SCIM, webhooks, REST, and SFTP.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} ${inter.variable} id-type`}>
      <DirectoryHero />
      <IntegrationGrid />
      <GovernedBanner />
      <Standards />
      <HowItConnects />
    </div>
  );
}
