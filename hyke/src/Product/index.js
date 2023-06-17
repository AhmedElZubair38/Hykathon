// import React from 'react'
// import Header from '../components/Header'


// const Product = () => {
//   return (
//     <section class="bg-beige ph-8 text-gray-600 body-font overflow-hidden">
//       <Header/>  
//   <div class="container px-5 py-24 mx-auto">
//     <div class="lg:w-4/5 mx-auto flex flex-wrap">
//       <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
//       <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
//         <div class="flex mb-4">
//           <span class="flex items-center">
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <span class="text-gray-600 ml-3">4 Reviews</span>
//           </span>
//           <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"/>

//         </div>
//         <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
//         <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//         </div>
//         <div class="flex">
//           <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }

// export default Product

import React from 'react';
import Header from '../components/Header';

const Product = () => {
  return (
    <section className="bg-beige ph-8 text-gray-600 body-font">
      <Header />
      <div className="container py-20 mx-auto">
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
                <div className="title-font text-xl font-medium text-gray-900">Stock: 10</div>
                <div className="title-font text-xl font-medium text-gray-900">Part Sales: 100</div>
            </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-3xl text-gray-900">$58.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
