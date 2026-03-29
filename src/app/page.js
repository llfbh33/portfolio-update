'use client';

import Section from "./components/Section";
import Sidebar from "./components/SideBar";
import { useState } from "react";

export default function Home() {
  let [sideBarOpen, setSideBarOpen] = useState(true);
  let [selectedSection, setSelectedSection] = useState("Experience");

  let sections = [
    "Experience",
    "Projects",
    "Skills",
    "About",
    "Contact",
  ];


  return (
    <main>
      <div style={{
        display: "flex",
      }}>
        <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} section={selectedSection} setSection={setSelectedSection} />
        <div
          style={{
            overflowY: "scroll",
            marginLeft: "20px",
            padding: "20px",
            height: "100vh",
            width: "100%",
          }}>
          {sections.map((section, index) => (
            <Section key={section} title={section} index={index}/>
          ))}
        </div>
      </div>
    </main>
  );
}