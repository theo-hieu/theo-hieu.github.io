import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project && project.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length,
      );
    }
  };

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <h1 className="title">Project not found</h1>
            <Link className="button is-link" to="/projects">
              Back to Projects
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <Link className="button is-text" to="/projects">
            ← Back to Projects
          </Link>

          <h1 className="title mt-4">{project.title}</h1>

          {project.tags?.length ? (
            <div className="tags">
              {project.tags.map((t) => (
                <span key={t} className="tag is-dark">
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {project.images && project.images.length > 0 ? (
            <div className="box mt-4" style={{ position: "relative" }}>
              <figure className="image is-16by9">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} image ${currentImageIndex + 1}`}
                  style={{ borderRadius: 8, objectFit: "cover" }}
                />
              </figure>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "30px",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      zIndex: 10,
                    }}
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={nextImage}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "30px",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      zIndex: 10,
                    }}
                  >
                    &#8594;
                  </button>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px",
                      marginTop: "16px",
                    }}
                  >
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          border: "none",
                          background:
                            currentImageIndex === i ? "#3273dc" : "#dbdbdb",
                          cursor: "pointer",
                          padding: 0,
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : null}

          <div className="content mt-4" style={{ maxWidth: 820 }}>
            <p>{project.description}</p>

            {project.bullets?.length ? (
              <>
                <h3>Highlights</h3>
                <ul>
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          <div className="buttons mt-4">
            {project.links?.live ? (
              <a
                className="button is-link"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            ) : null}

            {project.links?.github ? (
              <a
                className="button is-light"
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
