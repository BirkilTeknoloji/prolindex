import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ServiceDrawer from '../components/ServiceDrawer';
import useFadeUp from '../components/useFadeUp';
import prolindexIcon from '../assets/icon-original.png';

const CoffeeTradingPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (service, categoryName) => {
    setSelectedService({
      ...service,
      categoryTag: service.categoryTag || categoryName
    });
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const headerFade = useFadeUp();
  const cat1Fade = useFadeUp(100);
  const cat2Fade = useFadeUp(100);
  const cat3Fade = useFadeUp(100);
  const workflowFade = useFadeUp(100);
  const ctaFade = useFadeUp(100);

  // Category 1: Green Coffee Bean Sourcing by Origin
  const originServices = [
    {
      title: "East African High-Altitude Origins",
      image: "/coffee/ethiopia-origin.jpg",
      icon: "fa-mountain-sun",
      badge: "SCA 86–89 Specialty",
      categoryTag: "Single Origin Procurement",
      desc: "Heirloom & SL varietals from Yirgacheffe, Sidama, and Nyeri. Celebrated for jasmine floral, bergamot, and vibrant stone-fruit acidity.",
      features: [
        "Grade 1 and Grade 2 washed and natural processed high-altitude microlots (1,800m–2,200m)",
        "Distinctive floral, black tea, candied citrus, and wild berry sensory flavor architecture",
        "Full traceability back to individual cooperative washing stations and smallholder mills",
        "Screen sizes 15-18 with rigorous optical sorting and defect counts under 5 per 300g"
      ]
    },
    {
      title: "Latin American Estate Arabicas",
      image: "/coffee/latin-america-estates.jpg",
      icon: "fa-tree",
      badge: "Commercial & Specialty Estates",
      categoryTag: "Single Origin Procurement",
      desc: "Balanced Arabica estate lots from Huila, Antigua, and Cerrado. Delivering caramel sweetness, roasted almond, and smooth chocolate body.",
      features: [
        "Castillo, Caturra, and Yellow Bourbon varietals cultivated at volcanic altitudes",
        "Brazil Santos NY2/Screen 17/18, Colombia Supremo 17/18, and Guatemala SHB EP",
        "Superb batch consistency ideal for standalone single-origin espresso or base blends",
        "Rainforest Alliance and Fair Trade certified estate partnerships with soil stewardship"
      ]
    },
    {
      title: "Asia-Pacific & Volcanic Terroirs",
      image: "/coffee/asia-pacific-origin.jpg",
      icon: "fa-volcano",
      badge: "Wet-Hulled & Fine Robusta",
      categoryTag: "Single Origin Procurement",
      desc: "Wet-hulled Sumatra Mandheling TP, PNG Sigri estate Typica, and fine screen-18 washed Robusta for crema-dense espresso.",
      features: [
        "Sumatra Mandheling Grade 1 TP (Triple Picked) with deep cedar, spice, and herbal body",
        "Papua New Guinea Western Highlands Arona and Sigri estate Typica lots",
        "Fine washed Robusta Screen 18 with high caffeine density and zero harsh bitterness",
        "Exceptional heavy body, syrupy mouthfeel, and low-acidity flavor profile"
      ]
    }
  ];

  // Category 2: Commercial Bulk Trade & Risk Management
  const tradeServices = [
    {
      title: "Commercial Bulk Shipments (FCL / LCL)",
      image: "/coffee/commercial-trading.jpg",
      icon: "fa-boxes-stacked",
      badge: "Full Container Loads (FCL)",
      categoryTag: "Bulk Commodity Trade",
      desc: "Standardized 20ft container loads (300–320 bags) and consolidated LCL freight for commercial roasters and private brands.",
      features: [
        "Turnkey supply agreements for 20ft and 40ft ocean container volumes worldwide",
        "Uniform green coffee grading adhering strictly to Green Coffee Association (GCA) standards",
        "Flexible payment instruments including Letters of Credit (LC) and CAD arrangements",
        "Consolidated LCL shipments for growing boutique roasteries scaling their inventories"
      ]
    },
    {
      title: "Spot Market & ICE Forward Hedging",
      image: "/coffee/specialty-microlots.jpg",
      icon: "fa-chart-line",
      badge: "Price Risk Mitigation",
      categoryTag: "Trade Finance & Risk",
      desc: "Commodity price risk management, differential-based forward contracts, and immediate spot warehouse inventory access.",
      features: [
        "Differential contracts benchmarked against New York Arabica and London Robusta markets",
        "Forward hedging mechanisms protecting roasters against unexpected crop price surges",
        "Immediate spot warehouse releases from bonded inventory centers in Hong Kong and regional ports",
        "Dedicated trade desk providing transparent origin crop forecasts and market intelligence"
      ]
    },
    {
      title: "Custom Blending & Roastery Consultation",
      image: "/coffee/green-coffee-beans.jpg",
      icon: "fa-mortar-pestle",
      badge: "Bespoke Blend Formulation",
      categoryTag: "Consulting & Blending",
      desc: "Signature green bean blend engineering, roast profile development, COGS optimization, and seasonal cup consistency.",
      features: [
        "Bespoke espresso foundation blends combining heavy-crema bodies with vibrant top notes",
        "Seasonal rotation matrices maintaining cup uniformity throughout micro-harvest shifts",
        "Sample roasting evaluation, solubility benchmarking, and sensory optimization advice",
        "Private label green bean procurement programs tailored to regional consumer palates"
      ]
    }
  ];

  // Category 3: Quality Control, Cupping Lab & Cold-Chain Logistics
  const qualityServices = [
    {
      title: "Q-Grader Cupping & Moisture Lab QA",
      image: "/coffee/cupping-sensory-lab.jpg",
      icon: "fa-certificate",
      badge: "Licensed Q-Grader Lab",
      categoryTag: "Quality Assurance",
      desc: "Strict blind sensory cupping by licensed Q-Graders, digital moisture analyzer verification (10.0%–11.5%), and water activity testing.",
      features: [
        "Blind cupping evaluating aroma, flavor, aftertaste, acidity, body, and overall balance",
        "Digital moisture analyzer verification ensuring strict 10.0%–11.5% export range",
        "Water activity (aw) measurements below 0.60 to prevent mold and enzymatic degradation",
        "Comprehensive digital Certificate of Analysis (CoA) with cupping spider graphs provided"
      ]
    },
    {
      title: "Hermetic Packaging & GrainPro Protection",
      image: "/coffee/warehousing-grainpro.jpg",
      icon: "fa-shield-halved",
      badge: "GrainPro Sealed",
      categoryTag: "Quality Preservation",
      desc: "High-barrier multi-layer hermetic liners preserving freshness, volatile aromatics, and cupping scores for up to 18 months.",
      features: [
        "Multi-layer co-extruded hermetic gas and moisture-barrier interior liners",
        "Prevents green bean aging, faded colors, and the loss of delicate volatile aromatics",
        "100% pesticide-free, organic-approved natural pest control during maritime transit",
        "Preserves farm-fresh cupping scores for up to 18 months in standard warehousing"
      ]
    },
    {
      title: "Maritime Freight & Port Clearance",
      image: "/coffee/container-logistics.jpg",
      icon: "fa-ship",
      badge: "Ocean Freight Logistics",
      categoryTag: "Supply Chain Logistics",
      desc: "Ventilated container shipping routes from origin ports directly to client roasteries with phytosanitary and customs clearance.",
      features: [
        "Ventilated container bookings minimizing condensation (sweat) risk on maritime routes",
        "Complete export/import documentation including Phytosanitary Certificates and Bills of Lading",
        "Strategic transshipment and bonded warehousing through the Port of Hong Kong",
        "Door-to-door multimodal freight coordination directly to your roastery loading dock"
      ]
    }
  ];

  return (
    <>
      <PageBanner 
        title="Coffee Trading & Supply Chain" 
        breadcrumbs={[
          { label: 'Services', path: '/it-services' },
          { label: 'Coffee Trading' }
        ]} 
      />

      {/* INTRO HERO SECTION */}
      <section className="section section-textured" style={{ paddingBottom: '35px' }}>
        <div className="section-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-header fade-up" ref={headerFade}>
            <span className="section-subtitle" style={{ color: '#b45309' }}>COMMODITY TRADING & SPECIALTY ORIGINS</span>
            <h2 className="section-title">Global Green Coffee Bean Trading & Origin Sourcing</h2>
            <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '17px', lineHeight: '1.75', color: '#475569' }}>
              PROLINDEX LIMITED connects high-altitude coffee-producing estates across Africa, Latin America, and Southeast Asia with commercial roasters, distributors, and specialty brands worldwide. Leveraging Hong Kong's financial and trade infrastructure, we manage end-to-end container logistics, Q-Grader quality verification, and risk-hedged commodity procurement.
            </p>

            {/* Quick Metrics Bar */}
            <div className="it-metrics-bar">
              <div className="it-metric-pill">
                <i className="fa-solid fa-mug-hot" style={{ color: '#d97706' }}></i>
                <div>
                  <strong>SCA 84+ Certified</strong>
                  <span>Specialty Cupping Grade</span>
                </div>
              </div>
              <div className="it-metric-pill">
                <i className="fa-solid fa-globe" style={{ color: '#2563eb' }}></i>
                <div>
                  <strong>12+ Origin Terroirs</strong>
                  <span>Direct Farm Partnerships</span>
                </div>
              </div>
              <div className="it-metric-pill">
                <i className="fa-solid fa-shield-halved" style={{ color: '#16a34a' }}></i>
                <div>
                  <strong>Hermetic Sealed</strong>
                  <span>GrainPro Aroma Protection</span>
                </div>
              </div>
              <div className="it-metric-pill">
                <i className="fa-solid fa-ship" style={{ color: '#d97706' }}></i>
                <div>
                  <strong>FCL & LCL Freight</strong>
                  <span>Global Port Deliveries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 1: Green Coffee Bean Sourcing by Origin */}
      <section className="section it-category-block" style={{ padding: '40px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="it-category-header-banner coffee-banner fade-up" ref={cat1Fade}>
            <div className="it-cat-icon-badge coffee-banner-icon">
              <i className="fa-solid fa-mountain-sun"></i>
            </div>
            <div className="it-cat-text">
              <span className="it-cat-eyebrow" style={{ color: '#f59e0b' }}>CATEGORY 01 • SINGLE ORIGINS</span>
              <h3>Green Coffee Bean Sourcing by Origin & Terroir</h3>
              <p>Direct ethical procurement from celebrated high-altitude coffee washing stations and smallholder cooperatives worldwide.</p>
            </div>
          </div>

          <div className="catalog-grid-3">
            {originServices.map((srv, idx) => (
              <div 
                className="compact-card coffee-card" 
                key={idx}
                onClick={() => handleOpenDrawer(srv, "Origin Sourcing")}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${srv.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenDrawer(srv, "Origin Sourcing");
                  }
                }}
              >
                <div className="compact-card-media">
                  <img src={srv.image} alt={srv.title} />
                  <span className="compact-badge" style={{ background: 'rgba(180, 83, 9, 0.92)' }}>{srv.badge}</span>
                </div>

                <div className="compact-card-body">
                  <div className="compact-card-header">
                    <div className="compact-card-icon coffee-icon">
                      <i className={`fa-solid ${srv.icon}`}></i>
                    </div>
                    <h4 className="compact-card-title">{srv.title}</h4>
                  </div>
                  <p className="compact-card-desc">{srv.desc}</p>

                  <div className="compact-card-tags">
                    {srv.features.slice(0, 2).map((feat, fIdx) => (
                      <span key={fIdx} className="compact-tag coffee-tag">
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '10px', marginRight: '4px' }}></i>
                        {feat.split(' ').slice(0, 3).join(' ')}
                      </span>
                    ))}
                  </div>

                  <div className="compact-card-footer coffee-footer">
                    <span>View Cupping Specs</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 2: Commercial Bulk Trade & Risk Management */}
      <section className="section it-category-block" style={{ padding: '40px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="it-category-header-banner coffee-banner fade-up" ref={cat2Fade}>
            <div className="it-cat-icon-badge coffee-banner-icon">
              <i className="fa-solid fa-boxes-stacked"></i>
            </div>
            <div className="it-cat-text">
              <span className="it-cat-eyebrow" style={{ color: '#f59e0b' }}>CATEGORY 02 • B2B COMMERCE</span>
              <h3>Commercial Container Shipments, Hedging & Blending</h3>
              <p>Scalable FCL/LCL ocean logistics, price protection against ICE futures fluctuations, and bespoke signature blend engineering.</p>
            </div>
          </div>

          <div className="catalog-grid-3">
            {tradeServices.map((srv, idx) => (
              <div 
                className="compact-card coffee-card" 
                key={idx}
                onClick={() => handleOpenDrawer(srv, "Commercial Trade & Blending")}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${srv.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenDrawer(srv, "Commercial Trade & Blending");
                  }
                }}
              >
                <div className="compact-card-media">
                  <img src={srv.image} alt={srv.title} />
                  <span className="compact-badge" style={{ background: 'rgba(180, 83, 9, 0.92)' }}>{srv.badge}</span>
                </div>

                <div className="compact-card-body">
                  <div className="compact-card-header">
                    <div className="compact-card-icon coffee-icon">
                      <i className={`fa-solid ${srv.icon}`}></i>
                    </div>
                    <h4 className="compact-card-title">{srv.title}</h4>
                  </div>
                  <p className="compact-card-desc">{srv.desc}</p>

                  <div className="compact-card-tags">
                    {srv.features.slice(0, 2).map((feat, fIdx) => (
                      <span key={fIdx} className="compact-tag coffee-tag">
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '10px', marginRight: '4px' }}></i>
                        {feat.split(' ').slice(0, 3).join(' ')}
                      </span>
                    ))}
                  </div>

                  <div className="compact-card-footer coffee-footer">
                    <span>View Cupping Specs</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 3: Quality Control, Cupping Lab & Cold-Chain Logistics */}
      <section className="section it-category-block" style={{ padding: '40px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="it-category-header-banner coffee-banner fade-up" ref={cat3Fade}>
            <div className="it-cat-icon-badge coffee-banner-icon">
              <i className="fa-solid fa-certificate"></i>
            </div>
            <div className="it-cat-text">
              <span className="it-cat-eyebrow" style={{ color: '#f59e0b' }}>CATEGORY 03 • QUALITY & LAB</span>
              <h3>Q-Grader Cupping, Hermetic GrainPro Packaging & Logistics</h3>
              <p>Strict SCA laboratory verification, humidity barrier protection, and door-to-door temperature-monitored maritime transit.</p>
            </div>
          </div>

          <div className="catalog-grid-3">
            {qualityServices.map((srv, idx) => (
              <div 
                className="compact-card coffee-card" 
                key={idx}
                onClick={() => handleOpenDrawer(srv, "Quality & Logistics")}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${srv.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenDrawer(srv, "Quality & Logistics");
                  }
                }}
              >
                <div className="compact-card-media">
                  <img src={srv.image} alt={srv.title} />
                  <span className="compact-badge" style={{ background: 'rgba(180, 83, 9, 0.92)' }}>{srv.badge}</span>
                </div>

                <div className="compact-card-body">
                  <div className="compact-card-header">
                    <div className="compact-card-icon coffee-icon">
                      <i className={`fa-solid ${srv.icon}`}></i>
                    </div>
                    <h4 className="compact-card-title">{srv.title}</h4>
                  </div>
                  <p className="compact-card-desc">{srv.desc}</p>

                  <div className="compact-card-tags">
                    {srv.features.slice(0, 2).map((feat, fIdx) => (
                      <span key={fIdx} className="compact-tag coffee-tag">
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '10px', marginRight: '4px' }}></i>
                        {feat.split(' ').slice(0, 3).join(' ')}
                      </span>
                    ))}
                  </div>

                  <div className="compact-card-footer coffee-footer">
                    <span>View Cupping Specs</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY CHAIN JOURNEY TIMELINE */}
      <section className="section" style={{ background: '#ffffff', padding: '60px 0' }}>
        <div className="container">
          <div className="services-header fade-up" ref={workflowFade}>
            <span className="section-subtitle" style={{ color: '#b45309' }}>FARM-TO-PORT CHAIN OF CUSTODY</span>
            <h2 className="section-title">Our Green Coffee Supply Journey</h2>
            <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '16.5px', color: '#64748b' }}>
              Rigorous quality checkpoints from high-altitude origin harvesting to final container delivery at your roastery.
            </p>
          </div>

          <div className="it-workflow-grid">
            <div className="it-workflow-card">
              <div className="it-step-number" style={{ color: '#d97706' }}>01</div>
              <div className="it-step-icon" style={{ color: '#b45309', background: 'rgba(217, 119, 6, 0.1)' }}>
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h4>Farm & Cooperative Sourcing</h4>
              <p>Direct ethical agreements with certified smallholder cooperatives, ensuring fair farmer premiums and harvest traceability.</p>
            </div>

            <div className="it-workflow-card">
              <div className="it-step-number" style={{ color: '#d97706' }}>02</div>
              <div className="it-step-icon" style={{ color: '#b45309', background: 'rgba(217, 119, 6, 0.1)' }}>
                <i className="fa-solid fa-filter"></i>
              </div>
              <h4>Milling & Optical Sorting</h4>
              <p>State-of-the-art wet and dry milling with optical color sorting, density separation, and strict screen size calibration.</p>
            </div>

            <div className="it-workflow-card">
              <div className="it-step-number" style={{ color: '#d97706' }}>03</div>
              <div className="it-step-icon" style={{ color: '#b45309', background: 'rgba(217, 119, 6, 0.1)' }}>
                <i className="fa-solid fa-mug-saucer"></i>
              </div>
              <h4>Q-Grader Cupping & Lab QA</h4>
              <p>Pre-shipment blind cupping evaluation, moisture verification (10.0%–11.5%), and water activity testing.</p>
            </div>

            <div className="it-workflow-card">
              <div className="it-step-number" style={{ color: '#d97706' }}>04</div>
              <div className="it-step-icon" style={{ color: '#b45309', background: 'rgba(217, 119, 6, 0.1)' }}>
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <h4>GrainPro Sealed Ocean Freight</h4>
              <p>Multi-layer hermetic liner packing inside jute sacks, ventilated container bookings, and port-to-door customs clearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="cta-banner" style={{ background: 'linear-gradient(135deg, #2c1507 0%, #1a2540 100%)' }}>
        <div className="cta-texture" aria-hidden="true">
          <img src={prolindexIcon} alt="" className="cta-bg-icon" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-content fade-up" ref={ctaFade}>
            <div className="cta-icon" style={{ borderColor: 'rgba(217, 119, 6, 0.5)', color: '#f59e0b' }}>
              <i className="fa-solid fa-mug-hot"></i>
            </div>
            <div className="cta-text">
              <h3>Looking for a Consistent, Traceable Coffee Supply Partner?</h3>
              <p style={{ marginTop: '6px', fontSize: '16.5px', color: 'rgba(255,255,255,0.85)' }}>
                Connect with our commodity trading desk to request our current spot inventory offer list, forward contract differentials, or green bean cupping samples.
              </p>
            </div>
            <div className="cta-action">
              <Link to="/contact" className="btn btn-primary btn-glow">Request Green Bean Offer List</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WIDE HORIZONTAL-SPLIT SERVICE DRAWER MODAL */}
      <ServiceDrawer 
        service={selectedService}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
};

export default CoffeeTradingPage;
