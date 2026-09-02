import type { Metadata } from "next";
import ClientBillablePage from "./client"
export const metadata: Metadata = {
  title: "Client Billable Revenue Tracking | ZoikoTime",
  description: "Improve client billable revenue tracking with ZoikoTime to reduce revenue leakage, validate billable work, and ensure accurate revenue recognition.",
};

export default function(){
    return(
        <ClientBillablePage/>
    )
}