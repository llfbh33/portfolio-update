

export default function Section({ title, children, index }) {
  const isEven = index % 2 === 0;
  const isHero = title === "Hero";
  const isContact = title === "Contact";

  return (
    <section
      className={isHero || isContact ? "hero-styling" : isEven ? "even-styling" : "odd-styling"}
      id={title.toLowerCase()}
    >
      {isHero || isContact ? <div className="hero-bg" /> : null}

      <div className="section-content">
        {!isHero && (
          <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>
            {title}
          </h2>
        )}

        <div>{children}</div>
      </div>
    </section>
  );
}