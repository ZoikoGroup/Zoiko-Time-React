import type { Metadata } from "next";

import { inter } from "./fonts";
import ReportsHero from "./components/ReportsHero";
import ReportingLifecycle from "./components/ReportingLifecycle";
import WhatReportsCanShow from "./components/WhatReportsCanShow";
import DashboardAnatomy from "./components/DashboardAnatomy";
import RecordHealth from "./components/RecordHealth";
import MetricGovernance from "./components/MetricGovernance";
import FiltersAndScope from "./components/FiltersAndScope";
import WorkerRecordReports from "./components/WorkerRecordReports";
import ReviewCollaboration from "./components/ReviewCollaboration";
import ScheduledDelivery from "./components/ScheduledDelivery";
import GovernedExports from "./components/GovernedExports";
import ConnectedContext from "./components/ConnectedContext";
import BuiltForEveryAudience from "./components/BuiltForEveryAudience";
import ReportsFaq from "./components/ReportsFaq";

export const metadata: Metadata = {
  title: "Reports & Dashboards | ZoikoTime",
  description:
    "Organization-level views of record health, workflow status, source quality, and release readiness — every number carries its definition, version, and limitations. Governed outputs, not a leaderboard, and no worker scoring.",
};

export default function Page() {
  return (
    <div className={inter.className}>
      <ReportsHero />
      <ReportingLifecycle />
      <WhatReportsCanShow />
      <DashboardAnatomy />
      <RecordHealth />
      <MetricGovernance />
      <FiltersAndScope />
      <WorkerRecordReports />
      <ReviewCollaboration />
      <ScheduledDelivery />
      <GovernedExports />
      <ConnectedContext />
      <BuiltForEveryAudience />
      <ReportsFaq />
    </div>
  );
}
