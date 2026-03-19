import React from 'react'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="social-strip">
    <div className="social-strip-title">Follow the Action</div>
    <div className="social-divider"></div>
    <div className="social-icons">
        <Link href="https://www.facebook.com/GreatestMediaTeam" target="_blank" className="social-icon-link" title="Facebook">
        <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </Link>
        <Link href="https://www.instagram.com/greatestmediateam/" target="_blank" className="social-icon-link" title="Instagram">
        <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" style={{fill:'#c9a227'}}/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" style={{stroke:'#c9a227', strokeWidth:'2'}}/></svg>
        </Link>
        <Link href="https://www.youtube.com/@GreatestMediaTeam" target="_blank" className="social-icon-link" title="YouTube">
        <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" style={{fill:'#c9a227'}}/></svg>
        </Link>
    </div>
    <div className="social-divider"></div>
    <Link href="/shop" className="btn-primary" style={{background:'var(--black)', color:'var(--gold-light)', border:'1px solid var(--gold)'}}>Shop Discs</Link>
    </div>
  )
}
