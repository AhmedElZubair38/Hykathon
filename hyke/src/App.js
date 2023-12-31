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
        <Route path="/" element={ <Login/> } />
        <Route path="/stock" element={ <Stock/> } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/stock/login' element={<Login/>}/>
        <Route path='/stock/stockSingleProduct/login' element={<Login/>}/>
        <Route path="/product/:id" element={<Product key=""/>} />

        <Route path='/stockSingleProduct/:id' element={<StockSingleProduct/>}/>
      </Routes>


    </div>
  );
}

export default App;
