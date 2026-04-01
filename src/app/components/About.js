// /components/About.js
import { aboutMeObject } from "../data/aboutMe";

export default function About({ scrollToSection }) {


    return (
        <div style={{
            display: "flex",
            gap: "40px",
            flexDirection: "row",
            maxWidth: "100%",
        }}>
            <div style={{
                position: "relative",
                width: "35%",
                height: "100%",
                minHeight: "500px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                backdropFilter: "blur(4px)",
                overflow: 'hidden'
            }}>
                <img
                    src={aboutMeObject.image}
                    alt="About Me"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom right, rgba(0,0,0,0.15), rgba(0,0,0,0.4))",
                    pointerEvents: "none",
                }} />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    maxWidth: "60%",
                }}
            >
                <p
                    style={{
                        whiteSpace: "pre-line",
                        fontSize: "1rem",
                        lineHeight: "1.7",
                        color: "rgba(255,255,255,0.8)",
                    }}
                >
                    {aboutMeObject.summary}
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        flexWrap: "wrap",
                        marginTop: "10px",
                    }}
                >
                    <p
                        className="button-style"
                        onClick={() =>
                            window.open(
                                "https://docs.google.com/document/d/1_Hw2HF0YgszRQC8y3ldnmuvPuu2QP7KcxMOs-kKIhA4/edit?usp=sharing",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                    >
                        Resume
                    </p>

                    <p
                        className="button-style"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact Me
                    </p>
                </div>
            </div>
        </div>
    );
    ;
}
