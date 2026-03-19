import React from 'react'
import Link from 'next/link'

export default function Services() {
  return (
    <section className="services">
        <div className="services-inner">
            <div className="services-header reveal">
            <div>
                <div className="section-label">What We Do</div>
                <h2 className="section-title">Coverage.<br />Events.<br />Merch.</h2>
            </div>
            <Link href="/about" className="btn-secondary">Learn More About GMT</Link>
            </div>
            <div className="services-grid">
            <div className="service-card reveal">
                <img className="service-img" src="https://greatestmediateam.com/wp-content/uploads/2025/10/451446714_17987647346679161_9175263979240049489_n-YX4bb2WzaRcZ93pq-1024x840.jpg" alt="Events" />
                <div className="service-num">01</div>
                <div className="service-name">Events</div>
                <p className="service-desc">GMT hosts and films world-class disc golf tournaments — including pro skins matches, cash events, and the iconic Charlotte Roar.</p>
                <a href="https://greatestmediateam.com/events/" className="service-link">See All Events</a>
            </div>
            <div className="service-card reveal" style={{transitionDelay:'0.15s'}}>
                <img className="service-img" src="https://greatestmediateam.com/wp-content/uploads/2025/11/photo-1591033013827-2486b5ce7cfc-AGB42lyJ5gCVv809-1.jpg" alt="Videos" />
                <div className="service-num">02</div>
                <div className="service-name">Videos</div>
                <p className="service-desc">Professional disc golf coverage since 2021 — tournament films, pro highlights, and content that captures the beauty of the sport.</p>
                <a href="https://greatestmediateam.com/videos/" className="service-link">Watch Coverage</a>
            </div>
            <div className="service-card reveal" style={{transitionDelay:'0.15s'}}>
                <img className="service-img" src="https://greatestmediateam.com/wp-content/uploads/2025/11/14263177195581184905_2048-1-copy-Yyv74Wr8GJC5JOPK-1.jpg" alt="Merch" />
                <div className="service-num">03</div>
                <div className="service-name">Merch</div>
                <p className="service-desc">Grab official GMT gear and show your support. Every purchase helps fuel more events, more coverage, and more disc golf for everyone.</p>
                <a href="https://greatestmediateam.com/shop/" className="service-link">Shop the Store</a>
            </div>
            </div>
        </div>
    </section>
  )
}
