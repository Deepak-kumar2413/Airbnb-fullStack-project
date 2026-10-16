const mongoose=require("mongoose");
const Schema=mongoose.Schema;

//require passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose').default;

//You're free to define your User how you like.
// Passport-Local Mongoose will add a username, 
// hash and salt field to store the username, 
// the hashed password and the salt value.

//User schema for entring detail for user
const UserSchema= new Schema(
    {
        email:{
            type:String,
            required:true,
        },

    }
);

//“Passport-local-mongoose ke features mere
//  User schema ke andar laga do.”
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema); 

