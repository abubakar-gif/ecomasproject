const { Router } = require("express");
const{Product}=require('../db/db-schema/Product-schema')

const router = Router();

router.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});


module.exports=router