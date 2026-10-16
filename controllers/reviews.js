//require model
const Listing=require("../models/listing.js");
//require model
const Review=require("../models/reviews.js");


//create route for review
module.exports.createReview=async(req,res)=>
{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    const review = new Review({
    comment: req.body.review.comment,
    rating: req.body.review.rating,
    //store author of every review
    author:req.user._id,
});
await review.save();
 listing.reviews.push(review._id);

    await listing.save();
     req.flash("success"," New Review added!");

    res.redirect(`/listings/${id}`);


}

//delete route for review

module.exports.deleteReview=async (req,res)=>
{
    let{id,reviewid}=req.params;

    //listing se delet krna
    await Listing.findByIdAndUpdate(id, {
    $pull: {
        reviews: reviewid
    }
});
//reviews se delete krna
    await Review.findByIdAndDelete(reviewid);
 req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`);
}