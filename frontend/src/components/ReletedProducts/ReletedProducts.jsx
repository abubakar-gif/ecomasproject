import React from "react";
import "./ReletedProducts.css";


import data_product from "../Assets/data";
import Items from "../items/Items";

export default function ReletedProducts() {
 // console.log(data_product)
  return (
    <div className="ReletedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="releted-product-items">
     {data_product.map((item , i)=>{
      return <Items key={i} item={item}/>
     })}
      </div>
    </div>
  );
}
