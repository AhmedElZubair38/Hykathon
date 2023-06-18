// import React from 'react';
// import StockHeader from './stockHeader';
// import { FaArrowRight } from 'react-icons/fa';

// const StockSingleProduct = () => {
//   return (
//     <section className="bg-beige ph-8 text-gray-600 body-font">
//       <StockHeader />
//       <div className="bg-beige container py-20 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <img
//             alt="ecommerce"
//             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//             src="https://dummyimage.com/400x400"
//           />
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h1 className="text-gray-900 text-5xl title-font font-medium mb-1 pb-10">The Catcher in the Rye</h1>
            
//             <p className="leading-relaxed text-xl">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//             <div className="items-center">
//                 <div className="title-font text-xl font-medium text-gray-900">Stock: {10}</div>
//                 <div className="title-font text-xl font-medium text-gray-900">Current Stock: {100}</div>
//             </div>
//             </div>
//             <div className="flex">
//               <span className="title-font font-medium text-3xl text-gray-900">$58.00</span>
//             </div>
//             <div className="flex mt-6 items-center pb-0 border-b-2 border-gray-100 mb-5"/>
//             {/* <div className="title-font text-xl font-medium text-gray-900">Forecast Demand</div> */}
//             <button className="inline-flex text-blue bg-gray border-0 py-2 px-6 focus:outline-none rounded text-lg"> Forecast Demand!
//                 <FaArrowRight className="ml-2" style={{ marginTop: '3%', fontSize: '18' }} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default StockSingleProduct;

import React, { useState } from 'react';
import StockHeader from './stockHeader';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StockSingleProduct = () => {
  const [demand, setDemand] = useState(null);
  const [forecastedPrice, setForecastedPrice] = useState(null);
  const actualPrice = 58.00; // Replace with your actual price

  const handleForecastDemand = () => {
    // Perform your logic to calculate the forecast demand and price here
    // For demonstration, let's set them to random numbers
    const randomDemand = Math.floor(Math.random() * 100) + 1;
    const randomPrice = Math.random() * 100;
    setDemand(randomDemand);
    setForecastedPrice(randomPrice);
  };

  const renderArrow = () => {
    if (forecastedPrice > actualPrice) {
      return <FaArrowUp className="ml-2 text-green-500" style={{ marginTop: '3%', fontSize: '26', color: 'green'}}/>;
    } else if (forecastedPrice < actualPrice) {
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
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-5xl title-font font-medium mb-1 pb-10">The Catcher in the Rye</h1>

            <p className="leading-relaxed text-xl">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="items-center">
                <div className="title-font text-xl font-medium text-gray-900">Stock: {10}</div>
                <div className="title-font text-xl font-medium text-gray-900">Current Stock: {100}</div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-bold text-3xl text-gray-900">${actualPrice.toFixed(2)}</span>
            </div>
            <div className="flex mt-6 items-center pb-0 border-b-2 border-gray-100 mb-5" />
            {/* <div className="title-font text-xl font-medium text-gray-900">Forecast Demand</div> */}
            <div className="flex items-center pt-3">
              <button
                className="inline-flex text-blue bg-gray border-2 py-2 px-6 font-bold focus:outline-none rounded text-lg mr-5"
                onClick={handleForecastDemand}
              >
                Forecast Demand!
              </button>
              <div className="flex items-center">
                <div className="text-3xl text-gray-900 font-bold">
                    {forecastedPrice !== null && (
                    <>
                        {forecastedPrice.toFixed(2)}
                    </>
                    )}
                </div>
                {forecastedPrice !== null && renderArrow()}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockSingleProduct;


