import { projectsObject } from "../data/sectionObjects";

export default function Projects() {
  return (
    <div style={{ maxWidth: "2000px" }}>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          lineHeight: "1.7",
          marginBottom: "32px",
          maxWidth: "750px",
        }}
      >
        {projectsObject.intro}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {projectsObject.cards.map((card) => (
          <div
            className="feature-card"
            key={card.title}
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
            <div style={{
              minHeight: "300px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              backdropFilter: "blur(4px)",
              marginTop: "40px",
            }}>
              Image Placeholder
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}