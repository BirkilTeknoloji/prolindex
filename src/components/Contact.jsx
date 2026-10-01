import { useState } from 'react'
import { useFadeUp } from './useFadeUp'

export default function Contact() {
  const ref = useFadeUp()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Reach out to us</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid fade-up" ref={ref}>
          <div className="contact-info">
            <h3>Let&apos;s talk about your project</h3>
            <p style={{ marginBottom: 32 }}>
              We&apos;re here to help and answer any question you might have. We look forward
              to hearing from you.
            </p>

            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                <h4>Address</h4>
                <p>Dubai, UAE</p>
              </div>
            </div>

          

            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="fas fa-envelope" />
              </div>
              <div>
                <h4>Email</h4>
                <p>info@prolindex.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <i className="fas fa-paper-plane" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
