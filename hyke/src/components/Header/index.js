import React from 'react'
import { FaUser } from 'react-icons/fa';


const Header = () => {
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
      <a className="mr-5 hover:text-[#FFFFFF] font-bold text-xl text-blue">My Stock</a>
      <a className="mr-5 hover:text-[#FFFFFF] font-bold text-xl text-blue">Forecast</a>
      <a className="mr-5 hover:text-[#B23B3B] font-bold underline text-xl text-[#B23B3B]">Logout</a>
    </nav>
    <button className="bg-gray-500 hover:bg-[#FFFFFF] text-blue font-bold py-2 px-4 rounded">
      <FaUser className="w-6 h-6 text-blue" />
    </button>
  </div>
</header>
  )
}

export default Header