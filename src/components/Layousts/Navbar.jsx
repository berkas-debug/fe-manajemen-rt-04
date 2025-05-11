import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  // const {params} = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { login } = useSelector(state => state.auth);
  const success = login?.success;
  useEffect(() => {
    setIsLoggedIn(success === true);
  }, [success]);
  return (
    <div>
      <nav className="navbar">
        {isLoggedIn ? (
          <>
            <div className="navbar-logo">
              <Link to="/" className="logo">
                Manajemen RT 04
              </Link>
            </div>

            <ul className="navbar-links">
            <li>
                <Link to="/dashboard" className="navbar-link">Home</Link>
              </li>
              {/* <li>
                <Link to="/dashboard" className="navbar-link">Home</Link>
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
              </li> */}
            </ul>
            <ul className="navbar-links-onmini">
            <li>
                <Link to="/dashboard" className="navbar-link">Home</Link>
              </li>
              {/* <li className="dropdown">
                <span className="navbar-link">Menu ▾</span>
                <ul className="dropdown-menu">
                  <li><Link to="/services/web" className="navbar-link">Web Development</Link></li>
                  <li><Link to="/services/design" className="navbar-link">Design</Link></li>
                  <li><Link to="/services/seo" className="navbar-link">SEO</Link></li>
                </ul>
              </li> */}
            </ul>
          </>
        ) : (
          <>
            <div className="navbar-logo">
              <Link to="/" className="logo">
                Manajemen RT 04
              </Link>
            </div>
            <ul className="navbar-links">
              {/* <li>
                <Link to="/wargabaru" className="navbar-link">Warga Baru</Link>
              </li> */}
            </ul>
          </>
        )}
      </nav>
    </div>
  );

}

export default Navbar;