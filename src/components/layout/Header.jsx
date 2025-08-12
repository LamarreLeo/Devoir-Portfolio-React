import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 h-16  text-white uppercase px-8 flex items-center justify-between">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        John Doe
      </NavLink>
    </header>
  );
}

export default Header;
