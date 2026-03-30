'use client';

import Section from "./components/Section";
import Sidebar from "./components/SideBar";
import { useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";

export default function Home() {
  let [sideBarOpen, setSideBarOpen] = useState(false);
  let [selectedSection, setSelectedSection] = useState("Experience");

  let sections = [
    "Hero",
    "Experience",
    "Projects",
    "Skills",
    "About",
    "Contact",
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <main>
      <div style={{
        display: "flex",
      }}>
        <Sidebar appSections={sections} sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} section={selectedSection} setSection={setSelectedSection} />
        <div
          style={{
            overflowY: "scroll",
            marginLeft: "10px",
            padding: "10px",
            height: "100vh",
            width: "100%",
          }}>
          {sections.map((section, index) => (
            <Section key={section} title={section} index={index}>
              {section === "Hero" && (<Hero appSections={sections} scrollToSection={scrollToSection} />)}
              {section === "Experience" && <Experience />}
              {section === "Skills" && <Skills />}
              {section === "About" && <About scrollToSection={scrollToSection} />}
            </Section>
          ))}
        </div>
      </div>
    </main>
  );
}