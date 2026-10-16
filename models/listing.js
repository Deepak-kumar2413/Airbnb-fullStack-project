const mongoose=require("mongoose");
const Review=require("./reviews.js");
const listingSchema=new mongoose.Schema({
    title:{
       type: String,
       required:true,
    },
    description:String,
    image:{
      url:String,
      filename:String,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Review",
    }],

    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
    },
    geometry:{
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});


//Ye MongoDB me ek special index/map-like structure banata hai jo locations ko efficiently organize karta hai.
listingSchema.index({ geometry: "2dsphere" });
//GeoJSON is a format for storing geographic points and polygons. MongoDB has excellent support for geospatial queries 


//deleting middleware in mongoose it is executed after delete operation on listing
listingSchema.post("findOneAndDelete",async(listing)=>
{
   if(listing)
   {
      await Review.deleteMany({_id: {$in : listing.reviews}});
   }
})

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;