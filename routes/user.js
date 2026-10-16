const express = require("express");
const router = express.Router();
//require model of users
const User=require("../models/user.js");
const wrapAsync = require("../extrainfo/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
//require usercontroller
const userController=require("../controllers/user.js");



//for signup request render to user.ejs to fill details
router.get("/signup",userController.renderSignUpForm);


//router for post request after entering details save into db
router.post("/signup",wrapAsync(userController.signup));


//for login request render to user.ejs to fill details
router.get("/login",userController.renderLoginForm);

//authenticate the user wo already signed up
//this is don by passport wich authenticate the passord using middleware
// (passport.authenticate());-->> means direct authenticate the user password
router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),
userController.login);

//logout router
router.get("/logout",userController.logout);


module.exports=router;



//summary----1

//After login, Passport stores the user's identity in the session and 
// the browser stores the session ID in a cookie.
//  On subsequent requests, the browser sends that session ID,
//  allowing the server and Passport to identify the user without 
// 
//requiring another login, as long as the cookie and server-side session
//  are still valid."

//summary------2
//I used Passport.js with Passport Local Strategy for username-password authentication. 
// I integrated it with my Mongoose User model using passport-local-mongoose,
//  which provides methods like register and authenticate and handles password
//  hashing and salting.
//  I used express-session to maintain the user's login state across requests. 
// Passport's serializeUser stores the user's identity in the session,
//  and deserializeUser retrieves the user on subsequent requests. 
// Finally, Passport makes the authenticated user available through req.user."