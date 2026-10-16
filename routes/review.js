//Express Router Express.js ka feature hai jo 
// application ke related routes ko 
// separate aur organize karne ke liye use hota hai.

const express = require("express");

const router = express.Router({
    mergeParams: true
});
//require wrapAsync and ExpressError
const wrapAsync=require("../extrainfo/wrapAsync");
const ExpressError=require("../extrainfo/ExpressError");
const Listing=require("../models/listing.js");
//require model
const Review=require("../models/reviews.js");
const {validatereview,isLoggedin,authorcheck}=require("../middleware.js");


//require reviewController
const reviewController=require("../controllers/reviews.js");

//since common rotes to all path is /listings/:id/reviews so replace to 
//  (/)


// review route
//pahle check hoga kya loggedin hai then he can create review(isloggesin middleware)
router.post("/",isLoggedin,validatereview,wrapAsync(reviewController.createReview));

//delete route for review

//first authorcheck middleware chalega if satisfy then delee by user 
router.delete("/:reviewid",authorcheck,wrapAsync(reviewController.deleteReview));

module.exports=router;
