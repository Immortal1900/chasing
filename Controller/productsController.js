const express=require('express');
const { Products } = require('../Models/product');
var router=express.Router();

router.put('/:id',(req,res)=>{
    var product={
        pname: req.body.pname,
        category:req.body.category,
        subcategory:req.body.subcategory,
        price: req.body.price,
        serialtag: req.body.serialtag,
        description:req.body.description,
    };
    Products.findByIdAndUpdate(req.params.id,{$set:product},{new:true },(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in PRODUCT UPDATE UPDATE:'+ JSON.stringify(err,undefined,2));
        }
    });
});
router.delete('/:id',(req,res)=>{
    Products.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
            console.log("deleted");
        }
        else{
            console.log('Error in Employee UPDATE:'+ JSON.stringify(err,undefined,2));
        }
    });
});
router.post('/',(req,res)=>{
    console.log("Requeted body output"+ JSON.stringify(req.body));
    var product=new Products({
        pname: req.body.pname,
        category:req.body.category,
        subcategory:req.body.subcategory,
        price: req.body.price,
        serialtag: req.body.serialtag,
        description:req.body.description,
    });
    console.log("STARTED POSTIN");
    product.save((err,doc)=>{
        if(!err){
            
    console.log("NO ERR");
            res.send(doc);
        }
        else{
            console.log("ERROR WHILE SAVING PRODUCT detail"+ +JSON.stringify(err,undefined,2));
        }
    });

});
module.exports=router;