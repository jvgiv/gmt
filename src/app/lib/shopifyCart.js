import { shopifyFetch } from '@/app/lib/shopify';

const CART_FRAGMENT = `
  fragment CartDetails on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 50) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              availableForSale
              image {
                url
                altText
              }
              price {
                amount
                currencyCode
              }
              product {
                title
                handle
              }
            }
          }
        }
      }
    }
  }
`;

const CREATE_CART_MUTATION = `
  ${CART_FRAGMENT}
  mutation CreateCart {
    cartCreate {
      cart {
        ...CartDetails
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const GET_CART_QUERY = `
  ${CART_FRAGMENT}
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ...CartDetails
    }
  }
`;

const ADD_LINES_MUTATION = `
  ${CART_FRAGMENT}
  mutation AddLines($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartDetails
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const UPDATE_LINES_MUTATION = `
  ${CART_FRAGMENT}
  mutation UpdateLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartDetails
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const REMOVE_LINES_MUTATION = `
  ${CART_FRAGMENT}
  mutation RemoveLines($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartDetails
      }
      userErrors {
        field
        message
      }
    }
  }
`;

function unwrapMutationResult(result, key) {
  const payload = result?.[key];
  const userError = payload?.userErrors?.[0];

  if (userError) {
    throw new Error(userError.message);
  }

  return payload?.cart ?? null;
}

export function serializeCart(cart) {
  if (!cart) {
    return null;
  }

  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    totalQuantity: cart.totalQuantity || 0,
    cost: {
      subtotalAmount: cart.cost?.subtotalAmount ?? null,
      totalAmount: cart.cost?.totalAmount ?? null,
    },
    lines:
      cart.lines?.edges?.map(({ node }) => ({
        id: node.id,
        quantity: node.quantity,
        cost: node.cost?.totalAmount ?? null,
        merchandise: node.merchandise
          ? {
              id: node.merchandise.id,
              title: node.merchandise.title,
              availableForSale: node.merchandise.availableForSale,
              image: node.merchandise.image ?? null,
              price: node.merchandise.price ?? null,
              product: node.merchandise.product
                ? {
                    title: node.merchandise.product.title,
                    handle: node.merchandise.product.handle,
                  }
                : null,
            }
          : null,
      })) ?? [],
  };
}

export async function createCart() {
  const data = await shopifyFetch({ query: CREATE_CART_MUTATION });
  return unwrapMutationResult(data, 'cartCreate');
}

export async function getCart(cartId) {
  if (!cartId) {
    return null;
  }

  const data = await shopifyFetch({
    query: GET_CART_QUERY,
    variables: { cartId },
  });

  return data?.cart ?? null;
}

export async function addCartLines(cartId, lines) {
  const data = await shopifyFetch({
    query: ADD_LINES_MUTATION,
    variables: { cartId, lines },
  });

  return unwrapMutationResult(data, 'cartLinesAdd');
}

export async function updateCartLines(cartId, lines) {
  const data = await shopifyFetch({
    query: UPDATE_LINES_MUTATION,
    variables: { cartId, lines },
  });

  return unwrapMutationResult(data, 'cartLinesUpdate');
}

export async function removeCartLines(cartId, lineIds) {
  const data = await shopifyFetch({
    query: REMOVE_LINES_MUTATION,
    variables: { cartId, lineIds },
  });

  return unwrapMutationResult(data, 'cartLinesRemove');
}
