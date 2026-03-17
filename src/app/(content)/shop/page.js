import React from 'react'
// import { shopifyFetch } from '@/app/lib/shopify'

// async function getProducts() {
//   const query = `
//     {
//       products(first: 12) {
//         edges {
//           node {
//             id
//             title
//             handle
//             priceRange {
//               minVariantPrice {
//                 amount
//                 currencyCode
//               }
//             }
//             images(first: 1) {
//               edges {
//                 node {
//                   url
//                   altText
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   const data = await shopifyFetch({ query });
//   return data.products.edges.map(edge => edge.node);
// }

export default async function Shop() {
    // const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* {products.map(product => (
          <a
            key={product.id}
            href={`/products/${product.handle}`}
            className="group border rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.images.edges[0]?.node.url}
              alt={product.images.edges[0]?.node.altText || product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="font-semibold text-xl">{product.title}</h2>
              <p className="text-2xl font-bold mt-2">
                ${product.priceRange.minVariantPrice.amount}
              </p>
            </div>
          </a>
        ))} */}
        </div>
    </div>
  )
}
