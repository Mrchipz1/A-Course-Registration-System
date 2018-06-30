



//defining mongoose
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//creating the user schema
UserSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    secondname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    level:{
        type:Number,
        required:true
    }
})

const user = module.exports = mongoose.model('admin',UserSchema)

//function that add user into the database

module.exports.adduser = function(user,callback){
    bcrypt.hash(user.password, 3, function(err, hash) {
        user.password = hash;
        user.save(callback)
      });
      
}

//creating a function to login the admin user
module.exports.finduser = function(email,callback){
  const query = {email:email}
  user.findOne(query,callback)
}
//function to compare password from admin datatvase

module.exports.comparepassword = function(userpassword,hash,callback){
 bcrypt.compare(userpassword,hash,(err,isMatch)=>{
     callback(null,isMatch)
 })
}