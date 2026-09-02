import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Documentation & Guides | ZoikoTime",
  description: "Access ZoikoTime product documentation for administrators, workers, managers, HR, finance, IT, and enterprise teams covering features, setup, and workflows.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
