// import React from 'react';
// import productsData from './products.json';

// const Products = () => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-8 pb-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {productsData.map((product) => (
//             <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
//               <a className="block relative h-48 rounded overflow-hidden">
//                 <img
//                   alt="ecommerce"
//                   className="object-cover object-center w-full h-full block"
//                   src={product.image}
//                 />                                                                          
//               </a>
//               <div className="mt-4">
//                 <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//                   {product.category}
//                 </h3>
//                 <h2 className="text-gray-900 title-font text-lg font-medium">
//                   {product.title}
//                 </h2>
//                 <p className="mt-1">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import productsData from './products.json';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/product/feed', { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIzNjNiOWQ3MC1lNjlmLTQ0ZDMtYWQ5Ni1jOGM5ODU0NWQ1NTgiLCJ0eXBlIjoibWFudWZhY3R1cmVyIiwiaWF0IjoxNjg3MDA4NjI3fQ.7Iw_Q6VdeD7YS-hdiIkOGOQSFJKrTlHlb-Bt4HSvYuY`} })
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="bg-beige text-gray-600 body-font">
      <div className="container px-5 py-8 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block aspect-w-3 aspect-h-2">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full rounded-lg"
                    src={product.imageURL}
                  />
                  {/* <div className="absolute top-2 left-2 bg-white text-gray-700 rounded-full p-2">
                    <span className="text-sm">{product.category}</span>
                  </div> */}
                </a>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                  {product.productName}
                </h2>
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
