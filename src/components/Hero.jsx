import { useFadeUp } from './useFadeUp'

export default function Hero() {
  const ref = useFadeUp()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content fade-up" ref={ref}>
          <span className="hero-badge">Welcome to PROLINDEX!</span>
          <h1>Leading the way in <br />IT Excellence!</h1>
          <ul className="hero-list">
            <li><i className="fas fa-check" /> Cutting-edge technology for your business</li>
            <li><i className="fas fa-check" /> Expertise from around the world</li>
            <li><i className="fas fa-check" /> Always here when you need us</li>
          </ul>
          <div className="hero-btns">
            <a href="#discover" className="btn btn-primary">DISCOVER</a>
            <a href="#discover" className="btn btn-outline-white">Read Story</a>
          </div>
        </div>
      </div>
    </section>
  )
}
