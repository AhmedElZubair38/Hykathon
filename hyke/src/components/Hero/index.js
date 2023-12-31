import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';


function Hero() {


  const [user, setUser] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <section className="bg-beige text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-6xl mb-4 font-bold text-blue">Hey, {user.name}!</h1>
      <p className="mb-8 leading-relaxed text-lg"> Suggested products based on your shopping below!</p>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-blue bg-gray border-0 py-2 px-6 focus:outline-none rounded text-lg">Edit and View my Stock
        <FaArrowRight className="ml-2" style={{ marginTop: '3%', fontSize: '18' }} />
        </button> */}
      </div>
    </div>
    {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div> */}
  </div>
</section>
  )
}

export default Hero