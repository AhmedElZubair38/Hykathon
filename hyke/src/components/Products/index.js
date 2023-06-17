import React from 'react';
import productsData from './products.json';

const Products = () => {
  return (
    <section className="bg-beige text-gray-600 body-font">
      <div className="container px-5 py-8 pb-24 mx-auto cursor-pointer">
        <div className="flex flex-wrap -m-4">
          {productsData.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block aspect-w-3 aspect-h-2">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full rounded-lg"
                    src={product.image}
                  />
                  {/* <div className="absolute top-2 left-2 bg-white text-gray-700 rounded-full p-2">
                    <span className="text-sm">{product.category}</span>
                  </div> */}
                </a>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-700 text-xl font-semibold mb-4">{product.price}</p>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 text-base mr-1">Active Stock:</span>
                    <p className="text-gray-900 font-medium">{product.activeStock}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-base mr-1">Shipper:</span>
                    <p className="text-gray-900 font-medium">{product.shipperName}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 text-base mr-1">Shipper Rating:</span>
                  <div className="flex items-center">
                    <p className="text-yellow-500 text-lg font-semibold mr-1">
                      {product.shipperRating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
