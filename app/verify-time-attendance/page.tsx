import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import VerifyHero from "./components/VerifyHero";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
import VerificationDefinition from "./components/VerificationDefinition";
import WhyVerificationFails from "./components/WhyVerificationFails";
import VerificationLifecycle from "./components/VerificationLifecycle";
import VerificationWorkspace from "./components/VerificationWorkspace";
import CaptureContext from "./components/CaptureContext";
import AttendanceStates from "./components/AttendanceStates";
import ExceptionResolution from "./components/ExceptionResolution";
import BreakRestRecords from "./components/BreakRestRecords";
import IntegrationsDataFlow from "./components/IntegrationsDataFlow";
import ImplementationPath from "./components/ImplementationPath";
import VerifyFaq from "./components/VerifyFaq";

export const metadata: Metadata = {
  title: "Time & Attendance Verification Software | ZoikoTime",
  description: "Verify employee time and attendance with ZoikoTime. Get accurate, payroll-ready records without invasive surveillance or complicated tracking systems.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} vta-type`}>
      <VerifyHero />
      <VerificationDefinition />
      <WhyVerificationFails />
      <VerificationLifecycle />
      <VerificationWorkspace />
      <CaptureContext />
      <AttendanceStates />
      <ExceptionResolution />
      <BreakRestRecords />
      <IntegrationsDataFlow />
      <ImplementationPath />
      <VerifyFaq />
    </div>
  );
}
