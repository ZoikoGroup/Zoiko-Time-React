import type { Metadata } from "next";
import Enterprise from "./enterprise";

export const metadata: Metadata = {
  title: "Enterprise Workforce Governance Platform | ZoikoTime",
  description: "ZoikoTime enterprise workforce governance helps manage workforce records, permissions, policies, approvals, retention, audit trails, and human oversight.",
};

export default function(){
    return(
        <Enterprise/>
    )
}