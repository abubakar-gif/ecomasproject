const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://abubakarandullahi321:daddychill321@cluster0.gq8l2.mongodb.net/e-comas"
  )
  .then((data) => console.log("dbconect"))
  .catch((error) => console.log("error"));

