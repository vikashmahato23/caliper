
import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/Product/ProductCard';
import Cart from './Cart';
import axios from "axios"

import "./product.css"
const Product = () => {
    const [data,setData]=useState([])
    const [cart,setCart]=useState("")
    const handleCart=(data)=>{
      setCart(data)
    }
   
     useEffect(()=>{
       axios.get("http://localhost:5000/products")
         .then(res=>{
          setData(res.data)
         }).catch(err=>{
          console.log(err)
         });
           
     },[])
    return (
      <div id="product">
        <div id="productCard">
          {data.map((e, i) => (
            <ProductCard key={i} {...e} onClick={handleCart} />
          ))}
        </div>
        <Cart cart={cart}/>
      </div>
    );
};

export default Product;