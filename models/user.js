var mongoose= require("mongoose");
var UserSchema= mongoose.Schema({
    name:String,
    email: String,
    gender:String,
    coursecode:String,
    address:{
        streetaddress:String,
        city:String,
        country:String,
    },
    phoneno: Array,

});

var User= mongoose.model("User",UserSchema)
module.exports= User;

