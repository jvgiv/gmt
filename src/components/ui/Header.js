import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav>
        <Link className="nav-logo" href="/">
            <span></span>
            GMT
        </Link>

    <ul className='nav-links'>
        <Link href='/events'>Events</Link>
        <Link href='/videos'>Videos</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
    </ul>
      <Link href='/shop' className='nav-cta'>Shop Merch</Link>
    </nav>
  )
}
