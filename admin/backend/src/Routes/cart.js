const { Router } = require("express");
const { route } = require("./upload-image");


const router = Router();

//meddilewar 

const feachUser = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send({
      errors: "please authenticate using valid token",
    });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({
        errors: "please authenticate using valid token",
      });
    }
  }
};

router.post("/addtocart", feachUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  console.log("added" ,req.body.itemId);
  userData.cartData[req.body.itemId] += 1;

  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("added");
});

router.post("/Removefromcart", feachUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  console.log("removed" ,req.body.itemId);
  if(userData.cartData[req.body.itemId]>0){
  userData.cartData[req.body.itemId] -= 1;

  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("removed");
  
}
});

router.post('/getcart' , feachUser , async (req,res)=>{
console.log("getCart")
let userData = await Users.findOne({ _id: req.user.id });
res.json(userData.cartData)
})

module.exports=router