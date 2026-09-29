import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!project) return <section className="page-section"><div className="site-container empty-state"><p className="eyebrow">404</p><h1>Project not found</h1><Link className="button-primary" to="/projects">Back to projects</Link></div></section>;

  const imageCount = project.images?.length ?? 0;
  const previousImage = () => setCurrentImageIndex((index) => (index - 1 + imageCount) % imageCount);
  const nextImage = () => setCurrentImageIndex((index) => (index + 1) % imageCount);

  return (
    <section className="page-section project-detail-section">
      <div className="site-container detail-container">
        <Link className="back-link" to="/projects"><i className="fa-solid fa-arrow-left" aria-hidden="true" /> All projects</Link>
        <header className="detail-heading"><p className="eyebrow">Project case study</p><h1>{project.title}</h1>{project.tags?.length ? <div className="tag-list">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div> : null}</header>
        {imageCount ? <section className="gallery" aria-label={`${project.title} gallery`}>
          <img className="gallery-image" src={project.images[currentImageIndex]} alt={`${project.title}, image ${currentImageIndex + 1} of ${imageCount}`} />
          {imageCount > 1 ? <><button className="gallery-control gallery-previous" type="button" onClick={previousImage} aria-label="Show previous image"><i className="fa-solid fa-arrow-left" aria-hidden="true" /></button><button className="gallery-control gallery-next" type="button" onClick={nextImage} aria-label="Show next image"><i className="fa-solid fa-arrow-right" aria-hidden="true" /></button><div className="gallery-dots" role="tablist" aria-label="Choose gallery image">{project.images.map((_, index) => <button key={index} type="button" className={index === currentImageIndex ? "gallery-dot is-active" : "gallery-dot"} onClick={() => setCurrentImageIndex(index)} aria-label={`Show image ${index + 1}`} aria-selected={index === currentImageIndex} role="tab" />)}</div></> : null}
        </section> : null}
        <div className="detail-content"><p className="detail-intro">{project.description}</p>{project.bullets?.length ? <section><h2>Highlights</h2><ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></section> : null}</div>
        <div className="action-row">{project.links?.live ? <a className="button-primary" href={project.links.live} target="_blank" rel="noreferrer">Visit website <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a> : null}{project.links?.github ? <a className="button-secondary" href={project.links.github} target="_blank" rel="noreferrer">View source <i className="fa-brands fa-github" aria-hidden="true" /></a> : null}</div>
      </div>
    </section>
  );
}
