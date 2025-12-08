import React from "react";

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <div className="container-fluid">
        {/* Brand name */}
        <span className="navbar-brand">Love to Read</span>

        {/* Hamburger toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Left side navigation links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#search-books">
                Search Books
              </a>
            </li>
          </ul>

          {/* Right side Sign In button */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item m-1">
              <a className="btn btn-outline-light" href="#sign-in">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
