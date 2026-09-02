import type { Metadata } from "next";
import LoginCard from "./LoginCard";

export const metadata: Metadata = {
  title: "ZoikoTime Login | Secure Workforce Access Portal",
  description: "Secure login to ZoikoTime for AI-powered time tracking, workforce analytics, and productivity insights to help teams work smarter and faster.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-50 px-4 py-8 transition-colors dark:bg-slate-950 sm:px-6 lg:px-8">
      <LoginCard />
    </main>
  );
}