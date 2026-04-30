import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-arc"></div>
        <div className="hero-content">
            <p className="hero-eyebrow">Est. 2021 · Disc Golf Media</p>
            <h1 className="hero-title">
            <span className="outline">Greatest</span><br />
            <em>Media</em><br />
            Team
            </h1>
            <p className="hero-sub">Professional disc golf coverage, tournaments, and content. We bring the sport to life — on the course and on screen.</p>
            <div className="hero-actions">
            <Link href="/events" className="btn-primary">View Events</Link>
            <Link href="https://www.youtube.com/@GreatestMediaTeam" className="btn-secondary" target="_blank">Watch on YouTube</Link>
            </div>
        </div>
        <div className="hero-stats">
            <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Videos Produced</div>
            </div>
            <div className="stat-item">
            <div className="stat-number">2021</div>
            <div className="stat-label">Founded</div>
            </div>
            <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Major Platforms</div>
            </div>
            <div className="stat-item">
            <div className="stat-number">$3K+</div>
            <div className="stat-label">Added Cash per Event</div>
            </div>
        </div>
    </div>
  )
}
