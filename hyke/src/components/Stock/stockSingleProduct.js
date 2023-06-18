import React, { useState, useEffect } from 'react';
import StockHeader from './stockHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import axios from 'axios';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StockSingleProduct = () => {
  const [demand, setDemand] = useState(null);
  const [product, setProduct] = useState({});
  const [displayText, setDisplayText] = useState('Forecast Demand!');

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
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

  // Replace with your actual price


  const handleForecastDemand = () => {
    // Perform your logic to calculate the forecast demand and price here
    // For demonstration, let's set them to random numbers
    const token = localStorage.getItem('access_token').replace("\"", '').replace("\"", '');
    setDisplayText('Calculating...');
    axios.get(`http://localhost:3000/product/recommendation/?apiKey=7c0bf1b8fa492d30b3a40079411f1a61836b6834626838131608536648a39a1e&productId=${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(response => {
        console.log(response.data);
        setDemand(response.data.result);
        console.log(demand);
        setDisplayText('Forecast Demand!');
      })
      .catch(error => {
        console.error(error);
      });

  };

  const renderArrow = () => {
    if (demand > product.pastSales) {
      return <FaArrowUp className="ml-2 text-green-500" style={{ marginTop: '3%', fontSize: '26', color: 'green'}}/>;
    } else if (demand < product.pastSales) {
      return <FaArrowDown className="ml-2 text-red-500" style={{ marginTop: '3%', fontSize: '26', color: 'red'}} />;
    }
    return null;
  };

  return (
    <section className="bg-beige ph-8 text-gray-600 body-font">
      <StockHeader />
      <div className="bg-beige container py-20 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product && product.imageURL}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-5xl title-font font-medium mb-1 pb-10">{product.productName}</h1>

            <p className="leading-relaxed text-xl">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="items-center">
                <div className="title-font text-xl font-medium text-gray-900">Active Stock: {product.activeStock}</div>
                <div className="title-font text-xl font-medium text-gray-900">Past Sales: {product.pastSales}</div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-bold text-3xl text-gray-900">${product.price}</span>
            </div>
            <div className="flex mt-6 items-center pb-0 border-b-2 border-gray-100 mb-5" />
            {/* <div className="title-font text-xl font-medium text-gray-900">Forecast Demand</div> */}
            <div className="flex items-center pt-3">
              <button
                className="inline-flex text-blue bg-gray border-2 py-2 px-6 font-bold focus:outline-none rounded text-lg mr-5"
                onClick={handleForecastDemand}
              >
                {displayText}
              </button>
              <div className="flex items-center">
                <div className="text-3xl text-gray-900 font-bold">
                    {demand !== null && (
                    <>
                        {demand}
                    </>
                    )}
                </div>
                {demand !== null && renderArrow()}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockSingleProduct;


