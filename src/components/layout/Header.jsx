import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <header className="bg-gray-800 h-12  text-white uppercase px-8 flex items-center justify-between sticky z-50">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? undefined : undefined)}
        >
          John Doe
        </NavLink>

        <nav>
          <ul className="hidden lg:flex gap-4 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentions-legales"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </nav>

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

      <div
        className={`
          ${isOpen ? 'translate-y-0' : '-translate-y-full'} 
          absolute px-8 top-12 left-0 w-full bg-gray-800 text-white lg:hidden transition-transform duration-300 ease-in-out`}
      >
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Contact
              </NavLink>
            </li>
            <li className="pb-4">
              <NavLink
                to="/mentions-legales"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
