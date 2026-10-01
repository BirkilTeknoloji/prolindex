import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Stats from '../components/Stats';
import useFadeUp from '../components/useFadeUp';
import prolindexIcon from '../assets/icon-original.png';

const AboutPage = () => {
  const fade1 = useFadeUp();
  const fade2 = useFadeUp(150);

  return (
    <>
      <PageBanner 
        title="About Us" 
        breadcrumbs={[{ label: 'About' }]} 
      />

      <section className="section section-textured">
        <div className="section-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="contact-grid">
            <div className="about-left fade-up" ref={fade1}>
              <span className="section-subtitle">ABOUT PROLINDEX LIMITED</span>
              <h2 className="section-title">Dedicated to delivering exceptional IT & health solutions.</h2>
              <p style={{marginBottom: '20px', fontSize: '18px', color: 'var(--text-dark)', lineHeight: '1.7'}}>
                At Prolindex, we specialize in providing top-notch IT services tailored to meet the unique needs of each client. Our team of experienced professionals leverages global expertise to deliver innovative, reliable, and efficient technology solutions.
              </p>
              <p style={{marginBottom: '30px', lineHeight: '1.7'}}>
                We prioritize customer satisfaction, ensuring seamless integration and support for all our services. By staying at the forefront of technological advancements, we empower businesses to navigate the digital landscape with confidence.
              </p>
              <div className="about-company-badge">
                <i className="fa-solid fa-certificate"></i>
                <div>
                  <strong>Registered Corporation in Hong Kong</strong>
                  <span>Company ID: 81176290 • Unit 2104, 21/F Mongkok Comm Ctr</span>
                </div>
              </div>
              <div style={{marginTop: '30px'}}>
                <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
              </div>
            </div>
            
            <div className="about-right fade-up" ref={fade2}>
              <div className="about-card-modern">
                <div className="about-card-icon"><i className="fa-solid fa-bullseye"></i></div>
                <div className="about-card-body">
                  <h4>Our Mission</h4>
                  <p>Our mission is to empower businesses with cutting-edge technology, enhancing productivity and growth through tailored IT services.</p>
                </div>
              </div>
              <div className="about-card-modern">
                <div className="about-card-icon"><i className="fa-solid fa-eye"></i></div>
                <div className="about-card-body">
                  <h4>Our Vision</h4>
                  <p>We envision a connected, inclusive future where technology simplifies, accelerates, and enriches enterprise operations globally.</p>
                </div>
              </div>
              <div className="about-card-modern">
                <div className="about-card-icon"><i className="fa-solid fa-award"></i></div>
                <div className="about-card-body">
                  <h4>Our Experience</h4>
                  <p>With over 15 years of global experience, we bring unparalleled expertise to every project, ensuring successful outcomes and long-term client satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
    </>
  );
};

export default AboutPage;
