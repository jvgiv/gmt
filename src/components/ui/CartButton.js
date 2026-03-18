'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart/CartProvider';

export default function CartButton({ className = '', onClick, mobile = false }) {
  const { cartCount } = useCart();
  const classes = [className, mobile ? 'nav-cart-button-mobile' : 'nav-cart-button']
    .filter(Boolean)
    .join(' ');

  return (
    <Link href="/cart" className={classes} onClick={onClick}>
      <span>Cart</span>
      <span className="nav-cart-count">{cartCount}</span>
    </Link>
  );
}
