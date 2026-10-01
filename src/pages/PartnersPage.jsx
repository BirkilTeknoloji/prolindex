import React from 'react';
import PageBanner from '../components/PageBanner';
import useFadeUp from '../components/useFadeUp';
import prolindexLogoWhite from '../assets/logo-white.png';
import prolindexIcon from '../assets/icon-original.png';

const PartnersPage = () => {
  const fade1 = useFadeUp();
  const fade2 = useFadeUp(150);
  const fade3 = useFadeUp(250);

  return (
    <>
      <PageBanner 
        title="Our Partners" 
        breadcrumbs={[{ label: 'Partners' }]} 
      />

      <section className="section section-tech-pattern">
        <div className="container">
          <div className="services-header fade-up" ref={fade1}>
            <span className="section-subtitle">OUR TECHNOLOGY NETWORK</span>
            <h2 className="section-title">Solution Partners</h2>
            <p>At Prolindex, we collaborate with industry-leading technology partners to deliver top-tier IT solutions. These partnerships enable us to provide innovative, reliable, and efficient services tailored to your business needs.</p>
          </div>

          <div className="partners-brand-panel fade-up" ref={fade2}>
            <img className="partners-brand-watermark" src={prolindexIcon} alt="" aria-hidden="true" />
            <img className="partners-brand-logo" src={prolindexLogoWhite} alt="PROLINDEX" />
            <div className="partners-brand-copy">
              <span>PARTNERING FOR PROGRESS</span>
              <h3>Expertise connected. Solutions delivered.</h3>
              <p>We work with technology partners to bring reliable, innovative solutions to every business we support across telecom, cloud, and healthcare infrastructure.</p>
            </div>
          </div>
          
          <div className="fade-up" ref={fade3} style={{marginTop: '60px', textAlign: 'center'}}>
            <h3 style={{marginBottom: '20px', fontSize: '28px'}}>Why Partner With Us?</h3>
            <p style={{maxWidth: '800px', margin: '0 auto', fontSize: '17px', color: 'var(--text-light)'}}>
              Partnering with Prolindex means gaining access to a wealth of technological expertise, a global network, and a shared commitment to innovation. We work closely with our partners to co-create solutions that deliver exceptional value.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;
