import BirdsOnWire from "../components/BirdsOnWire";
import Countryside from "../components/Countryside";
import "../App.css";

export default function Home() {
  return (
    <section className="hero-section" id="home">
      <Countryside />
      <div className="site-container hero-content">
        <div className="hero-introduction">
          <div className="hero-heading-row">
            <h1>Hi! I&apos;m Theo.</h1>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://www.linkedin.com/in/theodore-n" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin" aria-hidden="true" />
              </a>
              <a href="https://github.com/theo-hieu" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
          <p className="hero-copy">
            I&apos;m a master&apos;s student at the University of Minnesota interested in
            the intersection of computer science and healthcare.
          </p>
        </div>
        <BirdsOnWire />
      </div>
    </section>
  );
}
