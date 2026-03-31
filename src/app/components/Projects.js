import { projectsObject } from "../data/sectionObjects";

export default function Projects() {
  console.log(projectsObject)
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
            <div
              style={{
                marginTop: "40px",
                minHeight: "380px",
                borderRadius: "36px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.03)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                backdropFilter: "blur(4px)",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                  borderRadius: "32px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.02)",
                }}
              > */}

              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  left: "18px",
                  width: "52%",
                  height: "210px",
                  borderRadius: "32px",
                  border: "1px solid rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.03)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  overflow: 'hidden'
                }}
              >
                <img
                  src={card.images.length >= 1 ? `images/${card.images[0]}` : 'images/placeholder.jpg'}
                  alt={'Project Image'}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  right: "18px",
                  bottom: "18px",
                  width: "58%",
                  height: "220px",
                  borderRadius: "32px",
                  border: "1px solid rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.03)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  overflow: "hidden",
                }}
              >
                <img
                  src={card.images.length >= 2 ? `images/${card.images[1]}` : 'images/placeholder.jpg'}
                  alt={'Project Image'}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}