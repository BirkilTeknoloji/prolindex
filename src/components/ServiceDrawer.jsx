import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import prolindexIcon from '../assets/icon-original.png';

const ServiceDrawer = ({ service, isOpen, onClose }) => {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel - Horizontal Split Layout */}
      <aside 
        className={`service-drawer ${isOpen ? 'active' : ''}`}
        aria-label="Service Details"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header Controls */}
        <div className="drawer-header-bar">
          <div className="drawer-brand-pill">
            <img src={prolindexIcon} alt="PROLINDEX" />
            <span>PROLINDEX SOLUTIONS</span>
          </div>

          <div className="drawer-header-actions">
            <span className="drawer-category-pill">
              {service.categoryTag || "Technology Infrastructure"}
            </span>
            <button 
              className="drawer-close-btn" 
              onClick={onClose}
              aria-label="Close details"
              title="Close (Esc)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Drawer Body: Top Half = Panoramic Photo, Bottom Half = Symmetrical Specifications Grid */}
        <div className="drawer-body-split">
          {/* TOP HALF: Panoramic Hero Photo */}
          <div className="drawer-top-media">
            <img src={service.image} alt={service.title} />
            <div className="drawer-media-overlay">
              <div className="drawer-media-badges">
                <span className="drawer-badge">{service.badge}</span>
                <span className="drawer-photo-tag">
                  <i className="fa-solid fa-circle-check" style={{ color: '#22c55e', marginRight: '6px' }}></i>
                  Enterprise Tier-1 Standard
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM HALF: Content Area */}
          <div className="drawer-bottom-content">
            {/* Title Bar */}
            <div className="drawer-title-row">
              <div className="drawer-service-icon">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <div className="drawer-title-info">
                <span className="drawer-sub-label">ENTERPRISE SPECIFICATION</span>
                <h2 className="drawer-title">{service.title}</h2>
              </div>
            </div>

            {/* Symmetrical 2-Column Grid */}
            <div className="drawer-details-grid">
              {/* Left Column: Overview & Guarantee */}
              <div className="drawer-grid-col">
                <div className="drawer-desc-box">
                  <h4>
                    <i className="fa-solid fa-circle-info"></i>
                    Solution Overview
                  </h4>
                  <p>{service.desc}</p>
                </div>

                <div className="drawer-guarantee-card">
                  <div className="guarantee-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h5>Certified Engineering Guarantee</h5>
                    <p>Strict compliance with IEEE, TIA/EIA & EN-54 standards with 24/7 SLA maintenance coverage.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Capabilities & Proposal Action */}
              <div className="drawer-grid-col">
                <div className="drawer-features-box">
                  <h4>
                    <i className="fa-solid fa-list-check"></i>
                    Key Capabilities & Specifications
                  </h4>
                  <ul className="drawer-features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="drawer-cta-action">
                  <Link 
                    to="/contact" 
                    className="btn btn-primary btn-glow drawer-action-btn"
                    onClick={onClose}
                  >
                    <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i>
                    Request Proposal for This Solution
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ServiceDrawer;
