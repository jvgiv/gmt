import React from 'react'
import Link from 'next/link'
import { shopifyFetch } from '@/app/lib/shopify'

async function getProducts() {
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
  return data.products.edges.map(edge => edge.node);
}

export default async function Shop() {
  const products = await getProducts();

  
  return (
    <div className="shop-page">
      <div className="shop-shell">
        <div className="shop-header reveal">
          <div className="section-label">GMT Store</div>
          <h1 className="shop-title">
            Gear up with the <span>same energy</span> we bring to every event.
          </h1>
          <p className="shop-copy">
            Explore the latest GMT merch and support the team with apparel and
            gear built for tournament days, travel weekends, and everyday wear.
          </p>
        </div>

        <div className="shop-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.handle}`}
              className="shop-card reveal"
            >
              <div className="shop-card-media">
                <img
                  src={product.images.edges[0]?.node.url}
                  alt={product.images.edges[0]?.node.altText || product.title}
                  className="shop-card-image"
                />
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

        {products.length === 0 ? (
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
