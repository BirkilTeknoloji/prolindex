import React from 'react';
import PageBanner from '../components/PageBanner';
import useFadeUp from '../components/useFadeUp';
import prolindexIcon from '../assets/icon-original.png';

const ITServicesPage = () => {
  const headerFade = useFadeUp();
  const gridFade = useFadeUp(150);

  const services = [
    {
      icon: "fa-network-wired",
      title: "Structural Cabling Solutions",
      desc: "Reliable, organized copper and fiber network infrastructure for high-speed, seamless enterprise communication."
    },
    {
      icon: "fa-video",
      title: "CCTV Camera Solutions",
      desc: "Advanced IP surveillance and AI-powered video analytics providing round-the-clock comprehensive security."
    },
    {
      icon: "fa-server",
      title: "Network & Server Solutions",
      desc: "Robust, high-availability data center and rack server architectures optimized for latency and scalability."
    },
    {
      icon: "fa-phone-volume",
      title: "IP Telephone Solutions",
      desc: "Modern VoIP and unified PBX communication systems engineered for smooth multi-branch business operations."
    },
    {
      icon: "fa-door-closed",
      title: "Access Control Solutions",
      desc: "Biometric and smart-card secure entry systems with real-time audit trails to safeguard your commercial premises."
    },
    {
      icon: "fa-cloud",
      title: "Cloud & Virtualization Solutions",
      desc: "Scalable hybrid cloud migrations, disaster recovery architectures, and virtual private compute environments."
    }
  ];

  return (
    <>
      <PageBanner 
        title="IT Services" 
        breadcrumbs={[
          { label: 'Services' },
          { label: 'IT Services' }
        ]} 
      />

      <section className="section section-bg section-tech-pattern">
        <div className="section-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-header fade-up" ref={headerFade}>
            <span className="section-subtitle">OUR CORE EXPERTISE</span>
            <h2 className="section-title">Comprehensive IT Solutions</h2>
            <p>We provide a wide array of specialized IT services designed to modernize your infrastructure, secure your premises, and optimize your business operations.</p>
          </div>

          <div className="services-grid services-grid-3 fade-up" ref={gridFade}>
            {services.map((item, index) => (
              <div key={index} className="service-card">
                <div className="service-card-decor" aria-hidden="true">
                  <img src={prolindexIcon} alt="" />
                </div>
                <div className="service-icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ITServicesPage;
