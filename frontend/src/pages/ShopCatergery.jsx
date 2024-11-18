import React, { useContext } from "react";
import "./css/ShopCatergery.css";
import { Shopcontext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Items from "../components/items/Items";

export default function ShopCatergery({ banner, category }) {
  const { all_product } = useContext(Shopcontext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((items, i) => {
          if (category === items.category) {
            return <Items key={i} item={items} />;
            console.log(items);
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}
