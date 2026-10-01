import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import useFadeUp from '../components/useFadeUp';
import prolindexIcon from '../assets/icon-original.png';

const ContactPage = () => {
  const fade1 = useFadeUp();
  const fade2 = useFadeUp(150);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageBanner 
        title="Contact Us" 
        breadcrumbs={[{ label: 'Contact' }]} 
      />

      <section className="section section-textured">
        <div className="section-watermark" aria-hidden="true">
          <img src={prolindexIcon} alt="" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="contact-grid">
            <div className="contact-info fade-up" ref={fade1}>
              <span className="section-subtitle">GET IN TOUCH</span>
              <h2 className="section-title">We&apos;d love to hear from you</h2>
              <p style={{marginBottom: '35px', lineHeight: '1.7', fontSize: '17px'}}>
                Whether you have an inquiry regarding IT infrastructure, healthcare platforms, or require a technical consultation, our specialists are ready to assist.
              </p>
              
              <div className="contact-info-card">
                <div className="contact-info-icon"><i className="fa-solid fa-building"></i></div>
                <div className="contact-info-text">
                  <h4>PROLINDEX LIMITED</h4>
                  <p>Company ID: <strong>81176290</strong></p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="contact-info-text">
                  <h4>Corporate Office</h4>
                  <p>Unit 2104, 21/F Mongkok Comm Ctr<br/>16 Argyle St Mongkok<br/>Kowloon, Hong Kong</p>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-info-icon"><i className="fa-solid fa-phone"></i></div>
                <div className="contact-info-text">
                  <h4>24/7 Global Hotline</h4>
                  <p><a href="tel:+971585278323">+971 58 527 8323</a></p>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-info-icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="contact-info-text">
                  <h4>Email Inquiries</h4>
                  <p><a href="mailto:info@prolindex.com">info@prolindex.com</a></p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper fade-up" ref={fade2}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 style={{marginBottom: '10px', fontSize: '24px'}}>Send us a Message</h3>
                <p style={{marginBottom: '24px', fontSize: '15px', color: 'var(--text-light)'}}>
                  Fill out the form below and an engineer or consultant will reach back within 24 hours.
                </p>

                {submitted && (
                  <div className="alert-success">
                    <i className="fa-solid fa-circle-check"></i> Thank you! Your message has been received. We will contact you shortly.
                  </div>
                )}
                
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" required />
                </div>
                
                <div className="form-group">
                  <label>Business Email</label>
                  <input type="email" className="form-control" placeholder="john@company.com" required />
                </div>
                
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" className="form-control" placeholder="IT Infrastructure Consultation" required />
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" rows="5" placeholder="Tell us about your project requirements..." required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-glow" style={{width: '100%'}}>
                  <i className="fa-solid fa-paper-plane" style={{marginRight: '8px'}}></i> Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
