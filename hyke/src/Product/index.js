
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import axios from 'axios';
import Header from '../components/Header';

const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log("useEffect");
    const token = localStorage.getItem('access_token').replace("\"", '').replace("\"", '');

    axios.get(`http://localhost:3000/product/product-by-id/${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
        console.log(product);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <section className="bg-beige ph-8 text-gray-600 body-font">
      <Header />
      <div className="bg-beige container py-20 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product && product.imageURL}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-5xl title-font font-medium mb-1 pb-10">{product.productName}</h1>
            
            <p className="leading-relaxed text-xl">
              {product && product.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="items-center">
                <div className="title-font text-xl font-medium text-gray-900">Stock: {product.activeStock}</div>
                <div className="title-font text-xl font-medium text-gray-900">Previous Month Sales: {product.pastSales}</div>
            </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-3xl text-gray-900">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
