import { useState } from "react";

function ProjectImageCarousel({ project }) {
  const images = project.images ?? [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageCount = images.length;

  if (!imageCount) {
    return project.previewIcon ? (
      <div className="project-image project-image-placeholder project-image-icon" aria-hidden="true">
        <i className={project.previewIcon} />
      </div>
    ) : (
      <div className="project-image project-image-placeholder" aria-hidden="true">
        <i className="fa-solid fa-code" />
      </div>
    );
  }

  const showPreviousImage = () => {
    setCurrentImageIndex((index) => (index - 1 + imageCount) % imageCount);
  };
  const showNextImage = () => {
    setCurrentImageIndex((index) => (index + 1) % imageCount);
  };

  return (
    <div className="project-image project-image-carousel" aria-label={`${project.title} image gallery`}>
      <img
        key={currentImageIndex}
        className="project-carousel-image"
        src={images[currentImageIndex]}
        alt={`${project.title}, image ${currentImageIndex + 1} of ${imageCount}`}
      />
      {imageCount > 1 ? (
        <>
          <button className="project-carousel-control project-carousel-previous" type="button" onClick={showPreviousImage} aria-label="Show previous image">
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          </button>
          <button className="project-carousel-control project-carousel-next" type="button" onClick={showNextImage} aria-label="Show next image">
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
          <div className="project-carousel-dots" aria-label="Choose gallery image">
            {images.map((_, index) => (
              <button
                key={index}
                className={index === currentImageIndex ? "project-carousel-dot is-active" : "project-carousel-dot"}
                type="button"
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Show image ${index + 1} of ${imageCount}`}
                aria-current={index === currentImageIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectImageCarousel project={project} />
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.short}</p>
        {project.tags?.length ? <div className="tag-list">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div> : null}
        <details className="project-details-inline">
          <summary>View details <i className="fa-solid fa-chevron-down" aria-hidden="true" /></summary>
          <div className="project-expanded-content">
            <p>{project.description}</p>
            {project.bullets?.length ? <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            {project.links?.live ? <a className="text-link" href={project.links.live} target="_blank" rel="noreferrer">Visit website <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a> : null}
            {project.links?.github ? <a className="text-link" href={project.links.github} target="_blank" rel="noreferrer">View source <i className="fa-brands fa-github" aria-hidden="true" /></a> : null}
          </div>
        </details>
      </div>
    </article>
  );
}
