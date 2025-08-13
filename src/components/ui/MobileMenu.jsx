import { NavLink } from 'react-router-dom';

function MobileMenu({ isOpen, closeMenu, navItems }) {
  return (
    <div
      id="mobile-menu"
      className={`
          ${isOpen ? 'translate-y-0' : '-translate-y-full'} 
          fixed px-8 top-12 left-0 w-full bg-gray-800 text-white lg:hidden transition-transform duration-300 ease-in-out pb-4 z-40`}
    >
      <nav aria-label="Menu principal">
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.link}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? 'active' : 'hover:border-b-2'
                }
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
