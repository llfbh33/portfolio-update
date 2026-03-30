

export default function Section({ title, children, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={title.toLowerCase()}
      style={{
        minHeight: "70vh", // gives breathing room without feeling empty
        padding: "60px 100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",

        background: title === "Hero" ? 
          "radial-gradient(circle at 50% 40%, #48566b 0%, #020617 80%)"
          : isEven
          ? "linear-gradient(180deg, #0f172a, #1e293b)"
          : "linear-gradient(180deg, #1e293b, #334155)",

        color: "white",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {title !== "Hero" && <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>
        {title}
      </h2>}

      <div>{children}</div>

      {/* <div style={{ maxWidth: "900px" }}>

        <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
          Content for {title}
        </p>
      </div> */}
    </section>
  );
}