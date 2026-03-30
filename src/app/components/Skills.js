import { skillsObject } from "../data/sectionObjects";

export default function Skills() {
  return (
    <div style={{
      display: "flex",
      gap: "10px",
      flexDirection: "row",
    }}>

    
    <div style={{
      width: "45%",
    }}>
      {skillsObject.categories.map((category) => (
        <div key={category.heading} style={{ marginBottom: "24px" }}>
          <h3 style={{ marginBottom: "12px" }}>{category.heading}</h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {category.items.map((item) => (
              <span
                key={item}

                className="tag-style"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}

    </div>
          <div
        style={{
          width: "45%",
          height: "100%",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      ></div>
    </div>
  );
}