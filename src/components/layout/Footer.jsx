import { Link } from 'react-router-dom';
import githubIcon from '../../assets/icons/github-icon.svg';
import twitterIcon from '../../assets/icons/twitter-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import projectsData from '../../assets/data/projects.json';

function Footer() {
  const navItems = [
    { label: 'Accueil', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Me contacter', link: '/contact' },
    { label: 'Mentions légales', link: '/mentions-legales' },
  ];

  const socialLinks = [
    {
      name: 'Github',
      icon: githubIcon,
      url: 'https://github.com/github-john-doe',
      alt: 'Logo Github',
    },
    {
      name: 'Twitter',
      icon: twitterIcon,
      url: 'https://x.com',
      alt: 'Logo Twitter',
    },
    {
      name: 'Linkedin',
      icon: linkedinIcon,
      url: 'https://linkedin.com',
      alt: 'Logo Linkedin',
    },
  ];

  const lastProjects = projectsData.projects.slice(-6);

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
        {/* Infos */}
        <div
          className="flex flex-col gap-2"
          aria-label="Section contenant mes coordonnées"
        >
          <h3 className="text-xl">John Doe</h3>
          <address className="text-sm not-italic flex flex-col gap-1">
            <p className="leading-relaxed">
              40 rue Laure Diebold <br />
              69009 Lyon, France
            </p>
            <a href="tel:0123456789" className="footer-hover">
              01 23 45 67 89
            </a>
            <a href="mailto:john.doe@gmail.com" className="footer-hover">
              john.doe@gmail.com
            </a>
          </address>

          <ul className="flex gap-2 mt-2">
            {socialLinks.map(({ name, icon, url, alt }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lien vers mon profil ${name}`}
                >
                  <img
                    className="w-6 opacity-50 hover:opacity-100 filter invert"
                    src={icon}
                    alt={alt}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div
          className="flex flex-col gap-2"
          aria-label="Section contenant des liens utiles"
        >
          <h3 className="text-xl">Liens utiles</h3>
          <ul className="text-sm flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link to={item.link} className="footer-hover">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Last projects */}
        <div
          className="flex flex-col gap-2"
          aria-label="Section contenant mes derniers projets"
        >
          <h3 className="text-xl">Mes dernières réalisations</h3>
          <ul className="text-sm flex flex-col gap-1">
            {lastProjects.map((project) => (
              <li key={project.slug}>
                <Link to={`/portfolio`} className="footer-hover">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
