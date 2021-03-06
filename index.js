const express= require('express');
const bodyParser= require('body-parser');
const {mongoose} = require('./db.js');

const cors=require('cors');
var employeeController= require('./Controller/employeeController');
var productsController=require('./Controller/productsController');
var app=express();
app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:4200"}));
app.listen(3000, ()=> console.log('Sever started at port : 3000'));
app.use('/employees',employeeController);
app.use('/products',productsController);
