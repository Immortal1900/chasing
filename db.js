const mongoose = require('mongoose');
const uri='mongodb+srv://himan:himan@cluster0-y8qox.mongodb.net/CrudDB?retryWrites=true&w=majority';
console.log("STARTTON SERVER CONNECION");
/*
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB Connected…")
  })
  .catch(err => console.log(err))
  mongoose.exports=mongoose;
*/



mongoose.connect('lmongodb://localhost:27017/CrudDB',{useNewUrlParser: true,
useUnifiedTopology: true},(err)=>{
if(!err) console.log('Mongodb Connected.');
else console.log('Error in DB Connecttion'+ JSON.stringify(err,undefined,2));
});
mongoose.exports=mongoose;