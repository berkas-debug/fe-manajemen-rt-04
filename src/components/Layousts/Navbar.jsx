import React from 'react'
import { Link, useParams } from 'react-router-dom';

function Navbar() {
  // const {params} = useParams();
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="logo">
            Manajemen RT 04
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="dropdown">
            <span className="navbar-link">Services ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/services/web" className="navbar-link">Web Development</Link></li>
              <li><Link to="/services/design" className="navbar-link">Design</Link></li>
              <li><Link to="/services/seo" className="navbar-link">SEO</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  
}

export default Navbar;