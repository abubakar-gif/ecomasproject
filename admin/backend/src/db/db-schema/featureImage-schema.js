const mongoose = require("mongoose");

const featureSchema =mongoose.model("FeatureSchema",{
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
}

  
);
module.exports={featureSchema}
