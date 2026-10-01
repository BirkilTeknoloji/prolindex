import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import useFadeUp from '../components/useFadeUp';
import prolindexIcon from '../assets/icon-original.png';

const HealthServicesPage = () => {
  const headerFade = useFadeUp();
  const gridFade = useFadeUp(150);

  const services = [
    {
      icon: "fa-hospital",
      title: "Hospital Information Systems (HIS)",
      desc: "Comprehensive digital architectures unifying inpatient management, pharmacy dispensing, billing, and clinical workflows."
    },
    {
      icon: "fa-user-doctor",
      title: "Telemedicine & Remote Care Platforms",
      desc: "Secure, encrypted telehealth communication systems connecting clinicians and patients with real-time video consults and telemetry."
    },
    {
      icon: "fa-notes-medical",
      title: "Health Data Management & EHR",
      desc: "HIPAA-compliant, highly secure medical archiving and interoperable electronic health record sharing systems."
    },
    {
      icon: "fa-stethoscope",
      title: "Medical Device Integration",
      desc: "Seamless bridging of laboratory analysers, patient monitors, and diagnostic imaging equipment directly into centralized hospital networks."
    }
  ];

  return (
    <>
      <PageBanner 
        title="Health Services" 
        breadcrumbs={[
          { label: 'Services' },
          { label: 'Health Services' }
        ]} 
      />

      <section className="section section-bg section-tech-pattern">
        <div className="section-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-header fade-up" ref={headerFade}>
            <span className="section-subtitle">HEALTHCARE TECHNOLOGY</span>
            <h2 className="section-title">Empowering Modern Healthcare</h2>
            <p>Our specialized health IT solutions bridge the gap between technology and patient care, ensuring secure, efficient, and interconnected medical environments.</p>
          </div>

          <div className="services-grid fade-up" ref={gridFade}>
            {services.map((srv, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-card-decor" aria-hidden="true">
                  <img src={prolindexIcon} alt="" />
                </div>
                <div className="service-icon"><i className={`fa-solid ${srv.icon}`}></i></div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA BANNER */}
      <section className="cta-banner" style={{background: 'var(--secondary)'}}>
        <div className="cta-texture" aria-hidden="true">
          <img src={prolindexIcon} alt="" className="cta-bg-icon" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-content">
            <div className="cta-icon">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div className="cta-text">
              <h3>Ready to upgrade your health technology infrastructure?</h3>
              <p style={{marginTop: '6px', fontSize: '18px', color: 'rgba(255,255,255,0.85)'}}>
                Get in touch with our healthcare IT integration specialists for customized consultations.
              </p>
            </div>
            <div className="cta-action">
              <Link to="/contact" className="btn btn-primary btn-glow">Consult Specialists</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthServicesPage;
