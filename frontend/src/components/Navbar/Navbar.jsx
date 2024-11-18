import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../../public/looogo.png";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { Shopcontext } from "../../context/ShopContext";
import dropdown from "../Assets/nav_dropdown.png"


export const Navbar = () => {
  const [menu, setmenu] = useState("shop");

  const {getTotalcartItems } = useContext(Shopcontext);
  const menuRef = useRef()
const dropdown_toggle = (e)=>{
  menuRef.current.classList.toggle('nav-menu-visible')
  e.target.classList.toggle('open')
}

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setmenu("shop")}} > <Link style={{textDecoration:"none" , color:"#626262"}} to="/"> Shop</Link> {menu === "shop" ? <hr/>:<></>}</li>
        <li onClick={() => {setmenu("mens")}}><Link style={{textDecoration:"none" , color:"#626262"}} to="/mens"> men</Link>{menu === "mens" ? <hr/>:<></>}</li>
        <li onClick={() => {setmenu("womens")}}><Link style={{textDecoration:"none" , color:"#626262"}} to="/womens"> women</Link>{menu === "womens" ? <hr/>:<></>}</li>
        <li onClick={() => {setmenu("kids")}}><Link style={{textDecoration:"none" , color:"#626262"}} to="/kids"> kids</Link>{menu === "kids" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>:<Link  to="/login"> <button >Login</button></Link>}
      
      <Link to="/cart"> <img src={cart} alt="" /></Link>
        <div className="nav-cart-count">{getTotalcartItems()}</div>
      </div>
    </div>
  );
};
