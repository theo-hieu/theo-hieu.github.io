import { projects } from "../data/projects";
import PigPeek from "../components/PigPeek";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="page-section section-divider" id="projects">
      <div className="site-container projects-container">
        <div className="page-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
          <p>Software, simulations, and hands-on tools designed around real needs.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.slug} className="project-card-wrapper">
              <PigPeek />
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
