import { projectsObject } from "../data/sectionObjects";
import { IoMdEye } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Projects() {
  let [hoveredImage, setHoveredImage] = useState(new Array(projectsObject.cards.length - 1).fill('two'));

  const handleImageZIndex = (image, index) => {
    const updateImage = [...hoveredImage];
    updateImage[index] = image;
    setHoveredImage(updateImage);
  }

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
        {projectsObject.cards.map((card, index) => (
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
              <div
                className={hoveredImage[index] === 'one' ? "project-image-one image-focus" : "project-image-one"}
                onMouseEnter={() => hoveredImage[index] !== 'one' ? handleImageZIndex('one', index) : ""}
              >
                <img
                  src={card.images.length >= 1 ? `images/${card.images[0]}` : 'images/placeholder.jpg'}
                  alt={'Project Image'}
                  className="project-image-file"
                />
              </div>

              <div
                className={hoveredImage[index] === 'two' ? "project-image-two image-focus" : "project-image-two"}
                onMouseEnter={() => hoveredImage[index] !== 'two' ? handleImageZIndex('two', index) : ""}
              >
                <img
                  src={card.images.length >= 2 ? `images/${card.images[1]}` : 'images/placeholder.jpg'}
                  alt={`Project ${card.title} Image`}
                  className="project-image-file"
                />
              </div>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "26px",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <p
                  className={card.error || card.url === null ? "button-deactivated" : "button-style"}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (card.error || card.url === null) return;
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
              <div style={{
                flex: 1,
                display: "flex",
                gap: "6px",
              }}>
                <p style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}>Tools: </p>
                <p style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}>{card.tools}</p>
              </div>

            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}