import React from 'react'

export default function EventsHome() {
  return (
    <div className="events">
  <div className="events-inner">
    <div className="events-header reveal">
      <div>
        <div className="section-label">On the Calendar</div>
        <h2 className="section-title">Upcoming<br />Events</h2>
      </div>
      <a href="https://greatestmediateam.com/events/" className="btn-secondary">All Events</a>
    </div>
    <div className="events-grid reveal">
      <div className="event-card-featured">
        <div className="event-img-wrap">
          <img src="https://greatestmediateam.com/wp-content/uploads/2025/12/2026-charlotte-roar-presented-by-gmt-and-powered-by-discmania-and-grip-eq-1763343443-large.jpg" alt="2026 Charlotte Roar" />
          <div className="event-img-overlay"></div>
          <div className="event-tag">Hosted by GMT</div>
        </div>
        <div className="event-body">
          <div className="event-meta">Jan 2–4, 2026 · Charlotte</div>
          <a href="https://greatestmediateam.com/hosted/2026-charlotte-roar/" className="event-title">2026 Charlotte Roar</a>
          <p className="event-excerpt">Presented by GMT and Powered By Discmania and Grip EQ. $3,000 added cash, $500 added merchandise, 3 rounds of play. Are you ready to begin the year with a roar?</p>
        </div>
      </div>
      <div className="event-card">
        <div className="event-img-wrap">
          <img src="https://greatestmediateam.com/wp-content/uploads/2025/12/charlotte-roar-gmt-pro-skins-match-austin-turner-paul-uibarri-anthony-anselmo-nathan-queen-special-guest-1765593502-large.jpg" alt="Pro Skins Match" />
          <div className="event-img-overlay"></div>
          <div className="event-tag">Hosted by GMT</div>
        </div>
        <div className="event-body">
          <div className="event-meta">Dec 20, 2025 · Charlotte</div>
          <a href="https://greatestmediateam.com/hosted/charlotte-roar-gmt-pro-skins-match/" className="event-title">Charlotte Roar GMT Pro Skins Match</a>
          <p className="event-excerpt">World className GMT Skins event showcasing the best lefties in the world and Paul Ulibarri, plus a special guest. All proceeds benefit the skins match pros.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
