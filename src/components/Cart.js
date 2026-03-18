// 'use client';
// import { useState, useEffect } from 'react';
// import { shopifyFetch } from '../lib/shopify';

// export default function Cart() {
//   const [cart, setCart] = useState(null);
//   const [cartId, setCartId] = useState(null);

//   // Create cart on first load
//   useEffect(() => {
//     async function createCart() {
//       const query = `
//         mutation CreateCart {
//           cartCreate { cart { id checkoutUrl } }
//         }
//       `;
//       const data = await shopifyFetch({ query });
//       setCartId(data.cartCreate.cart.id);
//       setCart(data.cartCreate.cart);
//     }
//     if (!cartId) createCart();
//   }, [cartId]);

//   // Add to cart function
//   const addToCart = async (variantId) => {
//     const query = `
//       mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
//         cartLinesAdd(cartId: $cartId, lines: $lines) {
//           cart { id totalQuantity }
//         }
//       }
//     `;
//     await shopifyFetch({
//       query,
//       variables: {
//         cartId,
//         lines: [{ merchandiseId: variantId, quantity: 1 }],
//       },
//     });
//     alert('Added to cart!');
//   };

//   return (
//     <div>
//       {/* In your product page, use: <button onClick={() => addToCart(product.variants.edges[0].node.id)}>Add to Cart</button> */}
//       {cart && <p>Items in cart: {cart.totalQuantity}</p>}
//     </div>
//   );
// }