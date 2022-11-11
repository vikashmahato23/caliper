import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import {Services} from '../pages/Services';

const Allrouter = () => {
    return (
        
            
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
             <Route path="/products" element={<Product/>}/>
        </Routes>
        </>
    );
};

export default Allrouter;