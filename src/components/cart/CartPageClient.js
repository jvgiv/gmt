'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/components/cart/CartProvider';

function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode || 'USD',
  }).format(Number(amount));
}

export default function CartPageClient() {
  const { cart, isLoading, refreshCart } = useCart();
  const [pendingLineId, setPendingLineId] = useState('');
  const [status, setStatus] = useState('');

  async function updateLine(lineId, quantity) {
    setPendingLineId(lineId);
    setStatus('');

    try {
      const response = await fetch('/api/cart/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lineId, quantity }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to update this line item.');
      }

      await refreshCart();
    } catch (error) {
      setStatus(error.message || 'Unable to update this line item.');
    } finally {
      setPendingLineId('');
    }
  }

  async function removeLine(lineId) {
    setPendingLineId(lineId);
    setStatus('');

    try {
      const response = await fetch('/api/cart/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lineId }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to remove this item.');
      }

      await refreshCart();
    } catch (error) {
      setStatus(error.message || 'Unable to remove this item.');
    } finally {
      setPendingLineId('');
    }
  }

  if (isLoading) {
    return (
      <div className="cart-panel">
        <p className="cart-helper">Loading your cart...</p>
      </div>
    );
  }

  if (!cart || !cart.lines.length) {
    return (
      <div className="cart-empty-state">
        <span className="shop-empty-label">Cart Empty</span>
        <h2 className="shop-empty-title">Your merch lineup is still open.</h2>
        <p className="shop-empty-copy">
          Add something from the shop and it will show up here with editable quantity controls.
        </p>
        <Link href="/shop" className="nav-cta cart-empty-cta">
          Browse the Store
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-grid">
      <div className="cart-panel">
        <div className="cart-list">
          {cart.lines.map((line) => {
            const merchandise = line.merchandise;
            const linePrice = merchandise?.price;
            const lineCost = line.cost;
            const isPending = pendingLineId === line.id;

            return (
              <article key={line.id} className="cart-line">
                <div className="cart-line-media">
                  {merchandise?.image?.url ? (
                    <img
                      src={merchandise.image.url}
                      alt={merchandise.image.altText || merchandise.product?.title || 'Cart item'}
                      className="cart-line-image"
                    />
                  ) : (
                    <div className="cart-line-image cart-line-image-fallback">GMT</div>
                  )}
                </div>

                <div className="cart-line-content">
                  <div className="cart-line-copy">
                    <p className="cart-line-kicker">{merchandise?.product?.title}</p>
                    {merchandise?.product?.handle ? (
                      <Link
                        href={`/products/${merchandise.product.handle}`}
                        className="cart-line-title"
                      >
                        {merchandise.title === 'Default Title'
                          ? merchandise.product.title
                          : `${merchandise.product.title} - ${merchandise.title}`}
                      </Link>
                    ) : (
                      <h2 className="cart-line-title">
                        {merchandise?.title || 'Product option'}
                      </h2>
                    )}
                    <p className="cart-line-unit">
                      {linePrice
                        ? `${formatCurrency(linePrice.amount, linePrice.currencyCode)} each`
                        : ''}
                    </p>
                  </div>

                  <div className="cart-line-actions">
                    <div className="product-quantity-picker">
                      <button
                        type="button"
                        className="product-quantity-button"
                        onClick={() => updateLine(line.id, Math.max(1, line.quantity - 1))}
                        disabled={line.quantity <= 1 || isPending}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="product-quantity-value">{line.quantity}</span>
                      <button
                        type="button"
                        className="product-quantity-button"
                        onClick={() => updateLine(line.id, line.quantity + 1)}
                        disabled={isPending}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-remove-button"
                      onClick={() => removeLine(line.id)}
                      disabled={isPending}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-line-total">
                  {lineCost ? formatCurrency(lineCost.amount, lineCost.currencyCode) : ''}
                </div>
              </article>
            );
          })}
        </div>

        <p className={`product-cart-message ${status ? 'is-error' : ''}`.trim()}>
          {status || 'Update quantities here before checkout.'}
        </p>
      </div>

      <aside className="cart-summary">
        <div className="section-label">Cart Summary</div>
        <h2 className="cart-summary-title">Ready For Checkout</h2>
        <div className="cart-summary-row">
          <span>Items</span>
          <span>{cart.totalQuantity}</span>
        </div>
        <div className="cart-summary-row">
          <span>Subtotal</span>
          <span>
            {cart.cost?.subtotalAmount
              ? formatCurrency(
                  cart.cost.subtotalAmount.amount,
                  cart.cost.subtotalAmount.currencyCode
                )
              : '--'}
          </span>
        </div>
        <div className="cart-summary-row is-total">
          <span>Total</span>
          <span>
            {cart.cost?.totalAmount
              ? formatCurrency(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode)
              : '--'}
          </span>
        </div>
        <a
          href={cart.checkoutUrl || '#'}
          className="product-cta cart-checkout"
          target="_blank"
          rel="noreferrer"
        >
          Checkout
        </a>
        <Link href="/shop" className="shop-card-link cart-continue-link">
          Continue Shopping
        </Link>
      </aside>
    </div>
  );
}
