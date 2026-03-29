// components/Experience.js
import { experienceObject } from "../data/sectionObjects";

export default function Experience() {
  return (
    <div style={{ maxWidth: "1000px" }}>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          lineHeight: "1.7",
          marginBottom: "32px",
          maxWidth: "750px",
        }}
      >
        {experienceObject.intro}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {experienceObject.cards.map((card) => (
          <div
            key={card.title}
            style={{
              padding: "20px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              backdropFilter: "blur(4px)",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "12px",
                fontSize: "1.1rem",
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.78)",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}