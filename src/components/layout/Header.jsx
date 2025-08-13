import { NavLink } from 'react-router-dom';
import { useState } from 'react';

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
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? undefined : undefined)}
        >
          John Doe
        </NavLink>

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
        <button type="button" className="lg:hidden" onClick={toggleMenu}>
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
      <div
        className={`
          ${isOpen ? 'translate-y-0' : '-translate-y-full'} 
          sticky px-8 top-12 left-0 w-full bg-gray-800 text-white lg:hidden transition-transform duration-300 ease-in-out pb-4 z-40`}
      >
        <nav>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.link}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
