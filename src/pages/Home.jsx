import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="is-flex is-align-items-center is-flex-wrap-wrap">
              <h1 className="title is-1 mr-5 mb-0">Hi, I'm Theo.</h1>

              <a
                href="https://www.linkedin.com/in/theodore-n"
                target="_blank"
                rel="noreferrer"
                className="icon is-large mr-5"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin fa-3x"></i>
              </a>

              <a
                href="https://github.com/theo-hieu"
                target="_blank"
                rel="noreferrer"
                className="icon is-large"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github fa-3x"></i>
              </a>
            </div>

            <p className="subtitle is-4">
              Welcome to my portfolio. Explore my projects or download my
              resume.
            </p>

            <div className="buttons">
              <Link className="button is-link" to="/projects">
                View Projects
              </Link>

              <Link className="button is-info is-light" to="/experience">
                View Experience
              </Link>

              <a
                className="button is-light"
                href="/Theodore_Nguyen_Resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>

            <div className="content mt-5" style={{ maxWidth: 720 }}>
              <p>
                Hello! I'm a first year master's student at the University of
                Minnesota with an interest in the intersection between computer
                science and healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
