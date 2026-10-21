import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ServiceDrawer from '../components/ServiceDrawer';
import useFadeUp from '../components/useFadeUp';
import prolindexIcon from '../assets/icon-original.png';

const CosmeticsPage = () => {
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

  // Category 1: Private Label & Custom Formulation (OEM / ODM)
  const formulationServices = [
    {
      title: "Advanced Skincare & Clean Beauty Serums",
      image: "/cosmetics/skincare-serums.jpg",
      icon: "fa-flask-vial",
      badge: "Active Serums & Anti-Aging",
      categoryTag: "OEM / ODM Formulation",
      desc: "High-potency clean skincare powered by stabilized vitamin complexes, hyaluronic acid, and peptides for clinical beauty brands.",
      tags: ["Active Vitamin Serums", "Clinical Clean Beauty"],
      features: [
        "High-performance hydration, brightening, and anti-aging serum formulations",
        "Clean-beauty certified, paraben-free, cruelty-free, and vegan compliant",
        "Batch stability testing, microbial screening, and dermatological approval",
        "Custom viscosity, sensory texture optimization, and bespoke signature scents"
      ]
    },
    {
      title: "Professional Haircare & Scalp Treatment",
      image: "/cosmetics/haircare-solutions.jpg",
      icon: "fa-spray-can-sparkles",
      badge: "Salon-Grade Formulations",
      categoryTag: "OEM / ODM Formulation",
      desc: "Salon-grade restorative keratin complexes, botanical scalp elixirs, and sulfate-free color-protection shampoos.",
      tags: ["Keratin Restorative Bonding", "Sulfate-Free Salon Care"],
      features: [
        "Sulfate-free, silicone-free, and color-safe nourishing shampoos and conditioners",
        "Deep restorative bonding masks, keratin treatments, and leave-in elixirs",
        "Scalp microbiome balancing serums and revitalizing botanical hair tonics",
        "Flexible batch sizes with professional salon and retail packaging formats"
      ]
    },
    {
      title: "High-Performance Color Cosmetics",
      image: "/cosmetics/color-cosmetics.jpg",
      icon: "fa-wand-magic-sparkles",
      badge: "Pigments & Aesthetics",
      categoryTag: "OEM / ODM Formulation",
      desc: "Rich pigment mineral foundations, velvet-matte lipsticks, and breathable hybrid formulas blending skincare actives.",
      tags: ["Weightless Mineral Pigments", "Custom Undertone Matching"],
      features: [
        "Weightless mineral powders, long-wearing foundations, and BB/CC hybrid bases",
        "Hydrating satin and velvet-matte lipsticks, glosses, and plumping balms",
        "Ethically sourced mineral mica and heavy-metal-tested cosmetic pigments",
        "Custom shade matching, undertone engineering, and transfer-resistant technology"
      ]
    }
  ];

  // Category 2: Raw Material Sourcing & Active Ingredients
  const sourcingServices = [
    {
      title: "Organic Botanical Extracts & Essential Oils",
      image: "/cosmetics/organic-botanicals.jpg",
      icon: "fa-seedling",
      badge: "COSMOS / ECOCERT Certified",
      categoryTag: "Raw Materials & Actives",
      desc: "Ethical procurement of cold-pressed seed oils, floral distillates, and active botanical extracts from sustainable farming cooperatives.",
      tags: ["COSMOS / ECOCERT Certified", "Cold-Pressed Seed Oils"],
      features: [
        "COSMOS and ECOCERT certified organic plant extracts and floral distillates",
        "Cold-pressed jojoba, argan, rosehip, marula, and prickly pear seed oils",
        "Full GC-MS purity testing, batch traceability, and Certificate of Analysis (CoA)",
        "Sustainable wild-harvested and regeneratively farmed agricultural sourcing"
      ]
    },
    {
      title: "Cosmeceutical & Bio-Tech Active Ingredients",
      image: "/cosmetics/cosmeceutical-formulation.jpg",
      icon: "fa-dna",
      badge: "Clinical-Grade Actives",
      categoryTag: "Raw Materials & Actives",
      desc: "Scientifically validated multi-molecular hyaluronic acids, bio-fermented peptides, bakuchiol, and stable Vitamin C.",
      tags: ["Bio-Fermented Actives", "Multi-Molecular Hyaluronic"],
      features: [
        "Pharmaceutical-grade niacinamide, bakuchiol, and stabilized ascorbic acid",
        "Multi-weight hyaluronic acid complexes for deep epidermic penetration",
        "Signal peptides, copper tripeptides, and bio-fermented postbiotics",
        "Comprehensive safety data sheets (MSDS), toxicological profiles, and efficacy trials"
      ]
    },
    {
      title: "Sustainable Luxury Packaging Solutions",
      image: "/cosmetics/luxury-packaging.jpg",
      icon: "fa-box-open",
      badge: "PCR & Recyclable Glass",
      categoryTag: "Packaging Solutions",
      desc: "Turnkey primary and secondary packaging focusing on post-consumer recycled (PCR) plastics, airless dispensers, and glass droppers.",
      tags: ["PCR & Recyclable Glass", "Airless Dispenser Systems"],
      features: [
        "High-clarity glass dropper bottles, flint jars, and refillable airless pump systems",
        "Ocean-bound and post-consumer recycled (PCR) plastics from 30% to 100%",
        "Custom silk-screen printing, hot stamping, UV coating, and soft-touch finishes",
        "Leak-proof torque testing, chemical compatibility checks, and drop tests"
      ]
    }
  ];

  // Category 3: Global Regulatory Compliance, QA & Market Entry
  const complianceServices = [
    {
      title: "Safety Assessments & Microbial Lab Testing",
      image: "/cosmetics/regulatory-testing.jpg",
      icon: "fa-microscope",
      badge: "ISO 17025 Accredited",
      categoryTag: "Quality Assurance",
      desc: "ISO 17025 laboratory verification for heavy metals, preservative challenge testing (PET), and accelerated stability.",
      tags: ["ISO 17025 Accredited", "Pathogen & Stability Testing"],
      features: [
        "ISO 17025 accredited laboratory testing for heavy metals and microbial pathogens",
        "Preservative Challenge Testing (PET) and real-time/accelerated stability testing",
        "Dermatological patch testing, hypoallergenic certification, and eye-irritation assays",
        "Toxicological safety dossier preparation by board-certified European safety assessors"
      ]
    },
    {
      title: "Multi-Jurisdiction Registration (EU, FDA, NMPA)",
      image: "/cosmetics/body-spa-care.jpg",
      icon: "fa-scale-balanced",
      badge: "Global Compliance Dossiers",
      categoryTag: "Regulatory & Compliance",
      desc: "Navigating cross-border regulatory dossiers for seamless market authorization across Europe, North America, the GCC, and Asia.",
      tags: ["EU CPNP & FDA MoCRA", "Full PIF & CPSR Dossiers"],
      features: [
        "European Union Cosmetic Products Notification Portal (CPNP) management",
        "US FDA Modernization of Cosmetics Regulation Act (MoCRA) registration & listings",
        "Product Information File (PIF) and Cosmetic Safety Assessment Report (CPSR)",
        "Ingredient INCI verification, multilingual labeling review, and claim substantiation"
      ]
    },
    {
      title: "Fragrance Compounding & Spa Logistics",
      image: "/cosmetics/fragrance-perfumery.jpg",
      icon: "fa-earth-americas",
      badge: "IFRA Standards / Cold-Chain",
      categoryTag: "Specialized Fulfillment",
      desc: "IFRA-compliant perfume compounding and luxury spa care with temperature-controlled bonded warehousing in Hong Kong.",
      tags: ["IFRA Compounding", "Climate-Controlled Logistics"],
      features: [
        "IFRA-compliant bespoke perfume compounding and ambient home fragrance lines",
        "Exfoliating botanical body scrubs, nourishing butters, and therapeutic bath soaks",
        "Climate-controlled storage (18°C–22°C) preserving delicate botanical actives",
        "Door-to-door bonded export shipping with dangerous goods (DG) compliance for perfumes"
      ]
    }
  ];

  return (
    <>
      <PageBanner 
        title="Cosmetics Trading & Solutions" 
        breadcrumbs={[
          { label: 'Services', path: '/it-services' },
          { label: 'Cosmetics' }
        ]} 
      />

      {/* INTRO HERO SECTION */}
      <section className="section section-textured" style={{ paddingBottom: '35px' }}>
        <div className="section-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-header fade-up" ref={headerFade}>
            <span className="section-subtitle" style={{ color: '#9333ea' }}>BEAUTY & PERSONAL CARE TRADING</span>
            <h2 className="section-title">Global Cosmetics Supply & Private Label Formulation</h2>
            <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '17px', lineHeight: '1.75', color: '#475569' }}>
              PROLINDEX LIMITED bridges international beauty brands and retailers with certified compounding laboratories, sustainable packaging manufacturers, and global supply channels. Turnkey OEM/ODM solutions engineered for commercial excellence.
            </p>

            {/* Quick Metrics Bar */}
            <div className="it-metrics-bar">
              <div className="it-metric-pill">
                <i className="fa-solid fa-certificate" style={{ color: '#9333ea', background: 'rgba(147, 51, 234, 0.1)' }}></i>
                <div>
                  <strong>ISO 22716 GMP</strong>
                  <span>Certified Manufacturing</span>
                </div>
              </div>
              <div className="it-metric-pill">
                <i className="fa-solid fa-leaf" style={{ color: '#16a34a', background: 'rgba(22, 163, 74, 0.1)' }}></i>
                <div>
                  <strong>100% Clean Beauty</strong>
                  <span>Cruelty-Free & Vegan</span>
                </div>
              </div>
              <div className="it-metric-pill">
                <i className="fa-solid fa-flask-vial" style={{ color: '#9333ea', background: 'rgba(147, 51, 234, 0.1)' }}></i>
                <div>
                  <strong>50+ Proven Actives</strong>
                  <span>Custom Formulation Library</span>
                </div>
              </div>
              <div className="it-metric-pill">
                <i className="fa-solid fa-globe" style={{ color: '#2563eb', background: 'rgba(37, 99, 235, 0.1)' }}></i>
                <div>
                  <strong>EU & FDA Compliant</strong>
                  <span>MoCRA & CPNP Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 1: Private Label & Custom Formulation */}
      <section className="section it-category-block cat-cosmetics-1" style={{ padding: '50px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="it-category-header-banner cosmetics-banner fade-up" ref={cat1Fade}>
            <div className="it-cat-icon-badge cosmetics-banner-icon">
              <i className="fa-solid fa-flask-vial"></i>
            </div>
            <div className="it-cat-text">
              <span className="it-cat-eyebrow" style={{ color: '#c084fc' }}>CATEGORY 01 • TURNKEY FORMULATION</span>
              <h3>Private Label & Custom Formulation (OEM / ODM)</h3>
              <p>End-to-end laboratory compounding and brand development — transforming active ingredients into market-ready retail collections.</p>
            </div>
          </div>

          <div className="catalog-grid-3">
            {formulationServices.map((srv, idx) => (
              <div 
                className="compact-card cosmetics-card" 
                key={idx}
                onClick={() => handleOpenDrawer(srv, "Private Label & Formulation")}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${srv.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenDrawer(srv, "Private Label & Formulation");
                  }
                }}
              >
                <div className="compact-card-media">
                  <img src={srv.image} alt={srv.title} />
                  <span className="compact-badge">{srv.badge}</span>
                </div>

                <div className="compact-card-body">
                  <div className="compact-card-header">
                    <div className="compact-card-icon cosmetics-icon">
                      <i className={`fa-solid ${srv.icon}`}></i>
                    </div>
                    <h4 className="compact-card-title">{srv.title}</h4>
                  </div>
                  <p className="compact-card-desc">{srv.desc}</p>

                  <div className="compact-card-tags">
                    {(srv.tags || srv.features.slice(0, 2)).map((tag, tIdx) => (
                      <span key={tIdx} className="compact-tag cosmetics-tag">
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '10px', marginRight: '5px' }}></i>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="compact-card-footer cosmetics-footer">
                    <span>View Specs & Options</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 2: Raw Material Sourcing & Active Ingredients */}
      <section className="section it-category-block cat-cosmetics-2" style={{ padding: '50px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="it-category-header-banner cosmetics-banner fade-up" ref={cat2Fade}>
            <div className="it-cat-icon-badge cosmetics-banner-icon">
              <i className="fa-solid fa-dna"></i>
            </div>
            <div className="it-cat-text">
              <span className="it-cat-eyebrow" style={{ color: '#c084fc' }}>CATEGORY 02 • INGREDIENT SOURCING</span>
              <h3>Raw Material Sourcing, Active Ingredients & Packaging</h3>
              <p>Direct ethical procurement of clinically validated actives, organic botanicals, and certified sustainable primary containers.</p>
            </div>
          </div>

          <div className="catalog-grid-3">
            {sourcingServices.map((srv, idx) => (
              <div 
                className="compact-card cosmetics-card" 
                key={idx}
                onClick={() => handleOpenDrawer(srv, "Raw Materials & Actives")}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${srv.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenDrawer(srv, "Raw Materials & Actives");
                  }
                }}
              >
                <div className="compact-card-media">
                  <img src={srv.image} alt={srv.title} />
                  <span className="compact-badge">{srv.badge}</span>
                </div>

                <div className="compact-card-body">
                  <div className="compact-card-header">
                    <div className="compact-card-icon cosmetics-icon">
                      <i className={`fa-solid ${srv.icon}`}></i>
                    </div>
                    <h4 className="compact-card-title">{srv.title}</h4>
                  </div>
                  <p className="compact-card-desc">{srv.desc}</p>

                  <div className="compact-card-tags">
                    {(srv.tags || srv.features.slice(0, 2)).map((tag, tIdx) => (
                      <span key={tIdx} className="compact-tag cosmetics-tag">
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '10px', marginRight: '5px' }}></i>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="compact-card-footer cosmetics-footer">
                    <span>View Specs & Options</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 3: Global Regulatory Compliance, QA & Market Entry */}
      <section className="section it-category-block cat-cosmetics-3" style={{ padding: '50px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="it-category-header-banner cosmetics-banner fade-up" ref={cat3Fade}>
            <div className="it-cat-icon-badge cosmetics-banner-icon">
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className="it-cat-text">
              <span className="it-cat-eyebrow" style={{ color: '#c084fc' }}>CATEGORY 03 • COMPLIANCE & LOGISTICS</span>
              <h3>Regulatory Dossiers, Laboratory QA & Global Logistics</h3>
              <p>Navigating international safety standards, toxicological reviews, and temperature-controlled freight fulfillment.</p>
            </div>
          </div>

          <div className="catalog-grid-3">
            {complianceServices.map((srv, idx) => (
              <div 
                className="compact-card cosmetics-card" 
                key={idx}
                onClick={() => handleOpenDrawer(srv, "Compliance & Logistics")}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${srv.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenDrawer(srv, "Compliance & Logistics");
                  }
                }}
              >
                <div className="compact-card-media">
                  <img src={srv.image} alt={srv.title} />
                  <span className="compact-badge">{srv.badge}</span>
                </div>

                <div className="compact-card-body">
                  <div className="compact-card-header">
                    <div className="compact-card-icon cosmetics-icon">
                      <i className={`fa-solid ${srv.icon}`}></i>
                    </div>
                    <h4 className="compact-card-title">{srv.title}</h4>
                  </div>
                  <p className="compact-card-desc">{srv.desc}</p>

                  <div className="compact-card-tags">
                    {(srv.tags || srv.features.slice(0, 2)).map((tag, tIdx) => (
                      <span key={tIdx} className="compact-tag cosmetics-tag">
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '10px', marginRight: '5px' }}></i>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="compact-card-footer cosmetics-footer">
                    <span>View Specs & Options</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM / SUPPLY WORKFLOW TIMELINE */}
      <section className="section" style={{ background: '#ffffff', padding: '60px 0' }}>
        <div className="container">
          <div className="services-header fade-up" ref={workflowFade}>
            <span className="section-subtitle" style={{ color: '#9333ea' }}>END-TO-END DEVELOPMENT LIFECYCLE</span>
            <h2 className="section-title">Our 4-Stage Private Label Process</h2>
            <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '16.5px', color: '#64748b' }}>
              From initial product briefing to commercial retail distribution, we ensure complete quality control, safety compliance, and on-time global fulfillment.
            </p>
          </div>

          <div className="it-workflow-grid">
            <div className="it-workflow-card">
              <div className="it-step-number" style={{ color: '#c084fc' }}>01</div>
              <div className="it-step-icon" style={{ color: '#9333ea', background: 'rgba(168, 85, 247, 0.1)' }}>
                <i className="fa-solid fa-comments"></i>
              </div>
              <h4>Concept & Formulation Brief</h4>
              <p>Defining target demographics, active ingredient benchmarks, sensory texture goals, and regulatory boundaries.</p>
            </div>

            <div className="it-workflow-card">
              <div className="it-step-number" style={{ color: '#c084fc' }}>02</div>
              <div className="it-step-icon" style={{ color: '#9333ea', background: 'rgba(168, 85, 247, 0.1)' }}>
                <i className="fa-solid fa-vial-circle-check"></i>
              </div>
              <h4>R&D Lab Sampling & Testing</h4>
              <p>Precision pilot batch formulation, preservative efficacy (PET), compatibility tests, and client sample approval.</p>
            </div>

            <div className="it-workflow-card">
              <div className="it-step-number" style={{ color: '#c084fc' }}>03</div>
              <div className="it-step-icon" style={{ color: '#9333ea', background: 'rgba(168, 85, 247, 0.1)' }}>
                <i className="fa-solid fa-file-shield"></i>
              </div>
              <h4>Dossiers & Packaging Customization</h4>
              <p>PIF preparation, EU CPNP / FDA MoCRA notifications, label compliance audits, and primary container silk-screening.</p>
            </div>

            <div className="it-workflow-card">
              <div className="it-step-number" style={{ color: '#c084fc' }}>04</div>
              <div className="it-step-icon" style={{ color: '#9333ea', background: 'rgba(168, 85, 247, 0.1)' }}>
                <i className="fa-solid fa-boxes-packing"></i>
              </div>
              <h4>GMP Production & Fulfillment</h4>
              <p>ISO 22716 cleanroom manufacturing, automated filling, batch release certification, and global export logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="cta-banner" style={{ background: 'linear-gradient(135deg, #1e1136 0%, #1a2540 100%)' }}>
        <div className="cta-texture" aria-hidden="true">
          <img src={prolindexIcon} alt="" className="cta-bg-icon" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-content fade-up" ref={ctaFade}>
            <div className="cta-icon" style={{ borderColor: 'rgba(168, 85, 247, 0.5)', color: '#c084fc' }}>
              <i className="fa-solid fa-sparkles"></i>
            </div>
            <div className="cta-text">
              <h3>Ready to Launch or Expand Your Cosmetics Brand?</h3>
              <p style={{ marginTop: '6px', fontSize: '16.5px', color: 'rgba(255,255,255,0.85)' }}>
                Connect with our formulation specialists and trading team to request custom ingredient samples or discuss OEM/ODM manufacturing partnerships.
              </p>
            </div>
            <div className="cta-action">
              <Link to="/contact" className="btn btn-primary btn-glow">Request Formulation Proposal</Link>
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

export default CosmeticsPage;
