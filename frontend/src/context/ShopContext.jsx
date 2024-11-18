import React, { createContext, useEffect, useState } from "react";

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_products] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/all_products")
      .then((respon) => respon.json())
      .then((data) => setAll_products(data));

      if (localStorage.getItem("auth-token")){
        fetch('http://localhost:4000/getcart',{
          method:"POST",
          
            headers:{
            Accept :"application/form-data",
            'auth-token':`${localStorage.getItem('auth-token')}`,
            "Content-Type":"application/json",
            },
            body:""
        }).then((res)=> res.json())
        .then((data)=> setCartIteams(data))
      }

      }, []);

  const [cartItems, setCartIteams] = useState(getDefaultCart());

  const addToCart =  async (itemId) => {
    setCartIteams((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
if (localStorage.getItem("auth-token")){
  fetch('http://localhost:4000/addtocart',{
    method:"POST",
    
      headers:{
      Accept :"application/form-data",
      'auth-token':`${localStorage.getItem('auth-token')}`,
      "Content-Type":"application/json",
      },
      body:JSON.stringify({"itemId":itemId})
  }).then((res)=> res.json())
  .then((data)=> console.log(data))
}
    
};
  const RemoveCart = (itemId) => {
    setCartIteams((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")){
      fetch('http://localhost:4000/Removefromcart',{
        method:"POST",
        
          headers:{
          Accept :"application/form-data",
          'auth-token':`${localStorage.getItem('auth-token')}`,
          "Content-Type":"application/json",
          },
          body:JSON.stringify({"itemId":itemId})
      }).then((res)=> res.json())
      .then((data)=> console.log(data))
    }
  }

  const getTotalCartAmont = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalcartItems = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalcartItems,
    getTotalCartAmont,
    all_product,
    cartItems,
    addToCart,
    RemoveCart,
  };
  console.log(cartItems);

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default ShopContextProvider;
