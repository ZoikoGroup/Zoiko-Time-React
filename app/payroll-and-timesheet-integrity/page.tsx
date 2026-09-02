import type { Metadata } from "next";
import Payroll from "./payroll";

export const metadata: Metadata = {
  title: "Payroll & Timesheet Integrity | ZoikoTime",
  description: "ZoikoTime helps teams improve payroll and timesheet integrity by capturing, reviewing, approving, correcting, retaining, and exporting trusted time records.",
};

export default function Page() {
  return <Payroll />;
}