import type { Metadata } from "next";
import RequestEnterpriseDemoPage from "./request-enterprise";

export const metadata: Metadata = {
  title: "Enterprise Demo for Workforce Management | ZoikoTime",
  description: "Request an enterprise ZoikoTime demo to see how one governed platform manages workforce activity, time, compliance, approvals, and audit evidence.",
};

export default function page(){
    return(
        <RequestEnterpriseDemoPage/>
    )
}