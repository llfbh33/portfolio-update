// /components/About.js
import { aboutMeString } from "../data/aboutMe";

export default function About({ scrollToSection }) {


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "700px",
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
                {aboutMeString}
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
    );
}

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