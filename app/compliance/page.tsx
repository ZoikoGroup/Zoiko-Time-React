import type { Metadata } from "next";
import Compliance from "./compliance";
export const metadata: Metadata = {
  title: "Workforce Compliance Platform for Enterprises | ZoikoTime",
  description: "ZoikoTime workforce compliance platform ensures continuous compliance, audit-ready evidence, and governance control for enterprise operations.",
};

export default function(){
    return(

        <Compliance/>
    )
}