// ProductList.js
import React from 'react';

const ProductList = ({ products, maxProducts }) => {
  const displayedProducts = products.slice(0, maxProducts);

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {displayedProducts.map((product, index) => (
          <li key={index} className="group block overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            {/* Render product image */}
            <img src={product.image} alt={product.title} className="w-full h-auto object-cover" />
            {/* Render product details */}
            <div className="relative bg-white p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.processor}</p>
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">{product.videoCard}</h3>
              <p className="text-gray-600">{product.case}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
