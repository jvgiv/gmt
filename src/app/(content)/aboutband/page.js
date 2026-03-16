import React from 'react'

export default function AboutBand() {
  return (
    <div className="about-band">
  <div className="about-inner">
    {/* <div className="about-text reveal"> */}
    <div className="about-text">
      <div className="section-label">Who We Are</div>
      <h2 className="section-title">Disc Golf's<br /><span style={{color:'var(--gold)'}}>Greatest</span><br />Coverage</h2>
      <p>Founded in 2021, GMT's mission is to deliver top-notch disc golf content and coverage. From tournament films to pro skins events, we're building something special for the disc golf community — and your support makes it all possible.</p>
    </div>
    <div className="about-visual reveal">
      <div className="about-visual-frame">
        <img src="https://greatestmediateam.com/wp-content/uploads/2025/10/451446714_17987647346679161_9175263979240049489_n-YX4bb2WzaRcZ93pq-1024x840.jpg" alt="GMT Event" />
      </div>
      <div className="about-visual-tag">GMT Events</div>
      <div className="about-border-accent"></div>
    </div>
  </div>
</div>
  )
}
