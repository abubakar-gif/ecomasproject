import React, { useContext } from "react";
import { Shopcontext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/breackCrums/Breadcrums";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DiscriptionBlock from "../components/DiscriptionBlock/DiscriptionBlock";
import ReletedProducts from "../components/ReletedProducts/ReletedProducts";

export default function Product() {
  const { all_product } = useContext(Shopcontext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  console.log(product.category
  )
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBlock />
      <ReletedProducts />
    </div>
  );
}
