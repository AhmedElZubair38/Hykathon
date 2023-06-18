
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


import productsData from './products.json';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('C:\Users\USER\Documents\PROJECT\Hykathon\hyke\src\components\Stock\products.json', { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIzNjNiOWQ3MC1lNjlmLTQ0ZDMtYWQ5Ni1jOGM5ODU0NWQ1NTgiLCJ0eXBlIjoibWFudWZhY3R1cmVyIiwiaWF0IjoxNjg3MDA4NjI3fQ.7Iw_Q6VdeD7YS-hdiIkOGOQSFJKrTlHlb-Bt4HSvYuY`} })
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="bg-beige text-gray-600 body-font">
      <div className="container px-5 py-8 pb-24 mx-auto cursor-pointer">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block aspect-w-3 aspect-h-2">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full rounded-lg"
                    src={product.imageURL}
                    style={{ width: '280px', height: '150px' }} // Adjust the width and height as needed
                  />
                </a>
              </div>
              <div className="mt-4">
              <Link to="product"><h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                  {product.productName}
                </h2></Link>
                <p className="text-gray-700 text-xl font-semibold mb-4">{product.price}</p>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 text-base mr-1">Active Stock:</span>
                    <p className="text-gray-900 font-medium">{product.activeStock}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-base mr-1">Manufacturer:</span>
                    <p className="text-gray-900 font-medium">{product.manufacturer.name}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 text-base mr-1">Manufacturer Rating:</span>
                  <div className="flex items-center">
                    <p className="text-yellow-500 text-lg font-semibold mr-1">
                      {product.manufacturer.rating}
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
