import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
  <div className="footer-inner">
    <div>
      <span className="footer-brand-name">Greatest Media Team</span>
      <p className="footer-brand-tagline">Professional disc golf coverage and events since 2021. We film tournaments, host pro events, and create content for disc golf fans everywhere.</p>
      <div className="footer-social">
        <Link href="https://www.facebook.com/GreatestMediaTeam" target="_blank" title="Facebook">
          <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </Link>
        <Link href="https://www.instagram.com/greatestmediateam/" target="_blank" title="Instagram">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" style={{fill:'#c9a227'}}/></svg>
        </Link>
        <Link href="https://www.youtube.com/@GreatestMediaTeam" target="_blank" title="YouTube">
          <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" style={{fill:'#c9a227'}}/></svg>
        </Link>
      </div>
    </div>
    <div>
      <div className="footer-col-title">Navigate</div>
      <ul className="footer-links">
        <li><Link href="https://greatestmediateam.com/events/">Events</Link></li>
        <li><Link href="https://greatestmediateam.com/videos/">Videos</Link></li>
        <li><Link href="https://greatestmediateam.com/about/">About</Link></li>
        <li><Link href="https://greatestmediateam.com/contact/">Contact</Link></li>
        <li><Link href="https://greatestmediateam.com/shop/">Shop</Link></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Events</div>
      <ul className="footer-links">
        <li><Link href="https://greatestmediateam.com/hosted/2026-charlotte-roar/">2026 Charlotte Roar</Link></li>
        <li><Link href="https://greatestmediateam.com/hosted/charlotte-roar-gmt-pro-skins-match/">Pro Skins Match</Link></li>
        <li><Link href="/events">All Events</Link></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Connect</div>
      <ul className="footer-links">
        <li><Link href="https://www.facebook.com/GreatestMediaTeam" target="_blank">Facebook</Link></li>
        <li><Link href="https://www.instagram.com/greatestmediateam/" target="_blank">Instagram</Link></li>
        <li><Link href="https://www.youtube.com/@GreatestMediaTeam" target="_blank">YouTube</Link></li>
        <li><Link href="https://greatestmediateam.com/contact/">Contact Us</Link></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <span className="footer-copy">© 2025 <span>Greatest Media Team</span>. All rights reserved.</span>
    <span className="footer-copy">Made for the love of <span>disc golf</span></span>
  </div>
</footer>
  )
}
