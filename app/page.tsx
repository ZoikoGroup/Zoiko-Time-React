import type { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "ZoikoTime | AI Time Intelligence Platform",
  description:
    "ZoikoTime is an AI time intelligence platform that helps enterprises understand work patterns, improve productivity, and support ethical workforce decisions.",
};

export default function Page() {
  return <HomePage />;
}
