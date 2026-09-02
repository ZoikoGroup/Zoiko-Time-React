import type { Metadata } from "next";
import HR from "./hr";

export const metadata: Metadata = {
  title: "HR, Legal & Operations Teams | ZoikoTime",
  description: "Empower HR, Legal & Operations teams with ZoikoTime to manage workforce records, approvals, exceptions, analytics, evidence retention, and governance.",
};

export default function(){
    return(
        <HR/>
    )
}