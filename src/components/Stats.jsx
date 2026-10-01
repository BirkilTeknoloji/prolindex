import React from 'react';
import useFadeUp from './useFadeUp';
import prolindexIcon from '../assets/icon-original.png';

const Stats = () => {
  const fade1 = useFadeUp();
  const fade2 = useFadeUp(100);
  const fade3 = useFadeUp(200);
  const fade4 = useFadeUp(300);

  return (
    <section className="stats">
      <div className="stats-texture" aria-hidden="true">
        <img src={prolindexIcon} alt="" className="stats-bg-icon left" />
        <img src={prolindexIcon} alt="" className="stats-bg-icon right" />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="stats-grid">
          <div className="stat-item fade-up" ref={fade1}>
            <h2>1000+</h2>
            <p>Success Stories</p>
          </div>
          <div className="stat-item fade-up" ref={fade2}>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
          <div className="stat-item fade-up" ref={fade3}>
            <h2>500+</h2>
            <p>Companies Trust Us</p>
          </div>
          <div className="stat-item fade-up" ref={fade4}>
            <h2>100%</h2>
            <p>Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
