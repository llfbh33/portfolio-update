'use client';

import MediaFrame from "./MediaFrame";
import { heroObject } from "../data/sectionObjects";



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
                width: "80%",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                gap: "20px",
                // marginTop: "60px",
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
                        // textAlign: "left",
                        color: "white",
                        borderLeft: "1px solid rgba(255, 255, 255, 0.305)",
                        paddingLeft: "10px"
                    }}>
                        {heroObject.intro}
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
                        fontSize: "1.4rem",
                        opacity: 0.8,
                        // maxWidth: "700px",
                        lineHeight: "1.6",
                        textAlign: "right",
                        width: "100%",
                        borderRight: "1px solid rgba(255, 255, 255, 0.305)",
                        paddingRight: "10px"
                    }}>
                        {heroObject.introStatement}
                    </p>
                </div>


                {/* Current Focus */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>

                    <p style={{
                        fontSize: "1.2rem",
                        opacity: 0.7,
                        textAlign: "left",
                        width: "100%",
                        borderLeft: "1px solid rgba(255, 255, 255, 0.305)",
                        paddingLeft: "10px"
                    }}>
                        {heroObject.workingOn}
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
                    marginTop: "50px",
                    justifyContent: "center",
                    alignItems: "flex-start",

                }}>
                    {sections.map((section) => (
                        <>
                            {section !== 'Contact' && <p
                                className="button-style"
                                onClick={() => scrollToSection(section.toLowerCase())}
                                // style={buttonStyle}
                                key={section}
                            >
                                {section}
                            </p>}
                        </>
                    ))}
                </div>

            </div>
        </section>
    );
}

