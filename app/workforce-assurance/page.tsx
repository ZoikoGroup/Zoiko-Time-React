import type { Metadata } from "next";
import WorkforceAssuranceHub from "./workforce";

export const metadata: Metadata = {
  title: "Global Knowledge Hub for Workforce Assurance | ZoikoTime",
  description: "Access ZoikoTime global knowledge hub for workforce assurance—research, compliance resources, and tools to reduce risk and improve workforce outcomes.",
};

export default function(){
    return(
        <WorkforceAssuranceHub/>
    )
}