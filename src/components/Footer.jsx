import React from 'react';
import { Link } from 'react-router-dom';
import prolindexLogoWhite from '../assets/logo-white.png';
import prolindexIcon from '../assets/icon-original.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-texture" aria-hidden="true">
        <img src={prolindexIcon} alt="" className="footer-bg-icon" />
      </div>
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-widget">
            <Link to="/" className="footer-logo">
              <img src={prolindexLogoWhite} alt="PROLINDEX LIMITED" />
            </Link>
            <p style={{ marginTop: '20px', marginBottom: '20px', color: 'rgba(255,255,255,0.78)' }}>
              Leading the way in IT and Health Service Excellence. Empowering businesses globally with cutting-edge technology, intelligent infrastructure, and tailored solutions.
            </p>
            
            <div className="social-links" style={{ marginTop: '20px' }}>
              <a href="#" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="social-link" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="social-link" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-widget">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-widget">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/it-services">IT Solutions</Link></li>
              <li><Link to="/health-services">Health Solutions</Link></li>
              <li><Link to="/it-services">Structural Cabling</Link></li>
              <li><Link to="/it-services">CCTV Systems</Link></li>
              <li><Link to="/it-services">Network & Server</Link></li>
            </ul>
          </div>

          <div className="footer-widget">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>Unit 2104, 21/F Mongkok Comm Ctr<br/>16 Argyle St Mongkok<br/>Kowloon, Hong Kong</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+971585278323">+971 58 527 8323</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@prolindex.com">info@prolindex.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; {new Date().getFullYear()} PROLINDEX LIMITED (ID: 81176290). All Rights Reserved.</p>
            <p className="footer-hk">Registered in Hong Kong</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
