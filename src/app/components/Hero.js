'use client';

import MediaFrame from "./MediaFrame";

const buttonStyle = {
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
};

export default function Hero({ appSections, scrollToSection }) {
    let sections = [
        "Experience",
        "Projects",
        "Skills",
        "About",
        "Contact",
    ];

    return (
        <section style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            position: "relative", // important
            overflow: "hidden",   // prevents image bleed
        }}>
            {/* <div style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "45%",
                height: "38%",
                zIndex: 0,
                opacity: 0.4, // quick global fade
            }}>
                <MediaFrame
                    src="/images/landscape-1.jpeg"
                />
            </div> */}
            <div style={{
                maxWidth: "900px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
            }}>

                {/* Headline */}
                <h1 style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: "600",
                    lineHeight: "1.2",
                    textAlign: "center",
                    color: "white",
                }}>
                    Frontend Developer Building Clean, Interactive Experiences
                </h1>

                {/* Intro */}
                <p style={{
                    fontSize: "1.1rem",
                    opacity: 0.8,
                    maxWidth: "700px",
                    lineHeight: "1.6",
                    textAlign: "center",
                }}>
                    I enjoy creating intuitive, flexible interfaces that make complex systems feel simple to use.
                    I’ve worked on data-driven dashboards and no-code tools, which has shaped how I think about usability and design.
                </p>

                {/* Current Focus */}
                <p style={{
                    fontSize: "0.95rem",
                    opacity: 0.6,
                    textAlign: "center",
                }}>
                    Currently working on: refining my portfolio, interactive UI systems, and component-driven design.
                </p>

                {/* Buttons */}
                <div style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "10px",
                }}>
                    {sections.map((section) => (
                        <p onClick={() => scrollToSection(section.toLowerCase())}
                            style={buttonStyle}
                            key={section}
                        >
                            {section}
                        </p>
                    ))}
                </div>

            </div>
        </section>
    );
}

