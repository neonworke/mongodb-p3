const express = require("express");
const productDetailsModel = require("../models/productDetailsModel");
const router = express.Router();

router.post("/add", async function (req, res) {
    console.log("req.body", req.body);
    try {
    const databaseCreationResponse = await productDetailsModel.create(req.body);
    //console.log("databaseCreationResponse", databaseCreationResponse);
    res.send({ result: "Success" });
    } catch(error) {
        console.log("error occured", error);
    }
});

router.get("/getAll", async function (req, res) {
    try{
        const detailsOfProduct = await productDetailsModel.find({}, {__v:0, _id:0});
        //console.log("data from database", detailsOfProduct);
        res.send({ result: detailsOfProduct });
    } catch {
        console.log("error occurred", error);
    }
    
});

module.exports = router;