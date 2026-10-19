//Ye mai dotenv install kiya hu and want to access value of .env files

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

if(process.env.NODE_ENV !="production")
{
require('dotenv').config();
}


const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=8080;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
//require ejs-mate
const ejsmate=require("ejs-mate");
//👉 "Jab bhi koi .ejs file render ho, EJS-Mate ki extra functionality bhi use karo."
app.engine("ejs",ejsmate);
//to serve static file like image,css jo browser process nhi krta direct browser ko milta hai
app.use(express.static(path.join(__dirname,"public")));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
//require model
const Listing=require("./models/listing.js");
//require wrapAsync and ExpressError
const wrapAsync=require("./extrainfo/wrapAsync");
const ExpressError=require("./extrainfo/ExpressError");
//require model
const Review=require("./models/reviews.js");

//require express router of listing
const listingrouter=require("./routes/listing.js"); 

//require review router
const reviewRouter=require("./routes/review.js");

//require user router for authentication
const userRouter=require("./routes/user.js");

//cookies prase require
const cookieParser = require('cookie-parser')
//expresss-session require
const session =require('express-session');
//connect express-session with mongo atlas session to store data of session
const MongoStore = require("connect-mongo").default;
// connect-flash require
const flash=require("connect-flash");

//require passport
const passport=require("passport");
//require passport local for local strategy like username and passport login
const LocalStrategy=require("passport-local");
//require user schema
const User=require("./models/user.js");



//connect mongoose
const db_url=process.env.ATLASDB_URL;
main().then((result)=>
{
    console.log("connected to db");
})
.catch((err)=>
{
    console.log(err);
})
async function main(){
    await mongoose.connect(db_url);
};

//session use

//mera session ki information ab sidhe mongodb databse me save hogi
const store = MongoStore.create({
    mongoUrl: db_url,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600, //if session not change then update after 24 hr
});
//error in session
store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE", err);
});


const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "lax"
    }
};


app.use(session(sessionOptions));
app.use(flash());

//authentication
app.use(passport.initialize());
app.use(passport.session()); //connect passport to session so that user identity remember rahe so that 
//bar bar login na karne pade user ko 


// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
//serializeUser() Generates a function that is used by Passport to serialize users into the session
//deserializeUser() Generates a function that is used by Passport to deserialize users into the session
passport.deserializeUser(User.deserializeUser());
 



app.use(async (req,res,next)=>
{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.curruser=req.user;

    // Navbar search dropdown ke liye
    res.locals.searchCountries = await Listing.distinct("country");

    next();
});


//demo user 
// app.get("/demouser",async(req,res)=>
// {
//     const fackeuser = new User({
//     username: "deepak",
//     //schema me nhi hai fir bhi mera passport-local-mongoose handle kr lega
//     email: "deepak@gmail.com"
// });

//register(usern,password)
// let registereduser= await User.register(fackeuser, "123456");
// res.send(registereduser);
// });

//ab express router ko use krlo
app.use("/listings",listingrouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.get("/",(req,res)=>
{
    res.redirect("/listings");
});

//kisi bhi route se match  nhi huwa to error middleware ko call jayegi
app.all("/*splat", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});
//custom error handle middleware
app.use((err,req,res,next)=>
{
let{statusCode=500,message="something went wrong!"}=err;
//instead of printing this error we can use bootstrap to show alerts whwn error to user
// res.status(statusCode).send(message);
res.render("./listing/error.ejs",{message});
});
app.listen(port,()=>
{
    console.log("server is listening ");  
});