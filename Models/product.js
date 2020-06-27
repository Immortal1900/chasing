const mongoose = require('mongoose');
var Products=mongoose.model('products',{
    pname: {type:String},
    category: {type:String},
    subcategory:{type:String},
    price: {type:Number},
    serialtag: {type:String},
    description:{type:String},
})
module.exports={Products:Products};