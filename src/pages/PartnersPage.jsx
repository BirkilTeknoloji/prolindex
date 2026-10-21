import React from 'react';
import PageBanner from '../components/PageBanner';
import useFadeUp from '../components/useFadeUp';
import prolindexLogoWhite from '../assets/logo-white.png';
import prolindexIcon from '../assets/icon-original.png';

const partners = [
  { name: 'Allied Telesis', logo: 'allied-telesis.png' },
  { name: 'Arista Networks', logo: 'arista-networks.png' },
  { name: 'Axis Communications', logo: 'axis-communications.png' },
  { name: 'AxxonSoft', logo: 'axxon.png' },
  { name: 'Cisco', logo: 'cisco.png' },
  { name: 'CommScope', logo: 'commscope.png' },
  { name: 'Dahua Technology', logo: 'dahua.png' },
  { name: 'Dell Technologies', logo: 'dell-technologies.png' },
  { name: 'Fortinet', logo: 'fortinet.png' },
  { name: 'Hanwha Vision', logo: 'hanwha-vision.png' },
  { name: 'Hikvision', logo: 'hikvision.png' },
  { name: 'HP', logo: 'hp.png' },
  { name: 'IBM', logo: 'ibm.png' },
  { name: 'Lenovo', logo: 'lenovo.png' },
  { name: 'Maipu', logo: 'maipu.png' },
  { name: 'Microsoft', logo: 'microsoft.png' },
  { name: 'Milestone Systems', logo: 'milestone.png' },
  { name: 'Network Optix', logo: 'network-optix.png' },
  { name: 'Oracle', logo: 'oracle.png' },
  { name: 'Palo Alto Networks', logo: 'palo-alto-networks.png' },
  { name: 'Panasonic', logo: 'panasonic.png' },
  { name: 'RubiSec', logo: 'rubi.png' },
  { name: 'Ruckus Networks', logo: 'ruckus.png' },
  { name: 'Seagate', logo: 'seagate.png' },
  { name: 'Trend Micro', logo: 'trend-micro.png' },
  { name: 'Veeam', logo: 'veeam.png' },
  { name: 'Vigilate', logo: 'vigilate.png' },
  { name: 'VMware', logo: 'vmware.png' },
  { name: 'Zenitel', logo: 'zenitel.png' },
];

const PartnersPage = () => {
  const fade1 = useFadeUp();
  const fade2 = useFadeUp(150);
  const fadeGrid = useFadeUp(200);
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
              <p>We work with technology partners to bring reliable, innovative solutions to every business we support across telecom, cloud, and enterprise infrastructure.</p>
            </div>
          </div>

          {/* Partner Logos Grid */}
          <div className="partners-logos-grid fade-up" ref={fadeGrid}>
            {partners.map((partner) => (
              <div className="partner-logo-item" key={partner.name} title={partner.name}>
                <img
                  src={`/partners/${partner.logo}`}
                  alt={partner.name}
                  className="partner-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
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
