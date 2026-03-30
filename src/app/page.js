'use client';

import Section from "./components/Section";
import Sidebar from "./components/SideBar";
import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

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

  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      if (e.target.closest(".blu")) {
        cursor.style.display = "block";
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      } else {
        cursor.style.display = "none";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <>
    <div ref={cursorRef} className="cursor-circle"></div>
    <main
      className="blu"
    >
      
      <div
        style={{
          display: "flex",
        }}>
        {/* <Sidebar appSections={sections} sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} section={selectedSection} setSection={setSelectedSection} /> */}
        <div
          style={{
            overflowY: "scroll",
            // marginLeft: "20px",
            padding: "40px",
            height: "100vh",
            width: "100%",
          }}>
          {sections.map((section, index) => (
            <Section key={section} title={section} index={index}>
              {section === "Hero" && (<Hero appSections={sections} scrollToSection={scrollToSection} />)}
              {section === "Experience" && <Experience />}
              {section === "Projects" && <Projects />}
              {section === "Skills" && <Skills />}
              {section === "About" && <About scrollToSection={scrollToSection} />}
            </Section>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}