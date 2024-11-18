const { Router } = require("express");
const{Product}=require('../db/db-schema/Product-schema')


const router = Router();

router.get("/all_products", async (req, res) => {
  let products = await Product.find({});
  console.log("all products");
  res.send(products);
});

module.exports=router