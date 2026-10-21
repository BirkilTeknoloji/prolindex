import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ServiceDrawer from '../components/ServiceDrawer';
import useFadeUp from '../components/useFadeUp';
import prolindexIcon from '../assets/icon-original.png';

const ITServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (service) => {
    setSelectedService(service);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const headerFade = useFadeUp();
  const cat1Fade = useFadeUp(100);
  const cat2Fade = useFadeUp(100);
  const cat3Fade = useFadeUp(100);
  const ctaFade = useFadeUp(100);

  // Category 1: Structured Cabling & Audio Infrastructure
  const cablingServices = [
    {
      title: "Copper Cabling Solutions",
      image: "/services/copper-cabling.png",
      icon: "fa-ethernet",
      badge: "Cat5e / Cat6 / Cat6a / Cat7",
      desc: "Designed and engineered to ensure uninterrupted operation of critical business applications across your network. Delivering professional Cat5, Cat5e, Cat6, Cat6a, and Cat7 physical cabling infrastructure with certified end-to-end testing.",
      features: [
        "Cat5e, Cat6, Cat6a, and Cat7 high-speed structured copper installations",
        "Unified distribution of power, data, voice, and surveillance signals",
        "Boutique manufacturing capabilities for custom-pinned and specialized patch leads",
        "Full Fluke certification, permanent link tests, and detailed documentation"
      ]
    },
    {
      title: "Fiber Optic Cabling Solutions",
      image: "/services/fiber-cabling.jpg",
      icon: "fa-bolt",
      badge: "Single-Mode & Multi-Mode",
      desc: "Turnkey optical fiber infrastructure engineered for long distances, extreme bandwidth, and immunity to electromagnetic interference. Complete with precision core-alignment fusion splicing and OTDR trace testing.",
      features: [
        "Turnkey on-site survey, engineering, route design, and implementation",
        "OM1, OM2, OM3, OM4 multi-mode and OS2 single-mode optical cabling",
        "Precision fusion splicing, termination boxes, and OTDR reflectometry testing",
        "24/7 emergency response, link restoration, and preventative maintenance"
      ]
    },
    {
      title: "Public Address & Emergency Announcement (PA/VA)",
      image: "/services/sound-announcement.jpg",
      icon: "fa-bullhorn",
      badge: "EN-54 Certified Life Safety",
      desc: "Integrated public address and voice alarm evacuation systems engineered to meet international EN-54 safety standards. Designed for high acoustic intelligibility across corporate towers, transit hubs, hospitals, and industrial campuses.",
      features: [
        "Direct automated integration with fire detection and phased evacuation protocols",
        "Multi-zone matrix audio routing with high-fidelity background music distribution",
        "EN-54 certified emergency voice alarm controllers, amplifiers, and monitored speakers",
        "Electro-acoustic modeling tailored for noisy and architecturally complex facilities"
      ]
    }
  ];

  // Category 2: Network & Infrastructure Services
  const networkServices = [
    {
      title: "Network Installation & Setup Services",
      image: "/services/network-setup.jpg",
      icon: "fa-network-wired",
      badge: "Enterprise Routing & Switching",
      desc: "Building resilient multi-tier (L2/L3) corporate network topologies. In partnership with global vendors including Cisco, Allied Telesis, and Ruckus, we engineer redundant core backbones, intelligent traffic switching, and secure wireless overlays.",
      features: [
        "Enterprise-grade core, distribution, and edge switching topologies",
        "Advanced VLAN segmentation, 802.1X network access control, and QoS prioritization",
        "High-availability (HA) architectures with seamless failover and zero single point of failure",
        "Encrypted multi-branch SD-WAN, IPsec VPN tunnels, and perimeter boundary routing"
      ]
    },
    {
      title: "Server & Data Storage Services",
      image: "/services/server-storage.jpg",
      icon: "fa-server",
      badge: "Dell EMC • Lenovo • HPE",
      desc: "Deploying high-compute enterprise rack and blade server architectures to power database operations, ERP workloads, and secure storage arrays. Delivering SAN/NAS fabrics and automated zero-data-loss backup workflows.",
      features: [
        "High-performance compute clusters and enterprise rack/blade configurations",
        "Scalable All-Flash SAN and unified NAS high-IOPS storage architectures",
        "Automated snapshot scheduling, encrypted backup, and off-site cloud replication",
        "Disaster Recovery (DR) frameworks designed for near-zero RTO and RPO benchmarks"
      ]
    },
    {
      title: "Virtualization, Data Center & Cloud Solutions",
      image: "/services/datacenter-virtualization.jpg",
      icon: "fa-cloud",
      badge: "VMware • Hyper-V • DC Design",
      desc: "Deploying VMware and Microsoft Hyper-V virtualization platforms to maximize hardware density, lower power overheads, and streamline operations. Complete with turnkey data center physical planning, precision cooling, and FM200 fire suppression.",
      features: [
        "Server, storage, and software-defined network (SDN) virtualization architectures",
        "High availability (HA), fault tolerance, and live VM migration (vMotion)",
        "Turnkey Tier III / Tier IV compliant data center physical architecture design",
        "Precision environmental climate control and FM200 clean-agent fire suppression"
      ]
    }
  ];

  // Category 3: Specialized Security & Consultancy Domains (Single-Focus)
  const specializedServices = [
    {
      title: "CCTV & Security Surveillance Systems",
      image: "/services/cctv-systems.jpg",
      icon: "fa-video",
      badge: "IP Cameras & Video Analytics",
      categoryTag: "Physical Security",
      desc: "High-definition IP surveillance architectures for corporate complexes and industrial sites. Powered by Axis, Milestone, and Hikvision with AI-driven video analytics for real-time proactive threat detection.",
      features: [
        "Night vision, thermal imaging, and high-speed optical PTZ cameras",
        "AI-powered intrusion detection, motion tracking, and facial recognition",
        "Centralized Video Management Software (VMS) with enterprise NVR storage",
        "Secure remote monitoring, encrypted live streaming, and mobile access"
      ]
    },
    {
      title: "City Surveillance & Traffic Management (KGYS / Mobese)",
      image: "/services/kgys-mobese.jpg",
      icon: "fa-tower-observation",
      badge: "City Monitoring & ANPR / LPR",
      categoryTag: "Smart City Infrastructure",
      desc: "Large-scale Urban Security Management Systems (KGYS / Mobese) for municipal districts. Incorporating automated number plate recognition (ANPR), speed corridor enforcement, and integrated command & control rooms.",
      features: [
        "High-accuracy Automated Number Plate Recognition (ANPR / LPR) systems",
        "High-throughput wireless and fiber optical transmission backbones",
        "Command & control operations centers with modular video wall integrations",
        "24/7 continuous high-density recording compliant with forensic evidence standards"
      ]
    },
    {
      title: "Border & Perimeter Defense Systems",
      image: "/services/border-security.jpg",
      icon: "fa-shield-halved",
      badge: "Integrated Sensors & Defense",
      categoryTag: "Defense & Critical Infrastructure",
      desc: "Advanced integrated sensor systems engineered for international borders, strategic military perimeters, and critical infrastructure. 24/7 automated detection, recognition, classification, and continuous tracking.",
      features: [
        "Long-range thermal cameras, electro-optical sensors, and ground radar integration",
        "24/7 automated target detection, threat recognition, and classification algorithms",
        "Smart perimeter intrusion detection, seismic sensors, and active laser barriers",
        "Unified Command & Control (C2) software delivering unified situational awareness"
      ]
    },
    {
      title: "Training, Maintenance & IT Consultancy",
      image: "/services/consulting-training.jpg",
      icon: "fa-chalkboard-user",
      badge: "24/7 SLA Engineering Support",
      categoryTag: "Consultancy & Support",
      desc: "Strategic hardware and software consultancy to ensure technology investments deliver optimal ROI. Conducting system migration planning, hands-on staff training, and 24/7 SLA maintenance agreements.",
      features: [
        "Holistic IT infrastructure audits, vulnerability scans, and technology roadmaps",
        "Professional project management, staged migration, and formal acceptance testing",
        "Hands-on administrative training and operating manuals for system administrators",
        "Flexible 24/7 SLA maintenance agreements with rapid on-site dispatch support"
      ]
    }
  ];

  return (
    <>
      <PageBanner 
        title="IT & Technology Services" 
        breadcrumbs={[
          { label: 'Services' },
          { label: 'IT Services' }
        ]} 
      />

      {/* INTRO HERO SECTION */}
      <section className="section section-textured">
        <div className="section-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-header fade-up" ref={headerFade}>
            <div className="brand-pill-header">
              <img src={prolindexIcon} alt="" className="brand-pill-icon" />
              <span>PROLINDEX IT INFRASTRUCTURE</span>
            </div>
            <h2 className="section-title">End-to-End Technology & Infrastructure Solutions</h2>
            <p style={{ maxWidth: '840px', margin: '0 auto', fontSize: '18px', lineHeight: '1.75', color: '#334155' }}>
              Click on any solution card below to expand full engineering specifications, architectures, and technical deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY 1: STRUCTURED CABLING SOLUTIONS */}
      <section className="section section-bg category-section cat-cabling-bg">
        <div className="cat-bg-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="category-header-banner fade-up" ref={cat1Fade}>
            <div className="cat-banner-accent">
              <img src={prolindexIcon} alt="" className="cat-brand-mark" />
            </div>
            <div className="cat-banner-content">
              <span className="cat-banner-tag">PHYSICAL INFRASTRUCTURE</span>
              <h2 className="category-title">Structured Cabling Solutions</h2>
              <p className="category-desc">
                The physical bedrock of enterprise communication. Unifying copper, optical fiber, and life-safety voice alarm infrastructure into high-performance, certified transmission backbones.
              </p>
            </div>
          </div>

          <div className="it-services-rich-grid">
            {cablingServices.map((service, index) => (
              <div 
                key={index} 
                className="it-rich-card clickable-card"
                onClick={() => handleOpenDrawer(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleOpenDrawer(service); }}
              >
                <div className="it-rich-img">
                  <img src={service.image} alt={service.title} />
                  <span className="it-rich-badge">{service.badge}</span>
                  <div className="it-rich-img-glow"></div>
                  <div className="card-click-prompt">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>Click for Details</span>
                  </div>
                </div>
                <div className="it-rich-body">
                  <div className="it-rich-header">
                    <div className="it-rich-icon">
                      <i className={`fa-solid ${service.icon}`}></i>
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="it-rich-desc">{service.desc}</p>
                  <ul className="it-rich-features">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-footer-action">
                    <span>View Full Specs</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 2: NETWORK & INFRASTRUCTURE SOLUTIONS */}
      <section className="section category-section cat-network-bg">
        <div className="cat-bg-watermark right-pos" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="category-header-banner fade-up" ref={cat2Fade}>
            <div className="cat-banner-accent">
              <img src={prolindexIcon} alt="" className="cat-brand-mark" />
            </div>
            <div className="cat-banner-content">
              <span className="cat-banner-tag">ENTERPRISE CONNECTIVITY & CLOUD</span>
              <h2 className="category-title">Network & Infrastructure Solutions</h2>
              <p className="category-desc">
                High-availability routing, switching, computational clusters, and cloud-ready data center environments built for zero-downtime enterprise operations.
              </p>
            </div>
          </div>

          <div className="it-services-rich-grid">
            {networkServices.map((service, index) => (
              <div 
                key={index} 
                className="it-rich-card clickable-card"
                onClick={() => handleOpenDrawer(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleOpenDrawer(service); }}
              >
                <div className="it-rich-img">
                  <img src={service.image} alt={service.title} />
                  <span className="it-rich-badge">{service.badge}</span>
                  <div className="it-rich-img-glow"></div>
                  <div className="card-click-prompt">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>Click for Details</span>
                  </div>
                </div>
                <div className="it-rich-body">
                  <div className="it-rich-header">
                    <div className="it-rich-icon">
                      <i className={`fa-solid ${service.icon}`}></i>
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="it-rich-desc">{service.desc}</p>
                  <ul className="it-rich-features">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-footer-action">
                    <span>View Full Specs</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 3: SPECIALIZED SECURITY & CONSULTANCY DOMAINS */}
      <section className="section section-bg category-section cat-security-bg">
        <div className="cat-bg-watermark left-pos" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="category-header-banner fade-up" ref={cat3Fade}>
            <div className="cat-banner-accent">
              <img src={prolindexIcon} alt="" className="cat-brand-mark" />
            </div>
            <div className="cat-banner-content">
              <span className="cat-banner-tag">CRITICAL SECURITY & CONSULTING</span>
              <h2 className="category-title">Specialized Security, Surveillance & Consultancy Solutions</h2>
              <p className="category-desc">
                Dedicated single-focus domains addressing AI video surveillance, metropolitan traffic management, military-grade border defense, and hands-on technical consultancy.
              </p>
            </div>
          </div>

          <div className="it-services-rich-grid">
            {specializedServices.map((service, index) => (
              <div 
                key={index} 
                className="it-rich-card clickable-card"
                onClick={() => handleOpenDrawer(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleOpenDrawer(service); }}
              >
                <div className="it-rich-img">
                  <img src={service.image} alt={service.title} />
                  <span className="it-rich-badge">{service.badge}</span>
                  {service.categoryTag && (
                    <span className="it-rich-category-tag">{service.categoryTag}</span>
                  )}
                  <div className="it-rich-img-glow"></div>
                  <div className="card-click-prompt">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>Click for Details</span>
                  </div>
                </div>
                <div className="it-rich-body">
                  <div className="it-rich-header">
                    <div className="it-rich-icon">
                      <i className={`fa-solid ${service.icon}`}></i>
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="it-rich-desc">{service.desc}</p>
                  <ul className="it-rich-features">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-footer-action">
                    <span>View Full Specs</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-texture" aria-hidden="true">
          <img src={prolindexIcon} alt="" className="cta-bg-icon" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-content fade-up" ref={ctaFade}>
            <div className="cta-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="cta-text">
              <h3>Need an Engineering Assessment for Your Facility?</h3>
              <p style={{ marginTop: '6px', fontSize: '17px', color: 'rgba(255,255,255,0.85)' }}>
                Our infrastructure specialists will evaluate your structured cabling, networking, or security requirements.
              </p>
            </div>
            <div className="cta-action">
              <Link to="/contact" className="btn btn-primary btn-glow">Request Technical Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIDE SLIDE-OVER DRAWER MODAL */}
      <ServiceDrawer 
        service={selectedService}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
};

export default ITServicesPage;
