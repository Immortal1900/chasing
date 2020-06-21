const express =require('express');
var router=express.Router();
var {Employee} = require('../Models/employee');
var ObjectID=require('mongoose').Types.ObjectID;
// => localhost://3000/employees/list

router.get('/:id',(req,res)=>{

    Employee.findById(req.params.id,(err, doc)=>{
        if(!err){
            res.send(doc);}
            else{
                console.log('Error in Retreving: '+JSON.stringify(err,undefined,2));
            }           
        
    });
});
router.put('/:id',(req,res)=>{
    var emp={
        name: req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true },(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Employee UPDATE:'+ JSON.stringify(err,undefined,2));
        }
    });
});


router.delete('/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Employee UPDATE:'+ JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/',(req,res)=>{
Employee.find((err,docs)=>{
    if(!err){
        res.send(docs);
    }    else{
        console.log('Error in Retriving Employee :'+ JSON.stringify(err, undefined,2));
    }
});
});
router.post('/',(req,res,)=>{
    console.log('Request body output '+ JSON.stringify(req.body));
    var emp=new Employee({
        name :req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });

  
    emp.save( (err,doc)=>{
        if(!err){ res.send(doc);}
        else{
            console.log('ERROR IN employee Save: ' +JSON.stringify(err,undefined,2));
        }
    });
});
module.exports=router;