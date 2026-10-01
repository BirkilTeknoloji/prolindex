import { useFadeUp } from './useFadeUp'

export default function Services() {
  const ref = useFadeUp()

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">We are here to help</span>
          <h2 className="section-title">Discover Our Services</h2>
          <p className="section-desc">
            At Prolindex, we offer comprehensive and advanced professional services in both
            IT and healthcare technologies. Discover our services now and take the first step
            towards working together!
          </p>
        </div>

        <div className="services-grid fade-up" ref={ref}>
          <div className="service-card">
            <div className="service-img">
              <i className="fas fa-server" />
            </div>
            <div className="service-body">
              <h3>IT Solutions</h3>
              <p>
                Comprehensive IT infrastructure, cloud solutions, networking, security systems,
                and software development to power your business forward.
              </p>
              <a href="#" className="service-link">
                DISCOVER <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-img" style={{ color: '#22c55e' }}>
              <i className="fas fa-heartbeat" />
            </div>
            <div className="service-body">
              <h3>Health Solutions</h3>
              <p>
                Advanced healthcare technology solutions including medical systems integration,
                health data management, and digital health platforms.
              </p>
              <a href="#" className="service-link">
                DISCOVER <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>

        <div className="services-extra">
          <p>
            Do you need more information about our services?{' '}
            <a href="mailto:info@prolindex.com">Drop a line here what you are looking for.</a>
          </p>
        </div>
      </div>
    </section>
  )
}
