import React from 'react';
import { Link } from 'react-router-dom';
import prolindexIcon from '../assets/icon-original.png';

const PageBanner = ({ title, breadcrumbs }) => {
  return (
    <section className="page-banner">
      <div className="banner-texture" aria-hidden="true">
        <img src={prolindexIcon} alt="" className="banner-bg-icon" />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="page-title">{title}</h1>
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <span className="crumb-sep">/</span>
              {crumb.path ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span className="current-crumb">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
