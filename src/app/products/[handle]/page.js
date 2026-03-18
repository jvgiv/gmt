import Link from 'next/link';
import { shopifyFetch } from '@/app/lib/shopify';
import ProductPurchase from '@/components/ProductPurchase';

async function getProduct(handle) {
  const query = `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 20) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
      }
    }
  `;

  const result = await shopifyFetch({ query, variables: { handle } });
  return result?.product ?? null;
}

function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode || 'USD',
  }).format(Number(amount));
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const handle = resolvedParams.handle;
  const product = await getProduct(handle);

  if (!product) {
    return (
      <section className="shop-page">
        <div className="shop-shell">
          <div className="shop-empty">
            <span className="shop-empty-label">Product Not Found</span>
            <h2 className="shop-empty-title">This item isn't available right now.</h2>
            <p className="shop-empty-copy">
              It may have been removed or isn't published yet. Check back soon!
            </p>
            <Link href="/shop" className="shop-card-link">
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const price = product.priceRange.minVariantPrice;
  const mainImage = product.images?.edges?.[0]?.node;
  const galleryImages = product.images?.edges?.slice(1) ?? [];
  const variants = product.variants?.edges ?? [];
  const variantOptions = variants.map(({ node }) => node);
  const inStockCount = variants.filter(({ node }) => node.availableForSale).length;
  const formattedPrice = formatCurrency(price.amount, price.currencyCode);

  return (
    <section className="shop-page">
      <div className="shop-shell">
        <div className="product-backdrop" />

        <div className="product-breadcrumb reveal">
          <Link href="/shop" className="shop-card-link">
            Back to GMT Store
          </Link>
        </div>

        <div className="product-layout">
          <div className="product-media reveal">
            {mainImage ? (
              <div className="product-image-frame">
                <img
                  src={mainImage.url}
                  alt={mainImage.altText || product.title}
                  className="product-main-image"
                />
                <div className="product-image-badge">GMT Merch</div>
              </div>
            ) : (
              <div className="product-image-frame product-image-fallback">
                <span>No product image available yet.</span>
              </div>
            )}

            {galleryImages.length > 0 && (
              <div className="product-gallery">
                {galleryImages.map((edge, idx) => (
                  <div key={edge.node.url || idx} className="product-gallery-card">
                    <img
                      src={edge.node.url}
                      alt={edge.node.altText || `${product.title} view ${idx + 2}`}
                      className="product-gallery-image"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="product-details reveal">
            <div className="section-label">GMT Store</div>
            <h1 className="product-title">{product.title}</h1>

            <div className="product-price-row">
              <div className="product-price">{formattedPrice}</div>
              <div className="product-status">
                {inStockCount > 0
                  ? `${inStockCount} option${inStockCount > 1 ? 's' : ''} ready to ship`
                  : 'Currently unavailable'}
              </div>
            </div>

            <div className="product-summary-card">
              <p className="product-summary">
                {product.description ||
                  'Official GMT gear built for tournament weekends, travel days, and everyday wear.'}
              </p>

              <div className="product-highlights">
                <div className="product-highlight">
                  <span className="product-highlight-label">Category</span>
                  <span className="product-highlight-value">Premium merch drop</span>
                </div>
                <div className="product-highlight">
                  <span className="product-highlight-label">Best for</span>
                  <span className="product-highlight-value">Events, travel, and daily rotation</span>
                </div>
              </div>
            </div>

            {product.descriptionHtml ? (
              <div
                className="product-description"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            ) : (
              product.description && (
                <p className="product-description-copy">{product.description}</p>
              )
            )}

            <ProductPurchase variants={variantOptions} />
            <p className="product-note">
              Need sizing or drop details? Reach out through GMT socials before you order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
