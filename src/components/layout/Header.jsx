import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from '../ui/MobileMenu';
import { useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Contact', link: '/contact' },
    { label: 'Mentions légales', link: '/mentions-legales' },
  ];

  return (
    <div>
      <header className="bg-gray-800 h-12 text-white uppercase px-8 flex items-center justify-between fixed w-screen top-0 z-45">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          John Doe
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Menu principal">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.link}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'hover:border-b-2'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Burger Button */}
        <button
          type="button"
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <title>{isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} navItems={navItems} />

      {/* Main Content Push */}
      <div
        className={`${
          isOpen ? 'h-50' : 'h-0'
        } lg:hidden transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
}

export default Header;
