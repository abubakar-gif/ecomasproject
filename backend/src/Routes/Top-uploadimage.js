const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const { featureSchema } = require("../db/db-schema/featureImage-schema");
const port = 4000;

const router = Router();

const storege = multer.diskStorage({
  destination: "./public/top",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storege });

router.post("/top-uploadimage", upload.single("image"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/top/${req.file.filename}`,
  });
});

router.post("/savetopimage", async (req, res) => {
  const product = new featureSchema({
    image: req.body.image,
  });
  console.log(product);
  await product.save();
  console.log("saved");
  res.json({
    success: true,
    image_url: req.body.image,
  });
});

router.post("/removeimage", async (req, res) => {
  await featureSchema.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.json({
    success: true,
    image_url: req.body.image,
  });
});

module.exports = router;
