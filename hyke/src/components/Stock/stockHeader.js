import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

const StockHeader = () => {
  const [isManufacturer, setIsManufacturer] = useState("");

useEffect(() => {
  const res = localStorage.getItem('role').toLowerCase() === 'manufacturer' ? true : false
  setIsManufacturer(res);
}, []);


  return (
    <header className="bg-black text-gray-600 body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap p-12 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-blue mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="blue" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-blue p-2 bg-blue rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-5 text-3xl">SynapTech</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    {isManufacturer ? <Link to="./../"><button className="mr-5 hover:text-beige font-bold text-xl text-blue">Go Back</button></Link> : <div></div>}
      {/* <button className="mr-5 hover:text-[#158900] font-bold underline text-xl text-[#39FF14]">Manufacturer Account</button> */}
      <Link to="login"><button className="mr-5 hover:text-[#591d1d] font-bold underline text-xl text-[#B23B3B]">Logout</button></Link>
    </nav>
    {/* <button className="bg-gray-500 hover:bg-[#FFFFFF] text-blue font-bold py-2 px-4 rounded">
      <FaUser className="w-6 h-6 text-blue" />
    </button> */}
  </div>
</header>
  )
}

export default StockHeader