var mongoose= require("mongoose");
var productSchema= mongoose.Schema({
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

var product= mongoose.model("product",productSchema)
module.exports= product;

