'use client';

import MediaFrame from "./MediaFrame";

  const buttonStyle = {
    padding: "10px 18px",
    borderRadius: "999px",
    background: "hover"
      ? "rgba(255,255,255,0.14)"
      : "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",

    transform: "hover"
      ? "translateY(-3px) scale(1.03)"
      : "translateY(0px) scale(1)",

    boxShadow: "hover"
      ? "0 8px 25px rgba(0, 123, 255, 0.25)"
      : "0 2px 6px rgba(0,0,0,0.2)",
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
        <section 
            id="hero"
            style={{
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
                width: "100%",
                height: "80%",
                zIndex: 0,
                opacity: 0.4, // quick global fade
            }}>
                <MediaFrame
                    src="/images/abstract-background-1.jpg"
                />
            </div> */}
            <div style={{
                // maxWidth: "900px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                gap: "20px",
            }}>

                {/* Headline */}
                                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>

                <h2 style={{
                    fontSize: "clamp(1.5rem, 3vw, 3.5rem)",
                    fontWeight: "600",
                    lineHeight: "1.2",
                    textAlign: "left",
                    color: "white",
                }}>
                    Hello, I am Aubrie,
                </h2>
                                    <div
                        style={{
                            width: "30%",
                            minHeight: "100px",
                        }}
                    ></div>
                </div>

                {/* Intro */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <div
                        style={{
                            width: "30%",
                            minHeight: "100px",
                        }}
                    ></div>
                    <p style={{
                        fontSize: "1.1rem",
                        opacity: 0.8,
                        // maxWidth: "700px",
                        lineHeight: "1.6",
                        textAlign: "right",
                        width: "100%",
                    }}>
                        I enjoy creating intuitive, flexible interfaces that make complex systems feel simple to use.
                        I’ve worked on data-driven dashboards and no-code tools, which has shaped how I think about usability and design.
                    </p>
                </div>


                {/* Current Focus */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>

                    <p style={{
                        fontSize: "0.95rem",
                        opacity: 0.6,
                        textAlign: "left",
                        width: "100%",
                    }}>
                        Currently working on: refining my portfolio, interactive UI systems, and component-driven design.
                    </p>
                    <div
                        style={{
                            width: "30%",
                            minHeight: "100px",
                        }}
                    ></div>
                </div>

                {/* Buttons */}
                <div style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    
                }}>
                    {sections.map((section) => (
                        <p 
                            className="button-style"
                            onClick={() => scrollToSection(section.toLowerCase())}
                            // style={buttonStyle}
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

