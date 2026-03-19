"use client";

import React, { useState } from "react";
import Link from "next/link";
import CartButton from "@/components/ui/CartButton";

const navItems = [
  { href: "/events", label: "Events" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={menuOpen ? "nav-open" : ""}>
      <Link className="nav-logo" href="/" onClick={closeMenu}>
        <span></span>
        GMT
      </Link>

      <button
        type="button"
        className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        id="primary-navigation"
        className={`nav-menu ${menuOpen ? "is-open" : ""}`}
      >
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/shop"
          className="nav-cta nav-cta-mobile"
          onClick={closeMenu}
        >
          Shop Merch
        </Link>
        <CartButton className="nav-cart-button nav-cart-button-mobile" onClick={closeMenu} mobile />
      </div>

      <div className="nav-actions">
        <CartButton className="nav-cart-button nav-cart-button-desktop" onClick={closeMenu} />
        <Link
          href="/shop"
          className="nav-cta nav-cta-desktop"
          onClick={closeMenu}
        >
          Shop Discs
        </Link>
      </div>
    </nav>
  );
}
