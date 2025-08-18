function ProjectCard({ title, description, techno, picture, slug }) {
  return (
    <div>
      <img
        src={`assets/img/${picture}`}
        alt="Image représentant le projet ${title}"
      />

      <div>
        <h2>{title}</h2>
        <p>{description}</p>

        <a href={`/portfolio/${slug}`}>Voir le site</a>
      </div>

      <div>
        <span>{techno}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
