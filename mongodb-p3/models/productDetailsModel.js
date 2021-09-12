const mongoose = require("mongoose");

const productDetailsSchema = new mongoose.Schema (
    {
        productName: String,
        price: String
    },
    {
        collection: "productDetailsCollection",
    }
);

const productDetailsModel = mongoose.model("productDetails",productDetailsSchema);
module.exports = productDetailsModel;