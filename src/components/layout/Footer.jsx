import { Link } from 'react-router-dom';

function Footer() {
  const navItems = [
    { label: 'Accueil', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Me contacter', link: '/contact' },
    { label: 'Mentions légales', link: '/mentions-legales' },
  ];

  const lastProjects = [];

  return (
    <footer className="bg-gray-800 text-white p-8 flex md:justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">John Doe</h3>
          <address className="text-sm not-italic flex flex-col gap-1">
            <p>
              40 rue Laure Diebold <br />
              69009 Lyon, France
            </p>
            <a href="tel:0123456789">01 23 45 67 89</a>
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
          </address>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl">Liens utiles</h3>
          <ul className="text-sm flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl">Mes dernières réalisations</h3>
          <ul className="text-sm flex flex-col gap-1">
            {lastProjects.length > 0 ? (
              lastProjects.map((project) => (
                <li key={project.id}>
                  <Link to={`/portfolio#${project.slug}`}>{project.name}</Link>
                </li>
              ))
            ) : (
              <li>Aucun projet</li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
