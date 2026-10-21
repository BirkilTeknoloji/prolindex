import React from 'react';
import { Link } from 'react-router-dom';
import useFadeUp from '../components/useFadeUp';
import Stats from '../components/Stats';
import prolindexIcon from '../assets/icon-original.png';

const HomePage = () => {
  const heroFade = useFadeUp();
  const aboutImgFade = useFadeUp();
  const aboutTextFade = useFadeUp(150);
  const servicesFade = useFadeUp();
  const itServiceFade = useFadeUp(100);
  const cosmeticsFade = useFadeUp(200);
  const coffeeFade = useFadeUp(300);

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
              <h1 className="hero-title">Leading the way in <span className="hero-title-accent">Global Excellence!</span></h1>
              <p className="hero-description">
                Tailored solutions across Enterprise IT Infrastructure, Cosmetics Trade, and Global Coffee Supply. Empowering businesses worldwide with speed, reliability, and precision.
              </p>
              <ul className="hero-checklist">
                <li><i className="fa-solid fa-circle-check"></i> High-performance IT & surveillance infrastructure</li>
                <li><i className="fa-solid fa-circle-check"></i> International cosmetics sourcing & private label</li>
                <li><i className="fa-solid fa-circle-check"></i> Direct origin green coffee trading & logistics</li>
              </ul>
              <div className="hero-btns">
                <Link to="/it-services" className="btn btn-primary btn-glow">DISCOVER SERVICES</Link>
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
                      <span className="num">15+</span>
                      <span className="lbl">Years Exp.</span>
                    </div>
                    <div className="hero-mini-stat">
                      <span className="num">500+</span>
                      <span className="lbl">Projects</span>
                    </div>
                  </div>
                  <div className="hero-features-list">
                    <div className="h-feat"><i className="fa-solid fa-network-wired"></i> IT Infrastructure & Cabling</div>
                    <div className="h-feat"><i className="fa-solid fa-spa"></i> Premium Cosmetics Sourcing</div>
                    <div className="h-feat"><i className="fa-solid fa-mug-hot"></i> Specialty Coffee Trading</div>
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
                At Prolindex, we are dedicated to understanding and prioritizing your unique business requirements. Our team delivers tailored IT engineering, cosmetics trading, and global commodity brokerage with responsive service and unwavering support.
              </p>
              <p>
                Partner with us for a seamless operational experience where your strategic goals become our mission. With innovative approaches and international reach, we transform challenges into lasting commercial opportunities.
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
                  <p>Highly trained experts dedicated to solving your complex challenges.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
                  <h4>Fast Support</h4>
                  <p>Rapid response hotline to keep your mission-critical operations running.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
                  <h4>Expert Maintenance</h4>
                  <p>Proactive care and predictive maintenance to ensure uninterrupted performance.</p>
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
            <span className="section-subtitle">WHAT WE DO</span>
            <h2 className="section-title">Discover Our Services</h2>
            <p>We provide comprehensive solutions across multiple business sectors, ensuring that all your technical, trading, and supply chain requirements are met with excellence.</p>
          </div>
          
          <div className="services-grid services-grid-3">
            <Link to="/it-services" className="service-card fade-up" ref={itServiceFade}>
              <div className="service-card-decor" aria-hidden="true">
                <img src={prolindexIcon} alt="" />
              </div>
              <div className="service-img-preview">
                <img src="/services/network-setup.jpg" alt="IT Services" />
              </div>
              <div className="service-icon"><i className="fa-solid fa-network-wired"></i></div>
              <h3>IT Services</h3>
              <p>Turnkey structural cabling, fiber optics, CCTV systems, server infrastructure, and border security solutions.</p>
              <span className="service-link">Explore IT Services <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
            
            <Link to="/cosmetics" className="service-card fade-up" ref={cosmeticsFade}>
              <div className="service-card-decor" aria-hidden="true">
                <img src={prolindexIcon} alt="" />
              </div>
              <div className="service-img-preview">
                <img src="/cosmetics/unbranded-cosmetics.jpg" alt="Cosmetics" />
              </div>
              <div className="service-icon"><i className="fa-solid fa-flask-vial"></i></div>
              <h3>Cosmetics</h3>
              <p>Global cosmetics sourcing, private label manufacturing partnerships, and regulatory compliance for beauty brands.</p>
              <span className="service-link">Explore Cosmetics <i className="fa-solid fa-arrow-right"></i></span>
            </Link>

            <Link to="/coffee-trading" className="service-card fade-up" ref={coffeeFade}>
              <div className="service-card-decor" aria-hidden="true">
                <img src={prolindexIcon} alt="" />
              </div>
              <div className="service-img-preview">
                <img src="/coffee/commercial-trading.jpg" alt="Coffee Trading" />
              </div>
              <div className="service-icon"><i className="fa-solid fa-leaf"></i></div>
              <h3>Coffee Trading</h3>
              <p>Direct green coffee bean procurement from origin, international bulk brokerage, and quality-controlled logistics.</p>
              <span className="service-link">Explore Coffee Trading <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </div>
          
          <div className="services-bottom" style={{ marginTop: '48px' }}>
            <p>Do you need more information about our business divisions? <a href="mailto:info@prolindex.com">Drop a line at info@prolindex.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
