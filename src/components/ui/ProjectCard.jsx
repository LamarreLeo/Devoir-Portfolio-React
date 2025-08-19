function ProjectCard({ title, description, techno, picture, slug }) {
  return (
    <div
      id={slug}
      className="rounded-2xl shadow-md overflow-hidden flex flex-col text-center border border-gray-300"
    >
      <img
        src={`assets/img/portfolio/${picture}`}
        alt={`Image représentant le projet "${title}"`}
        className="h-56 object-cover"
      />

      <div className="p-2 flex-1 flex flex-col">
        <h2 className="text-xl">{title}</h2>
        <p className="mb-2">{description}</p>

        <a
          href={`/portfolio#${slug}`}
          className="inline-block bg-blue-500 text-white px-4 py-2 mb-2 rounded-lg hover:bg-blue-600 mt-auto mx-auto"
        >
          Voir le site
        </a>
      </div>

      <div className="bg-gray-200 py-2 border-t border-gray-300">
        <span className="text-sm">{techno}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
