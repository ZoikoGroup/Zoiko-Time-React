import type { Metadata } from "next";
import Contractor from "./contractor";

export const metadata: Metadata = {
  title: "Contractor Workforce Control Platform | ZoikoTime",
  description: "Manage contractors at scale with ZoikoTime contractor workforce control platform for real-time verification, fraud prevention, and billing accuracy.",
};

export default function(){
    return(
        <Contractor/>
    )
}