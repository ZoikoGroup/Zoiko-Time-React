import type { Metadata } from "next";
import PressMediaPage from "./press";

export const metadata: Metadata = {
  title: "ZoikoTime Press & Media | Latest News & Updates",
  description: "Stay informed with ZoikoTime latest news, press releases, media coverage, and updates on workforce assurance and intelligent enterprise solutions.",
};

export default function page(){
    return (
        <PressMediaPage/>
    )
}