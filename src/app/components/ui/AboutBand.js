import React from 'react'
import Image from 'next/image'

export default function AboutBand() {
  return (
    <div className="about-band">
      <div className="about-inner">
        <div className="about-text reveal">
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">Disc Golf&apos;s<br /><span style={{color:'var(--gold)'}}>Greatest</span><br />Coverage</h2>
          <p>Founded in 2021, GMT&apos;s mission is to deliver top-notch disc golf content and coverage. From tournament films to pro skins events, we&apos;re building something special for the disc golf community — and your support makes it all possible.</p>
        </div>
          <div className="about-visual reveal">
          <div className="about-visual-frame">
            <Image src="/field.jpg" alt="GMT Event" fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="about-visual-tag">GMT Events</div>
          <div className="about-border-accent"></div>
        </div>
      </div>
    </div>
  )
}
