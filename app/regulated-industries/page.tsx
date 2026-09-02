import type { Metadata } from "next";
import Regulated from "./regulated";

export const metadata: Metadata = {
  title: "Regulated Industries Compliance Platform | ZoikoTime",
  description: "ZoikoTime provides regulated industries with workforce governance, continuous compliance monitoring, and defensible audit-ready documentation.",
};

export default function(){
    return(
        <Regulated/>
    )
}