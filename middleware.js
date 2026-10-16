const Listing = require("./models/listing.js");
//require model
const Review=require("./models/reviews.js");
const ExpressError = require("./extrainfo/ExpressError");
//require from chema.js having joi
const { listingSchema,reviewSchema} = require("./schema.js");


//isloggegin middleware
module.exports.isLoggedin=(req,res,next)=>
{
   // console.log(req.path,req.originalUrl);
   //req.path se after logged in kwn se path pe redirect hona chate hai
   //req.originalUrl original url path here /listing/new after clicking on add new listing jana chate hai
if(!req.isAuthenticated())
{
    //save the url path before logged in ans use it after login in login router
  req.session.redirectUrl=req.originalUrl;
  req.flash("error","Sorry,you must be logged in to add listings!");
  return  res.redirect("/login");
}
next();
};

//saved my urlpath
module.exports.saveRedirectUrl=(req,res,next)=>
{
    if(req.session.redirectUrl)
    {
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

//check owner for edit,update,delete
module.exports.ownercheck=async(req,res,next)=>
{
    let {id}=req.params;
    let listing= await Listing.findById(id);
     if(!listing.owner._id.equals(res.locals.curruser._id)){
        req.flash("error","you don't have permission!");
       return res.redirect(`/listings/${id}`);
    }
    next();
}


//validation middleware
module.exports. validationschema = (req, res, next) => {

    let { error } = listingSchema.validate(req.body);

    if (error) {
        throw new ExpressError(400, error.details[0].message);
    }

    next();
};
//middleware for review schema validation
module.exports.validatereview=(req,res,next)=>
{
    let{error}=reviewSchema.validate(req.body);
    if(error){
throw new ExpressError (403,"error!");
    }else{
        next();
    }
};


module.exports.authorcheck=async(req,res,next)=>
{
    let {id,reviewid}=req.params;
    let review= await Review.findById(reviewid);
     if(!review.author._id.equals(res.locals.curruser._id)){
        req.flash("error","you don't have permission!");
       return res.redirect(`/listings/${id}`);
    }
    next();
}