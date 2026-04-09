// /components/About.js
import { aboutMeObject } from "../data/aboutMe";
import { devLinks } from "../data/aboutMe";

export default function About({ scrollToSection }) {
    const resumeObj = devLinks.find(ele => ele.name === 'resume')

    return (
        <div className="about-section">
                <div
                    style={{
                        position: "relative",
                        flex: "0 1 380px",
                        width: "100%",
                        maxWidth: "300px",
                        maxHeight: "375px",
                        aspectRatio: "3 / 4",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "20px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        backdropFilter: "blur(4px)",
                        overflow: "hidden",
                        alignSelf: "flex-start",
                    }}
                >
                    <img
                        src={aboutMeObject.image}
                        alt="About Me"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            display: "block",
                        }}
                    />
                </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    flex: "1 1 0",
                    minWidth: 0,
                }}
            >
                <p
                    style={{
                        whiteSpace: "pre-line",
                        fontSize: "1rem",
                        lineHeight: "1.7",
                        color: "rgba(255,255,255,0.8)",
                        margin: 0,
                    }}
                >
                    {aboutMeObject.summary}
                </p>

                <div className="about-section-buttons">
                    <a
                                className="button-style button-link"
                                href={resumeObj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>

                    <p
                        className="button-style"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact Me
                    </p>
                </div>
            </div>
        </div>
    );
}