

export default function Section({ title, children, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      className={title === "Hero" ? "hero-styling" : isEven ? "even-styling" : "odd-styling"}
      id={title.toLowerCase()}
    >
      {title !== "Hero" && <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>
        {title}
      </h2>}

      <div>{children}</div>

    </section>
  );
}