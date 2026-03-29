// /components/About.js
import { aboutMeString } from "../data/aboutMe";

export default function About() {

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };


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
                    href="#"
                    style={buttonStyle}
                >
                    Resume
                </p>

                <p
                    onClick={() => scrollToSection('contact')}
                    style={buttonStyle}
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