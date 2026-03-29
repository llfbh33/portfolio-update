'use client';

import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { personalSummary } from "../data/aboutMe";



export default function Sidebar({ sideBarOpen, setSideBarOpen, section, setSection }) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSideBarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setSideBarOpen(false);
    };


    return (
        <aside
            id="heroBar"
            ref={sidebarRef}
            style={{
                width: sideBarOpen ? "400px" : "60px",
                height: "100vh",
                background: "#111827",
                color: "#e5e7eb",
                padding: sideBarOpen ? "20px" : "20px 0px 0px 0px",
                position: "fixed",
                left: 0,
                top: 0,
                background: "linear-gradient(180deg, #21407c 40%, #8ba0cf 100%)",
                overflow: "hidden",
                transition: "width 0.4s ease, clip-path 0.4s ease",
                clipPath: sideBarOpen
                    ? "polygon(0 0, 100% 0, 60% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 65% 100%, 0 100%)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: sideBarOpen ? "space-between" : "center",
                    alignItems: "center",
                    height: "60px",
                }}
            >

                {sideBarOpen && <h2 style={{
                    margin: 0,
                    opacity: sideBarOpen ? 1 : 0,
                    pointerEvents: sideBarOpen ? "auto" : "none",
                    whiteSpace: "nowrap",
                }}>Aubrie Woodbine</h2>}

                <div
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                    }}
                    onClick={() => setSideBarOpen(prev => !prev)}
                >
                    {sideBarOpen ? (
                        <RiArrowLeftDoubleFill />
                    ) : (
                        <RiArrowRightDoubleFill />
                    )}
                </div>
            </div>

            {sideBarOpen &&
                (<div style={{
                    opacity: sideBarOpen ? 1 : 0,
                    pointerEvents: sideBarOpen ? "auto" : "none",
                    whiteSpace: "nowrap",
                }}>
                    <div
                        style={{
                            width: "60%",
                            aspectRatio: "1 / 1",
                            borderRadius: "50%",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "linear-gradient(135deg, #ffffff8f, #ffffff05)",
                            boxShadow: `
                                0px 8px 40px rgba(0,0,0,0.35),
                                inset 0px 12px 6px rgba(255,255,255,0.15),
                                inset 0 -5px 8px rgba(0,0,0,0.25)
                                `,
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="/images/profile.png"
                            alt="Profile Picture"
                            style={{
                                width: "85%",
                                height: "85%",
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                      <div
    style={{
      width: "100%",
      minWidth: "220px",
      maxWidth: "280px",
      opacity: 1,
      pointerEvents: "auto",
    }}
  >
                    <h3>Frontend Developer</h3>
                    <p style={{ fontSize: "0.9em", color: "#cbd5e1", whiteSpace: "normal", paddingRight: "30px" }}>{personalSummary}</p>
                    <p style={{ border: '1px solid #e5e7eb', width: "80%" }}></p>
                    <nav>
                        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2em" }}>
                            <li className="nav-link" onClick={() => scrollToSection("experience")}>Experience</li>
                            <li className="nav-link" onClick={() => scrollToSection("projects")}>Projects</li>
                            <li className="nav-link" onClick={() => scrollToSection("skills")}>Skills</li>
                            <li className="nav-link" onClick={() => scrollToSection("about")}>About</li>
                            <li className="nav-link" onClick={() => scrollToSection("contact")}>Contact</li>
                        </ul>
                    </nav>
                </div>
                </div>
                )}
        </aside>
    );
}