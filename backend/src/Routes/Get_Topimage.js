const { Router } = require("express");
const {featureSchema}=require("../db/db-schema/featureImage-schema")

const router = Router();


router.get("/top-getimage",async (req, res) => {

  try {
    const images = await featureSchema.find({});

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      erorrs: "Some error occured!",
    });
  }

});

module.exports=router