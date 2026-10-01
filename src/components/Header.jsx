import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import prolindexLogo from '../assets/logo-original.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={prolindexLogo} alt="PROLINDEX LIMITED" />
        </Link>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link">Home</NavLink>
          
          <div className="dropdown">
            <span className="nav-link">Corporate <i className="fa-solid fa-chevron-down" style={{fontSize: '11px', marginLeft: '4px'}}></i></span>
            <div className="dropdown-menu">
              <NavLink to="/about" className="dropdown-item">About Us</NavLink>
            </div>
          </div>
          
          <div className="dropdown">
            <span className="nav-link">Services <i className="fa-solid fa-chevron-down" style={{fontSize: '11px', marginLeft: '4px'}}></i></span>
            <div className="dropdown-menu">
              <NavLink to="/it-services" className="dropdown-item">IT Services</NavLink>
              <NavLink to="/health-services" className="dropdown-item">Health Services</NavLink>
            </div>
          </div>

          <NavLink to="/partners" className="nav-link">Partners</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>

          {isMobileMenuOpen && (
            <Link to="/contact" className="btn btn-primary" style={{marginTop: '20px', width: '100%', textAlign: 'center'}}>
              Get In Touch
            </Link>
          )}
        </nav>

        <Link to="/contact" className="btn btn-primary header-btn">
          Get In Touch
        </Link>

        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Navigation">
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
