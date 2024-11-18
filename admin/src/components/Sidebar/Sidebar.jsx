import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/product_cart.svg";
import list_product_icon from "../../assets/product_list_icon.svg";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Dashboard</p>
        </div>
      </Link>

      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Product list</p>
        </div>
      </Link>
    </div>
  );
}
