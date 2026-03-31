// components/Experience.js
import { experienceObject } from "../data/sectionObjects";

export default function Experience() {
  return (
    <div style={{ maxWidth: "2000px" }}>
      {/* <p
        style={{
          color: "rgba(255,255,255,0.8)",
          lineHeight: "1.7",
          marginBottom: "32px",
          maxWidth: "750px",
        }}
      >
        {experienceObject.intro}
      </p> */}
      {experienceObject.jobs.map((job) => (
        <div style={{
          width: "40%",
          borderBottom: "1px solid rgba(255, 255, 255, 0.305)",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          paddingBottom: "6px"
        }}>
          <p
            style={{
              margin: 0,
              opacity: 0.7
            }}
          >
            {`${job.title} • ${job.company}`}
          </p>
          <p
            style={{
              margin: 0,
              opacity: 0.7
            }}
          >
            {`${job.started} - ${job.ended}`}
          </p>
        </div>
      ))}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "20px",
        }}
      >
        {experienceObject.cards.map((card) => (
          <div
            className="feature-card"
            key={card.title}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "12px",
                fontSize: "1.1rem",
                textDecorationLine: "underline"
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                marginTop: 0,
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: "1.5",
                fontSize: "1rem",
              }}
            >
              {card.action}
            </p>
            <p
              style={{
                marginTop: 0,
                color: "rgba(255, 255, 255, 0.68)",
                lineHeight: "1.5",
                fontSize: "0.9rem",
              }}>
              {card.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}