import type { Metadata } from "next";
import OperatingModelContent from "./components/OperatingModelContent";

export const metadata: Metadata = {
  title: "Distributed Work Operating Model | ZoikoTime",
  description: "See how a distributed work operating model connects schedules, time records, exceptions, approvals, and evidence through one governed workforce lifecycle.",
};

export default function OperatingModelPage() {
  return <OperatingModelContent />;
}
