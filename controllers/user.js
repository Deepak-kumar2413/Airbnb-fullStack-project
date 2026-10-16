//require model of users
const User=require("../models/user.js");

//signup form
module.exports.renderSignUpForm=(rq,res)=>
{
   res.render("users/signup.ejs"); 
}

//login form
module.exports.renderLoginForm=(rq,res)=>
{
   res.render("users/login.ejs"); 
}
//signup

module.exports.signup=async(req,res,next)=>
{
    try{
    //mere username and email aagaya
   let {username,email,password}=req.body;
   const newUser=new User ({
    email,username
   });
   //save into db using passport-local-mongoose register
const registereduser= await User.register(newUser,password);
//we want ki signup hote hi login kara do
req.login(registereduser,(err) => {
    if (err) {
        return next(err);
    }

    //flash kara do
req.flash("success","Registered! Welcom to Wanderlust");
res.redirect("/listings");
});

//jab signup to direct login nhi tha

// //flash kara do
// req.flash("success","Registered! Welcom to Wanderlust");
// res.redirect("/listings");
    }
    catch(e)
    {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

//login

module.exports.login=async(req,res)=>
{
   
       req.flash("success","Login successful!");
    //jo mai req.session.redirectUrl me save kiya tah ab loggin successfull 
    // ho gaya then redirect kara do usi path pe

    // res.redirect(req.session.redirectUrl);
    //  ->>>this create problem
    //problem is that jb login authentication trur hoga thne session reset
    //hota hai so mera saved urlpath delet ho jata hai so
    // we use res.locals to save  


    //locals saved urlpath which is saved in middleware
    let redirectUrl=res.locals.redirectUrl || "/listings";
    //isliye kiya because jb mai direct home page se login karunga to 
    //idloggedin wala middleware chalega nhi then local ke ander mera path
    //url save hoga nhi then us case me "/listings"  pe redirect kra do
    res.redirect(redirectUrl);
}




//logout
module.exports.logout=(req,res)=>
{
    //req.logout automatically remove current user from session 
    req.logout((err) => {
    if (err) {
        return next(err);
    }
    req.flash("error","you are logged out");
    res.redirect("/listings");
});
}