import React from 'react';
import { Link } from 'react-router-dom';
import useFadeUp from '../components/useFadeUp';
import Stats from '../components/Stats';
import prolindexIcon from '../assets/icon-original.png';

const HomePage = () => {
  const heroFade = useFadeUp();
  const aboutImgFade = useFadeUp();
  const aboutTextFade = useFadeUp(150);
  const ctaFade = useFadeUp();
  const servicesFade = useFadeUp();
  const itServiceFade = useFadeUp(100);
  const healthServiceFade = useFadeUp(200);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-texture-overlay" aria-hidden="true">
          <div className="tech-grid-pattern"></div>
          <div className="hero-icon-glow">
            <img src={prolindexIcon} alt="" className="floating-brand-icon" />
          </div>
          <div className="hero-icon-glow-secondary">
            <img src={prolindexIcon} alt="" className="floating-brand-icon-subtle" />
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-wrapper">
            <div className="hero-content fade-up" ref={heroFade}>
              <span className="hero-subtitle">
                <i className="fa-solid fa-sparkles" style={{ marginRight: '8px' }}></i>
                WELCOME TO PROLINDEX!
              </span>
              <h1 className="hero-title">Leading the way in <span className="hero-title-accent">IT Excellence!</span></h1>
              <p className="hero-description">
                Tailored IT & Health technology solutions empowering enterprises across Hong Kong and global markets with unmatched reliability.
              </p>
              <ul className="hero-checklist">
                <li><i className="fa-solid fa-circle-check"></i> Cutting-edge technology for your business</li>
                <li><i className="fa-solid fa-circle-check"></i> Global expertise with localized precision</li>
                <li><i className="fa-solid fa-circle-check"></i> 24/7 proactive monitoring & dedicated support</li>
              </ul>
              <div className="hero-btns">
                <Link to="/it-services" className="btn btn-primary btn-glow">DISCOVER SOLUTIONS</Link>
                <Link to="/about" className="btn btn-outline">Read Our Story</Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card-display">
                <div className="hero-card-glow"></div>
                <div className="hero-card-inner">
                  <div className="hero-badge-top">
                    <img src={prolindexIcon} alt="PROLINDEX" className="hero-badge-icon" />
                    <div>
                      <strong>PROLINDEX LIMITED</strong>
                      <span>Company ID: 81176290</span>
                    </div>
                  </div>
                  <div className="hero-stat-row">
                    <div className="hero-mini-stat">
                      <span className="num">99.9%</span>
                      <span className="lbl">Uptime SLA</span>
                    </div>
                    <div className="hero-mini-stat">
                      <span className="num">500+</span>
                      <span className="lbl">Deployments</span>
                    </div>
                  </div>
                  <div className="hero-features-list">
                    <div className="h-feat"><i className="fa-solid fa-shield-halved"></i> Enterprise Security</div>
                    <div className="h-feat"><i className="fa-solid fa-cloud"></i> Scalable Cloud Infrastructure</div>
                    <div className="h-feat"><i className="fa-solid fa-heart-pulse"></i> Healthcare Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section section-textured">
        <div className="section-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-preview">
            <div className="about-text fade-up" ref={aboutImgFade}>
              <span className="section-subtitle">WE TAKE CARE OF YOUR NEEDS!</span>
              <h2 className="section-title">Your Needs, Our Priority!</h2>
              <p style={{marginBottom: '20px'}}>
                At Prolindex, we specialize in providing top-notch IT services tailored to meet the unique needs of each client. Our team of experienced professionals leverages global expertise to deliver innovative, reliable, and efficient technology solutions.
              </p>
              <p>
                Partner with us for a seamless IT experience, where your goals become our mission. With our innovative approaches and global expertise, we transform challenges into opportunities, ensuring your business thrives in the digital age.
              </p>
              <div style={{marginTop: '30px'}}>
                <Link to="/about" className="btn btn-primary">More About Us</Link>
              </div>
            </div>
            
            <div className="about-features fade-up" ref={aboutTextFade}>
              <div className="feature-cards">
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-gauge-high"></i></div>
                  <h4>Efficient Services</h4>
                  <p>Streamlined processes for maximum output and minimal downtime.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-user-tie"></i></div>
                  <h4>Professional Staff</h4>
                  <p>Highly trained experts dedicated to solving your complex tech challenges.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
                  <h4>Fast Support</h4>
                  <p>Rapid response hotline to keep your mission-critical operations running.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
                  <h4>Expert Maintenance</h4>
                  <p>Proactive care and predictive maintenance to prevent issues before they arise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      <Stats />

      {/* SERVICES */}
      <section className="section section-bg section-tech-pattern">
        <div className="container">
          <div className="services-header fade-up" ref={servicesFade}>
            <span className="section-subtitle">We are here to help</span>
            <h2 className="section-title">Discover Our Services</h2>
            <p>We provide comprehensive solutions across multiple domains, ensuring that all your technical and operational requirements are met with precision and excellence.</p>
          </div>
          
          <div className="services-grid" style={{maxWidth: '900px', margin: '0 auto'}}>
            <Link to="/it-services" className="service-card fade-up" ref={itServiceFade}>
              <div className="service-card-decor" aria-hidden="true">
                <img src={prolindexIcon} alt="" />
              </div>
              <div className="service-icon"><i className="fa-solid fa-network-wired"></i></div>
              <h3>IT Solutions</h3>
              <p>Robust structural cabling, CCTV surveillance, enterprise networking, and cloud services designed to power your business.</p>
              <span className="service-link">Discover IT Services <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
            
            <Link to="/health-services" className="service-card fade-up" ref={healthServiceFade}>
              <div className="service-card-decor" aria-hidden="true">
                <img src={prolindexIcon} alt="" />
              </div>
              <div className="service-icon"><i className="fa-solid fa-laptop-medical"></i></div>
              <h3>Health Solutions</h3>
              <p>Advanced hospital information systems, telemedicine platforms, and medical device integrations tailored for healthcare providers.</p>
              <span className="service-link">Discover Health Services <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </div>
          
          
        </div>
      </section>
    </>
  );
};

export default HomePage;
