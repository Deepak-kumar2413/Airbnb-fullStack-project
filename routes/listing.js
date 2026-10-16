const express = require("express");
const router = express.Router();


const wrapAsync = require("../extrainfo/wrapAsync");
const ExpressError = require("../extrainfo/ExpressError");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
//require middleware.js for authentication
const {isLoggedin,ownercheck,validationschema}=require("../middleware.js");
//require controller
const listingController=require("../controllers/listing.js");


//require multer
const multer  = require('multer') //handle multipart-data to parse
const{storage}=require("../cloudinary.js");
const upload = multer({ storage }) //form ke data se file ko nikal ke upload folder me save kr dega









//since common rotes to all path is /listingsso replace to 
//  (/)


//router.route("path")->>>>
//Express ka method hai jisse same path par multiple HTTP methods ko ek saath likh sakte ho


router.route("/")
//index route
.get(wrapAsync(listingController.index))
//create route
.post(isLoggedin, 
    // validationschema,
    upload.single("listing[image]"),
    wrapAsync(listingController.createListing));

 

// // INDEX
// router.get("/",wrapAsync(listingController.index));


// NEW ROUTE
router.get("/new",isLoggedin,listingController.renderNewForm);
//adding method of passport for allowing to add listing or not
//maine middleware.js file me likha taki sb me apply ho sake


// LOCATION ROUTE
router.get(
    "/locations/:country",
    wrapAsync(async (req, res) => {

        const { country } = req.params;

        const locations = await Listing.distinct("location", {
            country: country
        });

        res.json(locations);
    })
);

// SEARCH ROUTE
router.get(
    "/search",
    wrapAsync(listingController.searchListings)
);


router.route("/:id")
//show route
.get(wrapAsync(listingController.renderShowForm))
//update route
.put(isLoggedin,
    ownercheck, 
    validationschema,
     upload.single("listing[image]"),
     wrapAsync(listingController.updateListing))
.delete(isLoggedin,ownercheck, wrapAsync(listingController.deleteListing));

 

// EDIT
router.get("/:id/edit",isLoggedin,ownercheck, wrapAsync(listingController.renderEditForm)); 


// // SHOW
// router.get("/:id", wrapAsync(listingController.renderShowForm));


// // CREATE
// router.post("/",isLoggedin, validationschema, wrapAsync(listingController.createListing));


// // UPDATE
// router.put("/:id",isLoggedin,ownercheck, validationschema, wrapAsync(listingController.updateListing));


// // DELETE
// router.delete("/:id",isLoggedin,ownercheck, wrapAsync(listingController.deleteListing));


module.exports = router;