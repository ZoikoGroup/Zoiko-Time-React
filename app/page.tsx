import type { Metadata } from "next";
import HomePage from "./home/page";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "ZoikoTime | AI Time Intelligence Platform",
  description: "ZoikoTime is an AI time intelligence platform that helps enterprises understand work patterns, improve productivity, and support ethical workforce decisions.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zoikotime.com/#organization",
      "name": "ZoikoTime",
      "url": "https://zoikotime.com/"
    },
    {
      "@type": "WebSite",
      "@id": "https://zoikotime.com/#website",
      "name": "ZoikoTime",
      "url": "https://zoikotime.com/",
      "publisher": {
        "@id": "https://zoikotime.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://zoikotime.com/#webpage",
      "url": "https://zoikotime.com/",
      "name": "ZoikoTime | Workforce Assurance & Performance Intelligence Platform",
      "isPartOf": {
        "@id": "https://zoikotime.com/#website"
      },
      "about": {
        "@id": "https://zoikotime.com/#organization"
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <HomePage />
    </>
  );
}
