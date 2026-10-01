import { useFadeUp } from './useFadeUp'

const features = [
  { icon: 'fas fa-cogs', title: 'Efficient Services', desc: 'Optimized solutions tailored for your needs.' },
  { icon: 'fas fa-users', title: 'Professional Staff', desc: 'Skilled experts delivering top-quality work.' },
  { icon: 'fas fa-headset', title: 'Fast Support', desc: 'Quick, reliable assistance anytime you need.' },
  { icon: 'fas fa-wrench', title: 'Expert Maintenance', desc: 'Proactive care for seamless performance.' },
]

export default function About() {
  const ref1 = useFadeUp()
  const ref2 = useFadeUp()

  return (
    <section className="about section" id="discover">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-up" ref={ref1}>
            <span className="section-subtitle">We take care of your needs!</span>
            <h2>Your Needs,<br />Our Priority!</h2>
            <p>
              At Prolindex, we are dedicated to understanding and prioritizing your unique
              business requirements. Our team ensures tailored solutions, responsive service,
              and unwavering support to drive your success.
            </p>
            <p>
              Partner with us for a seamless IT experience, where your goals become our mission.
              With our innovative approaches and global expertise, we transform challenges into
              opportunities, ensuring your business thrives in the digital age.
            </p>
          </div>

          <div className="features-grid fade-up" ref={ref2} style={{ transitionDelay: '0.2s' }}>
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">
                  <i className={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
