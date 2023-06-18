import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockHeader from './stockHeader'; 
import StockHero from './stockHero';
import { Link } from "react-router-dom";


const Stock = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('access_token').replace("\"", '').replace("\"", '');
    const user = JSON.parse(localStorage.getItem('user'));

    axios.get(`http://localhost:3000/product/products-by-manufacturer/${user.id}`, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="bg-beige text-gray-600 body-font">
      <StockHeader/>
      <StockHero/>
      <div className="container px-5 py-8 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.imageURL}
                />                                                                          
              </a>
              <div className="mt-4">
              {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3> */}
                <Link to={`/stockSingleProduct/${product.id}` }><h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.productName}
                </h2></Link>
                {/* <p className="mt-1">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stock;