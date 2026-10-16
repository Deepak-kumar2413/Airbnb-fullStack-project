const Listing = require("../models/listing.js");
//require services of gecoding 
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});
// INDEX ROUTE 
module.exports.index=async (req, res) => {

    const alllistings = await Listing.find({});

    res.render("listing/index", { alllistings });
}

//NEW ROute wala
module.exports.renderNewForm=(req, res) => {
res.render("listing/new.ejs");
}

//EDIT
module.exports.renderEditForm=async (req, res) => {

    let { id } = req.params;

    const listing = await Listing.findById(id);
    if(!listing)
    {
        req.flash("error","Listing you requested for does not exit");
        res.redirect("/listings");
    }

    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/h_250/w_250");
    res.render("listing/edit.ejs", { listing ,originalImageUrl});
}

//SHOW
module.exports.renderShowForm=async (req, res) => {

    let { id } = req.params;
//nested populate for review 
    const listing = await Listing.findById(id)
        .populate({
            path:"reviews",
            populate:{
                path:"author",
            }
        }).populate("owner");


        //if listing not exit flash error
        if(!listing)
        {
          req.flash("error","Listing yo requested does not exit!");
          //return to listings jaha message diega
          return res.redirect("/listings");

        }
    res.render("listing/show", { listing});
};

//create
module.exports.createListing=async (req, res) => {

//response.body  contain all information of that location
//response.body.features[0].coordinate gives coordinate of that loction
  let response=await geocodingClient.forwardGeocode({
  query: req.body.location,
  limit: 1
})
  .send();
let geometry=response.body.features[0].geometry;
    //ab mera db me filename and uska url sath aayega after cloudinary
    let url=req.file.path;
    let filename=req.file.filename;
    let {
        title,
        description,
        price,
        location,
        country
    } = req.body;

    const listing1 = new Listing({
        title,
        description,
        price,
        location,
        country,
        image: {
            url: url,
            filename: filename,
        },
        //now new listing hote hi uska owner ka userid save kraha liya
        owner: req.user._id,
        geometry:geometry,
    });
   let savedlisting= await listing1.save();
    req.flash("success","New Listing Added!");

    res.redirect("/listings");
}


//update 
module.exports.updateListing=async (req, res) => {

    let { id } = req.params;
    

    // let listing= await Listing.findById(id);

    //if someone update by hopsctch or other method then dont allow
    //we use owner as middleware for checking
  let listing=  await Listing.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        location: req.body.location,
        country: req.body.country
    },
 { new: true }
);
// New location ke coordinates update karo
    const response = await geocodingClient
        .forwardGeocode({
            query: req.body.location,
            limit: 1
        })
        .send();

    if (response.body.features.length > 0) {
        listing.geometry = response.body.features[0].geometry;
    }


//yadi file exit kr araha then update kara do
if (typeof req.file !=="undefined")
{
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
}
await listing.save();
    //flash message after updation
     req.flash("success","Listing Edited!");

    res.redirect("/listings");
}



//delete route
module.exports.deleteListing=async (req, res) => {

    let { id } = req.params;

    await Listing.findByIdAndDelete(id);
     req.flash("success","Listing Deleted!");

    res.redirect("/listings");
}



module.exports.searchListings = async (req, res) => {

    const { country, location } = req.query;

    let filter = {};

    if (country) {
        filter.country = country;
    }

    if (location) {
        filter.location = location;
    }

    const alllistings = await Listing.find(filter);
//if no combination found return not found
     if (alllistings.length === 0) {
        req.flash("error", "No listing found at this location!");
        return res.redirect("/listings");
    }
res.render("listing/index.ejs", {
    alllistings
});
};