'use client';

import { useMemo, useState } from 'react';
import { useCart } from '@/components/cart/CartProvider';

function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode || 'USD',
  }).format(Number(amount));
}

export default function ProductPurchase({ variants }) {
  const { refreshCart } = useCart();
  const availableVariants = useMemo(
    () => variants.filter((variant) => variant.availableForSale),
    [variants]
  );
  const [selectedVariantId, setSelectedVariantId] = useState(
    availableVariants[0]?.id ?? variants[0]?.id ?? ''
  );
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedVariant =
    variants.find((variant) => variant.id === selectedVariantId) ?? variants[0] ?? null;
  const isAvailable = Boolean(selectedVariant?.availableForSale);
  const maxQuantity = isAvailable ? 10 : 1;

  function decrementQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function incrementQuantity() {
    setQuantity((current) => Math.min(maxQuantity, current + 1));
  }

  async function handleAddToCart() {
    if (!selectedVariant || !isAvailable) {
      setStatus({ type: 'error', message: 'This option is currently unavailable.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          variantId: selectedVariant.id,
          quantity,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to add this item to your cart right now.');
      }

      await refreshCart();
      setStatus({
        type: 'success',
        message: `${quantity} item${quantity > 1 ? 's were' : ' was'} added to your cart.`,
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to add this item to your cart right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!variants.length) {
    return null;
  }

  return (
    <div className="product-purchase">
      <div className="product-control-group">
        <label htmlFor="product-variant" className="product-control-label">
          Choose Option
        </label>
        <select
          id="product-variant"
          className="product-select"
          value={selectedVariantId}
          onChange={(event) => {
            setSelectedVariantId(event.target.value);
            setQuantity(1);
            setStatus({ type: 'idle', message: '' });
          }}
        >
          {variants.map((variant) => (
            <option key={variant.id} value={variant.id} disabled={!variant.availableForSale}>
              {variant.title} - {formatCurrency(variant.price.amount, variant.price.currencyCode)}
              {!variant.availableForSale ? ' (Sold out)' : ''}
            </option>
          ))}
        </select>
      </div>

      <div className="product-purchase-row">
        <div className="product-control-group">
          <span className="product-control-label">Quantity</span>
          <div className="product-quantity-picker">
            <button
              type="button"
              className="product-quantity-button"
              onClick={decrementQuantity}
              disabled={quantity <= 1 || isSubmitting}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="product-quantity-value">{quantity}</span>
            <button
              type="button"
              className="product-quantity-button"
              onClick={incrementQuantity}
              disabled={!isAvailable || quantity >= maxQuantity || isSubmitting}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <div className="product-purchase-meta">
          <span className="product-purchase-price">
            {selectedVariant
              ? formatCurrency(selectedVariant.price.amount, selectedVariant.price.currencyCode)
              : ''}
          </span>
          <span className="product-purchase-stock">
            {isAvailable ? 'Ready to add' : 'Sold out'}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="product-cta"
        onClick={handleAddToCart}
        disabled={!isAvailable || isSubmitting}
      >
        {isSubmitting ? 'Adding...' : `Add ${quantity} to Cart`}
      </button>

      <p
        className={`product-cart-message ${
          status.type === 'success'
            ? 'is-success'
            : status.type === 'error'
              ? 'is-error'
              : ''
        }`.trim()}
      >
        {status.message || 'Select an option and quantity before adding to cart.'}
      </p>
    </div>
  );
}
