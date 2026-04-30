import React from 'react'
import Link from 'next/link'

export default function Mission() {
  return (
    <div className="mission">
    <div className="mission-inner reveal">
        <div className="section-label" style={{justifyContent:'center'}}>Our Mission</div>
        <h2 className="mission-quote">"Top-notch disc golf content, <span className="highlight">delivered with passion</span> — for the love of the sport."</h2>
        <p className="mission-body">Every tournament filmed, every pro highlight captured, every event hosted — it's all in service of growing disc golf and celebrating the athletes who make it great. Join us on this exciting journey.</p>
        <Link href="/about" className="btn-primary">Our Story</Link>
    </div>
    </div>
  )
}
