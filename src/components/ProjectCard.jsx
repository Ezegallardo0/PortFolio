function ProjectCard({ title, description, tech, link, tag, icon }) {
  return (
    <div className="project-card">
      <h3>
        <i className={`bx ${icon}`}></i> {title}
      </h3>

      <p>{description}</p>

      {tech && <p><strong>Tecnologías:</strong> {tech}</p>}

      {link && (
        <a href={link} target="_blank">
          <i className="bx bx-link-external"></i> Ver código
        </a>
      )}

      <span className="tag">{tag}</span>
    </div>
  );
}

export default ProjectCard;