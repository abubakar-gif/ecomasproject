const express = require("express");
const jwt = require("jsonwebtoken");
const { Product } = require("./db/db-schema/Product-schema");
const mongoose = require("mongoose");
const cors = require("cors");

//routers
const upload_imageRouter = require("./Routes/upload-image");
const Add_productsRouter = require("./Routes/Add-products");
const Delete_productsRouter = require("./Routes/Delete-product");
const Get_allproductsRouter = require("./Routes/Get-allproducts");
const signupRouter = require("./Routes/Signup");
const loginRouter = require("./Routes/Login");
const cartRouter = require("./Routes/cart");
const TopimageuploadRouter = require("./Routes/Top-uploadimage");
const GettopImageRouter = require("./Routes/Get_Topimage");

//dbconection
require("./db/dbconection");

const app = express();

//middlewar
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const port = 4000;

//apicreation test
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

//image storege
app.use("/", upload_imageRouter);

//addproduct
app.use("/", Add_productsRouter);

//delete
app.use("/", Delete_productsRouter);

// get all products
app.use("/", Get_allproductsRouter);

// sign up
app.use("/", signupRouter);

// user login
app.use("/", loginRouter);

//cart
app.use("/", cartRouter);

//upload top image
app.use("/", TopimageuploadRouter);

//get top image
app.use("/", GettopImageRouter);

//newcllection
app.get("/newcollction", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("new feached");
  res.send(newcollection);
});

app.get("/pupolarinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let pupolarinwomen = products.slice(0, 4);
  console.log("pupolarinwomen feached");
  res.send(pupolarinwomen);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
