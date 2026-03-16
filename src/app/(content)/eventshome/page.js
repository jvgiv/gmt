import React from 'react'
import Link from 'next/link'

export default function EventsHome() {
  return (
    <div className="events">
  <div className="events-inner">
    <div className="events-header reveal">
      <div>
        <div className="section-label">On the Calendar</div>
        <h2 className="section-title">Upcoming<br />Events</h2>
      </div>
      <Link href="/events" className="btn-secondary">All Events</Link>
    </div>
    <div className="events-grid reveal">
      <div className="event-card-featured">
        <div className="event-img-wrap">
          <img src="https://m.discgolfscene.com/flyers/tournaments/46484/39th-annual-dogwood-crosstown-classic-presented-by-eastern-disc-golf-1643254692-large.jpg" alt="Dogwood Classic" />
          <div className="event-img-overlay"></div>
          <div className="event-tag">Hosted by GMT</div>
        </div>
        <div className="event-body">
          <div className="event-meta">April 3-5, 2026 · Clayton, NC</div>
          <a href="https://greatestmediateam.com/hosted/2026-charlotte-roar/" className="event-title">43rd Annual Dogwood Crosstown Classic</a>
          <p className="event-excerpt">The 43rd Annual Dogwood Crosstown Classic, Presented by Batista Grading Inc is right around the corner and will be part of the NC Point Series.  $3,000 Added Cash.</p>
        </div>
      </div>
      <div className="event-card">
        <div className="event-img-wrap">
          <img src="https://m.discgolfscene.com/logos/tournaments/107126/Sunshine_Open_at_501_and_Mile_Marker_63_Pros_Presented_by_Abreu_Karol_and_GMT_20261769271794.jpg" alt="Sunshine Open" />
          <div className="event-img-overlay"></div>
          <div className="event-tag">Hosted by GMT</div>
        </div>
        <div className="event-body">
          <div className="event-meta">May 29-31 · Warren, MA</div>
          <a href="https://greatestmediateam.com/hosted/charlotte-roar-gmt-pro-skins-match/" className="event-title">Sunshine Open at 501 and Mile Marker 63 - Presented by Abreu Karol, and GMT</a>
          <p className="event-excerpt">Abreu Karol, Greatest Media Team, First Available Print and Apparel, and Disc Golf 978 are teaming up once more to bring you the newest rebranded Sunstein Open --- this time calling it the Sunshine Open!! $3,000 Added Cash.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
