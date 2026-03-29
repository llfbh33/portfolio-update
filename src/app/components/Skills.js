import { skillsObject } from "../data/sectionObjects";

export default function Skills() {
  return (
    <div>
      {skillsObject.categories.map((category) => (
        <div key={category.heading} style={{ marginBottom: "24px" }}>
          <h3 style={{ marginBottom: "12px" }}>{category.heading}</h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {category.items.map((item) => (
              <span
                key={item}
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}