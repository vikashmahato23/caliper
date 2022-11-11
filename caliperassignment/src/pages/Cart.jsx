import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
    const [data, setData] = useState([]);
    const[quan,setQuan]=useState([])
    const[total,setTotal]=useState()
    const [chnage,setChange]=useState("")
    useEffect(() => {
      axios
        .get("http://localhost:5000/carts")
        .then((res) => {
          var arr=[]
          for(var i=0; i<res.data?.length; i++)
           setData(res.data);

        })
        .catch((err) => {
          console.log(err);
        });
    }, [cart,chnage]);
    return (
      <div className="Cart">
        <div className="cartCon">
          <table>
            {data.length > 0 ? (
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quan</th>
                  <th>total</th>
                  <th></th>
                </tr>
              </thead>
            ) : null}
            <tbody>
              {data
                ? data.map((e, i) => (
                    <tr key={i}>
                      <td>
                        <img
                          style={{ width: "100px", alignContent: "center" }}
                          src={e.image}
                          alt=""
                        />
                      </td>
                      <td style={{ width: "30px" }}>{e.brand}</td>
                      <td style={{ textAlign: "center" }}>{e.price}</td>
                      <td>
                        <button
                          onClick={() => {
                            setQuan(quan + 1);
                          }}
                        >
                          +
                        </button>
                        {quan}
                        <button
                          onClick={() => {
                            if(quan>1){
                              setQuan(quan - 1);
                            }
                            
                          }}
                        >
                          -
                        </button>
                      </td>
                      <td>565</td>
                      <td className="cross">
                        <img
                          onClick={() => {
                            axios
                              .delete(`http://localhost:5000/carts/${e._id}`)
                              .then((res) => {
                                setChange(e._id);
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }}
                          style={{ width: "40%" }}
                          src="https://img.icons8.com/material-outlined/2x/multiply.png"
                          alt=""
                        />
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Cart;