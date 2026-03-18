import CartPageClient from '@/components/cart/CartPageClient';

export default function CartPage() {
  return (
    <section className="shop-page">
      <div className="shop-shell">
        <div className="shop-header reveal">
          <div className="section-label">GMT Store</div>
          <h1 className="shop-title">
            Your <span>cart</span>, ready when you are.
          </h1>
          <p className="shop-copy">
            Review your merch lineup, adjust quantities, and head to secure Shopify checkout.
          </p>
        </div>

        <CartPageClient />
      </div>
    </section>
  );
}
