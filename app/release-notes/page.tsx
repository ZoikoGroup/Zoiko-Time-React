import type { Metadata } from "next";
import ReleaseNotesPage from "./notes";

export const metadata: Metadata = {
  title: "Release Notes and Product Updates | ZoikoTime",
  description: "Stay updated with ZoikoTime release notes covering new features, improvements, fixes, security changes, API updates, documentation, and product enhancements.",
};

export default function page (){
    return (
        <ReleaseNotesPage/>
    )
}