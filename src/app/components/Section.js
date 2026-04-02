

export default function Section({ title, children, index }) {
  const isEven = index % 2 === 0;
  const isHero = title === "Home";
  const isContact = title === "Contact";

  return (
    <section
      className={isHero || isContact ? "hero-styling" : isEven ? "even-styling" : "odd-styling"}
      id={title.toLowerCase()}
    >
      {isHero || isContact ? <div className="hero-bg" /> : null}

      {/* Tribute to author of stock images */}


      <div className="section-content">
        {!isHero && (
          <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>
            {title}
          </h2>
        )}

        <div>{children}</div>
      </div>
            {isHero && <div className="attributions">
        <a
          style={{
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "0.7rem",
            
          }}
          href="https://www.vecteezy.com/free-photos/blue-particles"
          target="_blank"
          rel="noopener, noreferrer"
          >
            Blue Particles Stock photos by Vecteezy
          </a>
      </div>}
    </section>
  );
}