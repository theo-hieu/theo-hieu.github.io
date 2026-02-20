import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <h1 className="title">Projects</h1>
          <p className="subtitle">Click a project to view details.</p>

          <div className="columns is-multiline">
            {projects.map((p) => (
              <div key={p.slug} className="column is-4">
                <Link to={`/projects/${p.slug}`} style={{ display: "block" }}>
                  <div className="card is-clickable">
                    {p.images && p.images.length > 0 ? (
                      <div className="card-image">
                        <figure className="image is-16by9">
                          <img
                            src={p.images[0]}
                            alt={p.title}
                            style={{
                              objectFit: "cover",
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </figure>
                      </div>
                    ) : null}

                    <div className="card-content">
                      <p className="title is-5">{p.title}</p>
                      <p className="content">{p.short}</p>

                      {p.tags?.length ? (
                        <div className="tags">
                          {p.tags.map((t) => (
                            <span key={t} className="tag is-dark">
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <p className="has-text-link mt-2">View details →</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <Link className="button is-text" to="/">
              ← Back Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
