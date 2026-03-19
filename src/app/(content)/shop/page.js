import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { shopifyFetch } from '@/app/lib/shopify'

async function getProducts() {
  try {
    const query = `
      {
        products(first: 12) {
          edges {
            node {
              id
              title
              handle
              availableForSale
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `;

    const data = await shopifyFetch({ query });
    return {
      products: data?.products?.edges?.map((edge) => edge.node) ?? [],
      error: false,
    };
  } catch (error) {
    console.error('Unable to load Shopify products:', error);
    return {
      products: [],
      error: true,
    };
  }
}

export default async function Shop() {
  const { products, error } = await getProducts();

  
  return (
    <div className="shop-page">
      <div className="shop-shell">
        <div className="shop-header reveal">
          <div className="section-label">GMT Store</div>
          <h1 className="shop-title">
            Gear up with the <span>same energy</span> we bring to every event.
          </h1>
          <p className="shop-copy">
            Support our pros with their signature discs!
          </p>
          <a
            href="https://gmt.firstavailablepa.com/shop"
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Shop our Apparel
          </a>
        </div>

        {error ? (
          <div className="shop-empty">
            <span className="shop-empty-label">Store Offline</span>
            <h2 className="shop-empty-title">We couldn't load the GMT store right now.</h2>
            <p className="shop-empty-copy">
              Shopify may be temporarily unavailable. Please refresh in a moment or check back soon.
            </p>
          </div>
        ) : (
        <div className="shop-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.handle}`}
              className="shop-card reveal"
            >
              <div className="shop-card-media">
                {product.images.edges[0]?.node.url ? (
                  <Image
                    src={product.images.edges[0].node.url}
                    alt={product.images.edges[0].node.altText || product.title}
                    className="shop-card-image"
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                ) : null}
                <span className={`shop-card-tag ${product.availableForSale ? '' : 'is-sold-out'}`.trim()}>
                  {product.availableForSale ? 'GMT Merch' : 'Out of Stock'}
                </span>
              </div>

              <div className="shop-card-body">
                <h2 className="shop-card-title">{product.title}</h2>
                <div className="shop-card-footer">
                  <p className="shop-card-price">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency:
                        product.priceRange.minVariantPrice.currencyCode || 'USD',
                    }).format(product.priceRange.minVariantPrice.amount)}
                  </p>
                  <span className="shop-card-link">
                    {product.availableForSale ? 'View Product' : 'Sold Out'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        )}

        {!error && products.length === 0 ? (
          <div className="shop-empty">
            <span className="shop-empty-label">Store Update</span>
            <h2 className="shop-empty-title">No products are live right now.</h2>
            <p className="shop-empty-copy">
              Check back soon for the next merch drop.
            </p>
          </div>
        ) : null}
        </div>
    </div>
  )
}
