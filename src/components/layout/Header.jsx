import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from '../ui/MobileMenu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Contact', link: '/contact' },
    { label: 'Mentions légales', link: '/mentions-legales' },
  ];

  return (
    <div>
      <header className="bg-gray-800 h-12  text-white uppercase px-8 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          John Doe
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.link}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
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
          className="lg:hidden"
          onClick={toggleMenu}
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
    </div>
  );
}

export default Header;
