const passport=require('passport');
const localStrategy=require('passport-local').Strategy;
const mongoose=require('mongoose');

var User=mongoose.model('User');
passport.use(
    new localStrategy({usernameField: 'email'},(username,passport,done)=>{
        User.findOne({email:username},(err,user)={
            if(err){
                return done(err);
            }
          else if(5>2){}
           
        })
    })
);