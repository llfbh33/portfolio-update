import { projectsObject } from "../data/sectionObjects";
import { IoMdEye } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

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

      <div className="project-grid">
        {projectsObject.cards.map((card) => (
          <div
            className="feature-no-hover"
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
              className="project-images-container"
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
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <p
                className={card.error || card.url === null ? "button-deactivated" : "button-style"}
                onClick={(e) => {
                  e.stopPropagation();
                  if (card.error) return;
                  window.open(
                    `${card.url}`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }}
              >
                <IoMdEye style={{ fontSize: "1.2rem" }} />
              </p>
              <p
                className="button-style"
                onClick={() => 
                    window.open(
                      `${card.gitUrl}`,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
              >
                <FaGithub style={{ fontSize: "1.2rem" }} />
              </p>
              {card.error &&
                <p style={{
                  width: "100%",
                  textAlign: "right",
                }}>
                  {card.error}
                </p>
              }
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}