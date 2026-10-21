import React from 'react';
import useFadeUp from './useFadeUp';

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

export default function Partners() {
  const ref = useFadeUp();

  return (
    <section className="partners section" id="partners">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Trusted by leaders</span>
          <h2 className="section-title">Our Partners</h2>
        </div>
        <div className="partners-logos-grid fade-up" ref={ref}>
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
      </div>
    </section>
  );
}
