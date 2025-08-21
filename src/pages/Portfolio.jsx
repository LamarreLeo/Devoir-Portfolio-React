import ProjectCard from '../components/ui/ProjectCard';
import projectsData from '../assets/data/projects.json';

function Portfolio() {
  return (
    <main className="mt-12">
      <img src="/assets/img/banner.jpg" alt="" loading="lazy" />

      {/* Projects Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl">Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations.</p>
          <div className="h-1 bg-blue-600 mx-auto w-32 lg:w-112 mt-6 mb-16"></div>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
