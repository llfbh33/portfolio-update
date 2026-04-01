import { skillsObject } from "../data/sectionObjects";
import { currentlyLearning } from "../data/sectionObjects";

export default function Skills() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      width: "100%",
    }}>
      {/* update for screen change */}
      <div className="skills-container">
        {skillsObject.categories.map((category) => (
          <div
            key={category.heading}
            className="skill-card"
          >
            <h3
              style={{
                margin: "0 0 18px 0",
                color: "rgba(255,255,255,0.92)",
                fontSize: "1.3rem",
              }}
            >
              {category.heading}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {category.items.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255, 255, 255, 0.72)",
                    fontSize: "0.95rem",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
         

      </div>
       <div
            className="skill-card"
          >
            <h3
              style={{
                margin: "0 0 18px 0",
                color: "rgba(255,255,255,0.92)",
                fontSize: "1.3rem",
              }}
            >
              {currentlyLearning.heading}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {currentlyLearning.items.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255, 255, 255, 0.72)",
                    fontSize: "0.95rem",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
    </div>
  );
}