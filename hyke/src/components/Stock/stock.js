import React from 'react';
import productsData from './products.json';
import StockHeader from './stockHeader'; 
import StockHero from './stockHero';
import { Link } from "react-router-dom";


const Stock = () => {
  return (
    <section className="bg-beige text-gray-600 body-font">
      <StockHeader/>
      <StockHero/>
      <div className="container px-5 py-8 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {productsData.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />                                                                          
              </a>
              <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <Link to="stockSingleProduct"><h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2></Link>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stock;