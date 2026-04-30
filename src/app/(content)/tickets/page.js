import Link from 'next/link';
import Image from 'next/image';
import { shopifyFetch } from '@/app/lib/shopify';

const EVENT_TICKET_CATEGORIES = ['Event Ticket', 'Event Tickets'];
const TICKET_PRODUCT_TYPE = 'Ticket';

function matchesTicketProduct(product) {
  const categoryName = product?.category?.name?.trim().toLowerCase();
  const productType = product?.productType?.trim().toLowerCase();

  return (
    EVENT_TICKET_CATEGORIES.some((category) => category.toLowerCase() === categoryName) ||
    productType === TICKET_PRODUCT_TYPE.toLowerCase()
  );
}

function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode || 'USD',
  }).format(Number(amount));
}

async function getTicketProducts() {
  try {
    const query = `
      query getTicketProducts($query: String!) {
        products(first: 24, query: $query, sortKey: CREATED_AT, reverse: true) {
          edges {
            node {
              id
              title
              handle
              productType
              availableForSale
              category {
                id
                name
              }
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

    const data = await shopifyFetch({
      query,
      variables: {
        query: `product_type:${TICKET_PRODUCT_TYPE} OR tag:"${EVENT_TICKET_CATEGORIES[0]}" OR tag:"${EVENT_TICKET_CATEGORIES[1]}"`,
      },
    });
    const products = data?.products?.edges?.map((edge) => edge.node) ?? [];

    return {
      products: products.filter(matchesTicketProduct),
      error: false,
    };
  } catch (error) {
    console.error('Unable to load Shopify tickets:', error);
    return {
      products: [],
      error: true,
    };
  }
}

export default async function Tickets() {
  const { products, error } = await getTicketProducts();

  return (
    <section className="shop-page">
      <div className="shop-shell">
        <div className="shop-header reveal">
          <div className="section-label">GMT Tickets</div>
          <h1 className="shop-title">
            Grab tickets for the <span>next GMT event</span>.
          </h1>
          <p className="shop-copy">
            Browse currently available event tickets from the GMT store.
          </p>
        </div>

        {error ? (
          <div className="shop-empty">
            <span className="shop-empty-label">Tickets Offline</span>
            <h2 className="shop-empty-title">We could not load tickets right now.</h2>
            <p className="shop-empty-copy">
              Shopify may be temporarily unavailable. Please refresh in a moment or check back soon.
            </p>
          </div>
        ) : (
          <div className="shop-grid">
            {products.map((product) => {
              const image = product.images.edges[0]?.node;
              const price = product.priceRange.minVariantPrice;

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.handle}`}
                  className="shop-card reveal"
                >
                  <div className="shop-card-media">
                    {image ? (
                      <Image
                        src={image.url}
                        alt={image.altText || product.title}
                        className="shop-card-image"
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                    ) : null}
                    <span className={`shop-card-tag ${product.availableForSale ? '' : 'is-sold-out'}`.trim()}>
                      {product.availableForSale ? 'Event Ticket' : 'Sold Out'}
                    </span>
                  </div>

                  <div className="shop-card-body">
                    <h2 className="shop-card-title">{product.title}</h2>
                    <div className="shop-card-footer">
                      <p className="shop-card-price">
                        {formatCurrency(price.amount, price.currencyCode)}
                      </p>
                      <span className="shop-card-link">
                        {product.availableForSale ? 'View Ticket' : 'Sold Out'}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {!error && products.length === 0 ? (
          <div className="shop-empty">
            <span className="shop-empty-label">Tickets Update</span>
            <h2 className="shop-empty-title">No event tickets are live right now.</h2>
            <p className="shop-empty-copy">
              Check back soon for the next GMT ticket release.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
