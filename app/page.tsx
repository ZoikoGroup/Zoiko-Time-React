import { Metadata } from "next";
export const metadata = {
  title: "ZoikoTime | AI Time Intelligence Platform",
  description:
"ZoikoTime is an AI time intelligence platform that helps enterprises understand work patterns, improve productivity, and support ethical workforce decisions."
};

import TimeHome from "./home/home";


export default function Home() {
 return(

      <TimeHome/>
  );
}
