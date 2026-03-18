const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const version = process.env.SHOPIFY_STOREFRONT_API_VERSION;

const endpoint = `https://${domain}/api/${version}/graphql.json`;

export async function shopifyFetch({ query, variables = {} }) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token,
      },
      body: JSON.stringify({ query, variables }),
      cache: 'no-store', // change to 'force-cache' for production
    });

    const result = await response.json();
    if (result.errors) {
      console.error(result.errors);
      throw new Error('Shopify API error');
    }
    return result.data;
  } catch (error) {
    console.error('Shopify fetch error:', error);
    throw error;
  }
}
