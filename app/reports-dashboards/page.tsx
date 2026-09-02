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
  title: "Workforce Reporting Dashboards | ZoikoTime",
  description: "ZoikoTime workforce reporting dashboards provide clear, traceable workforce data to help teams monitor records, workflows, exceptions, and data quality.",
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
