``








//creating a schema for ouyr users to register
const mongoose = require('mongoose')
//creating bcrypt to encrypt user password
const bcrypt = require('bcrypt')
const UserSchema = mongoose.Schema({
    firstname:{
        type:String,
        required : true
    },
    secondname:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    approved:{
        type:Number,
        required:true
    
    },
    astatus:{
        type:String,
        required:true
    },
    rstatus:{
        type:String,
        required:true
    },
    level:{
        type:Number,
        required:true
    }
    
})

const User = module.exports=mongoose.model('coursereg',UserSchema)

// we create our function to find a user

module.exports.finduser = function(email,callback){
    const query = {email:email}
    User.findOne(query,callback)
}

//function to add user into the database

module.exports.adduser = function(userdetails,callback){
    bcrypt.hash(userdetails.password, 2, function(err, hash) {
        userdetails.password = hash
        userdetails.save(callback)
      });
      
    
}
//function to compare password
module.exports.comparepassword = function(userpassword,hash,callback){
    bcrypt.compare(userpassword,hash,(err,isMatch)=>{
        callback(null,isMatch)
    })
}

//creating function to retrieve from database
module.exports.retrieve = function(details,callback){
    const query = {details:details}
    User.findOne(query,callback)
}

,

//function to get all students in the database
module.exports.getstudents = function(students,callback){
    User.find(callback)
}

//functin to update approve status

module.exports.updatestatus = function(id){
    
    User.findByIdAndUpdate(id, {$set:{approved:'1',rstatus:"Registered"}},function(err,result){
        if(err) {
            throw err
        }
        else{
          console.log(result)
        }
    })
}

module.exports.updatestatus2 = function(id){
User.findByIdAndUpdate(id,{$set:{approved:'2',astatus:'Approved'}},function(err,result){
    if(err) 
    throw err
    if(result){
        console.log(result)
    }
})

}

//function to disaprove registration of user
module.exports.disaprove = function(id){
    User.findByIdAndUpdate(id,{$set:{approved:'0',astatus:'Not Approved',rstatus:'Not Registered'}}, function(err,result){
        if(err){
            throw err
        }
        if(result){
            console.log(result)
        }
    })
}
 