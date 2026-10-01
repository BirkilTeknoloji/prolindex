import { useFadeUp } from './useFadeUp'

const partners = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5']

export default function Partners() {
  const ref = useFadeUp()

  return (
    <section className="partners section" id="partners">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Trusted by leaders</span>
          <h2 className="section-title">Our Partners</h2>
        </div>
        <div className="partners-grid fade-up" ref={ref}>
          {partners.map((p) => (
            <div className="partner-box" key={p}>
              <i className="fas fa-building" style={{ fontSize: '2rem', marginBottom: 8, display: 'block' }} />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
