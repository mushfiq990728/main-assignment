import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const activeClass = "text-primary font-semibold";

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src="/logo192.png" alt="logo" className="w-8 h-8 mr-2 inline" />
          MyApps
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? activeClass : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={({isActive}) => isActive ? activeClass : ""}>Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={({isActive}) => isActive ? activeClass : ""}>Installation</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Contribution (Figma)
        </a>
      </div>
    </div>
  );
};

export default Navbar;
