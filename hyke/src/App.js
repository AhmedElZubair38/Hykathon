import React from 'react';
import './App.css';
import Home from './modules/Home';
import Stock from './components/Stock/stock';
import Login from './components/Login/login';
import Product from './Product/index';
import StockSingleProduct from './components/Stock/stockSingleProduct';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>      
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/stock" element={ <Stock/> } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/stock/stockSingleProduct' element={<StockSingleProduct/>}/>
      </Routes>


    </div>
  );
}

export default App;
