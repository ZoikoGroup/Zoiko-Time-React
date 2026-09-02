import type { Metadata } from "next";
import Distributed from "./distributed"
export const metadata: Metadata = {
  title: "Distributed Workforce Management System | ZoikoTime",
  description: "Manage global teams with ZoikoTime distributed workforce management system for productivity tracking, reporting, and seamless remote collaboration.",
};

export default function (){
    return(
        <Distributed/>
    )
}