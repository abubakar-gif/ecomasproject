import React, { useContext, useEffect } from "react";
import "./CartItems.css";
import { Shopcontext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
export default function CartItems() {
  const { getTotalCartAmont,all_product,  cartItems, addToCart, RemoveCart } = useContext(Shopcontext);
  
  console.log(getTotalCartAmont())


  return (
    <div className="CartItems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, i) => {
        //console.log(cartItems[e.id]);
        if (cartItems[e.id] > 0) {
          return (
            <div key={i}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image ? e.image : ""} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price ? e.new_price : 0}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id] ? cartItems[e.id] : 0}
                </button>
                <p>${e.new_price * cartItems[e.id] ? e.new_price * cartItems[e.id] : 0}</p>
                 <img
                  className="cartItems-remove-icon"
                  src={remove_icon? remove_icon : ""}
                  onClick={() => {
                    RemoveCart(e.id ? e.id : 0 );
                  }}
                  
                  
                /> 
              </div>
              <hr />
            </div>
          );
          
        }
        
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmont()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              
              <h3>${getTotalCartAmont()}</h3>
            </div>
          </div>
          <button>PROCCED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
          </div>
      </div>
      
    </div>
  );
}

/*
 
*/
