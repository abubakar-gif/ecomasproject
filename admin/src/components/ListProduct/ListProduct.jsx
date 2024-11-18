import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

export default function ListProduct() {
  const [allproducts, setallproducts] = useState([]);

  const feachinfo = async () => {
    await fetch("http://localhost:4000/all_products")
      .then((res) => res.json())
      .then((data) => {
        setallproducts(data);
      });
  };

  useEffect(() => {
    feachinfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id:id}),
    })
    await feachinfo()
  };

  return (
    <div className="listProduct">
      <h1>All products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className=" listproduct-allproducts">
        <hr />
        {allproducts.map((product, i) => {
          return (
            <>
              <div
                key={i}
                className="listproduct-format-main  listproduct-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img
                onClick={()=>{removeProduct(product.id)}}
                  src={cross_icon}
                  className="list-product-remove-icon"
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}
