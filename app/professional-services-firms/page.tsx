import type { Metadata } from "next";
import Professional from "./professional"

export const metadata: Metadata = {
  title: "Professional Services Firms | ZoikoTime",
  description: "ZoikoTime helps professional services firms verify billable time, improve utilization, reduce write-offs, support client billing & govern workforce records.",
};

export default function(){
    return (
        <Professional/>
    )
}