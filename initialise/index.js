const mongoose=require("mongoose");
//require data
const initData=require("./data.js");
//require model
const Listing=require("../models/listing.js");
//connect mongoose
main().then((result)=>
{
    console.log("connected to db");
})
.catch((err)=>
{
    console.log(err);
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};
console.log(initData);


async function initDB() {
    await Listing.deleteMany({}); //delete all

    const listings = initData.map((obj) => ({
        ...obj,
        owner: "6a8de365e12b41b2610f6477"
    }));

    await Listing.insertMany(listings); //insert all

    console.log("Data inserted successfully");
}

initDB();