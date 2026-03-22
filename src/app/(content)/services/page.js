import React from 'react'
import Image from 'next/image'
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
                <Image className="service-img" src="/field.jpg" alt="Events" width={1024} height={840} sizes="(max-width: 768px) 100vw, 33vw" style={{ height: 'auto' }} />
                <div className="service-num">01</div>
                <div className="service-name">Events</div>
                <p className="service-desc">GMT hosts and films world-class disc golf tournaments — including pro skins matches, cash events, and the iconic Charlotte Roar.</p>
                <a href="https://greatestmediateam.com/events/" className="service-link">See All Events</a>
            </div>
            <div className="service-card reveal" style={{transitionDelay:'0.15s'}}>
                <Image className="service-img" src="/gmtcam.jpg" alt="Videos" width={1006} height={848} sizes="(max-width: 768px) 100vw, 33vw" style={{ height: 'auto' }} />
                <div className="service-num">02</div>
                <div className="service-name">Videos</div>
                <p className="service-desc">Professional disc golf coverage since 2021 — tournament films, pro highlights, and content that captures the beauty of the sport.</p>
                <a href="https://greatestmediateam.com/videos/" className="service-link">Watch Coverage</a>
            </div>
            <div className="service-card reveal" style={{transitionDelay:'0.15s'}}>
                <Image className="service-img" src="/jersey.jpg" alt="Merch" width={1006} height={848} sizes="(max-width: 768px) 100vw, 33vw" style={{ height: 'auto' }} />
                <div className="service-num">03</div>
                <div className="service-name">Merch</div>
                <p className="service-desc">Grab official GMT gear and show your support. Every purchase helps fuel more events, more coverage, and more disc golf for everyone.</p>
                <a href="/shop" className="service-link">Shop the Store</a>
            </div>
            </div>
        </div>
    </section>
  )
}
