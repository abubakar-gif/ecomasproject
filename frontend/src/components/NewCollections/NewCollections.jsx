import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Items from "../items/Items";

export default function NewCollections() {

  const [new_collection,setNew_collection] =useState([])

  useEffect(() => {
    fetch("http://localhost:4000/newcollction")
      .then((respon) => respon.json())
      .then((data) => setNew_collection(data));
  }, [])
  return (
    <div className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Items key={i} item={item} />;
        })}
      </div>
    </div>
  );
}
