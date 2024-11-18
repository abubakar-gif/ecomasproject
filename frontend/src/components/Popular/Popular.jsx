import React, { useEffect, useState } from "react";
import "./Popular.css";

import Items from "../items/Items";

export default function Popular() {
  const [popularProducts, setPopularproducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/pupolarinwomen")
      .then((respon) => respon.json())
      .then((data) => setPopularproducts(data));
  }, [])

  return (
    <div className="Popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return <Items key={i} item={item} />;
        })}
      </div>
    </div>
  );
}
