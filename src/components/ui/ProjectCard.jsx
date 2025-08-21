function ProjectCard({ title, description, techno, picture, slug }) {
  return (
    <article
      id={slug}
      className="rounded-2xl overflow-hidden flex flex-col text-center border border-gray-300 
      hover:shadow-md hover:bg-[#efefef] transition duration-300 ease-in-out"
    >
      {/* Image */}
      <img
        src={`assets/img/portfolio/${picture}`}
        alt={`Aperçu du projet "${title}"`}
        className="h-56 object-cover"
      />

      {/* Content */}
      <div className="p-2 flex-1 flex flex-col">
        <h2 className="text-xl">{title}</h2>
        <p className="mb-2">{description}</p>

        <a
          href={`/portfolio#${slug}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 mb-2 rounded-lg hover:bg-blue-500 mt-auto mx-auto"
        >
          Voir le site <span className="sr-only">du projet {title}</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#efefef] py-2 border-t border-gray-300">
        <span className="text-sm">{techno}</span>
      </footer>
    </article>
  );
}

export default ProjectCard;
