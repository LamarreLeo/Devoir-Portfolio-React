import ProjectCard from '../components/ui/ProjectCard';
import projectsData from '../assets/data/projects.json';

function Portfolio() {
  return (
    <main className="mt-12">
      {/* Projects List */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
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
